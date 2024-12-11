const calss3= require('./class3.js')
abc = async() => {
    try{
        let url = "https://www.google.com"
        let response = await fetch(url)
        console.log(response);
    }
    catch(err){
        console.log(err);
        
    }
}

abc()
class3