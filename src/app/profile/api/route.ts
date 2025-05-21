import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()

  ;(await cookieStore).set('theme', 'dark')

  const data = (await cookieStore).get('theme')

  console.log(123, data)
  // 123 { name: 'theme', value: 'dark', path: '/' }

  const theme = data?.value || 'length'

  return new Response(`<h1>Данные пользователя ${theme}</h1>`, {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  })
}

// import { type NextRequest } from 'next/server'

// export async function GET(request: NextRequest) {

//   // Чтение куки из запроса
//   const data = request.cookies.get('theme')

//   const theme = data?.value || 'length'

//   // Установка куки через заголовок ответа
//   return new Response(`<h1>Tema: ${theme}</h1>`, {
//     headers: {
//       'Set-Cookie': 'theme=dark',
//       'Content-Type': 'text/html; charset=UTF8'
//     }
//   })
// }
