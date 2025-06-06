import { ImageSlider } from '@/components/image-slider'
import { serverSideFunction } from '@/utils/server-utils'

export default function ServerRoutePage() {
  const result = serverSideFunction()
  return (
    <>
      <div className=" flax flex-col ">
        <ImageSlider />
        <p className=" text-2xl text-sky-600 text-center mt-6">{result}</p>
      </div>
    </>
  )
}
