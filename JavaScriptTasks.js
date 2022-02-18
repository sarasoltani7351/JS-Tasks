// javaScript Function1 Welcome
function wellCome(FirstName,LastName){
    const Wellcome = ` wellcome ${FirstName} ${LastName} to this website! `;
    return Wellcome;
}

// javaScript Function2 getProduct  
function getProduct(ProductName , urlImageAddress , Price){
    const Product = `
        <div style="width: 400px;
            height: 300px;
            padding: 10px;
            background-color: lightblue;
            color: darkblue;
            border-radius: 10px;
            text-align: center;
            align-items: center;
            justify-content: center;
            margin: auto auto;
            margin-top: 20px;">
                <img src="${urlImageAddress}" style="width: 200px;">
                <h3> ${ProductName} <h3>
                <h4> ${Price} </h4>
        </div>`;
    return Product;
}

// javaScript Function3 checkAge  
function checkAge(age){
    if (age >= 18)
        return true;
    else
       return false;
}

// javaScript Function4 countryNameToCountryCode
function countryNameToCountryCode(country){
    if (country === "iran")
        return + 98;
    else if ( country === "usa")
        return +1;
    else if ( country === "Canada")
        return +1;
    else if ( country === "Spain")
        return +34;
    else if ( country === "Norway")
        return +47;
    else if ( country === "Sweden")
        return +46;
    else if ( country === "Andorra")
        return +376;
    else if ( country === "United Arab")
        return +971;
    else if ( country === "Afghanistan")
        return +93;
    else if ( country === "Anguilla")
        return +1;
    else if ( country === "Albania")
        return +355;
    else if ( country === "Armenia")
        return +374;
    else if ( country === "Austria")
        return +43;
    else if ( country === "Aruba")
        return +297;
}