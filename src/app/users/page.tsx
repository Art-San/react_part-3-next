'use client'
import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/api/users'
export default function UsersPage() {
  const [users, setUsers] = useState<{ id: string; text: string }[]>()
  console.log(123, users)

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const text = await response.json()
        setUsers(text)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    getData()
  }, [])

  return (
    <div>
      <ul>
        {users?.map((user) => {
          return <li key={user.id}>{user?.text}</li>
        })}
      </ul>
    </div>
  )
}
