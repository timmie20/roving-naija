import React from "react"
import { Video } from "@/types/types"
import { convertToEmbedUrl } from "@/helpers/convertToEmbed"
import Image from "next/image"

export default function TopVideos({ videos }: { videos: Video[] }) {
	return (
		<div className="mt-10 w-full">
			<div className="inline-flex items-center gap-2 px-3 pb-4">
				<span className="font-base font-Poppins text-lg font-medium">Top Videos</span>
				<Image
					src="/assets/icons/top-video.svg"
					alt="Top videos icon"
					width={24}
					height={24}
				/>
			</div>

			{/* Horizontal Scroll Area */}
			<div className="flex w-full overflow-x-auto border border-primary-normal">
				<div className="flex space-x-4 p-4">
					{videos?.map((video) => <VideoCard key={video.id} video={video} />)}
				</div>
			</div>
			{/* Optional Gradient Effect */}
		</div>
	)
}

export function VideoCard({ video }: { video: Video }) {
	return (
		<div className="flex h-fit w-[200px] flex-col gap-4 p-2 md:w-full md:max-w-[650px] md:flex-row">
			<div className="group h-[120px] w-full shrink-0 overflow-hidden rounded-lg border md:h-[200px] md:w-[300px]">
				<iframe
					className="h-full w-full cursor-auto group-hover:cursor-pointer"
					// src={video.video_link}
					src={convertToEmbedUrl(video.video_link)}
					title={video.title}
					frameBorder="0"
					allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture"
					allowFullScreen
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
