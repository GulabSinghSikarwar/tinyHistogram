const str = `1. Who are you?


2. Where can I find ttt on social media?

You can find us on
Instagram (@ttt_official),
 
Twitter (@terriblytiny),
and YouTube (youtube.com/terriblytinytalkies)

3. Where can I read all your stories? / I want to read all tales; where can I find them?

All published tales can be found across our social media platforms.

4. How do I get in touch with you?

For events and workshops, write to us at events@terriblytinytales.com 
`
// const arr= str.split(/[ ,.\n]+/)

const arr = str.split(/[ .]+/);

const ls = `For events 
and workshops, write 
to us at events@terriblytinytales.com`

const a = ls.split(/[ ,.\n]+/)
console.log(a);
// console.log(arr);
