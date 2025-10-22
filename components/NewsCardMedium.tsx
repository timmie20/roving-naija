import React from "react"
import { Post } from "@/types/types"
import Image from "next/image"
import { Title } from "./shared/Title"
import { format } from "date-fns"
import { timeAgo } from "@/helpers/TimeFormater"

export default function NewsCardMedium({ post }: { post: Post }) {
	return (
		<div className="flex-1 overflow-hidden bg-white shadow-md">
			<div className="relative h-[200px] w-full">
				<Image
					src={post.image[0]}
					alt={`image of ${post.title}`}
					className="object-cover"
					fill
					priority
				/>
			</div>
			<div className="p-4">
				<Title slug={post.id}>{post.title}</Title>
				<p className="mb-4 line-clamp-3 text-[14px] text-gray-700">{post.content}</p>
				<div className="flex items-center text-sm text-gray-500">
					<i className="far fa-clock mr-2"></i>
					<span>
						{post.date ? format(post?.date, "do MMMM yyyy") : timeAgo(post.created_at)}
					</span>
				</div>
			</div>
		</div>
	)
}
