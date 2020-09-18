import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loan.css';

import Error from '../Error/error';

const error = {
	previous: 'You have no borrower added in the system.',
	link: '/borrower/add-borrower',
	linkMessage: 'Click to Add Borrower',
};

const AddLoan = () => {
	const [borrrower, setBorrower] = useState([]);

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower'>
				Add Loans
				<span style={{ fontSize: '1.2rem' }}>
					<Link>Help</Link>
				</span>
			</div>
			<div className='row'>
				<div className='col-md-12 col-sm-12'>{borrrower.length > 0 ? <div>Borrower List</div> : <Error error={error} />}</div>
			</div>
		</div>
	);
};

export default AddLoan;
