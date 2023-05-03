// ListarConfederado.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarConfederadoRequest, deleteConfederadoRequest, listarConfederadoRequest, updateConfederadoRequest } from '../../store/modules/Confederado/actions'
import { Button, Card, Container, Form, Image, Input, Label } from './styled'
import Modal from '../Modal';
import { showConfirmation } from '../../store/modules/Confirmation/actions';
import { FaTrash } from 'react-icons/fa';

const API_URL = process.env.REACT_APP_URL_API;

const ListarConfederado = ({ loading,
  confederados,
  error,
  fetchConfederado,
  criarConfederado,
  updateConfederado,
  deleteConfederado, confirmacao }) => {
  const formEmpty = {
    id: '',
    url: '',
    nome: '',
    link: '',
  }
  const [confederadoSelected, setConfederadoSelected] = useState(formEmpty);
  const [confederadosState, setConfederadosState] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: confederadoSelected
  });


  useEffect(() => {
    fetchConfederado()
  }, []);

  useEffect(() => {
    reset({ ...confederadoSelected });
  }, [reset, confederadoSelected])

  useEffect(() => {
    setConfederadosState(confederados)
  }, [confederados]);

  const handleSelectConfederado = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setConfederadoSelected(confederados[index]);
    return false;

  }

  const handleClearConfederado = () => {
    setConfederadoSelected({ ...formEmpty })
  }

  const handleDeleteConfederado = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O FEDERADO?', () => { deleteConfederado(index) });
    return false;
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("confederadoFile", data.confederadoFile[0]);
    formData.append('confederado', JSON.stringify(data));

    if (data.id && data.id > 0) {
      updateConfederado(data.id, formData);
    } else {
      criarConfederado(formData);
    }
    handleClearConfederado();

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
        <Input type='file' name='confederadoFile' {...register('confederadoFile', { required: false })} />
        {errors.confederadoFile && <span>Campo obrigatório</span>}
        {confederadoSelected?.url &&
          <Image src={`${API_URL}/images/${confederadoSelected?.url || null}`} />
        }


        <Label>Nome</Label>
        <Input
          {...register('nome', { required: true })}
        />
        {errors.nome && <span>Campo obrigatório</span>}

        <Label>Link</Label>
        <Input
          {...register('link')}
        />
        {errors.link && <span>Campo obrigatório</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearConfederado}>Limpar</Button>
      </Form>
      <Container>
        {confederadosState?.length > 0 && confederadosState?.map((confederado, index) => (
          <Card key={confederado.id} onClick={(event) => { handleSelectConfederado(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{confederado.nome}</h3>
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteConfederado(event, confederado.id)} style={{ height: '1em', width: '1em' }} />
              </div>
            </div>
            <img src={`${API_URL}/images/${confederado.url}`} style={{ width: 40, height: 40 }} alt='imagem confederados' />
          </Card>
        ))}
      </Container>
    </>

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
    fetchConfederado: () => dispatch(listarConfederadoRequest()),
    criarConfederado: (confederado) => dispatch(criarConfederadoRequest(confederado)),
    updateConfederado: (id, confederado) => dispatch(updateConfederadoRequest(id, confederado)),
    deleteConfederado: (id) => dispatch(deleteConfederadoRequest(id)),
    confirmacao: (title, text, onConfirm) => dispatch(showConfirmation(title, text, onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarConfederado)
