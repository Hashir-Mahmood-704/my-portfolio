import { skillsData } from "../utils/data"

const Skills = () => {
  return (
    <div className="mb-[50px]">
      <h3 className="text-heading_color font-medium text-[20px] lg:text-[25px] mt-[50px]  ml-[30px] lg:ml-0">
        My Skills
      </h3>

      <div className="flex flex-wrap justify-center gap-[40px] lg:gap-[60px] mt-[25px] lg:mt-[50px]">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-[5px] skills-shadow rounded-[10px] w-[125px] h-[130px] transition-all duration-[0.6s] ease-in-out "
          >
            <img
              src={item.img}
              alt="image"
              className="w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] object-cover"
            />
            <p className="text-text_color font-medium text-[14px] lg:text-[16px] transition-all duration-[0.6s] ease-in-out">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
