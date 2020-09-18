import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collateral_register } from '../../assets/tables';

const Collateral = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Collateral Register</h1>
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
							<button type='button' className='btn btn-default'>
								Show/Hide Columns
							</button>
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
												{collateral_register.map(t_head => (
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

export default Collateral;

const AdvancedSearch = () => {
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
									<select className='form-control'>
										<option selected>All Status</option>
										<option value='1'>Deposited into Branch</option>
										<option value='2'>Collateral with Borrower</option>
										<option value='3'>Returned to Borrower</option>
										<option value='4'>Repossession Initiated</option>
										<option value='5'>Repossessed</option>
										<option value='6'>Under Auction</option>
										<option value='7'>Sold</option>
										<option value='8'>Lost</option>
									</select>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<select className='form-control'>
										<option selected>All Types</option>
										<option value='1'>Automobiles</option>
										<option value='2'>Insurance Policies</option>
										<option value='2'>Investments</option>
										<option value='2'>Machinery and equipments</option>
										<option value='2'>Real States</option>
										<option value='2'>Valuables and Collectibles</option>
									</select>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Borrower Name' />
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Serial#' />
								</div>
							</div>
						</div>
						<div className='row'>
							<div class='col-md-6'>
								<div className='form-group'>
									<input type='date' className='form-control' placeholder='From Date:dd/mm/yyyy' />
								</div>
							</div>
							<div class='col-md-6'>
								<div className='form-group'>
									<input type='date' className='form-control' placeholder='To Date:dd/mm/yyyy' />
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
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
