import Card from '@/components/card'
import Link from 'next/link'

export default function Notifications() {
  return (
    <Card>
      <div className="flex flex-col">
        <h2 className=" text-blue-600 text-2xl">Объявления</h2>

        <Link
          className="text-sm text-green-500 text-right"
          href="/complex-dashboard/archived"
        >
          Архив
        </Link>
      </div>
    </Card>
  )
}
