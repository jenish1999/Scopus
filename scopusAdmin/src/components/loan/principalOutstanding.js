import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { past_maturity_date } from '../../assets/tables';
import { AdvancedSearch } from './viewloan';

const PrincipalOutstanding = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower col-md-12 col-sm-12'>Principal Outstanding</div>
			<div className='col-md-12 col-sm-12'>
				Outstanding principal balance for <b>Open</b> loans.
			</div>
			<div className='advance-search-toggle col-md-12 col-sm-12'>
				Advanced Search:&nbsp;
				<Link onClick={() => setAdvanceSearch(!advanceSearch)}>
					{!advanceSearch ? <span>Click here to Show</span> : <span>Click here to hide</span>}
				</Link>
			</div>
			<div className='col-md-12 col-sm-12'>{advanceSearch ? <AdvancedSearch /> : null}</div>
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
			<div className='col-md-12 col-sm-12'>
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
										{past_maturity_date.map(t_head => (
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
									<div style={{ textAlign: 'center' }}>No data found. No loans found.</div>
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

export default PrincipalOutstanding;
