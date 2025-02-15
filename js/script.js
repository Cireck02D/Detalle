
document.getElementById('play-music-btn').addEventListener('click', function() {
    let backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play(); 
    backgroundMusic.volume = 0.3;
    this.style.display = 'none'; 
});


document.getElementById('view-message-btn').addEventListener('click', function() {
    document.getElementById('initial-message').style.display = 'none';
    document.getElementById('loading-container').style.display = 'block';
    
    let loadingBar = document.getElementById('loading-bar');
    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('loading-container').style.display = 'none';
            document.getElementById('final-message').style.display = 'block';
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
    }, 20);
});
