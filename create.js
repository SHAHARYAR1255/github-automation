const octikit = require("@octokit/rest");
require("dotenv").config();

//authorization
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

};



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