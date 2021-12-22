public with sharing class WebController {
    public WebController() {

    }
    @AuraEnabled
    public static List<Contact> GetContactWithAcct(String accountId){
        try {

            List<Contact> ctsList = [SELECT Name, Email, AccountId FROM Contact WHERE AccountId=:accountId LIMIT 5];
            return ctsList;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

@AuraEnabled
public static List<Account> GetAccounts(String accountName){
    try {
        System.Debug('I am here Account');
        String nameLike = '%'+ accountName +'%';
        List<Account> accList =[select Id, name, description from Account where name LIKE : nameLike LIMIT 10];
        return accList;

    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}

@AuraEnabled
public static void CreateContactWithAccount(String contactName, String accountId){
    try {
        System.Debug('I am here Contact' + contactName);
        System.Debug('I am here Account' + accountId);
        Contact newCt = new Contact(LastName = contactName);
        System.Debug('I am here contact 2');
        newCt.AccountId = accountId;
        System.Debug('I am here Account in Ct' + newCt.accountId);
 
        insert newCt;
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}

}
