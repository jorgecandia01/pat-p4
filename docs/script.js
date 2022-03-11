let llamarApi = async() => {

    let address = "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=TEF"
    let headers = {
                    'X-API-KEY' : 'm1hrmjB21t4IDahCNN4uX2OLwCweSOWqakhXMf1E',
                   'accept' : 'application/json'
                   };
//SuhniClec19oFxE47MC2b8WtYWJu4Pm8a817Hl3n
//rr535PpbOd37DpvDL3ayC2iJDP8PKqMy5vqRyXaS
    try{
    let response = await fetch(address, {method: 'GET', headers: headers});

    if(!response.ok){
        console.error(response);
        throw new Error("HTTP error!"); //sale del try
    }
    let data = await response.json();
    console.log(data);

    let precio = data.quoteResponse.result[0].regularMarketPrice
    let cambioNominal = data.quoteResponse.result[0].regularMarketChange
    let cambioReal = data.quoteResponse.result[0].regularMarketChangePercent

    console.log(precio, cambioNominal, cambioReal);
    let retorno = [precio, cambioNominal, cambioReal];
    return(retorno);


    } catch(e) {
        console.error(e);
        return ("ERROR");
    }


}






//async function getApi1() {
//
//    console.log("Calling endpoint");
//
//    var result = "";
//    var address = "https://api.github.com/orgs/nodejs";
//    var headers = {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json'
//            };
//    try {
//        let response = await fetch(address, {
//            method: 'GET',
//            headers: headers
//        });
//        if (!response.ok) {
//            console.error(response);
//            throw new Error("HTTP error!");
//        }
//        var data = await response.json();
//        console.log(data);
//        document.write(data.public_repos);
//        //alert(data.public_repos)
//        //document.write(data.age);
//        //document.write(data.car);
//        result = data.public_repos;
//        console.log("End Function");
//        return result;
//    } catch (e) {
//        console.error("Error " + e)
//        result = "-99";
//        return result;
//    }
//}
//
//getApi1().then(x => {
//        console.log(x);
//        console.log("End example");
//    })
//
