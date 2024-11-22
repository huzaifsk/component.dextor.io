import React, { useState } from "react";

function Timepicker({
  value,
  onChange,
  buttonStyle,
  textStyle,
  pickerStyle,
  doneButtonStyle,
  selectedTimeStyle,
}) {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(value || "");
  const [period, setPeriod] = useState("AM");

  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const handleTimeChange = (hour, minute) => {
    const newTime = `${hour}:${minute} ${period}`;
    setSelectedTime(newTime);
    if (onChange) {
      onChange(newTime);
    }
  };

  const togglePeriod = () => {
    const newPeriod = period === "AM" ? "PM" : "AM";
    setPeriod(newPeriod);
    if (selectedTime) {
      const [time] = selectedTime.split(" ");
      const newTime = `${time} ${newPeriod}`;
      setSelectedTime(newTime);
      if (onChange) {
        onChange(newTime);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-full">
      <div className="relative">
        <button
          onClick={() => setShowPicker(!showPicker)}
          className={`w-64 p-3 ${buttonStyle || "text-white bg-black border border-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200"} flex items-center justify-between`}
        >
          <span style={textStyle}>{selectedTime || "Select Time"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        {showPicker && (
          <div
            className={`absolute mt-2 p-4 ${pickerStyle || "bg-white border-2 border-black rounded-md shadow-xl z-50 w-72"}`}
          >
            <div className="flex gap-4 justify-between">
              <div className="h-48 overflow-y-auto scrollbar-thin">
                <div className="font-semibold text-center mb-2">Hours</div>
                {hours.map((hour) => (
                  <div
                    key={hour}
                    onClick={() =>
                      handleTimeChange(
                        hour,
                        selectedTime?.split(":")[1]?.split(" ")[0] || "00"
                      )
                    }
                    className={`p-2 text-center hover:bg-gray-100 cursor-pointer rounded ${
                      selectedTime?.split(":")[0] === hour ? "bg-gray-200" : ""
                    }`}
                  >
                    {hour}
                  </div>
                ))}
              </div>
              <div className="h-48 overflow-y-auto scrollbar-thin">
                <div className="font-semibold text-center mb-2">Minutes</div>
                {minutes.map((minute) => (
                  <div
                    key={minute}
                    onClick={() =>
                      handleTimeChange(
                        selectedTime?.split(":")[0] || "12",
                        minute
                      )
                    }
                    className={`p-2 text-center hover:bg-gray-100 cursor-pointer rounded ${
                      selectedTime?.split(":")[1]?.split(" ")[0] === minute
                        ? "bg-gray-200"
                        : ""
                    }`}
                  >
                    {minute}
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-start">
                <div className="font-semibold text-center mb-2">Period</div>
                <button
                  onClick={togglePeriod}
                  className={`p-2 mb-2 rounded ${
                    period === "AM"
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  AM
                </button>
                <button
                  onClick={togglePeriod}
                  className={`p-2 rounded ${
                    period === "PM"
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  PM
                </button>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowPicker(false)}
                className={`px-4 py-2 ${doneButtonStyle || "bg-black text-white rounded hover:bg-gray-800"}`}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
      {selectedTime && (
        <p className={`mt-3 ${selectedTimeStyle || "text-black text-sm"}`}>
          Selected: <span className="font-medium">{selectedTime}</span>
        </p>
      )}
    </div>
  );
}

export default Timepicker;
