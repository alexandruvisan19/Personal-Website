import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import { skills } from '../../data';

function SliderComponent() {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className='md:w-[35rem] w-full m-auto'>
      <h3 className='text-xl text-center mb-8'>
        Technologies I'm familiar with:
      </h3>
      <Slider {...settings} className='text-center'>
        {skills.map(skill => (
          <div key={skill.name}>
            <span className='text-[0.7rem] font-bold relative bottom-2'>
              {skill.name}
            </span>
            <Icon
              icon={skill.logo}
              width={40}
              height={40}
              className='m-auto'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
