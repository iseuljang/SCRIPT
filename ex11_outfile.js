function DoCal() {
    // [1] : 프롬프트로 숫자 2개와 연산자를 입력
    let a = 0;
    let b = 0;
    let op = "";
    let result = 0;
    // [2] : 숫자가 아닌 경우 메시지 출력 후 함수 종료
    a = parseInt(prompt("숫자 a를 입력해주세요"));
    b = parseInt(prompt("숫자 b를 입력해주세요"));
    if(isNaN(a) || isNaN(b)){
        alert("숫자가 아닙니다.\n입력한 값 a : " + a + ", b : " + b);
        return; //아무것도 반환하지 않고 함수를 종료
    }
    // [3] : 연산자에 따라 계산을 수행, 연산자가 옳지 않은 경우 메시지 출력 후 함수 종료
    op = prompt("연산자를 입력하세요[+ - * /]");
    switch(op){
        case "+" : result = a + b; break;
        case "-" : result = a - b; break;
        case "*" : result = a * b; break;
        case "/" : 
            if(b != 0){
                result = a / b; break;
            }else{
                alert("0으로 나눌 수 없습니다."); break;
            }
        default : 
            alert("연산자가 올바르지 않습니다.\n입력한 연산자: " + op);
            return;
    }
    // [4] : 계산 결과 반환
    return "입력한 결과 : " + a  + " " + op + " " + b + " = " + result;
}