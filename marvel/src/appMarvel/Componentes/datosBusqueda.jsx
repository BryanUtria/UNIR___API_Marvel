import { useEffect, useState } from "react";

export const usePersonajes = (url) => {
    console.log("Ejecutando funcion personajes");
    const [personajesRespuesta, setPersonajesRespuesta] = useState("...");

    useEffect(() => {
        const respuesta = async () => {
            let res = await fetch(url);
            let data = await res.json();
            setPersonajesRespuesta(data.data.results);
        };
        respuesta();
    }, [])

    return { personajesRespuesta }
}

export const useComics = (url) => {
    console.log("Ejecutando funcion comics");
    const [comicsRespuesta, setComicsRespuesta] = useState("...");

    useEffect(() => {
        const respuesta = async () => {
            let res = await fetch(url);
            let data = await res.json();
            setComicsRespuesta(data.data.results);
        };
        respuesta();
    }, [])

    return { comicsRespuesta }
}

export const useCreadores = (url) => {
    console.log("Ejecutando funcion Creadores");
    const [creadoresRespuesta, setCreadoresRespuesta] = useState("...");

    useEffect(() => {
        const respuesta = async () => {
            let res = await fetch(url);
            let data = await res.json();
            setCreadoresRespuesta(data.data.results);
        };
        respuesta();
    }, [])

    return { creadoresRespuesta }
}

export const useEventos = (url) => {
    console.log("Ejecutando funcion Eventos");
    const [eventosRespuesta, setEventosRespuesta] = useState("...");

    useEffect(() => {
        const respuesta = async () => {
            let res = await fetch(url);
            let data = await res.json();
            setEventosRespuesta(data.data.results);
        };
        respuesta();
    }, [])

    return { eventosRespuesta }
}

export const useSeries = (url) => {
    console.log("Ejecutando funcion Series");
    const [seriesRespuesta, setSeriesRespuesta] = useState("...");

    useEffect(() => {
        const respuesta = async () => {
            let res = await fetch(url);
            let data = await res.json();
            setSeriesRespuesta(data.data.results);
        };
        respuesta();
    }, [])

    return { seriesRespuesta }
}