/**
 * Created by sujil on 10/08/16.
 */
function QuoteGenerator(){
    var changeQuote=document.getElementById("new-quote");
    var quoteArray=['Life is 10% what happens to us and 90% how we react to it.',
        'There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures.',
        'Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.',
        'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
        "Doubt isn't the opposite of faith; it is an element of faith."];
    var Random_number=Math.floor(Math.random() * 5);
    changeQuote.innerHTML=quoteArray[Random_number];

}