import React from 'react';

import Error from '../Error/error';

const error = {
	previous: 'You do not have any SMS Credit Available. Please Click',
	next: 'and add Credit',
	link: '#',
	linkMessage: 'SMS Credits',
	secondary:
		'Alternatiely, you can use SMS provider, send us their API details at support@loandisk.com. You would pay your SMS Provider but SMS will be sent from loandisk',
};

const SMStoBorrower = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower'>Send SMS to all Borrowers</div>
			<Error error={error} />
		</div>
	);
};

export default SMStoBorrower;
