import TitleOne from "../UI/TitleOne"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { TestimonialsData } from "../data/Data"

import { GoArrowRight, GoArrowLeft } from "react-icons/go"

// import quotepng from '../assets/quote.png'

export default function Testimonial() {
  return (
    <section id="Testimonials">
      <div className="container testimonials-container">
        <TitleOne
          titleSm={"What My Clients Say"}
          title={"Testimonial"}
          className={"Testimonial-title"}
        />
        <Swiper
          className="testimonial-wrapper"
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
        >
          {TestimonialsData.map(({ testText, info, name }, index) => {
            return (
              <SwiperSlide key={index}>
                <article className="testimonial-article">
                  <p className="testimonial-text">{testText}</p>
                  <div className="em-div"></div>
                  <h5>{name}</h5>
                  <small>{info}</small>
                </article>
              </SwiperSlide>
            )
          })}
          <div className="navigation-buttons">
            <button className="button-prev-slide">
              <GoArrowLeft />
            </button>
            <button className="button-next-slide">
              <GoArrowRight />
            </button>
          </div>
          <div className="quote-png">
            <img src="" alt="quote-img" />
          </div>
        </Swiper>
      </div>
    </section>
  )
}
