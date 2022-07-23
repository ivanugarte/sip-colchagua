import About from "../components/about/About";
import Advantage from "../components/advantage/Advantage";
import PanelSip from "../components/panelSip/Panelsip";
import { Layout } from "../components/layout/Layout";
import Items from "../components/slide/Slider";
import Slider from "../components/slide/Slider";

export default function Home() {

  return (
    <Layout>
      <Slider deviceType="desktop" />
      <About />
      <Advantage/>
      <PanelSip/>
    </Layout>
  );
}