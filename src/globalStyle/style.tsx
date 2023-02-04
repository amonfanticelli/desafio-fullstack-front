import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
  
  --color-grey-2:rgba(52, 59, 65, 1);
  --color-grey-1:rgba(134, 142, 150, 1);
  --color-black:rgba(0, 0, 0, 1);
  --color-white:rgba(255, 255, 255, 1) ;
  --color-red: rgba(255, 0, 0, 1);
  --color-green: rgba(46, 204, 113, 1);
  
  
  /* Feedback Palette */
  --color-sucess:rgba(63, 232, 100, 1); 
  --color-negative:rgba(232, 63, 91, 1); 

  /* Font */
  --font-inter:'Inter', sans-serif;
  --font-sedgwick:'Sedgwick Ave Display', cursive;
  /* Examples */
  /* var(--color-blue) */
  /* var(--font-bangers) */

}

*,
*::after,
*::before {
  box-sizing: border-box;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
button,
select,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
button{
  cursor: pointer;
}
a {
  text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  font-family: var(--font-inter);
  line-height: 1;
  /* background-color: var(--color-black); */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0
}

`;
