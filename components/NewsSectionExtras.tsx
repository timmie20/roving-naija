"use client"
import React from "react"
import Image from "next/image"
import { Post } from "@/types/types"
import { Title } from "./shared/Title"

type ExtraProps = {
	posts: Post[]
}

export default function NewsSectionExtras({ posts }: ExtraProps) {
	if (!posts || posts.length === 0) return null // ✅ don't render anything

	return (
		<div>
			{posts[0]?.image?.[0] && (
				<div>
					<h1 className="text-center font-Poppins text-2xl font-semibold">
						{posts[0].category_name}
					</h1>

					<div className="relative my-5 h-[208px] w-full">
						<Image
							src={posts[0].image[0]}
							alt={`Image for ${posts[0]?.title || "news item"}`}
							fill
							priority
							className="rounded object-cover"
						/>
					</div>
				</div>
			)}
			<div className="space-y-4">
				{posts.map((post) => (
					<Title key={post.id} slug={post.id} intent="highlight" size="sm">
						{post.title}
					</Title>
				))}
			</div>
		</div>
	)
}
