// USING ARRAY HOW TO IMPROVE ON THAT?
// THIS ALLOW TO CHECK DUPLICATES ONLY FOR NUMBERS
 function hasDuplicateValue(array) {
     for(var i = 0; i < array.length; i++) {
         for(var j = 0; j < array.length; j++) {
             if(i !== j && array[i] == array[j]) {
                 return true;
             }
         }
     }
     return false;
 }

// -------------------------------------------------------------------------------------------------
// WITH OBJECTS/HASH TABLES WE CAN CHECK DUPILCATES OF ANYTHING, NOT ONLY NUMBERS LIKE ABOVE
function hasDuplicateValue(array) {
     var existingValues = {};
     for(var i = 0; i < array.length; i++) {
         if(existingValues[array[i]] === undefined) {
             existingValues[array[i]] = 1;
         } else {
             return true;
         }
     }
     return false;
 }
