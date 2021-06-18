import React from 'react';

const Paginate = ({ className }) => {
	return (
		<div className={`paginate-wrapper ${className}`}>
			<div className="text-paginate">
				Lorem ipsum dolor sit amet.
			</div>
			<div className="btn-paginate">
				<button type="button" className="page-left" onClick={() => console.log("oke")}>Prev </button>
				<button type="button" className="page-num" disabled>...</button>
				<button type="button" className="page-num">2</button>
				<button type="button" className="page-num">3</button>
				<button type="button" className="page-num">4</button>
				<button type="button" className="page-num" disabled>...</button>
				<button type="button" className="page-right" disabled>Next</button>
			</div>
		</div>
	)
}

export default Paginate;