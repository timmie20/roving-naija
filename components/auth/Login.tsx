"use client"
import React, { useState } from "react"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "../ui/button"
import { backendLogin } from "@/queries/auth"
import { useAuthContext } from "@/context/AuthContext"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function Login<T>({
	setFormType,
	// setRedirecting,
}: {
	setFormType: React.Dispatch<React.SetStateAction<T>>
	// setRedirecting: React.Dispatch<React.SetStateAction<boolean>>
}) {
	const [loading, setLoading] = useState(false)
	const { loginUser } = useAuthContext()
	const router = useRouter()

	// useEffect(() => {
	// 	const handleRouteChange = () => setRedirecting(false)
	// 	// @ts-expect-error: Next.js router.events is not typed in app router
	// 	if (router.events?.on) router.events.on("routeChangeComplete", handleRouteChange)
	// 	return () => {
	// 		// @ts-expect-error: Next.js router.events is not typed in app router
	// 		if (router.events?.off) router.events.off("routeChangeComplete", handleRouteChange)
	// 	}
	// }, [router, setRedirecting])

	const formSchema = z.object({
		msisdn: z.string().min(11, {
			message: "Phone number must be at leest 11 characters",
		}),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters." })
			.regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
			.regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
			.regex(/[0-9]/, { message: "Password must contain at least one digit." })
			.regex(/[@$!%*?&]/, {
				message: "Password must contain at least one special character.",
			}),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			msisdn: "",
			password: "",
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setLoading(true)
		try {
			const response = await backendLogin(values)
			console.log(response)
			const isLoginSuccess = response?.success
			if (!isLoginSuccess) {
				toast.error(response?.data?.message || "User login failed")
				return
			} else {
				const user = {
					msisdn: response?.data.user?.msisdn,
					token: response?.data?.token,
				}
				loginUser(user)
				toast.success(response?.data?.message)
				router.push("/")
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			console.error(error)
			toast.error(error.response.data.error, {
				description: "something must have gone wrong",
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
			})
		} finally {
			setLoading(false)
		}
	}
	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex w-full flex-col space-y-3">
					<FormField
						control={form.control}
						name="msisdn"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input
										placeholder="09157505223"
										{...field}
										className="bg-app-white text-app-dark placeholder:italic"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										placeholder=""
										{...field}
										className="bg-app-white text-app-dark placeholder:italic"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* <p className="cursor-pointer text-end font-light text-app-white underline-offset-4 hover:underline">
						Forget Password?
					</p> */}

					<div className="mt-auto flex flex-col items-center justify-center space-y-5 pt-6 text-app-white">
						<Button
							variant="outline"
							size="lg"
							className="h-[58px] w-full max-w-48 bg-transparent text-lg font-normal text-white"
							disabled={loading}>
							{loading ? "Please wait..." : "Sign in"}
						</Button>
						<p className="inline-flex items-center gap-2 font-normal text-app-white">
							<span>Don&apos;t have an account?</span>
							<span
								className="cursor-pointer text-app-dark underline-offset-4 hover:underline"
								onClick={() => setFormType("register" as T)}>
								Register
							</span>
						</p>
					</div>
				</form>
			</Form>
		</>
	)
}
