<script lang="ts">
	// import test from "@playwright/test";
	// import { get_all_dirty_from_scope } from "svelte/internal";
	// import type { Timer } from "./typing_functions/timer";

    let index: number = 0;
    let letter_sequence: string;
    let user_input: string; //Input binds into this
    const sequence_length = 20;

    $: score = 0; 
    let round_time: number = 3000;

    function start_game() {
        let index: number = 0; 
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
        console.log(letter_sequence);
    }

    function is_correct_letter(letter: string, index: number): boolean {
        // index will be provided by each block
        if (letter === letter_sequence[index] ) {
            return true;
        }
        return false;
    }

    // Will be called for on:keydown={handle_input}
    function handle_input(letter: string): void {
        // Only updating the score
        // Need to add handling time!
        if (is_correct_letter(letter, index)) {
            score++; 
        }
        console.log(score);
        index++;
    }

    setTimeout(driver, 1000);

    function driver() {
        letter_sequence = 'abcdef';
        handle_input('a');
        handle_input('b');
        handle_input('c');
        handle_input('a');
        handle_input('b');
        handle_input('c');
    }
    generateLetters();
</script>   
