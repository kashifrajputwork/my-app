import React, { useEffect, useState } from "react";
import styles from "./TabsNav.module.scss";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const childToDeactivate = children[activeTab];
  const [lastFocusedButton, setLastFocusedButton] = useState(null);

  useEffect(() => {
    handleTabClick(1);
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleFocus = (event) => {
    event.target.classList.remove(styles.focused);

    if (lastFocusedButton) {
      lastFocusedButton.classList.remove(styles.focused);
      childToDeactivate.props.setScanTicket(false);
    }

    event.target.classList.add(styles.focused);
    childToDeactivate.props.setScanTicket(true);

    setLastFocusedButton(event.target);
  };

  return (
    <div >
      <TabsNav
        children={children}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleFocus={handleFocus}
      />
      <TabContent children={children} activeTab={activeTab} />
    </div>
  );
};

const TabsNav = ({ children, activeTab, handleTabClick, handleFocus }) => (
  <div className={styles.TabsNav}>
    {React.Children.map(children, (child, index) => (
      <TabButton
        child={child}
        index={index}
        isActive={activeTab === index}
        handleTabClick={handleTabClick}
        handleFocus={handleFocus}
      />
    ))}
  </div>
);

const TabButton = ({ child, index, isActive, handleTabClick, handleFocus }) => {
  const { icon, label, expandIcon } = child.props;

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
      {isActive && expandIcon && (
        <BetDropdown child={child} handleFocus={handleFocus} />
      )}
    </div>
  );
};

const BetDropdown = ({ child, handleFocus }) => (
  <div className={styles.betDropdown}>
    <button onFocus={handleFocus}>Scan ticket</button>
    <button
      className={styles.focused}
      onFocus={handleFocus}
      onClick={() => child.props.setScanTicket(false)}
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
