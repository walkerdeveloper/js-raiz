import React from 'react';

import ChildrenComponent from "./Children";
import GrandsonComponent from "./Grandson";
import TechsComponent from "./Techs";

const products = [
    {
        id: 'bcf-2541-00',
        name: 'Notebook 16 gb ram',
        price: 2.3000,
        description: 'An amazing PC for you'
    },
    {
        id: 'bde-5412-17',
        name: 'Something that you want',
        price: 4.800,
        description: 'An amazing thing for you'
    },
    {
        id: 'bsr-5478-05',
        name: 'Something that you want',
        price: 5.5412,
        description: 'The same thi amazing for you'
    }
]

function consoleProducts() {
    products.forEach(product => console.log(product));
}


export default function FatherComponent() {
    return (
        <>
        <div className="col-sm-6">
            {
                products.map(product =>
                    <ChildrenComponent product={product}>
                        <GrandsonComponent
                            product={product} impProducts={consoleProducts}
                        />
                    </ChildrenComponent>
                )
            }
        </div>
        <TechsComponent />
        </>
    )
}