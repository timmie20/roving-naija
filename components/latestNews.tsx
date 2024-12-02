import Image from "next/image"
import React from "react"

export default function LatestNews() {
	return (
		<>
			<div>
				<PriorityNewsCard />
				<div className="mt-12 grid h-fit w-full gap-5">
					<div className="grid h-fit grid-flow-row gap-3 lg:grid-cols-2 lg:gap-6">
						<MiniNewsCards />
						<MiniNewsCards />
						<MiniNewsCards />
						<MiniNewsCards />
					</div>
					<div className="relative h-[160px] w-full">
						<Image
							src="/assets/images/banner.jpg"
							alt="Martad get to know banner"
							fill
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>{" "}
					</div>
				</div>
			</div>
		</>
	)
}

function PriorityNewsCard() {
	return (
		<>
			<div className="h-fit">
				<div className="relative inline-flex items-center gap-2 pb-4">
					<span className="font-base font-Poppins font-medium">Latest News</span>
					<img src="/assets/icons/fire.svg" />
				</div>
				<div className="relative h-[368px] w-full">
					<Image
						src="/assets/images/Frame 381.png"
						alt="Latest news image"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<div className="px-4 py-3 shadow-md">
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
		</>
	)
}

function MiniNewsCards() {
	return (
		<>
			<div className="mx-auto h-fit w-fit border border-neutral-200 p-4">
				<div className="flex gap-3">
					<Image
						src="/assets/images/frame1.jpg"
						alt="News description image"
						width={130}
						height={130}
					/>
					<div className="flex flex-col justify-between font-Cormorant">
						<h2 className="text-xl font-bold">
							Nigeria to donate 100 million to Valencia flood victims
						</h2>
						<div className="inline-flex items-center gap-1 text-gray-600">
							<img src="/assets/icons/clock.svg" alt="clock icon" />
							<span className="text-xs italic">20 November 2024.</span>
						</div>
					</div>
				</div>
			</div>{" "}
		</>
	)
}
