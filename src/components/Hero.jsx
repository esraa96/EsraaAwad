import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaArrowRight, FaCode, FaLightbulb, FaMagic } from "react-icons/fa";

const Sparkle = ({ position }) => (
  <svg
    className="pointer-events-none absolute z-20"
    width="21"
    height="21"
    viewBox="0 0 21 21"
    style={{
      opacity: Math.random() * 0.8 + 0.2,
      left: `${position.x}%`,
      top: `${position.y}%`,
      transform: `scale(${Math.random() * 0.5 + 0.5}) rotate(${
        Math.random() * 360
      }deg)`,
      animation: `float ${Math.random() * 3 + 3}s ease-in-out infinite`,
      animationDelay: `${Math.random()}s`,
    }}
  >
    <path
      d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
      fill="#f9a8d4"
    ></path>
  </svg>
);

const FloatingPill = ({ icon, text, position, animation }) => (
  <div className={`hidden lg:block absolute ${position} ${animation}`}>
    <div className="px-4 py-2 rounded-lg bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 text-pink-400 flex items-center gap-2">
      {icon} {text}
    </div>
  </div>
);

const Hero = () => {
  const codeString = `const profile = {
  name: "Esraa Awad",
  title: "Frontend and Cross Platforms Developer",
skills: ["HTML&CSS","JavaScript","React.js","Next.js","Flutter","Tailwind&Bootstrap"],
  isAvailable: true,
  hire: function() {
    if(this.isAvailable) {
      return "Let's create something beautiful!";
    }
  }
};`;

  return (
    <main className="text-white min-h-screen -mx-8 -mt-20 flex items-center">
      <section className="hero w-full flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mb-12 lg:mb-0 relative"
          >
            {/* Floating Pills with new Pink colors */}
            <FloatingPill
              icon={<FaMagic />}
              text="UI Magic"
              position="left-[5.5rem] top-[2.3rem]"
              animation="animate-float"
            />
            <FloatingPill
              icon={<FaCode />}
              text="Clean Code"
              position="right-10 top-20"
              animation="animate-float"
            />
            <FloatingPill
              icon={<FaLightbulb />}
              text="Innovation"
              position="top-[17rem] left-[70%] transform -translate-x-1/2"
              animation="animate-float"
            />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-8">
              <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">
                Welcome to my universe
              </span>
            </div>

            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="relative inline-block">
                  {[...Array(5)].map((_, i) => (
                    <Sparkle
                      key={i}
                      position={{
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                      }}
                    />
                  ))}
                  Hello
                </span>
                <br />
                <span className="relative inline-block">
                  I'm <span className="text-pink-400">Esraa Awad</span>
                  {[...Array(5)].map((_, i) => (
                    <Sparkle
                      key={i}
                      position={{
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                      }}
                    />
                  ))}
                </span>
              </h1>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 mb-8 backdrop-blur-sm">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Cross-Platform Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-xl sm:text-2xl text-pink-400 font-medium"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/esraa96"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#f472b6]"
              >
                <span className="block w-full text-center px-8 py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-transparent">
                  <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                    <span>Learn More</span>
                    <FaArrowRight className="transform transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
              <a
                href="https://drive.google.com/file/d/1Nvv8NPjtbhxm3Y8_JMfBEHM6wtyotXzf/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-gray-800 border border-pink-400/50 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:border-pink-400 hover:shadow-[0_0_25px_rgba(244,114,182,0.5)]"
              >
                <span className="block w-full text-center px-8 py-4 rounded-[11px] bg-gray-800">
                  <span className="relative text-neutral-300 group-hover:text-white font-medium transition-colors">
                    Get Resume
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="p-1 rounded-xl bg-gradient-to-r from-pink-300 to-fuchsia-300 animate-gradient-x">
              <div className="bg-gray-800 rounded-lg">
                <div className="p-3 border-b border-gray-700/50 flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4">
                  <SyntaxHighlighter
                    language="javascript"
                    style={atomDark}
                    customStyle={{
                      background: "transparent",
                      border: "none",
                      padding: "0",
                      margin: "0",
                      minHeight: "300px",
                      whiteSpace: "pre-wrap",
                      overflow: "hidden",
                    }}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
