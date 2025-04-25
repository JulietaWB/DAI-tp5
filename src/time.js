function Hora()
{
    const fechaCompleta= new Date();
    const hora=fechaCompleta.getHours();
    const min=fechaCompleta.getMinutes();
    const seg=fechaCompleta.getSeconds();

    return `${hora}:${min}:${seg}`;
}

function Fecha()
{
    const fechaCompleta= new Date();

    return fechaCompleta;
}

export default {Hora, Fecha};