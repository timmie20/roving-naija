"use client"
import MainLayout from "@/components/app/MainLayout"
import { VideoCard } from "@/components/topVideos"
import { useRouter } from "next/navigation"
import React from "react"

export default function page() {
	const router = useRouter()

	const route = (id: number) => {
		router.push(`/videos/${id}`)
	}
	return (
		<MainLayout>
			<div className="mx-auto max-w-screen-xl">
				<VideoCard />
				<button onClick={() => route(1)}>route</button>
			</div>
		</MainLayout>
	)
}
