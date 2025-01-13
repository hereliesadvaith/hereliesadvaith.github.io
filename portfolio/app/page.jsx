import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center h-full xl:pt-20 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent-default">Advaith</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a software developer with a passion for creating innovative
              solutions.
            </p>
            {/* Button and Socials */}
            <div>
              <Button
                variant="outline"
                size="lg"
                className="uppercase border-2 border-accent-default cursor-pointer"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
