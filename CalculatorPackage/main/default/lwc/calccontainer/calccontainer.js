import { LightningElement, track } from 'lwc';

export default class Calccontainer extends LightningElement {
    
     @track
     myOperationHistory = [];

     handleAddHistory(event)
     {
         let operationHistory = event.detail;

         this.myOperationHistory.push(operationHistory);
     }

}