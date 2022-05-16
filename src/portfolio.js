const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Atu77l.github.io/cleanfolio',
  title: 'Atul Kesharwani',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Atul Kesharwani',
  role: 'Full Stack Developer',
  description:
    'Hi! My name is Atul Kesharwani. I am pursuing B.tech in Computer Science and Enginnering  from Madan Mohan Malviya University of Technology, Gorakhpur. I had done my schooling from Vishnu Bhagwan Public School & College ,Jhalwa Prayagraj.I am good at coding and very passionate about writing code and working different types of projects.My strength is hardworking with positive attitude towards my future.My weakness is laziness.',
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
    name: 'Firebase-Auth',
    description:
      'These app will give acces of main webpage after proper authentication.In homepage you cam play games and make todolist and do calculation. ',
    stack: ['Firebase', 'React'],
    sourceCode: 'https://github.com/Atu77l/Firebase-Authentication',
    livePreview: 'https://github.com/Atu77l/Firebase-Authentication',
  },
  {
    name: 'Portfolio',
    description:
      'These App will describe about myself whats my skill and also about my project',
    stack: ['Express Js', 'Mongo DB', 'React'],
    sourceCode: 'https://github.com/Atu77l/Portfolio-Atul',
    livePreview: 'https://github.com/Atu77l/Portfolio-Atul',
  },
  {
    name: 'Quiz App',
    description:
      'Created a web based application that allows organizer to organising an online quiz.App uses React Js and API.App also provide the score gain by participants.',
    stack: ['Express Js', 'Handlebars', 'HTML'],
    sourceCode: 'https://github.com/Atu77l/Quiz-App2',
    livePreview: 'https://github.com/Atu77l/Quiz-App2',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'C++',
  'C',
  'React',
  'React-Native',
   'Node Js',
  'Data Structure and Algorithm',
  'Computer Network',
  'Operating System',
  'Git',
  'Cloud Computing',
  'DBMS',
  'SQL',
  'Competitive Coding',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kesharwaniatul@gmail.com',
}

export { header, about, projects, skills, contact }
