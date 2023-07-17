import React from 'react';

import './styles/features.css';




export const ProductGalery = () => {
  return (
    <>
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom text-white">Ultimas Novedades</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <h3 className="fs-2 text-white">Featured title</h3>
                    <p className="text-white">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <button className="btn btn-primary icon-link">
                    Ver info
                    <svg className="bi"><use xlink:href="#chevron-right"/></svg>
                    </button>
                </div>
                <div className="feature col">
                    <h3 className="fs-2 text-white">Featured title</h3>
                    <p className="text-white">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <button className="btn btn-primary icon-link">
                    Ver info
                    <svg className="bi"><use xlink:href="#chevron-right"/></svg>
                    </button>
                </div>
                <div className="feature col">
                    <h3 className="fs-2 text-white">Featured title</h3>
                    <p className="text-white">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <button className="btn btn-primary icon-link">
                    Ver info
                    <svg className="bi"><use xlink:href="#chevron-right"/></svg>
                    </button>
                </div>
            </div>
        </div>
        
    </>
  )
}
