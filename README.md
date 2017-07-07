# ersatz
 Node Js Mock Server
 
 
 Usage
 - For all the endpoints, there response are defined in Config.js file.
 - All the response files are placed in /app/data , place any json file here!
  
  1.** GET API**

GET API configs:

        
        endpoint:"/getUserDetails/:userId",             // Endpoint
        
        headerRequired:true,                           // Any Authorization Required 
        
        headerKey:"Authorization",                    // Header Param Key
        
        headerValue:"Bearer 123-123-123-123",        // Header Param Value
        
        response:"./app/data/get-data.json"         // Response for this API
        

        app.get(config.get.endpoint,getCallback);    // refers to the endpoint and the callback to be called
