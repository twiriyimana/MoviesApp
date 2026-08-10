import styled from "styled-components";
import switchImage from "../../assets/images/posters/switch.png";

export const Switch = () => {
  return (
    <Section id="switch">
      {/* <div className="px-6 mb-4">
        <h2 className="text-white text-2xl font-bold">Switch</h2>
      </div> */}
      <div className="flex justify-center">
        <img
          src={switchImage.toString()}
          alt="Switch"
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
