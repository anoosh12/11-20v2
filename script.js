//hi
function firstLast6(num){

    if(num[0]==6 || num[num.length-1]==6){
        return true;
    }

    return false;

}

function has23(num){
    if(num[0]== 2 || num[0]==3 || num[1]==2 || num[1]==3){
        return true;
    }
    return false;

}

function  fix23(num) {
    if (num[0] == 2 && num[1] == 3) {
        num[1] = 0;
    }


    if (num[1] == 2 && num[2] == 3) {
        num[2] = 0;
    }

    return num;

}

function countYZ(word){
    var count = 0;
    word = word.toLowerCase();
    for(var i = 0; i <= word.length-1; i++) {
        if (word[i] == " " && (word[i - 1] == "y" || word[i - 1] == "z")) {
            count++;
        }
    }
    if(word[word.length - 1] == "y" || word[word.length - 1] == "z"){
        count++;
    }


    return count;

}

function endOther(str1, str2){
   var str1 = str1.toLowerCase();
   var str2 = str2.toLowerCase();

   var check1 = str1.endsWith(str2);
   var check2 = str2.endsWith(str1);

    if(check1 == true || check2 == true){
        return true;
    }
    return false;
}

function starOut(word){
var end = "";
for(var i = 0; i < word.length; i++){
        if (word[i] !== "*" && word[i-1] !== "*" && word[i+1] !== "*"){
            end+=word[i];
        }
    }
    return end;
}

function getSandwich(word) {

        var end = "";
        var bread1 = word.indexOf("bread");
        var bread2 = word.lastIndexOf("bread");

            if (bread1 == -1){
                return end;
            }
            if(bread1 == bread2){
                return end;
            }

            return word.substring(bread1 + 5,bread2);

            }

function canBalance(ints) {

    var sum = 0;
    var sum2 = 0;

    for (var i = 0; i < ints.length; i++) {
        sum += ints[i];

        for (var n = i+1; n < ints.length; n++) {
            sum2 += ints[n];
        }
        if(sum == sum2) {
            return true;
        }
        sum2 = 0;
    }
    return false;
}

function countClumps(arr){
    var clump = 0;

    for(var i = 0; i < arr.length; i++){

        if (arr[i] == arr[i+1] && arr[i] != arr[i+2]){
            clump++;
        }

    }

return clump;

}

function evenlySpaced(a, b, c){

    if((a-b == b-c) || (b-a == c-b) || (a-b == c-a) || (a-c == c-b)){

    return true;

    }
    return false;

}



function tester() {

    document.getElementById("output").innnerHTML = firstLast6([3,5,6]); 
    document.getElementById("output2").innnerHTML = has23(2, 3);
    document.getElementById("output3").innnerHTML = fix23(2, 3, 5);
    document.getElementById("output4").innnerHTML = countYZ("fiz buz");
    document.getElementById("output5").innnerHTML = endOther("blagwsg","bag");
    document.getElementById("output6").innnerHTML = starOut("ahae*uaha");
    document.getElementById("output7").innnerHTML = getSandwich("breadeducationbread");
    document.getElementById("output8").innnerHTML = canBalance([3,3,2,1,5]);
    document.getElementById("output9").innnerHTML = countClumps([3,3,2,1,5]);
    document.getElementById("output10").innnerHTML = evenlySpaced([3,3,1]);
}
