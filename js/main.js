let delay = 1350;
let hasPressedStop = new Boolean(false);

let bars_box = document.querySelector('.bars-box');
async function gen_ele(val) {
    await clearScreen();
    let array = [];

    for (let i = 0; i <= val; i++) {
        let het = ((Math.random() * 91) + 7);
        het = het.toPrecision(5);
        array.push(het);
    }

    for (let i = 1; i < array.length; i++) {
        let div = document.createElement('div');
        div.classList.add(`bar`);
        div.style.height = `${array[i]}%`;
        bars_box.appendChild(div);
    }
}

async function clearScreen() {
    bars_box.innerHTML = "";
};

let data_size = document.getElementById('data_size');
let size = document.getElementById('size');

data_size.addEventListener('input', () => {
    gen_ele(parseInt(data_size.value));
    size.innerHTML = data_size.value;
});

let data_speed = document.getElementById('data_speed');
let speed = document.getElementById('speed');

data_speed.addEventListener('input', () => {
    switch (data_speed.value) {
        case '1':
            speed.innerHTML = "0.25x";
            delay = 2200;
            break;
        case '2':
            speed.innerHTML = "0.5x";
            delay = 1900;
            break;
        case '3':
            speed.innerHTML = "0.75x";
            delay = 1600;
            break;
        case '4':
            speed.innerHTML = "1x";
            delay = 1350;
            break;
        case '5':
            speed.innerHTML = "1.5x";
            delay = 500;
            break;
        case '6':
            speed.innerHTML = "2x";
            delay = 250;
            break;
        case '7':
            speed.innerHTML = "4x";
            delay = 50;
            break;
        case '8':
            speed.innerHTML = "8x";
            delay = 10;
            break;
    }
});

let algo_select = document.querySelector('#algo_select');
let btn_reset = document.querySelector('#btn_reset');

btn_reset.addEventListener('click', () => {
    algo_select.value = "";
    data_speed.value = 4;
    speed.innerHTML = "1x";
    data_size.value = 20;
    size.innerHTML = data_size.value;
    gen_ele(parseInt(data_size.value));
    popup('Reset the Settings');
});

let btn_gen = document.querySelector('#btn_gen');
btn_gen.addEventListener('click', () => {
    gen_ele(data_size.value);
});

let btn_sort = document.querySelector('#btn_sort');

btn_sort.addEventListener('click', () => {
    algo_selection();
});

let btn_stop = document.querySelector('#btn_stop');
btn_stop.addEventListener('click', () => {
    btn_enable();
});

async function btn_enable() {
    btn_gen.disabled = false;
    btn_sort.disabled = false;
    btn_reset.disabled = false;
    data_size.disabled = false;
    data_speed.disabled = false;
    algo_select.disabled = false;
    btn_stop.disabled = true;
}

async function btn_disable() {
    btn_gen.disabled = true;
    btn_sort.disabled = true;
    btn_reset.disabled = true;
    data_size.disabled = true;
    data_speed.disabled = true;
    algo_select.disabled = true;
    btn_stop.disabled = false;
}

btn_stop.addEventListener('click', () => {
    hasPressedStop = true;
});

async function algo_selection() {
    let al = algo_select.value;

    if (al == "") {
        popup("Select the Algorithm");
    }
    else {
        btn_disable();
        switch (al) {
            case 'bubble':
                await bubble_sort();
                break;
            case 'merge':
                mergeSortbtn();
                delay-=100
                break;
            case 'insertion':
                await insertion_sort();
                break;
            case 'quick':
                await quick_sort();
                break;
            case 'selection':
                await selection_sort();
                break;
        }
    }
}

function delayTime(milisec) {
    return new Promise(resolve => {
        if (hasPressedStop == true) {
            hasPressedStop = false;
            popup('Stop Sorting');
            return;
        }

        setTimeout(() => {
            if (hasPressedStop == true) {
                hasPressedStop = false;
                popup('Stop Sorting');
                return;
            }
            resolve('')
        }, milisec);
    })
}

function swap(el1, el2) {
    let temp = el1.style.height;    //third variable for swapping
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function popup(msg) {
    if(hasPressedStop)
    {
    hasPressedStop = false;
    }
    let tb = document.querySelector('body');
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    tb.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

async function allbarcolor() {
    const ele1 = document.querySelectorAll('.bar');
    for (let i = 0; i <= ele1.length - 1; i++) {
        ele1[i].style.background = '#004581';
    }
} 