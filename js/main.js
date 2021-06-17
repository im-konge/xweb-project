function filterCourseCategories(c) {
    var x, i;
    x = document.getElementsByClassName("courses-card");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "display-inline-block");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "display-inline-block");
    }
}

function filterCategories(c) {
    var x, i;
    x = document.getElementsByClassName("gallery-column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "display-block");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "display-block");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

var pageName = window.location.pathname.split("/").pop();

window.addEventListener("load", function() {
    if (pageName == "home.html" || pageName == "courses.html") {    
        var containerElementName = "";
        var activeElementName = "";

        if (pageName == "courses.html") {
            containerElementName = "courseCategories";
            activeElementName = "courses-active";
        } else {
            containerElementName = "galleryCategories";
            activeElementName = "category-active";
        }

        var btnContainer = document.getElementById(containerElementName);
        var btns = btnContainer.getElementsByClassName("category-button");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName(activeElementName);
                current[0].className = current[0].className.replace(" " + activeElementName, "");
                this.className += " " + activeElementName;
            });
        }
    }
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var current_feedback = 0;

if (pageName == "home.html" || pageName == "about.html") {
    var feedbackPics = document.getElementById("feedbackPics");
    var feedbacks = feedbackPics.getElementsByClassName("feedback-pic");
    var feedbackContents = document.getElementsByClassName("feedback-content");
}

function prevComment() {
    if (current_feedback > 0) {
        removeClassesFromComments(current_feedback)
        current_feedback--;
        changeToComment(current_feedback)
    }
}

function nextComment() {
    if (current_feedback < feedbacks.length - 1) {
        removeClassesFromComments(current_feedback)
        current_feedback++;
        changeToComment(current_feedback)
    }
}

function changeToComment(comment_number) {
    if (comment_number != current_feedback) {
        removeClassesFromComments(current_feedback)
        current_feedback = comment_number;
    }

    addClassesToComments(comment_number);
}

function removeClassesFromComments(from_comment) {
    removeClass(feedbacks[from_comment], "feedback-pic-active");
    removeClass(feedbackContents[feedbacks[from_comment].id], "display-block");
}

function addClassesToComments(to_comment) {
    addClass(feedbacks[to_comment], "feedback-pic-active");
    addClass(feedbackContents[feedbacks[to_comment].id], "display-block");
}
