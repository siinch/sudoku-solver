function generate(data, length) {
  for (let i = 0; i < Math.pow(data.length, length); i++){ // alle muligheder
    let string = "";
    for (let j = 0; j < length; j++) {
      string += data[Math.floor(i/Math.pow(data.length,j))%data.length];
    }
      console.log(i, string);
  }
}
generate(["a", "b", "c"], 3);
