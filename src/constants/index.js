import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  intelligo,
  portal,
  RRI,
  showcasefe,
  LaravelAPI,
  spk_saw,
  macera,
  article1,
  cprog,
  java,
  rust,
  solidity,
  article2,
  article3,
  python,
  seallt,
  ocarbn,
  idemia,
  aurora,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Project',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Blockchain',
    icon: web,
  },
  {
    title: 'Cyber Security',
    icon: backend,
  },
  // {
  //   title: 'UI/UX Designer',
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'C',
    icon: cprog,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rust',
    icon: rust,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Solidity',
    icon: solidity,
  },
  {
    name: 'Python',
    icon: python,
  },
];

const experiences = [
  {
    title: 'Division Coordinator',
    company_name: 'Cyber Security Community',
    icon: intelligo,
    iconBg: '#fff',
    date: 'February 2024 - Feb 2025',
    points: [
      'Planning and overseeing activities of each subdivision.',
      'Ensuring quality and deadlines are met.',
      'Liaising with other division coordinators.',
      'Ensuring subdivisions work within their focus areas.',
    ],
  },
  {
    title: 'VP of Legal and Development',
    company_name: 'BINUS Blockchain and Crypto Club',
    icon: RRI,
    iconBg: '#fff',
    date: 'May 2024 - Present',
    points: [
      'initiated the establishment of this organization.',
      'Manage educational activities such as seminars and hackathons.',
      'Collaborate with industry partners and other organizations.',
      'Aim to expand influence while equipping students with in-depth knowledge of blockchain innovations.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Idemia Labs Indonesia',
    icon: idemia,
    iconBg: '#fff',
    date: 'Feb 2025 - Present',
    points: [
      'Participate in testing tools to ensure functionality and reliability.',
      'Contribute to development and performance improvement.',
      'Oversee inventory management and administrative processes effectively.',
      'Play an active role in optimizing tools to improve overall operations.',
    ],
  },

];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Petition dApp',
    description: 'a Petition Filing dApp enables users to file and support petitions on the Fuel Network.',
    tags: [
      {
        name: 'blockchain',
        color: 'blue-text-gradient',
      },
      {
        name: 'fuel-net',
        color: 'blue-text-gradient',
      },
      {
        name: 'sway',
        color: 'blue-text-gradient',
      },
    ],
    image: showcasefe,
    source_code_link: 'https://github.com/blckdfly/petition-dapp',
  },
  {
    name: 'Blockstay dApp',
    description: 'dApp to enhances user experience in managing and tracking property assets.',
    tags: [
      {
        name: 'fuel-net',
        color: 'blue-text-gradient',
      },
      {
        name: 'property',
        color: 'blue-text-gradient',
      },
      {
        name: 'dapps',
        color: 'blue-text-gradient',
      },
    ],
    image: LaravelAPI,
    source_code_link: 'https://github.com/blckdfly/blockstay-dapp',
  },
  {
    name: 'Rock-Paper-Scissors',
    description: 'The Rock-Paper-Scissors Aptos DApp is a fun blockchain game.',
    tags: [
      {
        name: 'decentralized',
        color: 'blue-text-gradient',
      },
      {
        name: 'aptos',
        color: 'blue-text-gradient',
      },
      {
        name: 'move',
        color: 'blue-text-gradient',
      },
    ],
    image: spk_saw,
    source_code_link: 'https://github.com/blckdfly/rock-paper-scissors',
  },
  {
    name: 'Macera',
    description: 'Website to helps users plan and manage their adventures',
    tags: [
      {
        name: 'travel',
        color: 'blue-text-gradient',
      },
      {
        name: 'website',
        color: 'blue-text-gradient',
      },
      {
        name: 'booking',
        color: 'blue-text-gradient',
      },
    ],
    image: macera,
    source_code_link: 'https://github.com/blckdfly/macera-project',
  },
  {
    name: 'Seallt dApp',
    description: 'Contract management for efficient automation of contract processes.',
    tags: [
      {
        name: 'contract',
        color: 'blue-text-gradient',
      },
      {
        name: 'aptos',
        color: 'blue-text-gradient',
      },
      {
        name: 'management',
        color: 'blue-text-gradient',
      },
    ],
    image: seallt,
    source_code_link: 'https://github.com/blckdfly/seallt-dapp',
  },
  {
    name: 'Ocarbn',
    description: 'Blockchain-based Blue Carbon Credit Marketplace',
    tags: [
      {
        name: 'blue carbon',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'marketplace',
        color: 'blue-text-gradient',
      },
    ],
    image: ocarbn,
    source_code_link: 'https://github.com/blckdfly/ocarbn-by-alesha',
  },
  {
    name: 'Aurora',
    description: 'Decentralized marketplace that redefines the way people buy and sell goods',
    tags: [
      {
        name: 'marketplace',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'infura',
        color: 'blue-text-gradient',
      },
    ],
    image: aurora,
    source_code_link: 'https://github.com/blckdfly/aurora',
  },
];

export const articles = [
  {
    title: "Article #1",
    excerpt: "The transformative potential of blockchain technology across various industries.",
    image: article1,
    readMoreLink: "https://medium.com/@naufvll.xx/unveiling-blockchain-4dcf88d890eb",
  },
  {
    title: "Article #2",
    excerpt: "The Evolution of cryptographic standards, highlighting FIPS 203 and ML-KEM's.",
    image: article2,
    readMoreLink: "https://medium.com/@blackdoffly/future-cryptography-with-fips-203-and-ml-kem-3c5b032483e4",
  },
  {
    title: "Article #3",
    excerpt: "Cross-chain compliance using advanced blockchain analytics technology.",
    image: article3,
    readMoreLink: "https://medium.com/@blackdoffly/harnessing-holistic-technology-for-cross-chain-compliance-f58d4d3d870e",
  },
];

export { services, technologies, experiences, testimonials, projects };
