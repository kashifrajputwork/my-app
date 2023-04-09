import React, { useEffect, useState } from "react";
import styles from './TabsNav.module.scss'
import { useMediaQuery } from "react-responsive";

const Tabs = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' })

  const [activeTab, setActiveTab] = useState(0);
  const [show, setShow] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [lastFocusedButton, setLastFocusedButton] = useState(null);
  const childToDeactivate = children[activeTab];
const handleFocus = (event) => {
  // Remove 'focused' class from last focused button
  if (lastFocusedButton) {
    lastFocusedButton.classList.remove(styles.focused);
    childToDeactivate.props.setScanTicket(false);
  }

  // Add 'focused' class to current button
  event.target.classList.add(styles.focused);
  childToDeactivate.props.setScanTicket(true);

  // Set the last focused button
  setLastFocusedButton(event.target);
};

useEffect(()=>{
  handleTabClick(1)
}, [])

  return (
    <div>
<div className={styles.TabsNav} style={{ height: show ? "114px" : null }}>
        {React.Children.map(children, (child, index) => (
          <div style={{display: "flex", flexDirection: "column"}}>
          <button onClick={() => handleTabClick(index)} className={activeTab === index ? `${styles.Active}` : styles.nonActive}>
           <img src={child.props.icon}/>
           <span>{child.props.label}</span> 
           <img src={child.props.expandIcon} onClick={()=> setShow(!show)}/>
          </button>
          {activeTab === index && show &&
      <div className={styles.betDropdown}>
        <button onFocus={handleFocus}>Scan ticket</button>
        <button onFocus={handleFocus} onClick={()=>  childToDeactivate.props.setScanTicket(false)}>Insert ticket code</button>
      </div>
          }
      </div>
        ))}
      </div>
      <div className={styles.TabContent}>
        {React.Children.map(children, (child, index) =>
          index === activeTab ? child : null
        )}
      </div>
    </div>
  );
};
// const MobileTabs = ({ children }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [show, setShow] = useState(false);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };



//   return (
//     <div className={styles.mobile}>
    
// <div className={styles.MobileNav} style={{ height: show ? "114px" : null }}>
//         {React.Children.map(children, (child, index) => (
//           <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
//           <button onClick={() => handleTabClick(index)} className={activeTab === index ? `${styles.Active}` : styles.nonActive}>
//             <div style={{display: 'flex', gap: '15px'}}>
//            <img src={child.props.icon}/>
//            <span>{child.props.label}</span> 
//             </div>
//            <img className={styles.expandIcon} src={child.props.expandIcon} onClick={()=> setShow(!show)}/>
//           </button>
//           {activeTab === index && show &&
//       <div className={styles.betDropdown}>
//         <button onFocus={handleFocus}>Scan ticket</button>
//         <button onFocus={handleFocus} onClick={()=>  childToDeactivate.props.setScanTicket(false)}>Insert ticket code</button>
//       </div>
//           }
//       </div>
//         ))}
//       </div>
//       <h4>Bets</h4>

//       <div className={styles.TabContent}>
//         {React.Children.map(children, (child, index) =>
//           index === activeTab ? child : null
//         )}
//       </div>
//     </div>
//   );
// };

const Tab = ({ children}) => {
  return <div className="container">{children}</div>;
};

export { Tabs, Tab };