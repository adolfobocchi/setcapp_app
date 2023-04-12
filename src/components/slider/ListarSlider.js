// ListarSlider.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarSliderRequest, listarSliderRequest, updateSliderRequest } from '../../store/modules/SliderItem/actions'
import { Button, Card, Container, Form, Image, Input, Label } from './styled'

const API_URL = 'http://localhost:3001';

const ListarSlider = ({ loading, sliders, error, fetchSlider, criarSlider, updateSlider }) => {
  const formEmpty = {
    id: '',
    url: '',
    descricao: '',
    order: '',
    ativo: false,
    link: '',
  }
  const [sliderSelected, setSliderSelected] = useState(formEmpty);
  const [sliderList, setSliderList] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: sliderSelected
      ? {
        id: sliderSelected.id,
        order: sliderSelected.order,
        descricao: sliderSelected.descricao,
        url: sliderSelected.url,
        link: sliderSelected.link,
        ativo: sliderSelected.ativo,
      }
      : {},
  });

  useEffect(() => {
    fetchSlider()
    setSliderList(sliders)
  }, [sliders]);


  useEffect(() => {
    reset(sliderSelected);
  }, [sliderSelected])

  const handleSelectSlider = (index) => {
    setSliderSelected(sliders[index]);

  }

  const handleDeleteSlider = (index) => {
  }

  const handleClearSlider = () => {
    setSliderSelected({...formEmpty})
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("sliderFile", data.sliderFile[0]);
    formData.append('slider', JSON.stringify(data));

    if (data.id && data.id > 0) {
      updateSlider(data.id, formData);

    } else {
      criarSlider(formData);
    }

  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
        <Input
          hidden
          {...register('id')}
        />

        <Label>Imagem</Label>
        <Input type='file' name='sliderFile' {...register('sliderFile', { required: false })} />
        {errors.logo && <span>Campo obrigatório</span>}
        {sliderSelected?.url &&
          <Image src={`${API_URL}/images/${sliderSelected?.url || null}`} />
        }


        <Label>ordem</Label>
        <Input
          type='number'
          {...register('order', { required: true })}
        />
        {errors.order && <span>Campo obrigatório</span>}

        <Label>Descricao</Label>
        <Input
          {...register('descricao', { required: false })}
        />
        {errors.descricao && <span>Campo obrigatório</span>}

        <Label>Link</Label>
        <Input
          {...register('link', { required: false })}
        />
        {errors.link && <span>Campo obrigatório</span>}

        <Label>Ativo</Label>
        <Input
          type='checkbox'
          {...register('ativo')}
        />
        {errors.ativo && <span>Campo obrigatório</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearSlider}>Limpar</Button>
      </Form>
      <Container>
        {sliderList?.map((slider, index) => (
          <Card key={slider.id} onClick={() => { handleSelectSlider(index) }} >
            <h3>{slider.order}</h3>
            <p>{slider.descricao}</p>
            <p>{slider.link}</p>
            <p>{slider.ativo}</p>
            <img src={`http://localhost:3001/images/${slider.url}`} style={{ width: 40, height: 40 }} />

            <button onClick={() => { handleDeleteSlider(index) }}>Delete</button>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.slider.loading,
    sliders: state.slider.slider,
    error: state.slider.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSlider: () => dispatch(listarSliderRequest()),
    criarSlider: (slider) => dispatch(criarSliderRequest(slider)),
    updateSlider: (id, slider) => dispatch(updateSliderRequest(id, slider))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarSlider)
