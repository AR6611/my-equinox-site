// Gradient UI Pack For Equinox Stock UI
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic CSS for Navbar Enhancements
    const navbarStyles = document.createElement('style');
    navbarStyles.innerHTML = `
        /* Navbar Styling */
        .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1050; /* Ensures it stays above other elements */
    background: #000000;
    border-bottom: 2px solid #ddd;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	padding: 7px 20px;
}

        .navbar .navbar-brand {
            font-family: 'Lato', sans-serif;
            font-size: 1.3rem;
            color: #4169e1;
            transition: color 0.3s;
        }

        .navbar .navbar-brand:hover {
            color: #0056b3;
        }

        .navbar .nav-link {
            font-family: 'Arial', sans-serif;
            font-size: 1rem;
            font-weight: 500;
            color: #333;
            margin-left: 15px;
            transition: color 0.3s, background-color 0.3s;
        }

        .navbar .nav-link:hover {
            color: #007bff;
            background-color: rgba(0, 123, 255, 0.1);
            border-radius: 5px;
            padding: 5px 10px;
        }

        /* Navbar Toggler */
        .navbar-toggler {
            border: none;
            background-color: #007bff;
            padding: 5px 10px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .navbar-toggler:hover {
            background-color: #0056b3;
        }

        .navbar-toggler-icon {
            background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="white"%3E%3Cpath stroke="none" d="M0 0h30v30H0z" fill="none"%3E%3C/path%3E%3Cpath d="M4 7h22a1 1 0 010 2H4a1 1 0 010-2zm0 7h22a1 1 0 010 2H4a1 1 0 010-2zm0 7h22a1 1 0 010 2H4a1 1 0 010-2z"%3E%3C/path%3E%3C/svg%3E');
        }

        /* Responsive Navbar Items */
        @media (max-width: 768px) {
            .navbar .nav-link {
                font-size: 0.9rem;
                padding: 10px 15px;
                display: block;
                margin: 0;
            }
        }
    `;
    document.head.appendChild(navbarStyles);

});


document.addEventListener('DOMContentLoaded', () => {
    // Dynamic CSS for Sidebar Enhancements
    const sidebarStyles = document.createElement('style');
    sidebarStyles.innerHTML = `
        /* Sidebar Styling */
        #sidebar {
            position: fixed;
            top: 56px; /* Adjust to the height of the navbar */
            left: 0;
            height: calc(100% - 56px); /* Full height minus navbar */
            width: 280px;
            background: linear-gradient(135deg, #fff, #fff);
            color: white;
            padding: 15px;
            box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        #sidebar.collapsed {
    width: 0;
}

        #sidebar .btn-toggle {
            position: absolute;
            top: 50%;
            right: -20px;
            width: 40px;
            height: 40px;
            background: #0056b3;
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: transform 0.3s, background 0.3s;
        }

        #sidebar .btn-toggle:hover {
            background: #fff;
            transform: scale(1.1);
        }

        /* Sidebar Button Styling */
        #sidebar button {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px 15px;
            background: white;
            color: #007bff;
            font-weight: bold;
            border: none;
            border-radius: 15px;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
            transition: background 0.3s, box-shadow 0.3s;
        }

        #sidebar button:hover {
            background: linear-gradient(135deg, #699dff, #ff5757);
            color: white;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        /* Sidebar Divider */
        #sidebar hr {
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            margin: 20px 0;
        }

    `;
    document.head.appendChild(sidebarStyles);

    // Add toggle functionality for the sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        // Create a toggle button for collapsing the sidebar
        const toggleButton = document.createElement('div');
        toggleButton.className = 'btn-toggle';
        toggleButton.innerHTML = '&raquo;'; // Arrow symbol
        sidebar.appendChild(toggleButton);

        // Toggle the sidebar's collapsed state
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            toggleButton.innerHTML = sidebar.classList.contains('collapsed') ? '&laquo;' : '&raquo;';
        });

      
    }

});

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic CSS for Modal Enhancements
    const modalStyles = document.createElement('style');
    modalStyles.innerHTML = `
        /* Center All Modals */
        .modal {
            align-items: center !important;
            justify-content: center !important;
        }

        /* Modal Header Enhancements */
        .modal-header {
            background: linear-gradient(135deg, #3663ff, #ff4040);
            color: #fff;
            border-bottom: none;
            padding: 15px 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .modal-title {
            font-size: 1.7rem;
            font-weight: bold;
        }

        .modal-header .close {
            color: white;
            font-size: 1.2rem;
            transition: transform 0.2s, color 0.3s;
        }

        .modal-header .close:hover {
            transform: scale(1.1);
            color: #ffcccb;
        }

        /* Dropdown Enhancements */
        .modal-body select {
            width: 100%;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            background: #f9f9f9 url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23007bff"%3E%3Cpath d="M7 10l5 5 5-5H7z"/%3E%3C/svg%3E') no-repeat right 10px center;
            background-size: 14px;
            transition: border-color 0.3s, box-shadow 0.3s;
            appearance: none; /* Remove default arrow */
        }

        .modal-body select:focus {
            border-color: #007bff;
            box-shadow: inset 0 0 6px rgba(0, 123, 255, 0.4);
            outline: none;
            background: white url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23007bff"%3E%3Cpath d="M7 10l5 5 5-5H7z"/%3E%3C/svg%3E') no-repeat right 10px center;
            background-size: 14px;
        }

        /* Ensure Dropdown Text Displays Correctly */
        .modal-body select option {
            color: #333;
            background: #ffffff;
        }

        /* Modal Footer Enhancements */
        .modal-footer {
            background: #f8f9fa;
            border-top: none;
            padding: 15px 20px;
            border-radius: 0 0 12px 12px;
            display: flex;
            justify-content: space-between;
        }

        .btn-primary {
            background: linear-gradient(135deg, #fff, #fff);
            border: none;
            color: black;
            border-radius: 5px;
            padding: 10px 20px;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-primary:hover {
            background: linear-gradient(135deg, #fff, #e9e9e9);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
			color: black;
        }
        .btn-secondary {
            background: linear-gradient(135deg, #fff, #fff);
            border: none;
            color: black;
            border-radius: 5px;
            padding: 10px 20px;
            transition: background-color 0.3s ease, transform 0.3s ease;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        .btn-secondary:hover {
            background: linear-gradient(135deg, #fff, #e9e9e9);
            transform: translateY(-2px);
			color: black;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
		.btn-danger {
		background: linear-gradient(135deg, #fff, #ff4049);
		color: black;
		border-radius: 5px;
		}
		.btn-danger:hover {
		background: linear-gradient(135deg, #ff2832, #7bb3ff);
		color: black;
		border-radius: 5px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		transform: translateY(-3px);
		}
    `;
    document.head.appendChild(modalStyles);

    console.log('Enhanced modal styles applied!');
});


// Inject CSS dynamically for buttons
document.addEventListener('DOMContentLoaded', () => {
    const dynamicStyles = `
        .btn-primary {
            background: linear-gradient(135deg, #fff, #fff);
            border: none;
            color: black;
            border-radius: 5px;
            padding: 10px 20px;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-primary:hover {
            background: linear-gradient(135deg, #fff, #e9e9e9);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
			color: black;
        }
        .btn-secondary {
            background: linear-gradient(135deg, #f9f8f8, #f1f1f1);
            border: none;
            color: black;
            border-radius: 5px;
            padding: 10px 20px;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-secondary:hover {
            background: linear-gradient(135deg, #fff, #e9e9e9);
            transform: translateY(-2px);
			color: black;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
		.btn-danger {
		background: linear-gradient(135deg, #fff, #ff4049);
		color: black;
		border-radius: 5px;
		}
		.btn-danger:hover {
		background: linear-gradient(135deg, #ff2832, #7bb3ff);
		color: black;
		border-radius: 5px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		transform: translateY(-3px);
		}
    `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = dynamicStyles;
    document.head.appendChild(styleSheet);

});
