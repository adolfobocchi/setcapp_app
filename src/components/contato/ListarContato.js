// ListarContato.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarContatoRequest, deleteContatoRequest, listarContatoRequest, updateContatoRequest } from '../../store/modules/Contato/actions'
import { Button, Card, Container, Form, Input, Label, TextArea } from './styled'

const API_URL = 'http://setcapp-api.azurewebsites.net';
/* const API_URL = 'http://localhost:3001'; */

const ListarContato = ({ loading, contatos, error, fetchContato, criarContato, updateContato, deleteContato }) => {
  const formEmpty = {
    id: '',
    nome: '',
    email: '',
    assunto: '',
    telefone: '',
    mensagem: ''
  }
  const [contatoSelected, setContatoSelected] = useState(formEmpty);
  const [contatosList, setContatosList] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: contatoSelected
  });


  useEffect(() => {
    fetchContato()
    setContatosList(contatos);
  }, [contatos]);

  useEffect(() => {
    reset({...contatoSelected});
  }, [contatoSelected])


  const handleSelectContato = (index) => {
    setContatoSelected(contatos[index]);

  }

  const handleClearContato = () => {
    setContatoSelected({...formEmpty})
  }

  const handleDeleteContato = (index) => {
    deleteContato(index);
    setContatoSelected({...formEmpty})
  }

  const onSubmit = (data) => {

    if (data.id && data.id > 0) {
      updateContato(data.id, data);

    } else {
      criarContato(data);
    }
    setContatoSelected({...formEmpty});

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
      <Container>
        {contatosList?.length > 0 && contatosList?.map((contato, index) => (
          <Card key={contato.id} onClick={() => { handleSelectContato(index) }} >
            <h3>{contato.nome}</h3>            
            <button onClick={() => {handleDeleteContato(contato.id)}}>Delete</button>
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
    error: state.contato.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContato: () => dispatch(listarContatoRequest()),
    criarContato: (contato) => dispatch(criarContatoRequest(contato)),
    updateContato: (id, contato) => dispatch(updateContatoRequest(id, contato)),
    deleteContato: (id) => dispatch(deleteContatoRequest(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarContato)
