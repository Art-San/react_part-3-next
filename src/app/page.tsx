import Link from 'next/link'

export default function Home() {
  return (
    <div className="mt-5 mx-10 flex flex-col items-center gap-4">
      <Link
        href={'/client-route'}
        className=" mt-3 w-1/6 p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white text-center"
      >
        client-route
      </Link>
      <Link
        href={'/server-route'}
        className=" mt-3 w-1/2 md:w-1/3 p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white text-center"
      >
        server-route
      </Link>
    </div>
  )
}
