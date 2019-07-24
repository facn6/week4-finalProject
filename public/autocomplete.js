
/*An arrays containing all the colors names in the world:*/
var colors = [];
var backgroundRGBColor =[];

/*auto complete function*/
function autocomplete(inp, colorArr) {
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
          currentFocus = -1;
          /*create a DIV element that will contain the items (values):*/
          a = document.createElement("DIV");
          a.setAttribute("id", this.id + "autocomplete-list");
          a.setAttribute("class", "autocomplete-items");
          /*append the DIV element as a child of the autocomplete container:*/
          this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < colorArr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (colorArr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + colorArr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += colorArr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + colorArr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  }

  function searchResult(color){

  }
fetch('/rgb').then ((res)=>{
    return res.json();
}).then((data)=>{
    for(var i=0; i<data.length; i++){
        colors.push(data[i].name);
        backgroundRGBColor.push(data[i].rgb);
    }


    autocomplete(document.getElementById("myInput"), colors);
    document.getElementById("submit").addEventListener("click", function (e) {
      document.getElementById("result").style.backgroundColor= 'rgb' +backgroundRGBColor[findRGB(document.getElementById("myInput").value)];
    });
})

function findRGB(name){
 return colors.reduce(function(acc,curr,index){
    if(curr == name)
    {
      acc= index;
    }
    return acc;
  },0)

}



