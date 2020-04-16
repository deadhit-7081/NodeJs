var rect=require('./rectangle')

function solveRect(l,b)
{
    console.log("Solving for rect with l= "+l +" and b= "+b);
    rect(l,b,(err,rectangle) => 
    {
        if(err)
        {
            console.log("ERROR: ",err.message);
        }
        else{
            console.log("Area of rect of L = "+l+" and b ="+b+" is "+rectangle.area())
            console.log("Perimeter of rect of L = "+l+" and b ="+b+" is "+rectangle.perimeter())
        }
    })
    console.log("This is after rect()")
}

solveRect(2,4)
solveRect(0,0)
solveRect(-12,5)
solveRect(5,5)