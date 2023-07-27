import React from 'react'

export const Novedades = () => {
  return (
    <div className="container px-4 py-5 text-white" id="featured-3">
        <h2 className="pb-2 border-bottom">NOVEDADES</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
            <h3 className="fs-2 text-white">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="text-warning">
                Call to action
            </a>
            </div>
            <div className="feature col">
            <h3 className="fs-2 text-white">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="text-warning">
                Call to action
            </a>
            </div>
            <div className="feature col">
            <h3 className="fs-2 text-white">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="text-warning">
                Call to action
            </a>
            </div>
        </div>
    </div>
  )
}
