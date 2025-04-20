import { Categories } from "./categories/Categories";
import { EasySteps } from "./easy-steps/EasySteps";
import { Hero } from "./hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <EasySteps />
      <Categories />
    </>
  );
}
