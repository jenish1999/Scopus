import React, { useState } from 'react';
import Error from '../Error/error';

const error = {
	previous: 'There are no open loans.',
};

const AddBulkRepayment = () => {
	const [openLoan, setOpenLoan] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Add Bulk Repayments </h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>{openLoan.length > 0 ? <div>Form</div> : <Error error={error} />}</div>
				</div>
			</div>
		</div>
	);
};

export default AddBulkRepayment;
