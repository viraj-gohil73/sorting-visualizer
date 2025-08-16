async function selection_sort() {
    const ele = document.querySelectorAll('.bar');
    await allbarcolor()

    for (let i = 0; i < ele.length; i++) {

        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
        await delayTime(delay);
        let min_ele = i;
        ele[i].style.background = 'gray'; // mark the current element as being processed
        for (let j = i+1; j < ele.length; j++) {

            if (hasPressedStop == true) {
                popup('Stop Sorting');
                return;
            }
           
            
            ele[j].style.background = 'red';
            await delayTime(delay);
            if (parseFloat(ele[j].style.height) < parseFloat(ele[min_ele].style.height)) {
               if(min_ele !== i){
                // new min_index is found so change prev min_index color back to normal
                ele[min_ele].style.background = '#004581';
            }
             
            min_ele = j;
            }
            else {
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = '#004581';
            }
        }
        await delayTime(delay);

        if (hasPressedStop == true) {
            hasPressedStop = false;
            popup('Stop Sorting');
            return;
        }
ele[min_ele].style.background = 'orange';
ele[i].style.background = 'orange';
await delayTime(delay);
        swap(ele[min_ele], ele[i]);
        
        
        ele[min_ele].style.background = '#004581';
        ele[i].style.background = 'green';
        
    }
    btn_enable();
    popup('Elements Sorted');
}