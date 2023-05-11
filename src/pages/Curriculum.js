import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Form, Input } from '../components/styled';
import { criarCurriculumRequest } from '../store/modules/Curriculum/actions';
import { Label } from '../components/curriculum/styled';
import { showConfirmation } from '../store/modules/Confirmation/actions';

const Home = ({ loading, criarCurriculum, error, empresas }) => {
    const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    const formEmpty = {
        id: '',
        nome: '',
        email: '',
        cargo: '',
        telefone: '',
        curriculoFile: ''
    }
    const [curriculum, setCurriculum] = useState();
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: curriculum
    });

    useEffect(() => {
        reset({ ...curriculum });
    }, [reset, curriculum])

    function handleClearCurriculum() {
        setCurriculum({ ...formEmpty })
    }

    const validateFileType = (file) => {
        return allowedFileTypes.includes(file.type);
    };


    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("curriculoFile", data.curriculoFile[0]);
        formData.append('curriculum', JSON.stringify(data));
        criarCurriculum(formData);
        handleClearCurriculum();

    }

    return (
        <>
            <div style={{ display: 'flex', height: 700, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(254,254,254,0.7)', flexDirection: 'column' }} >

                <h3 style={{ textAlign: 'center', margin: 40 }}>ENVIE SEU CURRICULUM</h3>


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

                    <Button type="submit">Enviar</Button>
                </Form>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.curriculum.loading,
        curriculums: state.curriculum.curriculum,
        error: state.curriculum.error,
        empresas: state.empresa.empresa,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        criarCurriculum: (curriculum) => dispatch(criarCurriculumRequest(curriculum)),
        confirmacao: (title, text, onConfirm) => dispatch(showConfirmation(title, text, onConfirm))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)