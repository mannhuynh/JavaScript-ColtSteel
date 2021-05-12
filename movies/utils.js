// debounce function to apply delay, default delay 1000 ms
const debounce = (func, delay=1000) => {
    let timeoutID;
    return (...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout( () => {
            func.apply(null, args);
        }, delay);
    }
}
