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
import { FcGoogle } from "react-icons/fc"
import { register } from "@/queries/auth"
import { toast } from "sonner"
import { useAuthContext } from "@/context/AuthContext"
// import { HttpError } from "@/types/types"

export default function Register<T>({
	setFormType,
}: {
	setFormType: React.Dispatch<React.SetStateAction<T>>
}) {
	const { loginUser } = useAuthContext()
	const [loading, setLoading] = useState(false)

	const formSchema = z.object({
		fullname: z.string().min(5, {
			message: "Username must be at least 5 characters.",
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
			fullname: "",
			email: "",
			password: "",
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setLoading(true)
		try {
			const result = await register(values)
			if (result.message === "User registered successfully") {
				loginUser(result)
				toast.success(result.message)
			}
			form.reset()
			console.log(result)
		} catch (error) {
			toast.error("Unable to login user", {
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
				position: "top-right",
			})
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
								<FormLabel>Fullname</FormLabel>
								<FormControl>
									<Input
										placeholder="John Doe"
										{...field}
										className="bg-app-white text-app-dark"
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
										placeholder="John Doe"
										{...field}
										className="bg-app-white text-app-dark"
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
										placeholder="John Doe"
										{...field}
										className="bg-app-white text-app-dark"
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

						<span>OR</span>

						<Button
							className="mt-2 inline-flex items-center bg-transparent text-sm font-normal"
							variant="outline">
							<FcGoogle size="25" />
							<span>Sign up with Google</span>
						</Button>
					</div>
				</form>
			</Form>
		</>
	)
}
