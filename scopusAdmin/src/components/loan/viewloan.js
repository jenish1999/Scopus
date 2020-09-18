import React, { useState } from 'react';
import './loan.css';
import { Link } from 'react-router-dom';

const ViewLoans = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div className='row'>
			<div className='col-md-12' style={{ display: 'flex', flexDirection: 'column' }}>
				<div className='header-borrower'>
					View All loans
					<span style={{ fontSize: '1.2rem' }}>
						<Link>Help</Link>
					</span>
				</div>
				<div className='advance-search-toggle'>
					Advanced Search:&nbsp;
					<Link onClick={() => setAdvanceSearch(!advanceSearch)}>
						{!advanceSearch ? <span>Click here to Show</span> : <span>Click here to hide</span>}
					</Link>
				</div>
				{advanceSearch ? <AdvancedSearch /> : null}
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<button type='button' className='btn btn-default'>
						Export Data
					</button>
					<button type='button' className='btn btn-default'>
						Show/Hide Columns
					</button>
				</div>

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
											<i class='fas fa-sort'></i> Released
										</th>
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
											<i class='fas fa-sort'></i> Interest%
										</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Due
										</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Paid
										</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Balance
										</th>
										<th scope='col'>Last Payment</th>
										<th scope='col'>Status</th>
									</tr>
								</thead>
								{data.length > 0 ? <tbody></tbody> : null}
							</table>
							{data.length === 0 ? (
								<div>
									<div style={{ textAlign: 'center' }}>
										No data found. To add loan, Visit <i>Loans</i>(left menu) --- <i>Add Loan</i>
									</div>
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

export default ViewLoans;

export const AdvancedSearch = () => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				<div className='box'>
					<div className='box-success'>
						<div className='row'>
							<div className='col-md-12'>All fields are optional. You can type or select as many fields as you like.</div>
						</div>
						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='All Loan Status' />
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='All Payment Methods' />
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Borrower Name or Bussiness Name or Group Name' />
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Loan#' />
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<select className='form-control'>
										<option selected>All Loan Products</option>
										<option value='1'>Bussiness Loan</option>
										<option>Student Loan</option>
										<option>Oversease Worker Loan</option>
										<option>Personal Loan</option>
										<option>Pensioner Loan</option>
									</select>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<select className='form-control'>
										<option selected>All Loan Officer</option>
										<option value='1'>Bhupender Bhaskar</option>
									</select>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='All Disbursed By' />
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='All Collateral Status' />
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-3'>
								<div className='form-group'>
									<input type='date' className='form-control' placeholder='From Date:dd/mm/yyyy' />
								</div>
							</div>
							<div className='col-md-3'>
								<div className='form-group'>
									<input type='date' className='form-control' placeholder='To Date:dd/mm/yyyy' />
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<select className='form-control'>
										<option value=''>Select Early Settlement</option>
										<option value='1'>Loans with Early Settlement</option>
										<option value='2'>Loans with No Early Settlement</option>
									</select>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-12'>
								<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
									<section>
										<input class='form-check-input' name='type-loan' type='radio' id='released' value='option1' checked />
										Released
									</section>
									<section>
										<input class='form-check-input' name='type-loan' type='radio' id='released' value='option2' />
										Maturity
									</section>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12'>
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
	);
};
