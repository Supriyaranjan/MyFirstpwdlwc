import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name"
import ACCOUNT_DESCRIPTION_FIELD from "@salesforce/schema/Account.Description"
import GetContactWithAcct from "@salesforce/apex/WebController.GetContactWithAcct";

const FIELDS = [
    ACCOUNT_NAME_FIELD,
    ACCOUNT_DESCRIPTION_FIELD,
];

export default class Fetchdataex extends LightningElement {
    @api recordId;

    @track myContacts;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    account;

    get name() {
        return this.account.data.fields.Name.value;
    }

    get description() {
        return this.account.data.fields.Description.value;
    }

    getContacts()
    {
        GetContactWithAcct({accountId: this.recordId})
        .then((result) => {
            this.myContacts = result;
          })
          .catch((error) => {
            this.error = error;
          });
    }
}