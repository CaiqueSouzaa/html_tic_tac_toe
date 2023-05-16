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
        }
    }

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
