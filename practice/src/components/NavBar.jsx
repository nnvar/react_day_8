import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const gradientBackground = 'linear-gradient(90deg, #003262 0%, #00009C 100%)';

function NavBar() {

    

    const navigate = useNavigate();

    const handleTestButtonClick = () => {
      navigate('/lists');
    };

  return (
    <nav style={navStyle}>
    <ul style={ulStyle}>
      <li style={liStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
      </li>
      <li style={liStyle}>
        <Link to="/lists" style={linkStyle}>Lists</Link>
      </li>
      <li style={liStyle}>
        <Link to="/about" style={linkStyle}>About</Link>
      </li>
      <li style={liStyle}>
        <button onClick={handleTestButtonClick} style={buttonStyle}>Try it out!</button>
      </li>
    </ul>
  </nav>
);
}

const navStyle = {
padding: '10px',
background: '#f0f0f0',
borderBottom: '1px solid #ccc',
};

const ulStyle = {
listStyleType: 'none',
display: 'flex',
justifyContent: 'space-around',
padding: '0',
};

const liStyle = {
margin: '0 10px',

};

const linkStyle = {
textDecoration: 'none',
color: '#333',
};

const buttonStyle = {
padding: '5px 10px',
background: gradientBackground,
color: 'white',
border: 'none',
borderRadius: '4px',
cursor: 'pointer',
};


export default NavBar
