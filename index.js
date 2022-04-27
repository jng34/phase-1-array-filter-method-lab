// Code your solution here
//findMatching
function findMatching(listArr, name) {
    const result = listArr.filter(wanted => {
        return wanted === name || wanted === name.toLowerCase(); 
    });
    return result;
}   

//fuzzyMatch
function fuzzyMatch(listArr, name) {
    const result = listArr.filter(first => first.startsWith(name));
    return result;
}

//matchName
function matchName(listArr, str) {
    const result = listArr.filter(match => match.name === str)
    return result;
}