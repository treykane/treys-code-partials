//USED FOR HIGHLIGHTING TABLE COLUMNS BY ADDING THE .highlighted CLASS TO ALL TABLE TD ELEMENTS 
$('td').hover(function() {
            var t = parseInt($(this).index()) + 1;
            $(this).parents('table').find('td:nth-child(' + t + ')').addClass('highlighted');
        },
        function() {
            var t = parseInt($(this).index()) + 1;
            $(this).parents('table').find('td:nth-child(' + t + ')').removeClass('highlighted');
        });