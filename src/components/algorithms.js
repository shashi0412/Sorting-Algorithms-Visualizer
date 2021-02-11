export function bubbleSort(array) {
    const animations = []
    for(let i=0; i<array.length-1; i++)
    {
        for(let j=0; j<array.length-i-1; j++)
        {
            const animation = {}
            let flag = false
            if(array[j] > array[j+1])
            {
                flag = true
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            animation.comparison = [j,j+1]
            //console.log(animation.comparison[0])
            animation.swap = (flag)?[j,j+1]:[j,j]
            // if(flag)
            //     console.log("swapping ", j , " and ", j+1)
            animations.push(animation)
        }
    }
    return animations;
};

let animations = []

function partition(array,low,high)
{
    let pivot = array[high]
    let i=low-1
    for(let j=low; j<=high-1; j++)
    {
        let flag = false
        const animation = {}
        if(array[j] < pivot)
        {
            i++
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
            flag = true
        }
        animation.comparison = [j,high]
        animation.swap = (flag)?[j,i]:[j,j]
        animations.push(animation)  
    }
    let temp = array[i+1]
    array[i+1] = array[high]
    array[high] = temp
    const animation = {}
    animation.comparison = [i+1,high]
    animation.swap = [i+1,high]
    animations.push(animation)
    return (i+1)
}

function qSort(array,low,high){
    if(low<high)
    {
        let pi = partition(array,low,high)
        qSort(array,low,pi-1)
        qSort(array,pi+1,high)
    }
}

export function quickSort(array,high) {
    animations = []
    qSort(array,0,high-1)
    return animations
}