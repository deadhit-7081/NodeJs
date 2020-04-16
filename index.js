var rect=require('./rectangle')

function solveRect(l,b)
{
    console.log("Solving for rect with l= "+l +" and b= "+b);

    if(l<=0 || b<=0)
    {
        console.log("Rect dim should be >0")
    }
    else{
        console.log("area :"+rect.area(l,b));
        console.log("peri :"+rect.perimeter(l,b));
    }
}

solveRect(2,4)
solveRect(0,0)
solveRect(-12,5)
solveRect(5,5)