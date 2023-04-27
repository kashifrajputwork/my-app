import React, { useEffect, useState } from "react";
import styles from "./TabsNav.module.scss";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState();
  const [isScanTicketFocused, setIsScanTicketFocused] = useState(false);

  useEffect(() => {
    handleTabClick(0);
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleFocus = (isScanTicketButton) => {
    setIsScanTicketFocused(isScanTicketButton);
  };

  return (
    <div>
      <TabsNav
        children={children}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleFocus={handleFocus}
        isScanTicketFocused={isScanTicketFocused}
      />
      <TabContent children={children} activeTab={activeTab} />
    </div>
  );
};

const TabsNav = ({
  children,
  activeTab,
  handleTabClick,
  handleFocus,
  isScanTicketFocused,
}) => (
  <div className={styles.TabsNav}>
    {React.Children.map(children, (child, index) => (
      <TabButton
        child={child}
        index={index}
        isActive={activeTab === index}
        handleTabClick={handleTabClick}
        handleFocus={handleFocus}
        isScanTicketFocused={isScanTicketFocused}
      />
    ))}
  </div>
);

const TabButton = ({
  child,
  index,
  isActive,
  handleTabClick,
  handleFocus,
  isScanTicketFocused,
}) => {
  const { icon, label, expandIcon, dontshow } = child.props;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        onClick={() => handleTabClick(index)}
        className={isActive ? `${styles.Active}` : styles.nonActive}
      >
        <img src={icon} />
        <span className={styles.label}>{label}</span>
        <img src={expandIcon} />
      </button>
      {isActive && expandIcon && dontshow && (
        <BetDropdown
          child={child}
          handleFocus={handleFocus}
          isScanTicketFocused={isScanTicketFocused}
        />
      )}
    </div>
  );
};

const BetDropdown = ({ child, handleFocus, isScanTicketFocused }) => (
  <div className={styles.betDropdown}>
    <button
      className={isScanTicketFocused ? styles.focused : ""}
      onClick={() => {handleFocus(true); child.props.setScanTicket(true)}}
      
    >
      Scan ticket
    </button>
    <button
      className={!isScanTicketFocused ? styles.focused : ""}
      onClick={() => {
        handleFocus(false);
        child.props.setScanTicket(false);
      }}
    >
      Insert ticket code
    </button>
  </div>
);

const TabContent = ({ children, activeTab }) => (
  <div className={styles.TabContent}>
    {React.Children.map(children, (child, index) =>
      index === activeTab ? child : null
    )}
  </div>
);

const Tab = ({ children }) => {
  return <div className="container">{children}</div>;
};

export { Tabs, Tab };
