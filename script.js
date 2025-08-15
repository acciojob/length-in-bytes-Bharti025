const byteSize = (str) => {
  // Step 1: Create a new Blob object with the string
    const blob = new Blob([str]);

    // Step 2: Return the size of the blob
    return blob.size;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
