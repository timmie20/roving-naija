import React from "react"
import Image from "next/image"
import NewsCardMedium from "./NewsCardMedium"
import NewsCardLg from "./NewsCardLg"
import Ads from "./Ads"
import NewsCardSmall from "./NewsCardSmall"
import { Post } from "@/types/types"
import { timeAgo } from "@/helpers/TimeFormater"
import { Title } from "./shared/Title"

export default function SectionBody({
	hasAdvert,
	posts,
}: {
	hasAdvert: boolean
	posts: Post[]
}) {
	return (
		<div className="mt-6">
			{hasAdvert ? <SectionWithAds posts={posts} /> : <SectionWithoutAds posts={posts} />}
		</div>
	)
}

export const SectionWithAds = ({ posts }: { posts: Post[] }) => {
	return (
		<div className="flex w-full flex-col gap-4 lg:flex-row">
			<div className="flex-1">
				<div className="w-full flex-1">
					{/* Render the first post in a large card */}
					{posts?.length > 0 && <NewsCardLg post={posts[0]} />}

					{/* Render the next two posts in medium cards (only visible on sm screens and up) */}
					<div className="mt-8 hidden gap-4 sm:flex">
						{posts?.slice(1, 3).map((post) => <NewsCardMedium key={post.id} post={post} />)}
					</div>

					{/* Render smaller news cards for the remaining posts (only visible on small screens) */}
					<div className="mt-8 flex flex-col gap-4 sm:hidden">
						{posts?.slice(1, 4).map((post) => <NewsCardSmall key={post.id} post={post} />)}
					</div>
				</div>
			</div>

			<div className="flex w-1/4 flex-col-reverse items-center gap-4 sm:flex-row-reverse lg:flex-col">
				<div className="w-full flex-1">
					<Ads />
				</div>

				{/* <div>
					<p className="font-Poppins">cartoon of the day</p>

					<div className="mt-2 w-full">
						<Image
							src="/assets/images/Frame 408.png"
							alt="cartoon images"
							width={347}
							height={250}
						/>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export const SectionWithoutAds = ({ posts }: { posts: Post[] }) => {
	const firstPost = posts?.[0]
	return (
		<>
			<div className="w-full">
				<div className="flex flex-col rounded-lg p-6 md:flex-row md:p-0">
					<div className="relative h-[200px] w-full shrink-0 rounded-lg md:h-[400px] md:w-1/2">
						<Image
							src={firstPost?.image[0]}
							className="object-fit"
							alt="Portrait of a man wearing glasses and a blue shirt"
							fill
						/>
					</div>
					<div className="mt-4 md:ml-6 md:mt-0">
						<Title slug={firstPost.id} size="lg">
							{firstPost.title}
						</Title>
						{/* <h1 className="mb-4 text-2xl font-bold md:text-3xl">{firstPost?.title}</h1> */}
						<p className="mb-4 line-clamp-6 text-gray-700">{firstPost?.content}</p>
						<div className="flex items-center text-gray-600">
							<span className="italic">By Mark Obidiegwu</span>
							<span className="mx-2">|</span>
							<i className="far fa-clock mr-2"></i>
							<span>{timeAgo(firstPost.created_at)}</span>
						</div>
					</div>
				</div>

				<div className="mt-6 hidden gap-4 md:grid md:grid-cols-3">
					{/* Render the next three posts in medium cards */}
					{posts?.slice(1, 4).map((post) => <NewsCardMedium key={post.id} post={post} />)}
				</div>

				<div className="mt-4 flex flex-col gap-4 md:hidden">
					{/* Render smaller news cards for the remaining posts */}
					{posts?.slice(1, 4).map((post) => <NewsCardSmall key={post.id} post={post} />)}
				</div>
			</div>
		</>
	)
}
