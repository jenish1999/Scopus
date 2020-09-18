import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { guarantors } from '../../assets/tables';

const Guarantors = () => {
	const [data, setData] = useState([]);
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower col-md-12 col-sm-12'>Guarantors</div>
			<div className='col-md-12 col-sm-12'>
				Here you can add guarantors for loans. These can be selected in the <b>Add Loan</b> page. You can also send sms or email to the gaurantors.
			</div>
			<div className='col-md-12' style={{ margin: '5px 0' }}>
				<Link to='/loan/guarantor/add-guarantor' className='btn btn-success'>
					Add Guarantor
				</Link>
			</div>

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
										{guarantors.map(t_head => (
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
										No data found. <Link to='/loan/guarantor/add-guarantor'>Click to Add Guarantor</Link>
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

export default Guarantors;
