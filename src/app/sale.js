import './sale.less'
// let a = '1';
// console.log(a);
// let root = document.querySelector('#root');
// root.innerHTML = "hello sale";
import React from "react";
import ReactDom from 'react-dom';
import {
    SaleDetail
} from '../components/sale/detail'
const node = document.querySelector("#root");
ReactDom.render( < SaleDetail / > , node);