import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Personajes/personajes.css';

//https://gateway.marvel.com:443/v1/public/comics?apikey=d661eab3aba86d79fa5bb2bba73aff3d
//key privada: 6e6950c1d9f88e73f2c140eaecb87f9480bbf07d
//key publica: d661eab3aba86d79fa5bb2bba73aff3d
//ts: 1
//concatenacion: 16e6950c1d9f88e73f2c140eaecb87f9480bbf07dd661eab3aba86d79fa5bb2bba73aff3d
//hash: 57f9c1340ea43beb1adf2867cff887b9

export const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/series?offset=520&limit=100&ts=1&apikey=d661eab3aba86d79fa5bb2bba73aff3d&hash=57f9c1340ea43beb1adf2867cff887b9').then(res=>{
      setSeries(res.data.data.results);
    }).catch(error=>console.log(error))
  },[])
  console.log(series);

  return (
    <div>
      <div id="Per-Titulo">
        <h1>SERIES</h1>
      </div>
      <div className="row row-cols-5 row-cols-md-5">
        { series.map( ser =>(
          <div className='col' key={ser.id}>
            <div id='Per-Carta' className="card">
              <a id="Per-a" href={`/ser_detalle/${ser.id}`}>
                <img src={`${ser.thumbnail.path}.${ser.thumbnail.extension}`} className="card-img-top" id='Per-Carta-img'/>
                <div className="card-body" id="Per-Text">
                  <h6 className="card-text">{ser.title}</h6>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}