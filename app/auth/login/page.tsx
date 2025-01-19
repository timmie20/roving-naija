"use client"
import React, { useState } from "react"
import styles from "@/components/auth/auth.module.css"
import Image from "next/image"
import logo from "@/public/assets/images/roving-naija-logo.svg"
import { Button } from "@/components/ui/button"
import Register from "@/components/auth/Register"
import Login from "@/components/auth/Login"
import Link from "next/link"

type FormType = "register" | "login" | string

export default function Page() {
	const [formType, setFormType] = useState<FormType>("register")

	function toggleFormType(e: React.MouseEvent<HTMLButtonElement>) {
		if (e.target && e.target instanceof HTMLElement) {
			const text: string = e.target.innerText.toLowerCase()
			setFormType(text)
		}
	}
	return (
		<>
			<div
				className={`${styles.auth_bg} flex h-screen w-screen items-center justify-end lg:px-2`}>
				<div
					className={`${styles.glass_morph_effect} flex h-full w-full rounded-lg px-2 py-3 lg:max-h-[808px] lg:max-w-[651px] lg:border lg:border-app-white`}>
					<div className="mx-auto flex w-full max-w-md flex-col items-center">
						<Link href="/">
							<Image src={logo} alt="Roving naija logo" priority />
						</Link>

						<div className="mt-4 flex w-full flex-col justify-between gap-4 min-[375px]:flex-row">
							<Button
								variant="custom"
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
								variant="custom"
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
