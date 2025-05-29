export const dynamic = 'force-static'

export const revalidate = 10

const API_URL = 'https://67b41ad7392f4aa94fa956ee.mockapi.io/api/v1/comments'

export async function GET() {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Failed to fetch users')
    const users = await response.json()
    return Response.json(users)
  } catch {
    return new Response(null, { status: 500 })
  }
}
