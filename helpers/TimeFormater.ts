export const timeAgo = (date: string | number | Date): string => {
	const now = new Date()
	const inputDate = new Date(date)
	const elapsed = now.getTime() - inputDate.getTime()

	const units: { name: string; ms: number }[] = [
		{ name: "year", ms: 1000 * 60 * 60 * 24 * 365 },
		{ name: "month", ms: 1000 * 60 * 60 * 24 * 30 },
		{ name: "day", ms: 1000 * 60 * 60 * 24 },
		{ name: "hour", ms: 1000 * 60 * 60 },
		{ name: "minute", ms: 1000 * 60 },
		{ name: "second", ms: 1000 },
	]

	for (const unit of units) {
		const value = Math.floor(elapsed / unit.ms)
		if (value > 0) {
			return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`
		}
	}

	return "just now"
}
