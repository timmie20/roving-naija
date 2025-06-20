"use client"
import Cookies from "js-cookie"
import React from "react"
import { UserProps } from "@/types/types"
import { useSetCookie } from "cookies-next"

type FormType = string

interface AuthContextProps {
	user: UserProps | null // User object or null when not logged in
	formType: FormType
	setFormType: React.Dispatch<React.SetStateAction<FormType>>
	loginUser: (user: UserProps) => void
	redirecting: boolean
	setRedirecting: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultContext: AuthContextProps = {
	user: null,
	formType: "register",
	setFormType: () => {},
	loginUser: async () => {},
	redirecting: false,
	setRedirecting: () => {},
}

// Create the AuthContext
export const AuthContext = React.createContext<AuthContextProps>(defaultContext)

// AuthContextProvider component
export const AuthContextProvider = ({ children }: React.PropsWithChildren & {}) => {
	const [user, setUser] = React.useState<UserProps | null>(null)
	const [formType, setFormType] = React.useState<FormType>("register")
	const [redirecting, setRedirecting] = React.useState(false)

	const setCookie = useSetCookie()

	const loginUser = (user: UserProps) => {
		const token = user.token
		if (!token) throw new Error("Token not found.")
		setCookie("user-data", JSON.stringify(user), {
			maxAge: 7 * 24 * 60 * 60,
			sameSite: "strict",
			path: "/",
		})
		// localStorage.setItem("user-token", JSON.stringify({ token: token }))
		setUser(user)
		return user
	}

	// Load user from cookie on mount
	React.useEffect(() => {
		const savedUser = Cookies.get("user-data")

		if (savedUser) {
			setUser(JSON.parse(savedUser)) // Set user state
		}
	}, [])

	// Provide the context
	return (
		<AuthContext.Provider
			value={{ user, loginUser, formType, setFormType, redirecting, setRedirecting }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const ctx = React.useContext(AuthContext)
	if (!ctx) {
		throw new Error("useAuthContext must be used within an AuthContextProvider")
	}
	return ctx
}
