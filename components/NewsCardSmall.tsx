import React from "react"
import Image from "next/image"

export default function NewsCardSmall() {
	return (
		<div className="flex w-fit items-start justify-between gap-3 pt-4">
			<div className="flex flex-shrink-0 flex-col">
				<Image
					src="/assets/images/headshot.jpg"
					alt="Trending preview image"
					width={108}
					height={90}
					priority
				/>
				<div className="mt-1.5 inline-flex items-center gap-1 text-primary-normal">
					<span>
						<img
							src="/assets/icons/clock.svg"
							alt="Clock icon"
							className="text-primary-normal"
						/>
					</span>
					<span className="text-[12px]">
						<i>2 hours ago</i>
					</span>
				</div>
			</div>

			<h4 className="line-clamp-3 text-balance font-Poppins font-normal decoration-inherit hover:cursor-pointer hover:underline hover:decoration-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ratione recusandae
				facilis error accusantium laboriosam, nulla tenetur? Quasi nesciunt voluptas, dolorum
				vel, molestiae corporis doloribus atque rem nobis, quibusdam recusandae?
			</h4>
		</div>
	)
}
