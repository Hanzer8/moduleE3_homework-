function isSimple(fNomber, sNomber){
    if (fNomber || sNomber < 2) {
        return "Число должно быть больше 1.";
    }
    if (fNomber || sNomber > 1000) {
        return "Введите число НЕ больше 1000!";
    }
    for (let i = 2; i <= Math.sqrt(fNomber); i++) {
        if ((fNomber % i === 0) || (sNomber % i === 0)) {
            return "Число не является простым.";
        }
    }
    return "Число простое.";
}

const C = isSimple(4, 5);
console.log(C);