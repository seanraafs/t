const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = "delevopment";

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

const message = (name) => {
  console.log(`Hello ${name}`);
};

message("Sean");
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);
