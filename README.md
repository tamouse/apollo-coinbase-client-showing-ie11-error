# apollo client app to demonstrate failure on IE11


Following the instructions in the Getting Started page for Apollo React Client, I built this app to run on Windows in IE11 to show an error that prevents the apollo client from running.

I used polyfills from https://polyfill.io to give the necessary functions, including fetch, promise, Symbol, and fills for ES5, ES6, and ES7. (See public/index.html for the script call).

The following screenshot show the error and where it occurs:

![console showing error](./console-showing-error.jpg "Console on IE11, showing the error")

This screenshot shows the line in the debugger reporting the error:

![debug window showing line reporting error](./debug-showing-error-reporting-line.jpg "IE11 Debugger showing the line reporting the error")
