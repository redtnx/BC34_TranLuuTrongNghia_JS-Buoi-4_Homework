// Bài tập 1
function sorting (a,b,c){
var sort = ""
if (a>=b && b>=c){
sort = c + " , " + b + " , " + a
} else
if(a>=b && c>=b){
sort = b + " , " + c + " , " + a
} else
if (b>=a && a>=c){
sort = c + " , " + a + " , " + b 
} else
if (b>=a && c>=a) {
sort = a + " , " + c + " , " + b 
} else
if (c>=a && a>=b) {
sort = b + " , " + a + " , " + c
} else
if (c>=a && b>=a) {
sort = a + " , " + b + " ,  " + c
} else{}
return sort
}

document.getElementById("sort").onclick=function(){
var num1 = document.getElementById("num1").value*1
var num2 = document.getElementById("num2").value*1
var num3 = document.getElementById("num3").value*1
var ketQua = sorting(num1, num2, num3)

document.getElementById("result1").innerHTML= ketQua
}

// Bài tập 2
document.getElementById("hello").onclick=function(){
    var member = document.getElementById("member").value*1
    var helloMember = ""
   switch (member) {
    case 1:
        helloMember = "Hi Dad!"
        break;
    case 2:
        helloMember = "Hi Mom!"
        break;
    case 3:
        helloMember = "Hi bro!"
        break;
    case 4:
        helloMember = "Hi sis!"
        break;
   
    default:
        helloMember= "Please clarify yourself!"
        break;
   }
    document.getElementById("result2").innerHTML= helloMember
}

//Bài tập 3
function demSo (a,b,c){
    var kq = ""
if(a%2===0 && b%2===0 && c%2===0){
    kq = "Có 3 số chẵn và 0 số lẻ"
}
if(a%2===0 && b%2===0 && c%2!=0){
    kq = "Có 2 số chẵn và 1 số lẻ"
}
if(a%2===0 && b%2!=0 && c%2===0){
    kq = "Có 2 số chẵn và 1 số lẻ"
}
if(a%2!=0 && b%2===0 && c%2===0){
    kq = "Có 2 số chẵn và 1 số lẻ"
}
if(a%2===0 && b%2!=0 && c%2!=0){
    kq = "Có 1 số chẵn và 2 số lẻ"
}
if(b%2===0 && a%2!=0 && c%2!=0){
    kq = "Có 1 số chẵn và 2 số lẻ"
}
if(c%2===0 && a%2!=0 && b%2!=0){
    kq = "Có 1 số chẵn và 2 số lẻ"
}
if(a%2!=0 && b%2!=0 && c%2!=0){
    kq = "Có 0 số chẵn và 3 số lẻ"
}
if(a===0 || b ===0 || c ===0){
    kq = "Vui lòng nhập đủ số!"
}
return kq
}

document.getElementById("count").onclick=function(){
    var number1 = document.getElementById("number1").value*1
    var number2 = document.getElementById("number2").value*1
    var number3 = document.getElementById("number3").value*1
    var count = demSo(number1, number2, number3)
    
    document.getElementById("result3").innerHTML= count
    }

// Bài tập 4
function tamGiac (a,b,c){
    var hinh = ""
    if( a===b && b!=c){
        hinh = "Tam giác cân"
    } 

    if (a===b && b===c){
        hinh = "Tam giác đều"
    }

    if(c*c===a*a+b*b){
        hinh = "Tam giác vuông"
    }

    if(a===0 || b ===0 || c ===0){
        hinh = "Vui lòng nhập đủ cạnh!"
    }
    return hinh
}

document.getElementById("find").onclick=function(){
    var side1 = document.getElementById("side1").value*1
    var side2 = document.getElementById("side2").value*1
    var side3 = document.getElementById("side3").value*1
    var dapAn = tamGiac(side1,side2,side3)
    
    document.getElementById("result4").innerHTML= dapAn
    }