import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          image:
            "url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80')",
        },
        fpsLimit: 60,
        pauseOnBlur: true,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ["polygon"],
            polygon: {
              sides: 10, // the number of sides of the polygon
            },
            // character: {
            //   value: "0", // the text to use as particles, any string is valid, for escaping unicode char use the `\uXXXX` syntax
            //   font: "Verdana", // the font to use to draw the text. If the font needs an external css or javascript like FontAwesome you should include all the necessary files on your own
            //   style: "", // any additional css style to add to the text
            //   weight: "", // the css weight property, some fonts like font awesome have a specified weight, check the documentation if needed
            // },
            // image: {
            //   src: "https://www.freepnglogos.com/uploads/1-number-png/1-number-classic-font-style-13.png",
            //   width: 10,
            //   height: 10,
            // },
          },
          size: {
            value: 15,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
