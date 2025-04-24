import { cookies } from "next/headers"
import axios from "axios"
import { getCookie } from "cookies-next/server"

export async function POST() {
	try {
		// Retrieve cookie
		const cookieValue = await getCookie("user-data", { cookies })

		// Ensure cookie exists
		if (!cookieValue) {
			return new Response(
				JSON.stringify({ success: false, error: "Token not found in cookies" }),
				{
					status: 401,
				}
			)
		}

		// Parse the cookie (assuming it's a JSON object)
		const parsedPayload = JSON.parse(cookieValue)

		// Ensure the token exists inside the object
		if (!parsedPayload.msisdn) {
			return new Response(
				JSON.stringify({ success: false, error: "Invalid msisdn structure" }),
				{
					status: 400,
				}
			)
		}

		// Make the API call with the extracted token
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_VAS_BASE_URL}`,
			{ msisdn: parsedPayload.msisdn, action: "OER" }, // Sending only the msisdn
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "text/html; charset=UTF-8",
				},
			}
		)

		// const response = await axios.post(
		// 	"https://martadapi.com/rovingnaija/index.php",
		// 	{ msisdn: parsedPayload.msisdn, action: "OER" }, // Sending only the msisdn
		// 	{
		// 		headers: {
		// 			"Content-Type": "application/x-www-form-urlencoded",
		// 			Accept: "text/html; charset=UTF-8",
		// 		},
		// 	}
		// )

		return new Response(JSON.stringify({ success: true, data: response.data }), {
			status: 200,
		})
	} catch (error) {
		console.error("Error checking subscription:", error)
		return new Response(
			JSON.stringify({ success: false, error: "Failed to check subscription" }),
			{
				status: 500,
			}
		)
	}
}
