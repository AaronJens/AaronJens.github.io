const setup = () => {
    let months = ['March', 'Jan', 'April', 'Dec'];
    months.sort(compare);
    console.log(months);

    let array1 = [1, 50, 9, 12, 100000];
    array1.sort();
    console.log(array1);

    let result = array1.sort(compare);
    console.log(result);
}

const compare = (a, b) => {
    return a - b;
}

window.addEventListener("load", setup);