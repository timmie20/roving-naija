import React from "react"
import Image from "next/image"
import { Post } from "@/types/types"
import { Title } from "./shared/Title"
import { format } from "date-fns"

export default function Trending({ posts }: { posts: Post[] }) {
	return (
		<div className="h-full w-fit flex-none shrink-0 lg:max-w-[350px]">
			<div className="inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins font-medium">Trending</span>
				<Image src="/assets/icons/trend-up.svg" alt="trending icon" width={24} height={24} />
			</div>

			<div className="space-y-4 border border-neutral-200 p-6">
				{posts
					.slice(4, 7) // Limit to the 3 posts after the first one
					.map((trend) => (
						<TrendingNewsPreview key={trend.id} trend={trend} />
					))}

				{/* <div className="flex items-center justify-center">
					<button className="rounded-[8px] border-[1px] border-primary-normal p-1 px-20 text-xs">
						More
					</button>
				</div> */}
			</div>
		</div>
	)
}

function TrendingNewsPreview({ trend }: { trend: Post }) {
	return (
		<>
			<div className="flex h-full w-full items-start gap-3 border-t-[1px] border-primary-normal pt-4 first:border-none first:pt-0">
				<div className="flex flex-shrink-0 flex-col">
					<div className="relative size-[100px]">
						<Image
							src={trend.image[0]}
							alt={trend.title}
							fill
							priority
							className="object-fit"
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
							<i> {format(trend.created_at, "do MMMM yyyy")}</i>
						</span>
					</div>
				</div>

				<Title intent="highlight" size="sm" slug={trend.id}>
					{trend.title}
				</Title>
			</div>
		</>
	)
}
