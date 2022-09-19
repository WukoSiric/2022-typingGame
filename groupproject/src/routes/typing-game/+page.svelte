<script lang="ts">
    import { onMount } from 'svelte';

    // Letters
    const sequence_length = 20;
    let letter_sequence: string = ""; //Show current letter for user to type with letter_sequence[letter_index]
    let letter_index: number = 0;

    // For display
    let input: string = "";
    $: input.length >= 2 ? input = input[1] : input = input;

    // Scoring
    let game_finished: boolean;
    $: score = 0; //Display this to user
    let high_score: number;
    $: score > high_score ? high_score = score : high_score = high_score; 
    $: accuracy = "N/A"; 

    /*TIMING STUFF*/ 
    let round_time: number = 3000;
    let time: number = 0; //Display this 
    let start_time: number = Date.now()
    let timer_state: number; 

    function start_timing() {
        start_time = Date.now();
        timer_state = window.setInterval(increment_timer, 50);
    }

    function increment_timer() {
        let current_time = Date.now() - start_time;
        time = Math.floor(current_time);
    }

    function stop_timing() {
        clearInterval(timer_state);
    }

    function reset_timer() {
        time = 0;
        stop_timing();
    }

    /* GAME FUNCTIONS */
    function new_game() {
        letter_index = 0; 
        score = 0;
        accuracy = "";
        game_finished = false;
        generateLetters();
        reset_timer();
        start_timing();
    }

    function generateLetters() {
        let new_sequence: string = ''; 
        let possible_chars: string = 'abcdefghijklmnopqrstuvwxyz,';
        let chars_length = possible_chars.length;
        for (let i: number = 0; i < sequence_length; i++) {
            new_sequence += possible_chars.charAt(Math.floor(Math.random() * chars_length));
        }
        letter_sequence = new_sequence;
    }

    // Bind to on:keydown for input field
    function handle_input(event: KeyboardEvent): void { 
        stop_timing();
        update_score(event.key); 
        letter_index++;

        if ( letter_index > sequence_length-1) {
            update_accuracy(); 
            game_finished = true; 
            return;
        }
        
        reset_timer();
        start_timing();
    }

    function update_score(letter: string) {
        if (is_correct_letter(letter, letter_index) && time < round_time) {
            score += 10; 
        } else if (is_correct_letter(letter, letter_index) && time > round_time) {
            score += 5;
        }
    }

    function is_correct_letter(letter: string, letter_index: number): boolean {
        if (letter === letter_sequence[letter_index] ) {
            return true;
        }
        return false;
    }

    function update_accuracy() {
        let max_score = sequence_length * 10;
        accuracy = ((score/max_score) * 100).toFixed(2); 
    }

    function change_difficulty(difficulty: string) {
        if (difficulty === "easy") {
            round_time = 3000;
        } else if (difficulty === "medium") {
            round_time = 2000;
        } else if (difficulty === "hard") {
            round_time = 1000; 
        } else if (difficulty === "master") {
            round_time = 500;
        }
        new_game();
    }

    onMount(() => {
        new_game();
        start_timing();
    });

</script>   
<div class="page">
    <div class="gameWrapper">
        <div class="infoWrapper">
            <div class="difficulty">
                {change_difficulty}
            </div>

            <div class="gameStats">
                Time Lapsed: {time}
                High Score: {high_score}
                Score: {score}
                Accuracy: {accuracy}
            </div>
        </div>

            <div class="gameWindow">
                <div class="letter">
                    {letter_sequence[letter_index]}
                </div>
            </div>

    </div>

    <button on:click={() => new_game()}>New Game</button>

    <input on:keydown={handle_input} bind:value={input}>
</div>
<style>

* {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
}

.page {
    background-color: #878787;
    padding: 30px;  
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    gap: 30px;
    min-height: 100vh;
}

.gameWindow {
    border-radius: 75px;
    background: linear-gradient(145deg, #7a7a7a, #909090);
    box-shadow:  31px 31px 61px #656565,
                -31px -31px 61px #a9a9a9;

    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40vw;
    min-height: 40vh;
    font-size: 15em;
    font-weight: 700;
}

.letter {
    display: flex;
    align-items: center;
    justify-content: center;
}

.gameStats {
    border-radius: 75px;
    background: linear-gradient(145deg, #7a7a7a, #909090);
    box-shadow:  31px 31px 61px #656565,
                -31px -31px 61px #a9a9a9;

    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 674px;
}

.gameWrapper {
    gap: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.infoWrapper {
    gap: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    border-radius: 75px;
    background: linear-gradient(145deg, #7a7a7a, #909090);
    box-shadow:  31px 31px 61px #656565,
                -31px -31px 61px #a9a9a9;
    border: 0px;
    min-width: 10vw;
    min-height: 7vh;
}
</style>