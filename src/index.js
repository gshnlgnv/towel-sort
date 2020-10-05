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


/*
    Метод .flat(), написанный вручную (разворачивает любые массивы в один)

    const newList = [];

    const isArrayChecking = (slovo) => {
        for (let i = 0; i < slovo.length; i++) {
            if (!Array.isArray(slovo[i])) {
                newList.push(slovo[i]);
            } else {
                isArrayChecking(slovo[i]);
            }
        }
        return newList;
    };
    return isArrayChecking(list);
*/

};
