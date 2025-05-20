import { headers } from 'next/headers'
export async function GET() {
  const headerList = headers()
  const acceptHeader = (await headerList).get('Accept')

  console.log(1236, acceptHeader)
  const userData = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    role: 'admin'
  }

  if (acceptHeader?.includes('application/json')) {
    return new Response(JSON.stringify(userData), {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Server: 'Next.js-15-json'
      }
    })
  }

  return new Response(
    `<h1>Профиль пользователя</h1>
    <ul>
    <li>Имя: ${userData.name}</li>
    <li>Email: ${userData.email}</li>
    <li>Роль: ${userData.role}</li>
    </ul>`,
    {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        Server: 'Next.js-15-HTML'
      }
    }
  )
}

// import { headers } from 'next/headers'

// export async function GET() {
//   const headersList = await headers()

//   console.log(123, headersList.get('Authorization'))

//   return new Response('<h1>Данные пользователя</h1>', {
//     headers: {
//       'Content-Type': 'text/html; charset=UTF8',
//       Server: 'Apache/2.4.1'
//     }
//   })
// }

// import { type NextRequest } from 'next/server'

// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers)
//   console.log(12, requestHeaders.get('Authorization'))

//   return new Response('<h1>Данные пользователя</h1>', {
//     headers: {
//       'Content-Type': 'text/html; charset=UTF8',
//       Server: 'Next.js-15'
//     }
//   })
// }
