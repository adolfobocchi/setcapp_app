// ListarAntt.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarAnttRequest, listarAnttRequest, updateAnttRequest } from '../../store/modules/Antt/actions'
import { Button, Card, Container, Form, Image, Input, Label } from './styled'

const API_URL = process.env.REACT_APP_URL_API;

const ListarAntt = ({ loading, antts, error, fetchAntt, criarAntt, updateAntt }) => {
  const formEmpty = {
    id: '',
    url: '',
    nome: '',
  }
  const [anttSelected, setAnttSelected] = useState(formEmpty);
  const [anttList, setAnttList] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: anttSelected
  });


  useEffect(() => {
    fetchAntt()
    setAnttList(antts);
  }, [antts]);

  useEffect(() => {
    reset({...anttSelected});
  }, [anttSelected])


  const handleSelectAntt = (index) => {
    setAnttSelected(antts[index]);

  }

  const handleClearAntt = () => {
    setAnttSelected({...formEmpty})
  }

  const handleDeleteAntt = (index) => {
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("anttFile", data.anttFile[0]);
    formData.append('antt', JSON.stringify(data));

    if (data.id && data.id > 0) {
      updateAntt(data.id, formData);

    } else {
      criarAntt(formData);
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
        <Input type='file' name='anttFile' {...register('anttFile', { required: false })} />
        {errors.anttFile && <span>Campo obrigatório</span>}
        {anttSelected?.url &&
          <a href={`${API_URL}/images/${anttSelected.url}`} target="_blank"> Arquivo </a>
        }
        
        <Label>Nome</Label>
        <Input
          {...register('nome', { required: true })}
        />
        {errors.nome && <span>Campo obrigatório</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearAntt}>Limpar</Button>
      </Form>
      <Container>
        {anttList?.map((antt, index) => (
          <Card key={antt.id} onClick={() => { handleSelectAntt(index) }} >
            <h3>{antt.nome}</h3>            
            <button onClick={() => { handleDeleteAntt(index) }}>Delete</button>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.antt.loading,
    antts: state.antt.antt,
    error: state.antt.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAntt: () => dispatch(listarAnttRequest()),
    criarAntt: (antt) => dispatch(criarAnttRequest(antt)),
    updateAntt: (id, antt) => dispatch(updateAnttRequest(id, antt))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarAntt)
