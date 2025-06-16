import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main>
        <div className="">
          <h1>Главная</h1>
          <Link href={'/products-db'}>
            <p>Страница с продуктами</p>
          </Link>
        </div>
      </main>
    </>
  )
}
