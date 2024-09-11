import React from "react";
import { useState } from "react";

function DadoComponent(){

const [dado1, setDado1] = useState(1);
const [dado2, setDado2] = useState(1);
const [dadosRodados, setRodados] = useState(0);
const [vitorias, setVitorias] = useState(0);
const [mensagem, setMensagem] = useState("");
const [derrotas, setDerrotas] = useState(0);

const rolarDados = () => {
    const novoDado1 = Math.floor(Math.random() * 6) + 1;
    const novoDado2 = Math.floor(Math.random() * 6) + 1;
    setDado1(novoDado1);
    setDado2(novoDado2);

    const soma = novoDado1 + novoDado2;

    if (soma == 7 || soma == 11){
        setVitorias(vitorias + 1);
        setMensagem("Você ganhou !!");
    } else {
        setMensagem("Você perdeu !!");
        setDerrotas(derrotas + 1);
    };

    setRodados(dadosRodados + 1);

    
};

const percentualVitorias = dadosRodados === 0 ? 0: ((vitorias/dadosRodados)* 100).toFixed(2);

return (
    <div style={{textAlign:"center"}}>
        <h1>Jogo dos Dados</h1>
        <p>Some 7 ou 11 com os dados para vencer!</p>
        <p>Boa sorte!</p>
        <div>
            <p>Dado 1: {dado1}</p>
            <p>Dado 2: {dado2}</p>
        </div>

        <button onClick={rolarDados}>Clique aqui para jogar </button>

        <h2>{mensagem}</h2>

        <h2>Numero de dados que você rodou: {dadosRodados}</h2>
        <h2>Numero de vezes que você ganhou: {vitorias}</h2>
        <h2>Numero de vezes que você perdeu: {derrotas}</h2>
        <h2>Percentual de vitórias sobre os dados jogados: {percentualVitorias}%</h2>
    </div>
);

}

export default DadoComponent;

