import styled from "styled-components";
import {setBackground, setFlex} from '../../styles';
const Hero = styled.header`
min-height: 100vh;
${props => setBackground({img:props.img, color:"rgba(0,0,0,0)"})};
${setFlex({x:"center", y:"center"})};
`;

export default Hero;