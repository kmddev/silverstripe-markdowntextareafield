function initializeMarkdownEditor() {
    if(typeof window.simplemdeInstances == 'undefined') {
        window.simplemdeInstances = [];
    }
    var arrayLength = window.simplemdeInstances.length;
    var flag = false;
    if(arrayLength > 0) {
        for(var i = 0; i < arrayLength; i++) {
            jQuery('.bu_markdown').each(function(index, element) {
                console.log(window.simplemdeInstances[i].element, jQuery(window.simplemdeInstances[i].element).attr('id'))

                if(typeof window.simplemdeInstances[i].element !== 'undefined' && jQuery(window.simplemdeInstances[i].element).attr('id') ==  jQuery(element).attr('id')) {
                    flag = true;
                    return;
                }
            });
        }
    }
    if (flag == false) {
        jQuery.entwine('markdowntextareafield', function() {
            jQuery('.bu_markdown').each(function(index, element) {
                window.simplemdeInstances.push(
                    new SimpleMDE({
                        element: this,
                        spellChecker: false, // temporary
                        hideIcons: ["heading","image","side-by-side","preview","side-by-side","preview"],
                        promptURLs: true,
                        forceSync: true
                    })
                );
            });
        });
    }

}

/**
 * After document ready calls
 */
jQuery(document).ready(function() {
    initializeMarkdownEditor();
});

/**
 * After ajaxStop calls
 */
jQuery(document).ajaxStop(function(event) {
    if (event.target['activeElement'].id == 'link-autocomplete') {
        return false;
    }

    initializeMarkdownEditor();
});
