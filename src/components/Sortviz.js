import React from "react"
import "./Sortviz.css"
import * as SortingAlgorithms from "./algorithms.js"

class Sortviz extends React.Component{
    constructor(){
        super()
        this.state = {
            array : []
        }
        this.resetArray = this.resetArray.bind(this)
    }

    componentDidMount(){
        this.resetArray()
    }

    resetArray() {
        const array = []
        for(let i=0; i<200; i++)
        {
            array.push(RandomIntFromInterval(5,470));
        }
        this.setState({array})
    }

    bubbleSort(){
        // const jsSort = this.state.array.slice().sort((a,b) => a-b);
        // const sortedArray =  SortingAlgorithms.bubbleSort(this.state.array);
        // if(jsSort[0] === sortedArray[0])
        //     console.log(true)
        // else
        //     console.log(false)



        const animations = SortingAlgorithms.bubbleSort(this.state.array)
        const newAnimations = []
        for(const animation of animations)
        {
            newAnimations.push(animation.comparison)
            newAnimations.push(animation.comparison)
            newAnimations.push(animation.swap)
        }
        for(let i=0; i<newAnimations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar')
            const colorChange = i%3!==2
            //console.log(colorChange)
            if(colorChange)
            {
                const [barOneIdx, barTwoIdx] = newAnimations[i]
                //console.log(barOneIdx)
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = (i%3===0)?'red':'aqua'
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*5)
            }
            else
            {   
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx] = newAnimations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    const barTwoStyle = arrayBars[barTwoIdx].style
                    const temp = barOneStyle.height
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = temp;
                }, i*5)
            }
        }

        //const animations = SortingAlgorithms.bubbleSort(this.state.array)
        // for(const animation of animations)
        // {
        //     console.log(animation.comparison[0], "and", animation.comparison[1])
        // }
    }

    quickSort(){
        const animations = SortingAlgorithms.quickSort(this.state.array,this.state.array.length)
        const quickAnimations = []
        for(const animation of animations)
        {
            quickAnimations.push(animation.comparison)
            quickAnimations.push(animation.comparison)
            quickAnimations.push(animation.swap)
        }
        
        for(let i=0; i<quickAnimations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar')
            const colorChange = i%3!==2
            if(colorChange)
            {
                const color = (i%3===0)?'red':'aqua'
                const [barOneIdx, barTwoIdx] = quickAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                }, i*2);
            }
            else
            {setTimeout(() => {
                const [barOneIdx,barTwoIdx] = quickAnimations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                let temp = barOneStyle.height
                barOneStyle.height = barTwoStyle.height
                barTwoStyle.height = temp
            },i*2)}
        }
    }

    render() {
        const {array} = this.state;

        return(
            <div className='array-container'>
                {array.map((value, idx) => (
                    <div className='array-bar' key={idx} style={{height:`${value}px`}}></div>
                ))}
                <br></br>
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
            </div>
        )
    }
}

function RandomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Sortviz