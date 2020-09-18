import React from 'react';
import { Link } from 'react-router-dom';

import LateLoan from './pastLoan';

const LateLoanOne = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className='header-borrower col-md-12 col-sm-12'>
				1 Month Late Loans
				<span style={{ fontSize: '1.2rem' }}>
					<Link>Help</Link>
				</span>
			</div>
			<div className='col-md-12 col-sm-12'>
				<div className='box'>
					<p>
						This shows loans overdue by 30 days ore more. This is calculated from the loan schedule for loans that are Missed Repayment, Arrears, or
						Past Maturity. We look at the last loan schedule date where the balance was 0 and then calculate the number of days between that schedule
						date and today.
					</p>
				</div>
			</div>
			<LateLoan />
		</div>
	);
};

export default LateLoanOne;
