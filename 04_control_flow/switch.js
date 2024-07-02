// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January")
        break;

    case "feb":
        console.log("February")
        break;

    case "march":
        console.log("March")
        break; // If any break statement is absent, then all code starting from this case will execute except the default

    case "april":
        console.log("April")
        break;

    default:
        console.log("Default Case match")
        break;
}