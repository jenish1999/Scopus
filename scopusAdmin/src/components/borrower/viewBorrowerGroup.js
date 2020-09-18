import React, { useState } from 'react';
import './viewBorrower.css';
import { Link } from 'react-router-dom';

const ViewBorrowerGroup = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div className='row'>
			<div className='col-md-12' style={{ display: 'flex', flexDirection: 'column' }}>
				<div className='header-borrower'>
					View Borrowers
					<span style={{ fontSize: '1.2rem' }}>
						<Link>Help</Link>
					</span>
				</div>
				<div className='box'>
					<div className='box-success'>
						<div className='form-group'>
							<input type='text' className='form-control' placeholder='Group Name or Borrower/Busssiness Name' />
						</div>
						<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
							<button type='button' className='btn bg-olive btn-flat'>
								Search!
							</button>
							<button type='button' className='btn bg-purple btn-flat'>
								Reset!
							</button>
						</div>
					</div>
				</div>
				{advanceSearch ? <div>This is the advance search</div> : null}
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<button type='button' className='btn btn-default'>
						Export Data
					</button>
					<button type='button' className='btn btn-default'>
						Show/Hide Columns
					</button>
				</div>

				<div className='box'>
					<div className='box-info'>
						<div style={{ padding: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
										<th scope='col'>Group Name</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Borrower
										</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Group Leader
										</th>
										<th scope='col'>Collector</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Meeting
										</th>
										<th scope='col'>
											<i class='fas fa-sort'></i> Action
										</th>
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
	);
};

export default ViewBorrowerGroup;
