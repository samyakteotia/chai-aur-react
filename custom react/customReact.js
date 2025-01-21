function customRender(customReact,mainContainer) {
const domElement=document.createElement(customReact.type)
domElement.innerHTML=customReact.children
for(const prop in customReact.props){
    domElement.setAttribute(prop,customReact.props[prop])
}
mainContainer.appendChild(domElement)
}
const customReact={
    type:'a',
    props:{
    href:'https://google.com',
    target:'_blank'
    },
    children:'click me to visit google'
}
const mainContainer=document.querySelector('#root');
customRender(customReact,mainContainer);