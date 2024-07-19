import './index.css'

const TabItem = (props) => {
    const{each,onSelectedButton,isActive}=props
    const{tabId,displayText}=each

    const activeTabId=isActive? 'active-btn-style':''

    const clickedOnButon=()=>{
        onSelectedButton(tabId)
    }
    return(
        <li className='list-con-1'>
            <button className={`button ${activeTabId}`} type="button" onClick={clickedOnButon} >{displayText}</button>
        </li>

    )
}

export default TabItem
