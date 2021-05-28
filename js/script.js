var computerVince = Math.floor(Math.random() * 6) +1;
console.log(computerVince);

var utenteVince = Math.floor(Math.random() * 6) +1;
console.log(utenteVince);



if (computerVince > utenteVince)
{
    document.getElementById('win') .innerHTML= 'computer vince';
    console.log('computer vince');
}
else if(computerVince < utenteVince)
{   
    document.getElementById('win') .innerHTML= 'utente vince';
    console.log('utente vince');
}
else{
    document.getElementById('win') .innerHTML= 'nessuno vince';
    console.log('nessuno vince');
}
