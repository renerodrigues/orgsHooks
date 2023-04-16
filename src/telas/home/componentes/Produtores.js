import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { carregaProdutores } from '../../../servicos/carregaDatos';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({ topo: Topo }) {
    const [titulo, lista] = useProdutores();

    // const [titulo, setTitulo] = useState('')
    // const [lista, setLista] = useState([])

    // useEffect(() => {
    //     const retorno = carregaProdutores()
    //     setTitulo(retorno.titulo)
    //     setLista(retorno.lista)
    // }, [])


    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo} >{titulo}</Text>
        </>
    }
    return <FlatList style={estilos.lista} data={lista}
        //  renderItem={({ item: { nome } }) => <Text style={estilos.textoLista}>{nome}</Text>}
        renderItem={({ item }) => <Produtor {...item} />}
        keyExtractor={({ nome }) => nome}
        // ListHeaderComponent={()=> <Text>{titulo}</Text>}/>
        ListHeaderComponent={TopoLista} />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    },
    lista: {
        backgroundColor: '#959595',

    },
    textoLista: {
        color: '#D9D9D9',
        marginHorizontal: 16,
    }

})