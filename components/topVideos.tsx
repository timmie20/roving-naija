import React from "react"
import Image from "next/image"

export default function TopVideos() {
	return (
		<div className="mt-10 w-full">
			<div className="inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins text-lg font-medium">Top Videos</span>
				<img src="/assets/icons/top-video.svg" alt="Top videos icon" />
			</div>

			{/* Horizontal Scroll Area */}
			<div className="flex w-full overflow-x-auto border border-primary-normal">
				<div className="flex space-x-4 p-4">
					{Array.from({ length: 6 }).map((_, i) => (
						<VideoCard key={i} />
					))}
				</div>
			</div>
			{/* Optional Gradient Effect */}
		</div>
	)
}

function VideoCard() {
	return (
		<div className="flex h-fit w-[450px] gap-4 p-2">
			<div className="relative shrink-0">
				<Image
					src="/assets/images/frame3.jpg"
					alt="News description"
					className="object-cover"
					width={200}
					height={163}
				/>
				<div className="absolute inset-0 bg-black opacity-50"></div>

				<img
					src="/assets/icons/video-icon.svg"
					alt="video icon"
					className="absolute inset-0 h-10 w-10"
					style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
				/>
			</div>

			<div className="flex flex-col justify-between">
				<h3 className="text-balance font-Cormorant text-[20px] font-bold">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam incidunt corrupti
					necessitatibus,
				</h3>
				<span className="text-xs italic text-gray-500">By Timilehin</span>
			</div>
		</div>
	)
}
