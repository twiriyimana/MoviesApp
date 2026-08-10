import styled from "styled-components";
import kidsImage from "../../assets/images/posters/kids.png";

export const Kids = () => {
  return (
    <Section>
      {/* <div className="px-6 mb-4">
        <h2 className="text-white text-2xl font-bold">Kids</h2>
      </div> */}
      <div className="w-full">
        <img
          src={kidsImage.toString()}
          alt="Kids"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #000;
  padding: 10px;
`;
