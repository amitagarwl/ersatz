module.exports={
    post:{
        endpoint:"/initiateTxn",
        headerRequired:false,
        headerKey:"Authorization",
        headerValue:"123",
        response:"./app/data/post-data.json"
    },
    get:{
        endpoint:"/getUserDetails/:userId",
        headerRequired:true,
        headerKey:"Authorization",
        headerValue:"Bearer 123-123-123-123",
        response:"./app/data/get-data.json"
    },
    put:{
         endpoint:"/updateDetails/:userId",
         headerRequired:false,
         headerKey:"Authorization",
         headerValue:"Bearer 123-123-123-123",
         response:""
    }

}