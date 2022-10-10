function vrijeme(c){
    var sati=0;
    var minute=0;
    while (c>60){
        sati+=1;
        c-=60
    }
    if(c<60){
            minute+=c;
            c-=minute

    }
    console.log("Sati:", sati, "Minute:", minute)
}

vrijeme(186)