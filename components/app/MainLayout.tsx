import React, { PropsWithChildren } from "react"
import Appbar from "../shared/appbar"
import Footer from "../shared/footer"

interface MainLyaoutProps extends PropsWithChildren {}
export default function MainLayout({ children }: MainLyaoutProps) {
	return (
		<>
			<Appbar />
			{children}
			<Footer />
		</>
	)
}
