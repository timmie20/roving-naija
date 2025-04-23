import { Post } from "@/types/types"
import Image from "next/image"
import { Title } from "./shared/Title"
import { timeAgo } from "@/helpers/TimeFormater"

export function NewsCardBase({ post }: { post: Post }) {
	return (
		<>
			<div className="mx-auto h-fit w-full border border-neutral-200 p-4">
				<div className="flex flex-col gap-3 md:flex-row">
					<div className="relative h-[108px] w-full shrink-0 sm:size-[130px]">
						<Image
							src={post.image[0]}
							alt="News description image"
							className="object-fit flex-shrink-0"
							fill
						/>
					</div>
					<div className="flex flex-col justify-between font-Cormorant">
						<Title slug={post.id} size="sm">
							{post.title}
						</Title>
						{/* <h2 className="links text-xs font-bold md:text-base xl:text-xl">{post.title}</h2> */}
						<span className="text-[8px] italic text-red-500 sm:text-xs">
							{timeAgo(post.created_at)}
						</span>
					</div>
				</div>
			</div>
		</>
	)
}
