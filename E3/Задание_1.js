let array = [123, 98423, 'akjef', 'фуграшг', 29843, 390, '948jnr', NaN, 0, '.', ]

function countElements(arr){
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    arr.forEach(item => {
        if (typeof item === 'number') {
            if (item === 0) {
                zeroCount++;
            } else if (item % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    });

    console.log(`Количество нулевых элементов: ${zeroCount}`);
    console.log(`Количество чётных элементов: ${evenCount}`);
    console.log(`Количество нечётных элементов: ${oddCount}`);
}

countElements(array)