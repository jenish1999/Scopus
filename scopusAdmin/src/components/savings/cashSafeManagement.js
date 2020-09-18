import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DateTimeFilter from './dateTimeFilter';
import { cash_safe_management } from '../../assets/tables';

const CashSafeManagement = () => {
	const [data, setDate] = useState([]);
	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Cash Safe Management</h1>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12'>
						<div className='box'>
							<div className='box-default'>
								<p>
									Often cooperatives that accept savings accounts have cash safes for storage of notes and coins. These are given to the tellers for
									daily use. Below you can add cash safes, bank accounts, and other sources of cash. Then you can add tellers(from registered staff)
									who will disburse that cash to people visiting the branch. This will help keep a track of how much balance is remaining with tellers
									at end of day.
								</p>
							</div>
						</div>
					</div>
				</div>
				<DateTimeFilter />

				<div className='row'>
					<div className='col-md-12'>
						<div className='heading-box'>SOURCES:</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<Link className='btn  bg-olive'>Add Cash Source/Cash Safe/Bank Account</Link>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12'>
						<div className='heading-box'>TELLERS:</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<Link className='btn  bg-olive'>Add Teller</Link>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12'>
						<div className='heading-box'>TRANSACTIONS:</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<Link className='btn  bg-olive'>Transfer Cash</Link>
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
												{cash_safe_management.map(t_head => (
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
											<div style={{ textAlign: 'center' }}>No data found. No transactions accounts found.</div>
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

export default CashSafeManagement;
