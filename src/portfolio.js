const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://superlative-cascaron-5ff0c5.netlify.app/',
  title: 'Atul Kesharwani',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Atul Kesharwani',
  role: 'Full Stack Developer',
  description:
    'My Name is Atul Kesharwani.I am pursuing B.tech from Madan Mohan Malaviya University Of Technology,Gorkahpur.I am good at coding and passionate about writing  code.I have also solved more than 1200 problem in many platform like as leetcode ,codechef and codeforces.I am also keen interest in web development and made a lot of project using react  js,node js,mongo db and html5 ,css3 and javascript.If you will give me an opportunity then I will be great asset for your company.',
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
      'These app will give acces of main webpage after proper authentication.In homepage you can play games and make todolist and do calculation. ',
    stack: ['Firebase', 'React','HTML','CSS','JavaScript'],
    sourceCode: 'https://github.com/Atu77l/Firebase-Authentication',
    livePreview: 'https://gorgeous-churros-89f266.netlify.app//',
  },
  {
    name: 'E-Commerce',
    description:
      'It is the Simple Ecommerce Website that will provide authentication and also give access to update the product detail and add product and many more.',
    stack: ['Express Js', 'Mongo DB', 'React','Node Js'],
    sourceCode: 'https://github.com/Atu77l/e_commerce_frontend',
    livePreview: 'https://funny-sprite-94609b.netlify.app/signup',
  },
  {
    name: 'Quiz App',
    description:
      'Created a web based application that allows organizer to organising an online quiz.App uses React Js and API.App also provide the score gain by participants.',
    stack: ['Express Js', 'Handlebars', 'HTML','Passport'],
    sourceCode: 'https://github.com/Atu77l/Quiz-App2',
    livePreview: 'http://quiz87.herokuapp.com/',
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
