const s = "Chittagong";

for (let i of s){
    console.log(i);
}

const boroughs = ["brooklyn", "manhattan", "the bronx", "queens", "staten island"];
for (let i of boroughs) {
  console.log(i);
}

const cities = {
    "New York City": "US",
    "Dhaka": "Bangladesh",
    "London": "UK",
    "Tokyo": "Japan",
}

for (let i in cities){
    console.log(`${i} is in ${cities[i]}`);
}

const fiveMostStreamedSongs = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      streams: 4260000000,
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      streams: 3901000000,
    },
    {
      title: "Someone You Loved",
      artist: "Lewis Capaldi",
      streams: 3413000000,
    },
    {
      title: "Sunflower",
      artist: "Post Malone (feat. Swae Lee)",
      streams: 3345000000,
    },
    {
      title: "As It Was",
      artist: "Harry Styles",
      streams: 3278000000,
    },
];

for (let songs of fiveMostStreamedSongs){
    for (let key in songs){
        console.log(`${key}: ${songs[key]}`);
    }
    console.log("")
}