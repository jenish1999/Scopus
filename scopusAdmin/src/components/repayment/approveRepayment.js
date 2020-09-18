import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AdvancedSearch } from './viewRepayments';
import { approve_payments } from '../../assets/tables';

const ApproveRepayments = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Approve Repayments</h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
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
									<button type='button' className='btn btn-primary'>
										Approve Payments
									</button>
									<button type='button' className='btn btn-danger'>
										Delete Payments
									</button>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-lg-12 col-md-12 col-sm-12'>
								{/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
								<button type='button' className='btn btn-default'>
									Export Data
								</button>
								{/* </div> */}
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
														<th scope='col'>
															<input type='checkbox' className='form-control' />
														</th>
														{approve_payments.map(t_head => (
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
														No pending repayments found for approval. To restrict staff so they can only add payments for approval, visit{' '}
														<Link>
															<b>Admin</b>
														</Link>
														(top menu) ---{' '}
														<Link>
															<b>Staff</b>
														</Link>{' '}
														--- <b>Edit</b>. There, check <b>Restrict Add/Edit Repayments for Approval;</b>.
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
			</div>
		</div>
	);
};

export default ApproveRepayments;
