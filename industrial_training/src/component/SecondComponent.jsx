import React from 'react'

export const SecondComponent = (props) => {
    const sortArray = props.arr.sort();
    return (
        <div>
            <p>It's working {props.value} time</p>
            <p>
                Sorted Array is {sortArray.join(', ')}
            </p>

        </div>
    )
}

// export default SecondComponent
