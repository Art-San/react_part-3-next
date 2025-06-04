export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000))
  return <div>Продукт</div>
}
