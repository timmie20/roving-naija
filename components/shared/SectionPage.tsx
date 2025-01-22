import React from "react"
import Image from "next/image"
import NewsCardMedium from "../NewsCardMedium"
import Ads from "../Ads"
import NewsCardSmall from "../NewsCardSmall"
import VideoCardSmall from "../VideoCardSmall"

export default function SectionPage({ type }: { type: string }) {
	return (
		<>
			<div className="space-y-6">
				<div className="flex flex-col rounded-lg px-3 md:flex-row xl:px-0">
					<div className="relative h-[200px] w-full shrink-0 rounded-lg md:h-[400px] md:w-1/2">
						<Image
							src="/assets/images/Frame 381.png"
							alt="Portrait of a man wearing glasses and a blue shirt"
							fill
						/>
					</div>
					<div className="mt-4 md:ml-6 md:mt-0">
						<h1 className="links mb-4 text-balance text-2xl font-bold md:text-3xl">
							Malcolm Wins Edo state Governorship election.
						</h1>
						<p className="mb-4 line-clamp-5 text-balance text-sm text-gray-700 md:text-base">
							It is a long established fact that a reader will be distracted by the readable
							content of a page when looking at its layout. The point of using Lorem Ipsum is
							that it has a more-or-less Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Debitis non quidem deserunt in, explicabo corporis? Quos necessitatibus,
							molestias, ipsam ducimus odit ut omnis nemo illum iure praesentium quis fuga
							cupiditate!
						</p>
						<div className="flex items-center text-gray-600">
							<span className="text-[8px] italic sm:text-sm">By Mark Obidiegwu</span>
							<span className="mx-2">|</span>
							<i className="far fa-clock mr-2"></i>
							<span className="text-[8px] sm:text-sm">20 November 2024.</span>
						</div>
					</div>
				</div>

				<div className="xl:h-[150px]">
					<Ads />
				</div>

				<div className="grid grid-cols-1 gap-4 px-3 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
					<NewsCardMedium />
					<NewsCardMedium />
					<NewsCardMedium />
					<NewsCardMedium />
					<NewsCardMedium />
					<NewsCardMedium />
				</div>

				<div className="px-3 xl:px-0">
					<div className="flex h-[40px] w-full items-center bg-neutral-50 px-3 py-1">
						<h2 className="text-center text-base font-bold text-primary-normal lg:text-xl xl:text-2xl">
							More on {type}
						</h2>
					</div>

					<div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
						<NewsCardSmall />
						<NewsCardSmall />
						<NewsCardSmall />
						<NewsCardSmall />
					</div>
				</div>

				<div className="px-3 xl:px-0">
					<div className="flex h-[40px] w-full items-center bg-neutral-50 px-3 py-1">
						<h2 className="text-center text-base font-bold text-primary-normal lg:text-xl xl:text-2xl">
							Videos
						</h2>
					</div>

					<div className="mt-3 flex flex-wrap gap-3 px-3">
						<VideoCardSmall />
						<VideoCardSmall />
						<VideoCardSmall />
					</div>
				</div>

				<div className="lg:h-[150px]">
					<Ads />
				</div>
			</div>
		</>
	)
}
