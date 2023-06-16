
$(function() {
    $('#info a').miniPreview({ prefetch: 'pageload' });
    $('#p2 a').miniPreview({ prefetch: 'parenthover' });
    $('#p3 a').miniPreview({ prefetch: 'none' });
});