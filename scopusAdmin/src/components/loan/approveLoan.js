import React from 'react';

const ApproveLoans = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower'>Approve Loans</div>
			<div className='col-md-12 col-sm-12' style={{ paddingLeft: '0' }}>
				<div className='box'>
					<div className='box-danger'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<h5>Processing</h5>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>No data found</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-md-12 col-sm-12' style={{ paddingLeft: '0' }}>
				<div className='box'>
					<div className='box-danger'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<h5>Open</h5>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>No data found</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-md-12 col-sm-12' style={{ paddingLeft: '0' }}>
				<div className='box'>
					<div className='box-danger'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<h5>Defaulted</h5>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>No data found</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-md-12 col-sm-12' style={{ paddingLeft: '0' }}>
				<div className='box'>
					<div className='box-danger'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<h5>Denied</h5>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>No data found</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-md-12 col-sm-12' style={{ paddingLeft: '0' }}>
				<div className='box'>
					<div className='box-danger'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<h5>Not Taken Up</h5>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>No data found</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApproveLoans;
