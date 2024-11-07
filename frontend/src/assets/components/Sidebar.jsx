import React from 'react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

import Header from '../components/Header';

const sidebar = () => {
  return (
    <div>
      <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto">
                    <span className=" Dancing-script fs-5 d-none d-sm-inline">Categoria de Productos</span>
                </a>
                <ul className=" poopins-font nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Planta Interior</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Planta Jardin</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Accesorios</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Arte</span></a>
                    </li>    
                </ul>
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto">
                    <span className="Dancing-script fs-5 d-none d-sm-inline">Filtrar por valor</span>
                </a>
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto">
                    <span className="Dancing-script fs-5 d-none d-sm-inline">Mas vendido </span>
                </a>
            </div>
        </div>
        <div className="col py-3">
            <Header/>
        </div>
    </div>
</div>
    </div>
  )
}

export default sidebar
