import { LightningElement , track} from 'lwc';
import GetAccounts from "@salesforce/apex/WebController.GetAccounts";

export default class Accountsearch extends LightningElement {

@track
inputText;

@track
myAccounts;

nameChange(event){
    this.inputText = event.target.value;
}

getAccounts(){
    GetAccounts({accountName: this.inputText})
    .then((result) => {
        this.myAccounts = result;
      })
      .catch((error) => {
        this.error = error;
      });

}


}