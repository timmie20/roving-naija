import React from "react"
import styles from "./auth.module.css"
import {
	Form,
	FormControl,
	FormDescription,
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

export default function Login<T>({
	setFormType,
}: {
	setFormType: React.Dispatch<React.SetStateAction<T>>
}) {
	const formSchema = z.object({
		fullname: z.string().min(5, {
			message: "Username must be at least 5 characters.",
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
			password: "",
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
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
								<FormLabel>Fullname or Username </FormLabel>
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

					<p className="cursor-pointer text-end font-light text-app-white underline-offset-4 hover:underline">
						Forget Password?
					</p>

					<div className="flex flex-col items-center justify-center space-y-5 pt-6 text-app-white">
						<Button
							variant="outline"
							size="lg"
							className="h-[58px] w-full max-w-48 bg-transparent text-lg font-normal text-white">
							Sign in
						</Button>
						<p className="inline-flex items-center gap-2 font-normal text-app-white">
							<span>Don't have an account?</span>
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