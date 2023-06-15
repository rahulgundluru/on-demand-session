import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const updateTabId = () => {
    updateActiveTabId(tabId)
  }

  const isTabIdChangeStyle = isActive ? 'active-tab-btn' : null

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isTabIdChangeStyle}`}
        onClick={updateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
