import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Personajes/personajes.css';

//https://gateway.marvel.com:443/v1/public/comics?apikey=d661eab3aba86d79fa5bb2bba73aff3d
//key privada: 6e6950c1d9f88e73f2c140eaecb87f9480bbf07d
//key publica: d661eab3aba86d79fa5bb2bba73aff3d
//ts: 1
//concatenacion: 16e6950c1d9f88e73f2c140eaecb87f9480bbf07dd661eab3aba86d79fa5bb2bba73aff3d
//hash: 57f9c1340ea43beb1adf2867cff887b9

export const Eventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/events?limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9').then(res=>{
      setEventos(res.data.data.results);
    }).catch(error=>console.log(error))
  },[])
  console.log(eventos);

  return (
    <div>
      <div id="Per-Titulo">
        <h1>EVENTOS</h1>
      </div>
      <div className="row row-cols-5 row-cols-md-5">
        { eventos.map( eve =>(
          <div className='col' key={eve.id}>
            <div id='Per-Carta' className="card">
              <a id="Per-a" href={`/eve_detalle/${eve.id}`}>
                <img src={`${eve.thumbnail.path}.${eve.thumbnail.extension}`} className="card-img-top" id='Per-Carta-img'/>
                <div className="card-body" id="Per-Text">
                  <h5 className="card-text">{eve.title}</h5>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}