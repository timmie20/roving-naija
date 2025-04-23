"use client"
import { Post } from "@/types/types"
import Image from "next/image"
import React from "react"
import { Title } from "./shared/Title"
import { format } from "date-fns"

export function TopNewsPreview({ post }: { post: Post }) {
	return (
		<>
			<div className="relative h-[180px] w-full sm:h-[360px]">
				<Image src={post.image[0]} alt={post.title} fill priority className="object-cover" />
			</div>

			<div className="border-x-[1px] border-b-[1px] border-app-dark p-4 shadow-md">
				<Title slug={post.id} size="lg">
					{post.title}
				</Title>

				<p className="mt-4 line-clamp-2 text-sm text-gray-600">{post.content}</p>

				<div className="mt-4 flex items-center justify-between">
					<aside className="flex items-center gap-3">
						{/* <i>
							<small className="text-[8px] sm:text-xs">By Mark Obidiegwu</small>
						</i> */}
						<i>
							<small className="text-[8px] sm:text-xs">
								{format(post.created_at, "do MMMM yyyy")}
							</small>
						</i>
					</aside>

					{/* <aside className="hidden items-center gap-1 md:inline-flex">
						{Array.from({ length: 4 }).map((_, i) => (
							<span className="size-4 rounded-full bg-primary-snow" key={i}></span>
						))}
					</aside> */}
				</div>
			</div>
		</>
	)
}
