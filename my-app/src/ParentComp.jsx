import { useState } from "react";

// Define the ParentComp function component
function ParentComp() {
    // Define state variables using the useState hook
    const [arr, setArr] = useState([]); // State for TODO items array
    const [inputValue, setInputValue] = useState(""); // State for input value

    // Function to handle adding a new TODO item
    function handleClick() {
        // Check if the input value is not empty
        if (inputValue !== "") {
            // Add the new item to the array and clear the input value
            setArr([...arr, inputValue]);
            setInputValue("");
        }
    }

    // Function to handle deleting a TODO item by index
    function handleDeleteItems(idx) {
        // Filter out the item with the specified index
        let result_arr = arr.filter((value, index) => {
            return index !== idx;
        });
        // Update the array state with the filtered result
        setArr(result_arr);
    }

    // Function to handle editing a TODO item by index
    function handleEditItems(idx) {
        // Prompt the user for the new content
        let updatedContent = prompt("Enter your new content:");
        // Check if the updated content is not empty
        if (updatedContent !== "") {
            // Update the item at the specified index in the array
            arr[idx] = updatedContent;
            // Update the array state with the modified item
            setArr([...arr]);
        }
    }

    // Render the component UI
    return (
        <>
            {/* Input field for entering new TODO items */}
            <label>TODO items:</label>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            {/* Button to add a new TODO item */}
            <button onClick={handleClick}>Add</button>
            {/* Ordered list to display TODO items */}
            <ol>
                {
                    // Map each item in the array to a list item element
                    arr.map((value, index) => {
                        return (
                            <div key={index}>
                                <li>{value}</li>
                                {/* Button to delete a TODO item */}
                                <button onClick={() => handleDeleteItems(index)}>Delete</button>
                                {/* Button to edit a TODO item */}
                                <button onClick={() => handleEditItems(index)}>Edit</button>
                            </div>
                        );
                    })
                }
            </ol>
        </>
    );
}

// Export the ParentComp component as default
export default ParentComp;
