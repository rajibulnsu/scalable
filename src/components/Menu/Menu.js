import React from 'react';
import { Link } from "react-router-dom";

import styles from './Menu.styles';

const Menu = () => (
    <div style={styles.menu}>
        <p style={styles.paragraph}><Link className="btn btn-secondary" to="/table">Table</Link></p>
        <p style={styles.paragraph}><Link className="btn btn-secondary" to="/chart">Chart</Link></p>
    </div>
);

export default Menu;
