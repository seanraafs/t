class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.name = "ValidationError";
  }
}

const validateNumberInput = (a, b, c) => {
  if (typeof a !== "number") {
    throw new ValidationError('Argumen pertama harus number');
  }

  if (typeof b !== "number") {
    throw new ValidationError('Argumen kedua harus number');
  }

  if (typeof c !== "number") {
    throw new ValidationError('Argumen ketiga harus number');
  }

  return { a, b, c };
};

const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(a, b, c);

    if (a === b && b === c) {
      return "Segitiga sama sisi";
    }

    if (a === b || a === c || b === c) {
      return "Segitiga sama kaki";
    }

    return "Segitiga sembarang";
  } catch (error) {
    if (error instanceof ValidationError) {
      return error.message;
    }

    return error.message;
  }
};

console.log(detectTriangle(1, 2, 3));

console.log(detectTriangle(1, 2, 1));

console.log(detectTriangle(3, 3, 3));

console.log(detectTriangle(1, 2, "1"));
