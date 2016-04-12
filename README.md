----------------------
Project - 01
----------------------
**********************
-------------------------
What it does.
-------------------------
Sneaky is a personal sneaker collection binder, that allows a user
to add, update, delete and read sneakers from a collection from the
MongoDB database.

-------------------------
What I wish it did.
-------------------------
I wish I had time to configure user authentication so users can sign up
and create their own personal collections with images.

-------------------------
What I plan to change.
-------------------------
I want to eventually turn this into an e-commerce app that allows users to sign up and purchase sneakers from another user.

-------------------------
Design Decisions & Issues
-------------------------
I decided to use twitter bootstrap fame work for the CSS.
Although I am not happy with the layout of the page it serves its purpose.
I initially had a cover background-image of Air Jordan that I was very proud of,
but after numerous issues I had with it zooming in every time I submitted my form, I decided to ditch it after wrestling with it for several hours.

I stuck with a basic red and white color scheme to commemorate the legendary Air Jordan. I wanted to integrate an image into the document model, but i was unsuccessful.




Method for construction

	            |-------------------------|             |------------|
                |     Front End           |------------>|   Backend  |
                |-------------------------|             |------------|
                           ^    ^                           ^  ^
                          /      \                          |  |
                         /        \                         |  |
                        /          \                        |  |
                       /           |--------------|         |  |
                      /            |  Database    |---------|  |
                     /             |--------------|            |
                    /                                          |
                   /                                           |
    |----------------|                                  |------------|
    |     API's      |--------------------------------->| Modules    |
    |----------------|                                  |------------|



-------------------------
Application Decisions & Issues
-------------------------

Throughout this project I experienced various hurdles and challenges.
I started with the backend in getting my server up and displaying "Hello World", after wrestling with javascript objects and mongoose schemas, I was finally able to get some embedded data into my document. I found it most difficult to render data from the page after moving the data from hard-coded to database.
