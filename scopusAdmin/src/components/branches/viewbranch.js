import React from 'react';
import './branch.css';
import { Link } from 'react-router-dom';

const ViewBranch = () => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				<div className='box box-info'>
					<div className='box-body'>
						<div className='disc'>
							If you have multiple branches in your account, you can use this page to select another branch. Then, you can operate the below selected
							branch and perform all functions such as adding/editing loans, repayments, saving, expenses, payroll, view reports...
						</div>
						<div className='row'>
							<div className='col-md-3' style={{ padding: '20px 0', textAlign: 'right', fontSize: '1.3rem', fontWeight: '500' }}>
								Current Branch :&nbsp;
							</div>
							<div className='col-md-9' style={{ padding: '20px 0', color: '#158467', fontSize: '1.3rem', fontWeight: '500' }}>
								&nbsp;Branch #1
							</div>
						</div>
						<div className='row'>
							<div className='col-md-3' style={{ padding: '20px 0', textAlign: 'right', fontSize: '1.3rem', fontWeight: '500' }}>
								Change to branch :&nbsp;
							</div>
							<div className='col-md-9' style={{ padding: '20px 0', fontSize: '1.3rem', fontWeight: '500' }}>
								&nbsp;You do not have a branch <Link to='#'>Click to add Branch</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewBranch;
