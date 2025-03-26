document.addEventListener('DOMContentLoaded', function(){
    function move()
    {
        let turn = 0;
        let m = document.querySelectorAll(".play_ground button")
    m.forEach(element => {
        element.addEventListener('click', function() {
            if (turn == 0)
            {
                element.innerText = player_one.make_move()
                turn = 1
            }
            else{
                element.innerText = player_two.make_move()
                turn = 0
            }
            element.innerText = a;
        })
    });
    }

    move()

    function player(name, marker)
    {
        this.name = name;
        this.marker = marker;
    }
    player.prototype.make_move = function()
    {
        return (this.marker)
    }

    player_one = new player("Dipak","X")
    player_two = new player("Reawanta","O")
    

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