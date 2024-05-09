const getTotalIsles = require('./program1');
const assert = require("assert");


describe("Test cases for finding total number of Islands", function () {

    it(`Returns 1 for [["L","L","L","L","W"],["L","L","W","L","W"],["L","L","W","W","W"],["W","W","W","W","W"]]`, function () {
        const result = getTotalIsles([["L","L","L","L","W"],["L","L","W","L","W"],["L","L","W","W","W"],["W","W","W","W","W"]]);
        assert.equal(result, 1);
    });
    it(`Returns 3 for [["L","L","W","W","W"],["L","L","W","W","W"],["W","W","L","W","W"],["W","W","W","L","L"]]`, function () {
        const result = getTotalIsles([["L","L","W","W","W"],["L","L","W","W","W"],["W","W","L","W","W"],["W","W","W","L","L"]]);
        assert.equal(result, 3);
    });
    it(`Returns 1 for [["W", "W", "W", "W"], ["W", "L", "L", "W"], ["W", "L", "L", "W"], ["W", "W", "W", "W"]]`, function () {
        const result = getTotalIsles([["W", "W", "W", "W"], ["W", "L", "L", "W"], ["W", "L", "L", "W"], ["W", "W", "W", "W"]]);
        assert.equal(result, 1);
    });
});
function getTotalIsles(grid) {
    if (!grid || grid.length === 0) {
        return 0; 
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'W') {
            return;
        }

        grid[row][col] = 'W'; 

        dfs(row + 1, col); 
        dfs(row - 1, col); 
        dfs(row, col + 1); 
        dfs(row, col - 1); 
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L') {
                dfs(i, j);
                count++;
            }
        }
    }

    return count;
}

module.exports = getTotalIsles;

