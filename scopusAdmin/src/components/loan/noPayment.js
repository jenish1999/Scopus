import React, { useState } from 'react';

const PaymentNone = () => {
	const [data, setData] = useState([]);
	var day = [1, 2, 3, 4, 5, 6];

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower col-md-12 col-sm-12'>No Repayments</div>
			<div className='col-md-12 col-sm-12'>
				Loans that have not received any payments since the start of the loan. You can also search for no payments made in the dates selected below.
			</div>
			<div className='row'>
				<div className='col-md-12 col-sm-12'>
					<div className='box'>
						<div className='box-success'>
							<div className='box-heading'>
								<b>Date Range</b>
							</div>
							<div className='row'>
								<div className='col-md-5'>
									<div className='form-group'>
										<input type='date' className='form-control' value='From Date : dd/mm/yyyy' />
									</div>{' '}
								</div>
								<div className='col-md-2' style={{ textAlign: 'center' }}>
									to
								</div>
								<div className='col-md-5 mb-3'>
									<div className='form-group'>
										<input type='date' className='form-control' value='To Date : dd/mm/yyyy' />
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-6 mb-3'>
									<div className='form-group'>
										<input type='text' className='form-control' placeholder='All Loan Status' />
									</div>
								</div>
								<div className='col-md-6 mb-3'>
									<div className='form-group'>
										<input type='text' className='form-control' placeholder='All Loan Officers' />
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-3 col-sm-6 col-xs-4'>
									<div>
										<button type='button' className='btn bg-olive btn-flat'>
											Search!
										</button>
										<button type='button' className='btn bg-purple btn-flat'>
											Reset!
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-md-12 col-sm-12'>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<button type='button' className='btn btn-default'>
						Export Data
					</button>
					<button type='button' className='btn btn-default'>
						Show/Hide Columns
					</button>
				</div>
			</div>
			{/* </div> */}
			<div className='col-md-12 col-sm-12'>
				<div className='box'>
					<div className='box-info'>
						<div className='filter-result'>
							<div className='form-group'>
								<input type='text' className='form-control' placeholder='Search Borrowser' />
							</div>
							<div className='form-group'>
								Show
								<select>
									<option>20</option>
									<option>50</option>
									<option>100</option>
									<option>200</option>
									<option>500</option>
									<option>Show All</option>
								</select>
								Entries
							</div>
						</div>
						<div className='result'>
							<table className='table table-hover'>
								<thead>
									<tr className='table-info'>
										<th scope='col'>View</th>
										<th scope='col'>
											Name
											<i className='fas fa-sort'></i>
										</th>
										<th scope='col'>
											Loan #<i className='fas fa-sort'></i>
										</th>
										<th scope='col'>
											Principal
											<i className='fas fa-sort'></i>
										</th>
										<th scope='col'>
											Due
											<i className='fas fa-sort'></i>
										</th>
										<th scope='col'>
											Paid
											<i className='fas fa-sort'></i>
										</th>
										<th scope='col'>PastDue</th>
										<th scope='col'>Amortization</th>
										<th scope='col'>PendingDue</th>
										<th scope='col'>Status</th>
									</tr>
								</thead>
								{data.length > 0 ? <tbody></tbody> : null}
							</table>
							{data.length === 0 ? (
								<div>
									<div style={{ textAlign: 'center' }}>No data found. No loans found.</div>
									<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
										<div>Showing 0 to 0 of 0 entries</div>
										<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
											<button type='button' className='btn btn-default btn-flat'>
												Previous
											</button>
											<button type='button' className='btn btn-default btn-flat'>
												Next
											</button>
										</div>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentNone;
