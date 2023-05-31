import { ArrowUpRight } from "phosphor-react";
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
  // console.log("mg", image)
  return (
    <CardContainer>
      <img src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${family.id}.jpg`} alt="" />
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
