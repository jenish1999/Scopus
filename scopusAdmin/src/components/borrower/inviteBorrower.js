import React from 'react';
import { Link } from 'react-router-dom';

import Error from '../Error/error';

const error = {
	previous: 'The email feature is only available for paid accounts. Please visit Settings(top menu)>>>Billing',
};

const InviteBorrower = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower'>Invite Borrowers</div>
			<Error error={error} />
			<div>
				<Link to='/borrower/invite-borrower' className='btn btn-danger'>
					Back
				</Link>
			</div>
		</div>
	);
};

export default InviteBorrower;
