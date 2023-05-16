
console.log(Array.from({length : 26}).map((__,index) => String.fromCharCode(index + 'a'.charCodeAt(0)))
.map(s => `<div>${s}<\div>`).join(''));