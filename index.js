function distanceFromHqInBlocks(distance) {
            if (distance > 42) {
                return distance - 42;                
            }
            else{
                return 42 - distance;
            }
        
        }

function distanceFromHqInFeet(feet) {

let feetDist = distanceFromHqInBlocks(feet) * 264
return feetDist
    
}



function distanceTravelledInFeet(start, destination) {
    let distance ;
    if (start>destination) {
     distance =(start-destination) * 264

     return distance   
    }
    else {
        distance = (destination-start) *264 
    return distance }
}

function calculatesFarePrice(start, destination){
const feet = distanceTravelledInFeet(start,destination)
if (feet <= 400) {
    return 0;

    
}
else if (feet<= 2000) {
    return (feet - 400) * 0.02

    
}
else if (feet<=2500) {
    return 25;
    
}

else {
    return 'cannot travel that far';
}
}