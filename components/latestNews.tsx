import Image from "next/image"
import React from "react"

export default function LatestNews() {
	return (
		<div className="">
			<div className="relative inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins font-medium">Latest News</span>
				<img src="/assets/icons/fire.svg" />
			</div>
			<div className="relative h-[360px] w-full">
				<Image
					src="/assets/images/Frame 381.png"
					alt="Latest news image"
					fill
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="p-4 shadow-md">
				<h3 className="text-wrap text-3xl font-bold text-app-dark">
					President Tinubu shares one hundred thousand naira for staffs of Martad Holdings
					Limited.
				</h3>
				<div className="mt-4 flex items-center justify-between">
					<aside className="inline-flex items-center gap-3">
						<i>
							<small>By Mark Obidiegwu</small>
						</i>
						<span className="inline-flex items-center gap-1">
							<img src="/assets/icons/clock.svg" alt="Clock icon" />
							<i>
								<small>20 November 2024 .</small>
							</i>
						</span>
					</aside>

					<aside className="inline-flex items-center gap-1">
						{Array.from({ length: 4 }).map((_, i) => (
							<span className="size-4 rounded-full bg-primary-snow" key={i}></span>
						))}
					</aside>
				</div>
			</div>
		</div>
	)
}
