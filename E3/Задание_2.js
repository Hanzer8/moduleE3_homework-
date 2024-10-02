function isSimple(myNomber){
    if (myNomber < 2) {
        return "Число должно быть больше 1.";
    }
    if (myNomber > 1000) {
        return "Введите число НЕ больше 1000!";
    }
    for (let i = 2; i <= Math.sqrt(myNomber); i++) {
        if (myNomber % i === 0) {
            return "Число не является простым.";
        }
    }
    return "Число простое.";
}

const C = isSimple(3, 5)
console.log(C)