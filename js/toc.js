    $("document").ready(function() {
        createTOC(
//            {% if page.toc_headers %} {{ page.toc_headers }} {% else %}  'h1,h2,h3,h4,h5,h6' {% endif %},
            'h1,h2,h3,h4',
            'TOC');
    });

// tag : the header tag for which the toc is to be built
// container : id of the div that we want to append the resulting TOC.
function createTOC(tag, container) {
    var anchorCount = 0;  // count to create unique id

    // create an unordered list
    var oList = $("<ul id='bookmarksList'>");
    /*
      1. For each header tag create a named anchor and insert the into header tag.  It will
      serve as the jump location for the TOC.
      2. Add the link to the unordered list that will point to the named anchor.  
    */

    /* Get all h3 inside div where id is not equal to header.
    // For each h3 tag
    //    1. Create the named anchor.  This should be a unique name.
    //    2. Set the html for h3 tag to a named anchor.
    //    3. Add the existing html for the h3 in front of the named anchor.  
    //    4. Create the TOC links
    //    5. Add the TOC to the container.
    */
    $("div:not([id=header]) " + tag).each(function() {
        $(this).html("<a name='bookmark" + anchorCount + "'></a>" +
		     $(this).html());
        oList.append($("<li class='" + this.nodeName +"'><a href='#bookmark" + anchorCount++ + "'>"
		       + $(this).text() + "</a></li>"));
    });
    $("#" + container).append(oList);
}
