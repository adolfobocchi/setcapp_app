import React, { useEffect, useState } from 'react';
import { listarSliderRequest } from '../store/modules/SliderItem/actions';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BannerAnchor, BannerArea, BannerImage, BannerSlider, BannerText } from './styled';

const API_URL = process.env.REACT_APP_URL_API;

const BannerWrapper = ({ loading, sliders, fetchSlider }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const [sliderList, setSliderList] = useState(sliders);

    useEffect(() => {
        setSliderList(sliders);
    }, [sliders]);



    return (
        <BannerArea >
            <BannerSlider {...settings} >
                {sliderList?.map((slider, index) =>
                (
                    <BannerImage key={slider.id} imageUrl={`${API_URL}/images/${slider.url}`}>
                        {slider.link &&
                            <BannerAnchor href={`${slider.link}`} target='_blank' rel='noreferrer'>
                                
                                {slider.descricao &&
                                    <BannerText>
                                        {slider.descricao}
                                    </BannerText>
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
