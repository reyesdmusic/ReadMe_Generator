
const inquirer = require("inquirer");
const axios = require("axios");
const createReadme = require("./createReadme.js");

let gitHubName = "";
let gitPhotoUrl = "";

function newUser(userName, gitPhotoUrl, userEmail, projectTitle, projectDescription, installationMethod, usageInfo, licenseInfo, userContributing, userTests, userVersion) {
    this.userName = userName;
    this.gitPhotoUrl = gitPhotoUrl;
    this.userEmail = userEmail;
    this.projectTitle = projectTitle;
    this.projectDescription = projectDescription;
    this.installationMethod = installationMethod;
    this.usageInfo = usageInfo;
    this.licenseInfo = licenseInfo;
    this.userContributing = userContributing;
    this.userTests = userTests;
    this.userVersion = userVersion;
}


function getUserInfo() {
    inquirer.prompt(
     [{
        type: "input",
        message: "What is your GitHub username?",
        name: "userName"
      }]
    )
    .then((response) =>  {

      getUserGitHub(response.userName);
    
      })
      .catch(function(err) {
        return console.log(err);
      })
      .then(getOtherInfo);
    }

    function printReadMe(thisNewUser) {
        console.log(thisNewUser.userName);
        console.log(thisNewUser.userEmail);
    }

    function getUserGitHub(userName) {
        const queryUrl = `https://api.github.com/users/${userName}`;
        axios.get(queryUrl)
          .then(function (res) {
            gitHubName = res.data.login;
            gitPhotoUrl = res.data.avatar_url;
          })
          .catch(function(err) { return console.log("Username not found, enter control C and run application")});
        }
    
    getUserInfo(); 

    function getOtherInfo() {
        inquirer.prompt(
    [{
          type: "input",
          message: "Enter your email:",
          name: "userEmail"
      },
    {
        type: "input",
        message: "Enter project title:",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Write a short description of your project:",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "Describe the installation method:",
        name: "installationMethod"
    },
    {
        type: "input",
        message: "Enter usage info:",
        name: "usageInfo"
    },
    {
        type: "input",
        message: "Enter license information:",
        name: "licenseInfo"
    },
    {
        type: "Contributing",
        message: "Enter Contributing Information:",
        name: "userContributing"
    },
    {
        type: "input",
        message: "Tests:",
        name: "userTests"
    },
    {
        type: "input",
        message: "Enter Version Info:",
        name: "userVersion"
    }])
    .then((response) =>  {

        let readMeData = new newUser(gitHubName, gitPhotoUrl, response.userEmail, response.projectTitle, response.projectDescription, response.installationMethod, response.usageInfo, response.licenseInfo, response.userContributing, response.userTests, response.userVersion);

        createReadme(readMeData);

       
      
        })
        .catch(function(err) {
          console.log(err);
        });
}
    




 




    