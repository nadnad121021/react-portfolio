// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//project infrmation
const projectInfo = {
  title: "Danilo Alingasa's Portfolio",
  description:"",
  tools: ["React", "Vite", "TypeScript", "Pnpm"],
  deployedOn: "Firebase",
  repoLink: "https://github.com/nadnad121021/react-portfolio"
};

//Home Page
const greeting = {
  title: "Danilo Alingasa",
  logo_name: "Danilo Alingasa",
  nickname: "nadnad",
  quote: " - ❝ It takes thousands of inputs to achieve good output. ❞",
  subTitle:
    `Greetings! I'm Dan, a highly skilled software engineer specializing in React.js and Node.js development. 
    With a passion for building robust and scalable web applications, I bring over 5 years of experience to the table.
    I thrive in collaborative environments and have a proven track record of delivering high-quality solutions that meet client requirements. 
    From crafting dynamic user interfaces with React.js to designing efficient server-side systems with Node.js, I have the expertise to bring your ideas to life. 
    Let's work together to create exceptional software experiences that drive your business forward.`,
  resumeLink:"https://drive.google.com/uc?export=download&id=1MK9BtuCMvmlAKAatxzqcBtl6bdbRxMIR",
  portfolio_repository: "",
  githubProfile: "",
};

const aboutMe = [
  {
    title:'Coder',
    description:'I have a strong passion for coding and thoroughly enjoy exploring emerging concepts within the IT industry.',
    fileName:'programmer'
  },
  {
    title:`Beginner's mindset`,
    description:`I constantly maintain a beginner's mindset, as it fuels my motivation to continuously strive for growth and improvement.`,
    fileName:'beginner'
  }
]

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/nadnad121021",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/danilo-alingasa-a727241a2/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:alingasadan@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/danilo.alingasa.7",
    fontAwesomeIcon: "fa-facebook-f", 
    backgroundColor: "#1877F2", 
  },
   {
    name: "Phone",
    link: "+639365192469",
    fontAwesomeIcon: "fa-solid fa-phone", 
    backgroundColor: "#34A853",
  },
   {
    name: "Skype",
    link: "live:.cid.a08eee29df0e2c17",
    fontAwesomeIcon: "fa-brands fa-skype",
    backgroundColor: "#00AFF0", 
  },
];


const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive frontends using React",
        "⚡ Developing backend services with Node.js, Express, and TypeScript",
        "⚡ Designing RESTful and GraphQL APIs",
        "⚡ Implementing authentication, RBAC, and validation layers",
        "⚡ Working with PostgreSQL using TypeORM",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E", backgroundColor: "#000000" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: { color: "#CB3837" },
        },
         {
          skillName: "pnpm",
          fontAwesomeClassname: "simple-icons:pnpm",
          style: { color: "#F69220" },
        },
        {
          skillName: "TypeORM",
          fontAwesomeClassname: "simple-icons:typeorm",
          style: { color: "#FF4C40" },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying and scaling applications on AWS using ECS & ECR or EC2",
        "⚡ Automating deployment pipelines using GitHub Actions and Docker",
        "⚡ Monitoring and optimizing performance of cloud applications",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
      ],
    },
    {
      title: "Version Control & Workflow",
      fileName: "ProjectImg",
      skills: [
        "⚡ Proficient with Git for version control and team collaboration",
        "⚡ Managing repositories and workflows using GitHub",
        "⚡ Setting up CI/CD pipelines using GitHub Actions",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
      ],
    },
  ],
};

const otherInterests = {
  title: "Other Interests & Learning Goals",
  fileName: "OtherInterestImg",
  descriptions: [
    "⚡ Exploring other frameworks and ecosystems to broaden my development expertise.",
    "⚡ Eager to deepen knowledge in backend technologies and strongly typed languages.",
    "⚡ Staying curious and open to full-stack solutions across modern architectures.",
    "⚡ Learning cloud technologies, containerization, and DevOps practices.",
    "⚡ Interested in system design and scalable distributed systems.",
  ],
  data: [
    {
      login: "Angular",
      avatarUrl: "https://avatars.githubusercontent.com/u/14957082?v=4",
      fontAwesomeClassname: "simple-icons:angular",
      style: { color: "#DD0031" },
    },
    {
      login: "Java",
      avatarUrl: "https://avatars1.githubusercontent.com/u/260832?v=4",
      fontAwesomeClassname: "devicon-plain:java",
      style: { color: "#007396" },
    },
    {
      login: "Python",
      avatarUrl: "https://avatars3.githubusercontent.com/u/1525981?v=4",
      fontAwesomeClassname: "simple-icons:python",
      style: { color: "#3776AB" },
    },
    {
      login: "Laravel",
      avatarUrl: "https://avatars.githubusercontent.com/u/958072?v=4",
      fontAwesomeClassname: "simple-icons:laravel",
      style: { color: "#FF2D20" },
    },
    {
      login: "MySQL",
      avatarUrl: "https://avatars.githubusercontent.com/u/11823761?v=4",
      fontAwesomeClassname: "simple-icons:mysql",
      style: { color: "#4479A1" },
    },
    {
      login: "C#",
      avatarUrl: "https://avatars.githubusercontent.com/u/9141961?v=4",
      fontAwesomeClassname: "simple-icons:csharp",
      style: { color: "#239120" },
    },
    {
      login: "Rust",
      avatarUrl: "https://avatars.githubusercontent.com/u/5430905?v=4",
      fontAwesomeClassname: "simple-icons:rust",
      style: { color: "#000000" },
    },
    {
      login: "Go",
      avatarUrl: "https://avatars.githubusercontent.com/u/4314092?v=4",
      fontAwesomeClassname: "simple-icons:go",
      style: { color: "#00ADD8" },
    },
    {
      login: "Docker",
      avatarUrl: "https://avatars.githubusercontent.com/u/5429470?v=4",
      fontAwesomeClassname: "simple-icons:docker",
      style: { color: "#2496ED" },
    },
    {
      login: "Kubernetes",
      avatarUrl: "https://avatars.githubusercontent.com/u/13629408?v=4",
      fontAwesomeClassname: "simple-icons:kubernetes",
      style: { color: "#326CE5" },
    },
    {
      login: "GraphQL",
      avatarUrl: "https://avatars.githubusercontent.com/u/12972006?v=4",
      fontAwesomeClassname: "simple-icons:graphql",
      style: { color: "#E10098" },
    },
    // {
    //   login: "Firebase",
    //   avatarUrl: "https://avatars.githubusercontent.com/u/1335026?v=4",
    //   fontAwesomeClassname: "simple-icons:firebase",
    //   style: { color: "#FFCA28" },
    // },
    {
      login: "Next.js",
      avatarUrl: "https://avatars.githubusercontent.com/u/14985020?v=4",
      fontAwesomeClassname: "simple-icons:nextdotjs",
      style: { color: "#000000" },
    },
    {
      login: "Redis",
      avatarUrl: "https://avatars.githubusercontent.com/u/1529926?v=4",
      fontAwesomeClassname: "simple-icons:redis",
      style: { color: "#DC382D" },
    },
    {
      login: "Spring",
      avatarUrl: "https://avatars.githubusercontent.com/u/317776?v=4",
      fontAwesomeClassname: "simple-icons:spring",
      style: { color: "#6DB33F" },
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "University of San Carlos Talamban, Cebu City",
      subtitle: "Certificate in Computer Technology Major in Software Development",
      logo_path: "usc_logo.svg",
      alt_name: "USC",
      duration: "2017 - 2020",
      descriptions: [
         "⚡ I’ve studied core programming languages like C# and Java as part of my software development foundation.",
         "⚡ I’ve also learned essential web technologies including HTML, CSS, JavaScript, and Node.js.",
         "⚡ On the database side, I’ve worked with both SQL and NoSQL systems like MySQL and MongoDB.",
      ],
      website_link: "https://ismis.usc.edu.ph",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've contributed to innovative startups and established companies as a Software Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Mojo AI",
          company_url: "https://getmojo.ai/",
          logo_path: "mojo-ai.svg",
          duration: "June 2022 - Present",
          location: "Sandy, Utah",
          description:
            "Worked as a Back-End Developer building scalable services using Node.js, TypeScript, and TypeORM. Managed end-to-end deployment workflows through Git-based CI/CD pipelines, containerizing applications with Docker and deploying to AWS ECS with image management via ECR.",
          color: "#000000",
        },
        {
          title: "Sofware Developer",
          company: "SmartStart, a Dia & Gerona Ventures LLC Company",
          company_url: "https://dgv.app/",
          logo_path: "smartstart.jpeg",
          duration: "June 2022 - November 2023",
          location: "Las Vegas, Nevada",
          description:
            "Developed RESTful APIs with Node.js/Express and integrated them with React front-end components to enable smooth client-server communication.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "DNA Micro Sofware Inc.",
          company_url: "#",
          logo_path: "dna.jpeg",
          duration: "October 2020 - August 2022",
          location: "Cebu, Centrat Visayas, Philippines",
          description:
            "Worked as a semi full-stack developer, primarily focused on back-end development using Node.js and Express. On the front-end, collaborated closely with React developers by implementing integration logic, connecting UI components to backend services, and ensuring seamless data flow between client and server.",
          color: "#9b1578",
        }
      ],
    },
    {
      title: "Internship Experience",
      experiences: [
        {
          title: "Application Developer",
          company: "Lear Corporation",
          company_url: "https://www.lear.com/",
          logo_path: "lear.png",
          duration: "July 2019 - March 2020",
          location: "Lear Automotive Services (Netherlands) B.V. Philippine Branch",
          description:
            "Developed back-end solutions with the .NET Framework to streamline and eliminate manual paperwork, improving operational efficiency.",
          color: "#000000",
        },
      ],
    }
  ],
};

// Reviews
const reviews = [
  {
    name:"Jane",
    title:"Software Engineer",
    profile_path:"jane.png",
    website_url:"",
    comment:"I have developed a deep admiration for Danilo's exceptional technical skills over our nearly one year of collaboration, which are only surpassed by his remarkable patience and professional attitude toward his coworkers."
  },
  {
    name:"Cris Laurence",
    title:"Software Engineer",
    profile_path:"cris.png",
    website_url:"yowwwwwwwwwwwwwwww",
    comment:"Dan and I have collaborated for over a year on Backend and database tasks. Working with Dan is enjoyable due to his excellent programming skills, adaptability, timely delivery, and open communication. His clear diagrams and simple yet effective code make collaboration smooth and productive."
  }
]

// Projects Page
const projects = [
  {
    name:"Lear Clinic System - LCS",
    role:"Full-Stack Developer",
    description:"Designed to track OPD balances and issued medical slips for each employee at Lear Corporation. The system also monitors total PR amounts, usage, and remaining balances for partner vendors—primarily supporting operations at the Lear Clinic.",
    logo_path:"lear-login-sm.png",
    duration:"2018 - 2019",
    website_url:"",
    during:"Internship",
    tools:[
      {
        skillName: ".NET",
        fontAwesomeClassname: "simple-icons:dotnet", 
        style: { color: "#512BD4" }, 
      },
      {
        skillName: "MS SQL Server",
        fontAwesomeClassname: "simple-icons:microsoftsqlserver", 
        style: { color: "#CC2927" },
      },
      {
        skillName: "JQUERY",
        fontAwesomeClassname: "simple-icons:jquery", 
        style: { color: "#0769AD" },
      },
      {
        skillName: "IIS",
        fontAwesomeClassname: "simple-icons:windows", 
        style: { color: "#0078D6" },
      },
    ],
    isExerciseOnly:false
  },
  {
    name:"Lear Employee Certification System - LECS",
    role:"Full-Stack Developer",
    description:"A Skills Matrix application developed for Lear Corporation to efficiently track employee certifications, covering both initial certifications and recertifications.",
    logo_path:"lear-login-sm.png",
    duration:"2018 - 2019",
    website_url:"",
    during:"Internship",
    tools:[
      {
        skillName: ".NET",
        fontAwesomeClassname: "simple-icons:dotnet", 
        style: { color: "#512BD4" }, 
      },
      {
        skillName: "MS SQL Server",
        fontAwesomeClassname: "simple-icons:microsoftsqlserver", 
        style: { color: "#CC2927" },
      },
       {
        skillName: "JQUERY",
        fontAwesomeClassname: "simple-icons:jquery", 
        style: { color: "#0769AD" },
      },
      {
        skillName: "IIS",
        fontAwesomeClassname: "simple-icons:windows", 
        style: { color: "#0078D6" },
      },
      {
        skillName: "Bootstrap",
        fontAwesomeClassname: "simple-icons:bootstrap",
        style: { color: "#7952B3" }, 
      }
    ],
    isExerciseOnly:false
  },
  {
    name:"Task King System - TKS",
    role:"Backend Developer",
    description:"A task automation system built to manage daily responsibilities among scholar students, such as dishwashing, dining hall duties, gardening & etc. The application simplifies task scheduling by automatically assigning chores based on predefined rules, rotation cycles, or availability, helping ensure fair and consistent distribution of responsibilities in a shared living environment.",
    logo_path:"task-king-sm.png",
    duration:"2018 - 2019",
    website_url:"",
    during:"College",
    tools:[
       {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
      },
      {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "simple-icons:javascript",
        style: { color: "#F7DF1E", backgroundColor: "#000000" },
      },
       {
        skillName: "JQUERY",
        fontAwesomeClassname: "simple-icons:jquery", 
        style: { color: "#0769AD" },
      },
    ],
    isExerciseOnly:false
  },
  {
    name:"DCISM Web-Based Resource Management System",
    role:"Lead Developer",
    description:"A capstone project featuring inventory management, item borrowing, and reservation functionalities, all seamlessly integrated with SMS notification support.",
    logo_path:"dcism-sm.png",
    duration:"2018 - 2019",
    website_url:"",
    during:"College",
    tools:[
      {
        skillName: ".NET",
        fontAwesomeClassname: "simple-icons:dotnet", 
        style: { color: "#512BD4" }, 
      },
       {
        skillName: "MS SQL Server",
        fontAwesomeClassname: "simple-icons:microsoftsqlserver", 
        style: { color: "#CC2927" },
      },
       {
        skillName: "JQUERY",
        fontAwesomeClassname: "simple-icons:jquery", 
        style: { color: "#0769AD" },
      },
      {
        skillName: "Bootstrap",
        fontAwesomeClassname: "simple-icons:bootstrap",
        style: { color: "#7952B3" }, 
      }
    ],
    isExerciseOnly:false
  }
]

// Contact Page
const contact = {
  contactSection: {
    title: "Keep in Touch",
    profile_image_path: "dan-teal-circular.png",
    description:
      "Feel free to reach out to me through any of the platforms below.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Cebu City, Cebu, Philippines, 6000",
    locality: "Cebu City",
    country: "Philippines",
    region: "Region 7",
    zipCode: "6000",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/MKCbXf5c9bZAHnsHA",
  }
};
export {
  settings,
  projectInfo,
  greeting,
  aboutMe,
  socialMediaLinks,
  skills,
  otherInterests,
  degrees,
  experience,
  reviews,
  projects,
  contact
};
