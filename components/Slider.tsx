import React, { useState } from "react"
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Fn = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
        "(min-width: 480px)": {
            slides: { perView: 2 },
          },
        "(min-width: 640px)": {
          slides: { perView: 3 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 5 },
        },
    },
    slides: {
        perView: 1
    },
    loop: true,

    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <Image
                src="/slider/photo-1521737711867-e3b97375f902.avif"
                alt="People Image"
                className="keen-slider__image"
                width={346}
                height={600}
                />
          </div>
          <div className="keen-slider__slide">
            <Image
                src="/slider/photo-1600275669439-14e40452d20b.avif"
                alt="People Image"
                className="keen-slider__image"
                width={346}
                height={600}
                />
          </div>
          <div className="keen-slider__slide">
            <Image
                src="/slider/photo-1670272505284-8faba1c31f7d.avif"
                alt="People Image"
                className="keen-slider__image"
                width={346}
                height={600}
                />
          </div>
          <div className="keen-slider__slide">
            <Image
                src="/slider/photo-1552960394-c81add8de6b8.avif"
                alt="People Image"
                className="keen-slider__image"
                width={346}
                height={600}
                />
          </div>
          <div className="keen-slider__slide">
            <Image
                src="/slider/photo-1598257006463-7c64a5a538cc.avif"
                alt="People Image"
                className="keen-slider__image"
                width={346}
                height={600}
                />
          </div>
          <div className="keen-slider__slide">
            <Image
                src="/slider/photo-1590649917466-06e6e1c3e92d.avif"
                alt="People Image"
                className="keen-slider__image"
                width={346}
                height={600}
                />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: { stopPropagation: () => any }) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: { stopPropagation: () => any} ) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide ===
                instanceRef.current.track.details.slides.length - 1} left={undefined}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Fn;

function Arrow(props: { disabled: any; onClick: React.MouseEventHandler<SVGSVGElement> | undefined; left: any }) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        {props.left && (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        )}
        {!props.left && (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    )
  }