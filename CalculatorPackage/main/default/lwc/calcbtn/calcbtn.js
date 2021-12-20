import { LightningElement, api } from 'lwc';

export default class Calcbtn extends LightningElement {
    
    @api
    btnname;

    @api
    btntitle;

    handleClick(event) {
        let btnClicked = event.target.label;
        this.dispatchEvent(new CustomEvent('btnclicked', { detail: btnClicked, bubbles: true }));
    }
}