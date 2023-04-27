
let game = {
    scoreElement : document.getElementById('score'),
    timeElement : document.getElementById('time'),
    answerText : document.getElementById('answer'),
    emotionDisplay : document.getElementById('emotionDisplay'),
    startScreen : document.getElementById('startScreen'),
    endScreen : document.getElementById('endScreen'),
    finalScore : document.getElementById('finalScore'),
    emotionDisplayText : 'emotion',
    currentEmotion : undefined,
    score : 0,
    startGame : function() { //function just calls the other functions
        this.startScreen.style.top = '120vh'
        this.countDown(60)
        this.change()
        let buttonTrue = document.getElementById('buttonTrue')
        let buttonFalse = document.getElementById('buttonFalse')
        buttonTrue.addEventListener('click', function() {
            game.buttonclick(true)
        })
        buttonFalse.addEventListener('click', function() {
            game.buttonclick(false)
        })
    },
    change : function() {
        //gets a random emotion object from the object array
        let emotion = emotions[this.randomInt(0,emotions.length)]
        //gets a random image from the emotion chosen above
        let emotionImage = emotion.array[this.randomInt(0,emotion.array.length -1)]
        console.log(emotionImage)

        //changes the image div to the chosen random image
        document.getElementById('image').style.backgroundImage = 'url(' + emotionImage + ')'

        // makes the chosen emotion global for the buttons to see
        this.currentEmotion = emotion.type

        //chooses the botten text with a 50% chance of being the correct one and a 50% chance of being a random other one
        let coinflip = this.randomInt(0,1)
        if (coinflip === 0) {
            this.emotionDisplayText = emotion.type // correct emotion
        } else if (coinflip === 1) {
            this.emotionDisplayText = emotions[this.randomInt(0,emotions.length)].type //random emotion 
        }
        this.emotionDisplay.innerHTML = this.emotionDisplayText // displays the chosen emotion
    },
    buttonclick : async function(clickedBoolean) {
        this.answerText.style.opacity = 100
        if (clickedBoolean) { // if the user clicked true
            if (this.emotionDisplayText == this.currentEmotion) { // check if the emotion corresponds with the image
                this.answerText.innerHTML = 'correct' // if it does
                this.answerText.style.color = '#96fbc7' //make it green
                this.answerText.style.borderColor = '#96fbc7' //make it green
                this.score+=5
            } else {
                this.answerText.innerHTML = 'incorrect the emotion is: ' + this.currentEmotion //if it does not
                this.answerText.style.color = '#ffb3cb' //make it red
                this.answerText.style.borderColor = '#ffb3cb' //make it red
                this.score-=10
            }
        } else if (!clickedBoolean) { // check if the emotion does not correspond with the image
            if (this.emotionDisplayText != this.currentEmotion) { // check if the emotion corresponds with the image
                this.answerText.innerHTML = 'correct the emotion is: ' + this.currentEmotion //if it does
                this.answerText.style.color = '#96fbc7' //make it green
                this.answerText.style.borderColor = '#96fbc7' //make it green
                this.score+=5
            } else {
                this.answerText.style.color = '#ffb3cb' //make it red
                this.answerText.style.borderColor = '#ffb3cb' //make it red
                this.answerText.innerHTML = 'incorrect the emotion is: ' + this.currentEmotion //if it does not
                this.score-=10
            }
        }
        this.scoreElement.innerHTML = 'score: ' + this.score
        await this.sleep(1000)
        this.change()
        await this.sleep(500)
        this.answerText.style.opacity = 0
    },
    countDown : async function(seconds) {
        this.endScreen.style.top = '120vh'
        let time = seconds
        for(i=seconds; i>=0;i--) {
            this.timeElement.innerHTML = 'time left: ' + i + ' s' //counts down from the number passed into the function to zero
            await this.sleep(1000)
        }
        this.finalScore.innerHTML = 'finalScore: ' + this.score
        this.endScreen.style.top = '20vh'
    },
    randomInt : function (min, max) { // gets me a random whole number
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    sleep : function(ms) { // just a function wait in a async function
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

let emotions = [
  { type: "Admiration",
    array: [      
      "/images/Admiration/admiration-1.png",
      "/images/Admiration/admiration-2.png",
      "/images/Admiration/admiration-3.png",
      "/images/Admiration/admiration-4.png",
      "/images/Admiration/admiration-5.png",    
    ],
  },
  {
    type: "Adoration",
    array: [
      "/images/Adoration/adoration-1.png",
      "/images/Adoration/adoration-2.png",
      "/images/Adoration/adoration-3.png",
      "/images/Adoration/adoration-4.png",
    ],
  },
  {
    type: "Aesthetic Appreciation",
    array: [
      "/images/Aesthetic-Appreciation/aesthetic-appreciation-1.png",
      "/images/Aesthetic-Appreciation/aesthetic-appreciation-2.png",
      "/images/Aesthetic-Appreciation/aesthetic-appreciation-3.png",
      "/images/Aesthetic-Appreciation/aesthetic-appreciation-4.png",
    ],
  },
  {
    type: "Anxiety",
    array: [
      "/images/Anxiety/anxiety-1.png",
      "/images/Anxiety/anxiety-2.png",
      "/images/Anxiety/anxiety-3.png",
      "/images/Anxiety/anxiety-4.png",
    ],
  },
  {
    type: "Astonishment",
    array: [
      "/images/Astonishment/astonishment-1.png",
      "/images/Astonishment/astonishment-2.png",
      "/images/Astonishment/astonishment-3.png",
      "/images/Astonishment/astonishment-4.png",
      "/images/Astonishment/astonishment-5.png",
      "/images/Astonishment/astonishment-6.png"
    ],
  },
  {
    type: "Boredom",
    array: [
      "/images/Boredom/boredom-1.png",
      "/images/Boredom/boredom-2.png",
      "/images/Boredom/boredom-3.png",
      "/images/Boredom/boredom-4.png",
      "/images/Boredom/boredom-5.png",
    ],
  },
  {
    type: "Confusion",
    array: [
      "/images/Confusion/confusion-1.png",
      "/images/Confusion/confusion-2.png",
      "/images/Confusion/confusion-3.png",
      "/images/Confusion/confusion-4.png",
      "/images/Confusion/confusion-5.png",
    ],
  },
  {
    type: "Daze",
    array: [
      "/images/Daze/daze-1.png",
      "/images/Daze/daze-2.png",
      "/images/Daze/daze-3.png",
      "/images/Daze/daze-4.png",
    ],
  },
  {
    type: "Desire",
    array: [
      "/images/Desire/desire-1.png",
      "/images/Desire/desire-2.png",
      "/images/Desire/desire-3.png",
      "/images/Desire/desire-4.png",
    ],
  },
  {
    type : "Disgust",
    array: [
    "/images/Disgust/disgust-1.png",
    "/images/Disgust/disgust-2.png",
    "/images/Disgust/disgust-3.png",
    "/images/Disgust/disgust-4.png",
    "/images/Disgust/disgust-5.png",
    "/images/Disgust/disgust-6.png",
  ],
},
{
  type: "Embarrassment",
  array: [
    "/images/Embarrassment/embarrassment-1.png",
    "/images/Embarrassment/embarrassment-2.png",
    "/images/Embarrassment/embarrassment-3.png",
    "/images/Embarrassment/embarrassment-4.png",
  ],
},
{
  type: "Empathy (Pain)",
  array: [
    "/images/Empathy (pain)/empathy (pain)-1.png",
    "/images/Empathy (pain)/empathy (pain)-2.png",
    "/images/Empathy (pain)/empathy (pain)-3.png",
    "/images/Empathy (pain)/empathy (pain)-4.png",
    "/images/Empathy (pain)/empathy (pain)-5.png",
    "/images/Empathy (pain)/empathy (pain)-6.png",
    "/images/Empathy (pain)/empathy (pain)-7.png",
  ],
},
{
  type: "Excitement",
  array: [
    "/images/Excitement/excitement-1.png",
    "/images/Excitement/excitement-2.png",
    "/images/Excitement/excitement-3.png",
    "/images/Excitement/excitement-4.png",
  ],
},
{
  type: "Ecstasy",
  array: [
    "/images/Extasi/extasi-1.png",
    "/images/Extasi/extasi-2.png",
    "/images/Extasi/extasi-3.png",
  ],
},
{
  type: "Fear",
  array: [
    "/images/Fear/fear-1.png",
    "/images/Fear/fear-2.png",
    "/images/Fear/fear-3.png",
    "/images/Fear/fear-4.png",
    "/images/Fear/fear-5.png",
    "/images/Fear/fear-6.png",
  ],
},
{
  type: "Fulfillment",
  array: [
    "/images/Fulfillment/fulfillment-1.png",
    "/images/Fulfillment/fulfillment-2.png",
    "/images/Fulfillment/fulfillment-3.png",
    "/images/Fulfillment/fulfillment-4.png",
  ],
},
{
  type: "Fun",
  array: [
    "/images/Fun/fun-1.png",
    "/images/Fun/fun-2.png",
    "/images/Fun/fun-3.png",
    "/images/Fun/fun-4.png",
  ],
},
{
  type: "Horror",
  array: [
    "/images/Horror/horror-1.png",
    "/images/Horror/horror-2.png",
    "/images/Horror/horror-3.png",
    "/images/Horror/horror-4.png",
    "/images/Horror/horror-5.png",
  ],
},
{
    type: "Interest",
    array: [
      "/images/Interest/interest-1.png",
      "/images/Interest/interest-2.png",
      "/images/Interest/interest-3.png",
    ],
  },
  {
    type: "Joy",
    array: [
      "/images/Joy/joy-1.png",
      "/images/Joy/joy-2.png",
      "/images/Joy/joy-3.png",
      "/images/Joy/joy-4.png",
    ],
  },
  {
    type: "Nostalgia",
    array: [
      "/images/Nostalgia/nostalgia-1.png",
      "/images/Nostalgia/nostalgia-2.png",
      "/images/Nostalgia/nostalgia-3.png",
      "/images/Nostalgia/nostalgia-4.png",
      "/images/Nostalgia/nostalgia-5.png",
      "/images/Nostalgia/nostalgia-6.png",
      "/images/Nostalgia/nostalgia-7.png",
    ],
  },
  {
    type: "Rage",
    array: [
      "/images/Rage/rage-1.png",
      "/images/Rage/rage-2.png",
      "/images/Rage/rage-3.png",
      "/images/Rage/rage-4.png",
    ],
  },
  {
    type: "Relief",
    array: [
      "/images/Relief/relief-1.png",
      "/images/Relief/relief-2.png",
      "/images/Relief/relief-3.png",
    ],
  },
  {
    type: "Romance",
    array: [
      "/images/Romance/romance-1.png",
      "/images/Romance/romance-2.png",
      "/images/Romance/romance-3.png",
      "/images/Romance/romance-4.png",
      "/images/Romance/romance-5.png",
      "/images/Romance/romance-6.png",
    ],
  },
  {
    type: "Sadness",
    array: [
      "/images/Sadness/sadness-1.png",
      "/images/Sadness/sadness-2.png",
      "/images/Sadness/sadness-3.png",
      "/images/Sadness/sadness-4.png",
    ],
  },
  {
    type: "Tranquillity",
    array: [
      "/images/Tranquillity/tranquillity-1.png",
      "/images/Tranquillity/tranquillity-2.png",
    ],
  },
]
