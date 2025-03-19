import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '@cook/trpc-server/routers'

export const trpcClient = createTRPCReact<AppRouter>()