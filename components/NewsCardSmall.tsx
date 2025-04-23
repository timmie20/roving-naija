import React from "react"
import Image from "next/image"
import { Post } from "@/types/types"
import { timeAgo } from "@/helpers/TimeFormater"
import { Title } from "./shared/Title"

export default function NewsCardSmall({ post }: { post: Post }) {
	return (
		<div className="flex w-fit items-start justify-between gap-3 pt-4">
			<div className="flex flex-shrink-0 flex-col">
				<div className="relative h-[90px] w-[108px] shrink-0">
					<Image
						src={post?.image[0]}
						alt={post?.title}
						className="object-cover"
						fill
						priority
					/>
				</div>
				<div className="mt-1.5 inline-flex items-center gap-1 text-primary-normal">
					<span>
						{/* <img
							src="/assets/icons/clock.svg"
							alt="Clock icon"
							className="text-primary-normal"
						/> */}
					</span>
					<span className="text-[12px]">
						<i>{timeAgo(post.created_at)}</i>
					</span>
				</div>
			</div>

			<Title slug={post.id} size="sm">
				{post.title}
			</Title>
		</div>
	)
}
