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