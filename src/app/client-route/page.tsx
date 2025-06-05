'use client'
// import { serverSideFunction } from '@/utils/server-utils'

export default function ClientRoutePage() {
  // const result = serverSideFunction()
  const result =
    'нет результата убрали серверный элемент из клиентского компонента'
  return (
    <h1>
      Клиентский компонент: <span className="text-sky-400">{result}</span>{' '}
    </h1>
  )
}
