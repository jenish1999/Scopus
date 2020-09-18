import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { view_investors } from '../../assets/tables';

const ViewInvestors = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>View Savings Transactions</h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='advance-search-toggle'>
							<b>
								Advanced Search:
								{!advanceSearch ? (
									<Link onClick={() => setAdvanceSearch(true)}>Click here to Show</Link>
								) : (
									<Link onClick={() => setAdvanceSearch(false)}>Click here to Hide</Link>
								)}
							</b>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>{advanceSearch ? <AdvancedSearch /> : ''}</div>
				</div>

				<div className='row'>
					<div className='col-md-12'>
						<Link className='btn bg-olive'>Add Investor</Link>
					</div>
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
									<div className='form-group' style={{ display: 'flex' }}>
										Show
										<select className='form-control'>
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
												{view_investors.map(t_head => (
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
												No data found. <Link to='/investors/add-investors'>Click to Add Investor</Link>{' '}
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

export default ViewInvestors;

const AdvancedSearch = () => {
	return (
		<div className='box'>
			<div className='box-success'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='form-group'>
							<input type='text' className='form-control' placeholder='Investor Name or Bussiness Name' />
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<input type='text' className='form-control' placeholder='Investor Unique Number' />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<div className='form-group'>
							<input type='email' className='form-control' placeholder='Investor Email' />
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<input type='number' className='form-control' placeholder='Investor Mobile' />
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
	);
};
