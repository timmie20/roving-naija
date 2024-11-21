"use client"
import React, { useState } from "react"
import styles from "@/components/auth/auth.module.css"
import Image from "next/image"
import logo from "@/public/assets/images/roving-naija-logo.svg"
import { Button } from "@/components/ui/button"
import Register from "@/components/auth/Register"
import Login from "@/components/auth/Login"

type FormType = "register" | "login"

export default function page() {
	const [formType, setFormType] = useState<FormType>("register")

	function toggleFormType(e: any) {
		const text = e.target.innerText.toLowerCase()
		setFormType(text)
	}
	return (
		<>
			<div className={`${styles.auth_bg} grid h-screen w-screen place-items-end px-6 py-3`}>
				<div
					className={`${styles.glass_morph_effect} h-full w-full max-w-[651px] rounded-lg py-3 shadow-lg`}>
					<div className="mx-auto grid w-full max-w-md place-items-center">
						<Image src={logo} alt="Roving naija logo" priority />

						<div className="mt-4 flex justify-between gap-4">
							<Button
								variant="custom"
								size="lg"
								onClick={(e) => toggleFormType(e)}
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
								style={
									formType === "login"
										? { backgroundColor: "var(--app-dark)", color: "white" }
										: {}
								}>
								LOGIN
							</Button>
						</div>

						<h3 className="mt-5 font-medium text-app-white">
							{formType === "register"
								? "You must be 18 or above to register"
								: "Login to your RovingNaija account"}
						</h3>

						<div className="container mt-7 flex h-full w-full items-center justify-center">
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
