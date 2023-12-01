//  FIRST GIFT REPEATED

function findFirstRepeated(gifts) {
    const indexMap = {};
    let minIndex = gifts.length;    
    let result = -1;

    for (let i = 0; i < gifts.length; i++) {
        const gift = gifts[i];
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
