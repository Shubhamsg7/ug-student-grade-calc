const calc = () =>{
    let p1 = document.getElementById('paper1').value;
    let p2 = document.getElementById('paper2').value;
    let p3 = document.getElementById('paper3').value;
    let p4 = document.getElementById('paper4').value;
    let p5 = document.getElementById('paper5').value;
    let p6 = document.getElementById('paper6').value;
    let p7 = document.getElementById('paper7').value;
    let p8 = document.getElementById('paper8').value;

    if(p1 == "" ){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Please fill the Paper 1 Marks</span>";
        return false;
    }
    if(p1 > 100 || p1 < 0){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Marks between 0-100</span>";
        return false;
    }


    if(p2 == "" ){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Please fill the Paper 2 Marks</span>";
        return false;
    }
    if(p2 > 100 || p2 < 0){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Marks between 0-100</span>";
        return false;
    }


    if(p3 == "" ){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Please fill the Paper 3 Marks</span>";
        return false;
    }
    if(p3 > 100 || p3 < 0){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Marks between 0-100</span>";
        return false;
    }


    if(p4 == "" ){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Please fill the Paper 4 Marks</span>";
        return false;
    }
    if(p4 > 100 || p4 < 0){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Marks between 0-100</span>";
        return false;
    }


    if(p5 == "" ){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Please fill the Paper 5 Marks</span>";
        return false;
    } 
    if(p5 > 100 || p5 < 0){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Marks between 0-100</span>";
        return false;
    }


    if(p6 == "" ){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Please fill the Paper 6 Marks</span>";
        return false;
    }
    if(p6 > 100 || p6 < 0){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Marks between 0-100</span>";
        return false;
    }


    if(p7 == "" ){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Please fill the Paper 7 Marks</span>";
        return false;
    }
    if(p7 > 100 || p7 < 0){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Marks between 0-100</span>";
        return false;
    }


    if(p8 == "" ){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Please fill the Paper 8 Marks</span>";
        return false;
    }
    if(p8 > 100 || p8 < 0){
        document.getElementById('showData').innerHTML = "<span class='text-danger'>Marks between 0-100</span>";
        return false;
    }


    let totalGrades = parseFloat(p1) + parseFloat(p2) + parseFloat(p3) + parseFloat(p4) + parseFloat(p5) + parseFloat(p6) + parseFloat(p7) + parseFloat(p8);

    //alert(totalGrades);

    let perc = (totalGrades/800) * 100;

    //alert(perc);

    if(perc <= 100 && perc >= 80){
        grades = 'A';
    }else if(perc <= 79 && perc >= 60){
        grades = 'B';
    }else if(perc <= 59 && perc >= 40){
        grades = 'C';
    }else{
        grades = 'F';
    }


    if(perc >= 39.5){
        document.getElementById('showData').innerHTML = `Out of <strong>800</strong> Your Total is <strong>${totalGrades}</strong> and Percentage is <strong>${perc}%</strong>. <br> Your Grade is <strong>${grades}</strong>. You are <strong>Pass</strong>.`;
    }else{
        document.getElementById('showData').innerHTML = `Out of <strong>800</strong> Your Total is <strong>${totalGrades}</strong> and Percentage is <strong>${perc}%</strong>. <br> Your Grade is <strong>${grades}</strong>. You are <strong>Fail</strong>.`;
    }
};

const reset = () => { 
    $('#form')[0].reset(); 
    $("#showData").html('');
} 