<script lang="ts">
    import { onMount } from 'svelte';
    import * as timer from './timer';

    let index: number;
    const sequence_length = 20;
    let letter_sequence: string; //Show current letter for user to type with letter_sequence[index]
    let user_input: string; //Input binds into this with keydow
    let game_won: boolean;

    // Scoring
    $: score = 0; //Display this to user

    // Timing
    let round_time: number = 3000;

    function new_game() {
        index = 0; 
        game_won = false;
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
        // Doesnt account for time yet
        if (is_correct_letter(letter, index)) {
            score++; 
        }
        index++;
    }

    function is_correct_letter(letter: string, index: number): boolean {
        if (letter === letter_sequence[index] ) {
            return true;
        }
        return false;
    }

    onMount(() => {
        new_game();
    });

</script>   
