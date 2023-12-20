$(document).ready(function() {
    var imagenes = [
        "https://hips.hearstapps.com/hmg-prod/images/demon-slayer-1657889450.jpeg",
        "https://ramenparados.com/wp-content/uploads/2022/01/oshi-no-ko-destacado.jpg",
        "https://fotografias.flooxernow.com/clipping/cmsimages01/2018/07/25/C3944CE8-2D9C-4866-AB97-3093834A4BCD/98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=high&format=webply",
        "https://www.bing.com/th?id=OIP.LUuCH_hJQr0l8SLDFLyjjwHaEK&w=196&h=110&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "https://www.bing.com/th?id=OIP.FDxATNBWN7hm38pwb2O8YwHaEK&w=198&h=110&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "https://www.bing.com/th?id=OIP.8qRctV02gjzJlKUjt39WDwHaEK&w=150&h=90&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "https://www.bing.com/th?id=OIP.n9sX2n2OxdU4y0t1d9gaWwHaEK&w=150&h=90&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "https://a.storyblok.com/f/178900/960x540/9e296eff26/attack-on-titan-final-season-final-chapters-special1-dub.jpg/m/filters:quality(95)format(webp)",
        "https://elcomercio.pe/resizer/gIul8gbo0nUHVVfiJpYjZXza_-M=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EP26HVGWYZEDPK3VMS7PTKNGZQ.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/pv-target-images/5f2be567239057fb711752b567eb6dc6fa747d7b4301b93ec6946d2325b52ede.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/04/11/1600x900/the_eminence_in_shadow_cid_1679901817266_1681230465620_1681230465620.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/neon-genesis-evangelion-1657885237.jpg",
        "https://i.blogs.es/dc27ba/rebuild_of_eva_todos_los_pilotos/1366_2000.jpg",
        "https://miro.medium.com/v2/resize:fit:1400/0*1hD7AD3srK1YbkdR.jpg",
        "https://www.pluggedin.com/wp-content/uploads/2021/07/Beastars.jpg",
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/01/rezero-starting-life-another-world-prophecy-throne-2215723.jpg?tf=3840x",
        "https://geekysweetie.com/wp-content/uploads/2016/09/rezero.png",
        "https://static.bandainamcoent.eu/high/spyxfamily/spyxanya-operation-memories/00-page-setup/BOND-header-mobile.jpg",
        "https://e.rpp-noticias.io/xlarge/2020/02/18/594859_902628.jpg",
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8aebf2aea47d6eb5c01acbd6d57751ee022ff602e43e8a37050301559bcbcdab._RI_TTW_.jpg",
        "https://okami.com.ar/wp-content/uploads/2023/07/tate-no-yuusha-no-nariagari-segunda-temporada-kudasai.jpg",
        "https://underworldgt.files.wordpress.com/2012/07/clannad-wallpaper-portada.png",
        "https://www.justwatch.com/images/backdrop/265829558/s640/golden-time/golden-time",
        "https://laverdadnoticias.com/__export/1669326935000/sites/laverdad/img/2022/11/24/esto_es_lo_que_hizo_cada_personaje_al_final_de_xkaguya-sama_love_is_warx.jpg_554688468.jpg",
        "https://www.anmosugoi.com/wp-content/uploads/2022/07/Kaguya-Sama-Love-is-War-pelicula.jpg",
        "https://es.web.img3.acsta.net/newsv7/22/06/25/13/08/4911909.jpg",
        "https://i.blogs.es/6beb23/oshi-no-ko_1/1366_2000.jpeg",
        "https://a.storyblok.com/f/178900/1100x619/179bd59909/oshi-no-ko-episode-8-screen.jpg/m/filters:quality(95)format(webp)",
        "https://cdn.vox-cdn.com/thumbor/695_9o03XnLK5nIrEU3M-tn8Dss=/0x0:1915x798/1200x675/filters:focal(805x246:1111x552)/cdn.vox-cdn.com/uploads/chorus_image/image/70328882/image_2022_02_25_100730.6.png",
        "https://tierragamer.com/wp-content/uploads/2023/07/TojiFushiguroTierraGamer.png",
        "https://media.gq.com.mx/photos/6517480d8c1de645133a14a7/4:3/w_2158,h_1618,c_limit/Frieren_Ma%CC%81s_Alla%CC%81_del_Final_del_Viaje.jpg",
        "https://staticg.sportskeeda.com/editor/2023/09/5bd2f-16958924083896-1920.jpg?w=840",
        "https://i.blogs.es/30d986/cyberpunk-edgerunners/1366_2000.jpeg",
        "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWwubhkHk4cA-szYRe1Sv_CvlS8ECK7ER8qcMMxg-Nc4nrQdj34Lh-HALhgugWML4hPEsb8xv9jFIddD2iQKTdi7zruwJWf1zugWeNI9hU0T4d_wEq0oGs3r.jpg?r=1dd",
        "https://m.media-amazon.com/images/M/MV5BMjUzZWYyNWUtNjc1OS00Mjk1LTk3ZWQtOTlhNjc0YWJiNzNhXkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
        "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfm4t2jWRTYwUZEjJLqG7o4MCFJlqpM53c-mHQZOokiWPWs3kmSW_VBBMxXwmoMYMqKwNyt3VAGLkt7llcgC0JYiDHpkWQ1ZBqY9KOTqLpCvaEsJOeex9gOo.jpg?r=d1a",
        "https://www.somosxbox.com/wp-content/uploads/2022/09/CyberpunkE_S1_Episode2_018.jpg",
        "https://i0.wp.com/setkawaii.com/wp-content/uploads/2023/03/portada_cyberpunk-edgerunners-8.jpg?fit=1920%2C1080&ssl=1",
        "https://i.blogs.es/0e480a/blue-lock/1366_2000.jpeg",
        "https://liverpoolsu.com/wp-content/uploads/2023/03/blue-lock-anime-characters-wallpaper-2880x1800_8-scaled.webp.webp",
        "https://www.geekmi.news/__export/1673221309411/sites/debate/img/2023/01/08/bachira-blue-lock.jpg_554688468.jpg",
        "https://api.duniagames.co.id/api/content/upload/file/13189337161675161087.jpg",
        "https://c4.wallpaperflare.com/wallpaper/444/132/1014/anime-boys-jujutsu-kaisen-monochrome-satoru-gojo-shonen-jump-hd-wallpaper-preview.jpg",
        "https://e1.pxfuel.com/desktop-wallpaper/69/955/desktop-wallpaper-best-laptop-anime.jpg",
        "https://i0.wp.com/film-bunker.com/wp-content/uploads/2017/04/asilentvoice2.png?resize=1439%2C776&ssl=1",
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/11/critica-silent-voice.jpg?tf=3840x",
        "https://tierragamer.com/wp-content/uploads/2021/10/image_2021-10-24_091649.jpg",
        "https://freakelitex.com/wp-content/uploads/2023/07/Mushoku-Tensei-temporada-2-tendra-parte-2-y-ya-se-sabe-cuando-llegara.webp",
    ];      


    var key = false;

    if (!key) {
        function agregarImagenesAlDOM() {
            var galeriaRow = document.querySelector(".row-cols-1");
            var imagenesAleatorias = shuffleArray(imagenes.slice());
            var html = "";
            for (var i = 0; i < imagenesAleatorias.length; i++) {
                html += '<div class="col mb-3 mt-3">';
                html += '<img src="' + imagenesAleatorias[i] + '" class="gallery-item" alt="">';
                html += '</div>';
            }
            galeriaRow.innerHTML += html;
        }
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    $("#agregarImagenes").click(function() {
        agregarImagenesAlDOM();
        key = true;
    });
});
