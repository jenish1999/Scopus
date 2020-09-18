import React from 'react';
import { Link } from 'react-router-dom';

const DailyCollectionSheet = () => {
	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Daily Collection Sheet</h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='box'>
							<div className='box-info'>
								<div className='row'>
									<div className='col-md-12'>
										This will show all loans whose{' '}
										<b>
											amortization is <u>due in between the below selected dates</u>
										</b>
										.
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
									<div className='col-md-3 rt-options'>From Date</div>
									<div className='col-md-5'>
										<div className='form-group'>
											<input type='date' className='form-control' />
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-3 rt-options'>To Date</div>
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
											<input type='checkbox' />
											Include borrowers with zero due amounts?
										</div>
										<div className='form-group'>
											<input type='checkbox' />
											Show last collection only if a loan has multiple collections due between the above <b>From Date </b> and <b>To Date</b>
										</div>
										<div className='form-group'>
											<input type='checkbox' />
											Do not include System Generated Penalties that are due between the above <b>From Date </b> and <b>To Date</b>
										</div>
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

export default DailyCollectionSheet;

export const CollectionSheetOptions = () => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='heading-box'>Choose which columns to show in the collection sheet:</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='box'>
							<p>
								You can move the fields from <b>Available Columns</b> to <b>Shown Columns</b> box by using the arrows in the middle. Also you can move
								the fields up or down in the <b>Shown Columns</b> box by using the arrows below the box. This will affect the order in which they are
								displayed.
								<br />
								To change <b>Shown Columns</b> back to the default view,
								<Link>
									<b>click here</b>
								</Link>
								. <br />
								To rename the above columns, visit
								<Link>
									<b>Admin</b>
								</Link>
								(top menu) →<b>Borrowers</b> →
								<Link>
									<b>Rename Collection Sheet Headings.</b>
								</Link>
							</p>
						</div>
					</div>
				</div>
				{/* To add */}
				<div className='row'>
					<div className='col-md-12'>
						<div className='heading-box'>Print sheet or download the sheet in Excel or CSV:</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-3'></div>
					<div className='col-md-5'>
						<button type='button' className='btn btn-primary'>
							Print
						</button>
						<button type='button' className='btn btn-default'>
							Download in Excel
						</button>
						<button type='button' className='btn btn-default'>
							Download in CSV
						</button>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='heading-box'>Add generated collections to bulk repayments:</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='box'>
							<p>
								If you click the below button, you will be able to add the generated collections to the <Link>Add Bulk Repayments</Link> page. There
								you can edit the amounts on the <b>Add Bulk Repayments</b> page and add the collections in bulk to the loans. This will save time from
								manually adding each collection to the loans.
							</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-3'></div>
					<div className='col-md-5'>
						<button type='button' className='btn btn-default'>
							Add Collections to Bulk Repayments
						</button>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='heading-box'>Add generated collections to bulk savings transactions:</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='box'>
							<p>
								If you click the below button, you will be able to add the generated collections to the <Link>Add Bulk Transactions</Link>
								page. There you can edit the amounts on the <b>Add Bulk Transactions</b> page and add the collections in bulk to the savings account.
								The savings accounts of the borrower will show in each row.
							</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-3'></div>
					<div className='col-md-5'>
						<button type='button' className='btn btn-default'>
							Add Collections to Bulk Savings Transactions
						</button>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='box'>
							<p>Note: It may take a few mins to view the collection sheet depending on how many loans you have.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
