* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #000000, #ffffff);
}

.container {
    text-align: center;
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
}

h1 {
    color: #111;
    margin-bottom: 15px;
}

p {
    color: #555;
    margin: 15px 0;
}

img {
    width: 400px;
    max-width: 100%;
    border: 6px solid black;
    border-radius: 15px;
    transition: border-color 0.3s ease;
}

button {
    margin-top: 15px;
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    background: black;
    color: white;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background: #333;
}
