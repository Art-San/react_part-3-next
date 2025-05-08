// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count)
// }

export default function ProductDetailsLayout({
  children
}: {
  children: React.ReactNode
}) {
  // const random = getRandomInt(2)

  // if (random === 1) {
  //   throw new Error('Ошибка возникла в макете [productId]')
  // }
  return (
    <div className="bg-green-400 ml-10">
      <aside>
        <h3>Рекомендуемые товары</h3>
      </aside>
      <h3>Все продукты</h3>
      <main>{children}</main>
    </div>
  )
}
