import { ArrowRight } from "phosphor-react";
import { ButtonContainer, IconButtonContainer } from "./styles";

export function Button() {
  return (
    <ButtonContainer>
      Quero ser Premium
      <IconButtonContainer>
        <ArrowRight size={23} />
      </IconButtonContainer>
    </ButtonContainer>
  );
}
