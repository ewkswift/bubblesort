function min(a,b) {
    if (typeof (a) === 'number') {
        return Math.min(a, b)
    }
    else if (Array.isArray(a)) {
        return Math.min(...a)
    } else if (typeof (a) === 'object' && typeof (b) === 'object') {
        let arr = Object.values(a)
        let arr2 = Object.values(b)
        return Math.min(...arr, ...arr2)
    }
    else if (typeof (a) === 'object') {
        let arr = Object.values(a)
        let ar = Math.min(...arr)
        return ar
    }
}
console.log(
    min(1, 2),
    min([1, 2]),
    min({ a: 21, b: 55 }),
    min({ a: 10, b: 9 }, { a: 3, b: 22 })
);




// Оптимизированная реализация алгоритма пузырьковой сортировки

function bubbleSort(arr) {

    let i, j;

    let len = arr.length;


    let fake = false;

    for (i = 0; i < len; i++) {

        fake = false;

        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                fake = true;
            }
        }

        // IF no two elements were swapped
        // by inner loop, then break 
        if (!fake) {
            break;
        }
    }

    //Выведите массив
    console.log(arr)
}

let arr = [243, 45, 23, 356, 3, 5346, 35, 5];
// позвать функсцию пузырьковая сортировка

bubbleSort(arr)