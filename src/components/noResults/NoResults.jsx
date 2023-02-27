import React from 'react'
import './noResults.css'

function NoResults () {
  return (
    <section>
      <div className='no-results'>
        <h2>No Results Found</h2>
        <p>We couldn't find what you search for.</p>
        <p>Please search another title</p>
      </div>
    </section>
  )
}

export default NoResults
