import { HeaderContainer } from "./styles";
import logoBlocks from '../../assets/logo-web.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoBlocks} alt="" />
    </HeaderContainer>
  );
}
