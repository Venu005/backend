# Introduction
This is the backend repo for the [CodeRunner](https://github.com/Venu005/code-frontend). It can excecute codes in C++,Python,Java and JavaScript.

### Working
There are two parts to it. One is hosting the express app on [render](https://render.com/)  and the other is hosting mysql database on  [clever-cloud](https://console.clever-cloud.com/)
Data is fetched in a very standard way.
## Hosting
 This backend is hosted on [render](https://render.com/). It's pretty cool. GIve it a try. It gave me vercel vibes.
## EndPoints
There are two endpoints:
 ### 1.POST :  /insert
 You can post your code here along with your username,preferred language , user input. This data is collected via a form element.
 You can check the [frontend](https://github.com/Venu005/code-frontend)
  ```
   https://backend-9how.onrender.com/insert

```
 ### Intermediate Step:
 When the form is submitted,all the validation is done, We hit the second route, Here the data is fetched from a mysql database hosted on [clever-cloud](https://console.clever-cloud.com/)

 ### 2.GET :  /results
 Once the information is fetched , the data is rendered on the frontend in a tabular form.
 ```
   https://backend-9how.onrender.com/results

```
## Improvements
I tried using redis to cache query but failed big time. Any help is appreciated.
 
