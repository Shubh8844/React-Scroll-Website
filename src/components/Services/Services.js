import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
  ServicesIcon
} from "./ServiceElements";
import icon1 from "../../images/img1.png";
import icon4 from "../../images/img4.png";
import icon3 from "../../images/img3.png";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce Epenses</ServicesH2>
          <ServicesP>
            We help you reduce your fees and increse overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon4} />
          <ServicesH2>Virtual offices</ServicesH2>
          <ServicesP>
            You can access this platform online anywhere in the world
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Premium benefits </ServicesH2>
          <ServicesP>
            Unlcock you special card that provide 5% cashback
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
