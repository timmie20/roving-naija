import MainLayout from "@/components/app/MainLayout"
import SectionPage from "@/components/shared/SectionPage"
import React from "react"

export const Business = () => {
	return (
		<>
			<MainLayout>
				<div className="mx-auto max-w-screen-xl">
					<SectionPage type="business" />
				</div>
			</MainLayout>
		</>
	)
}
