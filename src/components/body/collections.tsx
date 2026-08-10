import styled from "styled-components";
import collectionsImage from "../../assets/images/posters/Collections.png";

export const Collections = () => {
  return (
    <Section>
      
      <div className="flex justify-center">
        <img
          src={collectionsImage.toString()}
          alt="Collections"
          className="max-w-full h-auto rounded-2xl"
        />
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #000;
  padding: 24px;
`;
