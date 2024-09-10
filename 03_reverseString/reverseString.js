const reverseString = function(string) {
    string_array = string.split('')
    string_array.reverse()
    reverse_str = string_array.join("")
   
    return reverse_str

};

// Do not edit below this line

module.exports = reverseString;
