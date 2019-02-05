// Your code goes here
function quadraticEquation(){
    var a = parseFloat(prompt('Enter number of a'));
    var b = parseFloat(prompt('Enter number of b'));
    var c = parseFloat(prompt('Enter number of c'));
    var d = (b * b) - (4 * a * c);
    const x = Math.floor(d);
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        return alert('Invalid input data');
    } else {
        if (a !== null && b !== null && c !== null) {
            if (Math.sqrt(d) || d > 0) {
                let x1 = (-b - Math.sqrt(d)) / (2 * a);
                let x2 = (-b + Math.sqrt(d)) / (2 * a);
                return alert(
                    'x1 = ' + x1 +'\n\rx2 =' + x2
                );
            } else if (d === 0) {
                if(b === 0) {
                    return alert('no solution');
                } else {
                    let x = (-b / (2 * a));
                    return alert('x = ' + x);
                }
            } else {
                return alert('no solution (when Discriminant < 0);');
            }
        } else {
            return alert('Invalid input data');
        }
    }
 
}

quadraticEquation();