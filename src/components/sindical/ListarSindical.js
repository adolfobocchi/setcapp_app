// ListarSindical.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarSindicalRequest, deleteSindicalRequest, listarSindicalRequest, updateSindicalRequest } from '../../store/modules/Sindical/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'
import Modal from '../Modal';
import { FaTrash } from 'react-icons/fa';
import { showConfirmation } from '../../store/modules/Confirmation/actions';
import EditorHtml from '../EditorHtml';

const API_URL = process.env.REACT_APP_URL_API;

const ListarSindical = ({ loading, sindicals, error, fetchSindical, criarSindical, updateSindical, confirmacao, deleteSindical }) => {
  const formEmpty = {
    id: '',
    url: '',
    nome: '',
  }
  const [sindicalSelected, setSindicalSelected] = useState(formEmpty);
  const [sindicalsState, setSindicalsState] = useState([]);
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: sindicalSelected
  });

  useEffect(() => {
    fetchSindical()
  }, []);

  useEffect(() => {
    reset({ ...sindicalSelected });
  }, [reset, sindicalSelected])

  useEffect(() => {
    setSindicalsState(sindicals)
  }, [sindicals]);

  const handleSelectSindical = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setSindicalSelected(sindicals[index]);
    return false;
  }

  const handleClearSindical = () => {
    setSindicalSelected({ ...formEmpty })
  }

  const handleDeleteSindical = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O ACORDO?', () => { deleteSindical(index) });
    return false;
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("sindicalFile", data.sindicalFile[0]);
    formData.append('sindical', JSON.stringify(data));

    if (data.id && data.id > 0) {
      updateSindical(data.id, formData);

    } else {
      criarSindical(formData);
    }
    handleClearSindical();
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

        <Label>Arquivo</Label>
        <Input type='file' name='sindicalFile' {...register('sindicalFile', { required: false })} />
        {errors.sindicalFile && <span>Campo obrigatório</span>}
        {sindicalSelected?.url &&
          <a href={`${API_URL}/images/${sindicalSelected.url}`} target="_blank" rel="noreferrer"> Arquivo </a>
        }

        <Label>Conteudo</Label>
        <EditorHtml name="conteudo" control={control} defaultValue={sindicalSelected?.conteudo} />
        {errors.conteudo && <span>Erro</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearSindical}>Limpar</Button>
      </Form>
      <Container>
        {sindicalsState?.length > 0 && sindicalsState?.map((sindical, index) => (
          <Card key={sindical.id} onClick={(event) => { handleSelectSindical(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{sindical.id}</h3>
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteSindical(event, sindical.id)} style={{ height: '1em', width: '1em' }} />
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
    loading: state.sindical.loading,
    sindicals: state.sindical.sindical,
    error: state.sindical.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSindical: () => dispatch(listarSindicalRequest()),
    criarSindical: (sindical) => dispatch(criarSindicalRequest(sindical)),
    updateSindical: (id, sindical) => dispatch(updateSindicalRequest(id, sindical)),
    deleteSindical: (id) => dispatch(deleteSindicalRequest(id)),
    confirmacao: (title, text, onConfirm) => dispatch(showConfirmation(title, text, onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarSindical)
