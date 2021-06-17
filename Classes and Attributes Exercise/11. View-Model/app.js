class Textbox {
    constructor(selector,invalidSymbolsRegex){
        this._invalidSymbols = invalidSymbolsRegex;
        this._elements = document.querySelector(selector);
        Array.from(this.elements).forEach(e=> e.addEventListener('change', ()=> this.value = e.value));
        
    }

    get elements(){
        return this._elements;
    }

    get value(){
        return this._elements[0].value;
    }

    set value(val){
        Array.from(this._elements).forEach(e => e.value = val);
    }

    isValid(){
        return !this._invalidSymbols.test(this.elements[0].value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

Array.from(inputs).forEach(e=>e.addEventListener('click',function(){console.log(textbox.value);}));
