import './index.css'

const AppItem=(props)=>{
    const {appItemList}=props
    const{appName,imageUrl,category}=appItemList
    return(
        <li className='list-con'>
            <img src={imageUrl} alt="" className='img'/>
            <p className='desc'>{appName}</p>

        </li>
        
    )

}

export default AppItem