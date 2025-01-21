import React from "react"
import Image from "next/image"
import { TrendingNews } from "@/types/types"

export default function Trending() {
	const trendingObj = [
		{
			id: 1,
			imgUrl: "/assets/images/headshot.jpg",
			headline: "Tinubu retains Timi as petroleum minister of Nigeria despite his...",
			time: "2 hours ago",
		},
		{
			id: 2,
			imgUrl: "/assets/images/headshot.jpg",
			headline: "Favour Ezeh wins polls, becoming the first female governor in Nigeria",
			time: "6 hours ago",
		},
		{
			id: 3,
			imgUrl: "/assets/images/headshot.jpg",
			headline: "Minister of women affairs gift 200 women Christmas items.",
			time: "12 hours ago",
		},
	]
	return (
		<div className="h-full w-fit flex-none lg:max-w-[350px]">
			<div className="inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins font-medium">Trending</span>
				<img src="/assets/icons/trend-up.svg" />
			</div>

			<div className="space-y-4 border border-neutral-200 p-6">
				{trendingObj.map((trend: TrendingNews) => (
					<TrendingNewsPreview trend={trend} key={trend.id} />
				))}

				<div className="flex items-center justify-center">
					<button className="rounded-[8px] border-[1px] border-primary-normal p-1 px-20 text-xs">
						More
					</button>
				</div>
			</div>
		</div>
	)
}

function TrendingNewsPreview({ trend }: { trend: TrendingNews }) {
	return (
		<>
			<div className="flex w-full items-start gap-3 border-t-[1px] border-primary-normal pt-4 first:border-none first:pt-0">
				<div className="flex flex-shrink-0 flex-col">
					<Image
						src={trend.imgUrl}
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
							<i>{trend.time}</i>
						</span>
					</div>
				</div>

				<h4 className="line-clamp-4 text-balance text-left font-Poppins text-base font-normal hover:cursor-pointer hover:underline hover:decoration-2">
					{trend.headline}{" "}
				</h4>
			</div>
		</>
	)
}
