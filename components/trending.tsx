import React from "react"
import Image from "next/image"
import { Post } from "@/queries/posts"
import { timeAgo } from "@/helpers/TimeFormater"

export default function Trending({ posts }: { posts: Post[] }) {
	return (
		<div className="h-full w-fit flex-none lg:max-w-[350px]">
			<div className="inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins font-medium">Trending</span>
				<img src="/assets/icons/trend-up.svg" />
			</div>

			<div className="space-y-4 border border-neutral-200 p-6">
				{posts
					?.filter((post) => post.priority === 0) // Filter posts with priority === 0
					.slice(0, 3) // Limit to the first 4 posts
					.map((trend) => <TrendingNewsPreview key={trend.id} trend={trend} />)}

				<div className="flex items-center justify-center">
					<button className="rounded-[8px] border-[1px] border-primary-normal p-1 px-20 text-xs">
						More
					</button>
				</div>
			</div>
		</div>
	)
}

function TrendingNewsPreview({ trend }: { trend: Post }) {
	return (
		<>
			<div className="flex h-full w-full items-start gap-3 border-t-[1px] border-primary-normal pt-4 first:border-none first:pt-0">
				<div className="flex flex-shrink-0 flex-col">
					<Image
						src="/assets/images/headshot.jpg"
						alt="Trending preview image"
						width={108}
						height={90}
						priority
					/>
					<div className="mt-1.5 inline-flex items-center gap-1 text-primary-normal">
						<span>
							<img
								src="/assets/icons/clock.svg"
								alt="Clock icon"
								className="text-primary-normal"
							/>
						</span>
						<span className="text-[12px]">
							<i>{timeAgo(trend.created_at)}</i>
						</span>
					</div>
				</div>

				<h4 className="line-clamp-4 text-balance text-left font-Poppins text-[15px] font-normal hover:cursor-pointer hover:underline hover:decoration-2">
					{trend.title}{" "}
				</h4>
			</div>
		</>
	)
}
