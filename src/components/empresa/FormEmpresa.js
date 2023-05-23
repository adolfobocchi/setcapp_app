import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { criarEmpresaRequest, deleteImagemEmpresaRequest, gravarImagemEmpresaRequest, listarEmpresaRequest, updateEmpresaRequest } from '../../store/modules/Empresa/actions';
import { connect } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Button, Form, GaleriaArea, Image, Input, Label } from './styled';
import EditorHtml from '../EditorHtml';
import Modal from '../Modal';

const API_URL = process.env.REACT_APP_URL_API;

const EmpresaForm = ({ loading, error, empresas,gravarImagemEmpresa, fetchEmpresas, criarEmpresa, updateEmpresa, deleteImagemEmpresa }) => {

  const [empresaState, setEmpresaState] = useState({});
  const [imagensEstruturaState, setImagensEstruturaState] = useState([]);
  const [imagemEstruturaSelected, setImagemEstruturaSelected] = useState({ id: 0, url: null, legenda: '', territorioFile: null });
  
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: empresaState ? {
      id: empresaState.id,
      nome: empresaState.nome,
      endereco: empresaState.endereco,
      numero: empresaState.numero,
      bairro: empresaState.bairro,
      cidade: empresaState.cidade,
      estado: empresaState.estado,
      cep: empresaState.cep,
      telefone: empresaState.telefone,
      logo: empresaState.logo,
      whatsapp: empresaState.whatsapp,
      instagram: empresaState.instagram,
      facebook: empresaState.facebook,
      linkedin: empresaState.linkedin,
      email: empresaState.email,
      latitude: empresaState.latitude,
      longitude: empresaState.longitude,
      institucional: empresaState.institucional,
      diretoria: empresaState.diretoria,
      territorio: empresaState.territorio,
      associadoPage: empresaState.associadoPage,
    } : {}
  });
  useEffect(() => {
    fetchEmpresas();
  }, []);

  useEffect(() => {
    reset({ ...empresas });
  }, [reset, empresas]);

  useEffect(() => {
    setEmpresaState(empresas);
    setImagensEstruturaState(empresas?.imagens);
  }, [empresas])


  const handleDeleteImagemEmpresa = (id) => {
    deleteImagemEmpresa(id);
    setImagemEstruturaSelected({ id: 0, url: null, legenda: '', territorioFile: null });
  }

  const handleEditImagemEmpresa = (imagem) => {
    setImagemEstruturaSelected(imagem);
  }

  const handleChangeImagemEstrutura = (e) => {
    if(e.target.files) {
      setImagemEstruturaSelected({...imagemEstruturaSelected, [e.target.name]: e.target.files[0]});
    } else {
      setImagemEstruturaSelected({...imagemEstruturaSelected, [e.target.name]: e.target.value});
    }
    
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("logoFile", data.logoFile[0]);
    formData.append('empresa', JSON.stringify(data));
    if (data.id && data.id > 0) {
      updateEmpresa(data.id, formData);
    } else {
      criarEmpresa(formData);
    }
  }

  const onAddImagemEmpresa = (data) => {
    const formData = new FormData();
    formData.append('territorioFile', imagemEstruturaSelected.territorioFile);
    formData.append('imagemEmpresa', JSON.stringify(imagemEstruturaSelected));
    gravarImagemEmpresa(data.id, formData);
    setImagemEstruturaSelected({ id: 0, url: null, legenda: '', territorioFile: null });
    document.getElementById('territorioFile').value = '';
  }

  if (loading && !empresaState) {
    return <Modal />
  }

  return (
    <>
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
        <Input type='file' name='logoFile' {...register('logoFile', { required: false })} />
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
        
        <Button type="submit">Salvar</Button>
      </Form>
      <Form onSubmit={handleSubmit(onAddImagemEmpresa)} encType='multipart/form-data'>
      <Label>Foto Territorio <small>(*)</small></Label>
        {imagemEstruturaSelected.url &&
          <Image src={`${API_URL}/images/${imagemEstruturaSelected.url}`} />
        }
        <Input type='file' name='territorioFile' id="territorioFile"  onChange={(e) => handleChangeImagemEstrutura(e)}  />
        <Label>Legenda <small>(*)</small></Label>
        <Input type='text' name='legenda' placeholder='Legenda para foto' value={imagemEstruturaSelected.legenda} onChange={(e) => handleChangeImagemEstrutura(e)} />
        
        {(imagemEstruturaSelected.legenda === '' && imagemEstruturaSelected.territorioFile === null) &&
          <Label><small>(*) imagem e legenda obrigatório</small></Label>
        }
        <Button disabled={(imagemEstruturaSelected.legenda === '' && imagemEstruturaSelected.territorioFile === null)} type="submit">Adicionar</Button>
        
      </Form>
      <GaleriaArea>
          {imagensEstruturaState?.map(imagem => {
            return (
              <div key={imagem.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={`${API_URL}/images/${imagem.url}`} style={{ width: 40, height: 40 }} alt='estrutura imagem' />
                <span>{imagem.legenda}</span>
                <div style={{display: 'flex', }}>
                <FaTrash onClick={() => handleDeleteImagemEmpresa(imagem.id)} style={{ height: '1em', width: '1em' }} />
                <FaEdit onClick={() => handleEditImagemEmpresa(imagem)} style={{ height: '1em', width: '1em' }} />
                </div>
              </div>

            )
          })}
        </GaleriaArea>
    </>
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
    deleteImagemEmpresa: (id, url) => dispatch(deleteImagemEmpresaRequest(id, url)),
    gravarImagemEmpresa: (id, imagemEmpresa) => dispatch(gravarImagemEmpresaRequest(id, imagemEmpresa)),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaForm);
