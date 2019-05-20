const category = "";
const url = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
const options = {
    format: "json",
    tags: "funny"
};

function newImage() {
    $('.content').empty();
    $.getJSON(url, options, function(data) {
        $(data.items).each(function (index, val) {
            // ------------------
            // Create MAIN img Div
            // ------------------
            let newDiv = document.createElement('div');
            $(newDiv).addClass('main d-flex flex-column align-items-center mb-5');

            // ------------------
            // Create heading Div
            // ------------------
            let divHead = document.createElement('div'); 
            $(divHead).addClass('div-head d-flex justify-content-between w-100');
            // Create Author Span
            let headSpan = document.createElement('span');
            let a1 = val.author.split('"'); 
            $(headSpan).html('<i class="fas fa-user"></i> ' + a1[1]);
            // Create date Span
            let dateSpan = document.createElement('span');
            let d1 = val.published.split('T')[0];
            let d2 = val.published.split('T')[1].split('Z')[0];
            $(dateSpan).html('<i class="fas fa-clock"></i> ' + d2);


            $(divHead).append(headSpan).append(dateSpan);

            // Create Image as Link to source
            let newImageLink = document.createElement('a');
            $(newImageLink).addClass('flickr-image');
            $(newImageLink).attr({
                target: '_blank',
                href: val.link
            });
            // Create IMG
            let newImage = document.createElement('img'); 
            $(newImage).addClass('flickr-image img-fluid');
            $(newImage).attr({
                src: val.media.m,
                title: val.title
              });
            $(newImageLink).append(newImage);



            // ------------------
            // Create Div for links
            // ------------------
            let divLinks = document.createElement('div'); 
            $(divLinks).addClass('div-links d-flex w-100');
            // Create link for download
            let aDownload = document.createElement('a');
            $(aDownload).attr('href', val.media.m); 
            $(aDownload).addClass('animal-link');
            $(aDownload).html('<i class="fas fa-download"></i> Download');
            // Create link for share on FB
            let aFbShare = document.createElement('a');
            $(aFbShare).attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + val.link); 
            $(aFbShare).addClass('animal-link');
            $(aFbShare).html('<i class="fab fa-facebook-square"></i> Share on FB');

            $(divLinks).append(aDownload).append(aFbShare);

            

            $('.content').append(newDiv);
            $(newDiv).append(divHead).append(newImageLink).append(divLinks);
        }); // End Each
    }); // End getJSON
};

newImage();


  



    
