function memed(array, s){
    let sum = 0;
    let el = array.length;
    for (let i = 0; i < el; i++) {
      sum += array[i];
    }
    let mean = sum / el;
    let sortedArray = [...array].sort((a, b) => a - b);
  
    let med = 0;
    if (el % 2 === 0) {
      let mid1 = sortedArray[el / 2 - 1];
      let mid2 = sortedArray[el / 2];
      med = (mid1 + mid2) / 2;
    } else {
      med = sortedArray[Math.floor(el / 2)];
    }
    if(s === "T"){
      console.log("TikTok");
    } else if (s === "I"){
      console.log("Instagram");
    } else console.log("YouTube");
    console.log("Mean: ", mean);
    console.log("Median: ", med);
    console.log();
  }
  
  const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
  memed(recentTikTokViews, s = "T");
  const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
  memed(recentInstagramViews, s = "I");
  const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];
  memed(recentYouTubeViews, s = "Y");