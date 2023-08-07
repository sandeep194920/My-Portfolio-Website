const data = {
  links: {
    resume:
      'https://drive.google.com/file/d/1pcL1czFgXxifgwwQL-W-Eo6O-ojyE24S/view?usp=drive_link',
  },
  info: {
    header_pre_text: 'A versatile full stack web and mobile developer',
    header_sub_text: [
      'As an experienced Full Stack Developer',
      'I thrive on transforming ideas into fully functional applications.',
      'With a holistic approach and proficiency in frontend and backend technologies, I create captivating user interfaces, architect robust backend systems, and seamlessly integrate them to deliver exceptional end-to-end solutions.',
    ],
  },
  services_section: {
    intro:
      'As a passionate software engineer with years of experience, I take pride in offering a range of top-notch software services to meet your business needs. Whether you are a startup looking to build a cutting-edge application or an established company seeking to optimize your processes, I have got you covered.',
    services: [
      {
        heading: 'UI/UX Design',
        items: [
          'Intuitive Interfaces',
          'User-Centric Approach',
          'Engaging User Experience',
          'Responsive Designs',
          'Aesthetically Pleasing',
        ],
        animation: 'fade-right',
      },
      {
        heading: 'Web App Development',
        items: [
          'Custom Web Solutions',
          'Scalable Architecture',
          'Cutting-Edge Technologies',
          'Seamless Functionality',
          'Performance Optimization',
        ],
        animation: 'fade-up',
      },
      {
        heading: 'Mobile App Development',
        items: [
          'Cross-Platform Expertise',
          'User-Friendly Apps',
          'High-Performance Solutions',
          'Interactive Features',
          'Mobile-First Approach',
        ],
        animation: 'fade-left',
      },
      {
        heading: 'SEO Optimization',
        items: [
          'Keyword Research',
          'Organic Traffic Growth',
          'On-Page Optimization',
          'Conversion Rate Boosting',
          'Data-Driven Strategies',
        ],
        animation: 'fade-right',
      },
      {
        heading: 'Cloud Deployment',
        items: [
          'Secure Cloud Solutions',
          'Scalable Infrastructure',
          'Reliable Data Storage',
          'Automated Deployment',
          'Cost-Effective Solutions',
        ],
        animation: 'fade-left',
      },
    ],
  },
  skills_section: {
    intro:
      'With a passion for technology and a drive for excellence, I possess a diverse set of skills and expertise to tackle a wide range of challenges. From front-end development, creating intuitive user interfaces, to back-end programming, and handling complex databases, I am committed to delivering high-quality solutions that exceed expectations.',

    skills: [
      {
        heading: 'Frontend',
        items: [
          { skill: 'HTML', percent: 95 },
          { skill: 'CSS', percent: 95 },
          { skill: 'Sass', percent: 90 },
          { skill: 'JQuery', percent: 60 },
          { skill: 'Tailwind', percent: 85 },
        ],
        animation: 'fade-right',
      },
      {
        heading: 'Backend',
        items: [
          { skill: 'Node', percent: 90 },
          { skill: 'Express', percent: 90 },
          { skill: 'MongoDB', percent: 85 },
          { skill: 'SQL', percent: 60 },
          { skill: 'Redis', percent: 90 },
        ],
        animation: 'fade-up',
      },
      {
        heading: 'Libraries/Frameworks',
        items: [
          { skill: 'React', percent: 95 },
          { skill: 'React Native', percent: 80 },
          { skill: 'Next JS', percent: 90 },
          { skill: 'Bootstrap', percent: 70 },
          { skill: 'Material UI', percent: 90 },
        ],
        animation: 'fade-up',
      },
      {
        heading: 'Languages',
        items: [
          { skill: 'Python', percent: 70 },
          { skill: 'Javascript', percent: 95 },
          { skill: 'Java', percent: 50 },
        ],
        animation: 'fade-right',
      },
      {
        heading: 'Testing',
        items: [
          { skill: 'PyUnit', percent: 60 },
          { skill: 'Cypress', percent: 95 },
          { skill: 'RTL (React)', percent: 80 },
          { skill: 'Test Cafe', percent: 50 },
          { skill: 'Selenium', percent: 50 },
        ],
        animation: 'fade-up',
      },
      {
        heading: 'Design',
        items: [
          { skill: 'Figma', percent: 60 },
          { skill: 'Sketch', percent: 50 },
          { skill: 'Adobe XD', percent: 50 },
        ],
        animation: 'fade-left',
      },
    ],
  },
  projects_section: {
    intro: [
      `Embracing the belief in "learning by doing," I have curated a collection of captivating projects reflecting my dedication to honing my skills. Delve into the world of mobile gaming with a captivating Wordle-inspired game, deployed on the Google Play Store. Here, word and number guessing unfold in delightful challenges. Witness my React proficiency through an array of small to medium-sized projects, each carefully crafted to showcase the versatility of this powerful framework.`,
      `But that's not all! I take immense pleasure in teaching React to college graduates using my very own React project learning kit. Explore a book library app for seamless CRUD operations, a Burger builder for customizing and ordering, a Netflix clone for an immersive streaming experience, and a single-page tours website that whisks you away on virtual adventures.`,
      `Join me on this exciting journey of creativity, innovation, and continuous learning as we explore a variety of captivating software projects, and see how I empower others to harness the potential of React through real-world applications!`,
    ],
    projects: [
      {
        name: 'Word & Number Guess',
        projectLink:
          'https://play.google.com/store/apps/details?id=com.starcoding.matchmeifucan_cow_bull',
        code: 'https://github.com/sandeep194920/React_Native_Cow_Bull',
        coverImage: '/assets/images/Projects/word_number_guess.png',
        techStack: [
          'React native',
          'Playstore 500+ downloads',
          'Light/Dark mode',
          'Similar to wordle game',
          'Google adsense',
        ],
        animation: 'fade-right',
      },

      {
        name: 'Photo Search',
        projectLink: 'https://19-photos-search.netlify.app/',
        code: 'https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/19_photos_search',
        coverImage: '/assets/images/Projects/photo_search.png',
        techStack: [
          'React',
          'Context',
          'Unsplash API',
          'Load on Scroll',
          'Server side pagination',
        ],
        animation: 'fade-up',
      },
      {
        name: 'Burger builder',
        projectLink: 'https://react-my-burger-664c0.web.app/',
        code: 'https://github.com/sandeep194920/BurgerBuilder',
        coverImage: '/assets/images/Projects/burger_builder.png',
        techStack: [
          'React (class components)',
          'Redux',
          'React Router',
          'Authentication',
          'Async await',
        ],
        animation: 'fade-left',
      },
      {
        name: 'Book Library',
        projectLink: 'https://elegant-bardeen-ee256d.netlify.app/',
        code: 'https://github.com/sandeep194920/BookLibrary',
        coverImage: '/assets/images/Projects/book_library.png',
        techStack: [
          'React',
          'Redux',
          'Front-end CRUD',
          'Styled Components',
          'Sass',
        ],
        animation: 'fade-right',
      },
      {
        name: 'Daily Weather',
        projectLink: 'https://react-openweather-weather-app.netlify.app/',
        code: 'https://github.com/sandeep194920/react-weather-app',
        coverImage: '/assets/images/Projects/weather_app.png',
        techStack: [
          'React',
          "Any city's weather forecast",
          'Light/Dark mode',
          'Openweather API',
          'Min-max tempeature in C/F',
        ],
        animation: 'fade-up',
      },
      {
        name: 'E-commerce API',
        projectLink: 'https://github.com/sandeep194920/E-Commerce-API-Node',
        code: 'https://github.com/sandeep194920/E-Commerce-API-Node',
        coverImage: '/assets/images/Projects/e-commerce.png',
        techStack: [
          'Node & Express',
          'Mongo DB',
          'JWT Authentication',
          'Role authorizations',
          'Multiple models & schemas',
        ],
        animation: 'fade-right',
      },
    ],
  },
}

export { data }
