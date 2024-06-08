import { ReactComponent as MyPicture } from "../svg/myPicture.svg";
import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as LinkedIn } from "../svg/linkedin.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";
import { ReactComponent as Mail } from "../svg/mail.svg";
import { ReactComponent as HTMLLogo } from "../svg/html.svg";
import { ReactComponent as Bootstrap } from "../svg/bootstrap.svg";
import { ReactComponent as Javascript } from "../svg/javascript.svg";
import { ReactComponent as CSS3 } from "../svg/css3.svg";
import { ReactComponent as React } from "../svg/react.svg";
import { ReactComponent as Antd } from "../svg/antd.svg";
import { ReactComponent as Tailwind } from "../svg/tailwind.svg";
import { ReactComponent as ReactRouter } from "../svg/router.svg";
import { ReactComponent as AspNet } from "../svg/asp-net.svg";
import { ReactComponent as Material } from "../svg/material.svg";
import { ReactComponent as SQL } from "../svg/sql.svg";
import { ReactComponent as SASS } from "../svg/sass.svg";
import { ReactComponent as ReactQuery } from "../svg/react-query.svg";
import { ReactComponent as Redux } from "../svg/redux.svg";
import { ReactComponent as Typescript } from "../svg/typescript.svg";
import { ReactComponent as Vue } from "../svg/vue.svg";
import { ReactComponent as CSharp } from "../svg/c#.svg";
import { ReactComponent as Oasis } from "../svg/oasis.svg";
import {ReactComponent as Evoting} from "../svg/evoting-compressed.svg"
import {ReactComponent as Merchant} from "../svg/merchant.svg"

const projects = [
  {
    image: <Oasis className="w-full max-h-[327px] object-contain" />,
    name: "OasisForte Healthcare Official Website",
    description: "A website for a Healthcare company in the United Kingdom (UK) that creates Quality, reliable, and flexible Healthcare service accessible to people in their own homes.",
    isGithub: true,
    github: "",
    liveDemo: "http://oasisfortehealthcare.co.uk",
    stack: "React | Tailwind ",
  },
  {
    image: <Evoting className="w-full max-h-[327px] object-contain" />,
    name: "CIPM Evoting Portal",
    description: "The first ever E-Voting application that allows CIPM Members to Nominate fellow members, Accept or Reject their Nominations, Cast Votes and Hold Successful Elections and View Results",
    isGithub: false,
    github: "",
    liveDemo: "https://evoting.cipmnigeria.org",
    stack: "React | AntDesign | Typescript ",
    
  },
  {
    image: <Merchant className="w-full max-h-[327px] object-contain" />,
    name: "Cyberpay Merchant",
    description: "Payment processing service that allows merchants process payments and collections",
    isGithub: false,
    github: "",
    liveDemo: "https://merchant.cyberpay.ng",
    stack: "React | AntDesign | Typescript | SASS | Styled Components",
  },
];
const MainContent = () => {
  return (
    <main className="xl:px-[217px] md:px-32 px-8 lg:mt-32 mt-10 absolute z-20">
      <div className="flex md:flex-row flex-col-reverse md:gap-20 gap-4 w-full relative">
        <div className="md:w-2/3">
          <h1 className="text-[#FFFFFF] font-bold text-[44px]">Hello 👋🏾</h1>
          <p className="text-[15px] text-[#999999] pt-6">
            {/* I am <span className="font-semibold">Owoeye Moyosore</span>, a detail-oriented  <span className="font-semibold">Frontend Developer</span> who loves building quality
          applications using JavaScript and its frameworks. I started my journey in 2022, after attending my first tech bootcamp with {" "}
          <span className="font-semibold">Utiva</span>, a community I joined after studying computer science at Federal University Oye Ekiti, Nigeria. <br /> <br />
          Since graduation, I've put my skills to the test and gained hands-on Frontend work experience by contributing to a couple of projects. I also frequently publish a
          variety of articles about my experiences as a <span className="font-semibold">Technical Writer</span> or on my hashnode blog and when I'm not doing any of these
          things, you'd find me with my chess board. */}
            Hi, I'm <span className="font-semibold">Owoeye Moyosore</span>, a front-end developer with a passion for innovation and creativity. I thrive in the fast-paced world of
            web development, where new technologies and trends emerge every day. I love jumping on new opportunities to learn and grow, whether it's exploring new frameworks,
            experimenting with AI-powered tools, or diving into the latest design patterns. <br /> <br />
            With about <span className="font-semibold">5</span> years of experience in web development, I've honed my skills in HTML, CSS, JavaScript, React, Typescript, Vue,
            ASP.NET etc. I'm always on the lookout for ways to improve user experiences, optimize performance, and push the boundaries of what's possible in the browser. <br />{" "}
            <br />
            When I'm not coding, you can find me reading about the latest developments in tech, attending web development meetups, trying on ways to link my skills with healthcare
            because I am very big on the human health, or tinkering with personal projects that showcase my creativity and problem-solving skills.
          </p>
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1YooXAPuJpq4cShHFBTKX_eid1DhACbw0/view"
              className="border border-[#00D288] text-base py-2 text-[#C2C8CB] px-4"
              target="_blank"
              rel="noreferrer"
            >
              View My Resume
            </a>
          </div>
          <div className="mt-9 flex gap-5">
            <a href="https://github.com/OwoeyeMoyosore" target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/moyosore-owoeye-b84894198/" target="_blank" rel="noreferrer">
              <LinkedIn />
            </a>
            <a href="">
              <Twitter />
            </a>
            <a href="mailto:moyosoreowoeye2000@gmail.com" className="relative">
              <Mail />
            </a>
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <MyPicture className="w-full h-full" />
        </div>
      </div>

      <div className="text-center mt-20">
        <h2 className="font-medium text-2xl text-white">My skills</h2>
        <div className="flex flex-wrap md:mt-9 mt-4 gap-4 justify-center">
          <React className="" />
          <Vue className="" />
          <Typescript className="" />
          <CSharp className="" />
          <AspNet className="" />
          <HTMLLogo className="" />
          <Javascript className="" />
          <CSS3 className="" />
          <SASS className="" />
          <Tailwind className="" />
          <Material className="" />
          <Antd className="" />
          <Bootstrap className="" />
          <ReactRouter className="" />
          <SQL className="" />
          <ReactQuery className="" />
          <Redux className="" />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-medium text-2xl text-white">My Projects</h2>
        <p className="text-base text-[#999999] pt-6">
          {/* I am Moyosore, a detail-oriented Frontend Developer who loves building quality applications using JavaScript and its frameworks. I started my journey in 2022, after
          attending my first tech bootcamp with Utiva, a community I joined after studying computer science at the University of Nigeria. */}

          I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. <br /> I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
        </p>
        <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-8 h-full">
          {/* <div className="bg-[#222222] px-5 pb-8 max-w-[410px] rounded-lg">
              <Oasis className="w-full max-h-[327px] object-contain" />

            <h3 className="font-bold text-xl text-[#C2C8CB]">CIPM Nigeria</h3>
            <p className="pt-2 text-sm text-[#BFBFBF]">Web app for HR mangement Web app for HR mangement</p>
            <p className="pt-2 text-[#00D288]">React | Tailwind</p>
            <div className="flex py-6 gap-4">
              <a href="mailto:moyosore@example.com" className="bg-[#00D288] text-base text-[#090909] py-2 px-4 cursor-pointer">
                Live Demo
              </a>
              <a href="https://github.com/your-repo" className="border-[#00D288] border text-base text-[#C2C8CB] py-2 px-4 cursor-pointer">
                Github
              </a>
            </div>

       </div> */}

          {projects &&
            projects.map((project, index) => (
              <div className="bg-[#222222] px-5 pb-8 max-w-[410px] rounded-lg" key={index}>
                {project.image}
                <h3 className="font-bold text-xl text-[#C2C8CB]">{project.name}</h3>
                <p className="pt-2 text-sm text-[#BFBFBF]">{project.description}</p>
                <p className="pt-2 text-[#00D288]">{project.stack}</p>
                <div className="flex py-6 gap-4">
                  <a href={project.liveDemo} className="bg-[#00D288] text-base text-[#090909] py-2 px-4 cursor-pointer" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  {project.isGithub && (
                    <a href={project.github} className="border-[#00D288] border text-base text-[#C2C8CB] py-2 px-4 cursor-pointer" target="_blank" rel="noreferrer">
                      Github
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
