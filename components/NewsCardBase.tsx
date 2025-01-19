import Image from "next/image"

export function NewsCardBase() {
	return (
		<>
			<div className="mx-auto h-[168px] w-fit border border-neutral-200 p-4">
				<div className="flex gap-3">
					<Image
						src="/assets/images/frame1.jpg"
						alt="News description image"
						className="flex-shrink-0"
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
