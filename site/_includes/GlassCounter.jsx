import { useState } from 'react'

/**
 * An example component.
 *
 * @example
 *   {% component 'GlassCounter.jsx', hydrate='eager' %}
 *
 */
function GlassCounter () {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>You've had {count} glasses of water 💧</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </>
  )
}

export default GlassCounter
