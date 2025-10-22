import React from "react"
import Image from "next/image"
import { Post } from "@/types/types"
import { timeAgo } from "@/helpers/TimeFormater"
import { Title } from "./shared/Title"
import { format } from "date-fns"

export default function NewsCardLg({ post }: { post: Post }) {
	return (
		<div>
			<div className="relative h-[200px] w-full lg:h-[360px]">
				<Image
					src={post?.image[0]}
					alt={`image of ${post?.title}`}
					fill
					priority
					className="object-fit"
				/>
			</div>
			<div className="flex h-[86px] flex-col justify-between border border-[#959595] p-4 lg:h-[132px]">
				<Title slug={post?.id} size="lg">
					{post?.title} hello
				</Title>
				<div className="flex items-center justify-between">
					<aside className="flex items-center gap-3">
						<i>
							<small className="text-[8px] sm:text-xs">Roving Naija</small>
						</i>
						<span className="flex items-center gap-1">
							{/* <img src="/assets/icons/clock.svg" alt="Clock icon" /> */}
							<i>
								<small className="text-[8px] sm:text-xs">
									{" "}
									{post.date ? format(post?.date, "do MMMM yyyy") : timeAgo(post.created_at)}
								</small>
							</i>
						</span>
					</aside>
				</div>
			</div>
		</div>
	)
}
