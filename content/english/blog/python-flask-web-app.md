---
mtitle: "Full Stack Web development in Python" 
title: "Building a simple web application using Flask"
date: 2021-08-06T15:27:17+06:00
draft: false
# page title background image
bg_image: "images/backgrounds/page-title.jpg"
# meta description
description : "Building web applications in python using flask web development framework"
keywords : "Flask CRUD app, python web app development, python database app"
# post thumbnail
image: "images/blog/Python-basic-crud-app.png"
# post author
author: "Chandan Purohit"
# taxonomy
categories: ["Web Development"]
tags: ["Flask","Web Development", "Python"]
# type
type: "post"
---

### What is Flask?
Flask is a very popular "micro" web development framework built with Python. The framework is most popular especially for small to medium size applications. For me, this framework has been THE framework of choice for most of my python projects. 

Flask is the framework for beginners, especially if you do not have solid understanding of how the web works. I personally started with Django, but got stuck as it does many things behind the scenes and one must use ORM almost compulsorily to use django. Flask on the other hand is quite simplistic and the purpose of this article is to show you how to use it to build a simple CRUD app with sqlite database. 
#### What are we building?
We are build a simple application to add and display car information. The whole code is available in *[github link](https://github.com/guruvyasa/basic-python-flask-sqlite-crudApp)*

#### Spinning up a basic app
Here is the code to build a simple hello world flask app

```python {linenos=table,hl_lines=[8,"15-17"],linenostart=1}
########################
# Simple hello world app
########################
from flask import Flask
app = Flask(__name__)
@app.route("/")
def index():
    return "hello world"
app.run(debug=True)
```
The  line `app = Flask(__name__)` creates a Flask class instance which is used throughout the code. Url routing is defined through the `@app` decorative in line 3. The line says that *whenever a http GET request is made to the / url call the function `index`*. The last line starts the app in debug mode so that the app auto restarts whenver we make changes and save.

Now, if you open a browser and type `localhost:5000` and hit `enter` key you will see a "hello world" on the screen.

#### Creating tables 
We create another file `database.py` to house the entire database related code. Here is the code to create the tables `company` and `car`. Each car belongs to a company, thus, there is a foreign key relationship
```python {linenos=table,hl_lines=[8,"15-17"],linenostart=1}
import sqlite3
import datetime

def getConnection():
    conn = sqlite3.connect("car.db")
    conn.row_factory = sqlite3.Row
    return conn

def create():
    conn = getConnection()

    try:
        query = """
    create table company(id integer primary key autoincrement, 
    name varchar(30) not null, 
    address text, 
    phone varchar(10))
    """
        
        conn.execute(query)
        conn.commit()

        query = """
    create table car(id integer primary key autoincrement, 
    name varchar(30) not null, 
    model varchar(30) not null, 
    color varchar(10) default "red", 
    launch_date date default CURRENT_DATE,
    company integer not null,
    foreign key (company) references company(id))
    """
        conn.execute(query)
        conn.commit()
    except Exception as e:
        print(e)
    finally:
        conn.close()
```
We take a connection and execute the sql query for creating tables. The database used here is sqlite3 which comes preinstalled with python 3+.

The code for other functions is self explainatory. The main task everytime is
1. Take database connection

2. Execute query  

3. Return result / status  

#### Rendering html
Flask requires a folder called **templates**. You can create html files and store in this folder. Jinja template engine is used by flask to generate dynamic pages on the server side. Here is an example.

```html {linenos=table,hl_lines=[8,"15-17"],linenostart=1}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
</head>
<body>
    {% for i in range(10) %}
    <h1>Hello {{name}}</h1>
    {% endfor %}
</body>
</html>
``` 

We need to set up a url to render this page. We need to use `render_template` function to render the page

```python {linenos=table,hl_lines=[8,"15-17"],linenostart=1}
@app.route("/search")
def index():
    name = request.args.get("name", "world")
    # return f"<h1>Hello {name}!!</h1>"
    return render_template("index.html", name=name)
```

Now, if you open the url `localhost:5000/search?name=ram` you will get `Hello ram` 10 times. You can download and playaround with the code. To add static files (css,js etc) just add another folder called `static` and use in the html files.

