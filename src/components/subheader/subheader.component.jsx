import React, {useState}  from 'react';
import { SubHeaderContainer } from './subheader.styles';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const SubHeader = ({open}) => {
    console.log(open)

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  
    return(
    <SubHeaderContainer >

     <nav className="navbar">
     
    
     <div className="nav-icon" onClick={handleClick}>
          {
             click ? <CloseIcon /> : <MenuIcon />
          }
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/new-arrival"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                NEW ARRIVAL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/men"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                MEN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/women"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                WOMEN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/kids"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                KIDS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sales"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SALES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/brands"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                BRANDS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                LAUNCHES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                IN STORE ONLY
              </NavLink>
            </li>
          </ul>
      </nav>
            
        </SubHeaderContainer>
    )
}


export default SubHeader;