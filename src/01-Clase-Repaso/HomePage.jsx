import React from 'react';
import logo from '../assets/logo.png';

export const HomePage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Link-1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Link-2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Link-3
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <box>
        <div className='bg-white p-5 text-center'>
          <div style={{fontSize: '80px', fontWeight: 'bold'}}>Hey.. Developers!</div>
          <div style={{fontSize: '30px'}}>Los mejores Cursos para Desarrollo!</div>
          <div style={{ marginTop: '20px'}}>
            <button className='btn btn-primary'>Comprar Ahora!</button>
          </div>
        </div>
      </box>
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
    </>
  )
}
