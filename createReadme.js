//dependecy.

const fs = require("fs");

//createReadMe takes the readMeData object then declares a variable called readMeText and assigns to it all the text that will be used in the README. All the unique data is provided from the readMeData object declared in index.js. Then, fs.writeFile creates a README.md with the readMeText info and finally, console.logs a success message.

//For the "License" and "Versions" badges, a simple badge template from shields.io is used. Typically, badges like these would take in the github user's name and REPO and update dynamically. Since a REPO is not provided, the badges are created using a template and user-provided data. 

//An additional "Followers" badge appears in the contact section. This badge displays data dynamically, provided from github. This badge only requires the github username.

const createReadMe = function(readMeData) {
  const readMeText =
  `# ${readMeData.projectTitle} README

# Table of contents
1. [Project Description](#descriptionLink)
2. [Installation](#installationLink)
3. [Usage](#usageLink)
4. [Contributing](#contributingLink)
5. [Tests](#testsLink)
6. [Version](#versionLink)
7. [License](#licenseLink)
8. [Contact](#contactLink)


----

## Project Descripton <a name="descriptionLink"></a>
${readMeData.projectDescription}

## Installation <a name="installationLink"></a>
${readMeData.installationMethod}

## Usage <a name="usageLink"></a>
${readMeData.usageInfo}

## Contributing <a name="contributingLink"></a>
${readMeData.userContributing}

## Tests <a name="testsLink"></a>
${readMeData.userTests}


## Version <a name="versionLink"></a>
![Version](https://img.shields.io/badge/Version-${readMeData.userVersion}-f39f37)

## License <a name="licenseLink"></a>
![License](https://img.shields.io/badge/License-${readMeData.licenseInfo}-brightgreen)



## Contact <a name="contactLink"></a>
![Photo](${readMeData.gitPhotoUrl})

![Followers](<https://img.shields.io/github/followers/${readMeData.userName}?style=social>)
#### Github Username: [@${readMeData.userName}](https://www.github.com/${readMeData.userName})
#### Email: ${readMeData.userEmail}
`

fs.writeFile("README.md", readMeText, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("You're README.md has been created!");
});
}


module.exports = createReadMe;
