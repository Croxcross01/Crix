document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Function to play video (you'll need to implement this with your video sources)
    function playVideo(videoSource) {
        videoPlayer.src = videoSource;
        videoPlayer.play();
    }

    // Example of how to add show cards dynamically
    function addShowCard(title, imageUrl, videoUrl) {
        const showGrid = document.querySelector('.show-grid');
        const card = document.createElement('div');
        card.className = 'show-card';
        
        card.innerHTML = `
            <img src="${imageUrl}" alt="${title}">
            <h3>${title}</h3>
        `;

        card.addEventListener('click', () => playVideo(videoUrl));
        showGrid.appendChild(card);
    }

    // Example usage (you'll need to add your own content)
    // addShowCard('Family Guy', 'family-guy-thumbnail.jpg', 'family-guy-episode.mp4');
}); 