import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

export async function middleware() {
  const response = NextResponse.next()

  response.headers.set('X-Custom-Header', 'Pisat headers nado na English')

  return response
}

// export function middleware() {
//   const response = NextResponse.next()

//   response.headers.set('X-Custom-Header', 'Hello from middleware')
//   return response
// }

// export async function middleware(request: NextRequest) {
//   const response = NextResponse.next()

//   const theme = request.cookies.get('theme')
//   if (theme?.value === '') {
//     console.log('проскочил проскочил')
//     response.cookies.set('theme', 'dark')
//   }

//   return response
// }
// export async function middleware(request: NextRequest) {
//   const response = NextResponse.next()

//   const theme = request.cookies.get('theme')
//   console.log(122, theme)
//   if (theme === undefined) {
//     console.log('проскочил проскочил')
//     response.cookies.set('theme', 'dark')
//   }

//   return response
// }
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/profile') {
//     return NextResponse.rewrite(new URL('/hello', request.url))
//   }

//   return NextResponse.next()
// }
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/profile') {
//     return NextResponse.redirect(new URL('/hello', request.url))
//   }

//   return NextResponse.next()
// }

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
//   matcher: '/profile'
// }
