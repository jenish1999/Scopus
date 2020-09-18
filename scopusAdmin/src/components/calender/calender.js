import React, { useState } from 'react';
import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Link } from 'react-router-dom';

const Calender = () => {
	const [events, setEvents] = useState([
		{ title: 'Need to enhance', date: '2020-09-09' },
		{ title: 'event 2', date: '2019-04-02' },
		{ title: 'SCOPUS Admin', date: '2020-09-06' },
	]);

	const handleDateClick = e => {
		console.log(e.dateStr);
	};

	return (
		<div className='row'>
			<div className='col-lg-12 col-md-12 col-sm-12'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='content-header'>
							<h1>Calender</h1>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<Link className='btn btn-default' to='/add_event/calendar'>
							Add Event
						</Link>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='box'>
							<div className='box-primary'>
								<FullCalender
									plugins={[dayGridPlugin, timeGridlugin, interactionPlugin]}
									initialView='dayGridMonth'
									events={events}
									selectable={true}
									dateClick={e => handleDateClick(e)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calender;
