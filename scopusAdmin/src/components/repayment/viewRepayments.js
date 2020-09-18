import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { view_repayments } from '../../assets/tables';

const ViewRepayment = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>
								View Repayments{' '}
								<small className='help-link'>
									<Link>Help</Link>
								</small>
							</h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='advance-search-toggle'>
							<b>Advanced Search:</b>{' '}
							{!advanceSearch ? (
								<Link onClick={() => setAdvanceSearch(true)}>
									<b>Click here to Show</b>
								</Link>
							) : (
								<Link onClick={() => setAdvanceSearch(false)}>
									<b>Click here to Hide</b>
								</Link>
							)}
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>{advanceSearch ? <AdvancedSearch /> : ''}</div>
				</div>

				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<button type='button' className='btn btn-default'>
								Export Data
							</button>
							<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
								<button type='button' className='btn btn-default'>
									Bulk Delete
								</button>
								<button type='button' className='btn btn-default'>
									Show/Hide Columns
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='box'>
							<div className='box-primary'>
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
												{view_repayments.map(t_head => (
													<th scope='col'>
														{t_head.value}
														{t_head.sort ? (
															<span>
																<i className='fas fa-sort'></i>
															</span>
														) : (
															''
														)}
													</th>
												))}
											</tr>
										</thead>
										{data.length > 0 ? <tbody></tbody> : null}
									</table>
									{data.length === 0 ? (
										<div>
											<div style={{ textAlign: 'center' }}>
												No data found. To add a repayment, visit <b>Loans</b>(left menu) ---{' '}
												<Link to='/loan/all-loans'>
													<b>View All Loans</b>
												</Link>{' '}
												--- <b>View</b> --- <b>Add Repayment</b>.
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

export const AdvancedSearch = () => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				<div className='box box-primary'>
					<div className='box-body'>
						<div className='row'>
							<div className='col-md-12'>All fields are optional. You can type or select as many fields as you like.</div>
						</div>
						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Borrower Name or Bussiness Name or Group Name' />
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Loan' />
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									{/*  select2 select2-hidden-accessible */}
									<select className='form-control' data-placeholder='All Payment Method'>
										<option>All Payment Method</option>
										<option value='1'>Cash</option>
										<option value='2'>ATM</option>
										<option value='3'>Cheque</option>
										<option value='4'>Paypal</option>
										<option value='5'>Onlne Transfer</option>
									</select>{' '}
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<select className='form-control'>
										<option selected>All Collectors</option>
										<option value='1'>Bhupender Bhaskar</option>
									</select>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<select className='form-control'>
										<option selected>All Loan Status</option>
										<option value='1'>Open</option>
										<option value='2'>Restricted</option>
										<option value='3'>Fully Paid</option>
									</select>
									<small>Tip: To only show repayments with the above status, visit Edit Staff and change View All Repayments</small>
								</div>
							</div>
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
						</div>

						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='From Amount' />
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='To Amount' />
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='date' className='form-control' placeholder='From Amount' />
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='date' className='form-control' placeholder='To Amount' />
								</div>
							</div>
						</div>

						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
							<section>
								<input type='checkbox' /> Principal&gt;0
							</section>
							<section>
								<input type='checkbox' /> Penalty&gt;0
							</section>
							<section>
								<input type='checkbox' /> Interest&gt;0
							</section>
							<section>
								<input type='checkbox' /> Fees&gt;0
							</section>
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
export default ViewRepayment;
