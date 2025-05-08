import type { Metadata } from 'next'

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

type Props = {
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const id = (await params).productId

  const random = getRandomInt(2)

  if (random === 1) {
    throw new Error(`Ошибка на странице продукта ${id}`)
  }

  return {
    title: `Продукт ${id}`,
    description: `Продукт ${id} - хит продаж`
  }
}

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId
  return <h1>Описание продукта {productId}</h1>
}
