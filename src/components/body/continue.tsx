import styled from "styled-components";
import continueImage from "../../assets/images/posters/continue.png";

export const Continue = () => {
  return (
    <Section>
      {/* <div className="px-6 mb-4">
        <h2 className="text-white text-2xl font-bold">Continue</h2>
      </div> */}
      <div className="flex justify-center">
        <img
          src={continueImage.toString()}
          alt="Continue"
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
