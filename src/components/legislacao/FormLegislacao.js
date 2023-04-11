import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Form, Input, Label } from './styled';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { criarLegislacaoRequest, listarLegislacaoRequest, updateLegislacaoRequest } from '../../store/modules/Legislacao/actions';

const Editor = ({ name, control, defaultValue }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, value } }) => (
        <ReactQuill value={value} onChange={onChange} />
      )}
    />
  );
};

const LegislacaoForm = ({loading, legislacao, error, fetchLegislacao, criarLegislacao, updateLegislacao}) => {
  
  const { register, control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: legislacao
      ? {
          id: legislacao.id,
          conteudo: legislacao.conteudo,
        }
      : {},
  });

  useEffect(() => {
    fetchLegislacao();
  }, []);
  

  const onSubmit = (data) => {    
    if(data.id && data.id > 0) {
      updateLegislacao(data.id, data);
      fetchLegislacao();
    } else {
      criarLegislacao(data);
      fetchLegislacao();
    }
    
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Input
        hidden
        {...register('id')}
      />

      <Label>Legislacao</Label>
      <Editor name="conteudo" control={control} defaultValue={legislacao?.conteudo}/>

      <Button type="submit">Salvar</Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.legislacao.loading,
    legislacao: state.legislacao.legislacao,
    error: state.legislacao.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLegislacao: () => dispatch(listarLegislacaoRequest()),
    criarLegislacao: (legislacao) => dispatch(criarLegislacaoRequest(legislacao)),
    updateLegislacao: (id, legislacao) => dispatch(updateLegislacaoRequest(id, legislacao))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LegislacaoForm);
