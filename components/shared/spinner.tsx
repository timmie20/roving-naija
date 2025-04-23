import React from "react"

export default function Spinner() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
			<div className="mx-3 h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
			<span>loading...</span>
		</div>
	)
}
