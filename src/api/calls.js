const API_ENDPOINT = "http://memesat.work/przyklad1-cms/graphql";

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
        pages(where: {author: 1}) {
          nodes {
            title
            content
          }
        }
      }`
  )
  return data
}
