import type { Nav, ProjectC, ServiceC, Skill } from "../interfaces";

export const Navlink:Nav[]=[
    {
        id:"Home",
        name:"Home",
    },
     {
        id:"About",
        name:"About",
    },
     
       {
        id:"Service",
        name:"Service",
        
    },
    {
        id:"Skills",
        name:"skills",
    },
     {
        id:"Project",
        name:"Project",

    },
      {
        id:"Contact",
        name:"Contact",
        
    },
   

]
export const ProjectsS:ProjectC[]=[
    {
        id:"Salone",
        img:"/Ma.png",
        projectT:"Masaya Haneen",
        Tool:["Reat js","TypeScript","TalwindCss"],
des:"Masaya Haneen is a modern and responsive e-commerce website built with React.js, TypeScript, and Tailwind CSS. The website features a clean and intuitive user interface, allowing users to browse and purchase products with ease. It includes product listings, detailed product pages, a shopping cart, and a checkout process. The use of React.js enables dynamic content updates and smooth navigation, while TypeScript ensures type safety and improved code quality. Tailwind CSS provides a flexible and efficient styling solution, resulting in a visually appealing design that adapts seamlessly to different screen sizes. Overall, Masaya Haneen offers a user-friendly online shopping experience with a focus on performance and aesthetics.",
href:["https://massaya-haneen.netlify.app/","https://github.com/Abdulhalimg2002/Massaya-Haneen"],
Text:["Live Demo","Github"],

    },
 
   
  {
        id:"Todo",
        img:"/image.png",
        projectT:"Todo",
        Tool:["Reat js","TypeScript","TalwindCss","Rest API"],
des:"Todo is a simple and efficient task management application that allows users to create, organize, and track their daily tasks. Built with React.js, TypeScript, and Tailwind CSS, the app provides a clean and intuitive interface for managing tasks. Users can add new tasks, mark them as completed, and delete tasks as needed. The application also features a responsive design, ensuring a seamless experience across different devices. With its focus on simplicity and usability, Todo helps users stay organized and productive in their daily lives.",
href:["https://abdulhalimtodo.netlify.app/","https://github.com/Abdulhalimg2002/fullstack-todo-app"],
Text:["Live Demo","Github"],


},
{
        id:"My-e-commers",
        img:"/Platform.png",
        projectT:"My-e-commers",
        Tool:["React.js,Next.js","TypeScript","shadcn UI","zustand","node.js","Express.js","PostgreSQL","Rest API","Strapi"],
des:"Developed a modern full-stack e-commerce platform with scalable architecture.Built responsive and reusable UI components using Tailwind CSS and shadcn/ui. Implemented secure authentication and authorization using JWT and Google OAuth. Developed RESTful APIs with Express.js and Prisma ORM.Designed and managed relational databases using PostgreSQL. Integrated Stripe payment gateway for secure online transactions.Built admin dashboard for managing products, categories, orders, and users. Implemented image upload and cloud storage using Cloudinary.Added protected routes, cookie-based authentication, and role-based access control.Optimized application performance and responsive experience across devices.Deployed frontend and backend services on cloud platforms.",
href:["https://e-commersss.vercel.app/","https://github.com/Abdulhalimg2002/e-commersss"],
Text:["Live Demo","Github"],

    },
    {
        id:"AI-Travel-plan",
        img:"/Gemini_Generated_Image_39dx5439dx5439dx.png",
        projectT:"AI-Travel-plan",
        Tool:[" Next.js ","React js","TypeScript","ShadCN UI","MongoDB ","OpenAI","API Routes"],
         des:"AI Travel Plan is a smart travel planning application that transforms the way you organize your trips. Leveraging artificial intelligence, it provides personalized itineraries, including destination suggestions, daily activity planning, and accommodation recommendations. Users can also generate PDF travel plans for easy sharing or reference.With AI Travel Plan, traveling becomes more organized, efficient, and enjoyable—whether it’s a short getaway or an extensive adventure.",
href:["https://travel-plans-delta.vercel.app/","https://github.com/Abdulhalimg2002/travel-plans"],
Text:["Live Demo","Github"],

    },
   {
       id: "EKA",
       img: "/52c3b1ef-ecf5-4f3d-8602-9e0109372dd3-removebg-preview.png",
       projectT: "EKA",
       Tool: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
       des: "EAK is a modern platform designed to help people easily find and book unique places to stay while supporting local hosts.Throughout this project, I handled the design and development of the platform, focusing on:A clean and intuitive user experience .Secure booking and payment workflowsEfficient host management tools.Responsive design for mobile and webBuilding EAK allowed me to apply my knowledge in software engineering, from database design and backend development to UI/UX, security, and testing.",
href: ["https://github.com/Abdulhalimg2002/EAK-HOTEL"] ,
       Text: [ "Github"],
   },
   {
    id:"Dashboard",
    img:"/dashboard.png.png",
    projectT:"Dashboard",
    Tool:["React js","Next.js","TypeScript","Tailwind CSS","ShadCN UI"],
     des:"Dashboard is a powerful and intuitive web application designed to provide users with real-time insights and analytics. Built with React.js, TypeScript, and Tailwind CSS, it offers a visually appealing and responsive interface for data visualization. The dashboard features interactive charts, graphs, and widgets that allow users to monitor key performance indicators (KPIs), track trends, and make informed decisions based on the displayed data. With its user-friendly design and robust functionality, the Dashboard is an essential tool for businesses and individuals looking to gain valuable insights from their data.",

   },
   {
    id:"watan tours",
    img:"/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png",
    projectT:"Watan Tours",
    Tool:["Next.js","TypeScript","ShadCN UI","Tailwind CSS"],
     des:"Watan Tours is a travel website that offers a wide range of tour packages and travel services to customers. The website provides an easy-to-use interface for users to browse and book tours, as well as access information about destinations, itineraries, and pricing. With a focus on customer satisfaction and memorable travel experiences, Watan Tours aims to be a trusted platform for travelers seeking unique and exciting adventures around the world.",
href:["https://watan-tours.vercel.app/"],
Text:["Live Demo"],
   }



]


export const Services:ServiceC[]=[
    {
        id:"Web Development",
        title:"Web Development",
        description:"create responsive and dynamic websites using modern technologies like React and Tailwind CSS.",
        icon:"🌐",
    },

    {
        id:"Backend Development",
        title:"Backend Development",
        description:"Developing robust server-side applications with laravel  and databases like MongoDB and MySQL.",
        icon:"⚙️",
    },
    {
        id:"UI/UX Design",
        title:"UI/UX Design",
        description:"Designing intuitive user interfaces and experiences using Figma tools.",
        icon:"🎨",
    },
    {
        id:"API Development",
        title:"API Development",
        description:"Creating RESTful  APIs for seamless data integration and communication.",
        icon:"🔗",
    },
    {
        id:"Database Management",
        title:"Database Management",
        description:"Designing and managing databases for efficient data storage and retrieval.",
        icon:"🗄️",
    },
    {
        id:"Version Control",
        title:"Version Control",
        description:"Using Git and GitHub for collaborative development and version control.",
        icon:"🛠️",
    },
    {
        id:"AI Integration",
        title:"AI Integration",
        description:"Integrating AI technologies into applications for enhanced functionality.",
        icon:"🤖",
    }


]

export const Skills:Skill[]=[
    {
        id:"HTML",
        name:"HTML",
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        id:"CSS",
        name:"CSS",
       
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        id:"JavaScript",
        name:"JavaScript",
       
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        id:"TypeScript",
        name:"TypeScript",

        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
        id:"React",
        name:"React.js",
       
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
      {
        id:"Next.js",
        name:"Next.js",
       
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
        id:"Tailwind CSS",
        name:"Tailwind CSS",
       
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    },
  
    
    {
        id:"MongoDB",
        name:"MongoDB",
       
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        id:"Git",
        name:"Git",
       
        category:"Tools",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
      {
        id:"postman",
        name:"postman",
       
        category:"Tools",
        icon:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
    },
       { id:"Github",
        name:"Github",
       
        category:"Tools",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        id:"Figma",
        name:"Figma",
       
        category:"Design",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
        id:"PHP",
        name:"PHP",
       
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
        id:"Laravel",
        name:"Laravel",
        
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
    },
    {
        id:"MySQL",
        name:"MySQL",
       
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
        id:"nodejs",
        name:"nodejs",
        category:"Backend",
       
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        id:"PostgreSQL",
        name:"PostgreSQL",
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
        id:"Redux",
        name:"Redux",
        category:"Tools",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    },
    {
        id:"Express.js",
        name:"Express.js",
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"

    },
    {
        id:"Docker",
        name:"Docker",
        category:"Tools",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
        id:"Vercel",
        name:"Vercel",
        category:"Tools",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
    }
    ,
{
    id:"Netlify",
    name:"Netlify",
    category:"Tools",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
}
,

{
    id:"prisma",
    name:"prisma",
    category:"Backend",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
},
{
    id:"vite",
    name:"vite",
    category:"Tools",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg"
}



    
]
