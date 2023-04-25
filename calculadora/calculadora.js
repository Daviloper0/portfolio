class Buttons {
    
    constructor () {
        document.querySelectorAll('.button').forEach(element => {
            element.addEventListener('click', () => {
                this._getFunctionOf(element.id)
            })
            this[`_${element.id}`] = element
            console.log(element.id)
        });
    }
    _getFunctionOf(elementId) {
        if (this.isElementNumber(elementId)) return this.addNumberToVisor(elementId)
        const functionsByElements = {
            'allclear': '',
            'plusminus': '',
            'percentage': '',
            'divide': '',
            'multiply': '',
            'subtract': '',
            'sum': '',
            'equals': '',
        }
    }
    addNumberToVisor(number) {
        return addVisor(this.getValueFrom(number))
    }
    getValueFrom(elementId) {
        return this[`_${elementId}`].textContent
    }
    isElementNumber(elementId) {
        return elementId.startsWith('number-')
    }
}
function getVisor() {
    return parseInt(document.querySelector('.visor').innerHTML)
}
function addVisor(value) {
    return document.querySelector('.visor').innerHTML = parseInt(getVisor() + value)
}
function setVisor(value = 0) {
    return document.querySelector('.visor').innerHTML = value 
}
function allClear() {
    return setVisor(0);
}
const buttons = new Buttons()
console.log(buttons.getValueFrom('number-7'))