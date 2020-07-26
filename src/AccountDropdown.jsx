import React, { useState, useEffect, useCallback } from 'react';

export default function AccountDropdown({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = useCallback(
    ({ key }) => {
      if (key === 'Escape' || key === 'Esc') {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [document, handleEscape]);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={(_) => setIsOpen((value) => !value)}
        className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline focus:border-white"
      >
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          alt="Your avatar"
        />
      </button>
      {isOpen && (
        <>
          <button
            type="button"
            onClick={(_) => setIsOpen(false)}
            className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
            tabIndex="-1"
          ></button>
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Sign out
            </a>
          </div>
        </>
      )}
    </div>
  );
}
