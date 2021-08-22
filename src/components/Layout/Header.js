import React, {Fragment} from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css';
import HeaderCartButon from "./HeaderCartButon";
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButon/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table of delicious foods'/>
        </div>
    </Fragment>
};

export default Header;