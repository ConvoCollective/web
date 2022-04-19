import parse from 'html-react-parser'
import filter from 'lodash.filter'

export const frontMatter = {
  layout: 'default.njk',
  permalink: 'glossary/{{ page.fileSlug }}/index.html'
}

/**
 * An example component.
 *
 * @param term
 * @param partOfSpeech
 * @param content
 * @param children
 * @param title
 * @example
 *   {% component 'GlassCounter.jsx', hydrate='eager' %}
 *
 */
function GlossaryTerm (term) {
  console.log('GlossaryTerm inspect:', term)
  const relatedTermsList = term.relatedTerms?.map((relatedTermSlug) => {
    // Find the related term from the glossary collection by its slug.
    const relatedTerm = filter(term.collections.terms, (collectionTerm) => {
      return relatedTermSlug === collectionTerm.fileSlug
    })[0]

    return relatedTerm &&
      (<li key={relatedTerm.fileSlug}>
        <a href={relatedTerm.url}>
          {relatedTerm.data.title}
        </a>
      </li>)
  })

  return (

    <>
      <div className="container max-w-4xl mt-4 px-6">
        <div className="pb-5 mb-5 border-b border-gray-100">
          <h1 className="font-bold text-5xl pb-12">Conversational AI
            Glossary</h1>

          <h2 className="font-bold text-3xl px-4">{ term.title }</h2>
        </div>

        <article className="prose lg:prose-xl mx-auto">
          <p className="italic text-gray-500">{ term.partOfSpeech }</p>

          { parse(term.content) }

          {
            term.relatedTerms &&
            <div>
              <h4>Related Terms</h4>

              <ul>
                { relatedTermsList }
              </ul>
            </div>
          }
        </article>
      </div>
    </>
  )
}

export default GlossaryTerm
