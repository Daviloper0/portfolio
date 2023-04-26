class Calculator {
    constructor () {
        this.buttons = document.querySelectorAll('.button')
        this.number0 = document.querySelector('#number0')
        this.visor = new Visor();
        this.addButtonsToClass();
    }
    addButtonsToClass() {
        this.buttons.forEach(button => {
            this[`${button.id}`] = button;
            this.addEvent(button)
        })
        
        this.number0.addEventListener('click', () => {this.addNumberToVisor(this.number0.id)})
    }
    addEvent(button) {
        button.addEventListener('click', () => {
            if (button.id.startsWith('number')) return this.addNumberToVisor(button.id)
            
            this.runFunction(button.id)
        })
    }
    runFunction(buttonId) {
        const functionsByButtons = {
            'allclear': this.setAllClear(),
            'plusminus': () => {},
            'percentage': () => {},
            'divide': () => {},
            'multiply': () => {},
            'subtract': () => {},
            'sum': () => {},
            'equals': () => {},
        }
        functionsByButtons[buttonId];
    }
    addNumberToVisor(buttonId) {
        this.removeAllClear()
        return this.visor.value = parseInt(this.visor.value + this[`${buttonId}`].textContent)
    }

    removeAllClear() { 
        document.querySelector('#allclear').innerHTML = 'C' 
    }
    
    setAllClear() {
        this.visor.value = 0
        document.querySelector('#allclear').innerHTML = 'AC'
    }
}

class Visor {
    constructor() {
        this._visor = document.querySelector('.visor');
    }
    get value() {
        return this._visor.innerHTML
    }
    set value(value = 0) {
        this._visor.innerHTML = value
    }
}
const buttons = new Calculator();

