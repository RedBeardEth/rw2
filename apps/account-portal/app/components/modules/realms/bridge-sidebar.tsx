import { EthereumConnect } from "@/components/layout/ethereum-connect";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import type { Row, RowSelectionState } from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";
import { useWriteDepositRealms } from "@/hooks/bridge/useWriteDepositRealms";
import { useToast } from "@/hooks/use-toast";
import { useAccount as useL1Account } from "wagmi";
import { useAccount } from "@starknet-react/core";
import { trpc } from "@/router";

import { useMemo } from "react";
import useERC721Approval from "@/hooks/token/L1/useERC721Approval";
import { useBridgeL2Realms } from "@/hooks/bridge/useBridgeL2Realms";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import BridgeTransactionHistory from "./bridge-tx";
import type { BridgeRealm } from "@/types/ark";

interface BridgeSidebarProps {
  selectedRows: Row<BridgeRealm>[];
  selectedAsset: string;
  setRowSelection: (rowSelection: RowSelectionState) => void;
}

const BridgeSidebar: React.FC<BridgeSidebarProps> = ({
  selectedRows,
  selectedAsset,
  setRowSelection,
}) => {
  const { address: l1Address } = useL1Account();
  const { address: l2Address } = useAccount();
  const { toast } = useToast();

  const bridgeTxsQuery = trpc.bridgeTransactions.useQuery(
    {
      l1Account: l1Address?.toLowerCase(),
      l2Account: l2Address,
    },
    { enabled: !!l1Address || !!l2Address, refetchInterval: 10000 }
  );
  const bridgeTxs = bridgeTxsQuery.data ?? [];

  const { writeAsync: depositRealms, isPending: isDepositPending } =
    useWriteDepositRealms({
      onSuccess: () => {
        toast({
          title: "Initating Realms Bridge to Starknet",
          description: `Realms will appear in your L2 wallet in a few minutes`,
        });
      },
    });

  const tokenIds: string[] = useMemo(
    () => selectedRows.map((row) => row.getValue("token_id")),
    [selectedRows]
  );

  const {
    isApprovedForAll,
    approveForAll,
    approveForAllLoading,
    isPending: isApproveForAllPending,
  } = useERC721Approval();

  const { initiateWithdraw, isPending: isWithdrawPending } = useBridgeL2Realms({
    selectedTokenIds: tokenIds,
  });

  const onBridge = async () => {
    let hash: string | undefined;
    if (selectedAsset === "Ethereum") {
      if (!l2Address) throw new Error("Missing L2 Address");
      if (!isApprovedForAll) {
        await approveForAll();
      }
      hash = await depositRealms({
        tokenIds: tokenIds.map((id) => BigInt(id)),
        l2Address: l2Address,
      });
    } else {
      hash = (await initiateWithdraw()).transaction_hash;
    }
    if (hash) {
      toast({
        title: "Bridge Realms",
        description:
          selectedAsset === "Ethereum"
            ? `${selectedRows.length} Realms will be appear in your L2 wallet in a few minutes`
            : `${selectedRows.length} Realms will require a transction in ~6 hours to finalize your withdrawal`,
      });
      setRowSelection({});
    }
  };

  return (
    <Sidebar
      side="right"
      variant="inset"
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
    >
      <div className="flex text-sm items-center justify-end gap-2">
        Ethereum Wallet:
        <EthereumConnect />
      </div>
      <SidebarSeparator className="mx-0 mt-2" />
      <SidebarHeader>
        <div className="text-xl border-b pb-2">
          Bridging {selectedRows.length} Realms to
          {selectedAsset === "Ethereum" ? " Starknet" : " Ethereum"}
        </div>
        <SidebarGroup>
          <div className="flex gap-2 mb-4 flex-wrap">
            {selectedRows.map((row) => (
              <span
                className="border text-sm rounded p-1"
                key={row.getValue("token_id")}
              >
                #{row.getValue("token_id")}
              </span>
            ))}
          </div>
          {selectedAsset === "Ethereum" && !isApprovedForAll ? (
            <Button
              disabled={approveForAllLoading || isApproveForAllPending}
              className="w-full"
              onClick={onBridge}
            >
              {isApproveForAllPending ? "Approving" : `Approve Bridge`}
            </Button>
          ) : (
            <Button
              disabled={
                !selectedRows.length ||
                isDepositPending ||
                !l2Address ||
                isWithdrawPending
              }
              className="w-full"
              onClick={onBridge}
            >
              {!l2Address
                ? "Connect Starknet"
                : !selectedRows.length
                  ? "Select Realms"
                  : `Bridge`}
            </Button>
          )}
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarSeparator className="mx-0 mt-4" />

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroupLabel
            asChild
            className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <CollapsibleTrigger className="bg-sidebar-accent h-10">
              Transaction History
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <BridgeTransactionHistory transactions={bridgeTxs} />
            </SidebarGroupContent>
          </CollapsibleContent>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
};

export default BridgeSidebar;
