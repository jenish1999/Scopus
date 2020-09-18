import React, { useState } from 'react';
import { saving_reports } from '../../assets/tables';
import DateTimeFilter from './dateTimeFilter';

const SavingsProductReport = () => {
	const [data, setData] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>View Savings Accounts</h1>
						</div>
					</div>
				</div>
				<DateTimeFilter />

				<div className='row'>
					<div className='col-md-12'>
						<div className='box'>
							<p>
								Savings accounts which have transactions between <b>Thu 10th Sep 15, 12:00am</b> - <b>Thu 10th Sep 20, 11:59pm</b> are shown below.
								You can edit the dates above.
							</p>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						{data.length > 0 ? (
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
													{saving_reports.map(t_head => (
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
						) : (
							<div className='box'>
								<div className='box-default'>
									<p>There are no savings accounts in the branch.</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SavingsProductReport;
