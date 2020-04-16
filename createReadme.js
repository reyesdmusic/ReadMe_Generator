const fs = require("fs");

const createReadMe = function(readMeData) {
  const readMeText =
  `# ${readMeData.projectTitle} README\n
### **created by ${readMeData.userName}** \n
![Photo](${readMeData.gitPhotoUrl})\n
`

fs.writeFile("README.md", readMeText, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("You're README.md has been created!");
});
}


module.exports = createReadMe;
