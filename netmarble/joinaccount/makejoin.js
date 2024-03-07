let phonenumber = document.querySelectorAll('input')[4];
let email = document.querySelectorAll('input')[5];

let idflag = 0;
let nicknameflag = 0;
let pwdflag = 0;
let pwdconfirmflag = 0;

let phonenumberflag = 1; //임시로 중복확인, 폰 인증, 자동가입방지 다 정상적으로 했다고 가정하기
let emailflag = 1;
let charjoin = 1;

let radiocheck = [];
for(let i=6; i<=9; i++){
    radiocheck.push(document.querySelectorAll('input')[i]);
}

function inputid(){
    let idinput = document.querySelectorAll('input')[0];
    let idp = document.querySelectorAll('p')[0];
    let idregExp = /[a-z0-9]{3,11}$/gi;
    //console.log(idregExp.test(idinput.value));

    if(idinput.value.length == 0){

        idp.textContent = "필수 정보입니다.";
        idflag = 0;

    }else if(idregExp.test(idinput.value) == false || idinput.value.length > 11){
        idp.textContent = "사용불가능한 아이디 입니다.";
        idflag = 0;

    }else{
        idp.textContent = "사용 가능한 아이디 입니다.";
        idflag = 1;
    }
}

function inputnickname(){
    let nicknameinput = document.querySelectorAll('input')[1];
    let nicknamep = document.querySelectorAll('p')[1];

    let nicknameregExp = /[a-z0-9]{3,11}$/gi;

    if(nicknameinput.value.length == 0){

        nicknamep.textContent = "필수 정보입니다.";
        nicknameflag = 0;

    }else if(nicknameregExp.test(nicknameinput.value) == false || nicknameinput.value.length > 11){
        nicknamep.textContent = "사용불가능한 닉네임 입니다.";
        nicknameflag = 1;
    }else{
        nicknamep.textContent = "사용 가능한 닉네임 입니다.";
        nicknameflag = 1;
    }

}

function inputpassword(){
    let pwdinput = document.querySelectorAll('input')[2];
    let pwdp = document.querySelectorAll('p')[2];

    let pwdregExp = /^(?=.*[a-zA-z])(?=.*[0-9]).{7,14}$/g;

    if(pwdinput.value.length == 0){

        pwdp.textContent = "필수정보 입니다.";
        pwdflag = 0;

    }else if(pwdregExp.test(pwdinput.value) == false || pwdinput.value.length > 14){
        pwdp.textContent = "사용불가능한 비밀번호 입니다.";
        pwdflag = 1;
    }else{
        pwdp.textContent = "사용 가능한 비밀번호 입니다.";
        pwdflag = 1;
    }
}

function pwdconfirm(){
    let pwdinput = document.querySelectorAll('input')[2];
    let confirm = document.querySelectorAll('input')[3];
    let confirmp = document.querySelectorAll('p')[3];


    if(confirm.value.length == 0){

        confirmp.textContent = "필수 입력입니다.";
        pwdconfirmflag = 0

    }else if(pwdinput.value === confirm.value){
        confirmp.textContent = "일치하는 비밀번호입니다."
        pwdconfirmflag = 1
    }else{
        confirmp.textContent = "일치하지 않는 번호입니다."
        pwdconfirmflag = 1
    }
}

function makeaccount() {

    if(idflag == 0){
        alert("아이디를 입력해주세요.")
    }else if(nicknameflag == 0){
        alert("닉네임을 입력해주세요.")
    }else if(pwdflag == 0){
        alert("비밀번호를 입력해주세요.")
    }else if(pwdconfirmflag == 0){
        alert("비밀번호를 확인해주세요.")
    }else if(radiocheck[0].checked == false && radiocheck[1].checked == false && radiocheck[2].checked == false && radiocheck[3].checked == false){
        alert("회원정보 유효기간을 선택해주세요.")
    }else{
        alert("회원 가입 완료!!");
    }
}

function backtohomepage(){
    location.href='../index.html';
}