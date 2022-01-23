



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
            "a5" : "b" 
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
                "ali1gnment": "center"
            }
        }
    }
};


const isJson = (jsonObj) => {

    if(typeof jsonObj == "number" || jsonObj == null){
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

const checkJsonDepth = (jsonObj, depth = 0) => {
    let depthLength = depth;
    let isChildJson = false;

    const keys = Object.keys(jsonObj);
    let childDepthArr = [];

    console.log(`깊이 :  ${depthLength}`)
    let 기존깊이  =  depthLength;
    for(let i = 0 ; i < keys.length; i ++) {
        isChildJson = isJson(jsonObj[keys[i]]);
        if(isChildJson) {
            depthLength = checkJsonDepth(jsonObj[keys[i]], 기존깊이 + 1);
            // console.log(`1 : ${childDepth}`)
            // if(childDepth != null && childDepth != 'undefined')
            //     childDepthArr.push(childDepth);
            // console.log(`after : ${childDepthArr}`)
        }
    } 

    console.log(depthLength);

    return depthLength;

    // value is json
    // =>  true  재귀.
    // => false return depthJson    
}

const main = (input) => {
    // json 인지 파악여부에 대한 코드 


    let keys = Object.keys(input);
    console.log(keys);



    return true;
};

// 터미널 node main.js



console.log(checkJsonDepth(testJson))
//main(testJson);
 


