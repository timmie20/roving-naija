import { SubscriptionObj } from "@/types/types"

export const checkValidity = (time: string): SubscriptionObj | null => {
	const response = time.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/)
	let validityPeriod: Date | null = null
	const currentTime = new Date()

	console.log()

	if (response) {
		validityPeriod = new Date(response[0])

		if (!isNaN(validityPeriod.getTime()) && currentTime < validityPeriod) {
			console.log("Subscription is still valid.")
			return { isValid: true, date: validityPeriod }
		} else {
			console.log("Subscription expired. Please subscribe.")
			return { isValid: false, date: validityPeriod }
		}
	} else {
		console.log("Invalid date format.")
		return { isValid: false, date: null }
	}
}
