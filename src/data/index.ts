import type { ISkillsProps } from '../types';

export const person = {
  name: {
    firstname: 'Alex',
    surname: 'Cristian',
    lastname: 'Vișan',
  },
  initials: 'AV.',
  age: new Date().getFullYear() - 1993,
};

export const technologies = [
  'react',
  'nextjs',
  'preact',
  'astro',
  'tailwind',
  'scss',
];

export const social = {
  linkedin: {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/visan-alexandru/',
  },
  github: {
    name: 'github',
    link: 'https://www.github.com/alexandruvisan19',
  },
  codewars: {
    name: 'codewars',
    link: 'https://www.codewars.com/users/Karagk19',
  },
};

export const skills: ISkillsProps[] = [
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

export const icons = [
  {
    name: '@visan-alexandru',
    link: 'https://www.linkedin.com/in/visan-alexandru/',
    icon: 'simple-icons:linkedin',
  },
  {
    name: '@alexandruvisan19',
    link: 'https://github.com/alexandruvisan19',
    icon: 'simple-icons:github',
  },
  {
    name: '@alexandru-visan',
    link: 'https://www.codewars.com/users/alexandru-visan',
    icon: 'simple-icons:codewars',
  },
  {
    name: '+40 0721 642 772',
    link: null,
    icon: 'mdi:cellphone',
  },
];

export const jobs = [
  {
    jobPost: 'Software Engineer',
    website: 'https://tremend.com/',
    companyIcon: '',
    companyName: 'Tremend Software Consulting',
    period: 'Jun 2022 - Present (1 year 2 months)',
    description: `Tremend Software Consulting is a cutting-edge technology
    company renowned for delivering exceptional software solutions
    across various industries. As an industry leader, Tremend
    embraces a diverse range of projects, all utilizing a robust
    and modern tech stack. The main technologies employed in their
    projects include React, Next.js, Sass, Styled-Components,
    RESTful APIs, Material UI, Redux, Redux Toolkit, Jest, Testing
    Library, React Hook Form, and TypeScript.`,
  },
  {
    jobPost: 'Frontend Developer',
    companyIcon: '',
    website: 'https://888sparkware.ro/',
    companyName: '888Sparkware',
    period: 'Nov 2018 - Jun 2022 (3 years 8 months)',
    description: `Building the website from concept all the way to completion.
    Cooperating with web designers to match visual design intent and execute all visual design stages,
    everything from the home page to site layout, templates and performing ongoing QA.
    Responsible for maintaining, expanding, and scaling websites.
    Collaborating with internal teams to identify system requirements.
    Develop existing tools and new once for any of the BU requirements.`,
  },
  {
    jobPost: 'Email Marketing',
    companyIcon: '',
    website: 'https://888sparkware.ro/',
    companyName: '888Sparkware',
    period: 'Oct 2017 - Nov 2018 (1 year 2 months)',
    description: `Code marketing campaign communications in HTML and CSS from scratch.
    Creation/ implementation/testing of emails, client communications, pushes, SMS.
    Run A/B tests to help optimize open rates, CTR and conversion rate.`,
  },
  {
    jobPost: 'QA Engineer',
    companyIcon: '',
    website: 'https://www.webfuture.ro/',
    companyName: 'Web Future Studio & Solutions',
    period: 'Nov 2016 - Oct 2017 (1 year)',
    description: `Actively participated in daily meetings with project managers and developers in order to review
    requirements, create test cases and providing support to developers as needed. Reporting any detected
    bugs into the issue tracking database(Jira) and evaluating changes requests and estimating the
    required effort needed for compliance. Maintained open communication with internal teams of back-end
    developers and designers to actively send daily reports with testing results.`,
  },
  {
    jobPost: 'Senior QA Tester',
    companyIcon: '',
    companyName: 'Gameloft',
    website: 'https://www.gameloft.ro/',
    period: 'Dec 2014 - Oct 2016 (1 year 11 months)',
    description: `My main responsibilities included:
    -following IOS checklist guide rules with precision ( a set of rules special created for all IOS games )
    -participating in mass testing. ( mass-testing events are organized by the QA department in order to test
    the server response, which needs a high number of participants at the same time. In most cases, the
    main interest is on the performance of the server and the client in extreme situations.)
    -testing the new Companion App of BIA3 on Apple Watch.
    -helping the new colleagues to understand the given task.
    -participating in stress and compatibility tests.
    -different social networks tests scenarios ( inviting friends, sending gifts, observing the leaderboards
    etc.).
    -setting and testing the implementation of the GL Ads :
    - the ad is displayed correctly, -the corresponding tracking and click impressions for each Ad type is
    registered on the Hits page. - the redirect link (external, in-game or cross-promo) inside the Ad works -
    checking that the GL Ads are available in the AUT in the locations set.
    -checking that the GL Ads refresh between different sections, regardless of the direction the user
    navigates.`,
  },
];
