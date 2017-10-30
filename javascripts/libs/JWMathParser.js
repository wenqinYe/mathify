function JWMathParser() {

    this.routine = {};
    /** Standard Operations **/
    this.routine["^"] = function(item1, item2) {
        return item1 + "^" + "{" + item2 + "}"
    }
    this.routine["_"] = function(item1, item2) {
        return item1 + "_" + "{" + item2 + "}"
    }
    this.routine["/"] = function(item1, item2) {

        return "\\frac{" + item1 + "}{" + item2 + "}"
    }
    this.routine["sqrt"] = function(item1, item2) {
        //the array is put on purpose!
        //this is so item1 and sqrt{item2} are not combined
        //if there is an operator after
        return [item1, " \\sqrt{" + item2 + "} "]
    }

    /* Text is kind of broken right now */
    this.routine["text"] = function(item1) {
        if(item1.trim() == "\\right)" || item1.trim() == "\\right."|| item1.trim() == "\\right}"|| item1.trim() == "\\right]"){
            return " \\text{} " + item1
        } else {
          return " \\text{" + item1 + "} "
        }
    }
    this.routine["mathrm"] = function(item1) {
      if(item1.trim() == "\\right)" || item1.trim() == "\\right."|| item1.trim() == "\\right}"|| item1.trim() == "\\right]"){
          return " \\text{} " + item1
      } else {
        return " \\text{" + item1 + "} "
      }
    }

    this.keywordKatexEquivalent = {
      /**** Routines that we don't want to convert just yet ****/
      "sqrt": "sqrt",
      "text": "text",
      "mathrm": "mathrm",
      "over": "/",


      /****** Vectors *****/
      "hat": " \\hat ",
      "vec": " \\vec ",
      "vector": " \\vec ",

      /****** Calculus Operators*****/
      "sum": " \\sum ",
      "int": " \\int ",
      "prod": " \\prod ",
      "product": " \\prod ",
      "integral": " \\int ",
      "intint": " \\iint ",
      "int int": " \\iint ",

      /****** Greek Letters *****/
      "Delta": " \\Delta ",
      "Gamma": " \\Gamma ",
      "Lamda": " \\Lamda",
      "Omega": " \\Omega ",
      "Phi": " \\Phi ",
      "Psi": " \\Psi",
      "Sigma": " \\Sigma ",
      "Theta": " \\Theta ",
      "Xi": " \\Xi ",


      "alpha": " \\alpha ",
      "beta": " \\beta ",
      "chi": " \\chi ",
      "delta": " \\delta ",
      "epsilon": " \\epsilon ",
      "varepsilon": " \\varepsilon ",
      "eta": " \\eta ",
      "gamma": " \\gamma ",
      "iota": " \\iota ",
      "kappa": " \\kappa ",
      "lambda": " \\lambda ",
      "lamda": " \\lambda ",
      "mu": " \\mu ",
      "nu": " \\nu ",
      "omega": " \\omega ",
      "phi": " \\phi ",
      "varphi": " \\varphi ",
      "pi": " \\pi ",
      "psi": " \\psi ",
      "rho": " \\rho ",
      "sigma": " \\sigma ",
      "tau": " \\tau ",
      "theta": " \\theta ",
      "vartheta": " \\vartheta ",
      "upsilon": " \\upsilon ",
      "xi": " \\xi ",
      "zeta": " \\zeta ",

      /****** Special Functions *****/
      "lim": " \\lim ",
      "limit": " \\lim ",
      "sin": " \\sin ",
      "cos": " \\cos ",
      "tan": " \\tan ",
      "ln": " \\ln ",
      "log": " \\log ",
      "cot": " \\cot ",
      "sec": " \\sec ",
      "csc": " \\csc ",

      "max": " \\max ",
      "arg": " \\arg ",

      /****** Special symbols and notation *****/
      "*": " \\cdot ",
      "choose": " \\choose ",

      "times": " \\times ",
      "dividedby": " \\div ",
      "divide": " \\div ",

      "plusminus": " \\pm ",
      "plusrorminus": " \\pm ",
      "pm": " \\pm ",
      "+-": " \\pm ",

      "minusplus": " \\mp ",
      "minusorplus": " \\mp ",
      "mp": " \\mp ",

      "to": " \\to ",
      "->": " \\to ",
      "=>": " \\Rightarrow ",
      "implies": " \\Rightarrow ",

      "pi": " \\pi ",

      // Not doesn't work...
      // "not": "\\not",

      // \cup \cap \setminus \subset \subseteq \subsetneq \supset \in \notin \emptyset \varnothing
      "union": " \\cup ",
      "cup": " \\cup ",
      //intersection doesn't work algorithm thinks it's "int" and "sec"
      "intersection": " \\cap",
      "cap": " \\cap ",
      "for": " \ | \ ",
      "suchthat": " \ | \ ",
      "set": " \\in ",
      "setof": " \\in ",
      "in": " \\in ",
      "emptyset": " \\emptyset ",
      "empty": " \\emptyset ",


      // \land \lor \lnot \forall \exists \top \bot \vdash \vDash
      "land": " \\land ",
      "lor": " \\lor ",
      "forall": " \\forall ",
      "not ": " \\not ",
      "bot": " \\bot",
      "perpendicular": " \\bot ",
      "forall": " \\forall ",

      // \approx \sim \simeq \cong \equiv \prec \lhd
      "land": " \\land ",
      "lor": " \\lor ",
      "forall": " \\forall ",
      "not ": " \\not ",
      "bot": " \\bot",
      "perpendicular": " \\bot ",
      "forall": " \\forall ",

      // nabla \partial
      "nabla": " \\nabla ",
      "partial": " \\partial ",
      // \Im \Re
      "imaginarynumbers": " \\Im ",
      "im": " \\Im ",
      "imaginary": " \\Im ",
      "reals": " \\Re ",
      "realnumbers": " \\Re ",
      "real": " \\Re ",

      // \infty \aleph_0
      "infty": " \\infty ",
      "infinity": " \\infty ",
      "mod": " \\pmod ",
      "equiv": " \\equiv ",
      "equivalent": " \\equiv ",



      /* Less than, greater than etc. */
      "lessthan": " \\lt ",
      "greaterthan": " \\gt ",
      "lt": " \\lt ",
      "gt": " \\gt ",
      "lte": " \\le ",
      "gte": " \\ge ",
      "le": " \\le ",
      "ge": " \\ge ",
      "<=": " \\le ",
      ">=": " \\ge ",
      "!=": " \\ne ",
      "ne": " \\ne ",

      /* Trig functions and log */
      "tan": " \\tan ",
      "ln": " \\ln ",
      "log": " \\log ",
      "cot": " \\cot ",
      "sec": " \\sec ",
      "csc": " \\csc ",

      /* Brackets */
      "(": " \\left( ",
      ")": " \\right) ",
      "[": " \\left[ ",
      "]": " \\right] ",

      "INVISIBLE_CLOSING_BRACKET": " \\right. ",
      "INVISIBLE_OPENING_BRACKET": " \\left. ",

    }

    /*
    Sorting the keywrods is important because it ensures that
    longer keywords are evaluated before shorter ones. If this
    does not happen things like:  "logarithm" will be evaluated as
    ["log", "a", "r", "i", "t", "h", "m"] instead of ["logarithm"]
    because the code just sees "log" and stops.
    */
    this.keywords = [];
    for(var keyword in this.keywordKatexEquivalent){
      this.keywords.push(keyword);
    }
    //sort by character length in descending order
    this.keywords.sort(function(a, b){
      return b.length - a.length
    });



    /** Brackets **/
    // this.routine["("] = function(item1, item2){
    //   return [item1, " ( ", item2]
    // }
    // this.routine[")"] = function(item1, item2){
    //   return [item1, " ) ", item2]
    // }

    this.isNumber = function(str) {
        return !isNaN(str);
    }

    this.isAlphabeticalCharacter = function(str) {
        return /^[a-zA-Z()]+$/.test(str);
    }

    this.isOperator = function(str) {
        return this.routine[str] !== undefined;
    }

    this.isKeyword = function(str) {
      return this.keywordKatexEquivalent[str] !== undefined;
    }

    this.popNonEmpty = function(stack) {
        var output = stack.pop();
        while (output !== undefined && output === "") {
            var output = stack.pop();
        }
        return output
    }
    //traverses the entire array and subarrays and joins the elements
    this.recursiveJoin = function(arr){
      var output = "";
      for(var i = 0; i < arr.length; i++){
        if(arr[i].constructor == String){
          output += arr[i];
        }
        if(arr[i].constructor == Array){
          output += this.recursiveJoin(arr[i]);
        }
      }

      return output;
    }

//============================START: AUTO FORMATTING FUNCTIONS============================

//searches "str" for "toFind", returns all indexes where "toFind" is in "str"
findIndexes = function(str, toFind){
  var arr = [];
  var i = str.indexOf(toFind);
  while(i != -1){
    arr.push(i);
    i = str.indexOf(toFind, i + toFind.length);//start search in new position
  }
  return arr;
};

/**Does some autocomplete for "log".**/
autoLog = function(str){
  //log function is autobracketed/underscored
  //if "log" is immediately followed by number or "(" or "{"
  //i.e. won't occur if user has a underscore: "log_{32}"
  var logIndexes = findIndexes(str, "log");
  var offset = 0;
  for(var i = 0; i < logIndexes.length; i++){
    var ind = logIndexes[i] + offset + 3; //index of char in front of "log", should always? be an underscore
    /*if(!isNaN(str[ind])){ //if its a number, put underscore and brackets, ASSUME 1 digit number only
      str = str.substring(0, ind) + "_{" + str[ind] + "}" + str.substring(ind+1, str.length);
      offset += 3; //length of str has changed by 3
    }
    else*/ if(str[ind] == "(" || str[ind] == "{"){ //user probably forgot to put underscore => put it there for them
      str = str.substring(0, ind) + "_" + str[ind] + str.substring(ind+1, str.length);
      offset += 1; //length of str has changed by 1
    }
  }
  return str;

}

/**Does some autocomplete for "lim".**/
autoLim = function(str){
  //similar to autoLog(), inserts "_" when if "(" or "{" is immediately after "lim". User likely forgot "_"
  //CANNOT PLACE "_" immediately after lim if next character is NOT "{" OR "(" since only the first character after "_" would
  //be placed in the subscript
  var limIndexes = findIndexes(str, "lim");
  var offset = 0;
  for(var i = 0; i < limIndexes.length; i++){
    var ind = limIndexes[i] + offset + 3;
    if(str[ind] == "(" || str[ind] == "{"){
       str = str.substring(0, ind) + "_" + str.substring(ind, str.length);
       offset += 1; //string length has been increased by 1, skip over the "_" that was just added
    }
  }

  return str;
}
//============================ END : AUTO FORMATTING FUNCTIONS============================


    /** Do some stuff with the user's text before anything else happens.
    This function currently places curly brackets around round brackets
    **/
    this.preProcess = function(str) {
      //TEMPORARY PATCH TO text{} issues with keywords such as "int", "lim"
      var sText = "text{"; //string to search for since there are two ways to write text ("text{}" and "mathrm{}")
      var iText = -1;
      do{
        iText = str.indexOf(sText, iText+1); //look ahead to search for the next text/mathrm
        if(iText > -1){
          str = str.substring(0, iText + sText.length) + " " + str.substring(iText + sText.length, str.length);
        }
      }while(iText != -1)

      sText = "mathrm{";
      do{
        iText = str.indexOf(sText, iText+1); //look ahead to search for the next text/mathrm
        if(iText > -1){
          str = str.substring(0, iText + sText.length) + " " + str.substring(iText + sText.length, str.length);
        }
      }while(iText != -1)

      //do some autoformatting => THIS STUFF SHOULD STILL OCCUR EVEN IF brackets are not paired;
      //i.e. put this in front of the if statement below
      str = autoLog(str);  //Added autocomplete stuff for "log"
      str = autoLim(str);  //Added autocomplete stuff for "lim"

        //cheap way to test if brackets are all paired
        if(str.split("(").length !== str.split(")").length){
          return str;
        }

        if (str != undefined) {
            for (var i = 0; i < str.length; i++) {
                if (str[i] == "(") { //insert "{" to the left of "("
                    str = str.substring(0, i) + "{" + str.substring(i, str.length);
                    i++;
                }
                if (str[i] == ")") { //insert "}" to the right of ")"
                    str = str.substring(0, i + 1) + "}" + str.substring(i + 1, str.length);
                    i++;
                }
            }
        }
        return str;
    }

    function parseNumbers(str) {
        var out = [];
        var isNumber = false;
        var number = "";
        for (var i = 0; i < str.length; i++) {
            var c = str[i];
            if (!isNaN(c) || c == ".") { // if current is a number OR has a decimal place
                number += c;
            } else { //not a number/decimal, just add onto output, clear out number
                if (number != "") {
                    out.push(number);
                    number = "";
                }
                out.push(c);
            }
        }
        if (number != "") { //in case last thing is a number
            out.push(number);
        }
        return out;
    }

    var closeMissingBrackets = function(tokenized_array){
        return tokenized_array
    }


    /**
     * Takes a bracketed math string, and splits it into
     * a nested array representation. Example:
     * {3x+2^{3x}}/{3x} ->
     * ["3", "x", "2", "^",["3", "x"], "/", ["3", "x"]]
     *
     * @return a nested array representation of a math string
     */
    this.tokenize = function(str) {
        //keeps track of the current nested array
        //that the loop is in
        var stack = []; //keeps track of the nested array hierarchy
        var output = []; //the output

        //Note that javascript variable assignments
        //refer back to the original object and do
        //NOT create a new object.
        //Therefore appending to the current variable
        //will append to the original variable because
        //they are the same
        stack.push(output)
        var current = output; //stays on the current nested array
        var str = parseNumbers(str); //same as str.split("") but keeps digits of the same number together

        var str = this.tokenizeKeywords(str)

        for (var i = 0; i < str.length; i++) {
            current = stack[stack.length - 1];
            if (str[i] == "{") {
                current.push([]);
                stack.push(current[current.length - 1]);
                current = stack[stack.length - 1];
            } else if (str[i] == "}" && stack.length > 1) {
                stack.pop();
                current = stack[stack.length - 1]
                //adding the extra character after closing
                //is right now a quick "monkey patch" so that
                //the bracket doesn't interfere with the next character
                current.push("")
            } else {
                current.push(str[i]);
            }
        }
        return output
    }

    /*
    This function converts keywords found in a tokenized array into its
    katex representation.
    Examples: ["int", "3", "x"] turns into:
              ["\int", "3", "x"]
    */
    this.keywordsToKatex = function(tokenized_array){
      var openBracketsTracker = [];
      var closedBracketsTracker = [];

      var curlyBracketCounter = 0;
      var prevIsText = false; //TEST
      var isText = false; //is current stuff supposed to be text
      var textBracketCount = 0;
      //convert keywords to their katex representation
      for(var i = 0; i < tokenized_array.length; i++){
        var token = tokenized_array[i]

        // if(token == "text"  || token == "mathrm"){
        //   tokenized_array[i] = " \\text "
        //   i += 1;
        //   continue;
        // }
        if(this.isKeyword(token)){
          if(token == "(" || token == "["){
            openBracketsTracker.push(token)
          }else if(token == ")" || token == "]"){
            closedBracketsTracker.push(token)
          }
          //TEST
          if(!isText){
            tokenized_array[i] = this.keywordKatexEquivalent[token]
          }
          else{
            tokenized_array[i] = token;
          }
        }

        if(token == "{"){
          curlyBracketCounter += 1;
        }else if(token == "}"){
          curlyBracketCounter -= 1;
        }

        //TEST
        if(token == "{" && prevIsText){
          textBracketCount = curlyBracketCounter;
          isText = true;
        }
        if(token == "}" && isText && curlyBracketCounter < textBracketCount){
          isText = false;
        }
        if(token == "text"  || token == "mathrm"){
          prevIsText = true;
        }
        else{
          prevIsText = false;
        }

      }

      //close un paired brackets with an invisible brackets
      if(openBracketsTracker.length > closedBracketsTracker.length){
        var delta = openBracketsTracker.length - closedBracketsTracker.length;
        for(var i = 0; i < delta; i++){
          tokenized_array.push(this.keywordKatexEquivalent["INVISIBLE_CLOSING_BRACKET"])
        }
      }else if(closedBracketsTracker.length > openBracketsTracker.length){
        var delta = closedBracketsTracker.length - openBracketsTracker.length;
        for(var i = 0; i < delta; i++){
          tokenized_array.unshift(this.keywordKatexEquivalent["INVISIBLE_OPENING_BRACKET"])
        }
      }

      if(curlyBracketCounter < 0){
        for(var i = 0; i < -1 * curlyBracketCounter; i++){
          tokenized_array.unshift("{")
        }
      }else if(curlyBracketCounter > 0){
        for(var i = 0; i < -1 * curlyBracketCounter; i++){
          tokenized_array.push("}")
        }
      }

      return tokenized_array;
    }

    /*
     * Assumes math follows the format:
     * number(s) operator number(s).
     *
     * It will fail if there is an operator
     * with no number beside it.
     */
    this.formattedToKatex = function(tokenized_array) {
        //first transform any keywords into katex
        tokenized_array = this.keywordsToKatex(tokenized_array);

        if(tokenized_array.length == 1 && tokenized_array[0].constructor == Array){
          return this.formattedToKatex(tokenized_array[0]);
        }
        if (tokenized_array == undefined || tokenized_array.length == 1) {
            return String(tokenized_array);
        }
        if (tokenized_array.constructor == String) {
            return tokenized_array
        }


        var output = [];
        var queue = tokenized_array;

        var missingClosingBrackets = []; //keeps track of missing closing brackets

        while (queue.length > 0) {
            var token = queue.splice(0, 1)[0];

            if (token.constructor == Array) {
                output.push(this.formattedToKatex(token))
            }else if(token.trim() == "text" || token.trim() == "mathrm"){
              //console.log("is text")
              //text is a special case because we don't want
              //what is next to be "formatted as katex"
              //we just want to keep it as is
              var after = queue.splice(0, 1)[0] || ""
              if(after.constructor == Array){
                after = this.recursiveJoin(after)
                //console.log(after)
              }
              output.push(this.routine[token](after))

            } else if (this.isOperator(token)) {

                var previous = this.popNonEmpty(output) || ""
                var after = queue.splice(0, 1)[0] || ""
                var after = this.formattedToKatex(after) || "";
                var result = this.routine[token](previous, after);
                output = output.concat(result);

            } else {
                output.push(token);

            }
        }
        //console.log(output)
        return "{" + output.join("") + "}";
    }

    /**
     * The looks for keywords in a char array at a particular starting indx
     * @param keyword - Keyword to look for
     * @param array - Character array
     * @return match - if the keyword has been found
     */
    this.scanKeywordAtIndex = function(keyword, char_array, index) {
        var match = true;
        var split_keyword = keyword.split("");
        for (var j = 0; j < split_keyword.length; j++) {
            if (char_array[index + j] !== split_keyword[j].trim()) {
                match = false;
            }
        }
        return match
    }
    this.tokenizeKeywords = function(char_array) {
        var output = [];
        for (var i = 0; i < char_array.length; i++) {
            if (char_array[i].constructor === Array) {
                output.push(this.tokenizeKeywords(char_array[i]))
                continue;
            }
            output.push(char_array[i])

            for (var j = 0; j < this.keywords.length; j++) {
                var keyword = this.keywords[j];
                var match = this.scanKeywordAtIndex(keyword, char_array, i);
                if (match) {
                    output.pop()
                    output.push(keyword);
                    i += keyword.split("").length - 1
                    break
                }
            }
        }
        return output;
    }

    this.convertText = function(mathString){
      var preprocessedText = this.preProcess(mathString)
      var tokenizedText = this.tokenize(preprocessedText)
      return this.formattedToKatex(tokenizedText);
    }

}
