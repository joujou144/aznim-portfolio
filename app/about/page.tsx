import { Footer } from "@/components";
import {
  Bookshelf,
  Download,
  WorkExperience,
  ProfileImage,
} from "@/components/about";
import { Skills } from "@/components/about/WorkExperience";
import { ABOUT_MAIN, ABOUT_SUBTEXT } from "@/lib/data";

const About = () => {
  return (
    <section className="max-w-[93rem] mx-auto pt-14 lg:pt-16 ">
      <div className="px-6 md:px-8">
        <div className="py-6 border-t divider grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-2 lg:grid-cols-3">
          <ProfileImage />
          <div className="md:pl-6 flex flex-col">
            <p className="drop-cap mt-auto content-font">
              {ABOUT_MAIN}
              <br />
              <br />
              {ABOUT_SUBTEXT}
            </p>
          </div>
        </div>

        <Download />
        <WorkExperience />
        <Skills />
        <Bookshelf />
      </div>

      <Footer />
    </section>
  );
};

export default About;
