"use client"
import { useRouter } from "next/navigation"
import React from "react"

export default function NoPostFound() {
	const router = useRouter()
	return (
		<div className="flex h-dvh flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center shadow-sm">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-12 w-12 text-gray-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19 11H5m14 0a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
			<h2 className="mt-4 text-lg font-semibold text-gray-700">No posts available yet</h2>
			<p className="mt-2 text-sm text-gray-500">
				Check back later for new updates in this category.
			</p>
			<button
				onClick={() => router.back()}
				className="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:ring-1 focus-visible:ring-indigo-500">
				Go Back
			</button>
		</div>
	)
}
