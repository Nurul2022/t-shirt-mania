import React from 'react';
import Brother from '../Borther/Borther';
import MySelf from '../Myself/Myself';
import Sister from '../Sister/Sister';


const Father = ({ house, ornament }) => {
    return (
        <div>
            <h4>Father</h4>
            <p>house: {house}</p>
            <div style={{display: 'flex'}}>
                <MySelf house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;