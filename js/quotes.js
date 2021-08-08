const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote:
            "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "Hemmingway",
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
    },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

/*
🌟 Math.random();
0 부터 1사이의 랜덤한 숫자를 호출. (소숫점 엄청김)

우리는 0부터 9까지의 숫자를 원하기 때문에 10을 곱해준다.
Math.random() * 10

이제,뒤에 붙은 소숫점들을 없애주어야한다.
여기에는 3개의 함수가 있다.
1. Math.round() ➡️ 반올림 해줌.
ex) Math.round(1.4); ➡️  1

2. Math.ceil() ➡️ 올림 해줌.
ex) Math.round(1.1); ➡️  2

3. Math.floor() ➡️ 내림 해줌.
Math.floor(1.9999); ➡️  1

우리는 Math.floor을 사용하여 array quotes 안의 값을 꺼내올것이다.
*/

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;