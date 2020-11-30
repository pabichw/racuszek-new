import React from "react"

import Layout from "../src/components/layout"
import WelcomePane from "../src/components/panes/WelcomePane"
import OfferPane from "../src/components/panes/OfferPane"
import ContactPane from "../src/components/panes/ContactPane"
import { getHome, getMedia } from "../src/api/calls"

export default function Home({pagesContent, mediaContent}) {

  const pages = pagesContent?.pages?.nodes;
  const mainPage = pages?.find(p => p.title === "Glowna")
  const contactPage = pages?.find(p => p.title === "Kontakt")
  const offerPage = pages?.find(p => p.title === "Oferta")

  console.log('mediaContent', mediaContent);
  const media = mediaContent?.mediaItems?.nodes;
  const offerMedia = media?.filter(m => m.title.includes('oferta-'))
  return (
    <Layout>
      <WelcomePane page={mainPage}/>
      <OfferPane page={offerPage} media={offerMedia}/>
      <ContactPane page={contactPage}/>
    </Layout>
  )
}


export async function getStaticProps() {
  const pagesContent = await getHome();
  const mediaContent = await getMedia();
  return {
    props: { pagesContent, mediaContent },
  }
}
