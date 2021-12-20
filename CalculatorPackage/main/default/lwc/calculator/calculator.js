import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    
    @track
    clickedButtonLabel = "";

    @track
    number1;

    @track
    number2;

    @track
    total;

    myOperations = [
        { name: "Add", title:"Addition"},
        { name: "Subtract", title:"Subtraction"},
        { name: "Multiply", title:"Multiplication"},
        { name: "Divide", title:"Division"}
    ];

    handlecalc(event)
    {
        let operation = event.detail;

        let opIndex = event.target.dataset.index;
        console.log("Operation Index clicked: " + opIndex);
        
        if (operation === "Add"){
             this.total = Number(this.number1) + Number(this.number2);
        }
        else if (operation === "Subtract"){
            this.total = Number(this.number1) - Number(this.number2);
        }
        else if (operation === "Multiply"){
            this.total = Number(this.number1) * Number(this.number2);
        }
        else if (operation === "Divide"){
            this.total = Number(this.number1) / Number(this.number2);
        }

        let opHistory = { operation: operation, number1: this.number1, number2: this.number2, result: this.total};

        this.dispatchEvent(new CustomEvent('addhistory', { detail: opHistory, bubbles: true }));
    }
    nameChange(event){

        let numberlabel = event.target.label;
        if (numberlabel === "Number 1"){
            this.number1 = event.target.value;

        }
        else {this.number2 = event.target.value;}
    }



}