import TechStack from "./components/TechStack";
import "./TechStacks.css";
const TechStacks = () => {
const techStacks = [
    {
        title: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        percentage: "100%",
    },
    {
        title: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        percentage: "90%",
    },
    {
        title: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        percentage: "95%",
    },
    {
        title: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        percentage: "92%",
    },
    {
        title: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        percentage: "85%",
    },
    {
        title: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        percentage: "80%",
    },
    {
        title: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        percentage: "78%",
    },
    {
        title: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        percentage: "97%",
    },
    {
        title: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        percentage: "96%",
    },
    {
        title: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        percentage: "88%",
    },
    {
        title: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        percentage: "75%",
    },
    {
        title: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        percentage: "70%",
    },
    {
        title: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        percentage: "65%",
    },
    {
        title: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        percentage: "80%",
    },
    {
        title: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        percentage: "60%",
    },
    {
        title: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        percentage: "73%",
    },
    {
        title: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        percentage: "55%",
    },
    {
        title: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        percentage: "68%",
    },
];
  return (
    <div className="techStacks">
      {techStacks.map((stack, index) => (
        <TechStack
          key={index}
          title={stack.title}
          icon={stack.icon}
          percentage={stack.percentage}
        />
      ))}
    </div>
  );
};

export default TechStacks;
