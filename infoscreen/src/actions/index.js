const fetchPosts = reddit => dispatch => {
    dispatch(requestPosts(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(reddit, json)))
}

const fetchWeather = weather => {
    return fetch('http://api.openweathermap.org/data/2.5/weather?id=6453366&APPID=23831b3f35f54b7e851e26d7b92b6b12&units=metric');
}