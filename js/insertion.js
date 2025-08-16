async function insertion_sort() {
    const ele = document.querySelectorAll('.bar');
    await allbarcolor()

    for(let i=1;i<ele.length;i++)
    {
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }

    let j = i - 1;
    let key = ele[i].style.height;
        ele[i].style.background = "gray";//vg
        await delayTime(delay);
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
        while(j >= 0 && (parseFloat(ele[j].style.height) > parseFloat(key)))
        {
            if(hasPressedStop == true){
                popup('Stop Sorting');
                return;
            }
            ele[j].style.background = 'red';
            ele[j+1].style.background = 'red';
            await delayTime(delay);
            ele[j].style.background = 'orange';
            ele[j+1].style.background = 'orange';
            if(hasPressedStop == true){
                popup('Stop Sorting');
                return;
            }
            await delayTime(delay);
            swap(ele[j], ele[j+1]);
            //ele[j+1].style.height = ele[j].style.height;
            if(hasPressedStop == true){
                popup('Stop Sorting');
                return;
            }
            j--;

           // await delayTime(delay);
            if(hasPressedStop == true){
                popup('Stop Sorting');
                return;
            }

            for(let k =0 ; k < ele.length; k++){
                if(hasPressedStop == true){
                    popup('Stop Sorting');
                    return;
                }
                ele[k].style.background = '#004581';
            }
        }
        ele[j + 1].style.height = key;
       ele[i].style.background = '#004581';
    }

    for (let i = 0; i < ele.length; i++) {
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
       ele[i].style.background = "green";
    }
    btn_enable();
    popup('Elements Sorted');
}