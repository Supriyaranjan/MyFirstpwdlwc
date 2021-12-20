trigger ContactTrigger on Contact (before insert) {
    switch on trigger.operationType {
        when BEFORE_INSERT { 
            
            ContactHandler.conInsertPrevent( Trigger.new);
            
        }
        when BEFORE_UPDATE { 
        }
        when BEFORE_DELETE { 
            
        }
        when AFTER_INSERT { 
        }
        when AFTER_UPDATE {
        }
        when AFTER_DELETE { 
        }
        when AFTER_UNDELETE {
            
        }
    }


    }