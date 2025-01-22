"use client"
import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function QueryProvider({ children }: { children: React.ReactNode }) {
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 200 * 1000,
						// refetchInterval: 200 * 1000,
					},
				},
			})
	)
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
