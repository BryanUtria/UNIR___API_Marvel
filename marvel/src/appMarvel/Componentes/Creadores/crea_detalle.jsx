import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Personajes/personajes.css'
import { useParams } from 'react-router'

//key privada: 6e6950c1d9f88e73f2c140eaecb87f9480bbf07d
//key publica: d661eab3aba86d79fa5bb2bba73aff3d
//ts: 1
//concatenacion: 16e6950c1d9f88e73f2c140eaecb87f9480bbf07dd661eab3aba86d79fa5bb2bba73aff3d
//hash: 57f9c1340ea43beb1adf2867cff887b9

export const Crea_Detalle = () => {
    const [creadores, setCreadores] = useState([]);
    const [creadoresComics, setCreadoresComics] = useState([]);
    const [creadoresEventos, setCreadoresEventos] = useState([]);
    const [creadoresSeries, setCreadoresSeries] = useState([]);
    const [creadoresCuentos, setCreadoresCuentos] = useState([]);
    const { value } = useParams();

    useEffect(()=>{
        axios.get('https://gateway.marvel.com:443/v1/public/creators?offset=285&limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9').then(res=>{
          setCreadores(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Creadores")
    console.log(creadores);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/creators/${value}/comics?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setCreadoresComics(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Comics")
    console.log(creadoresComics);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/creators/${value}/events?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setCreadoresEventos(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Eventos")
    console.log(creadoresEventos);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/creators/${value}/series?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setCreadoresSeries(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Series")
    console.log(creadoresSeries);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/creators/${value}/stories?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setCreadoresCuentos(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Cuentos")
    console.log(creadoresCuentos);

    return (
        <div >
            <div className="row">
                <div id="Per-Detall-nav">
                    <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-0">
                        <ul className="nav nav-pills" id="Per-Detall-ul">
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-1">COMICS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-2">EVENTOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-3">SERIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-4">CUENTOS</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
                    <div>
                        { creadores.map( crea =>(
                            <div className='col' key={crea.id}>
                                {crea.id == value ?
                                    <div className="card mb-3" id="Per-Detall-Per">
                                        <div className="row g-0">
                                            <div className="col-md-3">
                                                <img src={`${crea.thumbnail.path}.${crea.thumbnail.extension}`} className="img-fluid rounded-start" id="Per-Detall-Per-img"/>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h4 className="card-title">{crea.fullName}</h4>
                                                    <p className="card-text">Modified: {crea.modified}</p>
                                                    <p className="card-text">For more information: <a href={`${crea.urls[0].url}`}>Ver mas</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                                }
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-1" className="Per-Titulo">COMICS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { creadoresComics.map( creaCom =>(
                            <div className='col' key={creaCom.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${creaCom.thumbnail.path}.${creaCom.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{creaCom.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${creaCom.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-2" className="Per-Titulo">EVENTOS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { creadoresEventos.map( creaEve =>(
                            <div className='col' key={creaEve.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${creaEve.thumbnail.path}.${creaEve.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{creaEve.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${creaEve.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-3" className="Per-Titulo">SERIES</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { creadoresSeries.map( creaSer =>(
                            <div className='col' key={creaSer.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${creaSer.thumbnail.path}.${creaSer.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{creaSer.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${creaSer.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>    
                    <h1 id="list-item-4" className="Per-Titulo">CUENTOS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { creadoresCuentos.map( creaCue =>(
                            <div className='col' key={creaCue.id}>
                                <div id='Per-Detall-Carta2' className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{creaCue.title}</h5>
                                        <p>Modified: {creaCue.modified}</p>
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