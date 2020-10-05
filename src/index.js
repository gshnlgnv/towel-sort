// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!(Array.isArray(matrix)) || matrix.length === 0) {
        return [];
    } else {
        let newArr = matrix.map((elem, index) => {
            if (index % 2 !== 0) {
                return elem.reverse();
            } else {
                return elem;
            }
        });
        return newArr.flat(1);
    }
};
