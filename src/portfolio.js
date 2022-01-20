const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Atu77l.github.io/cleanfolio',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Atul Kesharwani',
  role: 'Full Stack Developer',
  description:
    'Hi! My name is Atul Kesharwani. I am pursuing B.tech in Computer Science and Enginnering  from Madan Mohan Malviya University of Technology, Gorakhpur. I had completed my HighSchool and intermediate from Vishnu Bhagwan Public School & College ,Jhalwa Prayagraj and secured 10CGPA in highSchool and 84% in intermediate from CBSE Board respectively.',
  resume: 'https://docs.google.com/document/d/1bXscHun7ZoQoDziGmAKfFICAmQRNSQme4iStWK1RTKA/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/kesharwaniatul/',
    github: 'https://github.com/Atu77l',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'All In One !!! News',
    description:
      'These App will show you news as per your wishes channel and also your wishes topic.Its was very interesting when I made.I have fetch news api and using React Js Framework. ',
    stack: ['Api', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Portfolio',
    description:
      'These App will describe about myself whats my skill and also about my project',
    stack: ['Express Js', 'Mongo DB', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Quiz App',
    description:
      'Created a web based application that allows organizer to organising an online quiz.App uses React Js and API.App also provide the score gain by participants.',
    stack: ['Express Js', 'Handlebars', 'HTML'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Data Structure',
  'Git',
  'Cloud Computing',
  'Algorithm',
  'Node Js',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kesharwaniatul@gmail.com',
}

export { header, about, projects, skills, contact }
