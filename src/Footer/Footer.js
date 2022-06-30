import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-center mt-5' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black' }}>
                <h6 className='text-light pt-4 '>Copyright © 2022 || <span style={{ color: 'magenta' }}>endgame-todolist</span> </h6>
                <h6 className='mt-2 text-light mb-0'>Khulna, Bangladesh</h6>
                <small className='mt-0 mb-2 text-light'>All Rights Reserved</small>

            </div>
        </div>
    );
};

export default Footer;