import parse from 'html-react-parser'
import filter from 'lodash.filter'
import MarkdownIt from 'markdown-it'
import linkPreview from 'markdown-it-link-preview'
const md = MarkdownIt()
md.use(linkPreview)

export const frontMatter = {
  hydrate: {
    mode: true,
    // the result of this function
    // will be passed to your component as props
    props: (eleventyData) => ({
      terms: eleventyData.collections.terms
    })
  }
}

/**
 * A glossary term.
 * @param root0
 * @param root0.term
 * @param options
 * @param root0.collections
 * @param root0.slug
 * @param root0.terms
 * @param root0.partOfSpeech
 * @param root0.resources
 * @param root0.relatedTerms
 * @param root0.content
 */
export default function GlossaryTerm ({ partOfSpeech, resources, relatedTerms, content, terms }) {
  console.log('Term inspect:', terms)
  /* const relatedTermsList = relatedTerms?.map((relatedTermSlug) => {
    // Find the related term from the glossary collection by its slug.
    const relatedTerm = filter(term.collections.terms, (collectionTerm) => {
      return relatedTermSlug === collectionTerm.fileSlug
    })[0]

    const relatedTermUrl = "/glossary/#{relatedTermSlug}"

    return <li key={relatedTermSlug}>
        <a href={relatedTerm.url}>
          {relatedTerm.data.title}
        </a>
      </li>)
  }) */

  // Generate the list of resource link previews.
  const resourcesList = resources?.map((resource) => {
    // console.log('resource!', resource)

    return parse(md.render(
      `[@preview](${resource})`
    ))
  })

  const markup = (

    <div>
      <article className="prose lg:prose-xl mx-auto">
        <p className="italic text-gray-500">{ partOfSpeech }</p>

        { parse(content) }

        {
          false &&
          <div>
            <h4>Related Terms</h4>

            <ul>
              { relatedTermsList }
            </ul>
          </div>
        }

        {
          resources &&
          <div>
            <h4>Resources</h4>

            { resourcesList }
          </div>
        }
      </article>
    </div>
  )

  return (
    <h1>Foo</h1>
  )
}
