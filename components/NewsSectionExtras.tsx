import React from "react"
import Image from "next/image"

export default function NewsSectionExtras({ title }: { title: string }) {
	return (
		<div>
			<div className="max-w-[350px] space-y-3">
				<h1 className="text-center font-Cormorant text-[32px] font-bold">{title}</h1>
				<div className="relative h-[208px] w-full">
					<Image src="/assets/images/frame4.png" alt="Latest news image" fill priority />
				</div>

				<div className="space-y-4">
					{Array.from({ length: 3 }).map((_, i) => (
						<h4
							key={i}
							className="line-clamp-2 text-balance border-b border-primary-normal font-Poppins font-normal decoration-inherit hover:cursor-pointer hover:underline hover:decoration-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ipsa consequuntur!
							Minus culpa repudiandae vitae provident veritatis tempor
						</h4>
					))}
				</div>
			</div>
		</div>
	)
}
