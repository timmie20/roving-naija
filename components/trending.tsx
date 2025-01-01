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
		<div className="">
			<div className="relative inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins font-medium">Trending</span>
				<img src="/assets/icons/trend-up.svg" />
			</div>

			<div className="space-y-4 border-[1px] border-neutral-200 py-6">
				{trendingObj.map((trend: TrendingNews) => (
					<TrendingNewsPreview trend={trend} key={trend.id} />
				))}

				<div className="flex items-center justify-center">
					<button className="w=full rounded-[8px] border-[1px] border-primary-normal p-1 px-20 text-xs">
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
			<div className="mx-auto w-[70%] border-t-[1px] border-primary-normal pt-4 first:border-none first:pt-0">
				<div className="flex h-fit items-center gap-3">
					<Image
						src={trend.imgUrl}
						alt="Trending preview image"
						width={90}
						height={90}
						priority
					/>
					<h4 className="line-clamp-4 text-balance font-Poppins font-normal decoration-inherit hover:cursor-pointer hover:underline hover:decoration-2">
						{trend.headline}{" "}
					</h4>
				</div>

				<div className="mt-2 inline-flex items-center gap-1 text-primary-normal">
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
		</>
	)
}
