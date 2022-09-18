<script lang="ts">
    import { onMount } from 'svelte';

    let letter_index: number;
    const sequence_length = 20;
    let letter_sequence: string; //Show current letter for user to type with letter_sequence[letter_index]
    let user_input: string; //Input binds into this with keydown
    let game_finished: boolean;

    // Scoring
    $: score = 0; //Display this to user

    // Timing ( not clean code yet :( ))
    let round_time: number = 3000;
    let time: number = 0;
    let start_time: number = Date.now()
    let timer_state: number = 0; 

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

    // Game functions
    function new_game() {
        letter_index = 0; 
        game_finished = false;
        user_input = "";
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

    // Will be called when doing input ----> on:keydown={handle_input}
    function handle_input(letter: string): void {
        // Stop timer
        stop_timing();

        if (is_correct_letter(letter, letter_index) && time < round_time) {
            score += 10; 
        } else if (is_correct_letter(letter, letter_index) && time > round_time) {
            score += 5;
        }

        letter_index++;
        reset_timer();
        start_timing();
    }

    function is_correct_letter(letter: string, letter_index: number): boolean {
        if (letter === letter_sequence[letter_index] ) {
            return true;
        }
        return false;
    }

    function game_ended(): boolean {
        if (letter_index >= sequence_length - 1 ) {
            return true;
        }
        return false;
    }

    onMount(() => {
        new_game();
        start_timing();
    });

</script>   
