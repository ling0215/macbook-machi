import React, { useState } from "react";
import styles from "./product-filter.module.scss";

export default function ProductFilter() {
  const ViewSwitcher = () => {
    const [viewType, setViewType] = useState('grid'); // 預設顯示模式為 'grid'

    const switchToGrid = () => {
      setViewType('grid');
    };

    const switchToList = () => {
      setViewType('list');
    };

    return (
      <div className={styles.viewtype}>
        <button className={`btn ${viewType === 'grid' ? 'active' : ''}`} id="gridview" onClick={switchToGrid}>
          <i className="bi bi-grid"></i>
        </button>
        <button className={`btn ${viewType === 'list' ? 'active' : ''}`} id="listview" onClick={switchToList}>
          <i className="bi bi-list"></i>
        </button>
      </div>
    );
  };

  return (
    <div>
      <ViewSwitcher />
    </div>
  );
}
