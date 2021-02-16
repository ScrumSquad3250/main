
var signatureList = [];
/**
 * 
 * @param {*} string 
 */
function addSignature(string){
    if(string !== null){
        for(var i = 0 ; i < signatureList.length; i++){
            if(signatureList[i] == string){
                return string
            }
            signatureList.push(string);
        }
    }
    return string;
}

/**
 * 
 * @param {*} string 
 */
function toUpperCase(string){ 

    return string.toUpperCase(); 

} 

/**
 * 
 * @param {*} string 
 */
function toLowerCase(string){ 

    return string.toLowerCase(); 

} 
module.exports = {
    addSignature : addSignature,
    toUpperCase: toUpperCase,   
    toLowerCase: toLowerCase, 
}