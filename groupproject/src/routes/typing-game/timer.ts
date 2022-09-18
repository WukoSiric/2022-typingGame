// Times
export let total_ms: number = 0;

// Pause Functionality
let start_time: number = Date.now();
let timer_state: number; 

export function get_time() {
    return total_ms;
}

export function start_timing() {
    start_time = Date.now();
    timer_state = window.setInterval(increment_timer, 50);
}

function increment_timer() {
    let current_time = Date.now() - start_time;
    total_ms = Math.floor(current_time);
}

export function stop_timing() {
    clearInterval(timer_state);
}

export function resetTimer() {
    total_ms = 0;
    stop_timing();
}
