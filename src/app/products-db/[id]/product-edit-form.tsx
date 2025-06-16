'use client'

import { FormState, editProduct } from '@/actions/products'
import { useActionState } from 'react'
import { Product } from '@/app/products-db/page'

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
    values: {
      title: '',
      price: '',
      description: ''
    }
  }

  const [state, formAction, isPending] = useActionState(
    (prevState: FormState, formData: FormData) => {
      return editProduct(product.id, prevState, formData)
    },
    initialState
  )

  //   const editProductWithId = editProduct.bind(null, product.id);

  //   function multiply(a, b) {
  //     return a * b;
  //   }

  //   const double = multiply.bind(null, 2);

  //   console.log(double(5));// 10

  //   const [state, formAction, isPending] = useActionState(
  //     editProductWithId,
  //     initialState
  //   );

  return (
    <>
      <h1 className=" text-2xl">Редактирование товара</h1>
      <form action={formAction} className="p-4 space-y-4 max-w-96">
        {/* <input name="id" value={product.id} /> */}
        <div>
          <label className="text-white">
            Название
            <input
              type="text"
              className="block w-full p-2 text-black border rounded bg-white"
              name="title"
              defaultValue={product.title}
            />
          </label>
          {state.errors.title && (
            <p className="text-red-500">{state.errors.title}</p>
          )}
        </div>
        <div>
          <label className="text-white">
            Цена
            <input
              type="number"
              className="block w-full p-2 text-black border rounded bg-white"
              name="price"
              defaultValue={product.price}
            />
          </label>
          {state.errors.price && (
            <p className="text-red-500">{state.errors.price}</p>
          )}
        </div>
        <div>
          <label className="text-white">
            Описание
            <textarea
              className="block w-full p-2 text-black border rounded bg-white"
              name="description"
              defaultValue={product.description ?? ''}
            />
          </label>
          {state.errors.description && (
            <p className="text-red-500">{state.errors.description}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 px-2 py-1 text-white"
        >
          {isPending ? 'Сохранение' : 'Сохранить изменения'}
        </button>
        {/* <Submit /> */}
      </form>
    </>
  )
}
