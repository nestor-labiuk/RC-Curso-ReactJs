
export const Gimoji = () => {

    try {
        
    } catch (error) {
        
    }
    const resp = fetch();
    const data = resp.json();
    
    return (
    <>
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>GifMoji</strong>
                        </a>
                    </div>

                    <div className="text-end">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>

        <section className="py-5 text-center container text-white">
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Los Mejores Gif/Emoji</h1>
                <p className="lead text-white">Busca y copia y pega los mejores gif y emojis para compartir en tus redes o proyectos.</p>
            </div>
            </div>
        </section>

        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue={true}>Selecciona una Categoria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-sm-6">
                <input type="search" className=" form-control form-control-dark text-dark" placeholder="Search..." aria-label="Search"/>
                </div>
            </div>
        </div>

        <div className="album py-5 ">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="" alt="Girl in a jacket" width={'100%'} height={'230'}/>
                        <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Copy</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Favoritos</button>
                            </div>
                            <small className="text-body-secondary">cod: 12546</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="" alt="Girl in a jacket" width={'100%'} height={'230'}/>
                        <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Copy</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Favoritos</button>
                            </div>
                            <small className="text-body-secondary">cod: 12546</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="" alt="Girl in a jacket" width={'100%'} height={'230'}/>
                        <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Copy</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Favoritos</button>
                            </div>
                            <small className="text-body-secondary">cod: 12546</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>        
    </>
  )
}
