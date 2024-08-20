import React, { useEffect } from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  useEffect(() => {
    const btns: NodeListOf<Element> = document.querySelectorAll('.btn');
    btns.forEach((btn: Element, index: number) => {
      btn.addEventListener('click', () => {
        const subField: Element | null | undefined =
          btn.parentNode?.querySelector('.sub-field');

        if (subField && subField.classList.contains('active')) {
          btns.forEach((btn: Element) => {
            const subField: Element | null | undefined =
              btn.parentNode?.querySelector('.sub-field');
            if (subField) {
              subField.classList.remove('active');
            }
            btn.parentElement!.style.setProperty(
              '--color',
              'rgba(0, 0, 0, 0.2)'
            );
            btn.parentElement!.style.setProperty('--bgColor', 'white');
            btn.parentElement!.style.setProperty(
              '--headColor',
              'rgba(0,0,0,0.6)'
            );
            btn.parentElement!.style.setProperty(
              '--borderColor',
              'rgba(0, 0, 0, 0.2)'
            );
          });
        } else {
          btns.forEach((btn: Element) => {
            const subField: Element | null | undefined =
              btn.parentNode?.querySelector('.sub-field');
            if (subField) {
              subField.classList.remove('active');
            }
            btn.parentElement!.style.setProperty(
              '--color',
              'rgba(0, 0, 0, 0.2)'
            );
            btn.parentElement!.style.setProperty('--bgColor', 'white');
            btn.parentElement!.style.setProperty(
              '--headColor',
              'rgba(0,0,0,0.6)'
            );

            btn.parentElement!.style.setProperty(
              '--borderColor',
              'rgba(0, 0, 0, 0.2)'
            );
          });

          for (let i: number = 0; i < index; i++) {
            btns[i].parentElement!.style.setProperty(
              '--color',
              'rgba(0, 0, 0, 1)'
            );
          }
          for (let i: number = 0; i <= index; i++) {
            btns[i].parentElement!.style.setProperty(
              '--borderColor',
              'rgba(0, 0, 0, 1)'
            );
          }
          btn.parentElement!.style.setProperty('--bgColor', 'black');
          btn.parentElement!.style.setProperty('--headColor', 'rgba(0,0,0,1)');
          btn.parentElement!.style.setProperty(
            '--borderColor',
            'rgba(0, 0, 0, 1)'
          );

          btn.parentElement!.style.setProperty('--color', 'rgba(0, 0, 0, 1)');
          subField?.classList.add('active');
        }
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="w-full h-dvh bg-white flex  items-center justify-center flex-col gap-10 pt-[75px]"
    >
      <h1 className="text-5xl font-semibold ">Why People Love Us</h1>
      <div className="flex items-center gap-10 justify-center">
        <div className="h-[450px] w-[500px] bg-[rgba(0,0,0,0.1)]  justify-center items-end rounded-[20px] hidden lg:flex">
          <section className="embla" dir="rtl">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {slides.map((url, index) => (
                  <div className="embla__slide" key={index}>
                    {/* <div className="embla__img">{index}</div> */}
                    <img
                      src={url}
                      alt=""
                      className="h-[350px] w-[300px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="container sm:w-[450px] w-[90%]">
          <div className="group">
            <button
              className="btn font-normal text-md"
              onClick={() => onDotButtonClick(0)}
            >
              Support System
            </button>
            <p className="sub-field text-base font-light">
              Our dedicated support team provides prompt assistance, guidance,
              and solutions, ensuring our clients feel supported every step of
              the way.
            </p>
          </div>
          <div className="group">
            <button
              className="btn font-normal text-md"
              onClick={() => onDotButtonClick(1)}
            >
              Friendly Relationship
            </button>
            <p className="sub-field text-base font-light">
              We prioritize building genuine connections, fostering trust, and
              creating a welcoming atmosphere where clients feel valued and
              understood.
            </p>
          </div>
          <div className="group">
            <button
              className="btn font-normal text-md"
              onClick={() => onDotButtonClick(2)}
            >
              Business Strategies
            </button>
            <p className="sub-field text-base font-light">
              We offer innovative, tailored strategies that drive growth and
              success, empowering businesses to thrive in today's dynamic
              marketplace with confidence and clarity.
            </p>
          </div>
          <div className="group">
            <button
              className="btn font-normal text-md"
              onClick={() => onDotButtonClick(3)}
            >
              Innovative Solutions
            </button>
            <p className="sub-field text-base font-light">
              Our team focuses on creativity and forward-thinking approaches to
              provide cutting-edge solutions tailored to meet the unique needs
              of our clients.
            </p>
          </div>
          <div className="group">
            <button
              className="btn font-normal text-md"
              onClick={() => onDotButtonClick(4)}
            >
              Client-Centric Approach
            </button>
            <p className="sub-field text-base font-light">
              We emphasize personalized service, ensuring that every client
              feels valued and satisfied through customized strategies and
              dedicated support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
