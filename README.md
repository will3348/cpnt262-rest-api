# CPNT262-rest-api
## Name  : Will Tengyuan Li
### links:
- Gh Pages link: https://will3348.github.io/cpnt262-rest-api/
- GH repo: https://github.com/will3348/cpnt262-rest-api
## Code Journal:
### Plan:
- To Fetch with async/await.
- To work with JSON.
### TODO
1. 
- To start a request, call the special function fetch(): ``` const response = await fetch(resource[, options]);``` 
- ``` const json = response.json();```
- ``` console.log(json);```
2.  
- await : await allows us to wait for the response of an asynchronous request. To use awaitin our hypothetical code, we can do this: 
```js 
const response = await fetch('https://api.com/values/1');
const json = await response.json();
console.log(json); 
``` 
### attributions
- youtube vedio: https://www.youtube.com/watch?v=vLRBe2d-WkA&t=405s&ab_channel=CodingShiksha
- youtube vedio: https://www.youtube.com/watch?v=cuEtnrL9-H0&ab_channel=WebDevSimplified
- article: https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait
- article: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON