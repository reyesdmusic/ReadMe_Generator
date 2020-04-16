const fs = require("fs");

const createReadMe = function(readMeData) {
  const readMeText =
  `# ${readMeData.projectTitle} README

# Table of contents
1. [Project Description](#descriptionLink)
2. [Installation](#installationLink)
3. [Usage](#usageLink)
4. [Contributing](#contributingLink)
2. [Tests](#testsLink)
3. [Version](#versionLink)
7. [License](#licenseLink)


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
#### Github Username: [@reyesdmusic](https://www.github.com/${readMeData.userName})
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
