'use client'
import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/profile/api'

export default function ProfilePage() {
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Accept: 'tps'
          }
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const text = await response.text()
        setHtmlContent(text)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getData()
  }, []) // Пустой массив зависимостей означает, что эффект выполнится один раз при монтировании

  return (
    <>
      <div>Страница пользователя</div>

      {/* Осторожно вставляем HTML */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  )
}

// const API_URL = 'http://localhost:3000/profile/api'

// export default async function ProfilePage() {
//   async function getData() {
//     const response = await fetch(API_URL, {
//       headers: {
//         Accept: 'tps'
//       }
//     })

//     const text = await response.text()
//     console.log(123, text)
//     return text
//   }

//   const data = await getData()

//   return (
//     <>
//       <div>Страница пользователя</div>
//       <div dangerouslySetInnerHTML={{ __html: data }} />
//     </>
//   )
// }
