(() => {
    $('#btn_show').on('click', function () {
        let newDiv = {};
        $('input').each(function () {
            newDiv[$(this).attr('placeholder')] = $(this).val();
        });
        console.log(newDiv);
        $('#playground').html('');
        $('input').val('');
        for (let i = 0; i < newDiv['count']; i++) {
            $('#playground').append(
                `<div style="width: ${newDiv['width']}px; 
                height: ${newDiv['height']}px; 
                background-color: ${newDiv['color']}; 
                border-radius: ${newDiv['radius']}px;
                margin: 5px auto">  
                </div>`);
        }
    })
})();
