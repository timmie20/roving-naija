"use client"
import { useRouter } from "next/navigation"

export default function SlugPage() {
	const router = useRouter()
	// const { slug } = router.query

	return (
		<div>
			<h1>Dynamic Page</h1>
		</div>
	)
}
