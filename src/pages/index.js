import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"

import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"
import WelcomePane from "../components/panes/WelcomePane"
import OfferPane from "../components/panes/OfferPane"
import ContactPane from "../components/panes/ContactPane"

// export default ({ data, pageContext }) => (
//   <Layout>
//     <div>
//       {data.allWpPost.nodes.map((page) => (
//         <div>
//           <Link to={normalizePath(page.uri)}>
//             <div>
//               <div>
//                 <div>
//                   {!!page?.featuredImage?.node?.remoteFile?.childImageSharp && (
//                     <Img
//                       fluid={
//                         page.featuredImage.node.remoteFile.childImageSharp.fluid
//                       }
//                     />
//                   )}
//                 </div>
//                 <div>
//                   <h2>
//                     {page.title}
//                   </h2>
//                   {!!page.author && !!page.author.name && (
//                     <h3 as="h3" size="sm">
//                       Author: {page.author.name}
//                     </h3>
//                   )}
//                     <p dangerouslySetInnerHTML={{ __html: page.excerpt }} />
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//
//     {pageContext && pageContext.totalPages > 1 && (
//       <div>
//         <ReactPaginate
//           previousLabel={
//             pageContext?.page !== 1 && <button>Previous page</button>
//           }
//           nextLabel={
//             pageContext?.totalPages !== pageContext.page && (
//               <button>Next page</button>
//             )
//           }
//           onPageChange={({ selected }) => {
//             const page = selected + 1
//             const path = page === 1 ? `/blog/` : `/blog/${page}/`
//             navigate(path)
//           }}
//           disableInitialCallback
//           breakLabel={"..."}
//           breakClassName={"break-me"}
//           pageCount={pageContext.totalPages}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           containerClassName={"pagination"}
//           subContainerClassName={"pages pagination"}
//           activeClassName={"active"}
//           initialPage={pageContext.page - 1}
//         />
//       </div>
//     )}
//   </Layout>
// )

export default function Home({data: {allWpPage: {nodes: pages}}}) {
  console.log('pages', pages);
  const mainPage = pages.find(p => p.title === "GLOWNA")
  const contactPage = pages.find(p => p.title === "Kontakt")

  return (
    <Layout>
      <WelcomePane/>
      <OfferPane/>
      <ContactPane page={contactPage}/>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    allWpPage(filter: {title: {regex: "/GLOWNA|Kontakt/"}}) {
      nodes {
        title
        content
      }
    }
  }
`
