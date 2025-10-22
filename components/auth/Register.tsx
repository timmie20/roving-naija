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
import { vasRegister, backendRegister } from "@/queries/auth"
import { toast } from "sonner"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
// import { HttpError } from "@/types/types"

export default function Register<T>({
	setFormType,
	// setRedirecting,
}: {
	setFormType: React.Dispatch<React.SetStateAction<T>>
	// setRedirecting: React.Dispatch<React.SetStateAction<boolean>>
}) {
	const { loginUser } = useAuthContext()
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	const formSchema = z.object({
		fullname: z.string().min(5, {
			message: "Username must be at least 5 characters.",
		}),

		msisdn: z.string().min(11, {
			message: "Phone number must be at leest 11 characters",
		}),

		email: z.string().email({
			message: "Invalid email address.",
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
			email: "",
			password: "",
			fullname: "",
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setLoading(true)

		try {
			const backendResult = await backendRegister(values)
			console.log("Backend Result:", backendResult)

			const isBackendSuccess = backendResult?.success

			if (!isBackendSuccess) {
				toast.error(backendResult?.data?.message || "User registration failed")
				return
			}
			const user = {
				msisdn: backendResult?.data.user?.msisdn,
				token: backendResult?.data?.token,
			}

			toast.success(backendResult.data?.message)

			console.log("Proceeding to call vasRegister...")

			const vasResult = await vasRegister({
				...values,
				name: values.fullname,
				action: "KVA",
			})

			console.log("VAS Result:", vasResult)

			if (vasResult?.success && vasResult.data?.status === 200) {
				toast.success(vasResult.data?.message)
				loginUser(user)
				router.push("/")
			} else {
				toast.error(vasResult?.data?.message || "VAS registration failed")
			}
		} catch (error) {
			console.error("Registration error:", error)
			toast.error("An unexpected error occurred")
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
					<FormField
						control={form.control}
						name="fullname"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										placeholder="e.g John Doe"
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
						name="msisdn"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone number</FormLabel>
								<FormControl>
									<Input
										placeholder="e.g 09126357897"
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
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="example@email.com"
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

					<div className="flex flex-col items-center space-y-3 pt-5 text-app-white">
						<Button
							variant="outline"
							className="h-[58px] w-full max-w-[263px] bg-transparent text-lg font-normal text-white"
							disabled={loading}>
							{loading ? "please wait" : "Create Account"}
						</Button>

						<p className="inline-flex items-center gap-2 font-normal text-app-white">
							<span>Already have an account?</span>
							<span
								className="cursor-pointer text-app-dark underline-offset-4 hover:underline"
								onClick={() => setFormType("login" as T)}>
								Log in
							</span>
						</p>
					</div>
				</form>
			</Form>
		</>
	)
}
