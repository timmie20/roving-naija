"use client"

import Cookies from "js-cookie"
import React from "react"

import { UserProps } from "@/types/types"

interface AuthContextProps {
	user: UserProps | null // User object or null when not logged in
	loginUser: (user: UserProps) => void
}

const defaultContext: AuthContextProps = {
	user: null,
	loginUser: async () => {},
}

// Create the AuthContext
export const AuthContext = React.createContext<AuthContextProps>(defaultContext)

// AuthContextProvider component
export const AuthContextProvider = ({ children }: React.PropsWithChildren & {}) => {
	const [user, setUser] = React.useState<UserProps | null>(null)

	const loginUser = (user: UserProps) => {
		const token = user.token
		if (!token) throw new Error("Token not found.")
		Cookies.set("ROVING-NAIJA-TOKEN", token, { expires: 7, sameSite: "Strict" })
		localStorage.setItem("user", JSON.stringify({ user: user.user, token: user.token }))
		setUser(user)
		return user
	}

	// Load user or admin from localStorage on mount
	React.useEffect(() => {
		const savedUser = localStorage.getItem("user")

		if (savedUser) {
			setUser(JSON.parse(savedUser)) // Set user state
		}
	}, [])

	// Provide the context
	return (
		<AuthContext.Provider value={{ user, loginUser }}>{children}</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const ctx = React.useContext(AuthContext)
	if (!ctx) {
		throw new Error("useAuthContext must be used within an AuthContextProvider")
	}
	return ctx
}
