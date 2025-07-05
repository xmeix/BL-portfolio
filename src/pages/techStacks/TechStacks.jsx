import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TechStack from "./components/TechStack";
import "./TechStacks.css";
import Titles from "../../components/titles/Titles";

const TechStacks = () => {
  const techStacks = [
    // techStacks1
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
    // techStacks2
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
    // techStacks3
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
      <Titles
        title1={"Explore My"}
        title2={"Tech Stack: Tools I Master, Use & Love"}
      />
      <div className="techStacks-content">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={2}
          slidesPerView={2}
          grabCursor={true}
          className="techStacksSwiper"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 5 },
            480: { slidesPerView: 5 },
            640: { slidesPerView: 7 },
            768: { slidesPerView: 8 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 8 },
            1440: { slidesPerView: 10 },
            1920: { slidesPerView: 12 },
          }}
          style={{ width: "100%", maxWidth: "1200px" }}
        >
          {techStacks.map((stack, index) => (
            <SwiperSlide key={index}>
              <TechStack
                title={stack.title}
                icon={stack.icon}
                percentage={stack.percentage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="techStacks-description">
          <p>
            Every project is a new puzzle, and the right tool is the one that
            gets the job done. My stack is always evolving, adaptability is my
            favorite skill.
          </p>
          <blockquote>
            <p>"If all you have is a hammer, everything looks like a nail."</p>
            —Abraham Maslow
            <p>
              <p className="special-text">"Luckily, I collect tools!"</p>
            </p>
            —BOUALOUACHE Lamia
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
