"use client";

import {ReactNode} from "react";
import {QueryClient, QueryClientProvider} from "react-query";

interface RQProviderProps {
  children: ReactNode;
}
export const queryClient = new QueryClient({
  // queryCache,
  defaultOptions: {
    queries: {
      staleTime: Infinity, // queries will never be stale
      refetchOnWindowFocus: true, // refetch when query is stale
      retry: 3, //
      // gcTime: 1000 * 60 * 60 * 24, //24h
    },
  },
});

function RQProvider({children}: RQProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default RQProvider;
