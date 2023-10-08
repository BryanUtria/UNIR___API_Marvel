import React from 'react';
import { useState, useRef } from 'react';
import './encabezado.css';

export const Encabezado = () => {
    let texto = useRef("");
    const [contador, setContador] = useState([]);

    return (
        <div>
            <div className="App" id="Barra">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid" id="SubBarra">
                        <div id="Categorias">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href='/personajes'>Personajes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/comics">Comics</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/creadores">Creadores</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/eventos">Eventos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/series">Series</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/cuentos">Cuentos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="Titulo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png" id="Titulo-img"/>
                        </div>                    
                        <div id="Buscador">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <input className="form-control me-2" type="search" placeholder="Buscar ..." aria-label="Search" ref={texto}></input>
                                <a href={`/resultadoBuscador/${texto.current.value}`}><button className="btn btn-outline-success" type="submit" onClick={() => setContador(contador + 1)}>Buscar</button></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
       </div>
    )
};