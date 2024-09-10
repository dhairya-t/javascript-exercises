const removeFromArray = function(list, ...remove_items) {
    for (const item of remove_items) {
        while (list.includes(item)) {
            if (list.indexOf(item) !== -1) {
                list.splice(list.indexOf(item), 1)
            }
        }


    }

    return list

};

// Do not edit below this line
module.exports = removeFromArray;

