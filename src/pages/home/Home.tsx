import GetStarted from "./getStarted/GetStarted";
import Hero from "./hero/Hero";
import JobInfo from "./jobInfo/JobInfo";
import JobCategories from "./jobCategories/JobCategories";
import JobGalleries from "./jobGalleries/JobGalleries";
import Opinions from "./opinions/Opinions";

const Home = () => {
  return (
    <>
      <Hero />
      <GetStarted />
      <JobCategories />
      <JobInfo />
      <JobGalleries />
      <Opinions />
    </>
  );
};

export default Home;
