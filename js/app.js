var sameFun=function ()
{
    console.log("BMW M5")
}


$('#line-1').text('Hello').css('background-color','green').fadeToggle('slow',function toggleAgain()
    {
        $('#line-1').fadeToggle('slow',sameFun);
    }
)

