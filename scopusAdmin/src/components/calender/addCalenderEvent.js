import React from 'react';
import { Link } from 'react-router-dom';

const AddCalenderEvent = () => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='content-header'>
							<h1>Add Event</h1>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12'>
						<div className='box'>
							<div className='box-info'>
								<div className='row'>
									<div className='col-md-12'>
										<div className='heading-box'>Required Fields:</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-2 rt-options'>Title</div>
									<div className='col-md-10'>
										<div className='form-group'>
											<input type='text' className='form-control' placeholder='Event Name' />
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-2 rt-options'>When?</div>
									<div className='col-md-2'>
										<div className='row'>
											<div className='col-md-12'>
												<div className='form-group element-with-bottom-text'>
													<input type='date' className='form-control' />
												</div>
												<div className='help-bottom-text'>From Date</div>
											</div>
										</div>
									</div>
									<div className='col-md-2'>
										<div className='row'>
											<div className='col-md-12'>
												<div className='form-group element-with-bottom-text'>
													<input type='time' className='form-control' />
												</div>
												<div className='help-bottom-text'>From Time</div>
											</div>
										</div>
									</div>
									<div className='col-md-2'>
										<div style={{ textAlign: 'center', fontWeight: '600', marginTop: '7px' }}>
											<i>till</i>
										</div>
									</div>
									<div className='col-md-2'>
										<div className='row'>
											<div className='col-md-12'>
												<div className='form-group element-with-bottom-text'>
													<input type='date' className='form-control' placeholder='Event Name' />
												</div>
												<div className='help-bottom-text'>To Date</div>
											</div>
										</div>
									</div>
									<div className='col-md-2'>
										<div className='row'>
											<div className='col-md-12'>
												<div className='form-group element-with-bottom-text'>
													<input type='time' className='form-control' placeholder='Event Name' />
												</div>
											</div>
											<div className='help-bottom-text'>To Time</div>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-2 rt-options'>Timezone</div>
									<div className='col-md-5'>
										<div className='form-group'>
											<select className='form-control'>
												<option>Kolkata/India</option>
												<option>England</option>
												<option>Australia</option>
												<option>Austria</option>
												<option>Canada</option>
											</select>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-12'>
										<div className='heading-box'>Optional Fields:</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-2 rt-options'>Location</div>
									<div className='col-md-10'>
										<div className='form-group'>
											<input type='text' className='form-control' placeholder='Event Location' />
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-2 rt-options'>Invite Guests</div>
									<div className='col-md-10'>
										<div className='form-group element-with-bottom-text'>
											<input type='text' className='form-control ' placeholder='abc@abc.com, example@example.com' />
										</div>
										<div className='help-bottom-text'>Email will be sent to the guests with the event details</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-2 rt-options'>Notification</div>
									<div className='col-md-10'>
										<div className='form-group element-with-bottom-text'>
											<select className='form-control'>
												<option>1 hour before</option>
												<option>2 hour before</option>
												<option>3 hour before</option>
												<option>4 hour before</option>
											</select>
										</div>
										<div className='help-bottom-text'>Notification email will be sent to the invitees</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-2 rt-options'>Description</div>
									<div className='col-md-10'>
										<div className='form-group'>
											<textarea className='form-control'></textarea>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
										<Link className='btn btn-default' to='/plan/calendar'>
											Back
										</Link>
										<Link className='btn btn-primary'>Submit</Link>
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

export default AddCalenderEvent;
