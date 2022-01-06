const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();


function fib(index){
  if (index==0) return 0;
  if (index==1) return 1;
  else if(index>1 && index<=20)
    return fib(index-1)+fib(index-2);
  else return 0;
}


sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
