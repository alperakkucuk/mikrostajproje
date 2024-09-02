body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #282c34;
    color: #61dafb;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

#backgroundCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.container {
    text-align: center;
    z-index: 10;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.countdown {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.time-box {
    background: #20232a;
    border: 2px solid #61dafb;
    border-radius: 10px;
    padding: 20px;
    width: 100px;
}

.time {
    font-size: 2rem;
    display: block;
}

.label {
    font-size: 1rem;
    color: #a9b3c1;
}
