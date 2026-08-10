import styled from "styled-components";
import goldenGlobe from "../../assets/images/posters/Golden Globe.png";

export const GoldenGlobe = () => {
  return (
    <Section>
      {/* <div className="px-6 mb-4">
        <h2 className="text-white text-2xl font-bold">Golden Globe</h2>
      </div> */}
      <div className="flex justify-center">
        <img
          src={goldenGlobe.toString()}
          alt="Golden Globe"
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
