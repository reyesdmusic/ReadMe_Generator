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
${readMeData.userVersion}

## License <a name="licenseLink"></a>
${readMeData.licenseInfo}


## Contact <a name="contactLink"></a>
![Photo](${readMeData.gitPhotoUrl})
#### Github Username: @${readMeData.userName}
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
