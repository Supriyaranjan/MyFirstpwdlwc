import { LightningElement, api } from 'lwc';

export default class Calchistory extends LightningElement {

    @api
    operation;

    @api
    number1;

    @api
    number2;

    @api
    result;
}