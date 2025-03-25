document.addEventListener('DOMContentLoaded', function(){
    function move(a)
    {
        let m = document.querySelectorAll(".play_ground button")
    m.forEach(element => {
        element.addEventListener('click', function() {
            element.innerText = a;
        })
    });
    }

    move("X")

    let control = document.querySelectorAll(".controls button")
    control.forEach(element => {
        element.addEventListener('click', function()
    {
        let m = document.querySelectorAll(".play_ground button")
    m.forEach(element => {
        element.innerText = "";
    })
    })
    })
})