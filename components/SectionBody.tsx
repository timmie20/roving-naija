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
				<div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
					<div className="relative h-[200px] w-full max-w-[610px] md:h-[396px]">
						<Image
							src="/assets/images/Frame 381.png"
							alt="iamge of something"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="space-y-6">
						<h1 className="links text-wrap text-2xl font-semibold lg:text-4xl/10">
							Malcolm Wins Edo state Governorship election.
						</h1>

						<p className="links line-clamp-3 text-wrap font-Poppins text-sm md:line-clamp-none md:text-base">
							It is a long established fact that a reader will be distracted by the readable
							content of a page when looking at its layout. The point of using Lorem Ipsum is
							that it has a more-or-less
						</p>
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
