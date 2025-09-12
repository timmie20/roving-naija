"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

type HeadingLinkProps = {
	children: React.ReactNode
	slug: number
	className?: string
} & VariantProps<typeof headingStyles>

const headingStyles = cva(
	"cursor-pointer tracking-tight font-semibold hover:underline first:mt-0 line-clamp-3",
	{
		variants: {
			size: {
				sm: "text-base md:text-lg xl:text-xl",
				md: "text-lg md:text-xl lg:text-2xl",
				lg: "text-xl md:text-2xl lg:text-3xl",
			},
			intent: {
				default: "text-black",
				highlight: "text-blue-700",
			},
		},
		defaultVariants: {
			size: "md",
			intent: "default",
		},
	}
)

export function Title({ children, slug, size, intent, className }: HeadingLinkProps) {
	const router = useRouter()

	const handleRoute = () => {
		router.push(`/${String(slug)}`)
	}

	return (
		<h2 className={headingStyles({ size, intent, className })} onClick={handleRoute}>
			{children}
		</h2>
	)
}
