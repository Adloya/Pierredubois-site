// Grab elements from the DOM
const homepageBtn = document.getElementById('homepageBtn');
const twitterBtn = document.getElementById('twBtn');
const youtubeBtn = document.getElementById('ytBtn');
const dubnewsBtn = document.getElementById('dubnewsBtn');
const allnewsBtn = document.getElementById('allnewsBtn');

const homepagePg = document.getElementById('homepage_page');
const twitterPg = document.getElementById('twitter_page');
const youtubePg = document.getElementById('youtube_page');
const dubnewsPg = document.getElementById('dubnews_page');
const allnewsPg = document.getElementById('allnews_page');

let currentpage = 'homepage';

homepageBtn.addEventListener('click', () => {
    if(currentpage === 'homepage'){
        return;
    }else if(currentpage === 'tw'){
        twitterPg.classList.remove("w-max")
        twitterPg.classList.add("w-0");
        twitterPg.classList.add("h-0");
        twitterPg.classList.add("scale-0");
        twitterBtn.classList.remove("active");
        homepagePg.classList.remove("w-0");
        homepagePg.classList.remove("h-0");
        homepagePg.classList.remove("scale-0");
        homepagePg.classList.add("w-max");
        homepageBtn.classList.add("active");
        currentpage = 'homepage';
    }else if(currentpage === 'yt'){
        youtubePg.classList.remove("w-max")
        youtubePg.classList.add("w-0");
        youtubePg.classList.add("h-0");
        youtubePg.classList.add("scale-0");
        youtubeBtn.classList.remove("active");
        homepagePg.classList.remove("w-0");
        homepagePg.classList.remove("h-0");
        homepagePg.classList.remove("scale-0");
        homepagePg.classList.add("w-max");
        homepageBtn.classList.add("active");
        currentpage = 'homepage';
    }else if(currentpage === 'dubnews'){
        dubnewsPg.classList.remove("w-max")
        dubnewsPg.classList.add("w-0");
        dubnewsPg.classList.add("h-0");
        dubnewsPg.classList.add("scale-0");
        dubnewsBtn.classList.remove("active");
        homepagePg.classList.remove("w-0");
        homepagePg.classList.remove("h-0");
        homepagePg.classList.remove("scale-0");
        homepagePg.classList.add("w-max");
        homepageBtn.classList.add("active");
        currentpage = 'homepage';
    }else if(currentpage === 'allnews'){
        allnewsPg.classList.remove("w-max")
        allnewsPg.classList.add("w-0");
        allnewsPg.classList.add("h-0");
        allnewsPg.classList.add("scale-0");
        allnewsBtn.classList.remove("active");
        homepagePg.classList.remove("w-0");
        homepagePg.classList.remove("h-0");
        homepagePg.classList.remove("scale-0");
        homepagePg.classList.add("w-max");
        homepageBtn.classList.add("active");
        currentpage = 'homepage';
    }
})

twitterBtn.addEventListener('click', () => {
    if(currentpage === 'tw'){
        return;
    }else if(currentpage === 'homepage'){
        homepagePg.classList.remove("w-max")
        homepagePg.classList.add("w-0");
        homepagePg.classList.add("h-0");
        homepagePg.classList.add("scale-0");
        homepageBtn.classList.remove("active");
        twitterPg.classList.remove("w-0");
        twitterPg.classList.remove("h-0");
        twitterPg.classList.remove("scale-0");
        twitterPg.classList.add("w-max");
        twitterBtn.classList.add("active");
        currentpage = 'tw';
    }else if(currentpage === 'yt'){
        youtubePg.classList.remove("w-max")
        youtubePg.classList.add("w-0");
        youtubePg.classList.add("h-0");
        youtubePg.classList.add("scale-0");
        youtubeBtn.classList.remove("active");
        twitterPg.classList.remove("w-0");
        twitterPg.classList.remove("h-0");
        twitterPg.classList.remove("scale-0");
        twitterPg.classList.add("w-max");
        twitterBtn.classList.add("active");
        currentpage = 'tw';
    }else if(currentpage === 'dubnews'){
        dubnewsPg.classList.remove("w-max")
        dubnewsPg.classList.add("w-0");
        dubnewsPg.classList.add("h-0");
        dubnewsPg.classList.add("scale-0");
        dubnewsBtn.classList.remove("active");
        twitterPg.classList.remove("w-0");
        twitterPg.classList.remove("h-0");
        twitterPg.classList.remove("scale-0");
        twitterPg.classList.add("w-max");
        twitterBtn.classList.add("active");
        currentpage = 'tw';
    }else if(currentpage === 'allnews'){
        allnewsPg.classList.remove("w-max")
        allnewsPg.classList.add("w-0");
        allnewsPg.classList.add("h-0");
        allnewsPg.classList.add("scale-0");
        allnewsBtn.classList.remove("active");
        twitterPg.classList.remove("w-0");
        twitterPg.classList.remove("h-0");
        twitterPg.classList.remove("scale-0");
        twitterPg.classList.add("w-max");
        twitterBtn.classList.add("active");
        currentpage = 'tw';
    }
})

youtubeBtn.addEventListener('click', () => {
    if(currentpage === 'yt'){
        return;
    }else if(currentpage === 'homepage'){
        homepagePg.classList.remove("w-max")
        homepagePg.classList.add("w-0");
        homepagePg.classList.add("h-0");
        homepagePg.classList.add("scale-0");
        homepageBtn.classList.remove("active");
        youtubePg.classList.remove("w-0");
        youtubePg.classList.remove("h-0");
        youtubePg.classList.remove("scale-0");
        youtubePg.classList.add("w-max");
        youtubeBtn.classList.add("active");
        currentpage = 'yt';
    }else if(currentpage === 'tw'){
        twitterPg.classList.remove("w-max")
        twitterPg.classList.add("w-0");
        twitterPg.classList.add("h-0");
        twitterPg.classList.add("scale-0");
        twitterBtn.classList.remove("active");
        youtubePg.classList.remove("w-0");
        youtubePg.classList.remove("h-0");
        youtubePg.classList.remove("scale-0");
        youtubePg.classList.add("w-max");
        youtubeBtn.classList.add("active");
        currentpage = 'yt';
    }else if(currentpage === 'dubnews'){
        dubnewsPg.classList.remove("w-max")
        dubnewsPg.classList.add("w-0");
        dubnewsPg.classList.add("h-0");
        dubnewsPg.classList.add("scale-0");
        dubnewsBtn.classList.remove("active");
        youtubePg.classList.remove("w-0");
        youtubePg.classList.remove("h-0");
        youtubePg.classList.remove("scale-0");
        youtubePg.classList.add("w-max");
        youtubeBtn.classList.add("active");
        currentpage = 'yt';
    }else if(currentpage === 'allnews'){
        allnewsPg.classList.remove("w-max")
        allnewsPg.classList.add("w-0");
        allnewsPg.classList.add("h-0");
        allnewsPg.classList.add("scale-0");
        allnewsBtn.classList.remove("active");
        youtubePg.classList.remove("w-0");
        youtubePg.classList.remove("h-0");
        youtubePg.classList.remove("scale-0");
        youtubePg.classList.add("w-max");
        youtubeBtn.classList.add("active");
        currentpage = 'yt';
    }
})

dubnewsBtn.addEventListener('click', () => {
    if(currentpage === 'dubnews'){
        return;
    }else if(currentpage === 'homepage'){
        homepagePg.classList.remove("w-max")
        homepagePg.classList.add("w-0");
        homepagePg.classList.add("h-0");
        homepagePg.classList.add("scale-0");
        homepageBtn.classList.remove("active");
        dubnewsPg.classList.remove("w-0");
        dubnewsPg.classList.remove("h-0");
        dubnewsPg.classList.remove("scale-0");
        dubnewsPg.classList.add("w-max");
        dubnewsBtn.classList.add("active");
        currentpage = 'dubnews';
    }else if(currentpage === 'tw'){
        twitterPg.classList.remove("w-max")
        twitterPg.classList.add("w-0");
        twitterPg.classList.add("h-0");
        twitterPg.classList.add("scale-0");
        twitterBtn.classList.remove("active");
        dubnewsPg.classList.remove("w-0");
        dubnewsPg.classList.remove("h-0");
        dubnewsPg.classList.remove("scale-0");
        dubnewsPg.classList.add("w-max");
        dubnewsBtn.classList.add("active");
        currentpage = 'dubnews';
    }else if(currentpage === 'yt'){
        youtubePg.classList.remove("w-max")
        youtubePg.classList.add("w-0");
        youtubePg.classList.add("h-0");
        youtubePg.classList.add("scale-0");
        youtubeBtn.classList.remove("active");
        dubnewsPg.classList.remove("w-0");
        dubnewsPg.classList.remove("h-0");
        dubnewsPg.classList.remove("scale-0");
        dubnewsPg.classList.add("w-max");
        dubnewsBtn.classList.add("active");
        currentpage = 'dubnews';
    }else if(currentpage === 'allnews'){
        allnewsPg.classList.remove("w-max")
        allnewsPg.classList.add("w-0");
        allnewsPg.classList.add("h-0");
        allnewsPg.classList.add("scale-0");
        allnewsBtn.classList.remove("active");
        dubnewsPg.classList.remove("w-0");
        dubnewsPg.classList.remove("h-0");
        dubnewsPg.classList.remove("scale-0");
        dubnewsPg.classList.add("w-max");
        dubnewsBtn.classList.add("active");
        currentpage = 'dubnews';
    }
})

allnewsBtn.addEventListener('click', () => {
    if(currentpage === 'allnews'){
        return;
    }else if(currentpage === 'homepage'){
        homepagePg.classList.remove("w-max")
        homepagePg.classList.add("w-0");
        homepagePg.classList.add("h-0");
        homepagePg.classList.add("scale-0");
        homepageBtn.classList.remove("active");
        allnewsPg.classList.remove("w-0");
        allnewsPg.classList.remove("h-0");
        allnewsPg.classList.remove("scale-0");
        allnewsPg.classList.add("w-max");
        allnewsBtn.classList.add("active");
        currentpage = 'allnews';
    }else if(currentpage === 'tw'){
        twitterPg.classList.remove("w-max")
        twitterPg.classList.add("w-0");
        twitterPg.classList.add("h-0");
        twitterPg.classList.add("scale-0");
        twitterBtn.classList.remove("active");
        allnewsPg.classList.remove("w-0");
        allnewsPg.classList.remove("h-0");
        allnewsPg.classList.remove("scale-0");
        allnewsPg.classList.add("w-max");
        allnewsBtn.classList.add("active");
        currentpage = 'allnews';
    }else if(currentpage === 'yt'){
        youtubePg.classList.remove("w-max")
        youtubePg.classList.add("w-0");
        youtubePg.classList.add("h-0");
        youtubePg.classList.add("scale-0");
        youtubeBtn.classList.remove("active");
        allnewsPg.classList.remove("w-0");
        allnewsPg.classList.remove("h-0");
        allnewsPg.classList.remove("scale-0");
        allnewsPg.classList.add("w-max");
        allnewsBtn.classList.add("active");
        currentpage = 'allnews';
    }else if(currentpage === 'dubnews'){
        dubnewsPg.classList.remove("w-max")
        dubnewsPg.classList.add("w-0");
        dubnewsPg.classList.add("h-0");
        dubnewsPg.classList.add("scale-0");
        dubnewsBtn.classList.remove("active");
        allnewsPg.classList.remove("w-0");
        allnewsPg.classList.remove("h-0");
        allnewsPg.classList.remove("scale-0");
        allnewsPg.classList.add("w-max");
        allnewsBtn.classList.add("active");
        currentpage = 'allnews';
    }
})