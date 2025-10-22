"use client"
import React, { useRef, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { getPost } from "@/queries/posts"
import { NewsArticle } from "@/features/view-specific"
import { useSubscribed } from "@/hooks/useCheckSubscription"
import SubscribeDialog from "@/components/SubscribeDialog"
import Spinner from "@/components/shared/spinner"

export default function Page() {
	const { slug } = useParams()

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["post", slug],
		queryFn: () => getPost(Number(slug)),
		enabled: !!slug,
	})

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

	if (isLoading) return <Spinner />
	if (isError) return <p>Error: {(error as Error).message}</p>

	if (isValid === false) {
		return <SubscribeDialog dialogRef={dialogRef} />
	}

	if (data) return <NewsArticle post={data?.data} />
}
