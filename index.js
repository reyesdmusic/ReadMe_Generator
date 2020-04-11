const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const createReadme = require("./createReadme.js");

function getUserInfo() {
    inquirer.prompt({
        message: "What is your GitHub username?",
        name: "userName"
      })
      .then(function ({ userName }) {
        const gitHubApi = `https://api.github.com/users/${userName}`;
        axios.get(gitHubApi)
      .then(function (userInfo) {
        console.log(userInfo);
        });
      });
    }

    getUserInfo();