let a = 0;
function darClick()
{
    a = a+1;
    alert("di click "+ a +" veces");
}

function quitarSITEC()
{
    let quitar = confirm("¿Seguro que desea quitar SITEC?")
    if(quitar==true){
        alert("SITEC se elimino correctamente");
    }else{
        alert("SITEC no fue eliminado");
    }
}
function resetCount()
{
    a=0;
    alert("El contador esta en valor "+ a);
}
async function randomUser()
{
    const respuesta = await fetch("https://randomuser.me/api/");
    //console.log(respuesta);
    const datos = await respuesta.json();
    console.log(datos.results[0].name.name
        );
}