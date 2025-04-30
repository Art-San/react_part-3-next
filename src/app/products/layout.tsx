export default function ProductsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-amber-400 ml-3">
      <div className="ml-5">
        <h2>Все продукты</h2>
        <div>{children}</div>
      </div>
    </div>
  )
}
