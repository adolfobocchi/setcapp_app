import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, MapaArea } from '../components/styled';
import { criarContatoRequest } from '../store/modules/Contato/actions';
import { Label, TextArea } from '../components/contato/styled';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { FaEnvelope, FaMap, FaMapPin, FaMarkdown, FaMarker, FaPhone } from 'react-icons/fa';

const Home = ({ loading, criarContato, error, empresas }) => {
    const formEmpty = {
        id: '',
        nome: '',
        email: '',
        assunto: '',
        telefone: '',
        mensagem: ''
    }
    const [contato, setContato] = useState();
    const [geoData, setGeoData] = useState({ lat: null, lng: null });
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: contato
    });
    useEffect(() => {
        setGeoData({ lat: empresas.latitude, lng: empresas.longitude });
    }, [empresas])

    useEffect(() => {
        reset({ ...contato });
      }, [reset, contato])

    function handleClearContato() {
        setContato({ ...formEmpty })
    }


    const onSubmit = (data) => {

        criarContato(data);
        handleClearContato();

    }

    return (
        <>
            <div style={{ height: 700, alignItems:'center',  backgroundColor:'rgba(254,254,254,0.7)', flexDirection: 'column' }} >
                
                <h3 style={{flex:1, textAlign: 'center', marginTop: 20 }}>ENTRE EM CONTATO</h3>
                {empresas &&
                    <div style={{ justifyContent: 'center', margin:20, padding: 20, flex: 1, display: 'flex', flexDirection: 'row',  color: '#F38735' }}>
                        <FaMapPin /> 
                        <p> &nbsp;{` ${empresas.endereco} `} &nbsp;</p>
                        <p>{` ${empresas.numero} `} &nbsp;</p>
                        <FaPhone />
                        <p> &nbsp;{` ${empresas.telefone} `} &nbsp;</p>
                        <FaEnvelope />
                        <p> &nbsp;{` ${empresas.email} `} &nbsp;</p>
                    </div>
                }
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                    <Form style={{ flex: 1, margin: 10 }} onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
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

                        <Button type="submit">Enviar</Button>
                    </Form>
                    <MapaArea>
                        {geoData.lat && geoData.lng && <MapContainer id='map' center={[geoData.lat, geoData.lng]} zoom={16} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {geoData.lat && geoData.lng && <Marker position={[geoData.lat, geoData.lng]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>}
                        </MapContainer>}
                    </MapaArea>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.contato.loading,
        contatos: state.contato.contato,
        error: state.contato.error,
        empresas: state.empresa.empresa,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        criarContato: (contato) => dispatch(criarContatoRequest(contato)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)