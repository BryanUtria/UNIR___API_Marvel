import React from 'react';
import { usePersonajes, useComics, useCreadores, useEventos, useSeries } from './datosBusqueda';
import MD5 from 'crypto-js/md5';
import { useParams } from 'react-router-dom';

export const ResultadoBuscador = () => {
    const texto = useParams();

    const optenerHash = (ts, llavePrivada, llavePublica) => {
        return MD5(ts + llavePrivada + llavePublica).toString();
    }

    let ts = Date.now().toString()
    let llavePrivada = '6e6950c1d9f88e73f2c140eaecb87f9480bbf07d'
    let llavePublica = 'd661eab3aba86d79fa5bb2bba73aff3d'
    let hash = optenerHash(ts, llavePrivada, llavePublica)
    //Personajes
    let urlBasePersonajes = 'https://gateway.marvel.com:443/v1/public/characters'
    let urlPersonajes = `${urlBasePersonajes}?ts=${ts}&apikey=${llavePublica}&hash=${hash}&nameStartsWith=${texto.value}`
    const {personajesRespuesta} = usePersonajes(urlPersonajes)
    console.log(personajesRespuesta);
    //Comics
    let urlBaseComics = 'https://gateway.marvel.com:443/v1/public/comics'
    let urlComics = `${urlBaseComics}?ts=${ts}&apikey=${llavePublica}&hash=${hash}&titleStartsWith=${texto.value}`
    const {comicsRespuesta} = useComics(urlComics)
    console.log(comicsRespuesta);
    //Creadores
    let urlBaseCreadores = 'https://gateway.marvel.com:443/v1/public/creators'
    let urlCreadores = `${urlBaseCreadores}?ts=${ts}&apikey=${llavePublica}&hash=${hash}&nameStartsWith=${texto.value}`
    const {creadoresRespuesta} = useCreadores(urlCreadores)
    console.log(creadoresRespuesta);
    //Eventos
    let urlBaseEventos = 'https://gateway.marvel.com:443/v1/public/events'
    let urlEventos = `${urlBaseEventos}?ts=${ts}&apikey=${llavePublica}&hash=${hash}&nameStartsWith=${texto.value}`
    const {eventosRespuesta} = useEventos(urlEventos)
    console.log(eventosRespuesta);
    //Series
    let urlBaseSeries = 'https://gateway.marvel.com:443/v1/public/series'
    let urlSeries = `${urlBaseSeries}?ts=${ts}&apikey=${llavePublica}&hash=${hash}&titleStartsWith=${texto.value}`
    const {seriesRespuesta} = useSeries(urlSeries)
    console.log(seriesRespuesta);

    return (
        <div>
            {personajesRespuesta.length != 0 || comicsRespuesta.length != 0 || creadoresRespuesta.length != 0 || eventosRespuesta.length != 0 || seriesRespuesta.length != 0? 
                <div className="row">
                    <div className="Per-Tirulo2">
                        <h5>Resultados de la búsqueda "{texto.value}"</h5>
                    </div>
                    <div id="Per-Detall-nav">
                        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-0">
                            <ul className="nav nav-pills" id="Per-Detall-ul">
                                <li className="nav-item">
                                    <a className="nav-link" href="#list-item-1">PERSONAJES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#list-item-2">COMICS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#list-item-3">CREADORES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#list-item-4">EVENTOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#list-item-5">SERIES</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
                        <h1 id="list-item-1" className="Per-Titulo">PERSONAJES</h1>
                        <div className="row row-cols-5 row-cols-md-5">
                            {Array.isArray(personajesRespuesta) ? personajesRespuesta.map( map =>{
                                return(
                                    <div className='col' key={map.id}>
                                        <div id='Per-Carta' className="card">
                                            <a id="Per-a" href={`/per_detalle/${map.id}`}>
                                                <img src={`${map.thumbnail.path}.${map.thumbnail.extension}`} className="card-img-top" id='Per-Carta-img'/>
                                                <div className="card-body" id="Per-Text">
                                                <h5 className="card-text">{map.name}</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ) 
                            }):null}
                        </div>
                        <h1 id="list-item-2" className="Per-Titulo">COMICS</h1>
                        <div className="row row-cols-5 row-cols-md-5">
                            {Array.isArray(comicsRespuesta) ? comicsRespuesta.map( map =>{
                                return(
                                    <div className='col' key={map.id}>
                                        <div id='Per-Carta' className="card">
                                            <a id="Per-a" href={`/com_detalle/${map.id}`}>
                                                <img src={`${map.thumbnail.path}.${map.thumbnail.extension}`} className="card-img-top" id='Per-Carta-img'/>
                                                <div className="card-body" id="Per-Text">
                                                    <h6 className="card-text">{map.title}</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ) 
                            }):null}
                        </div>
                        <h1 id="list-item-3" className="Per-Titulo">CREADORES</h1>
                        <div className="row row-cols-5 row-cols-md-5">
                            {Array.isArray(creadoresRespuesta) ? creadoresRespuesta.map( map =>{
                                return(
                                    <div className='col' key={map.id}>
                                        <div id='Per-Carta' className="card">
                                            <a id="Per-a" href={`/crea_detalle/${map.id}`}>
                                                <img src={`${map.thumbnail.path}.${map.thumbnail.extension}`} className="card-img-top" id='Per-Carta-img'/>
                                                <div className="card-body" id="Per-Text">
                                                <h5 className="card-text">{map.fullName}</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ) 
                            }):null}
                        </div>
                        <h1 id="list-item-4" className="Per-Titulo">EVENTOS</h1>
                        <div className="row row-cols-5 row-cols-md-5">
                            {Array.isArray(eventosRespuesta) ? eventosRespuesta.map( map =>{
                                return(
                                    <div className='col' key={map.id}>
                                        <div id='Per-Carta' className="card">
                                            <a id="Per-a" href={`/eve_detalle/${map.id}`}>
                                                <img src={`${map.thumbnail.path}.${map.thumbnail.extension}`} className="card-img-top" id='Per-Carta-img'/>
                                                <div className="card-body" id="Per-Text">
                                                <h5 className="card-text">{map.title}</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ) 
                            }):null}
                        </div>
                        <h1 id="list-item-5" className="Per-Titulo">SERIES</h1>
                        <div className="row row-cols-5 row-cols-md-5">
                            {Array.isArray(seriesRespuesta) ? seriesRespuesta.map( map =>{
                                return(
                                    <div className='col' key={map.id}>
                                        <div id='Per-Carta' className="card">
                                            <a id="Per-a" href={`/ser_detalle/${map.id}`}>
                                                <img src={`${map.thumbnail.path}.${map.thumbnail.extension}`} className="card-img-top" id='Per-Carta-img'/>
                                                <div className="card-body" id="Per-Text">
                                                <h5 className="card-text">{map.title}</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ) 
                            }):null}
                        </div>
                    </div>  
                </div>
            :
                <div className="Per-Aviso">
                    <h1 className="Per-Aviso-h">No se han encontrado resultados para tu búsqueda "{texto.value}"</h1>
                    <img className="Per-Aviso-img" src='https://www.icex.es/content/icex/es/errors/404/_jcr_content/root/container/columns/container/image.coreimg.gif/1678802939032/pagina-404.gif'></img>
                </div>
            }
        </div>
    )
};