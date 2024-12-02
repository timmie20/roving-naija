import React from "react"

export default function leaderBoard() {
	const data = [
		{ position: 1, name: "Mark Obidiegwu", points: 2000, form: "up" },
		{ position: 2, name: "Timilehin Bad...", points: 1800, form: "down" },
		{ position: 3, name: "Favour Ezeh", points: 1500, form: "neutral" },
		{ position: 4, name: "Mark Obidiegwu", points: 1300, form: "up" },
		{ position: 5, name: "Timilehin Bad...", points: 1200, form: "neutral" },
		{ position: 6, name: "Favour Ezeh", points: 1000, form: "down" },
		{ position: 7, name: "Favour Ezeh", points: 1500, form: "neutral" },
		{ position: 8, name: "Mark Obidiegwu", points: 1300, form: "up" },
		{ position: 8, name: "Mark Obidiegwu", points: 1300, form: "up" },
		{ position: 8, name: "Mark Obidiegwu", points: 1300, form: "up" },
		{ position: 8, name: "Mark Obidiegwu", points: 1300, form: "up" },
	]
	return (
		<div className="h-[505px] w-full">
			<div className="relative inline-flex items-center gap-2 pb-4">
				<span className="font-base font-Poppins font-medium">Trending</span>
				<img src="/assets/icons/leaderboard.svg" />
			</div>

			<div className="min-w-full">
				<table className="border-[1px] border-neutral-200">
					<thead>
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
					<ScrollArea className="h-72 w-48 rounded-md border">
						<div className="p-4">
							<h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
							{tags.map((tag) => (
								<>
									<div key={tag} className="text-sm">
										{tag}
									</div>
									<Separator className="my-2" />
								</>
							))}
						</div>
					</ScrollArea>
					<tbody className="">
						{data.map((item, index) => (
							<tr key={index} className={`border-t ${index >= 6 ? "opacity-50" : ""}`}>
								<td className="px-4 py-3">
									<span
										className={`inline-block h-6 w-6 rounded-full text-center text-white ${index < 3 ? "bg-green-500" : "bg-gray-300"}`}>
										{item.position}
									</span>
								</td>
								<td className="px-4 py-2">{item.name}</td>
								<td className="px-4 py-2">{item.points}</td>
								{/* <td className="px-4 py-2">{getFormIcon(item.form)}</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
