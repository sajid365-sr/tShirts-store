
import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunt = ({house}) => {
    return (
        <div>
            <h4>Aunt</h4>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Cousin house={house}></Cousin>
                <Cousin house={house}></Cousin>
            </section>
        </div>
    );
};

export default Aunt;