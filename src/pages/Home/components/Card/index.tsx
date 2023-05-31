import { ArrowUpRight } from "phosphor-react";
import {
  CardContainer,
  FooterContainer,
  IconContainer,
  VerticalLine,
} from "./styles";
import cardImage from "../../../../assets/card-image.png";

export function Card() {
  return (
    <CardContainer>
      <img src={cardImage} alt="" />
      <FooterContainer>
        <span>Lorem Ipsum is sLorem Ipsum is simply ....</span>
        <VerticalLine />
        <IconContainer>
          <ArrowUpRight size={19} />
        </IconContainer>
      </FooterContainer>
    </CardContainer>
  );
}
