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
        String nameLike = '%'+ accountName +'%';
        List<Account> accList =[select Id, name, description from Account where name LIKE : nameLike LIMIT 10];
        return accList;

    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}

}
