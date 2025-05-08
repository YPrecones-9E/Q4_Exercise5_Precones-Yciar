function displayProductCategory(){
var catEntry = document.getElementById('categoryEntry').value;

switch(catEntry){
	case "C":
		document.getElementById("displayCategory").innerHTML="Clothing";
		break;
	case "E":
		document.getElementById("displayCategory").innerHTML="Electronics";
		break;
	case "B":
		document.getElementById("displayCategory").innerHTML="Books";
		break;
	default:
		document.getElementById("displayCategory").innerHTML="Invalid";
	}
}