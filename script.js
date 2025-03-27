document.addEventListener('DOMContentLoaded', function(){
    // Step taken 
    let arr = new Array(9).fill(null);
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    function move()
    {
        let turn = 0;
        let m = document.querySelectorAll(".play_ground button")
    m.forEach(element => {
        element.addEventListener('click', function() {
            if (turn == 0)
            {
                if (element.innerText == "X" || element.innerText == "O")
                {
                    alert("Cannot bet on other poeple field press again");
                }
                // "restrict the player from changing its own move or other player move"
                else{
                    let value = this.getAttribute("data-value");
                    element.innerText = player_one.make_move();
                    arr[value] = player_one.marker
                    turn = 1;
                    // check_winner(arr, winPatterns)
                    setTimeout(() => {
                        check_winner(arr, winPatterns);
                    }, 20); 
                    
                }
            }
            else{
                if (element.innerText == "X" || element.innerText == "O")
                {
                    alert("Cannot bet on other poeple field press again");
                }
                // "restrict the player from changing its own move or other player move"
                else
                {
                    let value = this.getAttribute("data-value");
                    element.innerText = player_two.make_move();
                    arr[value] = player_two.marker
                    // check_winner(arr, winPatterns)
                    turn = 0;
                    setTimeout(() => {
                        check_winner(arr, winPatterns);
                    }, 20); 
                }
            }
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
        return (this.marker);
    }

    player_one = new player("Dipak","X")
    player_two = new player("Reawanta","O")
    
    function clear_board()
    {
        
        let m = document.querySelectorAll(".play_ground button")
        arr = new Array(9).fill(null);
        m.forEach(element => {
            element.innerText = ""}); 
    }

    let control = document.querySelectorAll(".controls button")
    control.forEach(element => {
        element.addEventListener('click', function()
        {
            clear_board()
        })     
    })


    // Check winner

    function check_winner(arr, winPatterns)
    {
        let j = 0;
        for (let i = 0; i<8; i++)
        {
            if (arr[winPatterns[i][j]] && 
                arr[winPatterns[i][j]] ==  arr[winPatterns[i][j+1]] && 
                arr[winPatterns[i][j]]==arr[winPatterns[i][j+2]])
            {
                if (arr[winPatterns[i][j]] == "X" || arr[winPatterns[i][j]]=="O")
                {
                    if (arr[winPatterns[i][j]] == player_one.marker)
                        {
                            console.log(arr[winPatterns[i][j]])
                            alert(`The game has ended ${player_one.name}: ${player_one.marker} won the game`)
                            clear_board();
                        }
                    else{
                        console.log(arr[winPatterns[i][j]])
                            alert(`The game has ended ${player_two.name}: ${player_two.marker} won the game`)
                            clear_board();
                        } 
                }
            }
        }
    }
})