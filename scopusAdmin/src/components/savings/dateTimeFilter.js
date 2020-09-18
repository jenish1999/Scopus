import React from 'react';

const DateTimeFilter = () => {
	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='box'>
					<div className='box-success'>
						<div className='row'>
							<div className='col-md-12'>
								<div className='content-header'>
									<h4>Date Range</h4>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-3 col-sm-8'>
								<div className='row'>
									<div className='col-md-12'>
										From Date
										<div className='form-group'>
											<input type='date' className='form-control' />
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-2 col-sm-4'>
								<div className='row'>
									<div className='col-md-12'>
										From Time
										<div className='form-group'>
											<input type='time' className='form-control' />
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-2'>
								<div style={{ textAlign: 'center', fontWeight: '600', marginTop: '7px' }}>
									<i>till</i>
								</div>
							</div>
							<div className='col-md-3 col-sm-8'>
								<div className='row'>
									<div className='col-md-12'>
										To Date
										<div className='form-group'>
											<input type='date' className='form-control' placeholder='Event Name' />
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-2 col-sm-4'>
								<div className='row'>
									<div className='col-md-12'>
										To Time
										<div className='form-group'>
											<input type='time' className='form-control' placeholder='Event Name' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<button type='button' className='btn bg-olive btn-flat'>
									Search!
								</button>
								<button type='button' className='btn bg-purple btn-flat'>
									Reset!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DateTimeFilter;
