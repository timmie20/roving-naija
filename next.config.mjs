/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "34.29.221.229",
				port: "", // leave empty unless you're using a custom port
				pathname: "/storage/posts/**", // match all image paths under /storage/posts/
			},
		],
	},
}

export default nextConfig
