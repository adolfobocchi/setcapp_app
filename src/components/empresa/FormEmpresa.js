import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { criarEmpresaRequest, deleteImagemEmpresaRequest, listarEmpresaRequest, updateEmpresaRequest } from '../../store/modules/Empresa/actions';
import { connect } from 'react-redux';
import { FaTrash } from 'react-icons/fa'
import { Button, Form, GaleriaArea, Image, Input, Label } from './styled';
import EditorHtml from '../EditorHtml';
import Modal from '../Modal';

const API_URL = process.env.REACT_APP_URL_API;

const EmpresaForm = ({loading, error, empresas, fetchEmpresas, criarEmpresa, updateEmpresa, deleteImagemEmpresa}) => {
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: empresas
      ? {
          id: empresas.id,
          nome: empresas.nome,
          endereco: empresas.endereco,
          numero: empresas.numero,
          bairro: empresas.bairro,
          cidade: empresas.cidade,
          estado: empresas.estado,
          cep: empresas.cep,
          telefone: empresas.telefone,
          logo: empresas.logo,
          whatsapp: empresas.whatsapp,
          instagram: empresas.instagram,
          facebook: empresas.facebook,
          linkedin: empresas.linkedin,
          email: empresas.email,
          latitude: empresas.latitude,
          longitude: empresas.longitude,
          institucional: empresas.institucional,
          diretoria: empresas.diretoria,
          territorio: empresas.territorio,
          associadoPage: empresas.associadoPage,

        }
      : {},
  });

  useEffect(() => {
    fetchEmpresas();
  }, []);

  useEffect(() => {
    reset({...empresas});
  }, [reset, empresas]);

  const handleDeleteImagemEmpresa = (id) => {
    deleteImagemEmpresa(id);
  }

  const onSubmit = (data) => {
    
    const formData = new FormData();
    for (const key of Object.keys(data.files)) {
      formData.append('imagens', data.files[key])
    }
    formData.append("logoFile", data.logoFile[0]);
    formData.append('empresa', JSON.stringify(data));

    
    if(data.id && data.id > 0) {
      updateEmpresa(data.id, formData);
    } else {
      criarEmpresa(formData);
    }
    
  }

  
  if(loading) {
    return <Modal />
  }
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Input
        hidden
        {...register('id')}
      />
      <Label>Nome</Label>
      <Input
        {...register('nome', { required: true })}
      />
      {errors.nome && <span>Campo obrigatório</span>}

      <Label>Endereço</Label>
      <Input
        {...register('endereco', { required: true })}
      />
      {errors.endereco && <span>Campo obrigatório</span>}

      <Label>Numero</Label>
      <Input {...register('numero', { required: true })} />
      {errors.numero && <span>Campo obrigatório</span>}

      <Label>Bairro</Label>
      <Input {...register('bairro', { required: true })} />
      {errors.bairro && <span>Campo obrigatório</span>}

      <Label>Cidade</Label>
      <Input {...register('cidade', { required: true })} />
      {errors.cidade && <span>Campo obrigatório</span>}

      <Label>Estado</Label>
      <Input {...register('estado', { required: true })} />
      {errors.estado && <span>Campo obrigatório</span>}

      <Label>Cep</Label>
      <Input {...register('cep', { required: true })} />
      {errors.cep && <span>Campo obrigatório</span>}

      <Label>Telefone</Label>
      <Input {...register('telefone', { required: true })} />
      {errors.telefone && <span>Campo obrigatório</span>}

      <Label>Logo</Label>
      <Input  type='file' name='logoFile' {...register('logoFile', { required: false })} />
      {errors.logo && <span>Campo obrigatório</span>}
      {empresas?.logo && 
        <Image src={`${API_URL}/images/${empresas?.logo || null}`} />
      }
      
      
      <Label>Whatsapp</Label>
      <Input {...register('whatsapp', { required: true })} />
      {errors.whatsapp && <span>Campo obrigatório</span>}

      <Label>Instagram</Label>
      <Input {...register('instagram', { required: true })} />
      {errors.instagram && <span>Campo obrigatório</span>}

      <Label>Facebook</Label>
      <Input {...register('facebook', { required: true })} />
      {errors.facebook && <span>Campo obrigatório</span>}

      <Label>Linkedin</Label>
      <Input {...register('linkedin', { required: true })} />
      {errors.linkedin && <span>Campo obrigatório</span>}

      <Label>E-mail</Label>
      <Input {...register('email', { required: true })} />
      {errors.email && <span>Campo obrigatório</span>}

      <Label>Latitude</Label>
      <Input {...register('latitude', { required: true })} />
      {errors.latitude && <span>Campo obrigatório</span>}

      <Label>Longitude</Label>
      <Input {...register('longitude', { required: true })} />
      {errors.longitude && <span>Campo obrigatório</span>}

      <Label>Institucional</Label>
      <EditorHtml name="institucional" control={control} defaultValue={empresas?.institucional} />

      <Label>Diretoria</Label>
      <EditorHtml name="diretoria" control={control} defaultValue={empresas?.diretoria} />
      
      <Label>Territorio</Label>
      <EditorHtml name="territorio" control={control} defaultValue={empresas?.territorio} />
      
      <Label>Pagina Associado</Label>
      <EditorHtml name="associadoPage" control={control} defaultValue={empresas?.associadoPage} />


      <Label>Fotos</Label>
        <Input type='file' multiple name='files' {...register('files', { required: false })} />
        {errors.logo && <span>Campo obrigatório</span>}
        <GaleriaArea>
        {empresas?.imagens?.map(imagem => {
              return (
                <div key={imagem.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img  src={`${API_URL}/images/${imagem.url}`} style={{ width: 40, height: 40 }} alt='estrutura imagem' />
                  <FaTrash onClick={() => handleDeleteImagemEmpresa(imagem.id)} style={{ height: '1em', width: '1em' }} />
                </div>
              
              )
            })}
        </GaleriaArea>
      <Button type="submit">Salvar</Button>
    </Form>
  );
};

const mapStateToProps = state => {
 
  return {
    loading: state.empresa.loading,
    empresas: state.empresa.empresa,
    error: state.empresa.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEmpresas: () => dispatch(listarEmpresaRequest()),
    criarEmpresa: (empresa) => dispatch(criarEmpresaRequest(empresa)),
    updateEmpresa: (id, empresa) => dispatch(updateEmpresaRequest(id, empresa)),
    deleteImagemEmpresa: (id, url) => dispatch(deleteImagemEmpresaRequest(id, url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaForm);
