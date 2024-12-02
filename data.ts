import { NewsDataInterface } from "./types/types" // Adjust the import path as necessary

export const data: NewsDataInterface = {
	trending: [
		{
			id: 1,
			imgUrl: "/assets/images/headshot.jpg",
			headline: "Tinubu retains Timi as petroleum minister of Nigeria despite his...",
			time: "2 hours ago",
		},
		{
			id: 2,
			imgUrl: "/assets/images/headshot.jpg",
			headline: "Favour Ezeh wins polls, becoming the first female governor in Nigeria",
			time: "6 hours ago",
		},
		{
			id: 3,
			imgUrl: "/assets/images/headshot.jpg",
			headline: "Minister of women affairs gift 200 women Christmas items.",
			time: "12 hours ago",
		},
	], // Explicitly typed for clarity

	latest: [
		{
			id: 1,
			imgUrl: "/assets/images/Frame 381.png",
			headline:
				"President Tinubu shares one hundred thousand naira for staffs of Martad Holdings Limited.",
			time: "2 hours ago",
			priority: "high",
		},
		{
			id: 2,
			imgUrl: "/assets/images/Frame 381.png",
			headline: "Nigeria to donate 100 million to Valencia flood victims",
			time: "20 November 2024",
			priority: "normal",
		},
		{
			id: 3,
			imgUrl: "/assets/images/Frame 381.png",
			headline: "Martad to share one bag of rice and chicken for staffs",
			time: "2 hours ago",
			priority: "normal",
		},
		{
			id: 4,
			imgUrl: "/assets/images/Frame 381.png",
			headline: "Arsenal lifts Champions league trophy",
			time: "2 hours ago",
			priority: "normal",
		},
		{
			id: 5,
			imgUrl: "/assets/images/Frame 381.png",
			headline: "Mark Obidiegwu donates 100 million to Martad staffs for their hardwork",
			time: "2 hours ago",
			priority: "normal",
		},
	],
}

// Function to mimic an API call
export const fetchData = async (): Promise<NewsDataInterface> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data)
		}, 2000) // Simulating a 1-second network delay
	})
}
