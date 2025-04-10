import React from 'react'

function CartSvg({ height, width, className }) {
    return (
        <div className={`${className || ""}`}>
            <svg
                width={width || "18"}
                height={height || "16"}
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
            >
                <path d="M5.9987 14.6668C6.36689 14.6668 6.66536 14.3684 6.66536 14.0002C6.66536 13.632 6.36689 13.3335 5.9987 13.3335C5.63051 13.3335 5.33203 13.632 5.33203 14.0002C5.33203 14.3684 5.63051 14.6668 5.9987 14.6668Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M13.3346 14.6668C13.7028 14.6668 14.0013 14.3684 14.0013 14.0002C14.0013 13.632 13.7028 13.3335 13.3346 13.3335C12.9664 13.3335 12.668 13.632 12.668 14.0002C12.668 14.3684 12.9664 14.6668 13.3346 14.6668Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M0.667969 0.666504H3.33464L5.1213 9.59317C5.18226 9.9001 5.34924 10.1758 5.593 10.372C5.83676 10.5683 6.14177 10.6725 6.45464 10.6665H12.9346C13.2475 10.6725 13.5525 10.5683 13.7963 10.372C14.04 10.1758 14.207 9.9001 14.268 9.59317L15.3346 3.99984H4.0013" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    )
}

export default CartSvg