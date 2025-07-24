Tab: 4 spaces
No unclosed tag (<img>, <br>) at least use self closing (<img ... />, <br/>)
Component folder name, file name and related files (`*.css`) names in PascalCase
Pages folders making up the structure of the website's urls in kebab-case
Pages files (`*.tsx`, `*.css`) preferably in kebab-case, otherwise snake_case

Avoid `!important` in styling at all times, if you need it, you messed up somewhere else
Refrain from using inline style in JSX/TSX components

Organise your code, keep the CSS close to the markup it affects, avoid spreading spaghetti code.
Make your code modular and single focus. If a component feels like it's doing more than one job, it's probably time to split it into smaller chunks.
Use explicit names for functions, variables and the like. Avoid commenting obvious code, but do comment complex or confusing mechanisms, especially if someone else is going to touch it (someone else might touch it in the future anyways so comment clearly).