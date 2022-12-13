import About from "../components/about/About";
import Advantage from "../components/advantage/Advantage";
import PanelSip from "../components/panelSip/Panelsip";
import { Layout } from "../components/layout/Layout";

export default function Home() {

  return (
    <Layout>
      {/* <Slider deviceType="desktop" /> */}
      <About />
      <Advantage />
      <PanelSip />
    </Layout>
  );
}