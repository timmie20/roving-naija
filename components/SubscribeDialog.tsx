import React from "react"
import Spinner from "./shared/spinner"

export default function SubscribeDialog({
	dialogRef,
}: {
	dialogRef: React.RefObject<HTMLDialogElement>
}) {
	return (
		<dialog
			ref={dialogRef}
			className="fixed left-1/2 top-1/2 z-50 w-80 max-w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-white/10 bg-white p-6 text-center text-black shadow-xl backdrop-blur-sm backdrop:bg-black/40">
			<div className="flex flex-col items-center justify-center gap-4">
				<div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-transparent" />
				<h1 className="text-lg font-semibold text-gray-800 lg:text-2xl">
					OOPS 😬, You do not see to have an active subscription
				</h1>

				<div>
					<p className="text-base text-gray-600">
						Please wait while we take you to the pricing page.
					</p>
					<Spinner />
				</div>
			</div>
		</dialog>
	)
}
