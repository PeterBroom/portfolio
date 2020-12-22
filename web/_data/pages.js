const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generatePage (page) {
  return {
    ...page,
    title: BlocksToMarkdown(page.title, { serializers, ...client.config() })
  }
}

async function getPages () {
  // Learn more:s https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "page" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
    _id,
    publishedAt,
    title,
    slug,
    hero,
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePage = reducedDocs.map(generatePage)
  return preparePage
}

module.exports = getPages
