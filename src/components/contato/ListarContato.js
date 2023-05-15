// ListarContato.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarContatoRequest, deleteContatoRequest, listarContatoRequest, updateContatoRequest } from '../../store/modules/Contato/actions'
import { Button, Card, Container, Form, Input, Label, TextArea } from './styled'
import { FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';
import { showConfirmation } from '../../store/modules/Confirmation/actions';
import Modal from '../Modal';

const ListarContato = ({ loading, contatos, error, page, fetchContato, criarContato, updateContato, deleteContato, confirmacao }) => {
  const ativo = 0;
  const formEmpty = {
    id: '',
    nome: '',
    email: '',
    assunto: '',
    telefone: '',
    mensagem: ''
  }
  const [contatoSelected, setContatoSelected] = useState(formEmpty);
  const [contatosState, setContatosState] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: contatoSelected
  });


  useEffect(() => {
    fetchContato(page, ativo)
  }, []);

  useEffect(() => {
    reset({ ...contatoSelected });
  }, [reset, contatoSelected])

  useEffect(() => {
    setContatosState(contatos)
  }, [contatos]);

  const handleSelectContato = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setContatoSelected(contatos[index]);
    return false;
  }

  const handleClearContato = () => {
    setContatoSelected({ ...formEmpty })
  }

  const handleDeleteContato = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O CONTATO?', () => { deleteContato(index) });
    handleClearContato();
  }

  const onSubmit = (data) => {

    if (data.id && data.id > 0) {
      updateContato(data.id, data);

    } else {
      criarContato(data);
    }
    handleClearContato();

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

        <Label>Nome</Label>
        <Input
          {...register('nome', { required: true })}
        />
        {errors.nome && <span>Campo obrigatório</span>}
        <Label>Email</Label>
        <Input
          {...register('email', { required: true })}
        />
        {errors.email && <span>Campo obrigatório</span>}
        <Label>Telefone</Label>
        <Input
          {...register('telefone', { required: true })}
        />
        {errors.telefone && <span>Campo obrigatório</span>}
        <Label>Assunto</Label>
        <Input
          {...register('assunto', { required: true })}
        />
        {errors.assunto && <span>Campo obrigatório</span>}
        <Label>Mensagem</Label>
        <TextArea
          {...register('mensagem', { required: true })}
          rows={10}
        />
        {errors.mensagem && <span>Campo obrigatório</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearContato}>Limpar</Button>
      </Form>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
        {page > 1 &&
          <button
            style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }}
            onClick={() => fetchContato(page - 1, ativo)}>
            <FaChevronLeft size={20} />
          </button>
        }
        <button
          style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }}
          onClick={() => fetchContato(page + 1, ativo)}>
          <FaChevronRight size={20} />
        </button>
      </div>
      <Container>
        {contatosState?.length > 0 && contatosState?.map((contato, index) => (
          <Card key={contato.id} onClick={(event) => { handleSelectContato(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{contato.nome}</h5>
              
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteContato(event, contato.id)} style={{ height: '1em', width: '1em' }} />
              </div>

            </div>
            <h6 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{contato.email}</h6>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.contato.loading,
    contatos: state.contato.contato,
    page: state.contato.page,
    error: state.contato.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContato: (page,ativo) => dispatch(listarContatoRequest(page,ativo)),
    criarContato: (contato) => dispatch(criarContatoRequest(contato)),
    updateContato: (id, contato) => dispatch(updateContatoRequest(id, contato)),
    deleteContato: (id) => dispatch(deleteContatoRequest(id)),
    confirmacao: (title,text,onConfirm) => dispatch(showConfirmation(title,text,onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarContato)
