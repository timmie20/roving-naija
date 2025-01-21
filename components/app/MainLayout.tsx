import React from "react"
import Appbar from "../shared/appbar"
import Footer from "../shared/footer"

interface MainLyaoutProps {
	children: React.ReactNode
}
export default function MainLayout({ children }: MainLyaoutProps) {
	return (
		<>
			<Appbar />
			{children}
			<Footer />
		</>
	)
}
