import React, { useState } from 'react';

const DueLoan = () => {
	const [data, setData] = useState([]);

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower'>Due Loans</div>
			<div className='col-md-12 col-sm-12'>
				<div className='box'>
					<div className='box-success'>
						<div className='box-header'>
							<h3 className='box-title'>Date Range</h3>
						</div>
						<div className='row'>
							<div className='col-md-5'>
								<div className='form-group'>
									<input type='date' className='form-control' placeholder='From Date:dd/mm/yyyy' />
								</div>
							</div>
							<div className='col-md-2' style={{ textAlign: 'center' }}>
								to
							</div>
							<div className='col-md-5'>
								<div className='form-group'>
									<input type='date' className='form-control' placeholder='To Date:dd/mm/yyyy' />
								</div>
							</div>
						</div>
						<div className='row-row'>
							<div class='form-check'>
								<input className='form-check-input' type='checkbox' value='' id='zero-pending' />
								<label class='form-check-label' for='zero-pending'>
									Include due loans with zero pending due amounts
								</label>
							</div>
						</div>
						<div className='form-row'>
							<div class='form-check'>
								<input className='form-check-input' type='checkbox' value='' id='system-penalty' />
								<label class='form-check-label' for='system-penalty'>
									Include loans where system generated penalty is added between the aboove dates
								</label>
							</div>
						</div>
						<div className='form-row'>
							<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
								<button type='button' className='btn bg-olive btn-flat'>
									Search!
								</button>
								<button type='button' className='btn btn-flat bg-purple'>
									Reset!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='row'> */}
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
			<div className='col-md-12'>
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
											<i class='fas fa-sort'></i> Name
										</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Loan #
										</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Principal
										</th>

										<th scope='col'>
											<i class='fas fa-sort'></i> Due
										</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Paid
										</th>
										<th scope='col'>PastDue</th>
										<th scope='col'>Amortization</th>
										<th scope='col'>PendingDue</th>
										<th scope='col'>NextDue</th>
										<th scope='col'>Last Payment</th>
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

export default DueLoan;
