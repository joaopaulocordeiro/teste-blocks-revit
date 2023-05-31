import { ArrowUpRight } from "phosphor-react";
import cardImage from "../../../../assets/card-image.png";
import { Family } from "../..";
import {
  CardContainer,
  FooterContainer,
  IconContainer,
  VerticalLine,
} from "./styles";

interface CardProps {
  family: Family;
}

export function Card({ family }: CardProps) {
  return (
    <CardContainer>
      <img src={cardImage} alt="" />
      <FooterContainer>
        <span>{family.details.description}</span>
        <VerticalLine />
        <IconContainer>
          <ArrowUpRight size={19} />
        </IconContainer>
      </FooterContainer>
    </CardContainer>
  );
}
