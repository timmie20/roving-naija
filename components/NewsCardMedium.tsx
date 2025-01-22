import React from "react"

export default function NewsCardMedium() {
	return (
		<div className="flex-1 overflow-hidden bg-white shadow-md">
			<img
				src="https://placehold.co/600x400"
				alt="Portrait of a woman smiling"
				className="w-full"
			/>
			<div className="p-4">
				<h2 className="links mb-2 text-pretty font-Poppins text-lg font-medium">
					Lagos state governor’s wife seen jumping danfo.
				</h2>
				<p className="mb-4 text-gray-700">
					Lagos state governor’s wife seen jumping danfo after being called out for...
				</p>
				<div className="flex items-center text-sm text-gray-500">
					<i className="far fa-clock mr-2"></i>
					<span>20 November 2024.</span>
				</div>
			</div>
		</div>
	)
}
