import Signature from "@/components/Signature";
import Social from "@/components/Social";

const CV_LINK =
  "https://drive.google.com/uc?export=download&id=1GZMC-tLjCa-RGn-XkwVROB1Yh7wGQ6Ur";

const Home = () => {
  return (
    <section className="min-h-[calc(100svh-72px)] xl:min-h-[calc(100svh-104px)] flex flex-col px-4 xl:px-10">
      {/* Statement */}
      <div className="flex-1 grid xl:grid-cols-2 items-center py-16">
        <div className="hidden xl:block" />
        <div className="max-w-[520px]">
          <p className="text-[22px] xl:text-[23px] font-medium leading-[1.2] tracking-[-0.025em]">
            Python &amp; Odoo developer.
            <br />
            I build systems that hold up in production.
          </p>
          <p className="mt-6 text-[22px] xl:text-[23px] font-medium leading-[1.2] tracking-[-0.025em] text-muted">
            3.5+ years building Odoo solutions, full-stack applications, AI
            integrations, business automations, and DevOps pipelines.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] font-medium">
            <a href={CV_LINK} className="link">
              Download CV
            </a>
            <Social
              containerStyles="flex gap-4"
              iconStyles="hover:opacity-60 transition-opacity"
            />
          </div>
        </div>
      </div>

      <Signature />
    </section>
  );
};

export default Home;
