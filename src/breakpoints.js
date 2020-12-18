export default {
  sm: (styles) => `
    @media only screen and (max-width: 576px) {
      ${styles}
    }
  `,
  md: (styles) => `
    @media only screen and (max-width: 768px) {
      ${styles}
    }
  `,
  lg: (styles) => `
    @media only screen and (max-width: 992px) {
      ${styles}
    }
  `,
  xl: (styles) => `
    @media only screen and (max-width: 1200px) {
      ${styles}
    }
  `,
};
