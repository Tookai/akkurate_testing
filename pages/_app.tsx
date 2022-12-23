import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { theme } from '../theme/chakra'

function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchOnMount: false,
				refetchOnReconnect: false,
				staleTime: 1000 * 60 * 15, // 15 mins (time before the data is considered old & needs to be refetched)
				cacheTime: 1000 * 60 * 60 * 1, // 1 hour (time until inactive queries will be removed from the cache)
			},
		},
	})

	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</ChakraProvider>
	)
}

export default MyApp
