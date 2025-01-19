import React from "react"
import Image from "next/image"
import NewsCardMedium from "./NewsCardMedium"
import NewsCardLg from "./NewsCardLg"
import Ads from "./Ads"

export default function SectionBody({ hasAdvert }: { hasAdvert: boolean }) {
	return (
		<div className="mt-6">{hasAdvert ? <SectionWithAds /> : <SectionWithoutAds />}</div>
	)
}

export const SectionWithAds = () => {
	return (
		<div className="flex w-full gap-4">
			<div className="flex-1">
				<div className="w-full flex-1">
					<NewsCardLg />

					<div className="mt-8 flex gap-4">
						<NewsCardMedium />
						<NewsCardMedium />
					</div>
				</div>
			</div>

			<div className="flex max-w-[347px] flex-col gap-4">
				<div className="flex-1">
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
				<div className="flex w-full justify-between gap-6">
					<div className="relative h-[396px] w-full max-w-[610px]">
						<Image
							src="/assets/images/Frame 381.png"
							alt="iamge of something"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="space-y-6">
						<h1 className="text-balance text-4xl/10 font-semibold">
							Malcolm Wins Edo state Governorship election.
						</h1>

						<p className="text-balance font-Poppins">
							It is a long established fact that a reader will be distracted by the readable
							content of a page when looking at its layout. The point of using Lorem Ipsum is
							that it has a more-or-less
						</p>
					</div>
				</div>

				<div className="mt-6 flex gap-4">
					<NewsCardMedium />
					<NewsCardMedium />
					<NewsCardMedium />
				</div>
			</div>
		</>
	)
}
