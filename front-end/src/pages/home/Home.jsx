import { Categories } from "./categories/Categories";
import { EasySteps } from "./easy-steps/EasySteps";
import { Gallery } from "./gallery/Gallery";
import { Help } from "./help/Help";
import { Hero } from "./hero/Hero";
import { Opinions } from "./opinions/Opinions";

export default function Home() {
  return (
    <>
      <Hero />
      <EasySteps />
      <Categories />
      <Help />
      <Gallery />
      <Opinions />
    </>
  );
}
