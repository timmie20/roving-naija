"use client"
import { Post } from "@/queries/posts"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

export default function LatestNews({ posts }: { posts: Post[] }) {
	return (
		<>
			{posts?.length ? (
				posts
					.filter((post) => post.priority === 1)
					.map((post) => <LatestNewsPreview key={post.id} post={post} />)
			) : (
				<div>No posts available</div>
			)}
		</>
	)
}

export function LatestNewsPreview({ post }: { post: Post }) {
	const router = useRouter()
	return (
		<div className="flex-1">
			<div className="relative inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins font-medium">Latest News</span>
				<img src="/assets/icons/fire.svg" />
			</div>
			<div className="relative h-[180px] w-full sm:h-[360px]">
				<Image src="/assets/images/Frame 381.png" alt="Latest news image" fill priority />
			</div>
			<div className="p-4 shadow-md">
				<h3
					className="links line-clamp-2 text-wrap text-base font-bold text-app-dark md:line-clamp-none md:text-3xl"
					onClick={() => router.push(`/${post.title}`)}>
					{post.title}
				</h3>

				<p className="mt-4 line-clamp-3 text-sm text-gray-600">{post.content}</p>

				<div className="mt-4 flex items-center justify-between">
					<aside className="flex items-center gap-3">
						<i>
							<small className="text-[8px] sm:text-xs">By Mark Obidiegwu</small>
						</i>
						<i>
							<small className="text-[8px] sm:text-xs">20 November 2024 .</small>
						</i>
					</aside>

					<aside className="hidden items-center gap-1 md:inline-flex">
						{Array.from({ length: 4 }).map((_, i) => (
							<span className="size-4 rounded-full bg-primary-snow" key={i}></span>
						))}
					</aside>
				</div>
			</div>
		</div>
	)
}
