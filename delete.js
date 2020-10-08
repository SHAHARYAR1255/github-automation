const { request } = require("@octokit/request");
const octikit = require("@octokit/rest");
require("dotenv").config();

// const requestWithAuth= request.defaults({
//     headers: {
//       authorization: "token 39c267b53575c238f55d6cae0f19d054f8654636",
//     },
//   });


//   const res = async () =>{
//     const result = await requestWithAuth("GET /user");
//     // console.log(result);      
//   }
//   res();

const clientWithAuth = new octikit({
    auth : process.env.TOKEN
});

// // //create new repo
// clientWithAuth.repos.createForAuthenticatedUser({
//     name : "creare"
// });

//delete repo 

clientWithAuth.repos.delete({
    owner : process.env.USERNAME,
    repo: "oye bsdk"

}).then(data =>{
    console.log('deleted');

}).catch(err =>{
    console.log(err);
    
});