import React from 'react';
import { CollectionSheetOptions } from './dailyCollectionSheet';

const PastMaturityLoans = () => {
	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Past Maturity Date Loans</h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='box'>
							<div className='box-info'>
								<div className='row'>
									<div className='col-md-12'>
										This will show all loans that have <b>missed repayments until the below selected missed repayment date</b>.
									</div>
								</div>
								<div className='row'>
									<div className='col-md-3 rt-options'>Loan Products</div>
									<div className='col-md-5'>
										<div className='form-group'>
											<select className='form-control'>
												<option selected>All Loan Products</option>
												<option value='1'>Bussiness Loan</option>
												<option>Student Loan</option>
												<option>Oversease Worker Loan</option>
												<option>Personal Loan</option>
												<option>Pensioner Loan</option>
											</select>
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-3 rt-options'>Maturity Date</div>
									<div className='col-md-5'>
										<div className='form-group'>
											<input type='date' className='form-control' />
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-3 rt-options'>Select Staff</div>
									<div className='col-md-5'>
										<div className='form-group'>
											<select className='form-control'>
												<option selected>All</option>
												<option value='1'>Bhupender Bhaskar</option>
											</select>
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-3'></div>
									<div className='col-md-9' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
										<div className='form-group'>
											<input type='radio' name='loantype' />
											Individual Loans
										</div>
										<div className='form-group'>
											<input type='radio' name='loantype' />
											Group Loans (if you give group loans, this is for you)
										</div>
									</div>
								</div>
								<CollectionSheetOptions />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PastMaturityLoans;
