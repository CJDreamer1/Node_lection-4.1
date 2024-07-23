const parseGender = (gender) => {
  const isString = typeof gender === "string"; //перевірка чи являється значення рядком
  if (!isString) return;
  const isGender = (gender) => ["male", "female", "other"].includes(gender); //це дозволений список значень ["male", "female", "other"]. Значення повернеться, якщо воно буде валідним(тобтовідповідати одному із трьох варіантів) якзо значення буде не валідним - undefined

  if (isGender(gender)) return gender;
};

const parseNumber = (number) => {
  const isString = typeof number === "string"; //перевірка чи являється значення рядком, який можна перетворити в число
  if (!isString) return;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    // спробує перетворити цю стрічку на число. Якщо вдається - вийде число, якщо вийде NaN (означакє що це не може бути перетворено на число) - поверне undefined
    return;
  }

  return parsedNumber;
};

export const parseFilterParams = (query) => {
  //створення об`єкту пошуку, за яким і буде відбуватись пошук по базі даних
  const { gender, maxAge, minAge, maxAvgMark, minAvgMark } = query;

  const parsedGender = parseGender(gender);
  const parsedMaxAge = parseNumber(maxAge);
  const parsedMinAge = parseNumber(minAge);
  const parsedMaxAvgMark = parseNumber(maxAvgMark);
  const parsedMinAvgMark = parseNumber(minAvgMark);

  return {
    gender: parsedGender,
    maxAge: parsedMaxAge,
    minAge: parsedMinAge,
    maxAvgMark: parsedMaxAvgMark,
    minAvgMark: parsedMinAvgMark,
  };
};
