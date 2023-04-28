import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listarConfederadoRequest } from '../store/modules/Confederado/actions';
import { FederadoSlider, SectionArea } from './styled';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from './Modal';


const API_URL = process.env.REACT_APP_URL_API;


const FederadoCard = styled.a`
    display: flex;
    flex: 1;
    background-color: ${props => props.background};
    padding: 4px;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const FederadoCardIconArea = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FederadoCardImg = styled.img`
    width: 180px;
    height: auto;
`

const Home = ({ loading, confederados, fetchConfederado }) => {
  useEffect(() => {
    fetchConfederado();
  }, [fetchConfederado])

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if(loading) {
    return <Modal />
  }
  return (
    <SectionArea background={'rgba(255,255,255,0.9)'} direcao={'row'} altura={200} >
      <FederadoSlider {...settings}>
        {
          confederados.map((item, index) =>
            <FederadoCard key={item.id} href={`${item.link}`} target='_blank'  >
              <FederadoCardIconArea>
                <FederadoCardImg src={`${API_URL}/images/${item.url}`} />
              </FederadoCardIconArea>
            </FederadoCard>

          )
        }

      </FederadoSlider>
    </SectionArea>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.confederado.loading,
    confederados: state.confederado.confederado,
    error: state.confederado.error
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchConfederado: () => dispatch(listarConfederadoRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)