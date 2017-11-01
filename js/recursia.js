recursia.js

                                        /*РЕКУРСИЯ*/
/*
n=7;
function my_function(n) {
if(n <= 1){
    return 1;

} else {
    return n+" " + my_function(n-1);
    }
};
*/




n=7;
function my_function(n) {
    // Тут нужно написать решение
    if(n <= 1){
        return 1;
    } else{
        return  my_function(n-1) + " " + n;
    }
};

console.log(my_function(n));


function my_function(n) {
    return (n>1) ? (my_function(n-1) + ' '+ n) : n;
}

console.log(my_function(n));


function my_function(n) {
    if (n == 1) return 1;
    //var x = n - n + 1;
    var y = my_function(n-1);
    return y+" "+n;
}

console.log(my_function(n));


function my_function(n) {
    if (n==1) return 1;
    return my_function(n-1)+" "+n;

}

console.log(my_function(n));