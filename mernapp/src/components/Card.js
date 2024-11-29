import React from 'react'

export default function Card() {
  return (
    <div>
              <div>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
          {/* Card Image */}
          
          <div className="card-body">
            {/* Card Title */}
            <h5 className="card-title">Card Title</h5>

            {/* Card Description */}
            <p className="card-text">This is the first card</p>

            {/* Dropdown */}
            <div className="container w-100">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
