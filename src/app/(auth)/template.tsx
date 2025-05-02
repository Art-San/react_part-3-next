'use client'

import { useState } from 'react'

export default function AuthTemplate({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [input, setInput] = useState('')

  return (
    <div className="bg-green-200">
      <div>{children}</div>
      <div className="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" border-1"
        />
      </div>
    </div>
  )
}
