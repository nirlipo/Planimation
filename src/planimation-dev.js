var domain_file;
var problem_file;
var plan_file;

/*
****************      LOAD TEST FILES     **********************
*/

$(document).ready(function(){

        $('#inputdomain').on('change', function(e){
            domain_file=this.files[0];
        });

        $('#inputproblem').on('change', function(e){
            problem_file=this.files[0];
          });

        $('#inputplan').on('change', function(e){
            plan_file=this.files[0];
        });

});

function readFile(file, callback){
    var reader = new FileReader();
    reader.onload = callback
    reader.readAsText(file);
}

/*
****************      PARSE LOADED FILES     **********************
*/

/*Parses the loaded plan and returns a list of actions*/
function parseSolution(domain, problem, callback) {
    readFile(plan_file, function(e) {
      try {
        plan=null;
        plan = Plan_Parser.parse(e.target.result);
        console.log(plan);

      } catch (x) {
        console.log(x);
      } finally {callback(domain,problem,plan);}
    });
}

/*Parses the loaded problem file and returns
[objects, startPredicates]
NOTE: Sometimes has problems if the file ends in an RPAREN,
I think the parser misses the EOF token when this is the case, adding a
whitespace character at the end seems to fix it. Could be some weird
CRLF v LF based bug, but I've covered both line endings in the parser*/
function parseProblem(domain, callback) {
      readFile(problem_file, function(e) {
        try {
          problem=null;
          problem = PDDL_Parser.parse(e.target.result);
          console.log(problem);

        } catch (x) {
          console.log(x);
        } finally {return parseSolution(domain,problem,callback);}
      });
}

/*Parses the loaded domain file and returns
[types, constants, predicates, actionList]*/
function parseDomain(callback) {
  readFile(domain_file, function(e) {
    try {
      domain=null;
      domain = PDDL_Parser.parse(e.target.result);
      console.log(domain);

    } catch (x) {
      console.log(x);
    } finally {parseProblem(domain, callback);}
  });
}

/*Shouldmt ne called getInput, this function is passed as a callbasck to
parseDomain becasue FileReader runs ASYNC and I need to ensure files are prased
before the rest of the script is exectured]*/
function getInput(domain,problem,plan) {
  createAnimationObjects(domain,problem,plan);
  var inputSelector = createInputSelector(domain,problem);
  document.getElementById("Window1").style.display="none";
  document.getElementById("Window2").style.display="block";
  $("#inputSelector").append(inputSelector);
  generateInputForm(domain,problem,plan);
  $("#submitInputs").append("<p></p><input id=\"submitInputs\" type=\"button\" "
        + "value=\"Submit Input\" onclick=\"createAnimationObjects();\">");
}

function parseInputFiles() {
  /*
    domain  = [[types], [constants], [predicates], [actionList]]
              types =
              constants = [[names],[typeIndex],[types]]

    problem = [[objects], [startPredicates]]
    plan    = [actions]
  */
    parseDomain(getInput);
}

/*
****************      GENERATE INPUT FORM    **********************
*/
function createInputSelector(domain,problem) {
  var types = domain[0];
  var constants = domain[1];
  var predicates = domain[2];
  var objects = problem[0];

  var itemCell = "<td class=\"item\" onclick=\"selectInput(event);\"";
  var output = "";
  output += "<table id=\"inputTable\"><tbody><tr>"
          + itemCell + ">Global Options</td></tr>";
  //Input form for types
  if(types.length>0){
    output += "<tr><td class=\"itemGroup\">Types</td></tr>";
    for(var i=0; i<types.length; i++){
        output += "<tr>" + itemCell + "data-type=\"type\">"
                + types[i] + "</td></tr>";
    }
  }

  if(constants.names.length>0) {
    output += "<tr><td class=\"itemGroup\">Constants</td></tr>";
    for(var i = 0; i<constants.names.length; i++){
      output += "<tr>" + itemCell + "data-type=\"constant\">"
              + constants.names[i] + "</td></tr>";
    }
  }

  if (objects.names.length>0){
    output += "<tr><td class=\"itemGroup\">Objects</td></tr>";
    for(var i = 0; i<objects.names.length; i++){
      output += "<tr>" + itemCell + "data-type=\"object\">"
              + objects.names[i] + "</td></tr>";
    }
  }

  if(predicates.length>0){
    output += "<tr><td class=\"itemGroup\">Predicates</td></tr>";
    for(var i = 0; i<predicates.length; i++){
      output += "<tr>" + itemCell + "data-type=\"predicate\">"
              + predicates[i].name + "</td></tr>";
    }
  }

  output += "</tbody></table>";
  return output;
}

function SelectedInput(name,type){
  this.name = name;
  this.type = type;
}

var selectedInput = new SelectedInput('', '');

/*This is the function that runs when an item from the list of objects/types
is clicked. It loads the available options into the #inputOptions div*/
function selectInput(e) {
  var name = e.target.innerHTML;
  var type = e.target.getAttribute('data-type');
  console.log(type + " : "  + name);

  var form = "";
  form += "<h1>" + type + "</h1>";
  form += "<h2>" + name + "</h2><p></p>";
  form += generateInputForm(type);

  console.log(form)
  $('#inputOptions').html(form);
  selectedInput.type=type;
  selectedInput.name=name;
}
var globalOptions;
//Creating assosciative arrays to store option inputs for simple,
//fast name based ulookup.
var typeOptions = {};
var objectOptions = {};
var predicateOptions = {};

function createAnimationObjects(domain,problem,plan){
  var types = domain[0];
  var constants = domain[1];
  var predicates = domain[2];
  var objects = problem[0];
  var actions = plan;

  if (types.length>0){
    for (var i =0; i<types.length;i++) {
      typeOptions[types[i]] = new TypeOption(types[i]);
    }

    var typeCounter = 0;
    var type = "";
    for (var i=0;i<constants.names.length;i++) {
      if(i<constants.typeIndex[typeCounter]) {
        type=constants.types[typeCounter];
      } else {
        typeCounter++;
        type=constants.types[typeCounter];
      }
      var name = constants.names[i];
      objectOptions[name] = new ObjectOption(name, type);
    }
    typeCounter=0;
    for (var i=0;i<objects.names.length;i++) {
      if(i<objects.typeIndex[typeCounter]) {
        type=objects.types[typeCounter];
      } else {
        typeCounter++;
        type=objects.types[typeCounter];
      }
      var name = objects.names[i];
      objectOptions[name] = new ObjectOption(name, type);
    }
  } else {
    for (constant in constants.name) {
      objectOptions[constant] = new ObjectOption(constant);
    }
    for (object in objects.name) {
      objectOptions[object] = new ObjectOption(object);
    }
  }

  console.log(typeOptions);
    console.log(objectOptions);
}

function TypeOption(typeName, visible, image ,zplane) {
  this.name=typeName;
  this.visible=visible;
  this.defaultImageURL=image;
  this.zplane=zplane;
}

function GlobalOption(spatialLayout) {
    this.spatialLayout = spatialLayout;
}

function ObjectOption(name, type, visible, image, location, zplane) {
    this.name=name;
    this.type=type;
    this.visible=visible;
    this.image=image;
    this.location=location;
    this.zplane;
}

//NOTE: If constants and objects share the same namespace I'll get rid of this
function ConstantOption(name, type, visible, image, location, zplane) {
    this.name=name;
    this.type=type;
    this.visible=visible;
    this.image=image;
    this.location=location;
    this.zplane;
}

//predicate options apply on conditionals consisting of at most two arguments,
//as well as a (truth)value
function PredicateOption(name, value, argument1, argument2, argumentValue, animation) {
  this.name = name;
  this.value = value;
  this.argument1 = argument1;
  this.argument2 = argument2;
  this.argumentValue = argumentValue;
  this.animation = animation;
}

//parameterS ?
function ActionOption(name, parameter){

}

function generateInputForm(inputtype) {

  //option input format:
  var imageUrlInput = "<tr><td>ImageURL</td><td><textarea name=\"imageURL\" rows=\"1\" cols=\"25\"></textarea></td></tr>";
  var visibilityInput = "<tr><td>Is Visible?</td><td><input name=\"visible\"type=\"checkbox\" checked></td></tr>";
  var positionInput = "<tr><td>Initial Position</td><td><textarea name=\"position\" rows=\"1\" cols=\"25\"></textarea></td></tr>"
  var scaleInput = "<tr><td>Scale</td><td><input name=\"scale\" type=\"number\" step=\"0.01\"></td></tr>"
  var zInput = "<tr><td>Z Ordering</td><td><input name=\"zInput\" type=\"number\"></td></tr>"
  var animationInput
      = "<tr><td>Select an Animation</td><td><select name=\"animation\"><option value=\"animation1\">Animation 1</option>"
      + "<option value=\"animation2\">Animation 2</option>"
      + "<option value=\"animation3\">Animation 3</option></td></tr>"
      ;

  var spatialOptionsInput
      = "<tr><td>Spatial Layout</td><td><select name=\"spatialLayout\"><option value=\"free\">Free</option>"
      + "<option value=\"network\">Network</option>"
      + "<option value=\"grid\">Grid</option></td></tr>"
      ;

  var globalOptionsInput
      = spatialOptionsInput
      ;

  var constantOptions
      = imageUrlInput
      + visibilityInput
      + positionInput
      + scaleInput
      + zInput
      ;

  var predicateOptions
      = imageUrlInput
      + animationInput
      + positionInput
      + scaleInput
      + zInput
      ;

  var typeOptions
      = imageUrlInput
      + visibilityInput
      ;

  var result = "";

      switch (inputtype) {
        case 'type':      result += typeOptions;
                          break;
        case 'object':    result += objectOptions;
                          break;
        case 'constant':  result += constantOptions;
                          break;
        case 'predicate': result += predicateOptions;
                          break;
        default:          result += globalOptions;
                          break;
      }

      return "<table style=\"margin:auto;\">" + result + "</table>"
}
function translate(item, destination, path, relativePosition){
  /*destination can be a set of coordinates or an identifier
  relativePosition is an optional argument (for example, if target is
  an identifier relatePosition might be onTop so the object moves ontop
  of the target position)*/
  /*Path will be a user defined SVG line definition to allow non-linear
   movement*/
}

function animate(item, animation){

}

function scale(item, factor){
  
}
function getInputValues() {
  // if
}
