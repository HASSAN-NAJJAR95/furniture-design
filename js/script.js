/*Tabs */
$(document).ready(function(){
    $('.tab_content').hide();
    $('.tab_content:first-child').show();
    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active_1');
        $(this).addClass('active_1');
        const current_tab=$(this).attr('data-attr');
        $('.tab_content').fadeIn('slow').hide();
        $('.'+current_tab).fadeIn('slow').show();
        
    });
});


/*SLIDER FOR LIVING ROOM */
$(document).ready(function(){
    $('.next').click(function(){
        const current_img= $('.show');
        const next_img= current_img.next();
        if( next_img.length){
            current_img.fadeOut('fast ').removeClass('show');
            next_img.fadeIn('fast').addClass('show');
        }
    });

    $('.prev').click(function(){
        const current_img= $('.show');
        const prev_img= current_img.prev();
        if( prev_img.length){
            current_img.fadeOut('fast').removeClass('show');
            prev_img.fadeIn('fast').addClass('show');
        }
    });
});

/*SLIDER FOR KITCHEN ROOM */
$(document).ready(function(){
    $('.nextt').click(function(){
        const current_img= $('.showw');
        const next_img= current_img.next();
        if( next_img.length){
            current_img.fadeOut('fast').removeClass('showw');
            next_img.fadeIn('fast').addClass('showw');
        }
    });

    $('.prevv').click(function(){
        const current_img= $('.showw');
        const prev_img= current_img.prev();
        if( prev_img.length){
            current_img.fadeOut('fast').removeClass('showw');
            prev_img.fadeIn('fast').addClass('showw');
        }
    });
});

