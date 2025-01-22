import React from "react"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { fetchAllData } from "@/queries/posts"
import { Home } from "@/features/home"

export default async function page() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({ queryKey: ["allData"], queryFn: fetchAllData })
	return (
		<>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Home />
			</HydrationBoundary>
		</>
	)
}
