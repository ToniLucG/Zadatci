function DoSomething(x) {
    var output = 1;
    if (x>0 & x<1000){
        while(x > 0) {
            output*=x
            x-=7
        }
        console.log(output)
    }
    else{
        console.log("Invalid input.")
    }
}
DoSomething(52)