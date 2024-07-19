import './index.css'

const TabItem = (props) => {
    const{each,onSelectedButton}=props
    const{tabId,displayText}=each

    const clickedOnButon=()=>{
        onSelectedButton(tabId)
    }
    return(
        <li className='list-con-1'>
            <button className='button' type="button" onClick={clickedOnButon} >{displayText}</button>
        </li>

    )
}

export default TabItem
