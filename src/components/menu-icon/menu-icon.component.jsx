import React, {useState} from 'react';
import { SubHeaderContainer } from './menu-icon.styles';
import MenuIcon from '@material-ui/icons/Menu';
import SubHeader from '../subheader/subheader.component';

const BurgerIcon = () => {
    const [open, setopen] = useState(false);
   
    return(
        <SubHeaderContainer>

                <div  className='menu-icon'>
                      <MenuIcon className='icon' open={open} onClick={() => setopen(!open)}/>
                 </div>

                 <div className='sub-icon'>
                      <SubHeader className='sub' open={open}/>
                 </div>

                 

                 {/* {
                          open ? <SubHeader/> : null
                 } */}
                
        </SubHeaderContainer>
    )
}


export default BurgerIcon;