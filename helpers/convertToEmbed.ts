export const convertToEmbedUrl = (url: string) => {
	const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)
	return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url
}
