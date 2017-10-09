---
layout: project
title: Templated Resume
project: artifact
published: true
updated: 2 Oct, 2017
---

<div class="large reveal reflection" id="responsiveResume" data-reveal>
    <h1>Responsive Resume</h1>
    <h3>Udacity project</h3>
    <h4>Sep, 2017</h4>

    <p>The main challenges that this project forced me to think about were how to access objects and anticipate order of operations. Content inside of the objects had to be moved over to the template so that they layout flowed according to spec. The order was affected by function hoisting and the choice of jQuery DOM manipulation functions. For example, the use of <code>$(&quot;.class&quot;).prepend(someVar)</code> or <code>$(&quot;.class&quot;).append(someVar)</code> will stack elements in the DOM in opposing directions. Depending on what I was trying to accomplish either could be appropriate. I used <code>.prepend</code> to assemble my bio information because of the composition of the helper-file (I think the Udacity team was looking for an excuse to throw it in there!).</p>

    <button class="close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true">&times;</span>
    </button>
</div>
<h4>Sep, 2017</h4>

## Responsive Resume

### Udacty front end nanodegree project

In this project I was provided an HTML/ CSS template, a Javascript helper file, and four unpopulated JavaScript objects. My task was to fill out the objects with resume information such as name, previous jobs, education, etc. I was then to use JavaScript and jQuery to iterate over the object properties to assign relevant values to variables in the JS helper file. From there, I used jQuery to manipulate the DOM to insert these values into the areas inside the HTML resume template. To wrap up the project, I inserted a Google map and my Twitter feed.

#### [Link to project](http://roymosby.me/frontend-nanodegree-resume/index.html)

<div class="grid-x"> 
    <div class="cell medium-6">
        <div class="card" style="width: 250px;">
        <div class="card-divider">
            Desktop preview
        </div>
        <img src="/images/TemplResume.jpeg">
        <div class="card-section">
        </div>
        </div>
    </div>
    <div class="cell medium-6">
        <div class="card" style="width: 250px;">
        <div class="card-divider">
            Mobile preview
        </div>
        <img src="/images/TemplResumeMob.jpeg">
        <div class="card-section">
        </div>
</div>