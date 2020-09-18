import React, { useState } from 'react';
import Error from '../Error/error';

const error = {
	previous: 'There is no borrower in the system.',
	link: '/borrower/add-borrower',
	linkMessage: 'Click to Add Borrower',
};

const AddSavingsAcc = () => {
	const [borrowers, setBorrowers] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Add Savings Account</h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>{borrowers.length > 0 ? <div>Form</div> : <Error error={error} />}</div>
				</div>
			</div>
		</div>
	);
};

export default AddSavingsAcc;
