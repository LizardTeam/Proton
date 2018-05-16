import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './../Navigation.css';
import Link from '../../Link';
import icon from './user.svg';


class NavigationUser extends React.Component {
  render() {
    return (
      <div className={cx(s.dropdown, s.show)}>

     { // FOR ADMIN
      /*
      <Link className={s.link}>
        <svg className= {s.icon} width="18px" height = "18px">
          <use xlinkHref={ `${ icon +'#settings' }` } />
        </svg>
        <span className={s.linkText}>Setting</span>
      </Link>
      */
    }
      <Link className={s.link}>
        <svg className= {s.icon} width="18px" height = "18px">
          <use xlinkHref={ `${ icon +'#edit' }` } />
        </svg>
        <span className={s.linkText} >Profile</span>
      </Link>

      <Link className={s.link} to="/login">
        <svg className= {s.icon} width="18px" height = "18px">
          <use xlinkHref={ `${ icon +'#logout' }` } />
        </svg>
        <span className={s.linkText} >Logout</span>
      </Link>
      </div>
    );
  }
}

export default withStyles(s)(NavigationUser);
