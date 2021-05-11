
class Timer{
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick(); 
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }
    tick = () => {
        if (this.getTimeRemain <= 0) {
            this.pause();
        } else {
            this.setTimeRemain = this.getTimeRemain - 1;
        }
    }

    get getTimeRemain() {
        return parseFloat(this.durationInput.value);
    }

    set setTimeRemain(time) {
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
