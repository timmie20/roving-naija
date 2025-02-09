import React from "react"
import Image from "next/image"

export default function NewsCardLg() {
	return (
		<div>
			<div className="relative h-[200px] w-full lg:h-[360px]">
				<Image
					src="/assets/images/frame4.png"
					alt="Latest news image"
					fill
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex h-[86px] flex-col justify-between border border-[#959595] p-4 lg:h-[132px]">
				<h3 className="links line-clamp-2 text-base font-bold text-app-dark md:line-clamp-none md:text-3xl">
					Malcolm Wins Edo state Governorship election.{" "}
				</h3>
				<div className="flex items-center justify-between">
					<aside className="flex items-center gap-3">
						<i>
							<small className="text-[8px] sm:text-xs">By Mark Obidiegwu</small>
						</i>
						<span className="flex items-center gap-1">
							<img src="/assets/icons/clock.svg" alt="Clock icon" />
							<i>
								<small className="text-[8px] sm:text-xs">20 November 2024 .</small>
							</i>
						</span>
					</aside>
				</div>
			</div>
		</div>
	)
}
