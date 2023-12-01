//  FIRST GIFT REPEATED

/* 
    INITIALIZATION
    -indexMap: empty object to store the index of the first occurrence of each gift (number) in the array
    -minIndex: the index of the first repeated gift in the array (initialized to the last index of the array). It will be used to keep track of the minimum index of the second occurrence of numbers.
    -result: initialized to -1
*/ 
function findFirstRepeated(gifts) {
    const indexMap = {}; 
    let minIndex = gifts.length;    
    let result = -1;

    /* 
        LOOP THROUGH THE ARRAY
        -if the gift is not in the indexMap, add it to the indexMap with the index as the value
        -if the gift is already in the indexMap, check if the index is smaller than the minIndex
            -if it is, update the minIndex and result
    */
    for (let i = 0; i < gifts.length; i++) {
        const gift = gifts[i]; // the current gift in the array

        if (indexMap[gift] === undefined) {
            indexMap[gift] = i;
        } else {
            if (indexMap[gift] < minIndex) {
                minIndex = i;
                result = gift;
            }
        }
    }
    return result;
}
