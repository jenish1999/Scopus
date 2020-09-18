import React from 'react';

import Error from '../Error/error';

const error = {
	previous: 'The email feature is only available for paid accounts. Please visit Settings(top menu)>>>Billing',
};

const EmailtoBorrower = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower'>Send Email to all Borrowers</div>
			<Error error={error} />
		</div>
	);
};

export default EmailtoBorrower;
