// ListarSlider.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarSliderRequest, deleteSliderRequest, listarSliderRequest, updateSliderRequest } from '../../store/modules/SliderItem/actions'
import { Button, Card, Container, Form, Image, Input, Label } from './styled'
import Modal from '../Modal';
import { FaTrash } from 'react-icons/fa';
import { showConfirmation } from '../../store/modules/Confirmation/actions';

const API_URL = process.env.REACT_APP_URL_API;

const ListarSlider = ({ loading, sliders, error, fetchSlider, criarSlider, updateSlider, deleteSlider, confirmacao }) => {
  const formEmpty = {
    id: '',
    url: '',
    descricao: '',
    order: '',
    ativo: false,
    link: '',
  }
  const [sliderSelected, setSliderSelected] = useState(formEmpty);
  const [slidersState, setSlidersState] = useState([]);
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
  }, []);

  useEffect(() => {
    reset(sliderSelected);
  }, [reset, sliderSelected])

  useEffect(() => {
    setSlidersState(sliders)
  }, [sliders]);

  const handleSelectSlider = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setSliderSelected(sliders[index]);
    return false;
  }

  const handleDeleteSlider = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O SLIDER?', ()=>{ deleteSlider(index)});
    return false;
  }

  const handleClearSlider = () => {
    setSliderSelected({...formEmpty})
    return false;
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
    handleClearSlider();

  }

  if(loading) {
    return <Modal />
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
        {slidersState?.length > 0 && slidersState?.map((slider, index) => (
          <Card key={slider.id} onClick={(event) => { handleSelectSlider(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{slider.order}</h3>
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteSlider(event, slider.id)} style={{ height: '1em', width: '1em' }} />
              </div>
              </div>
            <p>{slider.descricao}</p>
            <p>{slider.link}</p>
            <p>{slider.ativo}</p>
            <img src={`${API_URL}/images/${slider.url}`} style={{ width: 40, height: 40 }} alt='slider imagem'  />
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
    updateSlider: (id, slider) => dispatch(updateSliderRequest(id, slider)),
    
    deleteSlider: (id) => dispatch(deleteSliderRequest(id)),
    confirmacao: (title,text,onConfirm) => dispatch(showConfirmation(title,text,onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarSlider)
