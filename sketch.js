let list_b = [
    "Jeonghan",
    "Seungcheol"
] // the testing one

let a;
let outcome_orig = [];
let outcome_real = "Who are we mashing together this time?";
let shipsize;
let slider;
//let outcome = text("Who are we mashing together this time?", width*0.4, height/2+150);
function setup() {
  createCanvas(displayWidth, displayHeight*0.7);
  button = createButton('Generate Ship');
  button.position(width*0.45, height/2);
  checkbox = createCheckbox('Selfcest ok?');
  checkbox.position(width*0.43, height/2+80);
  slider = createSlider(2, 12, 2);
  slider.position(width*0.43, height/2+60);
  slider.addClass("sliderStyle")
  label = createP(" ");
  label.position(width*0.435, height/2+20);
  button.mousePressed(shipgen);
  outcome = createP(" ");
  //outcome = text("Who are we mashing together this time?", width*0.4, height/2+150);
  outcome.position(width*0.3, height*0.35);
  outcome.addClass("outcomeStyle")
}

function shipgen() {
  outcome_real = 0;
  outcome_orig = [];
  shipsize = slider.value();
  list_a = [
    "Seungcheol",
    "Jeonghan",
    "Joshua",
    "Junhui",
    "Jihoon",
    "Wonwoo",
    "Soonyoung",
    "Minghao",
    "Seokmin",
    "Mingyu",
    "Seungkwan",
    "Vernon",
    "Chan"
]
  print("start" + list_a.length);
  for (x = 0; x < shipsize; x++) { // removed     a = list_b[floor(random(list_b.length))]; bc its giving the word rather tha value 
    a = floor(random(list_a.length));
    print("a value = " + a);
    if (checkbox.checked() == false) {
      outcome_orig.push(list_a[a]);
      list_a.splice(a, 1);
      print(x + ": " + a + " // " + outcome_orig + " // " + list_a);
    } else {
      outcome_orig.push(list_a[a]);
      print("Else: " + outcome_orig);
    }
  };
  outcome_real = join(outcome_orig, ' x ')
  test_outcome = createP(outcome_real);
}
 
function draw() {
  background('#F7CAC9');
  let sliderval = slider.value();
  label.html("Ship size = " + sliderval)
  textAlign(CENTER);
  outcome.html(outcome_real);
}