function isNumber(str) {
    return !isNaN(str);
}

function isVariable(str) {
    return str.search("[a-z]|[A-Z]") != -1;
}


function getPrecedence(str) {
    precedenceDict = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
        "^": 3
    };
    if (str in precedenceDict) {
        return precedenceDict[str];
    } else {
        return -1;
    }
}
// EXPERIMENTAL REFACTORED VERSION
// PLEASE TEST!
function MathFormatter() {
    /*
     * The formatting routines.
     * NOTE we are dealing with chars not numbers
     * so these are not math operations!
     */
    //gives formatting routine for a given operator
    this.routine = {};
    this.routine["+"] = function(item1, item2) {
        return item1 + "+" + item2;
    }
    this.routine["-"] = function(item1, item2) {
        return item1 + "-" + item2
    }
    this.routine["*"] = function(item1, item2) {
        return item1 + "\\cdot " + item2
    }
    this.routine["/"] = function(item1, item2) {
        return "\\frac{" + item1 + "}{" + item2 + "}"
    }
    this.routine["^"] = function(item1, item2) {
        return "{" + item1 + "}^{" + item2 + "}";
    }
    this.routine["NONE"] = function(item1, item2) {}

    //preprocess user's input text BEFORE using infixToPostfix on it
    //CURRENTLY: adds invisble opening brackets at ^ or / and inv closing brackets at newline characters
    MathFormatter.prototype.preprocessInput = function(str) {
        var nBrackets = 0;
        for (var i = 0; i < str.length; i++) {
            var char = str[i];
            if (char == "^" || char == "/") {
                str = str.substring(0, i + 1) + invOpenBracket + str.substring(i + 1, str.length); //insert bracket and update index
                i += 1;
                nBrackets++;
            } else if (char == "\n" && nBrackets > 0) { //only close bracket if there is at least 1 opening bracket
                str = str.substring(0, i) + invCloseBracket + str.substring(i + 1, str.length);
                nBrackets--; //opening bracket is now closed
                //alert("replaced: " + str);
            }
        }
        return str;
    }

    /**
     * The function converts a postfix string into kaTeX
     * @param postfix - a postfix array
     * @return items - formatted Katex
     */
    MathFormatter.prototype.postfixToKatex = function(postfix) {
        var items = [];
        for (var i = 0; i < postfix.length; i++) {
            var char = postfix[i];
            if (isOperator(char)) { //is operator
                if (items.length >= 2) { //there should be 2 or more terms to operate on
                    var item2 = items.pop()
                    var item1 = items.pop()
                    var nItem = this.routine[char](item1, item2);
                    items.push(nItem);
                } else { //there is an operator but less than 2 items
                    console.log("error operator doesn't have matching numbers");
                }
            } else {
                items.push(char);
            }
        }
        return items.join("");
    }


    /**
     * The function converts an infix string into reverse
     * polish notation.
     * @param infix - Expected to be a tokenized infix array
     * @return queue - A reverse polish notation array
     */
    MathFormatter.prototype.infixToPostfix = function(infix) {
        var output_queue = []; //output queue
        var operator_stack = []; //operator stack

        for (var i = 0; i < infix.length; i++) {
            var char = infix[i];
            if (isOperator(char)) {
                //Take off the previous operator and add
                //it to output. Put new operator on to be
                //used later
                operator = operator_stack.pop()
                if (operator !== undefined) {
                    output_queue.push(operator)
                }
                operator_stack.push(char);
            } else {
                output_queue.push(char);
            }
        }

        //add back the leftover operator
        output_queue.push(operator_stack.pop());
        return output_queue;
        //return q.join("");
    }
    


}
