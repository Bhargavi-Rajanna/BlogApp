#Assumptions made while developing this app

Using React js from client side and express js for server side rendering
The data is loading from a local json file located in the src folder ( blogData.js)
On landing it loads 3 blogs as list( this number is configurable) 
On click of load more , it adds 3 more blogs to the list 
Load more displays that’s all folks if there is no more blogs to load and the button gets disabled 
Handled both responsive and mobile screen designs (suitable for mobile screen width min width of 350px )
On Click of title on the blog list will take you to blogPage which loads the full blog details
On click of close button on blogPage takes you back to the list page


Steps to run this app

Go to the project folder on your terminal and run  : npm install

Once the install is completed  run -


To load the app in browser : npm run start

Running this command loads the app in : (http://localhost:3000/)



To Load the app in server : npm run ssr

Running this command loads the app in : (http://localhost:8000/)

