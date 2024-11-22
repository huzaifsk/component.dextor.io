import React, { useState, useEffect } from "react";

function DatePicker({
  calendarColor = "bg-white",
  buttonColor = "bg-black",
  textColor = "text-white",
  onDateChange,
  value,
}) {
  const [selectedDate, setSelectedDate] = useState(value || new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMonthYearDropdown, setShowMonthYearDropdown] = useState(false);

  useEffect(() => {
    setSelectedDate(value || new Date());
  }, [value]);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const generateDays = () => {
    const days = [];
    const totalDays = daysInMonth(
      selectedDate.getFullYear(),
      selectedDate.getMonth()
    );

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }
    return days;
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      years.push(i);
    }
    return years;
  };

  const handleDateClick = (day) => {
    const newDate = new Date(selectedDate.setDate(day));
    setSelectedDate(newDate);
    setShowCalendar(false);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const handleMonthChange = (monthIndex) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(monthIndex);
    setSelectedDate(newDate);
    setShowMonthYearDropdown(false);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const handleYearChange = (year) => {
    const newDate = new Date(selectedDate);
    newDate.setFullYear(year);
    setSelectedDate(newDate);
    setShowMonthYearDropdown(false);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Date Picker</h2>
      <div className="relative">
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className={`w-72 p-4 text-white ${buttonColor} rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-between`}
        >
          <span>{selectedDate.toLocaleDateString()}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>

        {showCalendar && (
          <div
            className={`absolute mt-2 p-4 ${calendarColor} border-2 border-black rounded-xl shadow-xl z-50`}
          >
            <div className="flex justify-between mb-4">
              <button
                onClick={() => setShowMonthYearDropdown(!showMonthYearDropdown)}
                className={`px-4 py-1 ${buttonColor} ${textColor} rounded flex-grow text-center`}
              >
                {selectedDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </button>
            </div>

            {showMonthYearDropdown && (
              <div className="absolute left-0 right-0 bg-white border-2 border-black rounded-xl p-4 mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <h3 className="font-bold mb-2">Month</h3>
                    <div className="max-h-48 overflow-y-auto">
                      {months.map((month, index) => (
                        <button
                          key={month}
                          onClick={() => handleMonthChange(index)}
                          className={`w-full text-left p-2 hover:bg-gray-100 ${
                            index === selectedDate.getMonth()
                              ? `${buttonColor} ${textColor}`
                              : ""
                          }`}
                        >
                          {month}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold mb-2">Year</h3>
                    <div className="max-h-48 overflow-y-auto">
                      {generateYears().map((year) => (
                        <button
                          key={year}
                          onClick={() => handleYearChange(year)}
                          className={`w-full text-left p-2 hover:bg-gray-100 ${
                            year === selectedDate.getFullYear()
                              ? `${buttonColor} ${textColor}`
                              : ""
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-7 gap-2">
              {generateDays().map((day) => (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  className={`p-2 rounded hover:bg-gray-200 ${
                    day === selectedDate.getDate()
                      ? `${buttonColor} ${textColor}`
                      : ""
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-gray-600">
        Selected date:{" "}
        <span className="font-medium">{selectedDate.toLocaleDateString()}</span>
      </p>
    </div>
  );
}

export default DatePicker;
