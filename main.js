// assignment
function subject(maths, english, science) {
    var marks = maths + english + science;
    console.log(marks);
}
subject(70, 60, 50);
console.log(subject);
function percentage(totalmarks) {
    var p = totalmarks / 300 * 100;
    return p;
}
var p = percentage(300);
console.log(p);
if (p >= 80) {
    console.log("garde+1");
}
else if (p >= 70) {
    console.log("garde A");
}
else if (p >= 60) {
    console.log("garde B");
}
else {
    console.log("failed");
}
