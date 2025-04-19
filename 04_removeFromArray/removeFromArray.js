const removeFromArray = function(list) {
    result = [];
    for (let i = 0; i < list.length; i++){
        inArray = false;
        for (let j = 1; j < arguments.length; j++){
            if (list[i] === arguments[j]){
                inArray = true;
            }
        }
        if (!inArray){
            result.push(list[i]);
        }
    }

    return result 
};

// Do not edit below this line
module.exports = removeFromArray;
