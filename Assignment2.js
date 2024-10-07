var maxLimit = prompt("Enter the Limit of the Double Loop:");

for (var i = 0; i <= maxLimit; i++) {
    for (var j = 0; j <= maxLimit; j++) {
        var x = i + j;
        console.log("["+i+"]", "["+j+"]" , "Added value is ", x);
    }
}