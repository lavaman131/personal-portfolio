import Typewriter from "typewriter-effect";

const AutoTypingHelper = () => {
  return (
    <p>
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Data Scientist",
            "Frontend Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 80,
          deleteSpeed: 80,
          typeSpeed: 20,
        }}
      />
    </p>
  );
};

export default AutoTypingHelper;
