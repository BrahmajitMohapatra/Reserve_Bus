import "../../Styles/calender/calender.css"
import React, { useState } from 'react';

const DayCalendar = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const [displayedDate, setDisplayedDate] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Create an array of the next 7 days (including today)
  const days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(displayedDate.getDate() + i - 3);
    return date;
  });

  const handlePreviousDayClick = () => {
    const previousDay = new Date(displayedDate);
    previousDay.setDate(displayedDate.getDate() - 1);
    setDisplayedDate(previousDay);
  };

  const handleNextDayClick = () => {
    const nextDay = new Date(displayedDate);
    nextDay.setDate(displayedDate.getDate() + 1);
    setDisplayedDate(nextDay);
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setDisplayedDate(day);
  };

  // Get the name of the current month and year
  const monthName = displayedDate.toLocaleString('default', { month: 'long' });
  const year = displayedDate.getFullYear();

  return (
    <div className="day-calendar">
      <div className="month-year">
        <button className="previous-day" onClick={handlePreviousDayClick}>
          &lt;
        </button>
        <div className="month-year-text">
          {monthName} {year}
        </div>
        <button className="next-day" onClick={handleNextDayClick}>
          &gt;
        </button>
      </div>
      {days.map((day, index) => (
        <div
          key={index}
          className={`day ${day.getDate() === selectedDate.getDate() ? 'selected-day' : ''} ${day.getDate() === currentDate.getDate() ? 'current-day' : ''}`}
          onClick={() => handleDayClick(day)}
        >
          <div className="day-of-week">{daysOfWeek[day.getDay()]}</div>
          <div className="day-number">{day.getDate()}</div>
        </div>
      ))}
    </div>
  );
};

export default DayCalendar;

