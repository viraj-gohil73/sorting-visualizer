async function bubble_sort() {
    const ele = document.querySelectorAll('.bar');
    await allbarcolor()
    for(let i = 0; i < ele.length-1; i++)
    {
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
        for(let j = 0; j < ele.length-i-1; j++)
        {
            if(hasPressedStop == true){
                popup('Stop Sorting');
                return;
            }
           // two element comparing color : red
            ele[j].style.background = 'red';
            ele[j+1].style.background = 'red';
            await delayTime(delay); 
            if(hasPressedStop == true){
                popup('Stop Sorting');
                return;
            }
            if(parseFloat(ele[j].style.height) > parseFloat(ele[j+1].style.height)){
                ele[j].style.background = 'orange';
            ele[j+1].style.background = 'orange';
            
                await delayTime(delay);

                swap(ele[j], ele[j+1]);

                if(hasPressedStop == true){
                    popup('Stop Sorting');
                    return;
                }
            }

            ele[j].style.background = '#004581';
            ele[j+1].style.background = '#004581';
            
        }
        ele[ele.length-1-i].style.background = 'green';
    }

    ele[0].style.background = 'green';
    popup('Elements Sorted');
    btn_enable();
}