import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: "Javed's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Javed',
  subtitle: 'I make web apps, mobile apps and games.',
  cta: 'My Work',
};

// ABOUT DATA
export const aboutData = {
  img: 'my_photo.jpg',
  paragraphOne:
    "I'm Javed, a software developer currently living in Montreal, Canada. I'm passionate about building innovative apps and games.",
  paragraphTwo:
    'I primarily specialize in Flutter and Unity, however I am a quick learner and can pick up new technologies easily.',
  paragraphThree:
    "Right now I'm working on a blockchain based permanent file storage solution, and also making games in my free time",
  resume:
    'https://docs.google.com/document/d/1wI8e3_IAbwwUf2eQmBHvHA2FshfkAgLhTpqpBiF3MPk/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projects/nebulaser.png',
    title: 'Nebulaser',
    info: 'A fast paced VR rhythm game',
    info2:
      'Nebulaser is a VR game loosely inspired by Pistol Whip and Beat Saber. You shoot enemies as you move along a map while music plays. Made for PCVR and Oculus Quest',
    url: 'https://github.com/jdaev/STL',
    repo: 'https://github.com/jdaev/STL', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/ardrive.png',
    title: 'Ardrive',
    info: 'Permanent decentralized file storage',
    info2:
      'Ardrive is a blockchain based file storage system. You pay once for each file you upload and the file is stored permanently. It is a completely decentralized system.',
    url: 'https://ardrive.io/',
    repo: 'https://github.com/ardriveapp/ardrive-web', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/floratrack.png',
    title: 'Floratrack Dashboard',
    info: 'Seed To Sale For Everyone',
    info2:
      'A multiplatform application for cannabis growers. Built for easy compliance with government standards, with detailed reports and full of useful functions. Made with Flutter and Firebase, available on Web, Android and iOS.',
    url: 'https://dash.floratrack.net/',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'projects/edapt_banner.jpg',
    title: 'Edapt',
    info: 'The Learning App',
    info2:
      'An online learning app build with flutter and firebase. Dozens of courses, certificates, and tests. Courses can be saved for offline use. Available on Android and iOS.',
    url: 'https://play.google.com/store/apps/details?id=com.youmeare.edapt',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'projects/classroom_banner.jpg',
    title: 'Edapt Classroom',
    info: 'Keep Learning',
    info2:
      'An online learning app specifically made for ease of use. Made for teachers and students unfamiliar with tech and for an easy transtition towards online learning in the COVID-19 Pandemic. Available on Android and iOS.',
    url: 'https://play.google.com/store/apps/details?id=com.youmeare.edaptclassroom',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/placeholdr-banner.jpg',
    title: 'Placeholdr',
    info: 'Hold Your Spot',
    info2:
      'An app made to enable easier social distancing during the COVID-19 Pandemic. Customers can hold their spot in lines without being at the location. Made with Flutter, MongoDB and the Google Maps API. Unreleased.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/inflo_banner.jpg',
    title: 'Inflo',
    info: 'A Flood Risk Management App',
    info2:
      'An expermental app meant for use during floods in the state of Kerala, India. Emergency reporting, messaging, location marking etc are some of the features. Made with Flutter, Firebase and the Google Maps API.',
    url: 'https://gitlab.com/javarc/inflo',
    repo: 'https://gitlab.com/javarc/inflo', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'projects/store_log_banner.jpg',
  //   title: 'Store Log',
  //   info: 'A dektop application made for managing a small store. ',
  //   info2: 'Functions include billing, managing inventory and reports. Made with Python and Qt.',
  //   url: 'https://gitlab.com/javarc/IET-Store-Log',
  //   repo: 'https://gitlab.com/javarc/IET-Store-Log', // if no repo, the button will not show up
  // },
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
