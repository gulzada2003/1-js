let count = 0

const updateCount = () => {
    const countTag = document.getElementById("count")
    countTag.innerText = count
}

updateCount()


const plusCount = () => {
    count++; 
    updateCount();
}

const minusCount = () => {
    count--;
    updateCount();
}

const plusOrMinus = (operation) => {
    operation === "plus" ? count ++ : operation === "minus" ? count -- : count = 0;
    updateCount()
}
