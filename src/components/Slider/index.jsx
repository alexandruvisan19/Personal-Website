import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Icon } from '@iconify/react';

const skills = [
  {
    name: 'HTML',
    logo: 'logos:html-5',
  },
  {
    name: 'CSS',
    logo: 'logos:css-3',
  },
  {
    name: 'SASS',
    logo: 'logos:sass',
  },
  {
    name: 'JavaScript',
    logo: 'logos:javascript',
  },
  {
    name: 'Typescript',
    logo: 'logos:typescript-icon',
  },
  {
    name: 'React',
    logo: 'logos:react',
  },
  {
    name: 'Redux Toolkit',
    logo: 'logos:redux',
  },
  {
    name: 'Testing Library',
    logo: 'logos:testing-library',
  },
  {
    name: 'Jest',
    logo: 'logos:jest',
  },
  {
    name: 'Preact',
    logo: 'logos:preact',
  },
  {
    name: 'NextJS',
    logo: 'logos:nextjs-icon',
  },
  {
    name: 'Gatsby',
    logo: 'logos:gatsby',
  },
  {
    name: 'Astro',
    logo: 'logos:astro-icon',
  },
  {
    name: 'Graphql',
    logo: 'logos:graphql',
  },
  {
    name: 'Parcel',
    logo: 'logos:parcel-icon',
  },
  {
    name: 'Netlify',
    logo: 'logos:netlify-icon',
  },
  {
    name: 'Vercel',
    logo: 'logos:vercel-icon',
  },
  {
    name: 'Wordpress',
    logo: 'logos:wordpress-icon',
  },
];

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
          <div>
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
