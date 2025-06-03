import { cookies } from 'next/headers'

export default async function About() {
  const cookiesStore = await cookies()
  const theme = cookiesStore.get('theme')
  console.log(12, theme)

  return (
    <div>
      <h1>О компании</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  )
}
