import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer"
import { FixedBar } from "../../components/FixedBar";
import { LayoutContainer } from "./styles";

export function Defaultlayout() {
  return (
    <LayoutContainer>
      <FixedBar />
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
}
