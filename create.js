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


let cmd = process.argv[2];
let folderName = process.argv[3];
//create repository

if (cmd === "create") {
    clientWithAuth.repos.createForAuthenticatedUser({
        name: folderName
    }).then(data =>{
        console.log(`successfully created ${folderName} repository `);
        console.log(`git@github.com:SHAHARYAR1255/${folderName}.git`)
    })

} 
 // //create new repo
// clientWithAuth.repos.createForAuthenticatedUser({
//     name : "creare"
// });

//delete repo 

// clientWithAuth.repos.delete({
//     owner : "SHAHARYAR1255",
//     repo: "oye bsdk"
// }).then(data =>{
//     console.log('deleted')
// }).catch(err =>{
//     console.log(err)
// });

//delete repo
if (cmd === "delete") {
    clientWithAuth.repos.delete({
        owner: "SHAHARYAR1255",
        repo: folderName

    }).then(data => {
        console.log("success fully deleted " + folderName + " repo");
    }).catch(e => {
        console.log(e);
    });
}