import { useStarknetWallet } from "@/hooks/use-starknet-wallet";
import { getConnectorIcon } from "@/utils/connectWallet";
import { ArrowDownIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const StarknetWalletButton = () => {
  const { lastConnector, openStarknetKitModal, connectWallet } =
    useStarknetWallet();

  return (
    <>
      <Button
        onClick={
          lastConnector
            ? () => connectWallet(lastConnector)
            : () => openStarknetKitModal()
        }
        className="rounded px-2.5"
      >
        <div className="flex items-center">
          {lastConnector ? (
            <img className="pr-2" src={getConnectorIcon(lastConnector.id)} />
          ) : null}
          <p className="mx-auto">Connect wallet</p>
          {lastConnector ? (
            <>
              <Separator orientation="vertical" className="ml-3 mr-1.5 h-6" />

              <div
                className="hover:bg-background/20 p-1"
                onClick={async (e) => {
                  await openStarknetKitModal();
                  e.stopPropagation();
                }}
              >
                <ArrowDownIcon width="18" />
              </div>
            </>
          ) : null}
        </div>
      </Button>
    </>
  );
};
