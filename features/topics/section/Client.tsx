import React from "react"
import Image from "next/image"
import NewsCardMedium from "../../../components/NewsCardMedium"
import Ads from "../../../components/Ads"
import NewsCardSmall from "../../../components/NewsCardSmall"
// import VideoCardSmall from "../../../components/VideoCardSmall"
import { Post } from "@/types/types"
import { Title } from "@/components/shared/Title"
import { format } from "date-fns"
import { timeAgo } from "@/helpers/TimeFormater"

export default function Client({ posts }: { posts: Post[] }) {
	const priorityPost = posts.find((post) => post.priority === 1)

	const largePost = priorityPost || posts[0]

	const remainingPosts = posts.filter((post) => post !== largePost)

	return (
		<>
			<div className="my-6 space-y-6">
				<div className="flex flex-col rounded-lg px-3 md:flex-row xl:px-0">
					<div className="relative h-[200px] w-full shrink-0 rounded-lg md:h-[400px] md:w-1/2">
						<Image
							src={largePost.image[0]}
							alt={largePost.title}
							style={{ width: "100%" }}
							priority
							fill
							className="object-cover"
						/>
					</div>
					<div className="mt-4 md:ml-6 md:mt-0">
						<Title slug={largePost.id} size="lg">
							{largePost.title}
						</Title>

						<p className="my-4 line-clamp-5 text-balance text-sm text-gray-700 md:text-base">
							{largePost.content}
						</p>
						<div className="flex items-center text-gray-600">
							<span className="text-[8px] italic sm:text-sm">Roving Naija</span>
							<span className="mx-2">|</span>
							<i className="far fa-clock mr-2"></i>
							<span className="text-[8px] sm:text-sm">
								{largePost.date
									? format(largePost?.date, "do MMMM yyyy")
									: timeAgo(largePost.created_at)}
							</span>
						</div>
					</div>
				</div>

				<div className="xl:h-[150px]">
					<Ads />
				</div>

				<div className="grid grid-cols-1 gap-4 px-3 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
					{remainingPosts.slice(0, 9).map((post) => (
						<NewsCardMedium post={post} key={post.id} />
					))}
				</div>

				<div className="px-3 xl:px-0">
					<div className="flex h-[40px] w-full items-center bg-neutral-50 px-3 py-1">
						<h2 className="text-center text-base font-bold text-primary-normal lg:text-xl xl:text-2xl">
							More
						</h2>
					</div>

					<div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{remainingPosts.slice(10, 16).map((post) => (
							<NewsCardSmall post={post} key={post.id} />
						))}
					</div>
				</div>

				{/* <div className="px-3 xl:px-0">
					<div className="flex h-[40px] w-full items-center bg-neutral-50 px-3 py-1">
						<h2 className="text-center text-base font-bold text-primary-normal lg:text-xl xl:text-2xl">
							Videos
						</h2>
					</div>

					<div className="mt-3 flex flex-wrap gap-3 px-3">
						<VideoCardSmall />
						<VideoCardSmall />
						<VideoCardSmall />
					</div>
				</div> */}

				<div className="lg:h-[150px]">
					<Ads />
				</div>
			</div>
		</>
	)
}
