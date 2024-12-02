import React from "react"
import styles from "./pricing.module.css"
import MainLayout from "@/components/app/MainLayout"
export default function page() {
	const plans = [
		{
			name: "SILVER PLAN",
			price: "N100/Day",
			features: [
				"One day free trial",
				"24 Hours access",
				"Full access to all features",
				"70 Bonus coin",
				"Eligibility to win cash prizes",
			],
		},
		{
			name: "GOLD PLAN",
			price: "N200/Week",
			features: [
				"One day free trial",
				"7 Days access",
				"Full access to all features",
				"175 Bonus coin",
				"Eligibility to win cash prizes",
			],
		},
		{
			name: "PLANTINUM PLAN",
			price: "N500/Month",
			features: [
				"One day free trial",
				"24 Hours access",
				"Full access to all features",
				"70 Bonus coin",
				"Eligibility to win cash prizes",
			],
		},
		{
			name: "DIAMOND PLAN",
			price: "N4500/Year",
			features: [
				"One day free trial",
				"24 Hours access",
				"Full access to all features",
				"70 Bonus coin",
				"Eligibility to win cash prizes",
			],
		},
	]
	return (
		<MainLayout>
			<section
				className={`${styles.pricing_bg} flex h-[347px] w-full items-center justify-center`}>
				<h1 className="font-Cormorant text-5xl text-white">PRICING PLAN</h1>
			</section>

			<div className="container mx-auto py-12">
				<h1 className="mb-8 text-center font-Cormorant text-5xl font-bold">
					Choose the plan that is Best for you!
				</h1>
				<div className="flex flex-wrap justify-center gap-6">
					{plans.map((plan, index) => (
						<div key={index} className="w-64 rounded-[8px] bg-[#E4FFE7] p-6 shadow-lg">
							<h2 className="mb-4 text-center font-Poppins">{plan.name}</h2>
							<p className="mb-4 text-center text-2xl font-medium">{plan.price}</p>
							<p className="mb-4 text-start text-xs italic text-gray-700">This plan gets</p>
							<ul className="mb-6">
								{plan.features.map((feature, index) => (
									<li key={index} className="mb-3 flex items-center gap-2">
										<span className="flex size-5 items-center justify-center rounded-full bg-secondary-snow">
											<svg
												width="12"
												height="12"
												viewBox="0 0 12 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10.7637 3.26367L4.5 9.5332L1.23633 6.26367L1.76367 5.73633L4.5 8.4668L10.2363 2.73633L10.7637 3.26367Z"
													fill="#007273"
												/>
											</svg>
										</span>
										<span className="font-Poppins text-xs text-black">{feature}</span>
									</li>
								))}
							</ul>
							<button className="w-full rounded bg-secondary-darker px-4 py-2 font-Inter text-white">
								START PLAN NOW
							</button>
						</div>
					))}
				</div>
			</div>
		</MainLayout>
	)
}
