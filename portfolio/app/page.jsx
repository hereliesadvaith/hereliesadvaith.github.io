import FitText from "@/components/FitText";
import Social from "@/components/Social";

const CV_LINK =
  "https://drive.google.com/uc?export=download&id=1GZMC-tLjCa-RGn-XkwVROB1Yh7wGQ6Ur";

const Home = () => {
  return (
    <section className="min-h-[calc(100svh-72px)] xl:min-h-[calc(100svh-104px)] flex flex-col px-4 xl:px-10">
      {/* Statement */}
      <div className="flex-1 grid xl:grid-cols-2 items-center py-16">
        <div className="hidden xl:block" />
        <div className="max-w-[460px] xl:max-w-[520px] mx-auto xl:mx-0 text-center xl:text-left">
          <p className="text-[20px] xl:text-[23px] font-medium leading-[1.2] tracking-[-0.025em]">
            Python developer.
            <br />
            I like code that is boring in the best way.
          </p>
          <p className="mt-6 text-[20px] xl:text-[23px] font-medium leading-[1.2] tracking-[-0.025em]">
            I build backends, Odoo apps and small tools that solve real
            problems.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center xl:justify-start gap-x-6 gap-y-3 text-[15px] font-medium">
            <a href={CV_LINK} className="underline underline-offset-4 hover:opacity-60">
              Download CV
            </a>
            <Social
              containerStyles="flex gap-4"
              iconStyles="hover:opacity-60 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="pb-4 xl:pb-6">
        <p className="eyebrow pb-3 border-b border-line">
          Python developer · Software engineer
        </p>
        <FitText className="pt-2 font-bold leading-[0.95] tracking-[-0.06em]">
          advaith
        </FitText>
      </div>
    </section>
  );
};

export default Home;
