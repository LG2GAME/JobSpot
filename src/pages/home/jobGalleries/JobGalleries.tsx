import { Headline, Highlight, Section } from "@components/common";
import { Gallery } from "@components/features";

const JobGalleries = () => {
  return (
    <Section type="column">
      <Headline align="center">
        Najnowsze <Highlight>oferty pracy</Highlight>
      </Headline>
      <Gallery />
    </Section>
  );
};

export default JobGalleries;
