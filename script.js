document.getElementById('submitBtn').addEventListener("click", async (e)=>{
    e.preventDefault()
    document.getElementById('resultCont').innerHTML =  '<img width="123" src="loading.svg" alt="">'
    const key = 'ema_live_yhGNCQAKkApjQ6UEGs60qR72iFbEAcYSfvWWGcUL'
    let email = document.getElementById('username').value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let response = await fetch(url);
    let result = await response.json()
    let str = ``;

    for(let keys in result){
        if(result[keys]!==""){
             str = str + `<div>${keys} : ${result[keys]}</div>`
        }
       
    }

    document.getElementById('resultCont').innerHTML = str;

})
    
