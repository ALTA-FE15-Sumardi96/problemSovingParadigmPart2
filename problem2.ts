function romanNumerals(value: number): string {
    if (value <= 0 || value >= 4000) {
      throw new Error("Invalid input. Roman numerals are not defined for values less than 1 or greater than 3999.");
    }
  
    const romanValues: { value: number; numeral: string }[] = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];
  
    let result = "";
    let remainingValue = value;
  
    for (const { value: romanValue, numeral } of romanValues) {
      while (remainingValue >= romanValue) {
        result += numeral;
        remainingValue -= romanValue;
      }
    }
  
    return result;
  }
  
  console.log(romanNumerals(6)); // Output: VI
  console.log(romanNumerals(9)); // Output: IX
  console.log(romanNumerals(23)); // Output: XXIII
  console.log(romanNumerals(2021)); // Output: MMXXI
  console.log(romanNumerals(1646)); // Output: MDCXLVI
  