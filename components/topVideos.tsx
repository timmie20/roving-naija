import React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"

export default function TopVideos() {
	return (
		<div className="mt-10 w-full">
			<div className="relative inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins text-lg font-medium">Top Videos</span>
				<img src="/assets/icons/top-video.svg" alt="Top videos icon" />
			</div>

			<div className="relative">
				{/* Horizontal Scroll Area */}
				<div className="flex w-full overflow-x-auto whitespace-nowrap border border-primary-normal">
					<div className="flex w-max space-x-4 p-4">
						{Array.from({ length: 6 }).map((_, i) => (
							<VideoCard key={i} />
						))}
					</div>
				</div>
				{/* Optional Gradient Effect */}
				<div className="pointer-events-none absolute bottom-0 right-0 top-0 w-10 bg-gradient-to-l from-white to-transparent"></div>
			</div>
		</div>
	)
}

function VideoCard() {
	return (
		<div className="flex w-60 shrink-0 gap-3 border border-purple-400 p-2">
			<div className="relative">
				<img
					src="/assets/"
					alt="News description"
					className="h-32 w-32 object-cover"
				/>
				<img
					src="/assets/icons/video-icon.svg"
					alt="video icon"
					className="absolute left-10 top-10 h-10 w-10"
				/>
			</div>

			<div className="flex flex-col justify-between">
				<span className="font-Cormorant text-sm font-bold">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam incidunt corrupti
					necessitatibus,
				</span>
				<span className="text-xs italic text-gray-500">By Timilehin</span>
			</div>
		</div>
	)
}
