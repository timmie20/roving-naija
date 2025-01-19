import React from "react"

export default function SectionHeader({ type }: { type: string }) {
	return (
		<div className="h-16 rounded-sm bg-[#E7E7E7]">
			<div className="flex h-full w-fit min-w-[20%] items-center justify-center bg-primary-dark px-4">
				<p className="text-center font-Cormorant text-3xl font-bold text-app-white">
					{`${type} News`}
				</p>
			</div>
		</div>
	)
}
