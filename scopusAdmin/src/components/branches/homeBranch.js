import React, { useState } from 'react';
import './branch.css';

import Error from '../Error/error';
import Card from '../card/card';

const error = {
	previous:
		'You have not activated your email. This means we can not send you daily report emails. Please check your inbox/spam/junk folder to locate the activation email, If you can not see visit Admin(top menu) -> Manage Staff -> Staff and click on Resend Activation Button',
};

const HomeBranch = () => {
	const [total, setTotal] = useState([{}, {}, {}, {}]);

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower'>Home Branch</div>
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
				<button type='button' className='btn btn-default'>
					New Feature
				</button>
				<button type='button' className='btn btn-default'>
					New Videos
				</button>
			</div>
			<Error error={error} />
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<form style={{ display: 'flex' }}>
					<div className='form-group'>
						<input type='text' className='form-control' placeholder='Branch #1' />
					</div>
					<button type='button' className='btn btn-primary btn-update'>
						Update this page
					</button>
				</form>
			</div>
			<div className='row'>
				<div className='col-md-12'>
					{total.map(cardview => (
						<div className='row'>
							<div className='col-md-3'>
								<Card />
							</div>
							<div className='col-md-3'>
								<Card />
							</div>
							<div className='col-md-3'>
								<Card />
							</div>
							<div className='col-md-3'>
								<Card />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeBranch;
