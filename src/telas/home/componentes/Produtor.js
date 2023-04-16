import React, { useMemo, useReducer, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Estrelas from "./Estrelas";

const distanciaEmMetros = (distancia) => {
    console.log('chamou o metodo distanciaEmMetros')
    return `${distancia}m`
}


export default function Produtor({ nome, imagem, distancia, estrelas }) {
    // const [selecionado, setSelecionado] = useState(false);
    const [selecionado, inverterSelecionado] = useReducer( // hook de redução
        (selecionado) => !selecionado,
        false
    )
    const distanciaTexto = useMemo(() => // use memo executa quando o estado do que está dentro dos array é alterado
        distanciaEmMetros(distancia),
        [distancia]
    )
    return <TouchableOpacity
        style={estilos.cartao}
        //  onPress={() => setSelecionado(!selecionado)}
        onPress={inverterSelecionado} // chamada do hook
    >
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado}
                />
            </View>
            <Text style={estilos.distancia}>{distanciaTexto}</Text>
        </View>


    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#787878',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",

        //sombra no Android apeas elevation:##
        elevation: 4,

        //sombra no IOS
        //existem simuladores de sombra na internet que fazem o calculo abaixo 
        //#region 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }, shadowOpacity: 0.23,
        shadowRadius: 2.62,
        //#endregion
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    }, distancia: {
        fontSize: 12,
        lineHeight: 19
    }
})