import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I\'m',
  name: 'Javed',
  subtitle: 'I can make websites, apps and games for your needs.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'my_photo.jpg',
  paragraphOne: 'I\'m Javed, a software developer currently liviing in Montreal, Canada. When it comes to code I\'ve been tinkering with tech from a young age.',
  paragraphTwo: 'I started my first job at Edapt during the last semester of my undegrad. I was the Lead Developer there until I left to pursue higher studies in Canada.',
  paragraphThree: 'I currently do freelance work while I\'m studying Game Development. I\'m an expert in Flutter, and am adequately skilled with the Unity Game Engine. I also know basic web development, and have dabbled in various different technologies. ',
  resume: 'https://drive.google.com/file/d/17KoJY-eka7bt50qhhCcGy0MdPi617V48/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projects/edapt_banner.jpg',
    title: 'Edapt',
    info: 'The Learning App',
    info2: 'An online learning app build with flutter and firebase. Dozens of courses, certificates, and tests. Courses can be saved for offline use. Available on Android and iOS.',
    url: 'https://play.google.com/store/apps/details?id=com.youmeare.edapt',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/weedtech_banner.jpg',
    title: 'WeedTech Dashboard',
    info: 'Seed To Sale For Everyone',
    info2: 'A multiplatform application for cannabis growers. Built for easy compliance with government standards, with detailed reports and full of useful functions. Made with Flutter and Firebase, available on Web, Android and iOS.',
    url: 'https://weedtech.ai/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/classroom_banner.jpg',
    title: 'Edapt Classroom',
    info: 'Keep Learning',
    info2: 'An online learning app specifically made for ease of use. Made for teachers and students unfamiliar with tech and for an easy transtition towards online learning in the COVID-19 Pandemic. Available on Android and iOS.',
    url: 'https://play.google.com/store/apps/details?id=com.youmeare.edaptclassroom',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/placeholdr-banner.jpg',
    title: 'Placeholdr',
    info: 'Hold Your Spot',
    info2: 'An app made to enable easier social distancing during the COVID-19 Pandemic. Customers can hold their spot in lines without being at the location. Made with Flutter, MongoDB and the Google Maps API. Unreleased.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/inflo_banner.jpg',
    title: 'Inflo',
    info: 'A Flood Risk Management App',
    info2: 'An expermental app meant for use during floods in the state of Kerala, India. Emergency reporting, messaging, location marking etc are some of the features. Made with Flutter, Firebase and the Google Maps API.',
    url: 'https://gitlab.com/javarc/inflo',
    repo: 'https://gitlab.com/javarc/inflo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/store_log_banner.jpg',
    title: 'Store Log',
    info: 'A dektop application made for managing a small store. ',
    info2: 'Functions include billing, managing inventory and reports. Made with Python and Qt.',
    url: 'https://gitlab.com/javarc/IET-Store-Log',
    repo: 'https://gitlab.com/javarc/IET-Store-Log', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jdhn42@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/94v8d',
    },
    {
      id: nanoid(),
      name: 'gitlab',
      url: 'https://gitlab.com/javarc',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/javed-hussein-93a56b199/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jdaev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
