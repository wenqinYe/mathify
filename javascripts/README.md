#How to run the rails website
Please ensure that you have ruby on rails installed on your system.

## Change directory to mathbook website file

Go to the command prompt.
Type in: `cd <absolute path to mathbook website file>`
Note that the path is NOT to the entire website but just to the "mathbook" folder that is within the website folder. This is important because if you cd to the entire git repo the server will not run.

If you do not know the path to the folder you can simply drag the folder into the command prompt and the absolute file path should appear.

For instance for me I would type in: `cd /Users/samcarbet/Desktop/MathBook/website/mathbook`
Once again notice that I change directory into the mathbook folder (/MathBook/website/mathbook) within the website folder and am not changing directory into the main MathBook repo.

## Runing the Rails Server

Once you've changed into the mathbook directory type in: rails server

This should start up a rails server (this may take a few seconds)

When the server is finished booting the output should look like: 

```
=> Booting WEBrick

=> Rails 4.2.1 application starting in development on http://localhost:3000

=> Run rails server -h for more startup options

=> Ctrl-C to shutdown server

[2017-02-26 20:55:53] INFO  WEBrick 1.3.1

[2017-02-26 20:55:53] INFO  ruby 2.2.1 (2015-02-26) [x86_64-darwin14]

[2017-02-26 20:55:53] INFO  WEBrick::HTTPServer#start: pid=13402 port=3000

```

## Accessing the website

Once the server has booted head over to http://localhost:3000 or http://0.0.0.0:3000

The home page that the server shows is located at `MathBook/website/mathbook/app/views/home/index.html.erb`

Any javascript file in `Mathbook/website/mathbook/app/assets/javascripts` is automatically imported into the website by rails ( similar to how code pen automatically inserts javascript).

## Understanding the folder structure

_For more information it is higly encouraged that you read a basic tutorial on ruby on rails._

`Mathbook/website/mathbook/app` is where all the website code is located. 

Rails follows basic model-view-controller conventions.

A `view` represents what the user sees. It is the html document. The view can be found as a subdirectory under the app folder at `Mathbook/website/mathbook/app/views`. Under  `views` are a series of folders to represent various file paths. For example loading http://localhost:3000/home will load the `Mathbook/website/mathbook/app/views/home/index.html.erb` file.

A `model` is an object that represents a table in the database. For example there could be a user model, a post model, or a note model. The models can be found as a subdirectory under the app folder at `Mathbook/website/mathbook/app/models`.

A `controller` connects the view and the model. Whenever the user goes to a specific link, the controller will access any model objects that the view may need to display. The controllers can be found as a subdirectory under the app folder at `Mathbook/website/mathbook/app/controllers`.



The website always roots to the index action of the home controller:

I.e on startup it will always run `MathBook/website/mathbook/app/controllers/home_controller.rb`

which displays: `Mathbook/website/mathbook/app/views/home/index.html.erb`







 

