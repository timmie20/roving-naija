"use client"
import React from "react"
import styles from "@/components/auth/auth.module.css"
import Image from "next/image"
import logo from "@/public/assets/images/roving-naija-logo.svg"
import { Button } from "@/components/ui/button"
import Register from "@/components/auth/Register"
import Login from "@/components/auth/Login"
import Link from "next/link"
import { useAuthContext } from "@/context/AuthContext"
// import RedirectingModal from "@/components/shared/RedirectingModal"

export default function Page() {
	const { formType, setFormType } = useAuthContext()
	// const [redirecting, setRedirecting] = React.useState(false)

	function toggleFormType(e: React.MouseEvent<HTMLButtonElement>) {
		if (e.target && e.target instanceof HTMLElement) {
			const text: string = e.target.innerText.toLowerCase()
			setFormType(text)
		}
	}
	return (
		<>
			{/* <RedirectingModal open={redirecting} /> */}
			<div
				className={`${styles.auth_bg} flex h-screen w-screen items-center justify-end lg:px-2`}>
				<div
					className={`${styles.glass_morph_effect} flex h-full w-full overflow-y-auto rounded-none px-6 pb-5 pt-3 md:pb-0 lg:max-w-[651px] lg:border lg:border-app-white xl:max-h-[95vh] xl:rounded-lg`}>
					<div className="mx-auto flex w-full max-w-md flex-col items-center">
						<Link href="/">
							<Image src={logo} alt="Roving naija logo" priority />
						</Link>

						<div className="mt-4 flex w-full flex-col justify-between gap-4 min-[375px]:flex-row">
							<Button
								variant="ghost"
								size="lg"
								onClick={toggleFormType}
								className="w-full"
								style={
									formType === "register"
										? { backgroundColor: "var(--app-dark)", color: "white" }
										: {}
								}>
								REGISTER
							</Button>
							<Button
								variant="ghost"
								onClick={toggleFormType}
								size="lg"
								className="w-full"
								style={
									formType === "login"
										? { backgroundColor: "var(--app-dark)", color: "white" }
										: {}
								}>
								LOGIN
							</Button>
						</div>

						<h3 className="mt-3 font-Poppins text-base font-medium text-app-white">
							{formType === "register"
								? "You must be 18 or above to register"
								: "Login to your RovingNaija account"}
						</h3>

						<div className="mt-4 w-full">
							{formType === "register" ? (
								<Register setFormType={setFormType} />
							) : (
								<Login setFormType={setFormType} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
