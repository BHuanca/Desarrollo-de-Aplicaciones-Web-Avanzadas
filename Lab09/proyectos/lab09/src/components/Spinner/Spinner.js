import React, { Fragment } from 'react';

import '../../assets/css/Spinner.css';

const Spinner = () => {
	return (
		<Fragment>
			<div class="lds-roller">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</Fragment>
	);
};

export default Spinner;
