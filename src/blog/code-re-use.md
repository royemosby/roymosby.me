---
title: Code Re-use (Keeping it DRY)
date: 2021-05-31
extract: "I wrote a little over 1250 lines of code. This number is not notable except that it could have been much larger had I not found ways recycle some parts...."
description: "Re-using code to make 3 forms into 1"
social_preview: "/images/og/jat-iron.jpg" 
tags: ['project', 'ruby', 'rails', 'javascript', 'pattern']
---

<img src="/images/jat-iron.svg" alt="Job Application Tracker logo">

## Intro

As my graduation from Flatiron draws nearer, I am starting to focus on landing my first developer job. Inspired by one of my peers, Stacey (hi Stacey!!!) and her job tracker, I set out to make a job application tracker of my own.

[JAT-Iron](https://github.com/royemosby/JAT-Iron) - a cheesy name for my job application tracker, it meant to run on a person's local system. A person can clone [the repo](https://github.com/royemosby/JAT-Iron), install it with the instructions found in the project's readme. It requires Ruby v 2.5 or greater, a terminal, and a modern web browser. Sorry IE!!

## Code re-use

As it currently stands, I wrote a little over 1250 lines of code. This number is not notable except that it could have been much larger had I not found ways recycle some parts. Code re-use is a must in any application. It reduces code complexity and makes for easier maintenance down the road.

Figuring out how to re-use certain blocks of code can be a little challenging. This is particularly true where with large procedural functions used to template out html elements on a page. One example that comes to mind in my job tracker is a form used to take in information about a job. The form does not exist in the page, rather I use JavaScript to build it and then insert it into the appropriate area.

## 3 versions of the same form

While coding out the MVP, I found myself using 3 versions of the same form that take in the same type of information. Each varied based on whether it pre-loaded data and how the form activated. 3 forms at over 140 lines each is a headache in the making!

- Version 1: Form for a new job. This version is blank except for a default status of "new" and activated from a button in the app's navigation header. The code would build the form, insert it onto a working pane and then show the working panel overlaying the page. When submitted, it would send the data to the back end which would create a new job.

- Version 2: Form to edit existing job. Further, it opened by clicking on a button found on the job summary residing in a list of job summaries. The code would build the form, insert it onto a working panel along with the job's existing data, and then show the working panel overlaying the page. When submitted, it would update the job's info in the system.

- Version 3: Form to edit existing job. It activated by a link on the detail panel when showing a single job. It differs from version 2 in the way it is activated. It has to use the same panel that the job details which was already open. It would swap out the details for the form. When submitted, it acted the same as form #2.

## Similarities and differences

With the 3 versions in place, I took an inventory of commonalities and differences.

Commonalities

- Same layout structure- a header containing a title and a content section housing the form and form buttons.
- 11 fields.
- 3 text areas (similar to fields but for multiple lines of text).
- 1 select element with 8 status options to choose from.
- 1 hidden field to identify which job search the job belongs to.
- 2 cancel buttons- one at top right and one at bottom.

Differences

- New form is blank except for status which defaults to "new". Edit forms need to be pre-populated and status must match that found in the job's data.
- New form posts a new job (single url using the "POST" method). Edit forms update target job (dynamic url based off job id, using the "PATCH" method).
- New form opens with an event listener created by a UI class instance. Edit form #1 opens with an event listener created by the JobSearch class instance which manages the jobs list. Edit form #2 opens with an event listener managed on the job instance placed on the open button in the details pane.
- New form and edit form #1 populate a work pane and then reveals it to the user. Edit form #2 swaps the info on the open work pane with the form.
- The edit forms need a hidden field for the job's id.

## DRYing up my codebase

From the commonalities I could build the base of a form that I could re-use for the three versions. This foundation version consists of the html used to build the form and a basic behaviors of the 3 buttons found on the form- x2 cancel and 1 submit. I could use the same "submit" action and choose what to do with it based on the information found in the form.

My next step was to add in the unique requirements for version 1 of the form. For the "New" form, I had to:

1. Create a static method to create new blank form including button behaviors.
2. Create a method to:
   1. Set the form title text to "New job".
   2. Set the default value of "Status" to new.
   3. Append the header and the form content to the work pane.
3. Call an existing utility method to open work pane.

For version 2, Edit form #1, I did the following:

1. Re-use the static method above for new blank form.
2. Create a method to:
   1. Sets the title text to "Edit job".
   2. Create a hidden field for the job id and insert it into the form.
   3. Select all form fields and insert their values.
   4. Select all text areas and insert their values.
   5. Append the header and the form content to the work pane.
3. Call another method to open work pane.

For version 3, the second edit form

1. Call an existing utility method to clear job details off the open pane
2. Re-use static method to create blank form.
3. Re-use method made in step 2 of the 2nd form version.

Much of the form's foundation was made inside of a template literal. Insertions and changes were applied using Web API tools such as `querySelector`, `innerHTML`, `appendChild`, etc. [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API) goes into detail about such tools and has been a great resource for using JavaScript on websites.

Making these changes significantly reduced the amount of code that I need to maintain. Further on down the development process, I found that I was missing some fields that I wanted to put onto the form. I also ended up changing the way I handled job notes in my application, necessitating another form change. Had I not distilled the 3 forms into one and then re-used it, I would have had to make identical changes to all three versions. Instead, I could just focus on modifying a single form.
