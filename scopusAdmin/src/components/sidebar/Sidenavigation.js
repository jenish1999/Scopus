import React, { useState, useContext } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import default_icon from '../../assets/default-icon.jpg';
import { SideMenuItem } from '../../assets/config';
import { UserContext } from '../../context';

const SideNavigation = () => {
	const { current } = useContext(UserContext);

	return (
		<aside className='main-sidebar'>
			<section className='sidebar'>
				<div className='user-panel'>
					<div className='pull-left image'>
						<img src={default_icon} className='img-circle' alt='User' />
					</div>
					<div className='pull-left info'>
						<p>{current}</p>
					</div>
				</div>
				{/* Sidebar Menu */}
				<ul className='sidebar-menu' data-widget='tree'>
					<li className='main-tabs'>
						<Link to='/branch/view-branch'>
							<i className='fas fa-eye' />
							<span>View Another Branch</span>
						</Link>
					</li>
					{SideMenuItem.map(item => (
						<NavMenu list={item} key={item.key} />
					))}
				</ul>
			</section>
		</aside>
	);
};

const NavMenu = ({ list }) => {
	const [exdVal] = useState(list.extendedValue);
	return (
		<li className={`${list.extended ? 'treeview' : ''} main-tabs`}>
			<Link to={list.to ? list.to : window.location.pathname}>
				<i className={list.icon} />
				<span>{list.value}</span>
				{list.extended ? (
					<span className='pull-right-container'>
						<i className='fa fa-angle-left pull-right' />
					</span>
				) : (
					''
				)}
			</Link>
			{exdVal && list.extended ? (
				<ul className='treeview-menu'>
					{exdVal.map(subItem => (
						<li className='sub-main-tabs' key={subItem.key}>
							<Link to={subItem.to}>
								<i className='far fa-circle'></i> <span>{subItem.exdValue}</span>
							</Link>
						</li>
					))}
				</ul>
			) : (
				''
			)}
		</li>
	);
};

export default SideNavigation;
