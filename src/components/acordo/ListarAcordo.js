// ListarAcordo.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarAcordoRequest, listarAcordoRequest, updateAcordoRequest } from '../../store/modules/Acordo/actions'
import { Button, Card, Container, Form, Image, Input, Label } from './styled'

const API_URL = process.env.REACT_APP_URL_API;

const ListarAcordo = ({ loading, acordos, error, fetchAcordo, criarAcordo, updateAcordo }) => {
  const formEmpty = {
    id: '',
    url: '',
    nome: '',
  }
  const [acordoSelected, setAcordoSelected] = useState(formEmpty);
  const [acordosList, setAcordosList] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: acordoSelected
  });


  useEffect(() => {
    fetchAcordo()
    setAcordosList(acordos);
  }, [acordos]);

  useEffect(() => {
    reset({...acordoSelected});
  }, [acordoSelected])


  const handleSelectAcordo = (index) => {
    setAcordoSelected(acordos[index]);

  }

  const handleClearAcordo = () => {
    setAcordoSelected({...formEmpty})
  }

  const handleDeleteAcordo = (index) => {
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("acordoFile", data.acordoFile[0]);
    formData.append('acordo', JSON.stringify(data));

    if (data.id && data.id > 0) {
      updateAcordo(data.id, formData);

    } else {
      criarAcordo(formData);
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
        <Input type='file' name='acordoFile' {...register('acordoFile', { required: false })} />
        {errors.acordoFile && <span>Campo obrigatório</span>}
        {acordoSelected?.url &&
          <a href={`${API_URL}/images/${acordoSelected.url}`} target="_blank"> Arquivo </a>
        }
        
        <Label>Nome</Label>
        <Input
          {...register('nome', { required: true })}
        />
        {errors.nome && <span>Campo obrigatório</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearAcordo}>Limpar</Button>
      </Form>
      <Container>
        {acordosList?.map((acordo, index) => (
          <Card key={acordo.id} onClick={() => { handleSelectAcordo(index) }} >
            <h3>{acordo.nome}</h3>            
            <button onClick={() => { handleDeleteAcordo(index) }}>Delete</button>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.acordo.loading,
    acordos: state.acordo.acordo,
    error: state.acordo.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAcordo: () => dispatch(listarAcordoRequest()),
    criarAcordo: (acordo) => dispatch(criarAcordoRequest(acordo)),
    updateAcordo: (id, acordo) => dispatch(updateAcordoRequest(id, acordo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarAcordo)
