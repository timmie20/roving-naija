"use client"
import React from "react"
import Image from "next/image"
import { Post } from "@/types/types"
import { Title } from "./shared/Title"

type ExtraProps = {
	posts: Post[]
}

export default function NewsSectionExtras({ posts }: ExtraProps) {
	// const mainImage = posts[0]?.image?.[0] // You can use a fallback here

	return (
		<div className="space-y-3">
			{posts?.[0]?.image?.[0] && (
				<div className="relative h-[208px] w-full">
					<Image
						src={posts[0].image[0]}
						alt={`Image for ${posts[0]?.title || "news item"}`}
						fill
						priority
						className="rounded object-cover"
					/>
				</div>
			)}

			{posts?.map((post) => (
				<div className="space-y-4" key={post.id}>
					<Title slug={post.id} intent="highlight">
						{post.title}
					</Title>
				</div>
			))}
		</div>
	)
}
