<script lang="ts">
    import * as timer from './Stopwatch.svelte';
    let letter_sequence: string;
    const sequence_length = 20;

    let score: number = 0; 
    let round_time: number = 3000;

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

    generateLetters();

    // TIMING STUFF 
    // Times
    let total_ms: number = 0;

    // Pause Functionality
    let start_time: number = Date.now();
    let timer_state: any; 

    function get_time() {
        return total_ms;
    }

    function start_timing() {
        start_time = Date.now();
        timer_state = setInterval(increment_timer, 50);
    }

    function increment_timer() {
        let current_time = Date.now() - start_time;
        total_ms = Math.floor(current_time);
    }

    function stop_timing() {
        clearInterval(timer_state);
    }

    function reset_timer() {
        total_ms = 0;
        stop_timing();
    }
</script>