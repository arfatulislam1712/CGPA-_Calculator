function calculateCGPA(){
    let y1=parseFloat(document.getElementById('year1').value) || 0;
    let y2=parseFloat(document.getElementById('year2').value) || 0;
    let y3=parseFloat(document.getElementById('year3').value) || 0;
    let y4=parseFloat(document.getElementById('year4').value) || 0;

    let cgpa = (y1*0.20)+(y2*0.25)+(y3*0.25)+(y4*0.30);
    cgpa=cgpa.toFixed(2);
    document.getElementById('result').innerText= "Your CGPA:  " + cgpa;
    
}

