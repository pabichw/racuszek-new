import React from "react"
import Layout from "../components/layout";
import WelcomePane from "../components/panes/WelcomePane";
import OfferPane from "../components/panes/OfferPane";
import ContactPane from "../components/panes/ContactPane";

export default function Home() {
  return (
    <Layout>
      <WelcomePane/>
      <OfferPane/>
      <ContactPane/>
    </Layout>
  )
}
