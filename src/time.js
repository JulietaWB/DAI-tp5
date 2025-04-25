function Hora ()
{
    const fechaCompleta= new Date();
    const hora=fechaCompleta.getHours();
    const min=fechaCompleta.getMinutes();
    const seg=fechaCompleta.getSeconds();

    return `${hora}:${min}:${seg}`;
}

function Time ()
{
    const fechaCompleta= new Date();
    const hora=fechaCompleta.getHours();
    const min=fechaCompleta.getMinutes();
    const seg=fechaCompleta.getSeconds();

    return `${hora}:${min}:${seg}`;
}

export default Hora;