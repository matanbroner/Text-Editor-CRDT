// Text area extended functionality to track insert/delete operations

const KEYS = {
  BACKSPACE: 8,
  DELETE: 46,
  A: 65,
  Z: 90,
  ZERO: 48,
  NINE: 57,
  SPACE: 32,
};

let textarea = document.getElementById("collab-textarea");

// Make sure the textarea is ready and exists
if (!textarea) {
  textarea = document.createElement("collab-textarea");
  document.body.appendChild(textarea);
}

// Listen for key presses in the textarea
textarea.onkeyup = (e) => {
  // Get the cursor position
  const cursor = textarea.selectionStart;
  console.log("cursor position", cursor);
  // If the key pressed is a backspace or delete
  if (e.keyCode === KEYS.BACKSPACE || e.keyCode === KEYS.DELETE) {
    // Send a delete operation to the server
    alert("Delete operation");
  }
  // If the key pressed is a letter
  // TODO: add punctuation support
  else if (
    (e.keyCode >= KEYS.A && e.keyCode <= KEYS.Z) ||
    (e.keyCode >= KEYS.ZERO && e.keyCode <= KEYS.NINE) ||
    e.keyCode === KEYS.SPACE
  ) {
    // Send an insert operation to the server
    alert("Insert operation");
  }
};
