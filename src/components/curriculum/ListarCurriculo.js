// ListarCurriculum.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarCurriculumRequest, deleteCurriculumRequest, listarCurriculumRequest, updateCurriculumRequest } from '../../store/modules/Curriculum/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'
import Modal from '../Modal';
import { showConfirmation } from '../../store/modules/Confirmation/actions';
import { FaTrash } from 'react-icons/fa';

const API_URL = process.env.REACT_APP_URL_API;

const ListarCurriculum = ({ loading, curriculums, error, fetchCurriculum, criarCurriculum, updateCurriculum, deleteCurriculum, confirmacao }) => {
  const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const formEmpty = {
    id: '',
    nome: '',
    email: '',
    cargo: '',
    telefone: '',
    curriculoFile: ''
  }
  const [curriculumsState, setCurriculumsState] = useState([]);
  const [curriculumSelected, setCurriculumSelected] = useState(formEmpty);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: curriculumSelected
  });


  useEffect(() => {
    fetchCurriculum()
  }, []);

  useEffect(() => {
    reset({ ...curriculumSelected });
  }, [reset, curriculumSelected]);

  useEffect(() => {
    setCurriculumsState(curriculums)
  }, [curriculums]);


  const handleSelectCurriculum = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setCurriculumSelected(curriculums[index]);
    return false;
  }

  const handleDeleteCurriculum = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O CONTATO?', () => { deleteCurriculum(index) });
    handleClearCurriculum();
  }

  const handleClearCurriculum = (index) => {
    setCurriculumSelected({ ...formEmpty })
  }
  const validateFileType = (file) => {
    return allowedFileTypes.includes(file.type);
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("curriculoFile", data.curriculoFile[0]);
    formData.append('curriculum', JSON.stringify(data));
    if (data.id && data.id > 0) {
      updateCurriculum(data.id, formData);

    } else {
      criarCurriculum(formData);
    }
    handleClearCurriculum();
  }

  if (loading) {
    return <Modal />
  }
  return (
    <>
      <Form style={{ width: '70%', marginBottom: 20 }} onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
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
        <Label>Cargo/Função</Label>
        <span style={{ fontSize: 12 }}>Ex: Motorista,Secretaria,Analista</span>
        <Input
          {...register('cargo', { required: true })}
        />
        {errors.cargo && <span>Campo obrigatório</span>}
        <Label>Arquivo</Label>
        <span style={{ fontSize: 12 }}>Apenas arquivos do tipo pdf ou doc são permitidos.</span>
        <Input
          type='file'
          name='curriculoFile'
          {...register('curriculoFile', {
            required: true,
            validate: {
              validFileType: (value) => validateFileType(value[0]) || 'Tipo de arquivo inválido. Apenas arquivos do tipo pdf ou doc são permitidos.',
            },
          })
          }
        />
        {errors.curriculoFile && <span>{errors.curriculoFile.message}</span>}
        {curriculumSelected?.url &&
          <a href={`${API_URL}/images/${curriculumSelected.url}`} target="_blank" rel="noreferrer"> Arquivo </a>
        }

        <Button type="submit">Enviar</Button>
        <Button type="button" onClick={handleClearCurriculum}>Limpar</Button>
      </Form>
      <Container>
        {curriculumsState?.length > 0 && curriculumsState?.map((curriculum, index) => (
          <Card key={curriculum.id} onClick={(event) => { handleSelectCurriculum(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{curriculum.nome}</h5>

              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteCurriculum(event, curriculum.id)} style={{ height: '1em', width: '1em' }} />
              </div>

            </div>
            <h6 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{curriculum.email}</h6>
            <h6 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{curriculum.cargo}</h6>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.curriculum.loading,
    curriculums: state.curriculum.curriculum,
    error: state.curriculum.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurriculum: () => dispatch(listarCurriculumRequest()),
    criarCurriculum: (curriculum) => dispatch(criarCurriculumRequest(curriculum)),
    updateCurriculum: (id, curriculum) => dispatch(updateCurriculumRequest(id, curriculum)),
    deleteCurriculum: (id) => dispatch(deleteCurriculumRequest(id)),
    confirmacao: (title, text, onConfirm) => dispatch(showConfirmation(title, text, onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarCurriculum)
