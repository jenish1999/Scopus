import React from 'react';

const SearchBar = () => {
	return (
		<div className='row' style={{ paddingTop: '5px' }}>
			<div className='col-md-2'>
				<select style={{ width: '100%', height: '40px' }}>
					<option>Borrower</option>
					<option>Loan</option>
					<option>Option c</option>
				</select>
			</div>
			<div className='col-md-9'>
				<input type='text' className='form-control' placeholder='Search' />
			</div>
			<div className='col-md-1'>
				<button type='button' className='btn btn-default'>
					<i class='fas fa-search'></i>
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
