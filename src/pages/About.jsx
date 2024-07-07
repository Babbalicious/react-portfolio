import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-primary-subtle text-dark">
        <h1 className="text-start p-5 page-title">About Me</h1>
        <div className="text-start p-5 pt-1 pe-5 fs-5 w-75">
          <img
            src="./images/selfie.png"
            className="img-fluid about-image"
            alt="..."
          />
          <p>
            Hello! My name is Chris Babb, and I am on an exciting journey to
            become a professional programmer specializing in game development
            and web development. With a passion for technology and a keen
            interest in creating immersive experiences and innovative solutions,
            I am committed to honing my skills and making a meaningful impact in
            the tech industry.
          </p>
          <p>
            I hold a Master's degree in Social Work and a Bachelor's degree in
            Biology, both from the prestigious University of Texas at Austin. My
            diverse educational background has equipped me with a unique
            perspective and a broad skill set. Through my studies and
            experiences, I have developed a deep understanding of human
            behavior, problem-solving, and analytical thinking—skills that are
            invaluable in the world of programming and development.
          </p>
          <p>
            Beyond my professional aspirations, I am proud to be a devoted
            husband and father of three wonderful children. My family and I
            reside in the vibrant city of Austin, Texas. Living in Austin, a hub
            for tech innovation and creativity, has further fueled my enthusiasm
            for technology and development. The dynamic and supportive tech
            community here inspires me every day as I strive to learn and grow
            in this ever-evolving field.
          </p>
          <p>
            In my free time, I enjoy exploring new technologies, coding
            projects, and participating in local tech meetups and hackathons. I
            am eager to collaborate with like-minded individuals and teams to
            create engaging games and robust web applications. Thank you for
            taking the time to learn more about me, and I look forward to
            connecting with you!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
