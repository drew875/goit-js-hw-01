function getElementWidth(content, padding, border) {

    return parseFloat(content) + (parseFloat(padding * 2) + parseFloat(border * 2));
}
console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200