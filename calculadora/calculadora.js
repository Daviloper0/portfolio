class Buttons {
    constructor () {
        document.querySelectorAll('.button').forEach(element => {
            element.addEventListener('click', () => {
                this._getFunctionOf(element.id)
            })
            this[`_${element.id}`] = element
        });
        this[`_number-0`] = document.querySelector('#number-0')
        this[`_number-0`].addEventListener('click', () => {
            this._getFunctionOf('number-0')
        });
    }

    _getFunctionOf(elementId) {
        if (this.isElementNumber(elementId)) return this.addNumberToVisor(elementId)
        
        const functionsByElements = {
            'allclear': this.allClear(),
            'plusminus': '',
            'percentage': '',
            'divide': '',
            'multiply': '',
            'subtract': '',
            'sum': '',
            'equals': '',
        }
        functionsByElements[elementId]
    }
    addNumberToVisor(number) {
        this.removeAllClear()
        return addVisor(this.getValueFrom(number))
    }

    getValueFrom(elementId) {
        return this[`_${elementId}`].textContent
    }

    isElementNumber(elementId) {
        return elementId.startsWith('number-')
    }

    allClear() {
        this.setAllClear()
        return setVisor(0);
    }
    removeAllClear() {
        document.querySelector('#allclear').innerHTML = 'C'
    }
    setAllClear() {
        document.querySelector('#allclear').innerHTML = 'AC'
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

const buttons = new Buttons();

