import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { AppRouter } from '@cook/trpc-server/routers'

export const trpc = (token: string) => createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
          url: process.env.NEXT_PUBLIC_API_URL!,
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: 'include',
            })
          },
          /*async headers() {
            return {
              authorization: token ? `Bearer ${token}` : '',
            };
          },*/
        }),
      ],
  })