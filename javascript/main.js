/*******SKILLS MOUSE ENTER***********/
function shown(mouseOvered, showMe) {
    $(mouseOvered).on('mouseenter mouseleave', function(){
        $(showMe).slideToggle("slow");
    });
}    
$(function() {    
    shown(".programmingLang",".programmingLangShow");
    shown(".uIFrame",".uIFrameShow");
    shown(".stylesheet",".stylesheetShow");
    shown(".iDE",".iDEShow");
    shown(".operatingSys",".operatingSysShow");
    shown(".sourceCont",".sourceContShow");
});
