import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-gray-900 text-gray-100">
      <div className="max-w-screen-lg mx-auto py-16">
        <div className='text-center'>
          <h2 className="mt-2 mb-8 text-3xl font-extrabold text-cyan-500 tracking-wide uppercase">About Me</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <p className="text-lg mb-6">
            Greetings! My name is Monika Kisan Gadage and I'm a skilled software developer with a strong passion for exploring new technologies. Over the past three years, I've had the privilege to work on a wide range of projects,
            from developing secure mobile applications to migrating legacy web application to the modern tech stack.
          </p>
          <p className="text-lg mb-6">
            I take pride in my ability to tackle complex challenges and deliver high-quality solutions that exceed expectations.
            I am a quick learner and enjoy collaborating with others to deliver high-quality solutions.
          </p>
          <p className="text-lg mb-6">
            When I'm not coding, I like to stay up-to-date with the
            latest developments in the tech industry and work on personal projects to keep my skills sharp.
            If you're looking for a skilled developer to join your team, feel free to contact me.
          </p>
        </div>
      </div>
    </div>
  );
};


export default About;
