import React from 'react';

export default function ChildrenComponent({ children }) {
    return (
        <div className="card">
            <div className="card-body">
                { children }
            </div>
        </div>
    )
}