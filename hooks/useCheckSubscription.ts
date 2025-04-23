"use client"
import { checkValidity } from "@/helpers/extractValidityPeriod"
import { checkSubscription } from "@/queries/auth"
import { useEffect, useState } from "react"

export function useSubscribed() {
	const [isValid, setIsValid] = useState<boolean>()

	const isSubscribed = async () => {
		try {
			const res = await checkSubscription()
			const validity = checkValidity(res.data.message)
			setIsValid(validity?.isValid)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		isSubscribed()
	}, [])

	return { isValid }
}
