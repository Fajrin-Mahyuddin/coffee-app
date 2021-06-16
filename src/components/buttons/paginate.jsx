import React from 'react';

const Paginate = () => {
	return (
		<div className="paginate-wrapper">
			<div className="text-paginate">
				Lorem ipsum dolor sit amet.
			</div>
			<div className="btn-paginate">
				<button type="button" className="page-left" onClick={() => console.log("oke")}>-</button>
				<button type="button" className="page-num">1</button>
				<button type="button" className="page-num">2</button>
				<button type="button" className="page-num">3</button>
				<button type="button" className="page-right" disabled>+</button>
			</div>
		</div>
	)
}

export default Paginate;