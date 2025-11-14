import { Headline, Highlight, Section } from "@components/common";
import { OpinionsSlider } from "@components/features";

const Opinions = () => {
  return (
    <Section type="column">
      <Headline align="center">
        Co mówią o nas osoby <Highlight>szukające pracy</Highlight>
      </Headline>
      <OpinionsSlider />
    </Section>
  );
};

export default Opinions;
