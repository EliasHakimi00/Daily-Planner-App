# Week-7-Challenge- Third-Party APIs: Work Day Scheduler
This is the Challenge for Week 7 of the Bootcamp. Due date is the 3rd January at 23:59. I think this challenge was fairly easy as I had done something similar for my week 2 challenge, and I had everything pretty much finished except the footer by Monday 2nd Jan, but admittedly I got a bit lazy even though I only had a few extra lines to code. I found the footer work to be quite easy to implement and I found a website where I could implement the logos nicely without having to import images of the logos, and I think it has come out quite nicely, especially with the hover effect. I did have some issues trying to center the links for fb, twitter, linkedin and instagram as inline block just refused to work at first, but I did some tweaking with the transform values in line 162 of the css file and I eventually eyeballed it to center. In the future, I would like to experiment with some more interactivity options and try to make my sites a bit more dynamic, but I think for a week 3 challenge this is decent. I also don't feel like I have a great grasp on responsive media elements, are responsive media elements still required if you use Bootstrap? Big love to whoever grades this, hope you had a good Christmas break and happy new year :p

UPDATE FOR 16/1/23
As per the comments for my last submission, I have:
- Added the screenshots of my deployed sites, and linked the github pages deployed site in the readme file 
- Changed the index.html file so that the footer is no longer part of the contact me section, instead the contact me section is a seperate section, and the footer is only for the social media links
- I was penalised for as "Unfortunately, the hero is missing a picture or avatar." though I actually do have a batman avatar in the hero in place of an image of myself. I assume the marker simply didn't see this given that Batman is meant to be a master ninja? 

The link for the deployed site is:
https://eliashakimi00.github.io/Bootstrap-Portfolio/

Here are some screenshots of the deployed site:
![portfolio demo](./images/Screenshot%202023-01-16%20at%2022.01.30.png)
![portfolio demo](./images/Screenshot%202023-01-16%20at%2022.01.40.png)
![portfolio demo](./images/Screenshot%202023-01-16%20at%2022.01.47.png)




## Installation

N/A

## Credits
Trilogy Bootcamp instructors and TAs for their guidance during the lessons. 

## License

Please refer to the licence in the repo

---

# Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
 
## Acceptance Criteria

The app should:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
