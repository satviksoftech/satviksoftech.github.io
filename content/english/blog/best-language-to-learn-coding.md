---
mtitle: "Learn coding, Best language to learn coding"
title: "Which is the best language to learn coding?"
date: 2021-12-06T15:27:17+06:00
draft: false
# page title background image
bg_image: "images/backgrounds/page-title.jpg"
# meta description
description : "Building web applications in python using flask web development framework"
keywords : "How to learn coding, coding tutor, CRUD app in python, Web app with Python, Python web programming"
# post thumbnail
image: "images/blog/best-programming-language.png"
# post author
author: "Chandan Purohit"
# taxonomy
categories: ["Education"]
tags: ["Programming", "Python"]
audience: "beginner"
# type
type: "blog"
layout: "blog/single"
---

### What is coding or programming?
It is interesting that though many people talk about coding/programming nowadays, very few actually delve into this very fundamental question. For this question, most would answer as **Solving a problem by giving instructions to a computer in a programming language**. Although this is almost correct, it gives a false impression that coding is something new and was not existent before the invention of the computer. That is our next question 
#### Is programming or coding new?
Well, the answer to this question is **NO**. That may come as a surprise for many reading this post. But let me justify. Programming is just problem solving. And to solve a problem we need a language. Mathematics, is also a language. There are some universally accepted symbols, like +,- etc. for various kinds of operations using which we describe solution to problems. This fact that Computer Science is just another offshoot of mathematics is carefully hidden from students especially in India, maybe to get more students admitted in colleges. This has also led to many believing that one does not need to be a good mathematician to become a good software developer.  
#### Mathematics as a language
Mathematics is something we are taught right from our childhood and many have dreaded memories of the same. I would say plain old mathematics combined with problem solving is enough to become good at anything in life, including coding. However, there are some drawbacks with pure mathematical approach: 
- Solution given using mathematics is not easily self verifiable, atleast not a easy as writing test cases and verfiying.
- Solutions tend to be largely "imaginary", in the sense that no tangible outcome can be seen.
- Mathematics is fully generic. It means we can use mathematical formulae to describe anything. However, this itself means the number of symbols is **HUGE** and overwhelming. Enough to take students away from mathematics.

Even though the listed drawbacks are strong, we should understand that mathematical temperament is essential to become a good computer scientist. As a result, all computer science students are still required to take Discrete Mathematics subject in their degree. 
### C Programming Language 
C Programming language has been one the oldest programming languages, thus it has been traditionally offered as the first language for learning programming in almost all colleges and training institutes. It introduces procedural programming paradigm to solve problems which has its own advantages. However, I do not consider it to be a good language to learn for a beginner. Here are the reasons for it:
- C language encourages imperative style of coding, where we have to tell the computer **everything** that needs to be done. This leads to unintuitive and complex code. 
- A person trying to understand problem should focus more on solving the problem than on focusing on the internals of computers. Coding in C requires a person to focus equally (many times more) on computer internals and programming. 
- Building projects in C requires sound knowledge of concepts like pointers, which are quite complex to comprehend for a beginner. 
- From usage perspective too, a person is more likely to use any other language like Java, Python etc. in their projects over C.
Although C as a beginner language has these shortcomings, it is a must for any computer science student as one learns about computers a lot more if they learn C properly. C programming plus Linux is always a deadly combination.


### Which is the best beginner programming language? 
I have always been a big promoter of **Python** as a beginner programming language. There are lots of reasons for thinking like this. Here are a few:
- Python is quite **humane**. In the sense that code in python is almost like talking in english(if written properly). Here is a sample program in python to add numbers in a string written in C and python.
```C {linenos=table,hl_lines=[8,"15-17"],linenostart=1}
#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
int addNumbers(const char* word){
    char *letter = word;
    int sum = 0;
    while (*letter){
        if(isdigit(*letter))
            sum += atoi(*letter);
        letter++;
    }
    return sum;
}

int main(){
    printf("%d\n",addNumbers("h12nd6mn4"));
}

```
The above program is written in C. You may compare it with implementation in python given below

```python {linenos=table,hl_lines=[8,"15-17"],linenostart=1}
def addNumbers(word):
    return sum([int(letter) for letter in word if letter.isdigit()])

print(addNumbers("h12nd6mn4"))

```
- Python encourages the student to focus more on programming ie. solving the given problem rather than getting engrossed in internal language and computer details like memory consumption, address etc.
- Python has many built in data structures which are easy to use and students can learn usage of these data structures without ever implementing any on their own. 
- Python can be used to build almost any application except system software
- Python does not enforce any one particular programming paradigm. Java for eg. forces Object Oriented Programming. Python does encourage OOP but does not enforce it.
- Python forces many good programming practices. Eg. Code Identation

### Conclusion
Every language is beautiful in its own sense. However, we always prefer as beginner programming language. Python can be easily learnt without learning any other language. Go give it a try!


