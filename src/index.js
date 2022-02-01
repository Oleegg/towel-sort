
// You should implement your task here.

module.exports = function towelSort (matrix) {
      if (!matrix || matrix.length < 1) return []
    const x = []
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            x.push(matrix[i])
        } else {
            x.push(matrix[i].reverse())
        }
    }
    let y = []
    for (let i = 0; i < x.length; i++) {
        for (let k = 0; k < x[i].length; k++) {
            y.push(x[i][k]);
        }
    }
    return y
}
