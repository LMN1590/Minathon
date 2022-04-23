function checkTriangle(a,b,c){
    return (a+b>c && b+c>a && c+a>b);
}
if(checkTriangle(1,3,9)) console.log("It's a triangle.");
else console.log("You fckn kidding me.");