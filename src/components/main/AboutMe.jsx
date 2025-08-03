
const AboutMe = () => {
  return (
    <>
      <div className="mt-30 text-center p-5">
        <h1 className="mb-10 text-[50px]">About Me</h1>
        <p className="text-[25px] mt-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          reiciendis quisquam cum esse nesciunt magnam voluptatum reprehenderit,
          accusantium, vero veritatis, quis saepe quod maxime ad dolorum iusto!
          Excepturi, cupiditate similique! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ut enim explicabo asperiores quis,
          temporibus quam magni labore animi id voluptatibus rerum error
          doloribus repudiandae libero at quae. Deserunt, officiis itaque.
        </p>
      </div>
      <section className="text-center mt-20">
        <h2 className="text-[45px]">Skills</h2>
        <article className="flex mt-20 text-[30px]">
          <div className="flex justify-center items-center gap-10">
            <img 
            src="./img/icon-skills/skills.png" 
            alt=""
            className="w-[25%]" 
            />
            <p>uno</p>
          </div>
          <div className="flex justify-center items-center gap-10">
            <img 
            src="./img/icon-skills/skills.png" 
            alt=""
            className="w-[25%]"  
            />
            <p>dos</p>
          </div>
          <div className="flex justify-center items-center gap-10">
            <img 
            src="./img/icon-skills/skills.png" 
            alt=""
            className="w-[25%]"  
            />
            <p>tres</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default AboutMe
