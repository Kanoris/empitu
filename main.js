function openNav() {

	if (matchMedia('only screen and (min-width: 360px) and (orientation:landscape)').matches) {
	  document.getElementById("mySidenav").style.width = "25%";
	}
	else{	
    	document.getElementById("mySidenav").style.width = "40%";
    }

	document.getElementById("sideMen").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sideMen").style.display = "block";
}

var c1 = 0;

function add() {
    return c1 += 1;
}
function sub() {
    	if(c1 > 0){
        	return c1 = c1 - 1;
        }
        else{
        	return c1 = 0
        }
}

function myFunction(){
    document.getElementById("demo").innerHTML = add();
}

function myFunction2(){
    document.getElementById("demo").innerHTML = sub();
}

var c2 = 0;

function add1() {
    return c2 += 1;
}
function sub1() {
    	if(c2 > 0){
        	return c2 = c2 - 1;
        }
        else{
        	return c2 = 0
        }
}

function myFunction3(){
    document.getElementById("demo1").innerHTML = add1();
}

function myFunction4(){
    document.getElementById("demo1").innerHTML = sub1();
}

var c3 = 0;

function add2() {
    return c3 += 1;
}
function sub2() {
    	if(c3 > 0){
        	return c3 = c3 - 1;
        }
        else{
        	return c3 = 0
        }
}

function myFunction5(){
    document.getElementById("demo2").innerHTML = add2();
}

function myFunction6(){
    document.getElementById("demo2").innerHTML = sub2();
}

var c4 = 0;

function add3() {
    return c4 += 1;
}34
function sub3() {
    	if(c4 > 0){
        	return c4 = c4 - 1;
        }
        else{
        	return c4 = 0
        }
}

function myFunction7(){
    document.getElementById("demo3").innerHTML = add3();
}

function myFunction8(){
    document.getElementById("demo3").innerHTML = sub3();
}

var c5 = 0;

function add4() {
    return c5 += 1;
}
function sub4() {
    	if(c5 > 0){
        	return c5 = c5 - 1;
        }
        else{
        	return c5 = 0
        }
}

function myFunction9(){
    document.getElementById("demo4").innerHTML = add4();
}

function myFunction10(){
    document.getElementById("demo4").innerHTML = sub4();
}

var c6 = 0;

function add5() {
    return c6 += 1;
}
function sub5() {
    	if(c6 > 0){
        	return c6 = c6 - 1;
        }
        else{
        	return c6 = 0
        }
}

function myFunction11(){
    document.getElementById("demo5").innerHTML = add5();
}

function myFunction12(){
    document.getElementById("demo5").innerHTML = sub5();
}

var c7 = 0;

function add6() {
    return c7 += 1;
}
function sub6() {
    	if(c7 > 0){
        	return c7 = c7 - 1;
        }
        else{
        	return c7 = 0
        }
}

function myFunction13(){
    document.getElementById("demo6").innerHTML = add6();
}

function myFunction14(){
    document.getElementById("demo6").innerHTML = sub6();
}

var c8 = 0;

function add7() {
    return c8 += 1;
}
function sub7() {
    	if(c8 > 0){
        	return c8 = c8 - 1;
        }
        else{
        	return c8 = 0
        }
}

function myFunction15(){
    document.getElementById("demo7").innerHTML = add7();
}

function myFunction16(){
    document.getElementById("demo7").innerHTML = sub7();
}



