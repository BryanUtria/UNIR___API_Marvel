import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Personajes/personajes.css'
import { useParams } from 'react-router'

//key privada: 6e6950c1d9f88e73f2c140eaecb87f9480bbf07d
//key publica: d661eab3aba86d79fa5bb2bba73aff3d
//ts: 1
//concatenacion: 16e6950c1d9f88e73f2c140eaecb87f9480bbf07dd661eab3aba86d79fa5bb2bba73aff3d
//hash: 57f9c1340ea43beb1adf2867cff887b9

export const Com_Detalle = () => {
    const [comics, setComics] = useState([]);
    const [comicsPersonajes, setComicsPersonajes] = useState([]);
    const [comicsCreadores, setcomicsCreadores] = useState([]);
    const [comicsEventos, setcomicsEventos] = useState([]);
    const [comicsCuentos, setcomicsCuentos] = useState([]);
    const { value } = useParams();

    useEffect(()=>{
        axios.get('https://gateway.marvel.com:443/v1/public/comics?orderBy=issueNumber&limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9').then(res=>{
            setComics(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Comics")
    console.log(comics);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/comics/${value}/characters?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setComicsPersonajes(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Personajes")
    console.log(comicsPersonajes);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/comics/${value}/creators?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setcomicsCreadores(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Creadores")
    console.log(comicsCreadores);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/comics/${value}/events?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setcomicsEventos(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Eventos")
    console.log(comicsEventos);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/comics/${value}/stories?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setcomicsCuentos(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Cuentos")
    console.log(comicsCuentos);

    return (
        <div >
            <div className="row">
                <div id="Per-Detall-nav">
                    <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-0">
                        <ul className="nav nav-pills" id="Per-Detall-ul">
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-1">PERSONAJES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-2">CREADORES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-3">EVENTOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-4">CUENTOS</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
                    <div>
                        { comics.map( com =>(
                            <div className='col' key={com.id}>
                                {com.id == value ?
                                    <div className="card mb-3" id="Per-Detall-Per">
                                        <div className="row g-0">
                                            <div className="col-md-3">
                                                <img src={`${com.thumbnail.path}.${com.thumbnail.extension}`} className="img-fluid rounded-start" id="Per-Detall-Per-img"/>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h4 className="card-title">{com.title}</h4>
                                                    <p className="card-text">{com.description}</p>
                                                    <p className="card-text">Modified: {com.modified}</p>
                                                    <p className="card-text">For more information: <a href={`${com.urls[0].url}`}>Ver mas</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                                }
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-1" className="Per-Titulo">PERSONAJES</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { comicsPersonajes.map( comPer =>(
                            <div className='col' key={comPer.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${comPer.thumbnail.path}.${comPer.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{comPer.name}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${comPer.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-2" className="Per-Titulo">CREADORES</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { comicsCreadores.map( comCre =>(
                            <div className='col' key={comCre.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${comCre.thumbnail.path}.${comCre.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{comCre.fullName}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${comCre.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-3" className="Per-Titulo">EVENTOS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { comicsEventos.map( comEve =>(
                            <div className='col' key={comEve.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${comEve.thumbnail.path}.${comEve.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{comEve.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${comEve.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>    
                    <h1 id="list-item-4" className="Per-Titulo">CUENTOS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { comicsCuentos.map( comCue =>(
                            <div className='col' key={comCue.id}>
                                <div id='Per-Detall-Carta2' className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{comCue.title}</h5>
                                        <p>Modified: {comCue.modified}</p>
                                    </div> 
                                </div>
                            </div>
                        ))}
                    </div>     
                </div>
            </div>
        </div>
    );
}