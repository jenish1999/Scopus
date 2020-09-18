import React, { useState } from 'react';

import Error from '../Error/error';

const error = {
	previous: 'There is no Savings Account.',
	link: '/savings/add-savings-account',
	linkMessage: 'Click to Add Savings Account.',
};

const AddBulkTransactions = () => {
	const [accounts, setAccounts] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Add Bulk Transactions</h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						{accounts.length > 0 ? (
							<div className='box'>
								<div className='box-primary'>{/* Table */}</div>
							</div>
						) : (
							<Error error={error} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddBulkTransactions;
