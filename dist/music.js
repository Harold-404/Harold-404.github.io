const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    //theme: '376CAE',
    loop: 'all',
    preload: 'auto',
    volume: 1.0,
    mutex: true,
    listFolded: false,
    listMaxHeight: 60,
    audio: [
        {
            name: 'New Boy',
            artist: '朴树',
            url: 'https://api.fczbl.vip/163/?type=url&id=139371',
            cover: 'http://p1.music.126.net/QYI8P7bfmwUKxH3Kll95LQ==/18878614649179588.jpg?param=360y360',
        },
        {
            name: '空帆船',
            artist: '朴树',
            url: 'https://api.fczbl.vip/163/?type=url&id=475073276',
            cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=360y360',
        }
    ]
});