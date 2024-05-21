---
layout: post
title: "Project #3: CodeGradr"
excerpt_separator: <!--more-->
---
&nbsp;&nbsp;&nbsp;&nbsp; This year, I accomplished the major milestone of actually getting a project out of a Hackathon and not giving up after the free Moe's on night two. At Hacklytics 2024, my team and I created CodeGradr - a web application using generative AI to provide feedback for routine, structured coding assignments. <!--more--> As a TA, spending four to five hours a week grading coding assignments that often have the same handful of bugs between them was becoming unbearable. However, for a student, it is really important to receive feedback and a thorough explanation of where you went wrong. Generative AI is the perfect outlet for automating this simple tasks that require mere pattern recognition. 

<div style="display:flex;justify-content:center;">
    <video width="auto" height="auto" controls>
        <source src="
https://github.com/itatikola/itatikola.github.io/assets/62963846/90b1db13-373e-43ca-b148-0fac88b99dfe" type="video/mov">
    </video>
</div>


&nbsp;&nbsp;&nbsp;&nbsp; The way CodeGradr works is you upload the files containing 1) your test cases (e.g. JUnits) for the assignment, and 2) the correct implementation. Then, click the "Generate Feedback" button where you will copy and paste a student's code and receive a Chat-GPT generated response. The framework comes from the fact that in large classes, every student is being judged on the same criteria. So you do the 'hard' part of uploading your correct work first, then you can easily copy and paste student code as you go through each assignment. Chat-GPT is prompted to analyze the result of the test cases and compare against the correct implementation to provide a succinct explanation of what their mistakes were. 
	
&nbsp;&nbsp;&nbsp;&nbsp; We used an AWS EC2 instance to host the website and Flask as the web framework, my first using both of these technologies. Experimenting with the OpenAI API was definitely a treat! Unfortunately, we had the very bad luck of the API being down the weekend of the hackathon, so we were unable to finish and submit by the time projects were due. However, since we were excited about the project we quickly worked to finish the app as soon as it was up and running again. This was my first time developing an application entirely in Python, and I really enjoyed it. Finally, I created the entire user interface with simple CSS/HTML/JavaScript. 

&nbsp;&nbsp;&nbsp;&nbsp; Though we weren't able to submit, I still had a great time at Hacklytics and it definitely motivated me to create more small, but useful projects like Codegradr. 
