import { LightningElement ,api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";

const FIELDS = [
    ACCOUNT_NAME_FIELD,
];
export default class Testlwc extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    
    account;
    get name() {
        return this.account.data.fields.Name.value;
    }
    



}