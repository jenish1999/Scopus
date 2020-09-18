import React, { useState } from 'react';
import './error.css';
import { Link } from 'react-router-dom';

const Error = ({ error }) => {
	const [hide, setHide] = useState(false);

	return (
		<div>
			{!hide ? (
				<div className='box-error'>
					<div className='primary-error-part'>
						<div className='error-msg'>
							{error.previous} &nbsp;
							{error.link ? (
								<Link to={error.link}>
									<u>{error.linkMessage}</u>
								</Link>
							) : null}{' '}
							&nbsp;
							{error.next ? <span>{error.next}</span> : null}
						</div>
						<div className='exit'>
							<button type='button' className='btn' onClick={() => setHide(true)}>
								<i class='fas fa-times'></i>
							</button>
						</div>
					</div>
					<div className='secondary-error-part'>{error.secondary ? <div>{error.secondary}</div> : ''}</div>
				</div>
			) : null}
		</div>
	);
};

export default Error;
