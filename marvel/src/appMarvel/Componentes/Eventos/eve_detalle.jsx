import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Personajes/personajes.css'
import { useParams } from 'react-router'

//key privada: 6e6950c1d9f88e73f2c140eaecb87f9480bbf07d
//key publica: d661eab3aba86d79fa5bb2bba73aff3d
//ts: 1
//concatenacion: 16e6950c1d9f88e73f2c140eaecb87f9480bbf07dd661eab3aba86d79fa5bb2bba73aff3d
//hash: 57f9c1340ea43beb1adf2867cff887b9

export const Eve_Detalle = () => {
    const [eventos, setEventos] = useState([]);
    const [eventosPersonajes, setEventosPersonajes] = useState([]);
    const [eventosComics, setEventosComics] = useState([]);
    const [eventosCreadores, setEventosCreadores] = useState([]);
    const [eventosSeries, setEventosSeries] = useState([]);
    const [eventosCuentos, setEventosCuentos] = useState([]);
    const { value } = useParams();

    useEffect(()=>{
        axios.get('https://gateway.marvel.com:443/v1/public/events?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9').then(res=>{
          setEventos(res.data.data.results);
        }).catch(error=>console.log(error))
      },[])
    console.log("Eventos")
    console.log(eventos);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/events/${value}/characters?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setEventosPersonajes(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Personajes")
    console.log(eventosPersonajes);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/events/${value}/comics?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setEventosComics(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Comics")
    console.log(eventosComics);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/events/${value}/creators?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setEventosCreadores(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Creadores")
    console.log(eventosCreadores);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/events/${value}/series?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setEventosSeries(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Series")
    console.log(eventosSeries);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/events/${value}/stories?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setEventosCuentos(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Cuentos")
    console.log(eventosCuentos);

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
                                <a className="nav-link" href="#list-item-4">SERIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-5">CUENTOS</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
                    <div>
                        { eventos.map( eve =>(
                            <div className='col' key={eve.id}>
                                {eve.id == value ?
                                    <div className="card mb-3" id="Per-Detall-Per">
                                        <div className="row g-0">
                                            <div className="col-md-3">
                                                <img src={`${eve.thumbnail.path}.${eve.thumbnail.extension}`} className="img-fluid rounded-start" id="Per-Detall-Per-img"/>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h4 className="card-title">{eve.title}</h4>
                                                    <p className="card-text">{eve.description}</p>
                                                    <p className="card-text">Modified: {eve.modified}</p>
                                                    <p className="card-text">For more information: <a href={`${eve.urls[0].url}`}>Ver mas</a></p>
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
                        { eventosPersonajes.map( evePer =>(
                            <div className='col' key={evePer.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${evePer.thumbnail.path}.${evePer.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{evePer.name}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${evePer.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-2" className="Per-Titulo">COMICS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { eventosComics.map( eveCom =>(
                            <div className='col' key={eveCom.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${eveCom.thumbnail.path}.${eveCom.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{eveCom.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${eveCom.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-3" className="Per-Titulo">CREADORES</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { eventosCreadores.map( eveCre =>(
                            <div className='col' key={eveCre.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${eveCre.thumbnail.path}.${eveCre.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{eveCre.fullName}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${eveCre.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>    
                    <h1 id="list-item-4" className="Per-Titulo">SERIES</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { eventosSeries.map( eveSer =>(
                            <div className='col' key={eveSer.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${eveSer.thumbnail.path}.${eveSer.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{eveSer.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${eveSer.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>  
                    <h1 id="list-item-5" className="Per-Titulo">CUENTOS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { eventosCuentos.map( eveCue =>(
                            <div className='col' key={eveCue.id}>
                                <div id='Per-Detall-Carta2' className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{eveCue.title}</h5>
                                        <p>Modified: {eveCue.modified}</p>
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