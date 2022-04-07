function PatternExtraction(){
    let text1=document.getElementById('boxReading').value;
    let reg=document.getElementById('input').value;

    try {
        if(reg==="") throw "write a regex pattern";
        else if(text1==="") throw "write a text to compare";
        else{
        var regex = new RegExp(reg, 'gi');}
       
    } catch(e) {
        alert(e);
        return false;
    }
    let display="";
    var match_cases = text1.match(regex);
    if (match_cases !== null) {
        for (const current_match of match_cases) {
          display =  display + current_match + "\n";
          
        }
        document.getElementById('boxDisplay').value = display;  
    } else {
        document.getElementById('boxDisplay').value = "Not found";
    }
}