import React from "react"
import Image from "next/image"
import { VideoType } from "@/queries/posts"

export default function TopVideos({ videos }: { videos: VideoType[] }) {
	return (
		<div className="mt-10 w-full">
			<div className="inline-flex items-center gap-2 px-3 pb-4">
				<span className="font-base font-Poppins text-lg font-medium">Top Videos</span>
				<img src="/assets/icons/top-video.svg" alt="Top videos icon" />
			</div>

			{/* Horizontal Scroll Area */}
			<div className="flex w-full overflow-x-auto border border-primary-normal">
				<div className="flex space-x-4 p-4">
					{videos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
				</div>
			</div>
			{/* Optional Gradient Effect */}
		</div>
	)
}

export function VideoCard({ video }: { video: VideoType }) {
	return (
		<div className="flex h-fit w-[200px] flex-col gap-4 p-2 md:w-[450px] md:flex-row">
			<div className="relative h-[89px] max-h-[163px] w-full max-w-[200px] shrink-0 md:h-[163px]">
				<Image
					src="/assets/images/frame3.jpg"
					alt="News description"
					className="object-cover"
					fill
				/>
				<div className="absolute inset-0 bg-black opacity-50"></div>

				<img
					src="/assets/icons/video-icon.svg"
					alt="video icon"
					className="absolute h-10 w-10"
					style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
				/>
			</div>

			<div className="flex flex-col justify-between">
				<h3 className="links line-clamp-2 text-balance font-Cormorant text-sm font-bold md:line-clamp-4 md:text-[20px]">
					{video.title}
				</h3>
				<span className="mt-2 text-xs italic text-gray-500 md:mt-0">By Timilehin</span>
			</div>
		</div>
	)
}
