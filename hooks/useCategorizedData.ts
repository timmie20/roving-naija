import React from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchAllData } from "@/queries/posts"
import { Category, Post } from "@/types/types"

export const useCategorizedData = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["allData"],
		queryFn: fetchAllData,
		staleTime: 2 * 60 * 1000, // Optional: cache for 5 mins
	})

	const {
		prioritized,
		nonPrioritized,
		postsByCategory,
		gossip,
		prioritizedPost,
		regulars,
		videos,
	} = React.useMemo(() => {
		const prioritized: Category[] = []
		const nonPrioritized: Category[] = []
		const postsByCategory: Record<string, Post[]> = {}
		const prioritizedPost: Post[] = []
		const regulars: Post[] = []

		let gossip: Category | null = null

		const categories = data?.categories.data || []
		const posts = data?.posts.data || []
		const videos = data?.videos.data || []

		for (const category of categories) {
			if (category.name === "Gossip of the Town") {
				gossip = category
				continue
			}

			if (category.priority === 1) {
				prioritized.push(category)
			} else {
				nonPrioritized.push(category)
			}
		}

		for (const post of posts) {
			const categoryName = post.category_name
			if (!postsByCategory[categoryName]) {
				postsByCategory[categoryName] = []
			}
			postsByCategory[categoryName].push(post)

			if (post.priority === 1) {
				prioritizedPost.push(post)
			} else {
				regulars.push(post)
			}
		}

		return {
			prioritized,
			nonPrioritized,
			postsByCategory,
			gossip,
			prioritizedPost,
			regulars,
			videos,
		}
	}, [data])

	return {
		isLoading,
		isError,
		error,
		prioritized,
		nonPrioritized,
		postsByCategory,
		gossip,
		prioritizedPost,
		regulars,
		videos,
	}
}
