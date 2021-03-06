// JSON KEY νμνκΈ° 


// {"widget": {
//     "debug": "on",
//     "window": {
//         "title": "Sample Konfabulator Widget",
//         "name": "main_window",
//         "width": 500,
//         "height": 500
//     },
//     "image": { 
//         "src": "Images/Sun.png",
//         "name": "sun1",
//         "hOffset": 250,
//         "vOffset": 250,
//         "alignment": "center"
//     }
// }


//testJson


const testJson = 
{
    "widget": {
        "debug": "on",
        "window": {
            "title": "Sample Konfabulator Widget",
            "name": "main_window",
            "width": 500,
            "height": 500,
            "a" : {
                "a5" : {
                    "hello" : "world" 
                }
            }
        },
        "image": { 
            "src": "Images/Sun.png",
            "name": "sun1",
            "hOffset": 250,
            "src" : "what",
            "vOffset": 250,
            "alignment": { 
                "src1": "Images/Sun.png",
                "nam1e": "sun1",
                "hOf1fset": 250,
                "vOf1fset": 250,
                "ali1gnment": true
            }
        }
    }
};
const testJson2 = 
{
    "widget": {
        "debug": "on",
        "window": {
            "title": "Sample Konfabulator Widget",
            "name": "main_window",
            "width": 500,
            "height": 500,
            "a" : {
                "a5" : {
                    "hello" : "world" 
                }
            }
        },
        "image": { 
            "src": "Images/Sun.png",
            "name": "sun1",
            "hOffset": 250,
            "vOffset": 250,
            "alignment": { 
                "src1": "Images/Sun.png",
                "nam1e": "sun1",
                "hOf1fset": 250,
                "vOf1fset": 250,
                "ali1gnment": true
            }
        }
    }
};

// ================

const compareResultJson1 = new Map();
const compareResultJson2 = new Map();


const isJson = (jsonObj) => {

    if(typeof jsonObj == "number" || jsonObj == null){ // μλλ‘μ§μμ jsonObjκ° λλ² νμμΌλ true κ°μ λ°ννμ¬ μΆκ°
        return false;
    }
    
    if(typeof jsonObj != 'string')
        jsonObj = JSON.stringify(jsonObj);
    
    try {
        return (typeof JSON.parse(jsonObj) === 'object' );
    } catch (e) {
        return false;
    }
}

const checkJsonDepth = (jsonObj, depth = 0, maxDepth  = 0) => {
    let depthLength = depth;
    let isChildJson = false;

    const keys = Object.keys(jsonObj);

    if(maxDepth < depth)
        maxDepth = depth;

    let preDepth = depthLength;

    for(let i = 0 ; i < keys.length; i ++) {
        isChildJson = isJson(jsonObj[keys[i]]);
        if(isChildJson){
            let obj = checkJsonDepth(jsonObj[keys[i]], preDepth + 1, maxDepth);
            depthLength = obj.depthLength;
            maxDepth = obj.maxDepth;
        }
    } 

    return {depthLength, maxDepth}; 
}



const checkTwoJsons = (jsonObj1, jsonObj2, depth = 0, maxDepth  = 0) => {
    let depthLength = depth;
    let isChildJson1 = false;
    let isChildJson2 = false;
    let notSameValue = [];
    let noneKey  = new Array();

    let keys = Object.keys(jsonObj1);
    let keys2 = Object.keys(jsonObj2);

    // λ€λ₯Έ key κ° νμΈ (value μκ΄ x μ€λ‘μ§ key κΈ°μ€)
    let {notMatchKey,notExistKey}  = checkKeyNotExist(keys, keys2);
    
    
    if(maxDepth < depth)
        maxDepth = depth;

    let preDepth = depthLength;

    for(let i in jsonObj1) { 
        if(keys2.includes(i)){
            isChildJson1 = isJson(jsonObj1[i]);
            isChildJson2 = isJson(jsonObj2[i]);
            if(isChildJson1 && isChildJson2){ //λλ€ json μ€λΈμ νΈ μΌλ
                let obj = checkTwoJsons(jsonObj1[i], jsonObj2[i], preDepth + 1, maxDepth);
                depthLength = obj.depthLength;
                maxDepth = obj.maxDepth;
                console.log(obj)
            }else if(jsonObj1[i] !== jsonObj2[i]){  
                //λλ€ json Objκ° μλ λ κ°μ΄ κ°μμ§ νμΈν΄μΌν¨.
                //κ°μ΄ κ°μ§ μμ γΈγ 
                
                notSameValue.push(i);
            }
        } else {
            noneKey.push(i); //TOBE ν΄λΉλμ§ μλ μμ΄λ€ μ μ₯.
            //throw new Error('μΌμΉνμ§μμ')
        }
    } 

    compareResultJson1.set(depth, {notExistKey, notSameValue, noneKey}); 
    compareResultJson2.set(depth, {notMatchKey, notSameValue});

    console.log(compareResultJson1);
    console.log(compareResultJson2);
   
    return {depthLength, maxDepth}; 
``
}
/**
 *    λ μ€ νλμ ν€ κΈΈμ΄κ° λ€λ₯Ό λ μ€νλλ ν¨μ 
 * 
 */

const checkKeyNotExist = (key1, key2) => {
    
    let longgerKey = key1;
    let shorterKey = key2;
    
    if(key1.length < key1.lengh){
        longgerKey = key2;
        shorterKey = key1;
    }

    const notExistKey = new Array();
    const notMatchKey = new Array();

    for(let i of shorterKey){
        if(!longgerKey.includes(i)){
            notMatchKey.push(i); 
        }
    }


    for(let i of longgerKey){
        if(!shorterKey.includes(i)){
            notExistKey.push(i);
        }
    }

    return {notMatchKey, notExistKey};
}


    // value is json
    // =>  true  μ¬κ·.
    // => false return depthJson
      
    //TODO
    // return κ°μ νλμ κ°μΌλ‘ λ³κ²½νκΈ° 

    /*
        1. aμ bκ° json μΈμ§ νλ³
        2-1. λλ€ json μΌ κ²½μ° -> κ°λ κ°μ΄ λΉκ΅. 
        - key ?λ₯Ό μλ§ arr?
        - μκ°μ΄ μ€λ κ±Έλ €λ ? μΌλ¨ μ λλ‘ λΉκ΅λ₯Ό ν΄λ³΄μ ! << μ΄κ±°μλκ±Έλ‘ κΈ°μ΅-> TODOλ λκ°μ objectκ° κ°μ΄ depths λ΄λ €κ°λ©΄μ keyκ° λΉκ΅..

        2-2. νλλΌλ jsonμ΄ μλ κ²½μ°
        - fail
     */


const main = (input) => {
    // json μΈμ§ νμμ¬λΆμ λν μ½λ 

    // let keys = Object.keys(input);
    
    checkTwoJsons(testJson, testJson2);

    // console.log(keys);

    return true;
};

// ν°λ―Έλ node main.js


console.log(checkTwoJsons(testJson, testJson2))
main(testJson);
 


