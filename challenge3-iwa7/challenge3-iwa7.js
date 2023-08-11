const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394.";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line
const owedCalc = function (balance) {
	const to_number = Math.abs(Number(balance));
	const currency_type = { style: "currency", currency: "ZAR" };
	const to_currency = to_number.toLocaleString("ZA", currency_type);
	return to_currency.replace(",", ".");
};

const owed = owedCalc(Number(leoBalance) + Number(sarahBalance));
const leo = `${leoName} ${leoSurname.trim()} (Owed: ${owedCalc(leoBalance)})`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: ${owedCalc(
	sarahBalance
)})`;
const total = `Total amount owed: ${owed}`;
const result = `
${leo}  
${sarah}

${divider} 
  ${total} 
${divider}
`;

console.log(result);
