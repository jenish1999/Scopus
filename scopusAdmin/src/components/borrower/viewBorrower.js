import React, { useState } from 'react';
import './viewBorrower.css';
import { Link } from 'react-router-dom';

const ViewBorrower = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div className='row'>
			<div className='col-md-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='header-borrower'>
							View Borrowers
							<span style={{ fontSize: '1.2rem' }}>
								<Link>Help</Link>
							</span>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='advance-search-toggle'>
							Advanced Search:{' '}
							{!advanceSearch ? (
								<Link onClick={() => setAdvanceSearch(true)}>Click here to show</Link>
							) : (
								<Link onClick={() => setAdvanceSearch(false)}>Click here to hide</Link>
							)}
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>{advanceSearch ? <div>This is the advance search</div> : null}</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<button type='button' className='btn btn-default'>
								Export Data
							</button>
							<button type='button' className='btn btn-default'>
								Show/Hide Columns
							</button>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
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
										</select>
										Entries
									</div>
								</div>
								<div className='result'>
									<table className='table table-hover'>
										<thead>
											<tr className='table-info'>
												<th scope='col'>View</th>
												<th scope='col'>Full Name</th>
												<th scope='col'>
													<i class='fas fa-sort'></i> Bussiness
												</th>
												<th scope='col'>
													<i class='fas fa-sort'></i> Unique #
												</th>
												<th scope='col'>
													<i class='fas fa-sort'></i> Mobile
												</th>
												<th scope='col'>
													<i class='fas fa-sort'></i> Email
												</th>
												<th scope='col'>
													<i class='fas fa-sort'></i> Total Paid
												</th>
												<th scope='col'>Open Loan Balance</th>
												<th scope='col'>Status</th>
												<th scope='col'>Action</th>
											</tr>
										</thead>
										{data.length > 0 ? <tbody></tbody> : null}
									</table>
									{data.length === 0 ? (
										<div>
											<div style={{ textAlign: 'center' }}>
												No data found <Link to='/borrower/add-borrower'>Click here to Add Borrower</Link>
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
			</div>
		</div>
	);
};

export default ViewBorrower;
