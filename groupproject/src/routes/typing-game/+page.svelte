<script lang="ts">
    import { onMount } from 'svelte';

    // Letters
    const sequence_length = 20;
    let letter_sequence: string; //Show current letter for user to type with letter_sequence[letter_index]
    let letter_index: number;

    // For display
    let input: string = "";
    $: input.length >= 2 ? input = input[1] : input = input;

    // Scoring
    let game_finished: boolean;
    $: score = 0; //Display this to user
    $: accuracy = ""; 

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

    onMount(() => {
        new_game();
        start_timing();
    });

</script>   
