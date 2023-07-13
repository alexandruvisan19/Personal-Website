import { motion } from 'framer-motion';

export default function Logo() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 0)',
    },
  };

  return (
    <motion.svg
      width='285'
      height='80'
      viewBox='0 0 376.7 81'
      xmlns='http://www.w3.org/2000/svg'
      className='item'>
      <motion.path
        transition={{
          default: { duration: 6, ease: 'circIn' },
          fill: { duration: 8, ease: 'circIn' },
        }}
        variants={icon}
        initial='hidden'
        animate='visible'
        strokeWidth={3}
        vector-effect='non-scaling-stroke'
        transform='translate(0,100)'
        d='M-5.92 -7.29C-0.42 -7.31 -5.87 -12.97 -8.65 -7.97C-9.2 -6.98 -10.13 3.49 7.86 -1.76C13.54 -3.43 27.21 -13.76 51.3 -38.16C51.3 -38.16 84.43 -69.92 90.85 -67.19C90.85 -67.19 37.84 -0.92 37.84 -0.92C37.84 -0.92 45.31 -15.33 40.78 -26.27C40.78 -26.27 34.16 -45.42 16.27 -40.68C16.27 -40.68 0.32 -34.37 13.75 -17.96C16.05 -15.15 25.32 -9.86 35.84 -10.07C35.84 -10.07 53.38 -10.38 63.82 -17.54C70.58 -22.18 73.28 -25.85 76.44 -34.16'
      />
      <motion.path
        transition={{
          default: { duration: 6, ease: 'circIn' },
          fill: { duration: 8, ease: 'circIn' },
        }}
        variants={icon}
        initial='hidden'
        animate='visible'
        strokeWidth={3}
        vector-effect='non-scaling-stroke'
        transform='translate(76.79,100)'
        d='M0.28 -63.75C6.26 -70.76 25.1 -72.88 21.04 -62.52C20.39 -60.86 17.61 -57.28 13.05 -52.85C8.94 -48.86 14.1 -44.56 21.8 -47.75C30.65 -51.41 37.05 -57.82 46.61 -65.53C26.81 -49.51 18.14 -25.37 2.0 -7.23C2.0 -7.23 -6.05 0.83 -6.75 0.94C-6.75 0.94 14.2 -12.76 14.2 -12.76C14.2 -12.76 57.74 -45.53 58.98 -46.37C72.96 -55.71 89.25 -81.32 70.84 -72.38C57.41 -63.21 56.04 -37.29 71.99 -40.5'
      />
    </motion.svg>
  );
}
