Basic setup :- 

* Starta en npm projekt:- 
    npm init -y 
    npm i node-sass 

Skriver man scripts:- 
   
 "scripts": {
    "start": "node-sass  sass/main.scss css/main.css -w",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  * Sass/main.scss

  
  <h1> Git i projektet </h1>

  * git init
  * Skapade vi en .gitignore fil:- 
      node_modules/ , CSS, .gitingore, package-lock.json

  * Github repo -> mitt projekt 

  * git add . // staging 
  * git commit -m "commit varje steg" 
  * git push origin branchnamn eller main 

  <h1>  css , js och HTML filen: </h1>
  
  main.css -> headtaggen i html filen med link:css element 
  main.js -> headtaggen i html filen med  "< script src="./main.js" defer></ script>" 


https://teamtreehouse.com/ 

Alt. 

https://www.coursera.org/learn/html-css-javascript-for-web-developers/home/week/1



// SASS/SCSS:

 variable,
 nesting
 mixins
 extend/inheritence 
 BEM/ Namngivningskonvention 
 Mapp/folder Structures
****************************