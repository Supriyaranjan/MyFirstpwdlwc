import { LightningElement } from 'lwc';

export default class Testcomponent extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}