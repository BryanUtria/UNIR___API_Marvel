import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Personajes/personajes.css'
import { useParams } from 'react-router'

//key privada: 6e6950c1d9f88e73f2c140eaecb87f9480bbf07d
//key publica: d661eab3aba86d79fa5bb2bba73aff3d
//ts: 1
//concatenacion: 16e6950c1d9f88e73f2c140eaecb87f9480bbf07dd661eab3aba86d79fa5bb2bba73aff3d
//hash: 57f9c1340ea43beb1adf2867cff887b9

export const Ser_Detalle = () => {
    const [series, setSeries] = useState([]);
    const [seriesPersonajes, setSeriesPersonajes] = useState([]);
    const [seriesComics, setSeriesComics] = useState([]);
    const [seriesCreadores, setSeriesCreadores] = useState([]);
    const [seriesEventos, setSeriesEventos] = useState([]);
    const [seriesCuentos, setSeriesCuentos] = useState([]);
    const { value } = useParams();

    useEffect(()=>{
        axios.get('https://gateway.marvel.com:443/v1/public/series?offset=520&limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9').then(res=>{
          setSeries(res.data.data.results);
        }).catch(error=>console.log(error))
      },[])
    console.log("Series")
    console.log(series);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/series/${value}/characters?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setSeriesPersonajes(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Personajes")
    console.log(seriesPersonajes);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/series/${value}/comics?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setSeriesComics(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Comics")
    console.log(seriesComics);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/series/${value}/creators?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setSeriesCreadores(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Creadores")
    console.log(seriesCreadores);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/series/${value}/events?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setSeriesEventos(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Eventos")
    console.log(seriesEventos);

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/series/${value}/stories?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
            setSeriesCuentos(res.data.data.results);
        }).catch(error=>console.log(error))
    },[])
    console.log("Cuentos")
    console.log(seriesCuentos);

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
                                <a className="nav-link" href="#list-item-5">CUENTOS</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
                    <div>
                        { series.map( ser =>(
                            <div className='col' key={ser.id}>
                                {ser.id == value ?
                                    <div className="card mb-3" id="Per-Detall-Per">
                                        <div className="row g-0">
                                            <div className="col-md-3">
                                                <img src={`${ser.thumbnail.path}.${ser.thumbnail.extension}`} className="img-fluid rounded-start" id="Per-Detall-Per-img"/>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h4 className="card-title">{ser.title}</h4>
                                                    <p className="card-text">{ser.description}</p>
                                                    <p className="card-text">Modified: {ser.modified}</p>
                                                    <p className="card-text">For more information: <a href={`${ser.urls[0].url}`}>Ver mas</a></p>
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
                        { seriesPersonajes.map( serPer =>(
                            <div className='col' key={serPer.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${serPer.thumbnail.path}.${serPer.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{serPer.name}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${serPer.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-2" className="Per-Titulo">COMICS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { seriesComics.map( serCom =>(
                            <div className='col' key={serCom.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${serCom.thumbnail.path}.${serCom.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{serCom.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${serCom.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 id="list-item-3" className="Per-Titulo">CREADORES</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { seriesCreadores.map( serCre =>(
                            <div className='col' key={serCre.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${serCre.thumbnail.path}.${serCre.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{serCre.fullName}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${serCre.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>    
                    <h1 id="list-item-4" className="Per-Titulo">EVENTOS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { seriesEventos.map( serEve =>(
                            <div className='col' key={serEve.id}>
                                <div id='Per-Detall-Carta' className="card">
                                    <img src={`${serEve.thumbnail.path}.${serEve.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{serEve.title}</h5>
                                        <br/>
                                        <p className="card-text">For more information: <a href={`${serEve.urls[0].url}`}>Ver mas</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>  
                    <h1 id="list-item-5" className="Per-Titulo">CUENTOS</h1>
                    <div className="row row-cols-5 row-cols-md-5"> 
                        { seriesCuentos.map( serCue =>(
                            <div className='col' key={serCue.id}>
                                <div id='Per-Detall-Carta2' className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{serCue.title}</h5>
                                        <p>Modified: {serCue.modified}</p>
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