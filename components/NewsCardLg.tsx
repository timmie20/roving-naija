import React from "react"
import Image from "next/image"

export default function NewsCardLg() {
	return (
		<div>
			<div className="relative h-[360px] w-full">
				<Image
					src="/assets/images/frame4.png"
					alt="Latest news image"
					fill
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex h-[132px] flex-col justify-between border border-[#959595] p-4">
				<h3 className="text-wrap text-3xl font-bold text-app-dark">
					Malcolm Wins Edo state Governorship election.
				</h3>
				<div className="lex items-center justify-between">
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
				</div>
			</div>
		</div>
	)
}
