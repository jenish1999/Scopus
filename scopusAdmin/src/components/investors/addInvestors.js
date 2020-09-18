import React from 'react';

const AddInvestor = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower'>Add Investor</div>
			<div className='form-borrower'>
				<div className='box'>
					<div className='box-primary'>
						<div className='heading-box'>Required Fields:</div>
						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Country</div>
								<div className='col-md-9'>
									<select className='form-control'>
										<option></option>
										<option>India</option>
										<option>India</option>
										<option>India</option>
										<option>India</option>
									</select>
								</div>
							</div>
						</div>

						<div className='heading-box'>Optional Fields:</div>
						<div className='help-text'>
							All the fields are optional but you must type at least <b>First Name</b> and <b>Middle/Last Name</b> or <b>Bussiness Name</b>
						</div>
						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>First Name</div>
								<div className='col-md-9'>
									<input type='text' className='form-control' placeholder='Enter first Name Only' />
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Middle/Last Name</div>
								<div className='col-md-9'>
									<input type='text' className='form-control' placeholder='Middle or Last Name' />
								</div>
							</div>
						</div>

						<div>
							<div className='row' style={{ marginBottom: '10px' }}>
								<div className='col-md-3'></div>
								<div className='col-md-9'>
									<i>AND/OR</i>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Bussiness Name</div>
								<div className='col-md-9'>
									<input type='text' className='form-control' placeholder='Bussiness Name' />
								</div>
							</div>
						</div>

						<div className='help-text'>All the fields below are optional</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Unique Number</div>
								<div className='col-md-9'>
									<input type='text' className='form-control' placeholder='1000010' />
									<small className='form-text text-muted'>
										You can enter unique number to identify borrower such as Social Security Number, Liscence #, Registration Id...
									</small>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Gender </div>
								<div className='col-md-2'>
									<select className='form-control'>
										<option>Male</option>
										<option>Female</option>
									</select>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Title</div>
								<div className='col-md-2'>
									<select className='form-control'>
										<option>Mr.</option>
										<option>Ms.</option>
										<option>Mrs.</option>
									</select>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Mobile</div>
								<div className='col-md-9'>
									<input type='number' className='form-control' placeholder='Numbers only' />
									<small className='form-text text-muted'>
										<b>Do not put country code, space, characters</b> in mobile otherwise you won't be able to send SMS to this mobile.
									</small>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Email</div>
								<div className='col-md-9'>
									<input type='email' className='form-control' placeholder='example@example.com' />
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Date of Birth</div>
								<div className='col-md-9'>
									<input type='date' className='form-control' placeholder='dd/mm/yyyy' />
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Address</div>
								<div className='col-md-9'>
									<input type='text' className='form-control' placeholder='Address' />
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>City</div>
								<div className='col-md-9'>
									<input type='text' className='form-control' placeholder='City' />
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Province/State</div>
								<div className='col-md-9'>
									<input type='text' className='form-control' placeholder='Province or State' />
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Zipcode</div>
								<div className='col-md-9'>
									<input type='number' className='form-control' placeholder='Zipcode' />
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Landline Phone</div>
								<div className='col-md-9'>
									<input type='number' className='form-control' placeholder='Landline Phone' />
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Working Status</div>
								<div className='col-md-2'>
									<select className='form-control'>
										<option>Employed</option>
										<option>Unemployed</option>
										<option>Student</option>
									</select>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Borrower Photo</div>
								<div className='col-md-9'>
									<input type='file' className='form-control' placeholder='Borrower Photo' />
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Description</div>
								<div className='col-md-9'>
									<textarea className='form-control' rows='3'></textarea>
								</div>
							</div>
						</div>

						<div className='form-group'>
							<div className='row'>
								<div className='col-md-3 rt-options'>Borrower Files</div>
								<div className='col-md-9'>
									<input type='file' className='form-control' placeholder='Borrower Files' />
								</div>
							</div>
						</div>

						<div style={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}>
							<button type='button' className='btn btn-default'>
								Back
							</button>
							<button type='button' className='btn btn-primary'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddInvestor;
