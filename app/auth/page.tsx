"use client"
import React, { useState } from "react"
import styles from "@/components/auth/auth.module.css"
import Image from "next/image"
import logo from "@/public/assets/images/roving-naija-logo.svg"
import { Button } from "@/components/ui/button"
import Register from "@/components/auth/Register"
import Login from "@/components/auth/Login"
import Link from "next/link"
import { useAuthContext } from "@/context/AuthContext"

export default function Page() {
	const { formType, setFormType } = useAuthContext()

	const [redirecting, setRedirecting] = useState(false)

	function toggleFormType(e: React.MouseEvent<HTMLButtonElement>) {
		if (e.target && e.target instanceof HTMLElement) {
			const text: string = e.target.innerText.toLowerCase()
			setFormType(text)
		}
	}
	return (
		<>
			{redirecting && (
				<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
					<div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent" />
					<p className="mt-4 text-lg font-medium text-white">Redirecting to our homepage...</p>
				</div>
			)}
			<div
				className={`${styles.auth_bg} flex h-screen w-screen items-center justify-end lg:px-2`}>
				<div
					className={`${styles.glass_morph_effect} flex h-full w-full rounded-none px-2 py-3 lg:max-w-[651px] lg:border lg:border-app-white xl:max-h-[90vh] xl:rounded-lg`}>
					<div className="mx-auto flex w-full max-w-md flex-col items-center">
						<Link href="/">
							<Image src={logo} alt="Roving naija logo" priority />
						</Link>

						<div className="mt-4 flex w-full flex-col justify-between gap-4 min-[375px]:flex-row">
							<Button
								variant="ghost"
								size="lg"
								onClick={(e) => toggleFormType(e)}
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
								onClick={(e) => toggleFormType(e)}
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
								<Register setFormType={setFormType} setRedirecting={setRedirecting} />
							) : (
								<Login setFormType={setFormType} setRedirecting={setRedirecting} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
