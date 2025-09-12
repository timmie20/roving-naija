import React from "react"
import { NewsCardBase } from "./NewsCardBase"
import { Post } from "@/types/types"

export default function LatestNews({ posts }: { posts: Post[] }) {
	return (
		<div className="space-y-3">
			<span className="font-base font-Poppins font-medium">Latest News</span>

			<div className="grid grid-cols-2 gap-2 px-3 lg:grid-cols-3 lg:px-0">
				{posts
					.slice(0, 12) // Limit to the first 12 posts
					.map((post) => (
						<NewsCardBase key={post?.id} post={post} />
					))}
			</div>
		</div>
	)
}
