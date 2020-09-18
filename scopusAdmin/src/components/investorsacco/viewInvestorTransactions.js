import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { view_investor_trans } from '../../assets/tables';

const ViewInvestorsTransactions = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>View Investor Transactions</h1>
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
												{view_investor_trans.map(t_head => (
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
												No data found. To add a savings account, visit <b>Savings</b>(left menu) --- <b>Add Savings Account</b>
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

export default ViewInvestorsTransactions;

export const AdvancedSearch = () => {
	const transaction_type = [
		{ value: 'deposit', label: 'Deposit' },
		{ value: 'withdrawl', label: 'Withdrawl' },
		{ value: 'bank fees', label: 'Bank Fees' },
		{ value: 'interest', label: 'Interest' },
		{ value: 'dividend', label: 'Dividend' },
		{ value: 'system generated interest', label: 'System Generated Interest' },
		{ value: 'system generated fees', label: 'System Generated Fees' },
		{ value: 'transfer in', label: 'Transfer In' },
		{ value: 'transfer out', label: 'Transfer Out' },
		{ value: 'commission', label: 'Commission' },
	];

	const loan_officers = [{ value: 'bhoopender singh', label: 'Bhooperder Singh' }];

	const staff = [];

	return (
		<div className='row'>
			<div className='col-md-12'>
				<div className='box'>
					<div className='box-success'>
						<div className='row'>
							<div className='col-md-12'>All fields are optional. You can type or select as many fields as you like.</div>
						</div>

						<div className='row'>
							<div className='col-md-3 col-sm-8'>
								<div className='row'>
									<div className='col-md-12'>
										From Date
										<div className='form-group'>
											<input type='date' className='form-control' />
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-sm-4'>
								<div className='row'>
									<div className='col-md-12'>
										From Time
										<div className='form-group'>
											<input type='time' className='form-control' />
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-sm-8'>
								<div className='row'>
									<div className='col-md-12'>
										To Date
										<div className='form-group'>
											<input type='date' className='form-control' />
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-3 col-sm-4'>
								<div className='row'>
									<div className='col-md-12'>
										To Time
										<div className='form-group'>
											<input type='time' className='form-control' />
										</div>
									</div>
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
									<input type='text' className='form-control' placeholder='Investor Name or Bussiness Name' />
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Investor Account #' />
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<Select options={staff} defaultValue={{ value: 'all staff', label: 'All Staff' }} />
									<small>
										Only staff who have entered transactions are shown.
										<br /> If you are searching for System Generated Interest/Fees, select All Staff.
									</small>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<Select options={transaction_type} defaultValue={{ value: 'all transacion type', label: 'All Transaction Type' }} />
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
