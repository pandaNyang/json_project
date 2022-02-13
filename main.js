// JSON KEY 파악하기 


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

    if(typeof jsonObj == "number" || jsonObj == null){ // 아래로직에서 jsonObj가 넘버 형식일때 true 값을 반환하여 추가
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

    // 다른 key 값 확인 (value 상관 x 오로지 key 기준)
    let {notMatchKey,notExistKey}  = checkKeyNotExist(keys, keys2);
    
    
    if(maxDepth < depth)
        maxDepth = depth;

    let preDepth = depthLength;

    for(let i in jsonObj1) { 
        if(keys2.includes(i)){
            isChildJson1 = isJson(jsonObj1[i]);
            isChildJson2 = isJson(jsonObj2[i]);
            if(isChildJson1 && isChildJson2){ //둘다 json 오브젝트 일때
                let obj = checkTwoJsons(jsonObj1[i], jsonObj2[i], preDepth + 1, maxDepth);
                depthLength = obj.depthLength;
                maxDepth = obj.maxDepth;
                console.log(obj)
            }else if(jsonObj1[i] !== jsonObj2[i]){  
                //둘다 json Obj가 아닐 때 값이 같은지 확인해야함.
                //값이 같지 않을 ㄸㅐ 
                
                notSameValue.push(i);
            }
        } else {
            noneKey.push(i); //TOBE 해당되지 않는 아이들 저장.
            //throw new Error('일치하지않음')
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
 *    둘 중 하나의 키 길이가 다를 때 실행되는 함수 
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
    // =>  true  재귀.
    // => false return depthJson
      
    //TODO
    // return 값을 하나의 값으로 변경하기 

    /*
        1. a와 b가 json 인지 판별
        2-1. 둘다 json 일 경우 -> 값도 같이 비교. 
        - key ?를 아마 arr?
        - 시간이 오래 걸려도 ? 일단 제대로 비교를 해보자 ! << 이거였던걸로 기억-> TODO는 두개의 object가 같이 depths 내려가면서 key값 비교..

        2-2. 하나라도 json이 아닐 경우
        - fail
     */


const main = (input) => {
    // json 인지 파악여부에 대한 코드 

    // let keys = Object.keys(input);
    
    checkTwoJsons(testJson, testJson2);

    // console.log(keys);

    return true;
};

// 터미널 node main.js


console.log(checkTwoJsons(testJson, testJson2))
main(testJson);
 


