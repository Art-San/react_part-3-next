import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link className="text-blue-800" href="/about">
        Перейти на страницу о нас
      </Link>
      <br />
      <Link className="text-red-600" href="/dashboard">
        Перейти в панель управления
      </Link>
    </div>
  )
}
// 'use client'
// import { useState } from 'react'

// export default function Home() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <div className="">{count}</div>
//       <button onClick={() => setCount((prev: number) => prev + 1)}>жми</button>
//     </div>
//   )
// }
