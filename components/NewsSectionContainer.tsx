"use client"
import React from "react"
import { Button } from "./ui/button"
import SectionHeader from "./sectionHeader"
import SectionBody from "./SectionBody"
import { useRouter } from "next/navigation"
import { Post } from "@/types/types"

export default function NewsSectionContainer({
	id,
	type,
	hasAdvert,
	posts,
}: {
	id: string
	type: string
	hasAdvert: boolean
	posts: Post[]
}) {
	const router = useRouter()

	return (
		<section className="w-full px-3 xl:px-0" id={id}>
			<SectionHeader type={type} />

			<SectionBody hasAdvert={hasAdvert} posts={posts} />

			<div className="flex w-full items-center justify-center">
				<Button
					className="mt-8 h-12 w-full border border-primary-dark text-base text-primary-dark md:h-16 lg:max-w-[560px]"
					variant="outline"
					onClick={() => router.push(`/topics/${id}`)}>
					More on this section
				</Button>
			</div>
		</section>
	)
}
