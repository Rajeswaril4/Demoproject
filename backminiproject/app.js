async function apicall(){
    let result = await fetch("https://meowfacts.herokuapp.com/");
    let resultdata = await result.json();
    let fact = resultdata.data;
    document.getElementById("fact").innerText = fact;
}