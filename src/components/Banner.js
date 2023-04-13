import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { listarSliderRequest } from '../store/modules/SliderItem/actions';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const BannerArea = styled.div`
    width: 100%;
    
`;

const BannerSlider = styled(Slider)`
    height: calc(100vh - 100px);
`

const BannerImage = styled.div`
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BannerAnchor = styled.a`
    display: flex;
    width: 90%;
    height: 100%;    
    justify-content: center;
    align-items: center;
`

const BannerWrapper = ({ loading, sliders, fetchSlider }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const [sliderList, setSliderList] = useState(sliders);

    useEffect(() => {
        fetchSlider();
        setSliderList(sliders);
    }, [sliders, fetchSlider]);



    return (
        <BannerArea >
            <BannerSlider {...settings} >
                {sliderList?.map((slider, index) =>
                (
                    <BannerImage imageUrl={`http://localhost:3001/images/${slider.url}`}>
                        {slider.link &&
                            <BannerAnchor href={`${slider.link}`} target='_blank' rel='noreferrer'>

                                {slider.descricao &&
                                    <p>{slider.descricao}</p>
                                }
                            </BannerAnchor>
                        }


                    </BannerImage>
                )
                )}
            </BannerSlider>

        </BannerArea>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.slider.loading,
        sliders: state.slider.slider,
        error: state.slider.error
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchSlider: () => dispatch(listarSliderRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerWrapper);
