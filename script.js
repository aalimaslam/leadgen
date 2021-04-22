const colorPicker1 = document.getElementById('color')
const colorPicker2 = document.getElementById('color1')
const colorPicker3 = document.getElementById('color2')
const hexValues = document.getElementById('hexColor')
const hexValues1 = document.getElementById('hexColor1')
const hexValues2 = document.getElementById('hexColor2')
const root = document.querySelector(':root');
const fontSelector = document.getElementById('fonts')
const form = document.getElementById('form')
colorPicker1.onchange = ()=>{
    root.style.setProperty('--activeColor',colorPicker1.value);
    hexValues.value = colorPicker1.value;
}
colorPicker2.onchange = ()=>{
    root.style.setProperty('--textColor',colorPicker2.value);
    hexValues1.value = colorPicker2.value;
    console.clear()
}
colorPicker3.onchange = ()=>{
    root.style.setProperty('--warningColor',colorPicker3.value);
    hexValues2.value = colorPicker3.value;
    console.clear()
}
hexValues.onkeyup = ()=>{
    root.style.setProperty('--activeColor',hexValues.value);
    colorPicker1.value = hexValues.value
    console.clear()
}
hexValues1.onkeyup = ()=>{
    root.style.setProperty('--textColor',hexValues1.value);
    colorPicker2.value = hexValues1.value
    console.clear()
}
hexValues2.onkeyup = ()=>{
    root.style.setProperty('--warningColor',hexValues2.value);
    colorPicker3.value = hexValues2.value
    console.clear()
}
fontSelector.onclick=function fonts(){
   var gettext = fontSelector.options[fontSelector.selectedIndex].text;
    root.style.setProperty('--font',gettext);
    console.clear()
}
function reset(){
    root.style.removeProperty('--font')
    root.style.removeProperty('--activeColor')
    root.style.removeProperty('--warningColor')
    root.style.removeProperty('--textColor')
}

const theme1 = document.getElementById('theme1')
const theme2 = document.getElementById('theme2')
const theme3 = document.getElementById('theme3')

theme1.onclick = ()=>{
    root.style.setProperty('--activeColor','#ff0094');
    root.style.setProperty('--textColor','#000');
    root.style.setProperty('--warningColor','#ff0000');
    
}
theme2.onclick = ()=>{
    root.style.setProperty('--activeColor','#123456');
    root.style.setProperty('--textColor','#000');
    root.style.setProperty('--warningColor','#ff0000');
    
}
theme3.onclick = ()=>{
    root.style.setProperty('--activeColor','#3fc1c9');
    root.style.setProperty('--textColor','#000');
    root.style.setProperty('--warningColor','#ff0000');
    
}
const fontSelectorSecondary = document.getElementById('font-secondary');
fontSelectorSecondary.onclick= function(){
    var gettext = fontSelectorSecondary.options[fontSelectorSecondary.selectedIndex].text;
     root.style.setProperty('--font-secondary',gettext);
     console.clear()
 }

const bgColor = document.getElementById('bgColorPicker');
const bg = document.getElementById('form')
bgColor.onchange = ()=>{
    bg.style.backgroundColor = bgColor.value
}

const secondaryColor = document.getElementById('secondayColor');
secondaryColor.onchange = ()=>{
    root.style.setProperty('--colorSecondary',secondaryColor.value)
}