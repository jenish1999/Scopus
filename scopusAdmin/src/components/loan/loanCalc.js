import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoanClaculator = () => {
	const [advanceSearch, setAdvanceSearch] = useState(false);

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='col-md-12 col-sm-12 header-borrower'>
				Loan Calculator
				<span style={{ fontSize: '1.2rem' }}>
					<Link>Help</Link>
				</span>
			</div>
			<div className='col-md-12 col-sm-12'>
				<div className='box'>
					<div className='box-info'>
						<div className='form-row'>
							<div className='col-md-12 col-sm-12 mb-3'>
								You can use this page to calculate the loan value in case of customer inquiries. To add a loan into the system, visit Loans(left menu)
								→ <Link to='/loan/add-loan'>Add Loan</Link>.
							</div>
						</div>
						<div className='form-group'>
							<div className='form-row'>
								<div className='col-md-3 rt-options'>Loan Product</div>
								<div className='col-md-6 col-sm-12'>
									<select className='form-control'>
										<option></option>
										<option>Bussiness Loan</option>
										<option>Overseas Worker Loan</option>
										<option>Pensioner Loan</option>
										<option>Personal Loan</option>
										<option>Student Loan</option>
									</select>
								</div>
							</div>
						</div>
						<div className='form-group'>
							<div className='form-row'>
								<div className='col-md-12 col-sm-12 mb-3'>
									<div className='heading-box'>Loan Terms:</div>
								</div>
							</div>
						</div>
						<div className='form-row'>
							<div className='col-md-12 col-sm-12 mb-3 --red'>Principal:</div>
						</div>
						<div className='form-group'>
							<div className='form-row'>
								<div className='col-md-3 col-sm-12 rt-options'>Principal Amount</div>
								<div className='col-md-6 col-sm-12 mb-3'>
									<input type='text' className='form-control' placeholder='Principal Amount' />
								</div>
							</div>
						</div>
						<div className='form-group'>
							<div className='form-row'>
								<div className='col-md-3 col-sm-12 rt-options'>Loan Release Date</div>
								<div className='col-md-6 col-sm-12 mb-3'>
									<input type='date' className='form-control' />
								</div>
							</div>
						</div>
						<div className='form-row'>
							<div className='col-md-12 col-sm-12 mb-3 --red'>Interest:</div>
						</div>
						<div className='form-group'>
							<div className='form-row'>
								<div className='col-md-3 col-sm-12 rt-options'>Interest Method</div>
								<div className='col-md-6 col-sm-12 mb-3'>
									<select className='form-control'>
										<option>Flat Rate</option>
										<option>Reducing Balance - Equal Installment</option>
										<option>Reducing Balance - Equal Principal</option>
										<option>Interest-Only</option>
										<option>Compound Interest</option>
									</select>
								</div>
							</div>
						</div>
						<div className='form-group'>
							<div className='form-row'>
								<div className='col-md-3 col-sm-12 rt-options'>Interest Type</div>
								<div className='col-md-6 col-sm-12 mb-3'>
									<div class='form-check'>
										<input class='form-check-input' type='radio' name='interest-type' id='percentage-based' checked />
										<label class='form-check-label' for='percentage-based'>
											I want Interest to be percentage % based
										</label>
									</div>
									<div class='form-check'>
										<input class='form-check-input' type='radio' name='interest-type' id='fixed-amount' />
										<label class='form-check-label' for='fixed-amount'>
											I want Interest to be a fixed amount Per Cycle
										</label>
									</div>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='form-row'>
								<div className='col-md-3 col-sm-12 rt-options'>Interest Method</div>
								<div className='col-md-3 col-sm-6 mb-3'>
									<input type='number' className='form-control' placeholder='%' />
								</div>
								<div className='col-md-3 col-sm-6 mb-3'>
									<select className='form-control'>
										<option>Per Day</option>
										<option>Per Week</option>
										<option>Per Month</option>
										<option>Per Year</option>
										<option>Per Loan</option>
									</select>
								</div>
							</div>
						</div>

						<div className='form-row'>
							<div className='col-md-12 col-sm-12 mb-3 --red'>Duration:</div>
						</div>
						<div className='form-group'>
							<div className='form-row'>
								<div className='col-md-3 col-sm-12 rt-options'>Loan Duration</div>
								<div className='col-md-3 col-sm-6 mb-3'>
									<input type='number' className='form-control' placeholder='1' />
								</div>
								<div className='col-md-3 col-sm-6 mb-3'>
									<select className='form-control'>
										<option></option>
										<option>Day</option>
										<option>Week</option>
										<option>Month</option>
										<option>Year</option>
									</select>
								</div>
							</div>
						</div>

						<div className='form-row'>
							<div className='col-md-12 col-sm-12 mb-3 --red'>Repayments:</div>
						</div>
						<div className='form-group'>
							<div className='form-row'>
								<div className='col-md-3 col-sm-12 rt-options'>Repayment Cycle</div>
								<div className='col-md-6 col-sm-12 mb-3'>
									<select className='form-control'>
										<option></option>
										<option>Daily</option>
										<option>Weekly</option>
										<option>Biweekly</option>
										<option>Monthly</option>
										<option>Bimonthly</option>
										<option>Quarterly</option>
										<option>Every 4 months</option>
										<option>Semi-annual</option>
										<option>Yearly</option>
										<option>Lump-Sum</option>
									</select>
								</div>
							</div>
							<div className='form-row'>
								<div className='col-md-3 col-sm-12 rt-options'>Number of Repayments</div>
								<div className='col-md-3 col-sm-6 mb-3'>
									<input type='number' className='form-control' placeholder='1' />
								</div>
							</div>
						</div>

						<div className='advance-search-toggle col-md-12 col-sm-12'>
							Advanced Settings:&nbsp;
							<Link onClick={() => setAdvanceSearch(!advanceSearch)}>{!advanceSearch ? <span>Show</span> : <span>Hide</span>}</Link>
						</div>

						{advanceSearch ? <div>Advace Search Form connect</div> : null}

						<div className='form-row' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<button type='button' className='btn btn-default'>
								Reset
							</button>
							<button type='button' className='btn btn-primary'>
								Calculate
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoanClaculator;
