const API_ENDPOINT = "http://przyklad1cms.pabich.cc/graphql";

async function fetchGraphQL(query) {
  return fetch(
    API_ENDPOINT,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

export async function getHome() {
  const {data} = await fetchGraphQL(
    `
      query HomePage {
        pages {
          nodes {
            title
            content
          }
        }
      }`
  )
  return data
}

export async function getAboutUs() {
  const {data} = await fetchGraphQL(
    `
      query AboutUsPage {
        pages {
          nodes {
            title
            content
          }
        }
      }`
  )
  const aboutPage = data?.pages.nodes.find(p => p.title === "O nas")
  return aboutPage
}

export async function getMedia() {
  const {data} = await fetchGraphQL(
    `
      query Media {
        mediaItems {
          nodes {
            title
            description
            uri
            mediaItemUrl
          }
        }
      }`
  )
  return data
}
