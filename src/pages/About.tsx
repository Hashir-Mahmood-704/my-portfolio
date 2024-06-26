import Skills from "../components/Skills"
import SkillsSlider from "../components/SkillsSlider"
const About = () => {
  return (
    <div className="bg-body_color border border-body_color transition-all duration-[0.6s] ease-in-out">
      <div className="max-w-[1200px]  mx-auto ">
        {/* big heading */}
        <h1 className="text-[45px] lg:text-[60px] font-bold text-heading_color text-center mt-[50px]">
          About <span className="text-main_color">Me</span>
        </h1>

        <Skills />
      </div>

      <SkillsSlider />
    </div>
  )
}

export default About
