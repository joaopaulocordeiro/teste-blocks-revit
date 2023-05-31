import { Card } from "./components/Card";
import { HeaderHome } from "./components/HeaderHome";
import { CardGridContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <HeaderHome />
      <HomeContainer>
        <p>Resultados</p>
        <CardGridContainer>
          <Card />
          <Card />
        </CardGridContainer>
      </HomeContainer>
    </>
  );
}
