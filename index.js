
//Dependencies. CreateReadme.js exports the method that generates the README.md.

const inquirer = require("inquirer");
const axios = require("axios");
const createReadme = require("./createReadme.js");

//These two variables will later be assigned the user's GitHub login name and Github avatar photo url returned from API call.

let gitHubName = "";
let gitPhotoUrl = "";

//newUser constructor is the template for all the unique data that will then be used in the final README.

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

//getUserInfo first prompts user for the username, it then runs getUserGitHub which checks if that login exists in the github API, and finally, it runs getOtherInfo which collects the remaining user-provided data for the final README.md.

getUserInfo(); 

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

  //using info provided in the first prompt, getUserGitHub searches the github API and returns the username and avatar photo, assigning the data to the variables declared above. If the search is unsuccessful, an error message appears.

  function getUserGitHub(userName) {
    const queryUrl = `https://api.github.com/users/${userName}`;
    axios.get(queryUrl)
          .then(function (res) {
            gitHubName = res.data.login;
            gitPhotoUrl = res.data.avatar_url;
          })
          .catch(function(err) { return console.log('Username not found, enter "control C" and then run "node index.js"')});
        }

    //After collecting Github info, the user is prompted for the remaining data. Then a new object is created using the newUser constructor and the data acquired. That object is then passed into the createReadme method, which uses its info to create a unique README.md 

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
        message: "Enter license type:",
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
        message: "Enter Version Number:",
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
    




 




    