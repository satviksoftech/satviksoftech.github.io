---
mtitle: "Number formatting JS, Numbers in Javascript and Python"
title: "Formatting numbers according to Indian Locale in Javascript and Python"
date: 2021-08-06T15:27:17+06:00
draft: false
# page title background image
bg_image: "images/backgrounds/page-title.jpg"
# meta description
description : "Formatting numbers is a common task in programming and we discuss how to format according to Indian locale"
keywords : "numbers in python and javascript, formatting numbers, coding numbers"
# post thumbnail
image: "images/blog/number-locale-format.png"
# post author
author: "Chandan Purohit"
# taxonomy
categories: ["Web Development"]
tags: ["Javascript","Python","Web Development", "String formatting"]
# type
type: "post"
---

I came across this problem while building an app recently and thought it might be interesting to share. The problem we
are trying to solve is of displaying numbers according to locale. Eg. in india, number 100000 is written as 1,00,000 while in US it is written as 100,000. So, how can we write a program to format numbers properly according to the locale in Javascript and Python is the question we are trying to answer.
#### Brute force way!!
The raw or brute force way for doing this is to write a program from scratch. However, to be able to handle different locales we will have to come up with a pretty non-trivial program. Since I was concentrating on Indian locale (100000 as 1,00,000 etc.), I came up with a simple program for doing the same in Javascript.
```javascript {linenos=table,hl_lines=[8,"15-17"],linenostart=1}
function format(number){
    let formattedNumber = ''
    let i=0;
    if(number.length%2==0){
        formattedNumber += number[i++]+","
    }
    //place ,(comma) every two digits
    for(; i<number.length-3; i+=2){
        formattedNumber += number[i]+number[i+1]+","
    }
    //join in remaining digits
    while(i<number.length){
        formattedNumber += number[i++]
    }
    return formattedNumber
}

let givenNumber = '100000' //read the number as a string
//if number has less than 4 digits display as it is
console.log((givenNumber.length < 4)?givenNumber:format(givenNumber))
```
The logic here is pretty straightforward. If the number of digits is even then we append the first digit followed by a comma and append comma every third digit. Else, we just append comma every third digit. Of course, there are lots of other ways to do the same. However, the preferred way is to just use the builtin internationalization module (Intl) in JS.
```javascript {linenos=table,hl_lines=[8,"15-17"],linenostart=1}
let number = 100000
console.log(new Intl.NumberFormat('en-IN').format(number)); //1,00,000
```
We can customize the output even more by passing in options argument and also locales. Since I was mainly interested in Indian locale I ve used "en-IN". For more information please read *[Intl MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)*
Python too has a module called locale.
```python {linenos=table,hl_lines=[8,"15-17"],linenostart=1}
import locale
locale.setlocale(locale.LC_NUMERIC, "en_IN")
number = 100000
print(f"{number:n}")
```
As you can see both python and javascript have quite good support for internationalization.


