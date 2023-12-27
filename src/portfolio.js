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
  'I am a skilled Full Stack Developer at Damyant Fintech Private Limited in Noida. Proficient in React, Node, Flask, JavaScript, TypeScript, and more, I bring a wealth of experience from various roles, including a Software Developer Intern in Jaipur and positions as a Full Stack Developer and Frontend Developer at startups. As a DSA Doubt Support at Codechef and a Problem Setter Intern at ImochaWorks, I have honed my skills in Data Structures, Algorithms, and problem-solving. With a solid foundation in languages like C, C++, and Java, I have successfully completed projects ranging from real-time chat applications to E-commerce platforms using the MERN stack. My toolset includes Postman, GitHub, Docker, AWS, and expertise in both SQL and NoSQL databases.',
  resume: 'https://drive.google.com/file/d/1r8P9ggctr0XrXXX9wrSrIcCRGXwwHNv4/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/kesharwaniatul/',
    github: 'https://github.com/Atu77l',
  },
}

const projects = [
  {
    name: 'Backtest - Trading Project',
    description:
      'This is the product of Damyant Fintech Private Limited by which we can analysis the profit/loss,drawdown,margin,maximum profit,trend and many more of particular strategy.It uses historical data and pre-processing the data for give the output.',
    stack: ['HTML','CSS3','JavaScript','React','Flask','Mongo DB','MVC Architecture',],
    livePreview: 'https://backtest.fprognos.com/',

  },
  {
    name: 'Quiz App -Web Application',
    description:
      'This is quiz app where anyone can give quiz and create user.User can see the result of all given quiz.User can also create quiz for mine.',
    stack: ['HTML','CSS3','JavaScript','Node JS','Mongo DB','MVC Architecture'],
    sourceCode: 'https://github.com/Atu77l/Quiz_Application',
    livePreview : ' https://quiz87.herokuapp.com/'
  },
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Fast Career- Career Related Project',
    description:
      'This is a personal project where users can access comprehensive information about job openings across various companies and roles. The platform displays detailed information for each job and empowers users with the authority to update existing job details and add new job listings. It serves as a centralized hub for job seekers to stay informed and engaged in the dynamic landscape of employment opportunities.',
    stack: ['Node', 'React','HTML','CSS','JavaScript','Monolithic Architecture'],
    sourceCode: 'https://github.com/Atu77l/Career',
    livePreview: '',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'C++',
  'C',
  'React',
  'React-Native',
   'Node Js',
   'Next Js',
   'AWS',
   'Flask',
  'Data Structure and Algorithm',
  'Computer Network',
  'Operating System',
  'Git',
  'BitBucket',
  'Cloud Computing',
  'DBMS',
  'SQL',
  'Competitive Coding',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kesharwaniatul9935@gmail.com',
}

export { header, about, projects, skills, contact }
