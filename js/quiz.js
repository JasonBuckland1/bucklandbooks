// Define the quiz data
const quizData = [
  {
    group: "3.1",
    questions: [
      { question: "Hello! I ____ Jason.", answers: ["is", "am"], correctAnswerIndex: 1},
      { question: "I ____ Bill.", answers: ["am", "is", "are"], correctAnswerIndex: 0 },
      { question: "My name ____ Tom", answers: ["is", "are", "am"], correctAnswerIndex: 0 },
      { question: "", answers: ["The United Kingdom", "The United States", "Canada", "Germany"], correctAnswerIndex: 0, image: "img/quizImg/ukFlag.jpg" },
      { question: "", answers: ["The United Kingdom", "The United States", "Canada", "Germany"], correctAnswerIndex: 2, image: "img/quizImg/canadaFlag.jpg" },
      { question: "I ____ 15 years old.", answers: ["am", "are", "is"], correctAnswerIndex: 0 },
      { question: "You ____ 12 years old.", answers: ["am", "are", "is"], correctAnswerIndex: 1 },
      { question: "He ____ 9 years old.", answers: ["am", "are", "is"], correctAnswerIndex: 2 },
      { question: "We ____ 14 years old.", answers: ["am", "are", "is"], correctAnswerIndex: 1 },
      { question: "They ____ 19 years old.", answers: ["am", "are", "is"], correctAnswerIndex: 1 },
     
      { question: "4", answers: ["for", "fore", "four"], correctAnswerIndex: 2 },
      { question: "59", answers: ["fiftee nine", "fifty nine", "fifteen nine"], correctAnswerIndex: 1 },
      { question: "19", answers: ["ninety", "nineteen"], correctAnswerIndex: 1 },
      { question: "", answers: ["I am Spain", "I am from Spain"], correctAnswerIndex: 1, image: "img/quizImg/spanishFlag.jpg" },
      { question: "", answers: ["We are Japanese", "We are Japan"], correctAnswerIndex: 0, image: "img/quizImg/japanesePeople.jpg" },
      { question: "I ____ Australian.", answers: ["am", "are", "am from", "are from"], correctAnswerIndex: 0,},
      { question: "You ____ Italy.", answers: ["am", "are", "am from", "are from"], correctAnswerIndex: 3,},
      { question: "Bobby is ____ dog.", answers: ["my", "I",], correctAnswerIndex: 0, image: "img/quizImg/myDog.jpg" },
      { question: "____ sister is called Sarah.", answers: ["He", "Her",], correctAnswerIndex: 1,},
      { question: "____ turtle is 50 years old.", answers: ["He", "His",], correctAnswerIndex: 1,},
        
      { question: "____ Lion is from Kenya", answers: ["Our", "We",], correctAnswerIndex: 0,},
      { question: "____ pig lives on a farm.", answers: ["She", "Her",], correctAnswerIndex: 1,},
      { question: "They are ____ sheep.", answers: ["we", "our",], correctAnswerIndex: 1, image: "img/quizImg/ourSheep.jpg"},
      { question: "That ____ her cat.", answers: ["is", "are",], correctAnswerIndex: 0,},
      { question: "", answers: ["That is her grandparent's house.", "That is her grandparents' house.",], correctAnswerIndex: 1,},
      { question: "James is ____ aunt.", answers: ["Sarah", "Sarah's",], correctAnswerIndex: 1,},
      { question: "", answers: ["Sunglasses", "Glasses"], correctAnswerIndex: 0, image: "img/quizImg/sunglasses.jpg"},
      { question: "____ are my books.", answers: ["That", "Those",], correctAnswerIndex: 1,},
      { question: "____ is Simon's phone.", answers: ["Those", "That",], correctAnswerIndex: 1,},
      { question: "", answers: ["These are our keys.", "That are our keys.",], correctAnswerIndex: 0, image: "img/quizImg/keys.jpg"},
        
      { question: "", answers: ["Dictionarys", "Dictionarees", "Dictionaries"], correctAnswerIndex: 2, image: "img/quizImg/dictionaries.jpg"},
      { question: "That ____ her book.", answers: ["are", "is",], correctAnswerIndex: 1,},
      { question: "", answers: ["boxs", "boxes",], correctAnswerIndex: 1, image: "img/quizImg/boxes.jpg"},
      { question: "", answers: ["toothbrushs", "toothbrushes",], correctAnswerIndex: 1, image: "img/quizImg/toothbrushes.jpg"},
      { question: "____ pencils are hers.", answers: ["This", "These",], correctAnswerIndex: 1,},
      { question: "", answers: ["waiter", "electrician", "pilot", "scientist"], correctAnswerIndex: 3, image: "img/quizImg/scientist.jpg"},
      { question: "", answers: ["vet", "firefighter", "doctor", "driver"], correctAnswerIndex: 1, image: "img/quizImg/firefighter.jpg"},
      { question: "She ____ farmer.", answers: ["are an", "am an", "is a", "are"], correctAnswerIndex: 2,},
      { question: "We ____ teachers.", answers: ["are an", "am an", "is a", "are"], correctAnswerIndex: 3,},
      { question: "They ____ drivers.", answers: ["are", "is",], correctAnswerIndex: 0,},
        
      { question: "He ____ a vet.", answers: ["are", "is",], correctAnswerIndex: 1,},
      { question: "We ____ sales assistants.", answers: ["am", "are",], correctAnswerIndex: 1,},
      { question: "", answers: ["farm", "office", "restaurant", "construction site"], correctAnswerIndex: 0, image: "img/quizImg/restaurant.jpg"},
      { question: "A nurse is in a ____ .", answers: ["restaurant", "farm", "hospital"], correctAnswerIndex: 2,},
      { question: "", answers: ["plants", "food", "people"], correctAnswerIndex: 1, image: "img/quizImg/food.jpg"},
      { question: "I ____ a vet.", answers: ["am", "is"], correctAnswerIndex: 0,},
      { question: "She ____ a businesswoman.", answers: ["is", "are"], correctAnswerIndex: 0,},
      { question: "You ____ a nurse.", answers: ["is", "are"], correctAnswerIndex: 1,},
      { question: "We work ____ a farm.", answers: ["in", "on"], correctAnswerIndex: 1,},
      { question: "My sister works ____ a cafe.", answers: ["on", "in"], correctAnswerIndex: 1,},
        
      { question: "Dan works ____ a hospital.", answers: ["on", "in"], correctAnswerIndex: 1,},
      { question: "My dad works ____ a construction site.", answers: ["on", "in"], correctAnswerIndex: 0,},
      { question: "Tom is a chef, and he works with _____ .", answers: ["animals", "food", "children"], correctAnswerIndex: 1,},
      { question: "", answers: ["noon", "midnight"], correctAnswerIndex: 0, image: "img/quizImg/noon.jpg"},
      { question: "", answers: ["noon", "midnight"], correctAnswerIndex: 1, image: "img/quizImg/midnight.jpg"},
      { question: "", answers: ["3am", "3pm"], correctAnswerIndex: 0, image: "img/quizImg/3am.jpg"},
      { question: "", answers: ["3am", "3pm"], correctAnswerIndex: 1, image: "img/quizImg/3pm.jpg"},
      { question: "", answers: ["It's quarter to six.", "It's quarter to seven."], correctAnswerIndex: 1, image: "img/quizImg/quartertoseven.jpg"},
      { question: "", answers: ["Dawn", "Afternoon", "Evening"], correctAnswerIndex: 1, image: "img/quizImg/afternoon.jpg"},
      { question: "", answers: ["Dawn", "Afternoon", "Evening"], correctAnswerIndex: 2, image: "img/quizImg/evening.jpg"}
    ]
  },
  {
    group: "3.2",
    questions: [
      { question: "I ____ lunch at 2pm every day.", answers: ["eat", "eats"], correctAnswerIndex: 0 },
      { question: "You ____ lunch at 2pm every day.", answers: ["eat", "eats"], correctAnswerIndex: 0 },
      { question: "He ____ lunch at 2pm every day.", answers: ["eat", "eats"], correctAnswerIndex: 1 },
      { question: "It ____ lunch at 2pm every day.", answers: ["eat", "eats"], correctAnswerIndex: 1 },
      { question: "I ____ school at 10am.", answers: ["start", "starts"], correctAnswerIndex: 0 },
      { question: "Ellen ____ up at 5 o'clock.", answers: ["get", "gets"], correctAnswerIndex: 1 },
      { question: "I ____ a shower in the evening.", answers: ["take", "takes"], correctAnswerIndex: 0 },
      { question: "My brother ____ with animals.", answers: ["work", "works"], correctAnswerIndex: 1 },
      { question: "Tom ____ up at 7:30am.", answers: ["get", "gets"], correctAnswerIndex: 1 },
      { question: "Shona ____ TV in the evening.", answers: ["watch", "watches"], correctAnswerIndex: 1 },
        
      { question: "We ____ to bed at midnight.", answers: ["go", "goes"], correctAnswerIndex: 0 },
      { question: "I ____ school at noon.", answers: ["start", "starts"], correctAnswerIndex: 0 },
      { question: "She ____ an hour for lunch.", answers: ["take", "takes"], correctAnswerIndex: 1 },
      { question: "He ____ his car every weekend.", answers: ["wash", "washes"], correctAnswerIndex: 1 },
      { question: "She ____ for eight hours.", answers: ["sleep", "sleeps"], correctAnswerIndex: 1 },
      { question: "I ____ to work.", answers: ["drive", "drives"], correctAnswerIndex: 0 },
      { question: "I go to school from Monday ____ Wednesday.", answers: ["at", "on", "to"], correctAnswerIndex: 2 },
      { question: "I ____ a bath on Wednesdays.", answers: ["take", "takes"], correctAnswerIndex: 1 },
      { question: "I watch TV ____ Sundays.", answers: ["at", "on"], correctAnswerIndex: 1 },
      { question: "Colin sleeps ____ 11pm to 6am.", answers: ["at", "from", "on"], correctAnswerIndex: 1 },
        
      { question: "Jack starts school at 8am ____ Mondays.", answers: ["at", "on"], correctAnswerIndex: 1 },
      { question: "Which is correct?", answers: ["I work from MOnday to Thursday.", "I work of Monday to Thursday."], correctAnswerIndex: 0 },
      { question: "Which is correct?", answers: ["You read the newspaper in Sundays.", "You read the newspaper on Sundays."], correctAnswerIndex: 1 },
      { question: "He ____ in school.", answers: ["is not", "are not"], correctAnswerIndex: 0 },
      { question: "You ____ at work.", answers: ["is not", "are not"], correctAnswerIndex: 1 },
      { question: "Which is correct?", answers: ["It am not 10 o'clock in the morning.", "It is not 10 o'clock in the morning."], correctAnswerIndex: 1 },
      { question: "which is correct?", answers: ["My brother aren't married.", "My brother isn't married."], correctAnswerIndex: 1 },
      { question: "He ____ at school.", answers: ["am not", "aren't", "isn't"], correctAnswerIndex: 2 },
      { question: "I ____ work outside.", answers: ["do not", "does not"], correctAnswerIndex: 0 },
      { question: "We _____ work outside.", answers: ["do not", "does not"], correctAnswerIndex: 0 },
        
      { question: "She ____ speak English.", answers: ["don't", "doesn't"], correctAnswerIndex: 1 },
      { question: "____ you American?", answers: ["Am", "Are", "Is"], correctAnswerIndex: 1 },
      { question: "____ she Australian?", answers: ["Am", "Are", "Is"], correctAnswerIndex: 2 },
      { question: "____ it Chinese?", answers: ["Am", "Are", "Is"], correctAnswerIndex: 2 },
      { question: "You work in a school.", answers: ["Does you work in a school?", "Do you work in a school?"], correctAnswerIndex: 1 },
      { question: "They live in Paris.", answers: ["Does they live in Paris?", "Do they live in Paris?"], correctAnswerIndex: 1 },
      { question: "_____ they eat breakfast?", answers: ["Do", "Does"], correctAnswerIndex: 0 },
      { question: "_____ she like coffee?", answers: ["", "", "", ""], correctAnswerIndex: 1 },
      { question: "Does he live here?", answers: ["Yes, he do.", "Yes, he does."], correctAnswerIndex: 1 },
      { question: "Do they live in Sweden?", answers: ["Yes, they do.", "Yes, they does."], correctAnswerIndex: 0 },
        
      { question: "Do you eat breakfast?", answers: ["No, I'm not.", "No, I don't", "No, I aren't.", "No, I isn't."], correctAnswerIndex: 1 },
      { question: "Is that your dog?", answers: ["No, it doesn't.", "No, it not.", "No, it isn't.", "No, it aren't."], correctAnswerIndex: 2 },
      { question: "What ____ their names?", answers: ["is", "are", "am"], correctAnswerIndex: 1 },
      { question: "What ____ the time?", answers: ["is", "are", "am"], correctAnswerIndex: 0 },
      { question: "What ____ they?", answers: ["is", "are", "am"], correctAnswerIndex: 1 },
      { question: "____ is it cold in here?", answers: ["Which", "Why", "Who", "What"], correctAnswerIndex: 1 },
      { question: "", answers: ["Factory", "Pharmacy", "Castle", "Church"], correctAnswerIndex: 0, image: "img/quizImg/factory.jpg" },
      { question: "", answers: ["Factory", "Pharmacy", "Castle", "Church"], correctAnswerIndex: 2, image: "img/quizImg/castle.jpg" },
      { question: "There ____ a hospital in my town.", answers: ["is", "are"], correctAnswerIndex: 0 },
      { question: "There ____ three restaurants in my town.", answers: ["is", "are"], correctAnswerIndex: 1 },
        
      { question: "There ____ stores.", answers: ["aren't any", "aren't no"], correctAnswerIndex: 0 },
      { question: "There ____ theatres.", answers: ["are any", "are no"], correctAnswerIndex: 1 },
      { question: "There is ____ good cafe in the park.", answers: ["a", "an", "the"], correctAnswerIndex: 0 },
      { question: "It is ____ dog's favourite toy.", answers: ["a", "an", "the"], correctAnswerIndex: 2 },
      { question: "See you at ____ bus station.", answers: ["a", "an", "the"], correctAnswerIndex: 2 },
      { question: "Is there ____ swimming pool near here?", answers: ["a", "an", "any"], correctAnswerIndex: 0 },
      { question: "Are there ____ people in that shop?", answers: ["a", "an", "any"], correctAnswerIndex: 2 },
      { question: "", answers: ["opposite", "between", "block"], correctAnswerIndex: 1, image: "img/quizImg/between.jpg" },
      { question: "The cinema is ____ of the intersection.", answers: ["opposite", "behind", "between", "on the corner"], correctAnswerIndex: 0, image: "img/quizImg/cinema.jpg" },
      { question: "There's a hotel, ____ there isn't a shop.", answers: ["and", "but"], correctAnswerIndex: 1 }
    ]
  },
  {
    group: "3.3",
    questions: [
      { question: "The house is ____ .", answers: ["beautiful", "horrible", "busy", "old"], correctAnswerIndex: 0, image: "img/quizImg/beautiful.jpg" },
      { question: "The house is ____ .", answers: ["beautiful", "horrible", "busy", "old"], correctAnswerIndex: 2, image: "img/quizImg/busy.jpg" },
      { question: "The house is ____ .", answers: ["beautiful", "horrible", "busy", "old"], correctAnswerIndex: 3, image: "img/quizImg/old.jpg" },
      { question: "", answers: ["countryside", "mountain", "lake", "river"], correctAnswerIndex: 1, image: "img/quizImg/mountain.jpg" },
      { question: "", answers: ["beach", "sea", "river", "hill"], correctAnswerIndex: 3, image: "img/quizImg/hill.jpg" },
      { question: "There are ____ people.", answers: ["some", "a few", "lots of"], correctAnswerIndex: 2, image: "img/quizImg/people.jpg" },
      { question: "There are ____ trees.", answers: ["some", "many", "lots of"], correctAnswerIndex: 0, image: "img/quizImg/trees.jpg" },
      { question: "Small = Big.   Horrible = ____ .", answers: ["easy", "beautiful", "large", "new"], correctAnswerIndex: 1 },
      { question: "It is noisy in town ____ there are lots of cars.", answers: ["so", "or", "because"], correctAnswerIndex: 2 },
      { question: "The nurse is busy ____ there are lots of patients.", answers: ["because", "so", "or"], correctAnswerIndex: 0 },
        
          { question: "", answers: ["living room", "bathroom", "attic", "basement"], correctAnswerIndex: 2, image: "img/quizImg/attic.jpg" },
      { question: "", answers: ["stove", "wardrobe", "couch", "garage"], correctAnswerIndex: 0, image: "img/quizImg/stove.jpg" },
      { question: "We ____ a cat.", answers: ["have", "has"], correctAnswerIndex: 0 },
      { question: "She ____ a dog.", answers: ["have", "has"], correctAnswerIndex: 1 },
      { question: "They ____ a garage.", answers: ["have", "has"], correctAnswerIndex: 0 },
      { question: "He ____ a fridge.", answers: ["have", "has"], correctAnswerIndex: 1 },
      { question: "I ____ a new car.", answers: ["have", "has"], correctAnswerIndex: 0 },
      { question: "The village ____ have any stores.", answers: ["doesn't", "don't"], correctAnswerIndex: 0 },
      { question: "You ____ have any sisters.", answers: ["doesn't", "don't"], correctAnswerIndex: 1 },
      { question: "My city ____ have a castle.", answers: ["doesn't", "don't"], correctAnswerIndex: 0 },
        
          { question: "", answers: ["microwave", "dishwasher", "kettle", "toaster"], correctAnswerIndex: 3, image: "img/quizImg/toaster.jpg" },
      { question: "", answers: ["microwave", "dishwasher", "kettle", "toaster"], correctAnswerIndex: 0, image: "img/quizImg/microwave.jpg" },
      { question: "", answers: ["meat", "seafood", "fruit", "vegetables"], correctAnswerIndex: 1, image: "img/quizImg/seafood.jpg" },
      { question: "This is a ____ of milk.", answers: ["carton", "jar", "box", "tube"], correctAnswerIndex: 0 },
      { question: "This is a ____ of toothpaste.", answers: ["carton", "jar", "box", "tube"], correctAnswerIndex: 3, image: "img/quizImg/toothpaste.jpg" },
      { question: "How ____ cakes are there?", answers: ["many", "much"], correctAnswerIndex: 0 },
      { question: "How ____ sugar is there?", answers: ["many", "much"], correctAnswerIndex: 1 },
      { question: "How ____ oranges are there?", answers: ["many", "much"], correctAnswerIndex: 0 },
      { question: "How ____ chocolate is there?", answers: ["many", "much"], correctAnswerIndex: 1 },
      { question: "There is ____ sugar.", answers: ["too many", "too much"], correctAnswerIndex: 1 },
        
          { question: "They have ____ apples.", answers: ["too many", "too much"], correctAnswerIndex: 0 },
      { question: "Tom has too many ____ .", answers: ["egg", "eggs"], correctAnswerIndex: 1 },
      { question: "There is ____ flour.", answers: ["too many", "too much"], correctAnswerIndex: 1 },
      { question: "There ____ too much sugar in the cake.", answers: ["are", "is"], correctAnswerIndex: 1 },
      { question: "There ____ too much salt.", answers: ["is", "are"], correctAnswerIndex: 0 },
      { question: "There ____ enough sugar.", answers: ["aren't", "isn't", "weren't"], correctAnswerIndex: 1 },
      { question: "", answers: ["shirt", "blouse", "dress", "skirt"], correctAnswerIndex: 3, image: "img/quizImg/skirt.jpg" },
      { question: "", answers: ["jeans", "jacket", "coat", "raincoat"], correctAnswerIndex: 0, image: "img/quizImg/jeans.jpg" },
      { question: "", answers: ["socks", "boots", "shoes", "sneakers"], correctAnswerIndex: 0, image: "img/quizImg/sneakers.jpg" },
      { question: "", answers: ["smart", "casual", "suit", "uniform"], correctAnswerIndex: 2, image: "img/quizImg/suit.jpg" },
        
          { question: "Sarah ____ a red hat.", answers: ["own", "owns"], correctAnswerIndex: 1 },
      { question: "____ a new shirt!", answers: ["Choose", "Chooses"], correctAnswerIndex: 0 },
      { question: "Let's ____ new clothes.", answers: ["buy", "buys"], correctAnswerIndex: 0 },
      { question: "'Does this sweater fit? 'No, it is ____ .' ", answers: ["not big enough", "big enough", "too big"], correctAnswerIndex: 0, image: "img/quizImg/big.jpg" },
      { question: "This is a ____ hat.", answers: ["lovely green", "green lovely"], correctAnswerIndex: 0 },
      { question: "We have a ____ car.", answers: ["old horrible", "horrible old"], correctAnswerIndex: 1 },
      { question: "James has a ____ cat.", answers: ["beautiful old", "old beautiful"], correctAnswerIndex: 0 },
      { question: "He is a ____ actor.", answers: ["brilliant young", "young brilliant"], correctAnswerIndex: 0 },
      { question: "This is a ____ book.", answers: ["new great", "great new"], correctAnswerIndex: 1 },
      { question: "This shoe is made of ____ .", answers: ["metal", "wool", "leather", "plastic"], correctAnswerIndex: 2, image: "img/quizImg/shoe.jpg" },
        
          { question: "That duck is made of ____ .", answers: ["plastic", "wood", "glass", "paper"], correctAnswerIndex: 0, image: "img/quizImg/duck.jpg" },
      { question: "____ are busy streets.", answers: ["This", "These"], correctAnswerIndex: 1 },
      { question: "", answers: ["The town is busy.", "The town is a busy."], correctAnswerIndex: 0 },
      { question: "Young = Old.   Difficult = ____ .", answers: ["slow", "easy", "new", "bad"], correctAnswerIndex: 1 },
      { question: "My village is quiet ____ there are only a few families.", answers: ["but", "because", "also"], correctAnswerIndex: 1 },
      { question: "Simon live on a farm ____ he is a farmer.", answers: ["but", "because", "also"], correctAnswerIndex: 1 },
      { question: "She ____ a small child.", answers: ["have", "has"], correctAnswerIndex: 1 },
      { question: "They put their food in the ____ .", answers: ["dishwasher", "kettle", "microwave", "plate"], correctAnswerIndex: 2 },
      { question: "There is ____ rice.", answers: ["100", "lots", "some"], correctAnswerIndex: 2 },
      { question: "____ potatoes are there?", answers: ["How many", "How much"], correctAnswerIndex: 0 }
    ]
  },
  {
    group: "3.4",
    questions: [
      { question: "She ____ surfing on the weekend.", answers: ["go", "goes"], correctAnswerIndex: 1 },
      { question: "We don't ____ fishing at the lake.", answers: ["go", "goes"], correctAnswerIndex: 0 },
      { question: "My friend Josh ____ running in town.", answers: ["go", "goes"], correctAnswerIndex: 1 },
      { question: "Veronica ____ dancing with friends on the weekend.", answers: ["go", "goes"], correctAnswerIndex: 1 },
      { question: "I ____ horse riding in France every year.", answers: ["go", "goes"], correctAnswerIndex: 0 },
      { question: "I ____ .", answers: ["go to the gym", "go camping", "go out for a meal", "go sightseeing"], correctAnswerIndex: 1, image: "img/quizImg/camping.jpg" },
      { question: "I ____ .", answers: ["go bird watching", "do yoga", "visit a museum", "go shopping"], correctAnswerIndex: 2, image: "img/quizImg/museum.jpg" },
      { question: "I ____ .", answers: ["do puzzles", "play board games", "take photos", "hike"], correctAnswerIndex: 3, image: "img/quizImg/hike.jpg" },
      { question: "He ____ baseball on Sunday.", answers: ["play", "plays"], correctAnswerIndex: 1 },
      { question: "We don't ____ badminton anymore.", answers: ["play", "plays"], correctAnswerIndex: 0 },
        
          { question: "I ____ shopping once a week.", answers: ["go", "goes"], correctAnswerIndex: 0 },
      { question: "She ____ to school in the morning.", answers: ["go", "goes"], correctAnswerIndex: 1 },
      { question: "I ____ a book every afternoon.", answers: ["read", "reads"], correctAnswerIndex: 0 },
      { question: "They never ____ dancing in the evening.", answers: ["go", "goes"], correctAnswerIndex: 0 },
      { question: "Sarah ____ pasta.", answers: ["hate", "hates"], correctAnswerIndex: 1 },
      { question: "Jack doens't ____ the sea.", answers: ["love", "loves"], correctAnswerIndex: 1 },
      { question: "You ____ like your new phone.", answers: ["doesn't", "don't"], correctAnswerIndex: 1 },
      { question: "She ____ love pasta.", answers: ["don't", "doesn't"], correctAnswerIndex: 1 },
      { question: "The dog ____ like cats.", answers: ["don't", "doesn't"], correctAnswerIndex: 1 },
      { question: "Why ____ you like pizza?", answers: ["don't", "doesn't"], correctAnswerIndex: 0 },
        
          { question: "", answers: ["jazz", "country", "opera", "rock"], correctAnswerIndex: 2, image: "img/quizImg/opera.jpg" },
      { question: "", answers: ["pop", "orchestra", "concert", "festival"], correctAnswerIndex: 3, image: "img/quizImg/festival.jpg"   },
      { question: "", answers: ["violin", "saxophone", "harmonica", "trumpet"], correctAnswerIndex: 1, image: "img/quizImg/sax.jpg" },
      { question: "", answers: ["flute", "drum", "violin", "keyboard"], correctAnswerIndex: 2, image: "img/quizImg/violin.jpg" },
      { question: "", answers: ["singer", "audience", "soul", "classical music"], correctAnswerIndex: 1, image: "img/quizImg/audience.jpg" },
      { question: "I like jazz and I love soul, ____ my favourite music is rock.", answers: ["and", "but"], correctAnswerIndex: 1 },
      { question: "Abdul ____ sailing", answers: ["love", "loves"], correctAnswerIndex: 1 },
      { question: "", answers: ["catch", "throw", "hit", "kick"], correctAnswerIndex: 0, image: "img/quizImg/catch.jpg" },
      { question: "", answers: ["whisper", "talk", "kick", "shout"], correctAnswerIndex: 2, image: "img/quizImg/kick.jpg" },
      { question: "", answers: ["whisper", "talk", "speak", "shout"], correctAnswerIndex: 0, image: "img/quizImg/whisper.jpg" },
        
          { question: "", answers: ["remember", "understand", "act", "carry"], correctAnswerIndex: 0, image: "img/quizImg/carry.jpg" },
      { question: "Can not = ____ .", answers: ["cant", "cant'", "can't"], correctAnswerIndex: 2 },
      { question: "Can you ride a bike?", answers: ["Yes, I can't.", "No, I can't."], correctAnswerIndex: 1 },
      { question: "Can we climb that mountain?", answers: ["Yes, we can.", "No, we can."], correctAnswerIndex: 1 },
      { question: "Paul and Jerry don't like the ocean because they ____ swim.", answers: ["can", "can't"], correctAnswerIndex: 1 },
      { question: "My mother ____ list that bag because it's too heavy.", answers: ["can", "can't"], correctAnswerIndex: 1 },
      { question: "I ride my bike to work because I ____ drive.", answers: ["can", "can't"], correctAnswerIndex: 1 },
      { question: "Can you catch that big fish?", answers: ["Yes, I can't.", "Yes, I can."], correctAnswerIndex: 1 },
      { question: "A turtle moves ____ .", answers: ["slowley", "slowlee", "slowly"], correctAnswerIndex: 2 },
      { question: "I can play the piano ____ .", answers: ["badly", "badlie", "badlee"], correctAnswerIndex: 0 },
        
      { question: "Ben always listens ____ .", answers: ["careful", "carefuly"], correctAnswerIndex: 1 },
      { question: "I can get to your house ____ .", answers: ["easy", "easily"], correctAnswerIndex: 1 },
      { question: "Sammy always plays his guitar ____ .", answers: ["loud", "loudly"], correctAnswerIndex: 1 },
      { question: "We ____ go to bed at 11pm.", answers: ["usual", "usually"], correctAnswerIndex: 1 },
      { question: "A cheetah runs very ____ .", answers: ["fast", "fastly"], correctAnswerIndex: 0 },
      { question: "I can pass this exam ____ .", answers: ["easy", "easyly", "easily"], correctAnswerIndex: 2 },
      { question: "Which is correct?", answers: ["Elizabeth speaks very Russian well.", "Elizabeth very speaks Russian well.", "Elizabeth speaks Russian very well."], correctAnswerIndex: 2 },
      { question: "Which is correct?", answers: ["My dog can jump quite high.", "My dog quite can jump high.", "My dog can jump high quite."], correctAnswerIndex: 0 },
      { question: "", answers: ["want", "like"], correctAnswerIndex: 0 },
      { question: "", answers: ["don't", "doesn't"], correctAnswerIndex: 0 },
        
          { question: "Would you ____ to go home?", answers: ["likes", "like"], correctAnswerIndex: 1 },
      { question: "He ____ want to climb that hill.", answers: ["don't", "doesn't"], correctAnswerIndex: 1 },
      { question: "I would ____ to be a judge.", answers: ["like", "want"], correctAnswerIndex: 0 },
      { question: "She would ____ to play tennis tonight.", answers: ["want", "wants"], correctAnswerIndex: 0 },
      { question: "I ____ to climb that tree.", answers: ["want", "wants"], correctAnswerIndex: 0 },
      { question: "____ you want to read this book?", answers: ["Does", "Do"], correctAnswerIndex: 1 },
      { question: "She'd ____ to buy a new phone.", answers: ["likes", "like"], correctAnswerIndex: 1 },
      { question: "", answers: ["biology", "chemistry", "physics", "geography"], correctAnswerIndex: 1, image: "img/quizImg/chemistry.jpg" },
      { question: "", answers: ["biology", "chemistry", "physics", "geography"], correctAnswerIndex: 3, image: "img/quizImg/geography.jpg" },
      { question: "", answers: ["drama", "music", "science", "history"], correctAnswerIndex: 0, image: "img/quizImg/drama.jpg" }
        
    ]
  },
];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize quiz
function initializeQuiz() {
  quizData.forEach(group => {
    shuffleArray(group.questions); // Shuffle questions inside each group
    group.questions.forEach(question => {
      question.answered = false; // Mark all questions as unanswered initially
    });
  });
  startQuiz();
}

// Start quiz
function startQuiz() {
  let currentGroupIndex = 0;
  let currentQuestionIndex = 0;

  displayQuestion();

  // Handle answer button clicks
  const answerButtonsContainer = document.getElementById("answer-buttons");
  answerButtonsContainer.addEventListener("click", handleAnswerButtonClick);

  // Display the countdown timer element
  const countdownElement = document.createElement("div");
  countdownElement.id = "countdown";
  countdownElement.classList.add("countdown"); // Add this line to apply the CSS class
  document.getElementById("quiz-container").appendChild(countdownElement);

  // Countdown timer variables
  let countdownTime = 30; // 60 seconds

  // Update countdown timer display
  function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = countdownTime;


     if (countdownTime === 0) {
    // Show "Well done" card
    const currentGroup = quizData[currentGroupIndex];
    showCard("", currentGroup.group);
    exitFullscreen();
    return;
  }

    countdownTime--; // Decrease the countdown time by 1 second

    // Call the updateCountdown function again after 1 second
    setTimeout(updateCountdown, 1000);
  }

  // Handle answer button click
  function handleAnswerButtonClick(event) {
    if (event.target.tagName === "BUTTON") {
      if (countdownTime === 30) {
        updateCountdown();
      }

      const selectedAnswerIndex = parseInt(event.target.dataset.answerIndex);
      const currentGroup = quizData[currentGroupIndex];
      const currentQuestion = currentGroup.questions[currentQuestionIndex];

      if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
        currentQuestion.answered = true; // Mark question as answered correctly

        // Remove the answered question from the group
        currentGroup.questions.splice(currentQuestionIndex, 1);

        currentGroupIndex++; // Move to the next group
        currentQuestionIndex = 0; // Reset the question index
      } else {
        currentQuestion.answered = false; // Mark question as answered incorrectly
        currentQuestionIndex--;
      }

      if (currentQuestionIndex < 0) {
        currentGroupIndex--;
        if (currentGroupIndex < 0) {
       // Show "Well done" card
showCard("", currentGroup.group);
            exitFullscreen();
          return;
        }
        currentQuestionIndex = quizData[currentGroupIndex].questions.length - 1;
      }

      if (currentQuestionIndex >= currentGroup.questions.length) {
        // Show "Well done" card
showCard("", currentGroup.group);
          exitFullscreen();
        return;
      }

      if (!quizData[currentGroupIndex]) {
        // Show "Well done" card
showCard("", currentGroup.group);
          exitFullscreen();
        return;
      }

      displayQuestion();
    }
  }

  // Display current question
  function displayQuestion() {
    const currentGroup = quizData[currentGroupIndex];
    const currentQuestion = currentGroup.questions[currentQuestionIndex];

    document.getElementById("question").textContent = currentQuestion.question;
      

    const answerButtonsContainer = document.getElementById("answer-buttons");
    answerButtonsContainer.innerHTML = ""; // Clear previous answer buttons
      
       if (currentQuestion.image) {
    const imageElement = document.createElement("img");
    imageElement.src = currentQuestion.image;
    imageElement.classList.add("question-image"); // Add a CSS class for styling
    imageElement.style = "width: 300px; border: 1px solid black; display: block; margin: 0 auto; border-radius: 10px";
    answerButtonsContainer.appendChild(imageElement);
  }
      
    for (let i = 0; i < currentQuestion.answers.length; i++) {
  const answerButton = document.createElement("button");
  answerButton.classList.add("answer-btn"); // Add the "answer-btn" class
  answerButton.textContent = currentQuestion.answers[i];
  answerButton.dataset.answerIndex = i;
  answerButtonsContainer.appendChild(answerButton);
        
      // Apply CSS styles on button hover
  answerButton.addEventListener("mouseover", function() {
    answerButton.style.backgroundColor = "#1A237E";
    answerButton.style.color = "#ffffff";
  });
        
        // Reset CSS styles when mouse is not hovering over the button
  answerButton.addEventListener("mouseout", function() {
    answerButton.style.backgroundColor = "";
    answerButton.style.color = "";
  });
        
}
  }
}

let isFullscreen = false; // Add this line to declare and initialize the isFullscreen variable

const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  const quizContainer = document.getElementById("quiz-container");
    

  if (!isFullscreen) {
    // Request full screen mode and add padding
    if (quizContainer.requestFullscreen) {
      quizContainer.requestFullscreen();
    } else if (quizContainer.mozRequestFullScreen) {
      quizContainer.mozRequestFullScreen(); // Firefox
    } else if (quizContainer.webkitRequestFullscreen) {
      quizContainer.webkitRequestFullscreen(); // Chrome, Safari, Opera
    } else if (quizContainer.msRequestFullscreen) {
      quizContainer.msRequestFullscreen(); // IE/Edge
    }
    quizContainer.style.padding = "200px"; // Add 200px padding when entering full screen
  } else {
    // Exit full screen mode and remove padding
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // Firefox
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Chrome, Safari, Opera
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // IE/Edge
    }
    quizContainer.style.padding = ""; // Remove the padding when exiting full screen
  }

  isFullscreen = !isFullscreen;
}

// Exit full-screen mode with a delay of 1 second
function exitFullscreen() {
  setTimeout(function() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // Firefox
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Chrome, Safari, Opera
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // IE/Edge
    }
  }, 700); // 1000 milliseconds = 1 second
}



// Display the card with the specified message
function showCard(message, group) {
    
   // Fade out the content
  const contentElements = document.querySelectorAll("body > *:not(#quiz-container)");
  contentElements.forEach(element => {
    element.style.transition = "opacity 1s";
    element.style.opacity = "0";
  });
    
  const showCardContainer = document.createElement("div");
  showCardContainer.style.position = "fixed";
  showCardContainer.style.top = "50%";
  showCardContainer.style.left = "50%";
  showCardContainer.style.transform = "translate(-50%, -50%)";
  showCardContainer.style.backgroundColor = "white";
  showCardContainer.style.padding = "20px";
  showCardContainer.style.border = "1px solid black";
  showCardContainer.style.borderRadius = "10px"; // Rounded corners
  showCardContainer.style.zIndex = "9999";
  showCardContainer.style.opacity = "0"; // Initially hide the box
  showCardContainer.style.transition = "opacity 1s"; // Apply fade-in effect

   // Set the width and height variables based on the media query
  const mediaQuery = window.matchMedia("(max-width: 700px)");
  let width;
  let height;

  if (mediaQuery.matches) {
    // For smaller screens (max-width: 700px)
    width = "300px";
    height = "500px";
    showCardContainer.style.minWidth = "200px"; // Set the minimum width
    showCardContainer.style.maxWidth = "500px"; // Set the maximum width
  } else {
    // For larger screens
    width = "600px";
    height = "450px";
    showCardContainer.style.minWidth = "400px"; // Set the minimum width
    showCardContainer.style.maxWidth = "600px"; // Set the maximum width
  } 
    
    

  const writing = document.createElement("div");
  writing.innerHTML = `Your grammar level is: <br><br> <span style="font-size: 24px; color: darkred">${group}</span> `;
  writing.style.marginTop = "10px";
     writing.style.textAlign = "center";
  
    
    


  const refreshBox = document.createElement("div"); // Create the refreshBox element
  refreshBox.appendChild(writing); // Append the writing element to the refreshBox
    
  // Create the anchor element
const quizLink = document.createElement("a");
quizLink.href = "./quiz.html";
quizLink.style.position = "fixed";
quizLink.style.top = "20px"; // Adjust the distance from the top
quizLink.style.left = "50%"; // Place it at the horizontal center
quizLink.style.transform = "translateX(-50%)"; // Center the element horizontally

// Create the icon element
const quizIcon = document.createElement("i");
quizIcon.className = "fa fa-book";
quizIcon.style.fontSize = "20px";
quizIcon.textContent = " To All Books";

 
    refreshBox.appendChild(quizLink);
    
  // Append the refreshBox to the showCardContainer
  showCardContainer.appendChild(refreshBox);
  
  
 

  // Append the showCard container to the body
  document.body.appendChild(showCardContainer);

  // Show the card with a fade-in effect
  setTimeout(() => {
    showCardContainer.style.opacity = "1";
  }, 1000); // Delay of 1 second (1000 milliseconds)
}

// Initialize quiz when the page loads
window.addEventListener("DOMContentLoaded", initializeQuiz);