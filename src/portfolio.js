import emoji from 'react-easy-emoji';


export const greetings = {
    "name": "Nuruddin Kawsar",
    "title": "Hi all, I'm Nuruddin Kawsar",
    "description": "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks and Cross Platform Mobile Apps With React Native.",
    "resumeLink": "https://drive.google.com/file/d/1DFzyViTSk8fyrW0TQAPhpcwNB9GQTjSY/view?usp=sharing"
}

export const openSource = {
  githubUserName: 'kawsar-95',
};

export const contact = {

}

export const socialLinks = {
    "facebook": "https://www.facebook.com/nurkawsar.1995/",
    "instagram": "https://www.instagram.com/nuruddin_kawsar/",
    "twitter": "https://twitter.com/nur_kawsar95",
    "github": "https://github.com/kawsar-95",
    "linkedin": "https://www.linkedin.com/in/nuruddin-kawsar/",
    "medium": "https://kawsar95.medium.com/",
    "gmail": "nuruddinkawsar1995@gmail.com",
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'A FULL STACK WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
        '⚡ Integration of third party services such as Firebase'
      ),
    ],

    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
//       {
//         skillName: 'flutter',
//         fontAwesomeClassname: 'logos:flutter',
//       },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
//       {
//         skillName: 'aws',
//         fontAwesomeClassname: 'logos:aws',
//       },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      // {
      //   skillName: 'python',
      //   fontAwesomeClassname: 'logos:python',
      // },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },

    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend',
      progressPercentage: '80',
    },
    {
      Stack: 'Backend',
      progressPercentage: '65',
    },
    {
      Stack: 'Programming',
      progressPercentage: '55',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Port City International University,Chittagong.',
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'January 2016 - August 2020',

      descBullets: [
        " I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        " Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
    },

]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Together Initiatives',
    companylogo: googlelogo,
    date: 'August 2021 - Present',
    desc:
      'Together has the experience and expertise to meet the software development need of world class enterprise.',
    descBullets: [
      ' I build websites that are responsive and provide great user experience',
      'Meticulously commented code, well-named variables and also making the codebase maintainable in the long run.'
    ],
  },

]

export const projects = [
  {
    name: "Volunteer Network",
    desc: "A single-page web app with a dashboard where users can select their courses and also can give reviews from their dashboard. And an Admin can check the course details and can delete them from his dashboard as well.Technology used React.js, Node.js, Express.js, MongoDB, React Bootstrap, Fire-AUTH, Firebase Hosting, Heroku, Heroku Deployment.",
    link: {
      name: "Volunteer Network",
      url: "https://volunteer-network-app.netlify.app/"
    }
  },
  {
    name: "Real-time Chat App",
    desc: "A real-time chatting application where people can create their private room and chat with each other.Techhnology used React.js, Node.js, Express.js, Socket.io, Firebase Hosting, Heroku",
    link: {
      name: "Real-time Chat App",
      url: "https://quizzical-wilson-0410c4.netlify.app/"
    }
  },
  {
    name: "Creative Agency",
    desc: "A single-page web app with a dashboard where users can select their courses and also can give reviews from their dashboard. And an Admin can check the course details and can delete them from his dashboard as well. ",
    link: {
      name: "Creative Agency",
      url: "https://creative-agency-5d0a0.web.app/"
    }
  },
  {
    name: "Voice Controlled React News Application - Alan AI Voice Assistant",
    desc: "A single-page web app  with Conversational Voice Controlled React News Application using Alan AI",
    link: {
      name: "Voice Controlled React News Application - Alan AI Voice Assistant",
      url: "https://nervous-kowalevski-0c67a7.netlify.app/",

    }
  },
]
