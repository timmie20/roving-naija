import axios, { AxiosError } from "axios"

export interface LoginPayload {
	msisdn?: string
	email?: string
	password: string
}

export interface RegisterPayload extends LoginPayload {
	name?: string
	fullname?: string
	msisdn: string
	action?: string
}

const backendRegister = async (payload: RegisterPayload) => {
	try {
		const formData = new FormData()
		formData.append("fullname", payload.fullname || "")
		formData.append("msisdn", payload.msisdn)
		formData.append("password", payload.password)

		const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})

		return {
			success: res.status === 201,
			data: res.data, // expecting { status, message, userId, etc. }
		}
	} catch (error: any) {
		return {
			success: false,
			message: error?.response?.data?.errors || "An error occurred while registering.",
			error: error,
		}
	}
}

const vasRegister = async (payload: RegisterPayload) => {
	try {
		const res = await axios.post(`${process.env.NEXT_PUBLIC_VAS_BASE_URL}`, payload, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "text/html; charset=UTF-8",
			},
		})

		if (res.status !== 200) {
			return {
				success: false,
				message: "something went wrong",
			}
		} else {
			return {
				success: true,
				data: res.data,
			}
		}
	} catch (error) {
		if (error instanceof AxiosError) {
			return {
				success: false,
				error: error,
				message: error.message,
			}
		}

		console.error(error)
	}
}

const checkSubscription = async () => {
	const response = await fetch("/api/subscription", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		// body: JSON.stringify({ msisdn: "" }),
	})

	const data = await response.json()
	return data
}

const backendLogin = async (payload: LoginPayload) => {
	try {
		const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, payload, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})

		return {
			success: res.status === 200,
			data: res.data, // expecting { status, message, userId, etc. }
		}
	} catch (error: any) {
		return {
			success: false,
			message: error?.response?.data?.errors || "An error occurred while logging in.",
			error: error,
		}
	}
}

export { backendRegister, backendLogin, vasRegister, checkSubscription }
