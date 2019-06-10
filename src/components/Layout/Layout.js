import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
//Aux not working so using React Fragment
const layout =(props)=>(
  <React.Fragment>
     <div>Toolbar,SideDrawer,Backdrop </div>
     <main className="Content">{props.children}
     </main>
     </React.Fragment>
   );
export default layout;
