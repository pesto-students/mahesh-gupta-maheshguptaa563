let initNumber = -1

const myFunction = (num) => {

    if(num < 2) {
        return num;
    }
    else {
        return myFunction(num-1) + myFunction(num - 2);
    }
}

const initiator = () => {
    if (initNumber <= 5) {
        initNumber = initNumber + 1
        console.log(myFunction(initNumber))
        initiator()
    }
}

initiator()