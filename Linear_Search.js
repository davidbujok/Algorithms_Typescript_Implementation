var linearSearch = function (numbersList, value) {
    for (var i = 0; i < numbersList.length; i++) {
        if (numbersList[i] === value) {
            return value;
        }
        else if (numbersList[i] === value) {
            break;
        }
    }
    return ("Not in an numbersList");
};
console.log(linearSearch([3, 5, 8, 7, 5, 10, 15, 26], 10));
