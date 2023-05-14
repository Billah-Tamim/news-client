import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h4 className='text-danger'>All terms and Conditions Read carefully</h4>
            <ul className='text-danger'>
                <li>if you use band comments the we block you</li>
                <li>if you use band comments the we block you</li>
                <li>if you use band comments the we block you</li>
                <li>if you use band comments the we block you</li>
                <li>if you use band comments the we block you</li>
            </ul>
            <Link to='/register'>Go to Register</Link>
        </div>
    );
};

export default TermsAndConditions;