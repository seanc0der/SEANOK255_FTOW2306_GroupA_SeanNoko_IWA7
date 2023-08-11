// The use of interpolation '${variable or expression}' within a normal string (single/double-quoted);
// Interpolation doesn't work on a normal string, it is a feature only available on a template literal (which uses backticks).
// Moreover the interpolation expression's syntax is incorrect, it should have been '${nickname || firstname}'.
// As the || operator would be considered a string instead of an operator, if this expression was in a template literal.

const nickname = "Timmy";
const firstname = "Timothy";
const greeting_message =
	(nickname || firstname) && `Good Morning, ${nickname || firstname}!`;

console.log(greeting_message || "Good Morning!");
