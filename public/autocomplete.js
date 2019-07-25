
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
          a = document.createElement("DIV");
          a.setAttribute("id", this.id + "autocomplete-list");
          a.setAttribute("class", "autocomplete-items");
          this.parentNode.appendChild(a);
        for (i = 0; i < colorArr.length; i++) {
          if (colorArr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + colorArr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += colorArr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + colorArr[i] + "'>";
            b.addEventListener("click", function(e) {

            inp.value = this.getElementsByTagName("input")[0].value;
   
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

fetch('/rgb').then ((res)=>{
    return res.json();
}).then((data)=>{
    for(var i=0; i<data.length; i++){
        colors.push(data[i].name);
        backgroundRGBColor.push(data[i].rgb);
    }


    autocomplete(document.getElementById("myInput"), colors);
    document.getElementById("submit").addEventListener("click", function (e) {
      if(document.getElementById("myInput").value === "")
      {
        inputError = "Please enter some value!";
        document.getElementById("input_error").style.color="red"; 
        document.getElementById("input_error").innerHTML = inputError;
      }
      else
      {
        document.getElementById("input_error").innerHTML = '';
        document.getElementById("result").style.background= 'rgb' +backgroundRGBColor[findRGB(document.getElementById("myInput").value)];
      }
    });
})

function findRGB(color){
 const indexOfColor = colors.reduce(function(acc,curr,index){
    if(curr === color)
    {
      acc = index;
    }
    else
    {
      if(acc>-1){
        return acc
      }
    
     acc = -1
    }
    return acc;
  })
  if(indexOfColor<0){
    inputError = "color not found!";
    document.getElementById("input_error").style.color="red"; 
    document.getElementById("input_error").innerHTML = inputError;
  }else{
    return indexOfColor
  }

  

}



