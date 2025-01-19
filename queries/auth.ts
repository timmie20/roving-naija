import axios from "axios"

export interface LoginPayload {
	email: string
	password: string
}

export interface RegisterPayload extends LoginPayload {
	fullname: string
}

const register = async (payload: RegisterPayload) => {
	return axios.post("http://34.69.218.184/api/register", payload).then((res) => res.data)
}

const login = async (payload: LoginPayload) => {
	return axios.post("http://34.69.218.184/api/login", payload).then((res) => res.data)
}

export { register, login }
