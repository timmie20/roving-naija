import React from "react"

interface RedirectingModalProps {
	open: boolean
	message?: string
}

const RedirectingModal: React.FC<RedirectingModalProps> = ({ open, message }) => {
	if (!open) return null
	return (
		<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
			<div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent" />
			<p className="mt-4 text-lg font-medium text-white">
				{message || "Redirecting to our homepage..."}
			</p>
		</div>
	)
}

export default RedirectingModal
