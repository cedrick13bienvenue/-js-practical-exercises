
{/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */}


const between = function(a,b){
    let result=[]
    for(let i=a;i<=b;i++){
        result.push(i)
    }
    return result
}

