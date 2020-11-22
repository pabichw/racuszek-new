import React from "react"

import Layout from "../src/components/layout"
import WelcomePane from "../src/components/panes/WelcomePane"
import OfferPane from "../src/components/panes/OfferPane"
import ContactPane from "../src/components/panes/ContactPane"
import { getHome } from "../src/api/calls"

export default function Home({pagesContent}) {

  const pages = pagesContent?.pages?.nodes;
  const mainPage = pages?.find(p => p.title === "Glowna")
  const contactPage = pages?.find(p => p.title === "Kontakt")

  return (
    <Layout>
      <WelcomePane page={mainPage}/>
      <OfferPane/>
      <ContactPane page={contactPage}/>
    </Layout>
  )
}


export async function getStaticProps() {
  const pagesContent = await getHome();
  return {
    props: { pagesContent },
  }
}
