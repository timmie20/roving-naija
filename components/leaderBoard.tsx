import React from "react"
import { ScrollArea } from "./ui/scroll-area"

export default function leaderBoard() {
	const data = [
		{ position: 1, name: "Mark Obidiegwu", points: 2000, form: "up" },
		{ position: 2, name: "Timilehin Bad...", points: 1800, form: "down" },
		{ position: 3, name: "Favour Ezeh", points: 1500, form: "neutral" },
		{ position: 4, name: "Mark Obidiegwu", points: 1300, form: "up" },
		{ position: 5, name: "Timilehin Bad...", points: 1200, form: "neutral" },
		{ position: 6, name: "Favour Ezeh", points: 1000, form: "down" },
		{ position: 7, name: "Favour Ezeh", points: 1500, form: "neutral" },
		{ position: 9, name: "Mark Obidiegwu", points: 1300, form: "up" },
		{ position: 10, name: "Mark Obidiegwu", points: 1300, form: "up" },
		{ position: 11, name: "Mark Obidiegwu", points: 1300, form: "up" },
		{ position: 12, name: "Mark Obidiegwu", points: 1300, form: "up" },
	]
	return (
		<div className="w-full max-w-[350px] flex-none">
			<div className="relative inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins font-medium">Leader Board</span>
				<img src="/assets/icons/leaderboard.svg" />
			</div>

			<ScrollArea className="h-full max-h-[500px] w-full border-[1px] border-neutral-200 pb-8">
				<table className="w-full border-collapse">
					<thead className="sticky top-0 bg-white">
						<tr>
							<th className="px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
								Position
							</th>
							<th className="px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
								Name
							</th>
							<th className="px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
								Points
							</th>
							<th className="px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
								Form
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={index} className="border-t">
								<td className="px-4 py-3">
									<span
										className={`inline-block size-6 rounded-sm text-center text-white ${
											index < 3 ? "bg-green-500" : "bg-gray-300"
										}`}>
										{item.position}
									</span>
								</td>
								<td className="px-4 py-2">{item.name}</td>
								<td className="px-4 py-2">{item.points}</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 w-full bg-gradient-to-t from-white from-60% to-transparent"></div>
			</ScrollArea>
		</div>
	)
}
