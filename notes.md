ideas / todos
figma:
https://www.figma.com/file/sqGzmCr1L1UPpUhwOzn4LK/webDevTestTask?node-id=0%3A1&t=D6qEQCpNN2J8xiTL-1

Breakpoints:
1440
1280
768
480
360
mobile first (360)

technologies: react, ts, tailwindcss, mongodb
? graphQL

Ideas how to implement mobile version: Samsung.com search for sth (resize to mobile)
Get font, font Weight, font size from figma
Create componnet with cart where we define single card
Componnent with cards where we get data from data base and showonly visible part(max should be visible 3)
Level up forms, filters etc

Set default visible vashing mashines to 3
If user clicks button below then add other 3 (setstate)

Use hooks to minimaze app reloading when we get data

Try to implement all code without show more button

Send env variables on notepad

Changing filters remove possible stare from button below

optionals:
**try to make this cool effect as on samsung.com - Washing machines shows slowly when scroll down
**Can we use here graphql to get only 6if user kliks plus maybe get another 6 elements and for other filter as well
**https://www.mongodb.com/developer/products/atlas/graphql-apis-hasura/
**Test that on console.log(maybe first try to do it without graphql)
after installing react app -> found 6 high vulnerabilities
try to remove by running -> npm audit fix --force
https://www.youtube.com/watch?v=VAHkHj3I6Wg
https://create-react-app.dev/docs/adding-typescript/

\*\*vurnelabilities problem still appears possible solluton later
https://stackoverflow.com/questions/71781795/react-npm-inefficient-regular-expression-complexity-in-nth-check

warning: git config --global core.autocrlf false

connection to mongodb docs
https://www.mongodb.com/resources/products/compatibilities/using-typescript-with-mongodb-tutorial?msockid=340a365083cd6d5a0c69239682df6c3f

error types string | undefined not assignable to type string solved by adding exclamation mark:
src/services/database.service.ts
https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
