import {
  Link,
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Spinner } from "./-components/spinner";
import type { trpcQueryUtils } from "../router";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Header } from "@/components/layout/header";
import { StarknetProvider } from "@/providers/starknet";

export interface RouterAppContext {
  trpcQueryUtils: typeof trpcQueryUtils;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
});

function RootComponent() {
  const isFetching = useRouterState({ select: (s) => s.isLoading });

  return (
    <>
      <div className={`min-h-screen flex flex-col`}>
        <StarknetProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <Outlet />
            {/*<div
            className={`text-3xl duration-300 delay-0 opacity-0 ${
              isFetching ? ` duration-1000 opacity-40` : ''
            }`}
          >
            <Spinner />
          </div>*/}
          </SidebarInset>
        </SidebarProvider>
        </StarknetProvider>
      </div>
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
    </>
  );
}
