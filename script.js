async function fetchSong() {
    try {
        const response = await fetch('http://ec2-3-70-99-192.eu-central-1.compute.amazonaws.com:3000/random-song');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const song = await response.json();
        displaySong(song);
    } catch (error) {
        console.error('Error fetching song:', error);
        document.getElementById('song-name').innerText = 'Failed to load song';
    }
}
 
// Function to display the song details
function displaySong(song) {
    document.getElementById('song-name').innerText = song.name;
    document.getElementById('song-artist').innerText = `Artist: ${song.artist}`;
    document.getElementById('song-year').innerText = `Year: ${song.year}`;
    document.getElementById('song-genre').innerText = `Genre: ${song.genre}`;
}
 
// Event listener for the button
document.getElementById('fetch-song').addEventListener('click', fetchSong);
 
// Initial fetch
fetchSong();
