# DLHD

> Note: All steps were performed using on Windows 10.
> [website](#)

- [Installations](docs/install.md)
- [Run Locally](docs/local.md)

- [Screen Shots]()

  - [home](docs/home.md)
  - [signin & signup](docs/auth.md)
  - [doctor's login](docs/doctor.md)
  - [medicine & disease listing](docs/med_dis.md)
  - [contagious disease tracker](docs/tracker.md)



## List of features,

- [x] seperate dashboard for diff users roles like normal, admin and doctor roles
- [x] This user can check any medicine, disease details entered by authorized DOCTORS
- [x] Users can search for any medicine or disease
- [x] Users can search for medicine by its name or the disease name for which any medicine is used.
- [x] Proper authentication is present to keep data safe and secure.
- [x] Third-party authentication is also present (OAuth2.0).
    - [x] Google OAuth2.0 implimented
    - [ ] Facebook 

- [x] Users can see other users nearby with symptoms of any contagious disease.
- [x] Users can perform CRUD on geospatial data. (create, read, delete, update)
- [ ] Live chat with doctor
    - [ ] use web socket 

- [ ] Capability to pay and buy prescribed medicines
    - [ ] pay using paypal
    - [ ] pay using stripe


> some imp links

`https://stackoverflow.com/`  
`https://www.youtube.com/`  
`https://nodejs.org/en/docs/`  
`https://developers.google.com/maps/documentation/javascript/overview`  
`https://developers.google.com/maps/documentation/geolocation/overview`  
`http://www.passportjs.org/packages/passport-google-oauth2/`
`http://www.passportjs.org/docs/downloads/html/`
`https://expressjs.com/en/4x/api.html`
`https://mongoosejs.com/docs/api.html`
`https://docs.mongodb.com/`
`https://getbootstrap.com/`


### Dir Structure 

```bash

    |   .env
    |   .gitignore
    |   .prettierignore
    |   .prettierrc
    |   app.js
    |   package-lock.json
    |   package.json
    |   Procfile
    |   README.md
    |   tree.txt
    |   
    +---auth
    |       authenticate.js
    |       oauth.js
    |       
    +---bin
    |       www
    |       
    +---config
    |       config.js
    |       ROUTES.js
    |       
    +---controllers
    |       diseases.js
    |       home.js
    |       maps.js
    |       medicines.js
    |       tests.js
    |       users.js
    |       
    +---models
    |       diet.js
    |       disease.js
    |       location.js
    |       medicine.js
    |       user.js
    |                 
    +---public
    |   +---images
    |   |       sierra.jpg
    |   |       
    |   +---javascripts
    |   |       app.js
    |   |       maps.js
    |   |       
    |   \---stylesheets
    |           maps.css
    |           style.css
    |           
    +---routes
    |       diseases.js
    |       home.js
    |       maps.js
    |       medicines.js
    |       tests.js
    |       users.js
    |       
    +---sessions
    \---views
        |   error.ejs
        |   test.ejs
        |   
        +---auth
        |       login.ejs
        |       register.ejs
        |       
        +---diseases
        |       add.ejs
        |       index.ejs
        |       
        +---home
        |       main.ejs
        |       
        +---maps
        |       index.ejs
        |       
        +---medicines
        |       add.ejs
        |       index.ejs
        |       
        \---partials
                footer.ejs
                header.ejs
                message.ejs


```