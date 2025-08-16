async function quick_sort() {
    let ele = document.querySelectorAll('.bar');
    await allbarcolor()
    let len = ele.length;

    await qs(ele,0,len-1);
    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;
    }
    btn_enable();
    popup('Element Sorted');
}



async function partition(ele,s,e) {
    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;
    }

    let pivot = parseFloat(ele[s].style.height);
    for(let i=0;i<ele.length;i++)
    {
        if(ele[i].style.background == "blue")
        {
            ele[i].style.background = "#004581"
        }
    }
    
    //ele[s].style.background = "gray"
    for (let i = s; i <= e; i++) {
        if(s==e)
        {
            ele[i].style.background = "green"
            return;
        }
        else if(s<e){
            if(i==s){
                ele[i].style.background = "gray"
            }
            else{
            ele[i].style.background = "#004581"
        }}
    }
    let count = 0;

    for(let i=s+1;i<=e;i++)
        {
            ele[i].style.background = 'red';
            await delayTime(delay);
            if(hasPressedStop == true){
                popup('Stop Sorting');
                return;
            }
await delayTime(delay);
if(hasPressedStop == true){
    popup('Stop Sorting');
    return;
}
        if(parseFloat(ele[i].style.height)<=pivot)
        {
            ele[i].style.background = 'yellow';
            count++;
        }
       else
       {
            ele[i].style.background = '#004581';
        }
    }
    let pi = s+count;
    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;
    }
    await delayTime(delay);
    //ele[s].style.background = "green";
    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;
    }

    swap(ele[pi],ele[s]);

    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;}
    ele[pi].style.background = "green";//pivot color
    ele[s].style.background = "#004581";
    let i=s;j=e;

    while(i<pi && j>pi)
    {
        await delayTime(delay);
        if(hasPressedStop == true){
            popup('Stop Sorting');
            break;
        }
        while(parseFloat(ele[i].style.height) <= pivot)
        {
            if(hasPressedStop == true){
                popup('Stop Sorting');
                break;
            }
            i++;
            
        }
        ele[i].style.background = 'orange';
        //await delayTime(delay);
        
        while(parseFloat(ele[j].style.height)>= pivot)
        {
            if(hasPressedStop == true){
                popup('Stop Sorting');
                break;
            }
            j--;
        }
        ele[j].style.background = 'orange';
        await delayTime(delay);
        if(hasPressedStop == true){
            popup('Stop Sorting');
            return;
        }
      ele[i].style.background = '#004581';
        ele[j].style.background = '#004581';
        if(i<pi && j>pi)
        {
            if(hasPressedStop == true){
                popup('Stop Sorting');
                break;
            }
            swap(ele[i],ele[j]);  
        }
        if(hasPressedStop == true){
            popup('Stop Sorting');
            break;
        }
    }
    if(hasPressedStop == true){
        popup('Stop Sorting');
        return;
    }
    return pi;
}







async function qs(ele,s,e)
{

    if(s>=e)
    {
        return;
    }

    let pivot_index = await partition(ele, s, e);

    await qs(ele, s, pivot_index - 1);

    await qs(ele, pivot_index + 1, e);

    for(let i=0;i<=e;i++)
    {
        ele[i].style.background = "green";
    }
}