import React, { useState, useEffect } from "react";
import axios from "axios";
import ListaProdutos from "../../components/ListaProdutos";
import {base} from '../../environments';


export default function Home() {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get(`${base}/produtos/`)
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((erro) => {
                console.error("Ops! ocorreu um erro" + erro)
            })
    }, [])


    return (
        <div>
            <h1>Home</h1>
            <ListaProdutos produtos={produtos} />
        </div>
    )
}