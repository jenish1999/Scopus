import React from 'react';
import './card.css';
import star from '../../assets/star.jpg';

const Card = () => {
	return (
		<div className='card'>
			<div className='row'>
				<div className='col-md-4'>
					<img src={star} alt='' style={{height : '90px', width : '90px'}}/>
				</div>
				<div className='col-md-8'>
					<h3>Titlee</h3>
					<h5>Credentials</h5>
				</div>
			</div>
		</div>
	);
};

export default Card;
