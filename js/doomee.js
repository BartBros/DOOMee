const win = $(window);
const doc = $(document);
const url = 'https://aws.random.cat/meow';

function newCat() {
    $.getJSON(url, function(data) {
        $(data).each(function (index, prop) {
            let newDiv = document.createElement('div');
            $(newDiv).addClass('wrap-50 main d-flex flex-column align-items-center p-5 mb-5');

            let newImage = document.createElement('img');
            $(newImage).addClass('img-fluid');
            $(newImage).attr('src',prop.file);

            let h2 = document.createElement('h2');
            $(h2).addClass('align-self-start');
            $(h2).text('test');

            $('.content').append(newDiv);
            $(newDiv).append(h2).append(newImage);
        }); // End Each
    }); // End getJSON
};

for (let i = 0; i<10; i++) {
    newCat();
};

$(win).on('scroll', () =>  {
    if (doc.height() - win.height() == win.scrollTop()) {
        for (let i = 0; i < 3; i++) {
            newCat();
        }
    }
});

    
