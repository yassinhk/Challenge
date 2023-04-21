RUN PROJECT

- INSTALL required dependencies from package.json using

yarn install

- install cocopods for ios 

cd ios
pod install

- Start Metro 

yarn start

- Run in Android device 

yarn android

- RUN IOS device

yarn ios 

--- ABout this application

this is make use of creating profile and take picture using the camera or select the from gallery.
the email and the password is required, cannot proceed when they are missing also the app check the format of the email.

after that when click on submit button, the app check the fields and make use of redux to store the data for next screen.
when confirm screen open, the app load the profile from redux and displayed in the screen.