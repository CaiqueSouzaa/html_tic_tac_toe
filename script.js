let game_board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let play_count = 0;
console.log(play_count % 2);

const getPositionClick = function (id) {
    if ((play_count % 2) == 0) {

        const player_element = document.getElementById('player');
        player_element.textContent = 'Player 2';

        //Insert the value into  the game_board
        if (game_board[Number(id[1])][Number(id[2])] == 0) {
            game_board[Number(id[1])][Number(id[2])] = 1;
            const clicked_position = document.getElementById(id);
            play_count++;
            createX(clicked_position);

            if(player1Win() == 1) {
                player_element.textContent = 'Player 1 Win!';

                //Remove all "onclick"
                const p00 = document.getElementById('p00').removeAttribute('onclick');
                const p01 = document.getElementById('p01').removeAttribute('onclick');
                const p02 = document.getElementById('p02').removeAttribute('onclick');
                const p10 = document.getElementById('p10').removeAttribute('onclick');
                const p11 = document.getElementById('p11').removeAttribute('onclick');
                const p12 = document.getElementById('p12').removeAttribute('onclick');
                const p20 = document.getElementById('p20').removeAttribute('onclick');
                const p21 = document.getElementById('p21').removeAttribute('onclick');
                const p22 = document.getElementById('p22').removeAttribute('onclick');
                
                // if(play_count ==  9 && !player1Win && !player2Win) {
                //     const player_element = document.getElementById('player');
                //     player_element.textcontent = 'Tie';
                // }
            }
        }
    }
    else {

        const player_element = document.getElementById('player');
        player_element.textContent = 'Player 1';

        if (game_board[Number(id[1])][Number(id[2])] == 0) {
            game_board[Number(id[1])][Number(id[2])] = 2;
            const clicked_position = document.getElementById(id);
            play_count++;
            createO(clicked_position);

            if(player2Win() == 1) {
                player_element.textContent = 'Player 2 Win!';

                //Remove all "onclick"
                const p00 = document.getElementById('p00').removeAttribute('onclick');
                const p01 = document.getElementById('p01').removeAttribute('onclick');
                const p02 = document.getElementById('p02').removeAttribute('onclick');
                const p10 = document.getElementById('p10').removeAttribute('onclick');
                const p11 = document.getElementById('p11').removeAttribute('onclick');
                const p12 = document.getElementById('p12').removeAttribute('onclick');
                const p20 = document.getElementById('p20').removeAttribute('onclick');
                const p21 = document.getElementById('p21').removeAttribute('onclick');
                const p22 = document.getElementById('p22').removeAttribute('onclick');

                // if(play_count ==  9 && !player1Win && !player2Win) {
                //     const player_element = document.getElementById('player');
                //     player_element.textcontent = 'Tie';
                // }
            }
        }
    }
    console.log(play_count);

    // game_board[Number(id[1])][Number(id[2])] = 1;
    //console.log(game_board);
    // let teste = Number('1');
    // console.log(typeof teste);

    // Get the id of div clicked

    // createX(clicked_position);
    // createO(clicked_position);
};

// Create the "X"

function createX(clicked_position) {
    // Creating a new element into a div clicked
    const element_father = document.createElement('div');

    // Adding an id the new element created
    element_father.setAttribute('id', 'father-x');
    element_father.setAttribute('class', 'class_x');

    const left_x = document.createElement('div');
    left_x.setAttribute('class', 'x1');

    const right_x = document.createElement('div');
    right_x.setAttribute('class', 'x2');

    element_father.appendChild(left_x);
    element_father.appendChild(right_x);

    clicked_position.appendChild(element_father);
}

function createO(clicked_position) {
    const element = document.createElement('div');
    element.setAttribute('class', 'class_o');

    clicked_position.appendChild(element);
}

const player1Win = () => {
    if(
        game_board[0][0] == 1 && game_board[0][1] == 1 && game_board[0][2] == 1 || // HORIZONTAL
        game_board[1][0] == 1 && game_board[1][1] == 1 && game_board[1][2] == 1 || // HORIZONTAL
        game_board[2][0] == 1 && game_board[2][1] == 1 && game_board[2][2] == 1 || // HORIZONTAL
        game_board[0][0] == 1 && game_board[1][0] == 1 && game_board[2][0] == 1 || // VERTICAL
        game_board[0][1] == 1 && game_board[1][1] == 1 && game_board[2][1] == 1 || // VERTICAL
        game_board[0][2] == 1 && game_board[1][2] == 1 && game_board[2][2] == 1 || // VERTICAL
        game_board[0][0] == 1 && game_board[1][1] == 1 && game_board[2][2] == 1 ||
        game_board[2][0] == 1 && game_board[1][1] == 1 && game_board[0][2] == 1
    ) {
        return 1;
    }
};

const player2Win = () => {
    if(
        game_board[0][0] == 2 && game_board[0][1] == 2 && game_board[0][2] == 2 || // HORIZONTAL
        game_board[1][0] == 2 && game_board[1][1] == 2 && game_board[1][2] == 2 || // HORIZONTAL
        game_board[2][0] == 2 && game_board[2][1] == 2 && game_board[2][2] == 2 || // HORIZONTAL
        game_board[0][0] == 2 && game_board[1][0] == 2 && game_board[2][0] == 2 || // VERTICAL
        game_board[0][1] == 2 && game_board[1][1] == 2 && game_board[2][1] == 2 || // VERTICAL
        game_board[0][2] == 2 && game_board[1][2] == 2 && game_board[2][2] == 2 || // VERTICAL
        game_board[0][0] == 2 && game_board[1][1] == 2 && game_board[2][2] == 2 ||
        game_board[2][0] == 2 && game_board[1][1] == 2 && game_board[0][2] == 2
    ) {
        return 1;
    }
};