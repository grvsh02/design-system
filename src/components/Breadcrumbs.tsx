import React from "react";
import "./Breadcrumb.css";

const Breadcrumbs = () => {

    return (
        <nav aria-label="Breadcrumb" className="breadcrumb">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Sub Category</a></li>
                <li><a href="#">Type</a></li>
                <li><span aria-current="page">Product</span></li>
            </ul>
        </nav>
    );
}






export default Breadcrumbs;