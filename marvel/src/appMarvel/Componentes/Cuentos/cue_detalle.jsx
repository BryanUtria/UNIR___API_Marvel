import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Personajes/personajes.css'
import { useParams } from 'react-router'

//key privada: 6e6950c1d9f88e73f2c140eaecb87f9480bbf07d
//key publica: d661eab3aba86d79fa5bb2bba73aff3d
//ts: 1
//concatenacion: 16e6950c1d9f88e73f2c140eaecb87f9480bbf07dd661eab3aba86d79fa5bb2bba73aff3d
//hash: 57f9c1340ea43beb1adf2867cff887b9

export const Cue_Detalle = () => {
    const [cuentos, setCuentos] = useState([]);
    const [cuentosPersonajes, setCuentosPersonajes] = useState([]);
    const [cuentosComics, setCuentosComics] = useState([]);
    const [cuentosCreadores, setCuentosCreadores] = useState([]);
    const [cuentosEventos, setCuentosEventos] = useState([]);
    const [cuentosSeries, setCuentosSeries] = useState([]);
    const { value } = useParams();

    useEffect(()=>{
        axios.get('https://gateway.marvel.com:443/v1/public/stories?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9').then(res=>{
          setCuentos(res.data.data.results);
        }).catch(error=>console.log(error))
      },[])
    console.log("Cuentos")
    console.log(cuentos);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/stories/${value}/characters?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setCuentosPersonajes(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Personajes")
    console.log(cuentosPersonajes);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/stories/${value}/comics?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setCuentosComics(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Comics")
    console.log(cuentosComics);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/stories/${value}/creators?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setCuentosCreadores(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Creadores")
    console.log(cuentosCreadores);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/stories/${value}/events?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setCuentosEventos(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Eventos")
    console.log(cuentosEventos);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/stories/${value}/series?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setCuentosSeries(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Series")
    console.log(cuentosSeries);

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
                    <div>
                        { cuentos.map( cue =>(
                            <div className='col' key={cue.id}>
                                {cue.id == value ?
                                    <div className="card mb-3" id="Per-Detall-Per">
                                        <div className="row g-0">
                                            <div className="col-md-12">
                                                <div className="card-body">
                                                    <h4 className="card-title">{cue.title}</h4>
                                                    <p className="card-text">{cue.description}</p>
                                                    <p className="card-text">Modified: {cue.modified}</p>
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
                        { cuentosPersonajes.map( cuePer =>(
                            <div className='col' key={cuePer.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${cuePer.thumbnail.path}.${cuePer.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{cuePer.name}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${cuePer.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-2" className="Per-Titulo">COMICS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { cuentosComics.map( cueCom =>(
                            <div className='col' key={cueCom.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${cueCom.thumbnail.path}.${cueCom.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{cueCom.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${cueCom.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-3" className="Per-Titulo">CREADORES</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { cuentosCreadores.map( cueCre =>(
                            <div className='col' key={cueCre.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${cueCre.thumbnail.path}.${cueCre.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{cueCre.fullName}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${cueCre.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>    
                    <h1 id="list-item-4" className="Per-Titulo">EVENTOS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { cuentosEventos.map( cueEve =>(
                            <div className='col' key={cueEve.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${cueEve.thumbnail.path}.${cueEve.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{cueEve.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${cueEve.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>  
                    <h1 id="list-item-5" className="Per-Titulo">SERIES</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { cuentosSeries.map( cueSer =>(
                            <div className='col' key={cueSer.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${cueSer.thumbnail.path}.${cueSer.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{cueSer.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${cueSer.urls[0].url}`}>Ver mas</a></p>
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