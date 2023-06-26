////task 1

function generateUniqueNumbers(n) {
  const usedNumbers = new Set();

  return () => {
    if (usedNumbers.size === n) {
      return "All numbers were received";
    }

    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * n) + 1;
    } while (usedNumbers.has(randomNumber));

    usedNumbers.add(randomNumber);
    return randomNumber;
  };
}

const generateNumber = generateUniqueNumbers(5);

for (let i = 0; i < 6; i++) {
  console.log(generateNumber());
}

////task 2
function calculateAgeAndMonths(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  const totalYears = today.getFullYear() - birthDate.getFullYear();
  const monthsToday = today.getMonth() - birthDate.getMonth();
  const monthsLeft = (totalYears - 18) * 12 + monthsToday;

  if (totalYears <= 18 && monthsLeft < 0) {
    return "you are not 18 yet";
  } else {
    return `You are 18 years and ${monthsLeft} months old`;
  }
}

console.log(calculateAgeAndMonths("1990/09/30"));
console.log(calculateAgeAndMonths("2005/07/28"));
console.log(calculateAgeAndMonths("2002/04/02"));

//// task 3
function cakes(recipe, availableIngredients) {
  let maxCakes = Infinity;

  for (let ingredient in recipe) {
    if (!availableIngredients.hasOwnProperty(ingredient)) {
      return 0;
    }

    const recipeAmount = recipe[ingredient];
    const availableAmount = availableIngredients[ingredient];

    const possibleCakes = Math.floor(availableAmount / recipeAmount);

    if (possibleCakes < maxCakes) {
      maxCakes = possibleCakes;
    }
  }

  return maxCakes;
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);

console.log(
    cakes(
      { apples: 1, flour: 300, sugar: 500, milk: 200 },
      { apples: 3, flour: 5000, sugar: 1800, milk: 2000, oil: 100 }
    )
  );