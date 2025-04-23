import React from "react"
import Image from "next/image"

export default function VideoCardSmall() {
	return (
		<div className="flex h-fit w-full flex-col items-center gap-4 p-2 min-[425px]:w-[190px] md:w-[350px] md:flex-row lg:w-[400px]">
			<div className="relative h-[89px] max-h-[163px] w-full max-w-[150px] shrink-0 md:h-[100px]">
				<Image
					src="/assets/images/frame3.jpg"
					alt="News description"
					className="object-cover"
					fill
				/>
				<div className="absolute inset-0 bg-black opacity-50"></div>

				{/* <img
					src="/assets/icons/video-icon.svg"
					alt="video icon"
					className="absolute h-10 w-10"
					style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
				/> */}
			</div>

			<div className="flex flex-col justify-between">
				<h3 className="links line-clamp-2 text-balance font-Cormorant text-sm font-bold md:line-clamp-4 md:text-[20px]">
					some type of video title
				</h3>
				<span className="mt-2 text-xs italic text-gray-500 md:mt-0">By Timilehin</span>
			</div>
		</div>
	)
}
