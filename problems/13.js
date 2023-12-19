/**
 * Problem 15: Ternary Operator
 * 
 * Given a grade, return "Pass" if it is at least 60 or fail if it is below 60.
 * Use a ternary operator.
 * 
 * @example 79 -> "Pass"
 * @example 54 -> "Fail"
*/
function problem(grade) {
    let score;
    score = grade >= 60 ? "Pass" : "Fail";
    return score;
}

const tests = [
    [79, "Pass"],
    [54, "Fail"],
    [60, "Pass"],
    [100, "Pass"],
    [0, "Fail"]
]

module.exports = {problem, tests};