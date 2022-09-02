import React from 'react'
function randInt(min,max){
    let x = (max-min) +1
    return min + Math.floor(Math.random()*x)
}
export default function Banner(){
    const r = randInt(1,3)


let banner = ''
let url =''

switch(r){
    case 1:
        banner = './Banners/React.png'
        url = 'https://www.reactjs.org'
        break
    case 2:
        banner = './Banners/Reactnative.png'
        url = 'https://www.reactnative.com'
        break
    case 3:
        banner = './Banners/Node.png'
        url = 'https://www.nodejs.org'
        break
    default:break
}
const bannerClick = () => {
    window.open(url)
}
return(
    <div style={{margin:'20px',textAlign:'center'}}>
        <img src = {banner} onClick={bannerClick} style={{cursor:'pointer',height:'300px',width:'300px'}}
        alt = "banner"/>
    </div>
)
}