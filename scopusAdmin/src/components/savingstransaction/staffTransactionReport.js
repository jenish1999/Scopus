import React, { useState } from 'react';
import DateTimeFilter from '../savings/dateTimeFilter';
import Error from '../Error/error';

const error = {
	previous: 'There is no staff who have made any saving transactions.',
};

const StaffTransactionReport = () => {
	const [savingTransaction, setSavingTransaction] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Staff Transactions Report</h1>
						</div>
					</div>
				</div>
				<DateTimeFilter />
				<div className='row'>
					<div className='col-md-12'>
						<div className='box'>
							<div className='box-default'>
								<p>
									Staff who made transactions : <b>date</b> to <b>date</b>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12'>
						{savingTransaction.length > 0 ? (
							<div className='box'>
								<div className='box-primary'>Table</div>
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

export default StaffTransactionReport;
