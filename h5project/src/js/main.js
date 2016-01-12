//var a = 2;
//
//function f() {
//    var a = 4;
//    b = window.a + a;
//    alert(b);
//}
//
//f();

//{
//    var b = 2;
//}
//
//{
//    alert(b);
//}

//var main = {
//    f:function() {
//        alert("functioin main.js");
//    }
//}
//main.f()

//if(window.onload) {
//    var f = window.onload;
//}
//
//window.onload = function () {
//    if(f) f();
//
//    alert("main js alert");
//}

//window.onload = function() {
//    alert("main js alert");
//}

window.onload = function() {
    var img = document.getElementById("img");
    var center = 500;
    var lpx = 500;
    var lb = document.getElementById("l");
    var rb = document.getElementById("r");
    var T;
    var tmp = 0;
    var time_interval = 100;
    //lb.onclick = function () {
    //    if(T) {
    //
    //    }
    //
    //    T = setInterval(function() {
    //        lpx -= 10;
    //        img.style.left = lpx + "px";
    //    }, 50);
    //}
    //rb.onclick = function () {
    //    T = setInterval(function() {
    //        lpx += 10;
    //        img.style.left = lpx + "px";
    //    }, 50)
    //}

    lb.onclick = function() {
        tmp = -10;
        alert(time_interval);
    }

    rb.onclick = function() {
        tmp = 10;
        alert(time_interval);
    }

    setInterval(function() {
        lpx += tmp;
        img.style.left = lpx + "px";
        if(lpx - 500 < 1000 && lpx - 500 >= 0){
            time_interval -= 2 * (lpx - center)/100;
        }else if(lpx - 500 > -1000 && lpx - 500 <= 0) {
            time_interval += 2 * (lpx - center)/100;
        }

    }, time_interval);
}
