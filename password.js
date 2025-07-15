function openModal()
{
    document.getElementById("forgotModal").style.display="block";
}

function closeModal()
{
    document.getElementById("forgotModal").style.display="none";
}

window.onclick=function(event)
{
    const modal=document.getElementById("forgotModal");
    if(event.target===modal)
    {
        modal.style.display="none";
    }
};