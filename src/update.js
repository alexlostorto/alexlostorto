const path = require("path");
const fetch = require("node-fetch");
const fs = require("fs");

WriteReadMe();

const WriteReadMe = async () => {
  //Get ReadMe path
  const ReadMe = path.join(__dirname, "..", "README.md");
  const date = new Date();

  // Text for ReadMe file
  const text = `<div align="center">
  
  [![][logo-url]][repo-url]  
  
  **Flashcards Brought to Life**  
  [ [Try it out ↗︎][repo-url] ]
  
</div>

[![][banner-url]][repo-url]
[![][badges-url]][repo-url]

[logo-url]: https://github.com/alexlostorto/alexlostorto/raw/main/flashi-logo.png
[repo-url]: https://plani.org.uk/
[banner-url]: https://github.com/alexlostorto/alexlostorto/raw/main/flashi-banner.png
[badges-url]: https://github.com/alexlostorto/alexlostorto/raw/main/flashi-specs.png

\`\`\`python
class AboutMe: 
  full_name = "Alex lo Storto" 
  languages = ["GB", "ES"]
  
  def fetch_interests(self): 
    return ["Web development", "Cycling", "Karate", "Photography", "Meeting people!"]

  def fun_fact(self): 
    return "I'm half Italian, half Indonesian!"
    
  def programming_languages(self): 
    return ["python", "javascript", "c#"]
\`\`\`

## 💻 Languages
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) ![PHP](https://img.shields.io/badge/php-777BB4.svg?style=for-the-badge&logo=php&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Sass](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=python&logoColor=white) ![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white) ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white) 

## 🗄️ **Databases**
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-4c4c4c.svg?style=for-the-badge&logo=Firebase&logoColor=#FFCA28)

## 🔨 **Tools**
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white) ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white) ![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white) ![Git](https://img.shields.io/badge/Git-000000.svg?style=for-the-badge&logo=git&logoColor=white) ![ps](https://img.shields.io/badge/powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white)

## ⌨️ **IDEs**
![VSC](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![Replit](https://img.shields.io/badge/Replit-DD1200?style=for-the-badge&logo=Replit&logoColor=white) ![PyCharm](https://img.shields.io/badge/pycharm-97ca00?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green)

## 🌐 Socials
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/alexlostorto/) [![Youtube](https://img.shields.io/badge/Youtube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@alexlostorto) [![Tiktok](https://img.shields.io/badge/Tiktok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@alexlostorto) [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:lostorto.business@gmail.com) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alex-lo-storto-88796a257/) 

<details>
  <summary>
      <b>GitHub Stats</b>
  </summary>
  <p align="center">
    <img height="210" src="https://github-profile-trophy.vercel.app/?username=alexlostorto&theme=vision-friendly-dark&rank=-C,-B" />
    <img height="210" src="https://github-readme-stats-alexlostorto.vercel.app/api/top-langs?username=alexlostorto&count_private=true&langs_count=15&theme=vision-friendly-dark&include_all_commits=true&count_private=true&layout=compact&show"/>
    <img height="210" src="https://gh-md-stats.vercel.app/api?username=alexlostorto&theme=vision-friendly-dark&count_private=true&show_icons=true&include_all_commits=true" />
    <img height="210" src="https://github-readme-streak-stats.herokuapp.com/?user=alexlostorto&theme=vision-friendly-dark" />
  </p>
</details>

  
<!-- Last updated on ${date.toString()} ;-;-->
<i>Last updated on ${date.getDate()}${
    date.getDate() === 1
      ? "st"
      : date.getDate() === 2
      ? "nd"
      : date.getDate() === 3
      ? "rd"
      : "th"
  } ${
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][date.getMonth()]
  } ${date.getFullYear()} using magic</i>`;

  //Saving on readme.md
  fs.writeFileSync(ReadMe, text);
};
