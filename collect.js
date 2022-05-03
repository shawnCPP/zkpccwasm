require('dotenv').config({silent: true});

const routes = require('next-routes')();

routes
    .add('/transactionHistory', 'transactionHistory')
// export default routes; 
module.exports = routes;

const { say } = require('./hello_lib.js');

const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.end(say("Michael"));
  res.end(say(queryObject['name']));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


const timeoutObj = setTimeout(() => {
  console.log('timeout beyond time');
}, 1500);

const immediateObj = setImmediate(() => {
  console.log('immediately executing immediate');
});

const intervalObj = setInterval(() => {
  console.log('interviewing the interval');
}, 500);

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);

● 定时器
    ○ setTimeout(callback, delay, [arg], [...])
    ○ clearTimeout(timeoutObject)
    ○ setInterval(callback, delay, [arg], [...])
    ○ clearInterval(intervalObject)
    ○ unref()
    ○ ref()
    ○ setImmediate(callback, [arg], [...])
    ○ clearImmediate(immediateObject)


    <form id="infer" enctype="multipart/form-data">
    <div class="form-group">
<label for="image_file">Please upload an image file (<a href="grace_hopper.jpg">example</a>)</label>
      <input type="file" class="form-control-file" id="image_file" name="image_file">
    </div>

<button type="submit" class="btn btn-primary mb-2" id="recognize" onclick="setTimeout(function(){$('#result').text('Please wait. This could take a minute');$('#recognize').prop('disabled', true);},0);return true;">Recognize</button>
  </form>


