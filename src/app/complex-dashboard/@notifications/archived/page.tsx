import Card from '@/components/card'
import Link from 'next/link'

export default function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col">
        <h2 className=" text-blue-600 text-2xl">Архив объявлений</h2>
        <p>Куча разных</p>
        <Link
          className="text-sm text-green-500 text-right"
          href="/complex-dashboard"
        >
          Активные
        </Link>
      </div>
    </Card>
  )
}
