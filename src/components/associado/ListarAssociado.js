// ListarAssociado.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarAssociadoRequest, deleteAssociadoRequest, listarAssociadoRequest, updateAssociadoRequest } from '../../store/modules/Associado/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'
import Modal from '../Modal';
import { showConfirmation } from '../../store/modules/Confirmation/actions';
import { FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';

const ListarAssociado = ({ loading, associados, error, page, fetchAssociado, criarAssociado, updateAssociado, deleteAssociado, confirmacao }) => {
  const ativo = 0;
  const formOptions = {
    id: { label: 'id', value: '', tipo: 'text', hidden: true },
    razaoSocial: { label: 'Razão Social', value: '', tipo: 'text', required: true },
    nomeFantasia: { label: 'Nome Fantasia', value: '', tipo: 'text', required: true },
    endereco: { label: 'Endereço', value: '', tipo: 'text', required: true },
    cidade: { label: 'Cidade', value: '', tipo: 'text', required: true },
    estado: { label: 'Estado', value: '', tipo: 'text', required: true },
    bairro: { label: 'Bairro', value: '', tipo: 'text', required: true },
    cep: { label: 'Cep', value: '', tipo: 'text', required: true },
    telefone: { label: 'Telefone', value: '', tipo: 'text', required: true },
    celular: { label: 'Celular', value: '', tipo: 'text', required: true },
    email: { label: 'E-mail', value: '', tipo: 'email', required: true },
    cnpj: { label: 'Cnpj', value: '', tipo: 'text', required: true },
    ie: { label: 'Inscrição Estadual', value: '', tipo: 'text', required: true },
    juntacomercial: { label: 'Registro da Junta Comercial nº', value: '', tipo: 'text', required: true },
    dataInicioAtividade: { label: 'Inicio Atividade', value: '', tipo: 'date', required: true },
    matriz: { label: 'Matriz', value: false, tipo: 'checkbox', required: true },
    veiculos: { label: 'Quantidade de veiculos', value: '', tipo: 'number', required: true },
    funcionarios: { label: 'Numero de funcionários', value: '', tipo: 'number', required: true },
    responsavel: { label: 'Responsavel', value: '', tipo: 'text', required: true },
    cargacomum: { label: 'Carga Comun', value: false, tipo: 'checkbox', required: false },
    cargaliquidagranel: { label: 'Carga Liquida a Granel', value: false, tipo: 'checkbox', required: false },
    cargasolidagranel: { label: 'Carga Solida a Granel', value: false, tipo: 'checkbox', required: false },
    cargaindivisiveis: { label: 'Cargas Indivisiveis e Excedentes em Peso/Dimensões', value: false, tipo: 'checkbox', required: false },
    cargaaquecida: { label: 'Carga Aquecida', value: false, tipo: 'checkbox', required: false },
    cargasiderurgica: { label: 'Produtos Siderúrgicos e Bobinas em geral', value: false, tipo: 'checkbox', required: false },
    cargamadeiras: { label: 'Madeiras, em toras, Postes e Tubos', value: false, tipo: 'checkbox', required: false },
    cargaviva: { label: 'Animais Vivos', value: false, tipo: 'checkbox', required: false },
    cargaperecivel: { label: 'Produtos pereciveis e temperatura controlada', value: false, tipo: 'checkbox', required: false },
    cargalixo: { label: 'Lixo', value: false, tipo: 'checkbox', required: false },
    cargavalores: { label: 'Valores em unidades blindadas', value: false, tipo: 'checkbox', required: false },
    cargaconcreto: { label: 'Concreto em execução (betoneira)', value: false, tipo: 'checkbox', required: false },
    cargaveiculos: { label: 'Veiculos automotores', value: false, tipo: 'checkbox', required: false },
    cargacontainer: { label: 'Containers', value: false, tipo: 'checkbox', required: false },
    cargaoutros: { label: 'Outros a citar', value: false, tipo: 'checkbox', required: false },
  }
  const formEmpty = {
    id: '',
    razaoSocial: '',
    nomeFantasia: '',
    endereco: '',
    cidade: '',
    estado: '',
    bairro: '',
    cep: '',
    telefone: '',
    celular: '',
    email: '',
    cnpj: '',
    ie: '',
    juntacomercial: '',
    dataInicioAtividade: '',
    matriz: false,
    veiculos: '',
    funcionarios: '',
    responsavel: '',
    cargacomum: false,
    cargaliquidagranel: false,
    cargasolidagranel: false,
    cargaindivisiveis: false,
    cargaaquecida: false,
    cargasiderurgica: false,
    cargamadeiras: false,
    cargaviva: false,
    cargaperecivel: false,
    cargalixo: false,
    cargavalores: false,
    cargaconcreto: false,
    cargaveiculos: false,
    cargacontainer: false,
    cargaoutros: false,

  }
  const [associadoSelected, setAssociadoSelected] = useState(formEmpty);
  const [associadosState, setAssociadosState] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: associadoSelected
  });


  useEffect(() => {
    fetchAssociado(page, ativo)
  }, []);

  useEffect(() => {
    reset({ ...associadoSelected });
  }, [reset, associadoSelected])


  useEffect(() => {
    setAssociadosState(associados)
  }, [associados]);

  const handleSelectAssociado = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setAssociadoSelected(associados[index]);
    return false;
  }

  const handleClearAssociado = () => {
    setAssociadoSelected({ ...formEmpty })
  }

  const handleDeleteAssociado = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O ASSOCIADO?', () => { deleteAssociado(index) });
    handleClearAssociado();
  }


  const onSubmit = (data) => {

    if (data.id && data.id > 0) {
      updateAssociado(data.id, data);

    } else {
      criarAssociado(data);
    }
    handleClearAssociado();

  }

  if (loading) {
    return <Modal />
  }
  return (
    <>
      <Form style={{ flex: 1, margin: 10 }} onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
        {
          Object.keys(formEmpty).map((field, index) => {
            const { label, tipo, required, hidden } = formOptions[field];
            return <>
              {!hidden && <Label>{`${label} `}{required && <small style={{ fontWeight: 400, color: 'red' }}>*</small>}</Label>}
              <Input
                name={field}
                type={tipo}
                hidden={hidden}
                {...register(field, { required: required })}
              />
              {errors[field] && <span>Campo obrigatório</span>}
            </>
          })
        }
        <Button type="submit">Enviar</Button>
        <Button type="button" onClick={handleClearAssociado}>Limpar</Button>
      </Form>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
        {page > 1 &&
          <button
            style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }}
            onClick={() => fetchAssociado(page - 1, ativo)}>
            <FaChevronLeft size={20} />
          </button>
        }
        <button
          style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }}
          onClick={() => fetchAssociado(page + 1, ativo)}>
          <FaChevronRight size={20} />
        </button>
      </div>
      <Container>
        {associadosState?.map((associado, index) => (
          <Card key={associado.id} onClick={(event) => { handleSelectAssociado(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{associado.razaoSocial}</h5>
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteAssociado(event, associado.id)} style={{ height: '1em', width: '1em' }} />
              </div>
            </div>
            <h6 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{associado.email}</h6>
            <h6 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{associado.celular}</h6>
            <h6 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{associado.cidade}</h6>
          </Card>
        ))}
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.associado.loading,
    associados: state.associado.associados,
    associado: state.associado.associado,
    page: state.associado.page,
    error: state.associado.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAssociado: (page, ativo) => dispatch(listarAssociadoRequest(page, ativo)),
    criarAssociado: (associado) => dispatch(criarAssociadoRequest(associado)),
    updateAssociado: (id, associado) => dispatch(updateAssociadoRequest(id, associado)),
    deleteAssociado: (id) => dispatch(deleteAssociadoRequest(id)),
    confirmacao: (title, text, onConfirm) => dispatch(showConfirmation(title, text, onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarAssociado)
