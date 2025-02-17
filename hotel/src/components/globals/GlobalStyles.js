import { createGlobalStyle } from 'styled-components'
import { setColor, setFont } from '../../styles';

const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Open+Sans:wght@300;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap');
:root{
    --color:red;
}
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
body{
    font-size:100%;
    color:${setColor.mainBlack};
    background: ${setColor.mainWhite};
    ${setFont.main};   
}
h1{
    font-size:3em; line-height: 1.2;margin-bottom:0.5em;
}
h2{
    font-size:2em;margin-bottom:0.75em;
}
h3{
    font-size:1.5em;line-height: 1;margin-bottom:0.75em;
}
h4{
    font-size:1.2em;line-height: 1.2;margin-bottom:1.25em;font-weight:bold;
}
h5{
    font-size:1em;margin-bottom:1.5em;font-weight:bold;
}
h6{
    font-size:1em;font-weight:bold;
}
p{
    line-height: 1.5rem;
    margin:0 0 1.5 0; 
}
`

export default Globals;