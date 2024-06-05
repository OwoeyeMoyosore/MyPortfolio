import "./App.css";
import NavBar from "./components/Navbar";
import { ReactComponent as MyPicture } from "./svg/myPicture.svg";
import { ReactComponent as Github } from "./svg/github.svg";
import { ReactComponent as LinkedIn } from "./svg/linkedin.svg";
import { ReactComponent as Twitter } from "./svg/twitter.svg";
import { ReactComponent as Mail } from "./svg/mail.svg";
import { ReactComponent as HTMLLogo } from "./svg/html.svg";
import { ReactComponent as Bootstrap } from "./svg/bootstrap.svg";

function App() {
  return (
    <div>
      <NavBar />
      <main className="xl:px-[217px] md:px-32 px-8 lg:mt-32 mt-10 absolute ">
        <div className="flex md:flex-row flex-col-reverse md:gap-20 gap-4 w-full">
          <div className="md:w-2/3">
            <h1 className="text-[#FFFFFF] font-bold text-[44px]">Hello 👋🏾</h1>
            <p className="text-base text-[#999999] pt-6">
              I am <span className="font-semibold">Owoeye Moyosore</span>, a detail-oriented  <span className="font-semibold">Frontend Developer</span> who loves building quality
              applications using JavaScript and its frameworks. I started my journey in 2022, after attending my first tech bootcamp with {" "}
              <span className="font-semibold">Utiva</span>, a community I joined after studying computer science at Federal University Oye Ekiti, Nigeria. <br /> <br />
              Since graduation, I've put my skills to the test and gained hands-on Frontend work experience by contributing to a couple of projects. I also frequently publish a
              variety of articles about my experiences as a <span className="font-semibold">Technical Writer</span> or on my hashnode blog and when I'm not doing any of these
              things, you'd find me with my chess board.
            </p>
            <div className="mt-8">
              <a href="https://drive.google.com/file/d/1YooXAPuJpq4cShHFBTKX_eid1DhACbw0/view" className="border border-[#00D288] text-base py-2 text-[#C2C8CB] px-4" target="_blank"  rel="noreferrer">
                View My Resume
              </a>
            </div>
            <div className="mt-9 flex gap-5">
<a href="https://github.com/OwoeyeMoyosore" target="_blank" rel="noreferrer"><Github /></a>
<a href="https://www.linkedin.com/in/moyosore-owoeye-b84894198/" target="_blank" rel="noreferrer"><LinkedIn /></a>
<a href=""><Twitter /></a>
<a href="mailto:moyosoreowoeye2000@gmail.com"><Mail /></a>
            </div>
          </div>
          <div className="md:w-1/3 w-full">
            <MyPicture className="w-full h-full" />
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="font-medium text-2xl text-white">My skills</h2>
          <div className="flex flex-wrap md:mt-9 mt-4 gap-4">
<HTMLLogo className=""/>
<Bootstrap className=""/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
