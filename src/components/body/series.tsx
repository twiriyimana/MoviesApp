import styled from "styled-components";
import seriesImage from "../../assets/images/posters/Series.png";

export const Series = () => {
  return (
    <Section>
      <div className="px-6 mb-4">
        <h2 className="text-white text-2xl font-bold">Series</h2>
      </div>
      <div className="flex justify-center">
        <img
          src={seriesImage.toString()}
          alt="Series"
          className="max-w-full h-auto rounded-2xl"
        />
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #000;
  padding: 20px;
`;
