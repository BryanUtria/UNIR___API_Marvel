import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Personajes } from './Personajes/personajes';
import { Per_Detalle } from './Personajes/per_detalle';
import { Comics } from './Comics/comics';
import { Com_Detalle } from './Comics/com_detalle';
import { Creadores } from './Creadores/creadores';
import { Crea_Detalle } from './Creadores/crea_detalle';
import { Eventos } from './Eventos/eventos';
import { Eve_Detalle } from './Eventos/eve_detalle';
import { Series } from './Series/series';
import { Ser_Detalle } from './Series/ser_detalle';
import { Cuentos } from './Cuentos/cuentos';
import { Cue_Detalle } from './Cuentos/cue_detalle';
import { ResultadoBuscador } from './resultadoBusqueda';

export const Rutas = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="*" element={<Personajes/>} />
                    <Route exact path="/personajes/" element={<Personajes/>} />
                    <Route exact path="/per_detalle/:value" element={<Per_Detalle/>} />
                    <Route exact path="/comics/" element={<Comics/>} />
                    <Route exact path="/com_detalle/:value" element={<Com_Detalle/>} />
                    <Route exact path="/creadores/" element={<Creadores/>} />
                    <Route exact path="/crea_detalle/:value" element={<Crea_Detalle/>} />
                    <Route exact path="/eventos/" element={<Eventos/>} />
                    <Route exact path="/eve_detalle/:value" element={<Eve_Detalle/>} />
                    <Route exact path="/series/" element={<Series/>} />
                    <Route exact path="/ser_detalle/:value" element={<Ser_Detalle/>} />
                    <Route exact path="/cuentos/" element={<Cuentos/>} />
                    <Route exact path="/cue_detalle/:value" element={<Cue_Detalle/>} />
                    <Route exact path="/resultadoBuscador/:value" element={<ResultadoBuscador/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};