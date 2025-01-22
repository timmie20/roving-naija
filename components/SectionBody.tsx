import React from "react"
import Image from "next/image"
import NewsCardMedium from "./NewsCardMedium"
import NewsCardLg from "./NewsCardLg"
import Ads from "./Ads"
import NewsCardSmall from "./NewsCardSmall"

export default function SectionBody({ hasAdvert }: { hasAdvert: boolean }) {
	return (
		<div className="mt-6">{hasAdvert ? <SectionWithAds /> : <SectionWithoutAds />}</div>
	)
}

export const SectionWithAds = () => {
	return (
		<div className="flex w-full flex-col gap-4 lg:flex-row">
			<div className="flex-1">
				<div className="w-full flex-1">
					<NewsCardLg />

					<div className="mt-8 hidden gap-4 sm:flex">
						<NewsCardMedium />
						<NewsCardMedium />
					</div>

					<div className="mt-8 flex flex-col gap-4 sm:hidden">
						<NewsCardSmall />
						<NewsCardSmall />
					</div>
				</div>
			</div>

			<div className="flex flex-col-reverse items-center gap-4 sm:flex-row-reverse lg:flex-col">
				<div className="w-full flex-1">
					<Ads />
				</div>

				<div>
					<p className="font-Poppins">cartoon of the day</p>

					<div className="mt-2 w-full">
						<Image
							src="/assets/images/Frame 408.png"
							alt="cartoon images"
							width={347}
							height={250}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export const SectionWithoutAds = () => {
	return (
		<>
			<div className="w-full">
				<div className="flex flex-col rounded-lg p-6 md:flex-row">
					<div className="relative h-[200px] w-full shrink-0 rounded-lg md:h-[400px] md:w-1/2">
						<Image
							src="/assets/images/Frame 381.png"
							alt="Portrait of a man wearing glasses and a blue shirt"
							fill
						/>
					</div>
					<div className="mt-4 md:ml-6 md:mt-0">
						<h1 className="mb-4 text-2xl font-bold md:text-3xl">
							Malcolm Wins Edo state Governorship election.
						</h1>
						<p className="mb-4 text-gray-700">
							It is a long established fact that a reader will be distracted by the readable
							content of a page when looking at its layout. The point of using Lorem Ipsum is
							that it has a more-or-less
						</p>
						<div className="flex items-center text-gray-600">
							<span className="italic">By Mark Obidiegwu</span>
							<span className="mx-2">|</span>
							<i className="far fa-clock mr-2"></i>
							<span>20 November 2024.</span>
						</div>
					</div>
				</div>

				<div className="mt-6 hidden gap-4 md:flex">
					<NewsCardMedium />
					<NewsCardMedium />
					<NewsCardMedium />
				</div>

				<div className="mt-4 flex flex-col gap-4 md:hidden">
					<NewsCardSmall />
					<NewsCardSmall />
					<NewsCardSmall />
				</div>
			</div>
		</>
	)
}
