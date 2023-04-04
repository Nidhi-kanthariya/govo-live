module.exports = {
  content: ['./assets/pug/**/**//*.pug', './html/**/*.html', './assets/postcss//*.css', './assets/js//*.js', './assets/fonts//*.{eot,svg,ttf,woff}'],
  plugins: [
    require('tailwindcss-flip'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animatecss')({
      classes: [],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 2000,
        bounceOutSpeed: 2000,
        animationDelaySpeed: 1000,
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
  theme: {
    // font family
    fontFamily: {
      sans: ["'Nunito Sans', sans-serif"],
      serif: ["'Secular One', sans-serif"],
    },

    // responsive screen
    screens: {
      '6xl': {
        max: '1799px'
      },
      '5xl': {
        max: '1699px'
      },
      '4xl': {
        max: '1599px'
      },
      '3xl': {
        max: '1499px'
      },
      '2xl': {
        max: '1399px'
      },
      xl: {
        max: '1199px'
      },
      xl3: {
        max: '1095px'
      },
      lg: {
        max: '991px'
      },
      '2lg': {
        max: '875px'
      },
      md: {
        max: '767px'
      },
      '2md': {
        max: '675px'
      },
      sm: {
        max: '575px'
      },
      '2sm': {
        max: '425px'
      },
      '3sm': {
        max: '375px'
      },
      'min-lg': {
        min: '991px'
      },
    },
    extend: {
      // font  size
      spacing: {
        'body-space': 'calc(0.9375rem + (2.25 - 0.9375) * ((100vw - 20rem) / (120 - 20)))',
        'body-space2': 'calc(0.9375rem + (6.5625 - 0.9375) * ((100vw - 20rem) / (120 - 20)))',
        'body-space3': 'calc(0.9375rem + (1.25 - 0.9375) * ((100vw - 20rem) / (120 - 20)))',
        'body-space4': 'calc(0.9375rem + (12.1875 - 0.9375) * ((100vw - 20rem) / (120 - 20)))',
        'main-space': 'calc(1.25rem + (2.5 - 1.25) * ((100vw - 20rem) / (120 - 20)))',
        'card-space': 'calc(0.9375rem + (1.0625 - 0.9375) * ((100vw - 20rem) / (120 - 20)))',
        'card-gap': 'calc(0.9375rem + (1.875 - 0.9375) * ((100vw - 20rem) / (120 - 20)))',
        'padding': 'calc(0.9375rem + (1.5625 - 0.9375) * ((100vw - 20rem) / (120 - 20)))',
        unset: 'unset',
      },
      fontSize: {
        '4xs': ['0.6875rem', {
          letterSpacing: '0.03125rem',
          lineHeight: '0.9375rem'
        }],
        '3xs': ['0.75rem', {
          letterSpacing: '0.03125rem',
          lineHeight: '1.2'
        }],
        '2xs': ['0.8125rem', {
          letterSpacing: '0.03125rem',
          lineHeight: '1.2'
        }],
        xs: ['0.875rem', {
          letterSpacing: '0.025rem',
          lineHeight: '1.4',
          wordSpacing: '0.05rem'
        }],
        sm: ['1rem', {
          letterSpacing: '0.03125rem',
          lineHeight: '1.25rem'
        }],
        'sm-responsive': ['calc(0.875rem + (1 - 0.875) * ((100vw - 20rem) / (120 - 20)))', {
          letterSpacing: '0.03125rem',
          lineHeight: '1.25'
        }],
        base: ['1.125rem', {
          letterSpacing: '0.03125rem',
          lineHeight: '1.375rem'
        }],
        'base-responsive': ['calc(0.875rem + (1.125 - 0.875) * ((100vw - 20rem) / (120 - 20)))', {
          letterSpacing: '0.03125rem',
          lineHeight: 'calc(1.25rem + (1.875 - 1.25) * ((100vw - 20rem) / (120 - 20)))'
        }],
        lg: ['1.25rem', {
          letterSpacing: '0.03125rem',
          lineHeight: '1.6875rem'
        }],
        xl: ['1.375rem', {
          letterSpacing: '0.03125rem',
          lineHeight: '1.625rem'
        }],
        '2xl': ['1.5rem', {
          letterSpacing: '0.03125rem',
          lineHeight: '1.75rem'
        }],
        '3xl': ['1.625rem', '2.1875rem'],
        '3xl-responsive': [' calc(1.125rem + (1.625 - 1.125) * ((100vw - 20rem) / (120 - 20)))', ' calc(1.375rem + (2.1875 - 1.375) * ((100vw - 20rem) / (120 - 20)))'],
        ' ': ['calc(1rem + (3.125 - 1) * ((100vw - 20rem) / (120 - 20)))', {
          lineHeight: 'calc(1.375rem + (3.6875 - 1.375) * ((100vw - 20rem) / (120 - 20)))'
        }],

        'xl3': 'calc(1.375rem + (2.25rem - 1.375) * ((100vw - 20rem) / (120 - 20)))',
      },

      // theme colors
      colors: {
        title: 'var(--title)',
        content: 'var(--content)',
        content2: 'var(--content2)',
        content3: 'var(--content3)',
        'content-white': 'var(--content-white)',
        primary: 'rgba(var(--primary),1)',
        'primary-light': 'var(--primary-light)',
        'primary-extralight': 'var(--primary-extralight)',
        secondary: 'rgba(var(--secondary),1)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-extralight': 'var(--secondary-extralight)',
        success: 'var(--success)',
        'success-light': 'var(--success-light)',
        info: 'var(--info)',
        'info-light': 'var(--info-light)',
        warning: 'var(--warning)',
        'warning-light': 'var(--warning-light)',
        danger: 'var(--danger)',
        'danger-light': 'var(--danger-light)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        transparent: 'transparent',
        'dark-dense': 'var(--dark-dense)',
        body: 'var(--body)',
        'white-light': 'rgba(255,255,255,0.15)',
        'white-exlight': 'rgba(255,255,255,0.5)',
        sidebar: {
          dark: '#1F2F3E',
          dark2: '#17232E',
          dark3: '#304050',
        },
        header: {
          dark: 'var(--dark-header)',
          dark2: 'var(--dark-header2)',
        },
        gray: {
          light: 'var(--gray-light)',
          'extralight': 'var(--gray-extralight)',
        },
        border: {
          dark: 'var(--border-dark)',
          light: 'var(--border-light)',
        },
        linkedin: 'var(--linkedin)',
        twitter: 'var(--twitter)',
        facebook: 'var(--facebook)',
      },
      boxShadow: {
        'md-bottom': '0 0.625rem 1.4375rem rgba(0, 0, 0, 0.03)',
        header: 'var(--header-shadow)',
        footer: 'var(--footer-shadow)',
        sidebar: 'var(--sidebar-shadow)',
        card: 'var(--card-shadow)',
      },
      borderRadius: {
        5: '0.3125rem',
        card: '0.625rem',
      },

      invert: {},
      variants: {
        margin: ['rtl'],
        padding: ['rtl'],
        textalign: ['rtl'],
        border: ['rtl'],
        borderradius: ['rtl'],
        rotate: ['rtl'],
      },
      backgroundImage: {
        'dashed-horizontal': 'linear-gradient(to right, var(--border-light) 33% , rgba(255,255,255,0) 0%)',
        'dashed-vertical': 'linear-gradient(var(--border-light) 33%, rgba(255,255,255,0) 0%)',
      },
      backgroundSize: {
        'sm-h': '0.4375rem 0.0625rem',
        'sm-v': '0.0625rem 0.4375rem',
      },
      keyframes: {
        'swiper-preloader-spin': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          },
        }
      }
    },
  },

  variants: {
    extend: {
      padding: ['last'],
    },
  },
};