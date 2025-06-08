'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTheme } from '@/components/theme-provider'

export default function ClientRoutePage() {
  const theme = useTheme()
  const settings = {
    dots: true
  }
  return (
    <div className="image-slider-container">
      <div className="">
        <Slider {...settings} className="">
          <div>
            <img src="https://s1.1zoom.me/prev/608/Mountains_Lake_Lake_Sary-Chelek_Kyrgyzstan_607774_600x400.jpg" />
          </div>
          <div>
            <img src="https://s1.1zoom.me/prev/608/Mountains_Lake_Lake_Sary-Chelek_Kyrgyzstan_607774_600x400.jpg" />
          </div>
          <div>
            <img src="https://s1.1zoom.me/prev/608/Mountains_Lake_Lake_Sary-Chelek_Kyrgyzstan_607774_600x400.jpg" />
          </div>
          <div>
            <img src="https://s1.1zoom.me/prev/608/Mountains_Lake_Lake_Sary-Chelek_Kyrgyzstan_607774_600x400.jpg" />
          </div>
        </Slider>
      </div>

      <div className=" mt-5" style={{ background: theme.color.primary }}>
        Теиа применяется
      </div>
    </div>
  )
}
