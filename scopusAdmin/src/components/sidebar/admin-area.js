import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import default_icon from '../../assets/default-icon.jpg';
import { SidebarContext } from '../../context';

const AdminArea = () => {
	const { shrink, current } = useContext(SidebarContext);

	return (
		<div className='row'>
			{!shrink ? (
				<div className='col-auto admin-tabs'>
					<div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
						<div className='admin-icon'>
							<img className='img-fluid' src={default_icon} alt='admin'></img>
						</div>
						<div className='admin-name'>{current}</div>
					</div>
				</div>
			) : (
				<div className='col-md-8 admin-tabs'>
					<div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
						<div className='admin-icon icon-only'>
							<img className='img-fluid' src={default_icon} alt='admin'></img>
						</div>
					</div>
				</div>
			)}
			{!shrink ? (
				<div className='col-md-12 admin-tabs'>
					<div className='other-branch'>
						<ul>
							<Link to='view-branch' style={{ color: '#ffffff', fontSize: '0.8rem' }}>
								<li>
									<i className='bx bxs-show'></i> View Other Branch
								</li>
							</Link>
						</ul>
					</div>
				</div>
			) : (
				<div className='col-md-8 admin-tabs'>
					<div className='other-branch' style={{ display: 'flex', justifyContent: 'center' }}>
						<Link to='#' className='btn' style={{ color: '#ffffff', fontSize: '0.8rem' }}>
							<i className='bx bxs-show'></i>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminArea;
