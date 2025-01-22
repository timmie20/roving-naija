import { Post } from "@/queries/posts"
import Image from "next/image"

export function NewsCardBase({ post }: { post: Post }) {
	return (
		<>
			<div className="mx-auto h-fit w-fit border border-neutral-200 p-4">
				<div className="flex flex-col gap-3 md:flex-row">
					<div className="relative h-[108px] w-full shrink-0 sm:size-[130px]">
						<Image
							src="/assets/images/frame1.jpg"
							alt="News description image"
							className="flex-shrink-0"
							fill
						/>
					</div>
					<div className="flex flex-col justify-between font-Cormorant">
						<h2 className="links text-xs font-bold md:text-base xl:text-xl">{post.title}</h2>
						<div className="inline-flex items-center gap-1 text-gray-600">
							<img src="/assets/icons/clock.svg" alt="clock icon" />
							<span className="text-[8px] italic sm:text-xs">20 November 2024.</span>
						</div>
					</div>
				</div>
			</div>{" "}
		</>
	)
}
