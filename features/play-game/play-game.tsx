"use client"
import SubscribeDialog from "@/components/SubscribeDialog"
import { useSubscribed } from "@/hooks/useCheckSubscription"
import { useRouter } from "next/navigation"
import React, { useEffect, useRef } from "react"

export const GamePage = () => {
	const router = useRouter()

	const { isValid } = useSubscribed()
	const dialogRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (isValid === false && dialogRef.current) {
			dialogRef.current.showModal()

			setTimeout(() => {
				dialogRef.current?.close()
				router.push("/pricing")
			}, 2500)
		}
	}, [isValid, router])

	if (isValid === false) {
		return <SubscribeDialog dialogRef={dialogRef} />
	}

	return (
		<div style={{ width: "100vw", height: "100vh" }} className="mx-auto">
			<iframe src="/game/index.html" width="100%" height="100%" style={{ border: "none" }} />
		</div>
	)
}
