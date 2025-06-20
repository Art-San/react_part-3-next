import { Roboto_Condensed, Ballet } from 'next/font/google'
import localFont from 'next/font/local'

const someGoogleFont = Roboto_Condensed({
  subsets: ['latin']
})
const someGoogleFont2 = Ballet({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ballet-sans'
})

const lastFont = localFont({
  src: './../../assets/font/KosolapaScript-Regular.ttf'
})

export default function Home() {
  return (
    <>
      <main>
        <div className="">
          <h1 className={`${lastFont.className} text-2xl`}>Главная</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eveniet deleniti temporibus. Aspernatur minus sequi animi voluptas.
            Asperiores quasi cupiditate explicabo maxime temporibus aliquid,
            suscipit minus ad repellat debitis sequi nam blanditiis, et
            perferendis reprehenderit facilis dolore architecto, nihil inventore
            repudiandae cum laboriosam unde! Veritatis quae alias minus magnam
            quam.
          </p>
          <br />
          <p className={`${someGoogleFont.className}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eveniet deleniti temporibus. Aspernatur minus sequi animi voluptas.
            Asperiores quasi cupiditate explicabo maxime temporibus aliquid,
            suscipit minus ad repellat debitis sequi nam blanditiis, et
            perferendis reprehenderit facilis dolore architecto, nihil inventore
            repudiandae cum laboriosam unde! Veritatis quae alias minus magnam
            quam.
          </p>
          <br />
          <p className={`${someGoogleFont2.variable}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eveniet deleniti temporibus. Aspernatur minus sequi animi voluptas.
            Asperiores quasi cupiditate explicabo maxime temporibus aliquid,
            suscipit minus ad repellat debitis sequi nam blanditiis, et
            perferendis reprehenderit facilis dolore architecto, nihil inventore
            repudiandae cum laboriosam unde! Veritatis quae alias minus magnam
            quam.
            <span className=" font-ballet text-red-500">
              eveniet deleniti temporibus. Aspernatur minus sequi animi
              voluptas. Asperiores quasi cupiditate explicabo maxime temporibus
              aliquid, suscipit minus ad repellat debitis sequi nam blanditiis,
              et
            </span>
            suscipit minus ad repellat debitis sequi nam blanditiis, et
            perferendis reprehenderit facilis dolore architecto, nihil inventore
            repudi
          </p>
          <br />
          <p className={`${someGoogleFont2.className} text-sky-400`}>
            Asperiores quasi cupiditate explicabo maxime temporibus aliquid,
            suscipit minus ad repellat debitis sequi nam blanditiis, et
            perferendis reprehenderit facilis dolore architecto, nihil inventore
            repudiandae cum laboriosam unde! Veritatis quae alias minus magnam
          </p>
        </div>
      </main>
    </>
  )
}
