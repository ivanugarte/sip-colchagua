import { useEffect } from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "../components/layout/Layout";
import { Contact } from "../components/contact/Contact"
// import { setState } from "../store/store";

export default function ContactPage() {
  // useEffect(() => {
  //   return setState({ whatsapp: true });
  // });

  // useEffect(() => {
  //   setState({ whatsapp: false });
  // }, []);

  return (
    <Layout>
      <Contact />
    </Layout>
  );
}

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });