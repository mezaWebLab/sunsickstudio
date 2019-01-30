<?php

require_once(ABSPATH . 'wp-config.php');
$connection = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
mysqli_select_db($connection, DB_NAME);

$artist_query_result = $connection->mysqli_query("SELECT * FROM wp_artists");

$all_artists = mysqli_fetch_assoc($artist_query_result);

class Artist {
    public $artist_name;
    public $artist_bio;
    public $artist_album;
    public $artists_song;
    public $artists_song_url;
    public $artist_artwork_url;
}

echo $all_artists;

?>