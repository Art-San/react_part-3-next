// import { clientSideFunction } from '@/utils/client'
import { serverSideFunction } from '@/utils/server-utils'

export default function ServerRoutePage() {
  const result = serverSideFunction()
  // const result2 = clientSideFunction()
  return (
    <h1>
      Серверный компонент: <span className="text-green-400">{result}</span>{' '}
    </h1>
  )
}
