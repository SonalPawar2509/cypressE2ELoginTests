# cypress-and-jest with typescript

Hi!
In this project I am using jest & typescript combination in cypress.
Please refer `package.json` to know more.
Here I've automated Sign-up flow for `https://miro.com/de/`

Tested on:
- Mac OS Montery
    - Chrome
    - Firefox

# Key-features of this project 
(master branch)

 - page object model 
 - respective page actions
 - fixtures to serve the test data to tests
 - common actions are extracted out and created helpers
 - utilised  `complete-randomer` library to create random test data like Email id, username etc. 
 - added git actions

(devicetests branch)

 - added support for different resolutions and multiple devices below
<img width="418" alt="image" src="https://user-images.githubusercontent.com/39772203/150687227-078e0927-fcf8-4e1f-9a11-fb7140e2f879.png">
 - 

# How to install dependancies

Clone the master branch into your local repo and type command: 
`npm install`


# How to run tests
Enter below command to run it on **Dev** mode
```
npm run cypress:open
```

Enter below command to run it on **CI** mode

```
npm run cypress:run
```

# Execution screenshots
Master branch -->
<img width="1234" alt="image" src="https://user-images.githubusercontent.com/39772203/150687592-8df62314-939c-4c3a-84ca-f481f6dfffde.png">


devicetests branch -->
<img width="1211" alt="image" src="https://user-images.githubusercontent.com/39772203/150687651-ebb66856-287d-4c22-8677-60efacc73bc5.png">



