a = {a:1, b:3, c:4}
b = {a:2, b:5, c:7}

function compare(a,b){
    for (const key of Object.keys(a)) {
        const contains = Object.hasOwn(b, key);
        if (!contains) {
            return false;
        }
    }
    return true;
}

console.log(compare(a, b));