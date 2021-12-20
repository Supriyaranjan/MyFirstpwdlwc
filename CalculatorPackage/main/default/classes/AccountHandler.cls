public with sharing class AccountHandler {
    public static void preventAccountDeletion(List<Account> acc){
    List<Account> accWithOpp = [Select Id, (select Id, StageName from Opportunities) from Account where Id in :trigger.old];
    
    for(Account a : accWithOpp)
    {
        Opportunity[] oppList = a.Opportunities;
        for(Opportunity ops : oppList)
        {
            if(ops.StageName == 'Closed Won'||ops.StageName=='Closed Lost')
            {
                a.addError('oppertunity associated with this account');
            }
        }
    }
}
}
