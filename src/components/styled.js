import styled from "styled-components";
import Slider from 'react-slick';

export const HeaderArea = styled.header`
    display: flex;
    flex-direction: column;
    height: 180px;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    width: 100%;
    @media only screen and (max-width: 700px) {
        height: 260px;
    }
    
`

export const HeaderBar = styled.div`
    position: absolute;
    width: 100vw;
    height: auto;
    padding: 4px;
    background-color: #000;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    @media only screen and (max-width: 920px) {
       font-size: 0.9em;
    }
    @media only screen and (max-width: 840px) {
       font-size: 0.8em;
    }
`

export const HeaderContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;
    height: 180px;
`

export const LogoArea = styled.a`
    width: 30%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
`

export const LogoImg = styled.img`
    height: 100%;
    @media only screen and (max-width: 700px) {
        height: 80%;
    }

    @media only screen and (min-width: 500px) {
        height: 60%;
        width: 80%;
    }
`

export const SearchArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    @media only screen and (max-width: 620px) {
        display: none;
    }
`

export const ContatoArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (min-width: 500px) {
        justify-content: space-between;
    }
`


export const BannerArea = styled.section`
    width: 100%;
    z-index: 1;
    
`;

export const BannerSlider = styled(Slider)`
    height: calc(100vh - 300px);
    width: 100%;
    z-index: 1;
`


export const FederadoSlider = styled(Slider)`
    height:100%;
    width: 100%;
    z-index: 1;
    
`

export const BannerImage = styled.div`
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: calc(100vh - 300px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    z-index: 900;
`;

export const BannerAnchor = styled.a`
    display: flex;
    width: 100%;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: center;
    align-items: flex-end;
    text-decoration: none;
    padding-bottom: 60px;
`

export const BannerText = styled.div`
    background-color: #C2F24E;
    color: #FFF;
    padding: 20px;
    font-size: 2em;
`

export const LinkArea = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 1em;
    font-weight: bold;
    
`


export const FaleConosco = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 1em;
    font-weight: bold;
    @media only screen and (max-width: 700px) {
        display: none;
    }
`


export const Menu = styled.div`
    text-decoration: none;
    display: none;
    justify-content: center;
    align-items: center;
    color: #000;
    
    cursor: pointer;
    @media only screen and (max-width: 700px) {
        display: flex;
    }
`

export const LinkRedeSocial = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
`

export const LinkRedeSocialInstagram = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    @media only screen and (max-width: 380px) {
        display: none;
    }
`

export const FormRow = styled.form`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0.5rem;
  height: 40px;
  width: 100%;
`;

export const IconArea = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color} ;
`


export const ServicoCard = styled.a`
    display: flex;
    height: 300px;
    width: calc(50% - 10px);
    background-color: ${props => props.background};
    padding: 8px;
    text-decoration: none;
    color: #000;
    @media only screen and (min-width: 700px) {
        flex-basis: 30%;
    }

    @media only screen and (max-width: 699px) {
        flex-basis: 100%;
    }

`
export const SectionArea = styled.section`
    background-color: ${props => props.background};
    min-height: ${props => props.altura}px;
    height: auto;
    display: flex;
    flex: 1;
    flex-direction: ${props => props.direcao};
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    z-index: 1;
`

export const NoticiaListArea = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
`

export const NoticiaItemlist = styled.li`
    list-style: none;
    height: 80px;
    border-bottom: 2px solid rgba(240,240,240,0.5);
    margin-bottom: 4px;
`

export const NoticiaItemAnchor = styled.a`
    display: flex;
    text-transform: uppercase;
    color: #f00;
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 10px;
    text-decoration: none;
`

export const NoticiaItemData = styled.p`
    font-size: 0.8em;
    font-weight: bold;

`