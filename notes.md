ideas / todos
figma:
https://www.figma.com/file/sqGzmCr1L1UPpUhwOzn4LK/webDevTestTask?node-id=0%3A1&t=D6qEQCpNN2J8xiTL-1

technologies: react, ts, tailwindcss,

Using Create react app

counting space between selectors:

<!-- (1032 - 249*4)/3 = 12 (but space for each element should be devide by two so 6 for each element)-->

counting paddings inside product[px]:
(603 - 553)/2 = 25
height:

between image and first header:
501 - (200 + 289 ) = 12

padding below header:
73 - 44 = 29

between sections:
152 - (73 + 71) = 8

two padding above can be connected
8+29 = 37

gap for all products:

<!-- (1046 - 338*3) / 2 = 16-->

price in 53,31 zł x 60 rat is not correctly rounded to full price ? let's assume it is ok

padding inside buttons:
width: (150 - 70)/2 = 40
height: (36 - 16)/2 = 8

create component for input (we have 4 similar elements)

###############################################

optionals:

try to add enums instead of "Wszystkie" and other sorting values

Set default visible washing maschines to 3
If user clicks button below then add other 3 (setstate)
Try to implement all code without show more button

Send env variables on notepad

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
