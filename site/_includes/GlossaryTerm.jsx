import parse from 'html-react-parser'

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
  // console.log(term)
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
        </article>
      </div>
    </>
  )
}

export default GlossaryTerm
