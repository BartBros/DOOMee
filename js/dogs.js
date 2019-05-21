const win = $(window);
const doc = $(document);
const url = 'https://random.dog/woof.json';
let scrollEnabled = true;

function newDog() {
    $.getJSON(url, function(data) {
        $(data).each(function (index, prop) {
            if (prop.url.slice(-4) !== '.mp4' && prop.url.slice(-5) !== '.webm') {
                // Create main img Div
                let newDiv = document.createElement('div');
                $(newDiv).addClass('main d-flex flex-column align-items-center mb-5');
                // Create IMG
                let newImage = document.createElement('img'); 
                $(newImage).addClass('img-fluid');
                $(newImage).attr({
                    src: prop.url,
                    title: "Dog"
                });
                // Create Div for links
                let divLinks = document.createElement('div'); 
                $(divLinks).addClass('div-links d-flex w-100');
                // Create link for download
                let aDownload = document.createElement('a');
                $(aDownload).attr('href', prop.url); 
                $(aDownload).addClass('animal-link');
                $(aDownload).html('<i class="fas fa-download"></i> Download');
                // Create link for share on FB
                let aFbShare = document.createElement('a');
                $(aFbShare).attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + prop.url); 
                $(aFbShare).addClass('animal-link');
                $(aFbShare).html('<i class="fab fa-facebook-square"></i> Share on FB');

                $(divLinks).append(aDownload).append(aFbShare);

                $('.content').append(newDiv);
                $(newDiv).append(newImage).append(divLinks);
            }
        }); // End Each
    }); // End getJSON
};

for (let i = 0; i<10; i++) {
    newDog();
};

$(win).on('scroll', () =>  {
    if (doc.height() - win.height() == win.scrollTop()) {
        if (scrollEnabled) {
            for (let i = 0; i < 3; i++) {
                newDog();
            }
        }
    }
});


    
