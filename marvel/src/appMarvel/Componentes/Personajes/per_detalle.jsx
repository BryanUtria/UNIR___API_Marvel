import axios from 'axios';
import { useState, useEffect } from 'react';
import './personajes.css';
import { useParams } from 'react-router'

//key privada: 6e6950c1d9f88e73f2c140eaecb87f9480bbf07d
//key publica: d661eab3aba86d79fa5bb2bba73aff3d
//ts: 1
//concatenacion: 16e6950c1d9f88e73f2c140eaecb87f9480bbf07dd661eab3aba86d79fa5bb2bba73aff3d
//hash: 57f9c1340ea43beb1adf2867cff887b9

export const Per_Detalle = () => {
  const [personajes, setPersonajes] = useState([]);
  const [personajesComic, setPersonajesComic] = useState([]);
  const [personajesEventos, setPersonajesEventos] = useState([]);
  const [personajesSeries, setPersonajesSeries] = useState([]);
  const [personajesCuentos, setPersonajesCuentos] = useState([]);
  const { value } = useParams();

  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/characters?offset=199&limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9').then(res=>{
      setPersonajes(res.data.data.results);
    }).catch(error=>console.log(error))
  },[])
  console.log("Personajes")
  console.log(personajes);

  useEffect(()=>{
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${value}/comics?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
      setPersonajesComic(res.data.data.results);
    }).catch(error=>console.log(error))
  },[])
  console.log("Comics")
  console.log(personajesComic);

  useEffect(()=>{
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${value}/events?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
      setPersonajesEventos(res.data.data.results);
    }).catch(error=>console.log(error))
  },[])
  console.log("Eventos")
  console.log(personajesEventos);

  useEffect(()=>{
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${value}/series?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
      setPersonajesSeries(res.data.data.results);
    }).catch(error=>console.log(error))
  },[])
  console.log("Series")
  console.log(personajesSeries);

  useEffect(()=>{
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${value}/stories?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9`).then(res=>{
      setPersonajesCuentos(res.data.data.results);
    }).catch(error=>console.log(error))
  },[])
  console.log("Cuentos")
  console.log(personajesCuentos);

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
            { personajes.map( per =>(
              <div className='col' key={per.id}>
                {per.id == value ?
                  <div className="card mb-3" id="Per-Detall-Per">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="img-fluid rounded-start" id='Per-Detall-Per-img'/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h4 className="card-title">{per.name}</h4>
                          <p className="card-text">{per.description}</p>
                          <p className="card-text">Modified: {per.modified}</p>
                          <p className="card-text">For more information: <a href={`${per.urls[0].url}`}>Ver mas</a></p>
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
            { personajesComic.map( perComic =>(
              <div className='col' key={perComic.id}>
                <div id='Per-Detall-Carta' className="card">
                  <img src={`${perComic.thumbnail.path}.${perComic.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                  <div className="card-body">
                    <h5 className="card-title">{perComic.title}</h5>
                    <br/>
                    <p className="card-text">For more information: <a href={`${perComic.urls[0].url}`}>Ver mas</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 id="list-item-2" className="Per-Titulo">EVENTOS</h1>
          <div className="row row-cols-5 row-cols-md-5"> 
            { personajesEventos.map( perEvent =>(
              <div className='col' key={perEvent.id}>
                <div id='Per-Detall-Carta' className="card">
                  <img src={`${perEvent.thumbnail.path}.${perEvent.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                  <div className="card-body">
                    <h5 className="card-title">{perEvent.title}</h5>
                    <br/>
                    <p className="card-text">For more information: <a href={`${perEvent.urls[0].url}`}>Ver mas</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 id="list-item-3" className="Per-Titulo">SERIES</h1>
          <div className="row row-cols-5 row-cols-md-5"> 
            { personajesSeries.map( perSeri =>(
              <div className='col' key={perSeri.id}>
                <div id='Per-Detall-Carta' className="card">
                  <img src={`${perSeri.thumbnail.path}.${perSeri.thumbnail.extension}`} className="card-img-top" id='Per-Detall-Carta-img'/>
                  <div className="card-body">
                    <h5 className="card-title">{perSeri.title}</h5>
                    <br/>
                    <p className="card-text">For more information: <a href={`${perSeri.urls[0].url}`}>Ver mas</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>    
          <h1 id="list-item-4" className="Per-Titulo">CUENTOS</h1>
          <div className="row row-cols-5 row-cols-md-5"> 
            { personajesCuentos.map( perCuen =>(
              <div className='col' key={perCuen.id}>
                <div id='Per-Detall-Carta2' className="card">
                  <div className="card-body">
                    <h5 className="card-title">{perCuen.title}</h5>
                    <p>Modified: {perCuen.modified}</p>
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