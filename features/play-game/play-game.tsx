"use client"
import { checkValidity } from "@/helpers/extractValidityPeriod"
import { checkSubscription } from "@/queries/auth"
import { useRouter } from "next/navigation"
import React, { useLayoutEffect } from "react"
import { toast } from "sonner"
export const GamePage = () => {
	const router = useRouter()

	const handleCheck = async () => {
		try {
			const response = await checkSubscription()
			if (response) {
				const data = checkValidity(response.data.message)
				if (data?.isValid) {
					router.push("/play-game")
				} else {
					router.push("/pricing")
					toast.error("subscription expired", {
						description: "Seems like you don't have an active subscription to play games",
					})
				}
			}
		} catch (error) {
			console.error(error)
		}
	}
	useLayoutEffect(() => {
		handleCheck()
	}, [])

	return (
		<div style={{ width: "100vw", height: "100vh" }} className="mx-auto">
			<iframe src="/game/index.html" width="100%" height="100%" style={{ border: "none" }} />
		</div>
	)
}
