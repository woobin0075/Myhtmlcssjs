//console.log(document.getElementById('allagree').checked)

function allagreecheck() {
    let ischeck = document.getElementById('allagree').checked;

    if(ischeck === true){
        document.getElementById('essential1').checked = true;
        document.getElementById('essential2').checked = true;
    }else{
        document.getElementById('essential1').checked = false;
        document.getElementById('essential2').checked = false;
    }
}

function agree(){
    let essential1 = document.getElementById('essential1').checked;
    let essential2 = document.getElementById('essential2').checked;

    if(essential1 === false || essential2 === false){
        alert("이용약관에 동의해주세요")
    }else if(essential1 === true  && essential2 === false) {
        alert("개인정보 수집 및 이용에 동의해 주세요.");
    }else{
        location.href='./makeaccount.html';
    }
}