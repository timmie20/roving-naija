import { useQuery } from "@tanstack/react-query"
import { getPostByCategory } from "@/queries/posts"

export const usePosts = (slug: string) => {
	return useQuery({
		queryKey: ["posts", slug],
		queryFn: async () => {
			const response = await getPostByCategory(slug)
			return response
		},
		enabled: !!slug, // avoid running if slug is empty
	})
}
