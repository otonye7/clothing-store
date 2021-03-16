import React, {useState} from 'react';
import { SubHeaderContainer } from './menu-icon.styles';
import MenuIcon from '@material-ui/icons/Menu';
import SubHeader from '../subheader/subheader.component';

const BurgerIcon = () => {
    const [open, setopen] = useState(false);
   
    return(
        <SubHeaderContainer>

                <div  className='menu-icon'>
                      <MenuIcon open={open} onClick={() => setopen(!open)}/>
                      {
                          open ? <SubHeader open={open}/> : null
                      }
                      
                 </div>
                
        </SubHeaderContainer>
    )
}


export default BurgerIcon;