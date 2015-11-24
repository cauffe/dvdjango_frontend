var template1 = Handlebars.templates['movie_list'];

var template2 = Handlebars.templates['nav_list'];

var template3 = Handlebars.templates['pagination'];

var template4 = Handlebars.templates['movie_detail'];

var page_letter = 'A'

var loadMain = function() { 

    $.ajax({
        type:'GET',
        url:'http://127.0.0.1:8000/movie_list/',
        data:{},
        success: function(data) {
            list_template = template1(data);
            movieList.html(list_template);

            pagination_template = template3(data);
            pagination.html(pagination_template);

            nav_template = template2(data);
            navList.html(nav_template);

        }
    })
};

var paginate = function() {
        $('#pagination').on('click', '.page-button', function(e) {

        console.log(e.target.id);

        $.ajax({
            type:'GET',
            url:'http://127.0.0.1:8000/movie_list/',
            data:{'page': e.target.id, 'letter': page_letter},
            success: function(data) {

                list_template = template1(data)
                movieList.html(list_template);

                pagination_template = template3(data);
                pagination.html(pagination_template);

            }
        })
    });
};

var listNav = function() {
    $('#nav-list').on('click', '.letter', function(e) {

        console.log(e.target.id);

        page_letter = e.target.id

        $.ajax({
        type:'GET',
        url:'http://127.0.0.1:8000/movie_list/',
        data:{'letter': page_letter},
        success: function(data) {

            list_template = template1(data)
            movieList.html(list_template);

            nav_template = template2(data);
            navList.html(nav_template);

            pagination_template = template3(data);
            pagination.html(pagination_template);

            }
        });

    });
};

var movieDetail = function() {
        $('#movie-list').on('click', '.movie', function(e) {

        $.ajax({
            type:'GET',
            url:'http://127.0.0.1:8000/movie_detail/' + e.target.id,
            data:{},
            success: function(data) {
                html_template = template4(data);
                movieList.html(html_template);

            }
        })
    });
};
