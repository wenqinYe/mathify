

function isNumber(str) {
  return !isNaN(str);
}

function isVariable(str) {
  return str.search("[a-z]|[A-Z]") != -1;
}

function getPrecedence(str) {
  if (str == "+" || str == "-") {
    return 1;
  } else if (str == "*" || str == "/") {
    return 2;
  } else if (str == "^") {
    return 3;
  }
  return -1;
}

function infixToPostfix(infix) {
  infix = infix.replace(/\s/g, ''); //remove all whitespace
  var q = [];
  var stack = [];
  var i = 0; //index of string currently at
  var prevIsNumber = false; //was the prev character a number/decimal
  while (i < infix.length) {
    var char = infix[i];
    var setPrevIsNumber = false;//variable to set prevIsNumber to at the end of the for loop
    //has to be delayed so that bottom code works
     if (isNumber(char) || char == "." ) {
       if(prevIsNumber){
          q[q.length-1] += char;//for multi-digit numbers/decimal numbers
          }
       else{
         q.push(char);
       }
      setPrevIsNumber = true;
    }
      if(isVariable(char)){
        if(prevIsNumber){
           q[q.length-1] += char;//for variables with coefficients (ie. 3x)
       }
        else{
       q.push(char);
        }
       }else if (char == "(" || char == invOpenBracket) {
         console.log("opening brace");
         stack.push(char);
      } else if (char == ")" || char == invCloseBracket) {
      var item = stack[stack.length - 1];
      //make sure invCloseBracket matches with InvOpenBracket, NOT JUST normal bracket
      var openBracket = char == ")"? "(" : invOpenBracket;
      while (item != openBracket) {
        q.push(item); //push operator into output q
        stack.splice(stack.length - 1, 1); //remove from stack
        item = stack[stack.length - 1];
        if (stack.length < 1) {
          console.log("Mismatch brackets");
          break;
        }
      }
    if(char == ")"){  //i.e. if it is NOT the invisible bracket
        q.push(")");  //SIGNALS that previous operation MUST have brackets around it for outputted text
      }
      stack.splice(stack.length - 1, 1); //remove left bracket from stack
    } else {
      var p1 = getPrecedence(char);
      if (p1 != -1) { //if c is an operator
        while (char != "^" && stack.length > 0 && p1 <= getPrecedence(stack[stack.length - 1])) {
          q.push(stack[stack.length - 1]);
          stack.splice(stack.length - 1, 1); //remove at last index, remove 1 item

        }
        stack.push(char);
      }
    }
    prevIsNumber = setPrevIsNumber; //assignment is delayed
    i++;
    console.log(stack);
  }
  while (stack.length > 0) {
    q.push(stack[stack.length - 1]);
    stack.splice(stack.length - 1, 1);
  }
 // alert(q.join(" "));
  return q;
  //return q.join("");

}

//postfix is AN ARRAY of strings, NOT just STRING
function postfixToKatex(postfix) {
  console.log("-------")
  console.log(postfix);
  var items = [];
  for (var i = 0; i < postfix.length; i++) {
    var char = postfix[i];
    if(char == ")"){//TEST; wrap brackets last item
       items[items.length -1] = "(" + items[items.length -1]+")";
       }
    if (isVariable(char)) {
      items.push(char);
    }
    else if (isNumber(char) || char == ".") {
      items.push(char);
    }
    //items.push(c);
    else if (getPrecedence(char) != -1) { //is operator
      if (items.length >= 2) { //there should be 2 or more terms to operate on
        var item1 = items[items.length - 2];
        var item2 = items[items.length - 1];
        var nItem;
        if (char == "/") {
          //escape back slash by putting 2
          nItem = "\\frac{" + item1 + "}{" + item2 + "}";
        } else {
          nItem = "{" + item1 +"}"+ char + "{" + item2 + "}";
        }
        items.splice(items.length - 2, 2);
        items.push(nItem);
      } else {  //there is an operator but less than 2 items to operate on
        if(c != "^"){
          items.push(char); //just put it on in case user just hasnt finished typing
        } else { //handle the fact that there is exponent but not enough to op on

        }
        console.log("Error: postfixToKatex does not have numbers to operate on");
      }
    }
    console.log(items);
  }
  return items.join("");
}
function preprocessInput(str){//preprocess means inserting invisible brackets

  var nBrackets = 0;
  for(var i = 0; i < str.length; i ++){
    var char = str[i];
    if(char == "^" || char == "/"){
       str = str.substring(0, i+1) + invOpenBracket + str.substring(i+1, str.length);//insert bracket and update index
      i += 1;
      nBrackets ++;
    }
    else if(char == "\n" && nBrackets > 0){//only close bracket if there is at least 1 opening bracket
       str = str.substring(0, i) + invCloseBracket + str.substring(i+1, str.length);
      nBrackets--;//opening bracket is now closed
      //alert("replaced: " + str);
       }
  }
  //alert(str);
  return str;
  //var bracketIndex = str.replace(/\t|\n/, ")");//match tabs or newline

}
// $(document).on('input',
//   function(event) {
//
//     var sIn = String($("#txtIn").val());
//     sIn = preprocessInput(sIn);
//     console.log(infixToPostfix(sIn));
//     katex.render(postfixToKatex(infixToPostfix(sIn)), $("#divOut").get(0)); //get(0) same as get docelembyid
//
//   });
