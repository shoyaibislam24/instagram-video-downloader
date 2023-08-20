const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/fetch-video', async (req, res) => {
    const instagramUrl = req.query.url;
    
    try {
        // Fetch Instagram video data (replace with actual logic to get video URL)
        const response = await fetch(instagramUrl);
        const data = await response.json();
        
        // Extract the video URL from the fetched data
        const videoUrl = data.videoUrl; // Replace with actual logic
        
        if (videoUrl) {
            res.json({ success: true, videoUrl });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Error fetching video:', error);
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
