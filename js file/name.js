$('#add_btn').click(function(){
    Name = $('#textarea').val();
    $('#tbody').append('<tr><td>'+Name+'</td><td><button type="submit" id="done_btn" value="Submit" class="done_class">done</button><button type="submit" id="undone_btn" value="Submit" class="undone_class">undone</button><button type="submit" id="delete_btn" value="Submit" class="delete_class">delete</button></td><td class="mark"></td></tr>');
    console.log($('#textarea').val());

    $('#textarea').val('');
    
    $('.delete_class').click(function(){
        var row_count = table2.rows.length;
        if (row_count > 2){
        if($(this).attr('class') === 'delete_class'){
            $(this).parent().parent().remove();
        }
    }
    });
    $('.done_class').click(function(){
        $(this).parent().siblings('.mark').html('&#9989');
        $(this).siblings('.delete_class').attr("disabled", true);


        
    });
    $('.undone_class').click(function(){
        $(this).siblings('.delete_class').attr("disabled", false);

        $(this).parent().siblings('.mark').html('&#x274C');
    });

    
});

