import { LightningElement , track} from 'lwc';
import GetAccounts from "@salesforce/apex/WebController.GetAccounts";
import GetContactWithAcct from "@salesforce/apex/WebController.GetContactWithAcct";
import CreateContactWithAccount from "@salesforce/apex/WebController.CreateContactWithAccount"

export default class Accountsearch extends LightningElement {

@track
inputText;

@track
myAccounts;

@track
myContacts;

@track
acctName;

@track
addContactFlag = false;

@track
addContactName;

@track
acctRec;

nameChange(event){
    this.inputText = event.target.value;
}

handleAddContact()
{
     this.acctName = this.acctRec.Id + " " + this.addContactName;
     let acctId = this.acctRec.Id;
     CreateContactWithAccount({contactName: this.addContactName, accountId: acctId})
     .then({
    })
    .catch((error) => {
      console.log(error);
    });
}

contactNameChange(event)
{
  this.addContactName = event.target.value;
}

dispActDetails(event)
{
   let acctIndex = event.target.dataset.index;
   this.acctRec = this.myAccounts[acctIndex];
   this.acctName = this.acctRec.Description;
   this.getContacts(this.acctRec.Id);

   this.addContactFlag = true;

}

getContacts(acctRecId)
{
    GetContactWithAcct({accountId: acctRecId})
    .then((result) => {
        this.myContacts = result;
      })
      .catch((error) => {
        this.error = error;
      });
}

getAccounts(){
  this.addContactFlag = false;
  this.acctRec = [];
    GetAccounts({accountName: this.inputText})
    .then((result) => {
        this.myAccounts = result;
      })
      .catch((error) => {
        this.error = error;
      });

}


}