// ListarAcordo.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarAcordoRequest, deleteAcordoRequest, listarAcordoRequest, updateAcordoRequest } from '../../store/modules/Acordo/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'
import Modal from '../Modal';
import { showConfirmation } from '../../store/modules/Confirmation/actions';
import { FaTrash } from 'react-icons/fa';

const API_URL = process.env.REACT_APP_URL_API;

const ListarAcordo = ({ loading, acordos, error, fetchAcordo, criarAcordo, updateAcordo, deleteAcordo, confirmacao }) => {
  const formEmpty = {
    id: '',
    url: '',
    nome: '',
  }
  const [acordoSelected, setAcordoSelected] = useState(formEmpty);
  const [acordosState, setAcordosState] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: acordoSelected
  });



  useEffect(() => {
    fetchAcordo()
  }, []);

  useEffect(() => {
    reset({ ...acordoSelected });
  }, [reset, acordoSelected])

  useEffect(() => {
    setAcordosState(acordos)
  }, [acordos]);


  const handleSelectAcordo = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setAcordoSelected(acordos[index]);
    return false;

  }

  const handleClearAcordo = () => {
    setAcordoSelected({ ...formEmpty })
  }

  const handleDeleteAcordo = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O ACORDO?', () => { deleteAcordo(index) });
    return false;
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
    handleClearAcordo();

  }

  if (loading) {
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
        <Input type='file' name='acordoFile' {...register('acordoFile', { required: false })} />
        {errors.acordoFile && <span>Campo obrigatório</span>}
        {acordoSelected?.url &&
          <a href={`${API_URL}/images/${acordoSelected.url}`} target="_blank" rel="noreferrer"> Arquivo </a>
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
        {acordosState?.length > 0 && acordosState?.map((acordo, index) => (
          <Card key={acordo.id} onClick={(event) => { handleSelectAcordo(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{acordo.nome}</h3>
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteAcordo(event, acordo.id)} style={{ height: '1em', width: '1em' }} />
              </div>
            </div>
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
    updateAcordo: (id, acordo) => dispatch(updateAcordoRequest(id, acordo)),
    deleteAcordo: (id) => dispatch(deleteAcordoRequest(id)),
    confirmacao: (title, text, onConfirm) => dispatch(showConfirmation(title, text, onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarAcordo)
