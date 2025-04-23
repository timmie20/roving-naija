"use client"
import MainLayout from "@/components/app/MainLayout"
import Client from "./Client"
import { useParams, useRouter } from "next/navigation"
import { usePosts } from "@/hooks/usePosts"
import { useEffect, useRef } from "react"
import { useSubscribed } from "@/hooks/useCheckSubscription"
import SubscribeDialog from "@/components/SubscribeDialog"
import Spinner from "@/components/shared/spinner"

export const SectionPage = () => {
	const params = useParams()
	const slug = typeof params.slug === "string" ? params.slug : ""

	const { data, isFetching } = usePosts(slug)
	const { isValid } = useSubscribed()
	const dialogRef = useRef<HTMLDialogElement>(null)
	const router = useRouter()

	useEffect(() => {
		if (isValid === false && dialogRef.current) {
			dialogRef.current.showModal()

			setTimeout(() => {
				dialogRef.current?.close()
				router.push("/pricing")
			}, 2500)
		}
	}, [isValid, router])

	// Avoid conditional rendering before hooks
	if (isFetching) return <Spinner />

	const posts = data && "data" in data ? data.data : []
	if (!posts.length) return <div>No posts found.</div>

	if (isValid === false) {
		return <SubscribeDialog dialogRef={dialogRef} />
	}

	return (
		<MainLayout>
			<div className="mx-auto max-w-screen-xl">
				<Client posts={posts} />
			</div>
		</MainLayout>
	)
}
