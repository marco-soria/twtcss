import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export const Headliners: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (offset: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.getElementsByTagName("div")[0].clientWidth;
      carouselRef.current.scrollLeft += itemWidth * offset;
    }
  };

  return (
    
      <div className="bg-slate-200 dark:bg-slate-900">
        <div
            className=" mx-auto pt-20 max-w-screen-lg text-zinc-900 dark:text-zinc-200"
          >
            <h2>
              <span
                className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent"
                >Headliners</span>
            </h2>
            <p>
              Experience the sonic delight from these made-up artists across 7 days
              that music fans are calling “one of the many gigs that will happen
              this year”
            </p>
            <div className="flex">
              <div
                id="previous"
                className="relative -top-8 flex cursor-pointer items-center justify-center p-2 text-5xl"
                onClick={() => scrollCarousel(-1)}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
              <div
                id="carousel"
                ref={carouselRef}
                className="mt-4 flex w-full flex-1 snap-x gap-4 overflow-x-auto scroll-smooth pb-5 scrollbar-none"
              >
                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    
                    className="bg-band1 h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  ></div>
                  <h5 className="mt-2">Corduroy Gary</h5>
                  <h6>1st July 9pm - Main Stage</h6>
                </div>
                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    
                    className="bg-band2 h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  ></div>
                  <h5 className="mt-2">Dave's showing off again</h5>
                  <h6>2nd July 9pm - Main Stage</h6>
                </div>
                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    
                    className="bg-band3 h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  ></div>
                  <h5 className="mt-2">Sarah can't have dairy</h5>
                  <h6>3rd July 9pm - Main Stage</h6>
                </div>
                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    
                    className="bg-band4 h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  ></div>
                  <h5 className="mt-2">Corduroy Gary</h5>
                  <h6>1st July 9pm - Main Stage</h6>
                </div>
                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    
                    className="bg-band5 h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  ></div>
                  <h5 className="mt-2">Corduroy Gary</h5>
                  <h6>1st July 9pm - Main Stage</h6>
                </div>
                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    
                    className="bg-band6 h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  ></div>
                  <h5 className="mt-2">Corduroy Gary</h5>
                  <h6>1st July 9pm - Main Stage</h6>
                </div>
                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    
                    className="bg-band7 h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  ></div>
                  <h5 className="mt-2">Corduroy Gary</h5>
                  <h6>1st July 9pm - Main Stage</h6>
                </div>
              </div>
              <div
                id="next"
                className="relative -top-8 flex cursor-pointer items-center justify-center p-2 text-5xl"
                onClick={() => scrollCarousel(1)}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
            </div>
      </div>
    
  )
}
