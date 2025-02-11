import axios from "axios"

export interface LoginPayload {
	msisdn?: string
	email: string
	password: string
}

export interface RegisterPayload extends LoginPayload {
	name: string
	msisdn: string
	action: string
}

const register = async (payload: RegisterPayload) => {
	return axios.post("http://34.69.218.184/api/register", payload).then((res) => res.data)
}

const vasRegister = async (payload: RegisterPayload) => {
	return axios
		.post("https://martadapi.com/rovingnaija/index.php", payload, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "text/html; charset=UTF-8",
			},
		})
		.then((res) => res.data)
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

const login = async (payload: LoginPayload) => {
	return axios.post("http://34.69.218.184/api/login", payload).then((res) => res.data)
}

export { register, login, vasRegister, checkSubscription }
