import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { hasCookie } from "cookies-next/server"
import { cookies } from "next/headers"

// This function can be marked `async` if using `await` inside

const protectedRoutes = ["/", "/play-game"]

const publicRoutes = [
	"/contact-us",
	"/faqs",
	"/instructions",
	"/pricing",
	"/advert",
	"/auth",
]

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname

	const isProtected = protectedRoutes.includes(path) || path.startsWith("/topics")

	// const isPublic = publicRoutes.includes(path)

	// const token = request.cookies.get("admin-token")?.value

	const user = await hasCookie("user-data", { cookies })
	const isAuthenticated = !!user

	if (isProtected && !isAuthenticated) {
		return NextResponse.redirect(new URL("/auth", request.nextUrl))
	}

	if (path === "/auth" && isAuthenticated) {
		return NextResponse.redirect(new URL("/", request.url))
	}

	return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/topics/:path*", "/"],
}
