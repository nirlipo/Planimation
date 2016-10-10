/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var PDDL_Parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[1,21],$V2=[2,7],$V3=[2,32],$V4=[1,23],$V5=[1,24],$V6=[1,25],$V7=[4,8],$V8=[8,23,24],$V9=[8,23],$Va=[1,61],$Vb=[2,11],$Vc=[2,46],$Vd=[1,79],$Ve=[1,78],$Vf=[1,87],$Vg=[2,15],$Vh=[1,90],$Vi=[1,91],$Vj=[2,20],$Vk=[2,25],$Vl=[8,23,44],$Vm=[1,103],$Vn=[8,53,54],$Vo=[1,106],$Vp=[1,107],$Vq=[1,114],$Vr=[1,115],$Vs=[1,118],$Vt=[1,119],$Vu=[1,129],$Vv=[1,133],$Vw=[4,8,53,54];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"start":3,"LPAREN":4,"DEFINE":5,"DOMAIN":6,"domain_name":7,"RPAREN":8,"domain_definitions":9,"domain_body":10,"PROBLEM":11,"problem_name":12,"problem_body":13,"domain_types":14,"predicates_def":15,"constants_def":16,"action_def":17,"object_definitions":18,"init_state":19,"goal_state":20,"OBJECTS":21,"object_list":22,"STRING":23,"HYPHEN":24,"INIT":25,"initial_predicates":26,"AND":27,"argument_list":28,"NOT":29,"GOAL":30,"goal_predicates":31,"definition":32,"REQUIREMENTS":33,"TYPING":34,"STRIPS":35,"TYPES":36,"types":37,"CONSTANTS":38,"constants_list":39,"PREDICATES":40,"predicate_list":41,"predicate":42,"argument":43,"VARIABLE":44,"ACTION":45,"parameters_action":46,"action_def_body":47,"PARAMETERS":48,"action_preconditions":49,"action_result":50,"PRECONDITION":51,"list_effects":52,"EFFECT":53,"OBSERVE":54,"list_fluents":55,"fluent":56,"$accept":0,"$end":1},
terminals_: {2:"error",4:"LPAREN",5:"DEFINE",6:"DOMAIN",8:"RPAREN",11:"PROBLEM",21:"OBJECTS",23:"STRING",24:"HYPHEN",25:"INIT",27:"AND",29:"NOT",30:"GOAL",33:"REQUIREMENTS",34:"TYPING",35:"STRIPS",36:"TYPES",38:"CONSTANTS",40:"PREDICATES",44:"VARIABLE",45:"ACTION",48:"PARAMETERS",51:"PRECONDITION",53:"EFFECT",54:"OBSERVE"},
productions_: [0,[3,9],[3,12],[10,2],[10,2],[10,2],[10,2],[10,0],[13,2],[13,2],[13,2],[13,0],[18,4],[22,2],[22,3],[22,0],[19,4],[19,7],[26,5],[26,8],[26,0],[20,4],[20,7],[31,5],[31,8],[31,0],[7,1],[12,1],[9,3],[32,2],[32,2],[32,2],[32,0],[14,4],[37,2],[37,1],[16,4],[39,2],[39,3],[39,0],[15,4],[41,2],[41,0],[42,4],[42,7],[28,2],[28,0],[43,1],[43,3],[43,1],[17,6],[46,4],[47,2],[49,2],[50,2],[50,2],[50,0],[52,1],[52,3],[52,4],[55,2],[55,1],[56,4],[56,7]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return [types, constants, predicates, actionList];
break;
case 2:
return [objects, startPredicates];
break;
case 13:
 objects.names.push($$[$0-1])
break;
case 14:
 objects.types.push($$[$0-1]); objects.typeIndex.push(objects.names.length);
break;
case 18:
startPredicates.push(new Predicate($$[$0-3],$$[$0-2],true));
break;
case 19:
startPredicates.push(new Predicate($$[$0-4],$$[$0-3],false));
break;
case 23:
goalPredicates.push(new Predicate($$[$0-3],$$[$0-2],true));
break;
case 24:
goalPredicates.push(new Predicate($$[$0-4],$$[$0-3],false));
break;
case 26: case 27: case 52:
this.$ = $$[$0];
break;
case 30:
requirements.push("types");
break;
case 31:
requirements.push("strips");
break;
case 34: case 35:
types.push($$[$0]);
break;
case 37:
 constants.names.push($$[$0])
break;
case 38:
 constants.types.push($$[$0]);constants.typeIndex.push(constants.names.length);
break;
case 43:
predicates.push(new Predicate($$[$0-2],$$[$0-1], true));
break;
case 44:
predicates.push(new Predicate($$[$0-3],$$[$0-2], false));
break;
case 45:
 if ($$[$0]!=null) {
      this.$ = [$$[$0-1]].concat($$[$0]);
    } else {
      this.$=[$$[$0-1]]
    };
  
break;
case 47:
this.$ = new Argument($$[$0], "", "");
break;
case 48:
this.$ = new Argument($$[$0-2], $$[$0], "");
break;
case 49:
this.$ = new Argument("", "", $$[$0]);
break;
case 50:
actionList.push(new Action($$[$0-3],$$[$0-2],$$[$0-1]));
break;
case 51:
this.$=$$[$0-1];
break;
case 53:
/* Don't care about predconditions */ 
break;
case 54:
 this.$ = $$[$0];
break;
case 58: case 59:
this.$ = $$[$0-1];
break;
case 60:
this.$=[$$[$0-1]].concat($$[$0]);
break;
case 61:
 this.$=$$[$0];
break;
case 62:
 this.$ = new Predicate($$[$0-2], $$[$0-1], true); 
break;
case 63:
 this.$ = new Predicate($$[$0-3], $$[$0-2], false) 
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{4:[1,4]},{6:[1,5],11:[1,6]},{7:7,23:$V0},{12:9,23:[1,10]},{8:[1,11]},{8:[2,26]},{8:[1,12]},{8:[2,27]},{4:[1,14],9:13},{4:[1,15]},{4:$V1,8:$V2,10:16,14:17,15:18,16:19,17:20},{8:$V3,32:22,33:$V4,34:$V5,35:$V6},{6:[1,26]},{8:[1,27]},{4:$V1,8:$V2,10:28,14:17,15:18,16:19,17:20},{4:$V1,8:$V2,10:29,14:17,15:18,16:19,17:20},{4:$V1,8:$V2,10:30,14:17,15:18,16:19,17:20},{4:$V1,8:$V2,10:31,14:17,15:18,16:19,17:20},{36:[1,32],38:[1,34],40:[1,33],45:[1,35]},{8:[1,36]},{8:$V3,32:37,33:$V4,34:$V5,35:$V6},{8:$V3,32:38,33:$V4,34:$V5,35:$V6},{8:$V3,32:39,33:$V4,34:$V5,35:$V6},{7:40,23:$V0},{1:[2,1]},{8:[2,3]},{8:[2,4]},{8:[2,5]},{8:[2,6]},{23:[1,42],37:41},o($V7,[2,42],{41:43}),o($V8,[2,39],{39:44}),{23:[1,45]},o($V7,[2,28]),{8:[2,29]},{8:[2,30]},{8:[2,31]},{8:[1,46]},{8:[1,47],23:[1,48]},o($V9,[2,35]),{4:[1,51],8:[1,49],42:50},{8:[1,52],23:[1,53],24:[1,54]},{46:55,48:[1,56]},{4:$Va,8:$Vb,13:57,18:58,19:59,20:60},o($V7,[2,33]),o($V9,[2,34]),o($V7,[2,40]),o($V7,[2,41]),{23:[1,62],29:[1,63]},o($V7,[2,36]),o($V8,[2,37]),{23:[1,64]},{47:65,49:66,51:[1,67]},{4:[1,68]},{8:[1,69]},{4:$Va,8:$Vb,13:70,18:58,19:59,20:60},{4:$Va,8:$Vb,13:71,18:58,19:59,20:60},{4:$Va,8:$Vb,13:72,18:58,19:59,20:60},{21:[1,73],25:[1,74],30:[1,75]},{8:$Vc,23:$Vd,28:76,43:77,44:$Ve},{4:[1,80]},o($V8,[2,38]),{8:[1,81]},{8:[2,56],50:82,53:[1,83],54:[1,84]},{4:$Vf,52:85,56:86},{8:$Vc,23:$Vd,28:88,43:77,44:$Ve},{1:[2,2]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:$Vg,22:89,23:$Vh,24:$Vi},{4:[1,93],8:$Vj,26:92},{4:[1,95],8:$Vk,31:94},{8:[1,96]},{8:$Vc,23:$Vd,28:97,43:77,44:$Ve},o($Vl,[2,47],{24:[1,98]}),o($Vl,[2,49]),{23:[1,99]},o($V7,[2,50]),{8:[2,52]},{4:$Vf,52:100,56:86},{4:$Vm,55:101,56:102},o($Vn,[2,53]),o($Vn,[2,57]),{4:$Vm,23:$Vo,27:[1,105],29:$Vp,55:104,56:102},{8:[1,108]},{8:[1,109]},{8:$Vg,22:110,23:$Vh,24:$Vi},{23:[1,111]},{8:[1,112]},{23:$Vq,27:[1,113],29:$Vr},{8:[1,116]},{23:$Vs,27:[1,117],29:$Vt},o($V7,[2,43]),{8:[2,45]},{23:[1,120]},{8:$Vc,23:$Vd,28:121,43:77,44:$Ve},{8:[2,54]},{8:[2,55]},{4:$Vm,8:[2,61],55:122,56:102},{23:$Vo,29:$Vp},{8:[1,123]},{4:$Vm,55:124,56:102},{8:$Vc,23:$Vd,28:125,43:77,44:$Ve},{4:[1,126]},{51:[2,51]},o($V7,[2,12]),{8:[2,13]},{8:$Vg,22:127,23:$Vh,24:$Vi},o($V7,[2,16]),{4:$Vu,8:$Vj,26:128},{8:$Vc,23:$Vd,28:130,43:77,44:$Ve},{4:[1,131]},o($V7,[2,21]),{4:$Vv,8:$Vk,31:132},{8:$Vc,23:$Vd,28:134,43:77,44:$Ve},{4:[1,135]},o($Vl,[2,48]),{8:[1,136]},{8:[2,60]},o($Vn,[2,58]),{8:[1,137]},{8:[1,138]},{23:[1,139]},{8:[2,14]},{8:[1,140]},{23:$Vq,29:$Vr},{8:[1,141]},{23:[1,142]},{8:[1,143]},{23:$Vs,29:$Vt},{8:[1,144]},{23:[1,145]},{8:[1,146]},o($Vn,[2,59]),o($Vw,[2,62]),{8:$Vc,23:$Vd,28:147,43:77,44:$Ve},{8:[1,148]},{4:$Vu,8:$Vj,26:149},{8:$Vc,23:$Vd,28:150,43:77,44:$Ve},{8:[1,151]},{4:$Vv,8:$Vk,31:152},{8:$Vc,23:$Vd,28:153,43:77,44:$Ve},o($V7,[2,44]),{8:[1,154]},o($V7,[2,17]),{8:[2,18]},{8:[1,155]},o($V7,[2,22]),{8:[2,23]},{8:[1,156]},{8:[1,157]},{8:[1,158]},{8:[1,159]},o($Vw,[2,63]),{4:$Vu,8:$Vj,26:160},{4:$Vv,8:$Vk,31:161},{8:[2,19]},{8:[2,24]}],
defaultActions: {8:[2,26],10:[2,27],27:[2,1],28:[2,3],29:[2,4],30:[2,5],31:[2,6],37:[2,29],38:[2,30],39:[2,31],69:[2,2],70:[2,8],71:[2,9],72:[2,10],82:[2,52],97:[2,45],100:[2,54],101:[2,55],108:[2,51],110:[2,13],122:[2,60],127:[2,14],149:[2,18],152:[2,23],160:[2,19],161:[2,24]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


var requirements = [];
var types = [];
var parameters = [];

/*list of constants followed by a list of types followed by where in the list
of constants the type was denoted (so I can attach types to constants at a
later stage )*/

function Constant(names, types, typeIndex){
  this.names = names;
  this.types = types;
  this.typeIndex = typeIndex;
}

var constants = new Constant([], [], []);
var objects = new Constant([],[],[]);

function Argument(name, type, value){
  this.name = name;
  this.type = type;
  this.value = value;
};

/*arguments may be typed*/
function Predicate(name, arguments,truthiness){
  this.name = name;
  this.arguments = arguments;
  this.truthiness = truthiness;
};

var predicates = [];
var startPredicates = [];
var goalPredicates = [];

function Action(name, parameters, effects){
  this.name = name;
  this.parameters = parameters;
  this.effects = effects;
}

var actionList = [];

function Effect(effectlist) {
  this.effectlist = effectlist;
}

function Variable(name, type) {
  this.name = name;
  this.type = type;
}
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: /* ignore non animation comments */
break;
case 1: return 6;
break;
case 2: return 5;
break;
case 3: return 11;
break;
case 4: return 33;
break;
case 5: return 35;
break;
case 6: return 34;
break;
case 7: return 6;
break;
case 8: return 36;
break;
case 9: return 40;
break;
case 10: return 38;
break;
case 11: return 48;
break;
case 12: return 45;
break;
case 13: return 51;
break;
case 14: return 53;
break;
case 15: return 54;
break;
case 16: return 21;
break;
case 17: return 25;
break;
case 18: return 25;
break;
case 19: return 30;
break;
case 20: return 27;
break;
case 21: return 27;
break;
case 22: return 29;
break;
case 23: return 'WHEN';
break;
case 24:
break;
case 25: return 4; 
break;
case 26: return 8; 
break;
case 27:
break;
case 28:
break;
case 29:
break;
case 30:return 24;
break;
case 31:return 44;
break;
case 32:return 23; 
break;
}
},
rules: [/^(?:[;;].*)/,/^(?:domain\b)/,/^(?:define\b)/,/^(?:problem\b)/,/^(?::requirements\b)/,/^(?::strips\b)/,/^(?::typing\b)/,/^(?::domain\b)/,/^(?::types\b)/,/^(?::predicates\b)/,/^(?::constants\b)/,/^(?::parameters\b)/,/^(?::action\b)/,/^(?::precondition\b)/,/^(?::effect\b)/,/^(?::observe\b)/,/^(?::objects\b)/,/^(?::init\b)/,/^(?::INIT\b)/,/^(?::goal\b)/,/^(?:and\b)/,/^(?:AND\b)/,/^(?:not\b)/,/^(?:when\b)/,/^(?:.*$)/,/^(?:[(])/,/^(?:[)])/,/^(?:[\t ])/,/^(?:[\n])/,/^(?:[\r])/,/^(?:[\-])/,/^(?:(([?])+(-|([a-zA-Z_])|([0-9]))*))/,/^(?:(([a-zA-Z_])+(-|([a-zA-Z_])|([0-9]))*))/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = PDDL_Parser;
exports.Parser = PDDL_Parser.Parser;
exports.parse = function () { return PDDL_Parser.parse.apply(PDDL_Parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}