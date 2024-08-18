import ProjectCard from "../ProjectCard"


const data = {
  title: 'bitblog',
  summary: `
    A platform for creating and managing a blog, built using the MERN stack.
    User authentication is handled via a simple username & password strategy with password hashing and salting for secure storage.
    JSON Web Tokens ensure that users remain authenticated as they navigate the site.
    The responsive app features a TinyMCE rich text editor that allows for the creation of clean, properly formatted blog posts.
  `,
  tags: [
    {
      text: 'CSS',
      icon: <i className='devicon-css3-plain'></i>,
    },
    {
      text: 'Express',
      icon: <i className='devicon-express-original'></i>,
    },
    {
      text: 'Heroku',
      icon: <i className='devicon-heroku-original'></i>,
    },
    {
      text: 'Javascript',
      icon: <i className='devicon-javascript-plain'></i>,
    },
    {
      text: 'MongoDB',
      icon: <i className='devicon-mongodb-plain'></i>,
    },
    {
      text: 'Node.js',
      icon: <i className='devicon-nodejs-plain'></i>,
    },
    {
      text: 'React',
      icon: <i className='devicon-react-original'></i>,
    },
  ],
  images: [
    {
      src: '/images/twitter-clone-feed.png',
      alt: 'twitter clone home screen',
    },
    {
      src: '/images/twitter-clone-login.png',
      alt: 'twitter clone login screen',
    },
  ],
  color: '#1D9BF0',
  repo: 'https://github.com/gregolive/blog-platform',
  link: 'https://gregolive.github.io/blog-platform/',
}

const Projects = () => {
  return (
    <div>
      <ProjectCard {...data}/>
    </div>
  )
}
export default Projects