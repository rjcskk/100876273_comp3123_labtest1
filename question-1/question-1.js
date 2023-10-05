const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        let result = [];
        for(let i=0; i<mixedArray.length; i++){
            if(typeof mixedArray[i] == 'string'){
                result.push(mixedArray[i].toLowerCase())
            }
        }
        
        if (result.length > 0) {
          resolve(result);
        } else {
          reject("No string found in the input array");
        }
      
    });
  };

  lowerCaseWords(mixedArray)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });