'use client'

import { useState, useEffect } from 'react'

interface Comment {
  id: string
  body: string
}

export default function Home() {
  const [comments, setComments] = useState<Comment[]>([])
  const [search, setSearch] = useState('')
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    fetch(`/comments?query=${search}&limit=${limit}`)
      .then((res) => res.json())
      .then((data: Comment[]) => setComments(data))
      .catch(() => setComments([]))
  }, [search, limit])

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Комментарии</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск"
        className="border-1"
      />
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        placeholder="лимит"
        className="border-1"
        min={1}
      />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.id}z{comment.body}
          </li>
        ))}
      </ul>
    </>
  )
}
