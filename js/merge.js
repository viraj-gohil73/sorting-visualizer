async function merge(ele, low, mid, high){
    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;
    }

    const n1 = mid - low + 1;
    const n2 = high - mid;

    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await delayTime(delay);
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
        // color
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await delayTime(delay);
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
        // color
        ele[mid + 1 + i].style.background = 'orange';
        right[i] = ele[mid + 1 + i].style.height;
    }
    //await delayTime(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await delayTime(delay);
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'red';
            }
    
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'red';
            } 
           
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await delayTime(delay);
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'red';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await delayTime(delay);
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'red';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;
    }
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;
    }
}

//const mergeSortbtn = document.querySelector(".mergeSort");

async function mergeSortbtn(){
    await allbarcolor()
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    await mergeSort(ele, l, r);
    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;
    }
    popup('Elements Sorted');
    btn_enable();
};