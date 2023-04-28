console.log("Script running....")
document.querySelector('.class').style.display='none';
document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.class').style.display='none'

    }
    else{
        document.querySelector('.ham').styledisplay='none'
        document.querySelector('.class').style.display='inline'

    }
    
})