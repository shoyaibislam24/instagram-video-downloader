const downloadButton = document.getElementById('downloadButton');
const instagramUrlInput = document.getElementById('instagramUrl');
const downloadedVideo = document.getElementById('downloadedVideo');

downloadButton.addEventListener('click', async () => {
    const instagramUrl = instagramUrlInput.value;

    try {
        // Use a server-side component to fetch Instagram video data (CORS limitation)
        const response = await fetch(`/api/fetch-video?url=${encodeURIComponent(instagramUrl)}`);
        const data = await response.json();

        // Check if the response contains a valid video URL
        if (data.success && data.videoUrl) {
            downloadedVideo.src = data.videoUrl;
            downloadedVideo.style.display = 'block';
        } else {
            alert('Invalid Instagram video URL');
        }
    } catch (error) {
        console.error('Error fetching video:', error);
        alert('Error fetching video. Please try again.');
    }
});
