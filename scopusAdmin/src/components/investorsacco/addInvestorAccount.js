import React, { useState } from 'react';
import Error from '../Error/error';

const error = {
	previous: 'You have no investors added in the system',
	link: '/investors/add-investor',
	linkMessage: 'Click to Add Investor',
};

const AddInvestorsAcco = () => {
	const [investors, setInvestors] = useState([]);
	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Add Investor Account</h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>{investors.length > 0 ? <div>Table</div> : <Error error={error} />}</div>
				</div>
			</div>
		</div>
	);
};

export default AddInvestorsAcco;
