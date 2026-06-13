document.getElementById('btn').addEventListener('click', ()=>{
    document.getElementById('side_bar').classList.toggle('show')
})

var slices=document.querySelectorAll('.slice');
if (slices.length >= 0){
    let currentSlice=1;
    let start = false
    function autoSlice(){
        const active_slice = document.querySelectorAll('.active')
        active_slice.forEach((item)=>{
            item.classList.remove('active')
            slices[0].children[currentSlice].classList.add('active')
            currentSlice+=1
            if(currentSlice>=3){
                console.log(' ok')
                currentSlice=0
                return
            }
        })
    }

    setInterval(autoSlice,5000);
}