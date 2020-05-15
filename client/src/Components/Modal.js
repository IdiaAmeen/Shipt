import React from "react";

export default function Modal() {
  const [isDisplay, setIsDisplay] = useState(true);

  if (isDisplay === false) {
    return null;
  }
  return (
    <div className="outer-modal">
      <div className="inner-modal">
        <button onClick={() => setIsDisplay(false)}>X</button>
      </div>
    </div>
  );
}

// Modul most appear on page load .
// When user clicks out it renders home page
