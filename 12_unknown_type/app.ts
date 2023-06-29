// it will  cause any error because unknown does not switch off the power of ts
let data: unknown;
data = 6;
data = "hello world";

let newvar: string;
newvar = data;

// it will not cause any problem because any switch off the power of ts
// let data: any;
// data = 6;
// data = "hello world";

// let newvar: string;
// newvar = data;
