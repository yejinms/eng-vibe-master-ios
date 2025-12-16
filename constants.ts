
import { CharacterProfile } from './types';

export const CHARACTERS: Record<string, CharacterProfile> = {
  zoey: {
    id: 'zoey',
    name: 'Zoey',
    role: 'Bestie',
    desc: '수다 떨고 고민 나누는 영혼의 단짝',
    descEn: 'Your soulmate bestie for chatting and sharing worries',
    descEs: 'Tu mejor amiga del alma para charlar y compartir preocupaciones',
    avatarSeed: 'Zoey',
    colorTheme: 'bg-orange-100',
    tagColor: 'bg-yellow-200 text-orange-700',
    levels: {
      beginner: [
        {
          id: 1,
          title: "주말 약속",
          titleEn: "Weekend Plans",
          titleEs: "Planes de Fin de Semana",
          description: "Zoey와 가벼운 주말 약속을 잡습니다.",
          descriptionEn: "Making casual weekend plans with Zoey.",
          descriptionEs: "Haciendo planes casuales para el fin de semana con Zoey.",
          rounds: [
            {
              id: 'b-r1',
              context: "Zoey: 안녕 {user}! 이번 주말에 시간 있어?",
              contextEn: "Zoey: Hey {user}! Do you have time this weekend?",
              contextEs: "Zoey: ¡Hola {user}! ¿Tienes tiempo este fin de semana?",
              intent: "응, 나 이번 주말에 '완전 한가해'라고 하려면?",
              intentEn: "Yes, how do I say I'm 'completely free' this weekend?",
              intentEs: "Sí, ¿cómo digo que estoy 'completamente libre' este fin de semana?",
              options: [
                { 
                  text: "I'm free as a bird.", 
                  correct: true, 
                  explain: "새처럼 자유롭다, 즉 매우 한가하다는 뜻이야.",
                  explainEn: "Free as a bird means you're very free and available.",
                  explainEs: "Libre como un pájaro significa que estás muy libre y disponible."
                },
                { 
                  text: "I have no time now.", 
                  correct: false, 
                  explain: "시간이 없다는 정반대의 뜻이야.",
                  explainEn: "This means the opposite - you have no time.",
                  explainEs: "Esto significa lo contrario: no tienes tiempo."
                },
                { 
                  text: "I am very lonely.", 
                  correct: false, 
                  explain: "외롭다는 뜻이라 조금 어색해.",
                  explainEn: "This means you're lonely, which is a bit awkward.",
                  explainEs: "Esto significa que estás solo, lo cual es un poco incómodo."
                }
              ]
            },
            {
              id: 'b-r2',
              context: "Zoey: 잘됐다! 우리 같이 점심 먹을래?",
              contextEn: "Zoey: Great! Do you want to have lunch together?",
              contextEs: "Zoey: ¡Genial! ¿Quieres almorzar juntos?",
              intent: "좋아! '내가 쏠게'라고 말하려면?",
              intentEn: "Great! How do I say 'it's on me'?",
              intentEs: "¡Genial! ¿Cómo digo 'yo invito'?",
              options: [
                { 
                  text: "Lunch is on me.", 
                  correct: true, 
                  explain: "'It's on me'는 내가 계산하겠다는 뜻이야.",
                  explainEn: "'It's on me' means I'll pay for it.",
                  explainEs: "'It's on me' significa que yo pago."
                },
                { 
                  text: "I will buy you.", 
                  correct: false, 
                  explain: "너를 사겠다는 무서운 말이야!",
                  explainEn: "This sounds like I'm buying you, which is scary!",
                  explainEs: "¡Esto suena como si te estuviera comprando, lo cual es aterrador!"
                },
                { 
                  text: "Give me lunch.", 
                  correct: false, 
                  explain: "점심을 달라는 뜻이야.",
                  explainEn: "This means 'give me lunch'.",
                  explainEs: "Esto significa 'dame el almuerzo'."
                }
              ]
            },
            {
              id: 'b-r3',
              context: "Zoey: 진짜? 고마워! 너 피자 좋아해?",
              contextEn: "Zoey: Really? Thanks! Do you like pizza?",
              contextEs: "Zoey: ¿De verdad? ¡Gracias! ¿Te gusta la pizza?",
              intent: "피자라면 '환장하지(엄청 좋아해)'라고 하려면?",
              intentEn: "If it's pizza, how do I say I'm 'crazy about it'?",
              intentEs: "Si es pizza, ¿cómo digo que estoy 'loco por ella'?",
              options: [
                { 
                  text: "I'm crazy about it.", 
                  correct: true, 
                  explain: "'Crazy about'은 무엇을 매우 좋아한다는 뜻.",
                  explainEn: "'Crazy about' means you really like something.",
                  explainEs: "'Crazy about' significa que realmente te gusta algo."
                },
                { 
                  text: "I like pizza ok.", 
                  correct: false, 
                  explain: "그저 그렇다는 뉘앙스야.",
                  explainEn: "This has a 'just okay' nuance.",
                  explainEs: "Esto tiene un matiz de 'solo está bien'."
                },
                { 
                  text: "It is my enemy.", 
                  correct: false, 
                  explain: "피자가 적이라고?",
                  explainEn: "Pizza is my enemy?",
                  explainEs: "¿La pizza es mi enemiga?"
                }
              ]
            },
            {
              id: 'b-r4',
              context: "Zoey: 오케이. 그럼 1시에 만나자. 늦지 마!",
              contextEn: "Zoey: Okay. Let's meet at 1. Don't be late!",
              contextEs: "Zoey: Está bien. ¡Encontrémonos a la 1! ¡No llegues tarde!",
              intent: "걱정 마. '제시간에 갈게'라고 하려면?",
              intentEn: "Don't worry. How do I say I'll be there 'on time'?",
              intentEs: "No te preocupes. ¿Cómo digo que llegaré 'a tiempo'?",
              options: [
                { 
                  text: "I'll be there on time.", 
                  correct: true, 
                  explain: "'On time'은 정각에, 제시간에라는 뜻.",
                  explainEn: "'On time' means exactly on time, punctually.",
                  explainEs: "'On time' significa exactamente a tiempo, puntualmente."
                },
                { 
                  text: "I will go later.", 
                  correct: false, 
                  explain: "나중에 가겠다는 뜻.",
                  explainEn: "This means you'll go later.",
                  explainEs: "Esto significa que irás más tarde."
                },
                { 
                  text: "I am very late.", 
                  correct: false, 
                  explain: "이미 늦었다고?",
                  explainEn: "I'm already late?",
                  explainEs: "¿Ya estoy tarde?"
                }
              ]
            },
            {
              id: 'b-r5',
              context: "Zoey: 좋아. {user}, 이따 봐!",
              contextEn: "Zoey: Good. See you later, {user}!",
              contextEs: "Zoey: Bien. ¡Nos vemos luego, {user}!",
              intent: "그래. '이따 봐'라고 인사하려면?",
              intentEn: "Okay. How do I say 'see you later'?",
              intentEs: "Está bien. ¿Cómo digo 'nos vemos luego'?",
              options: [
                { 
                  text: "Catch you later!", 
                  correct: true, 
                  explain: "'Catch you later'는 나중에 보자는 가벼운 인사.",
                  explainEn: "'Catch you later' is a casual way to say see you later.",
                  explainEs: "'Catch you later' es una forma casual de decir nos vemos luego."
                },
                { 
                  text: "Look at you now.", 
                  correct: false, 
                  explain: "지금 널 본다는 뜻.",
                  explainEn: "This means 'look at you now'.",
                  explainEs: "Esto significa 'mírate ahora'."
                },
                { 
                  text: "You catch me.", 
                  correct: false, 
                  explain: "네가 날 잡아?",
                  explainEn: "You catch me?",
                  explainEs: "¿Tú me atrapas?"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "쇼핑 가자",
          titleEn: "Let's Go Shopping",
          titleEs: "Vamos de Compras",
          description: "Zoey와 함께 옷을 사러 쇼핑몰에 갔습니다.",
          descriptionEn: "Went to the mall with Zoey to buy clothes.",
          descriptionEs: "Fuimos al centro comercial con Zoey para comprar ropa.",
          rounds: [
            {
               id: 'b-ch2-r1',
               context: "Zoey: 와, 이 원피스 어때? 나한테 어울릴 것 같아?",
               contextEn: "Zoey: Wow, how about this dress? Do you think it suits me?",
               contextEs: "Zoey: ¡Guau, ¿qué te parece este vestido? ¿Crees que me queda bien?",
               intent: "응, 너한테 '딱이야(완벽해)'라고 칭찬하려면?",
               intentEn: "Yes, how do I compliment saying 'it's perfect for you'?",
               intentEs: "Sí, ¿cómo hago un cumplido diciendo 'es perfecto para ti'?",
               options: [
                 { 
                   text: "It fits you perfectly.", 
                   correct: true, 
                   explain: "옷 사이즈나 어울림이 완벽하다는 뜻이야.",
                   explainEn: "It means the fit or style is perfect for you.",
                   explainEs: "Significa que el ajuste o el estilo es perfecto para ti."
                 },
                 { 
                   text: "It is your body.", 
                   correct: false, 
                   explain: "그건 네 몸이야?",
                   explainEn: "That's your body?",
                   explainEs: "¿Ese es tu cuerpo?"
                 },
                 { 
                   text: "You look strange.", 
                   correct: false, 
                   explain: "이상해 보인다니, 절대 안 돼!",
                   explainEn: "You look strange - absolutely not!",
                   explainEs: "¡Te ves extraño, absolutamente no!"
                 }
               ]
            },
            {
               id: 'b-ch2-r2',
               context: "Zoey: 고마워! 근데 가격이 좀 비싸네. 할인하는지 물어볼까?",
               contextEn: "Zoey: Thanks! But it's a bit pricey. Should I ask if it's on sale?",
               contextEs: "Zoey: ¡Gracias! Pero es un poco caro. ¿Debería preguntar si está en oferta?",
               intent: "좋은 생각이야. '밑져야 본전이지'라고 하려면?",
               intentEn: "Good idea. How do I say 'nothing to lose'?",
               intentEs: "Buena idea. ¿Cómo digo 'nada que perder'?",
               options: [
                 { 
                   text: "It doesn't hurt to ask.", 
                   correct: true, 
                   explain: "물어본다고 다칠 건 없다, 즉 손해 볼 것 없다는 뜻.",
                   explainEn: "It means there's nothing to lose by asking.",
                   explainEs: "Significa que no hay nada que perder al preguntar."
                 },
                 { 
                   text: "Asking is hurting.", 
                   correct: false, 
                   explain: "물어보면 아프다고?",
                   explainEn: "Asking hurts?",
                   explainEs: "¿Preguntar duele?"
                 },
                 { 
                   text: "No money no honey.", 
                   correct: false, 
                   explain: "돈 없으면 사랑도 없다?",
                   explainEn: "No money, no love?",
                   explainEs: "¿Sin dinero, sin amor?"
                 }
               ]
            },
            {
               id: 'b-ch2-r3',
               context: "Zoey: (점원에게 다녀온 후) 대박! 20% 할인한대. 바로 사야겠어.",
               contextEn: "Zoey: (After asking) Awesome! It's 20% off. I should buy it right away.",
               contextEs: "Zoey: (Después de preguntar) ¡Increíble! Tiene 20% de descuento. Debería comprarlo de inmediato.",
               intent: "그래, 그건 '거저나 다름없어(완전 득템이야)'.",
               intentEn: "Yeah, that's 'practically free (such a steal)'.",
               intentEs: "Sí, eso es 'prácticamente gratis (qué ganga)'.",
               options: [
                 { 
                   text: "It's a steal.", 
                   correct: true, 
                   explain: "훔치는 것과 다름없을 정도로 싸다는 뜻.",
                   explainEn: "It means it's so cheap it's like stealing.",
                   explainEs: "Significa que es tan barato que es como robar."
                 },
                 { 
                   text: "It is stealing.", 
                   correct: false, 
                   explain: "범죄를 저지르고 있다는 뜻이야.",
                   explainEn: "This means committing a crime.",
                   explainEs: "Esto significa cometer un delito."
                 },
                 { 
                   text: "It is very cheapy.", 
                   correct: false, 
                   explain: "Cheapy는 싸구려 같다는 부정적 뉘앙스.",
                   explainEn: "'Cheapy' has a negative nuance of being low quality.",
                   explainEs: "'Cheapy' tiene una connotación negativa de ser de baja calidad."
                 }
               ]
            },
            {
               id: 'b-ch2-r4',
               context: "Zoey: 쇼핑하니까 배고프다. 우리 간식 좀 먹을까?",
               contextEn: "Zoey: Shopping makes me hungry. Shall we grab a snack?",
               contextEs: "Zoey: Ir de compras me da hambre. ¿Tomamos un bocadillo?",
               intent: "나도 배고파. '당 떨어졌어'라고 하려면?",
               intentEn: "I'm hungry too. How do I say 'I'm running low on sugar'?",
               intentEs: "También tengo hambre. ¿Cómo digo 'me falta azúcar'?",
               options: [
                 { 
                   text: "I'm running low on sugar.", 
                   correct: true, 
                   explain: "당이 부족하다는 재미있는 표현.",
                   explainEn: "A fun way to say you need sugar/energy.",
                   explainEs: "Una forma divertida de decir que necesitas azúcar/energía."
                 },
                 { 
                   text: "Sugar is falling.", 
                   correct: false, 
                   explain: "설탕이 바닥에 떨어지고 있다?",
                   explainEn: "Sugar is falling on the floor?",
                   explainEs: "¿El azúcar se está cayendo al suelo?"
                 },
                 { 
                   text: "I hate snacks.", 
                   correct: false, 
                   explain: "간식 싫다는 말은 안 했잖아.",
                   explainEn: "You didn't say you hate snacks.",
                   explainEs: "No dijiste que odias los bocadillos."
                 }
               ]
            },
            {
               id: 'b-ch2-r5',
               context: "Zoey: 저기 도넛 가게 가자. 내가 살게!",
               contextEn: "Zoey: Let's go to that donut shop. My treat!",
               contextEs: "Zoey: ¡Vamos a esa tienda de donas! ¡Yo invito!",
               intent: "야호! 넌 정말 '최고야'.",
               intentEn: "Yay! You're really 'the best'.",
               intentEs: "¡Sí! Eres realmente 'la mejor'.",
               options: [
                 { 
                   text: "You're the best!", 
                   correct: true, 
                   explain: "가장 일반적이고 기분 좋은 칭찬.",
                   explainEn: "The most common and pleasant compliment.",
                   explainEs: "El cumplido más común y agradable."
                 },
                 { 
                   text: "You are number one.", 
                   correct: false, 
                   explain: "틀리진 않지만 조금 유치해.",
                   explainEn: "Not wrong but a bit childish.",
                   explainEs: "No está mal pero un poco infantil."
                 },
                 { 
                   text: "You act good.", 
                   correct: false, 
                   explain: "연기를 잘한다는 뜻?",
                   explainEn: "You act well?",
                   explainEs: "¿Actúas bien?"
                 }
               ]
            }
          ]
        },
        {
          id: 3,
          title: "여행 계획",
          titleEn: "Travel Plans",
          titleEs: "Planes de Viaje",
          description: "Zoey와 여름 휴가 계획을 세웁니다.",
          descriptionEn: "Making summer vacation plans with Zoey.",
          descriptionEs: "Haciendo planes de vacaciones de verano con Zoey.",
          rounds: [
            {
               id: 'b-ch3-r1',
               context: "Zoey: {user}, 이번 여름에 어디 가고 싶은 데 있어?",
               contextEn: "Zoey: {user}, is there anywhere you want to go this summer?",
               contextEs: "Zoey: {user}, ¿hay algún lugar al que quieras ir este verano?",
               intent: "난 바다라면 '사족을 못 써(정말 좋아해)'.",
               intentEn: "If it's the beach, I'm 'a sucker for it (I really love it)'.",
               intentEs: "Si es la playa, soy 'un fanático de ella (realmente la amo)'.",
               options: [
                 { 
                   text: "I'm a sucker for the beach.", 
                   correct: true, 
                   explain: "'Sucker for ~'는 ~를 너무 좋아해서 거절 못한다는 뜻.",
                   explainEn: "'Sucker for ~' means you love something so much you can't resist it.",
                   explainEs: "'Sucker for ~' significa que amas algo tanto que no puedes resistirlo."
                 },
                 { 
                   text: "I hate water.", 
                   correct: false, 
                   explain: "바다 가자는데 물이 싫다고?",
                   explainEn: "We're going to the beach and you hate water?",
                   explainEs: "¿Vamos a la playa y odias el agua?"
                 },
                 { 
                   text: "Beach is sand.", 
                   correct: false, 
                   explain: "바다는 모래다. 너무 사실적이야.",
                   explainEn: "The beach is sand. Too literal.",
                   explainEs: "La playa es arena. Demasiado literal."
                 }
               ]
            },
            {
               id: 'b-ch3-r2',
               context: "Zoey: 오, 제주도 어때? 비행기 표 알아볼까?",
               contextEn: "Zoey: Oh, how about Jeju Island? Should I check flight tickets?",
               contextEs: "Zoey: Oh, ¿qué te parece la isla de Jeju? ¿Debería revisar los boletos de avión?",
               intent: "좋아. 내가 숙소를 '알아볼게'.",
               intentEn: "Good. I'll 'look into' hotels.",
               intentEs: "Bien. 'Investigaré' los hoteles.",
               options: [
                 { 
                   text: "I'll look into hotels.", 
                   correct: true, 
                   explain: "'Look into'는 조사하다, 알아보다라는 뜻.",
                   explainEn: "'Look into' means to investigate or check out.",
                   explainEs: "'Look into' significa investigar o revisar."
                 },
                 { 
                   text: "I see hotels.", 
                   correct: false, 
                   explain: "호텔을 그냥 쳐다본다는 뜻.",
                   explainEn: "This just means looking at hotels.",
                   explainEs: "Esto solo significa mirar hoteles."
                 },
                 { 
                   text: "Hotel is sleeping.", 
                   correct: false, 
                   explain: "호텔은 자는 중?",
                   explainEn: "The hotel is sleeping?",
                   explainEs: "¿El hotel está durmiendo?"
                 }
               ]
            },
            {
               id: 'b-ch3-r3',
               context: "Zoey: 근데 성수기라 비싸지 않을까?",
               contextEn: "Zoey: But won't it be expensive since it's peak season?",
               contextEs: "Zoey: Pero ¿no será caro ya que es temporada alta?",
               intent: "걱정 마. 우리 돈을 '나눠서 내면(더치페이하면)' 돼.",
               intentEn: "Don't worry. We can 'split the bill (go Dutch)'.",
               intentEs: "No te preocupes. Podemos 'dividir la cuenta (ir a medias)'.",
               options: [
                 { 
                   text: "We can split the bill.", 
                   correct: true, 
                   explain: "비용을 나누자는 가장 자연스러운 표현.",
                   explainEn: "The most natural way to say we'll share the cost.",
                   explainEs: "La forma más natural de decir que compartiremos el costo."
                 },
                 { 
                   text: "Cut the money.", 
                   correct: false, 
                   explain: "돈을 가위로 자르면 안 돼!",
                   explainEn: "Don't cut money with scissors!",
                   explainEs: "¡No cortes el dinero con tijeras!"
                 },
                 { 
                   text: "Dutch pay is good.", 
                   correct: false, 
                   explain: "콩글리시야! 'Go Dutch'나 'Split'을 써.",
                   explainEn: "Konglish! Use 'Go Dutch' or 'Split'.",
                   explainEs: "¡Konglish! Usa 'Go Dutch' o 'Split'."
                 }
               ]
            },
            {
               id: 'b-ch3-r4',
               context: "Zoey: 그래! 벌써부터 설렌다. 빨리 가고 싶어.",
               contextEn: "Zoey: Yeah! I'm already excited. I want to go soon.",
               contextEs: "Zoey: ¡Sí! Ya estoy emocionada. Quiero ir pronto.",
               intent: "나도. 정말 '기대된다'.",
               intentEn: "Me too. I really 'can't wait'.",
               intentEs: "Yo también. Realmente 'no puedo esperar'.",
               options: [
                 { 
                   text: "I can't wait.", 
                   correct: true, 
                   explain: "기다릴 수 없을 정도로 기대된다는 뜻.",
                   explainEn: "It means you're so excited you can't wait.",
                   explainEs: "Significa que estás tan emocionado que no puedes esperar."
                 },
                 { 
                   text: "I wait very well.", 
                   correct: false, 
                   explain: "나는 기다리기 장인이다?",
                   explainEn: "I'm a master at waiting?",
                   explainEs: "¿Soy un maestro en esperar?"
                 },
                 { 
                   text: "It is exciting day.", 
                   correct: false, 
                   explain: "문법이 조금 어색해.",
                   explainEn: "The grammar is a bit awkward.",
                   explainEs: "La gramática es un poco incómoda."
                 }
               ]
            },
            {
               id: 'b-ch3-r5',
               context: "Zoey: 짐 싸는 거 잊지 말고! 다음 주에 보자.",
               contextEn: "Zoey: Don't forget to pack! See you next week.",
               contextEs: "Zoey: ¡No olvides hacer las maletas! Nos vemos la próxima semana.",
               intent: "응, '계속 연락하자'.",
               intentEn: "Okay, 'let's keep in touch'.",
               intentEs: "Está bien, 'mantengámonos en contacto'.",
               options: [
                 { 
                   text: "Keep in touch.", 
                   correct: true, 
                   explain: "연락을 유지하자는 인사말.",
                   explainEn: "A farewell phrase meaning to stay in contact.",
                   explainEs: "Una frase de despedida que significa mantenerse en contacto."
                 },
                 { 
                   text: "Touch me.", 
                   correct: false, 
                   explain: "나를 만지라고? 큰일 날 소리!",
                   explainEn: "Touch me? That's inappropriate!",
                   explainEs: "¿Tocarme? ¡Eso es inapropiado!"
                 },
                 { 
                   text: "Call my phone.", 
                   correct: false, 
                   explain: "너무 명령조야.",
                   explainEn: "Too commanding.",
                   explainEs: "Demasiado imperativo."
                 }
               ]
            }
          ]
        },
        {
          id: 4,
          title: "카페 수다",
          titleEn: "Cafe Chat",
          titleEs: "Charla en el Café",
          description: "단골 카페에서 Zoey와 수다를 떱니다.",
          descriptionEn: "Having a chat with Zoey at our regular cafe.",
          descriptionEs: "Chateando con Zoey en nuestro café habitual.",
          rounds: [
             {
               id: 'b-ch4-r1',
               context: "Zoey: 여기 커피 진짜 맛있지 않아? 향이 너무 좋아.",
               contextEn: "Zoey: Isn't the coffee here really good? The aroma is amazing.",
               contextEs: "Zoey: ¿No está realmente bueno el café aquí? El aroma es increíble.",
               intent: "응, 여기 커피는 '타의 추종을 불허해(최고야)'.",
               intentEn: "Yes, the coffee here is 'second to none (the best)'.",
               intentEs: "Sí, el café aquí es 'incomparable (el mejor)'.",
               options: [
                 { 
                   text: "It's second to none.", 
                   correct: true, 
                   explain: "아무에게도 뒤지지 않는, 즉 최고라는 뜻.",
                   explainEn: "It means it's the best, no one can match it.",
                   explainEs: "Significa que es el mejor, nadie puede igualarlo."
                 },
                 { 
                   text: "It is number two.", 
                   correct: false, 
                   explain: "2등이라는 뜻이야.",
                   explainEn: "This means it's second place.",
                   explainEs: "Esto significa que es el segundo lugar."
                 },
                 { 
                   text: "Coffee smells nose.", 
                   correct: false, 
                   explain: "커피 냄새가 코다?",
                   explainEn: "Coffee smells like a nose?",
                   explainEs: "¿El café huele a nariz?"
                 }
               ]
             },
             {
               id: 'b-ch4-r2',
               context: "Zoey: 그나저나 너 요즘 운동 시작했다며? 어때?",
               contextEn: "Zoey: By the way, I heard you started working out. How is it?",
               contextEs: "Zoey: Por cierto, escuché que empezaste a hacer ejercicio. ¿Cómo va?",
               intent: "죽겠어. 온몸이 '욱신거려(알 배겼어)'.",
               intentEn: "I'm dying. My whole body is 'sore (muscle pain)'.",
               intentEs: "Me muero. Todo mi cuerpo está 'adolorido (dolor muscular)'.",
               options: [
                 { 
                   text: "I'm sore all over.", 
                   correct: true, 
                   explain: "운동 후 근육통이 있을 때 'sore'를 써.",
                   explainEn: "Use 'sore' when you have muscle pain after exercise.",
                   explainEs: "Usa 'sore' cuando tienes dolor muscular después del ejercicio."
                 },
                 { 
                   text: "I am sick body.", 
                   correct: false, 
                   explain: "몸이 아프다는 건 질병 같아.",
                   explainEn: "This sounds like you're sick with a disease.",
                   explainEs: "Esto suena como si estuvieras enfermo con una enfermedad."
                 },
                 { 
                   text: "My muscle cries.", 
                   correct: false, 
                   explain: "근육이 운다니 시적이지만 어색해.",
                   explainEn: "Poetic but awkward - my muscles are crying?",
                   explainEs: "Poético pero incómodo - ¿mis músculos están llorando?"
                 }
               ]
             },
             {
               id: 'b-ch4-r3',
               context: "Zoey: 처음엔 다 그래. 작심삼일 되지 않게 조심해!",
               contextEn: "Zoey: It's always like that at first. Careful not to quit after 3 days!",
               contextEs: "Zoey: Siempre es así al principio. ¡Ten cuidado de no rendirte después de 3 días!",
               intent: "이번엔 달라. '끝까지 해낼 거야'.",
               intentEn: "This time is different. I'll 'stick with it to the end'.",
               intentEs: "Esta vez es diferente. 'Seguiré hasta el final'.",
               options: [
                 { 
                   text: "I'll stick with it.", 
                   correct: true, 
                   explain: "'Stick with'는 포기하지 않고 계속한다는 뜻.",
                   explainEn: "'Stick with' means to continue without giving up.",
                   explainEs: "'Stick with' significa continuar sin rendirse."
                 },
                 { 
                   text: "I will do end.", 
                   correct: false, 
                   explain: "끝을 보겠다는 건가?",
                   explainEn: "I'll see the end?",
                   explainEs: "¿Veré el final?"
                 },
                 { 
                   text: "Stop is no.", 
                   correct: false, 
                   explain: "멈춤은 없다? 콩글리시 느낌.",
                   explainEn: "No stopping? Konglish feeling.",
                   explainEs: "¿Sin parar? Sensación de Konglish."
                 }
               ]
             },
             {
               id: 'b-ch4-r4',
               context: "Zoey: 오~ 의지가 대단한데? 응원할게.",
               contextEn: "Zoey: Oh~ great determination. I'm rooting for you.",
               contextEs: "Zoey: Oh~ gran determinación. Te apoyo.",
               intent: "고마워. 너도 같이 '해볼래'?",
               intentEn: "Thanks. Do you want to 'give it a go' too?",
               intentEs: "Gracias. ¿También quieres 'intentarlo'?",
               options: [
                 { 
                   text: "Do you want to give it a go?", 
                   correct: true, 
                   explain: "'Give it a go'는 한번 시도해본다는 뜻.",
                   explainEn: "'Give it a go' means to try it once.",
                   explainEs: "'Give it a go' significa intentarlo una vez."
                 },
                 { 
                   text: "You do it too.", 
                   correct: false, 
                   explain: "너무 명령조야.",
                   explainEn: "Too commanding.",
                   explainEs: "Demasiado imperativo."
                 },
                 { 
                   text: "Let's play gym.", 
                   correct: false, 
                   explain: "체육관 놀이 하자고?",
                   explainEn: "Let's play gym?",
                   explainEs: "¿Juguemos al gimnasio?"
                 }
               ]
             },
             {
               id: 'b-ch4-r5',
               context: "Zoey: 난 숨쉬기 운동만 할래... 늦었다, 이제 일어나자.",
               contextEn: "Zoey: I'll stick to breathing exercises... It's late, let's get going.",
               contextEs: "Zoey: Me quedaré con ejercicios de respiración... Es tarde, vamos.",
               intent: "그래. 오늘은 내가 '데려다 줄게'.",
               intentEn: "Okay. Today I'll 'walk you home'.",
               intentEs: "Está bien. Hoy te 'acompañaré a casa'.",
               options: [
                 { 
                   text: "I'll walk you home.", 
                   correct: true, 
                   explain: "집까지 걸어서 바려다 준다는 다정한 표현.",
                   explainEn: "A warm expression meaning to walk someone home.",
                   explainEs: "Una expresión cálida que significa acompañar a alguien a casa caminando."
                 },
                 { 
                   text: "Go home yourself.", 
                   correct: false, 
                   explain: "너 혼자 가라는 뜻.",
                   explainEn: "This means go home by yourself.",
                   explainEs: "Esto significa ve a casa solo."
                 },
                 { 
                   text: "I send you house.", 
                   correct: false, 
                   explain: "너를 집으로 택배 부치듯 보낸다?",
                   explainEn: "I'll send you to your house like a package?",
                   explainEs: "¿Te enviaré a tu casa como un paquete?"
                 }
               ]
             }
          ]
        },
        {
          id: 5,
          title: "생일 파티 준비",
          titleEn: "Birthday Party Prep",
          titleEs: "Preparación de Fiesta de Cumpleaños",
          description: "친구의 생일 파티를 Zoey와 함께 준비합니다.",
          descriptionEn: "Preparing a friend's birthday party with Zoey.",
          descriptionEs: "Preparando la fiesta de cumpleaños de una amiga con Zoey.",
          rounds: [
             {
               id: 'b-ch5-r1',
               context: "Zoey: 다음 주가 민지 생일인 거 알지? 깜짝 파티 해줄까?",
               contextEn: "Zoey: You know it's Minji's birthday next week, right? Shall we throw a surprise party?",
               contextEs: "Zoey: Sabes que es el cumpleaños de Minji la próxima semana, ¿verdad? ¿Hacemos una fiesta sorpresa?",
               intent: "물론이지! 걔가 깜짝 '놀랄 거야'.",
               intentEn: "Of course! She'll be 'blown away' by surprise.",
               intentEs: "¡Por supuesto! Estará 'sorprendida' por la sorpresa.",
               options: [
                 { 
                   text: "She'll be blown away.", 
                   correct: true, 
                   explain: "'Blown away'는 감동받거나 아주 놀랄 때 써.",
                   explainEn: "'Blown away' is used when someone is very impressed or surprised.",
                   explainEs: "'Blown away' se usa cuando alguien está muy impresionado o sorprendido."
                 },
                 { 
                   text: "She will surprise.", 
                   correct: false, 
                   explain: "그녀가 남을 놀래킨다는 뜻.",
                   explainEn: "This means she will surprise others.",
                   explainEs: "Esto significa que ella sorprenderá a otros."
                 },
                 { 
                   text: "She scares.", 
                   correct: false, 
                   explain: "무서워할 거라고?",
                   explainEn: "She'll be scared?",
                   explainEs: "¿Tendrá miedo?"
                 }
               ]
             },
             {
               id: 'b-ch5-r2',
               context: "Zoey: 선물은 뭐가 좋을까? 요즘 향수 좋아하던데.",
               contextEn: "Zoey: What should we get her? She likes perfume these days.",
               contextEs: "Zoey: ¿Qué deberíamos comprarle? Le gusta el perfume últimamente.",
               intent: "향수는 취향 타니까, 상품권으로 '안전하게 가자'.",
               intentEn: "Perfume is a matter of taste, so let's 'play it safe' with a gift card.",
               intentEs: "El perfume es cuestión de gusto, así que 'juguemos a lo seguro' con una tarjeta de regalo.",
               options: [
                 { 
                   text: "Let's play it safe with a gift card.", 
                   correct: true, 
                   explain: "'Play it safe'는 모험하지 않고 안전한 선택을 하다는 뜻.",
                   explainEn: "'Play it safe' means to make a safe choice without taking risks.",
                   explainEs: "'Play it safe' significa hacer una elección segura sin tomar riesgos."
                 },
                 { 
                   text: "Safe is good.", 
                   correct: false, 
                   explain: "금고가 좋다는 뜻?",
                   explainEn: "A safe (vault) is good?",
                   explainEs: "¿Una caja fuerte es buena?"
                 },
                 { 
                   text: "Money paper is nice.", 
                   correct: false, 
                   explain: "돈 종이? 너무 직설적이야.",
                   explainEn: "Money paper? Too direct.",
                   explainEs: "¿Papel de dinero? Demasiado directo."
                 }
               ]
             },
             {
               id: 'b-ch5-r3',
               context: "Zoey: 하긴, 그게 낫겠다. 케이크는 내가 주문할게.",
               contextEn: "Zoey: True, that's better. I'll order the cake.",
               contextEs: "Zoey: Cierto, eso es mejor. Yo pediré el pastel.",
               intent: "부탁해. 초콜릿 케이크로 '확실하게 해줘'.",
               intentEn: "Please. 'Make sure' it's chocolate cake.",
               intentEs: "Por favor. 'Asegúrate' de que sea pastel de chocolate.",
               options: [
                 { 
                   text: "Make sure it's chocolate.", 
                   correct: true, 
                   explain: "'Make sure'는 확인하다, 확실히 하다는 뜻.",
                   explainEn: "'Make sure' means to confirm or ensure something.",
                   explainEs: "'Make sure' significa confirmar o asegurar algo."
                 },
                 { 
                   text: "Chocolate is must.", 
                   correct: false, 
                   explain: "초콜릿은 필수다.",
                   explainEn: "Chocolate is a must.",
                   explainEs: "El chocolate es imprescindible."
                 },
                 { 
                   text: "Do chocolate.", 
                   correct: false, 
                   explain: "초콜릿을 해라?",
                   explainEn: "Do chocolate?",
                   explainEs: "¿Hacer chocolate?"
                 }
               ]
             },
             {
               id: 'b-ch5-r4',
               context: "Zoey: 알겠어. 풍선도 좀 살까? 파티 분위기 나게.",
               contextEn: "Zoey: Got it. Should we buy balloons too? To set the mood.",
               contextEs: "Zoey: Entendido. ¿También compramos globos? Para crear ambiente.",
               intent: "좋아. 기왕 하는 거 '화려하게 가보자'.",
               intentEn: "Good. Since we're doing it, let's 'go all out'.",
               intentEs: "Bien. Ya que lo estamos haciendo, 'vamos a por todas'.",
               options: [
                 { 
                   text: "Let's go all out.", 
                   correct: true, 
                   explain: "'Go all out'은 전력을 다하다, 화려하게 하다는 뜻.",
                   explainEn: "'Go all out' means to do something with full effort, make it spectacular.",
                   explainEs: "'Go all out' significa hacer algo con todo el esfuerzo, hacerlo espectacular."
                 },
                 { 
                   text: "Go outside.", 
                   correct: false, 
                   explain: "밖으로 나가자?",
                   explainEn: "Go outside?",
                   explainEs: "¿Salir afuera?"
                 },
                 { 
                   text: "Make it shine.", 
                   correct: false, 
                   explain: "반짝이게 만들자?",
                   explainEn: "Make it shine?",
                   explainEs: "¿Hacerlo brillar?"
                 }
               ]
             },
             {
               id: 'b-ch5-r5',
               context: "Zoey: 완벽해! 민지가 진짜 좋아하겠다. 준비하느라 수고했어.",
               contextEn: "Zoey: Perfect! Minji will love it. Thanks for helping prepare.",
               contextEs: "Zoey: ¡Perfecto! A Minji le encantará. Gracias por ayudar a preparar.",
               intent: "별말씀을. '친구 좋다는 게 뭐야'.",
               intentEn: "Don't mention it. 'That's what friends are for'.",
               intentEs: "No hay de qué. 'Para eso están los amigos'.",
               options: [
                 { 
                   text: "That's what friends are for.", 
                   correct: true, 
                   explain: "친구끼리 돕는 건 당연하다는 따뜻한 표현.",
                   explainEn: "A warm expression meaning helping each other is what friends do.",
                   explainEs: "Una expresión cálida que significa que ayudarse mutuamente es lo que hacen los amigos."
                 },
                 { 
                   text: "Friends are good.", 
                   correct: false, 
                   explain: "친구는 좋다.",
                   explainEn: "Friends are good.",
                   explainEs: "Los amigos son buenos."
                 },
                 { 
                   text: "I like friend.", 
                   correct: false, 
                   explain: "난 친구를 좋아해.",
                   explainEn: "I like friend.",
                   explainEs: "Me gusta el amigo."
                 }
               ]
             }
          ]
        }
      ],
      intermediate: [
        {
          id: 1,
          title: "오랜만의 재회",
          titleEn: "Long Time No See",
          titleEs: "Mucho Tiempo Sin Verte",
          description: "오랜만에 만난 Zoey와 근황 토크를 시작합니다.",
          descriptionEn: "Catching up with Zoey after a long time.",
          descriptionEs: "Poniéndose al día con Zoey después de mucho tiempo.",
          rounds: [
            {
              id: 'r1',
              context: "Zoey: 야! 진짜 오랜만이다. 너 얼굴이 왜 그래? 무슨 일 있었어?",
              contextEn: "Zoey: Hey! It's been ages. What's up with your face? Did something happen?",
              contextEs: "Zoey: ¡Oye! Ha pasado mucho tiempo. ¿Qué pasa con tu cara? ¿Pasó algo?",
              intent: "요즘 일이 너무 많아서 '완전 녹초가 되었다'고 말하려면?",
              intentEn: "Work has been so busy lately, how do I say I'm 'totally burnt out'?",
              intentEs: "El trabajo ha estado tan ocupado últimamente, ¿cómo digo que estoy 'completamente agotado'?",
              options: [
                { 
                  text: "I'm totally burnt out.", 
                  correct: true, 
                  explain: "'Burn out'은 연료가 다 타버린 것처럼 기력이 쇠한 상태를 말해.",
                  explainEn: "'Burn out' means you're exhausted like fuel that's all burned up.",
                  explainEs: "'Burn out' significa que estás agotado como combustible que se ha quemado completamente."
                },
                { 
                  text: "I am melting down.", 
                  correct: false, 
                  explain: "Melting down은 감정적 붕괴에 가까워.",
                  explainEn: "Melting down is closer to an emotional breakdown.",
                  explainEs: "Melting down está más cerca de un colapso emocional."
                },
                { 
                  text: "My body is broken.", 
                  correct: false, 
                  explain: "몸이 부서졌다는 직역 표현이야.",
                  explainEn: "A literal translation saying your body is broken.",
                  explainEs: "Una traducción literal que dice que tu cuerpo está roto."
                }
              ]
            },
            {
              id: 'r2',
              context: "Zoey: 헐, 야근을 밥 먹듯이 했구나... 일단 맛있는 거라도 먹으러 가자. 뭐 먹고 싶어?",
              contextEn: "Zoey: Omg, you must have been working overtime like crazy... Let's go get something good to eat. What are you craving?",
              contextEs: "Zoey: Dios mío, debes haber estado trabajando horas extras como loco... Vamos a comer algo bueno. ¿Qué se te antoja?",
              intent: "나는 아무거나 다 잘 먹으니 '가리는 거 없다'고 하려면?",
              intentEn: "I eat anything well, how do I say 'I'm not picky'?",
              intentEs: "Como cualquier cosa bien, ¿cómo digo 'no soy exigente'?",
              options: [
                { 
                  text: "I'm not picky.", 
                  correct: true, 
                  explain: "'Picky'는 까다로운 걸 뜻해. Not picky는 무던하다는 뜻!",
                  explainEn: "'Picky' means being choosy. Not picky means you're easygoing!",
                  explainEs: "'Picky' significa ser exigente. Not picky significa que eres fácil de complacer."
                },
                { 
                  text: "I eat everything.", 
                  correct: false, 
                  explain: "의미는 통하지만 원어민은 picky를 더 많이 써.",
                  explainEn: "The meaning works but natives use 'picky' more often.",
                  explainEs: "El significado funciona pero los nativos usan 'picky' con más frecuencia."
                },
                { 
                  text: "I have a big mouth.", 
                  correct: false, 
                  explain: "입이 가볍다는 뜻이 될 수 있어 조심해!",
                  explainEn: "This could mean you can't keep secrets - be careful!",
                  explainEs: "Esto podría significar que no puedes guardar secretos - ¡ten cuidado!"
                }
              ]
            },
            {
              id: 'r3',
              context: "Zoey: 그럼 새로 생긴 파스타집 가자. 아, 근데 너 저 옷 뭐야? 완전 힙한데?",
              contextEn: "Zoey: Then let's go to that new pasta place. Oh, by the way, what's with that outfit? It's so hip!",
              contextEs: "Zoey: Entonces vayamos a ese nuevo lugar de pasta. Oh, por cierto, ¿qué pasa con ese atuendo? ¡Es tan moderno!",
              intent: "이거? 예쁘긴 한데 가격이 '터무니없이 비쌌다'고 하려면?",
              intentEn: "This? It's pretty but how do I say the price was 'ridiculously expensive'?",
              intentEs: "¿Esto? Es bonito pero ¿cómo digo que el precio era 'ridículamente caro'?",
              options: [
                { 
                  text: "It was a rip-off!", 
                  correct: true, 
                  explain: "'Rip-off'는 바가지, 혹은 도둑놈 심보처럼 비싼 가격을 뜻해.",
                  explainEn: "'Rip-off' means an outrageously expensive price, like being robbed.",
                  explainEs: "'Rip-off' significa un precio excesivamente caro, como ser robado."
                },
                { 
                  text: "It was expensive.", 
                  correct: false, 
                  explain: "너무 평범해. 감정이 안 실려 있어.",
                  explainEn: "Too plain. No emotion conveyed.",
                  explainEs: "Demasiado simple. No transmite emoción."
                },
                { 
                  text: "Price was too high.", 
                  correct: false, 
                  explain: "문법적으로 살짝 어색하고 밋밋해.",
                  explainEn: "Grammatically a bit awkward and flat.",
                  explainEs: "Gramaticalmente un poco incómodo y plano."
                }
              ]
            },
            {
              id: 'r4',
              context: "Zoey: 예쁘면 됐지 뭐! 그나저나 너네 팀장님은 아직도 그러셔? 지난번에 듣고 기가 차더라.",
              contextEn: "Zoey: As long as it looks good! Anyway, is your manager still like that? I was shocked when I heard about him last time.",
              contextEs: "Zoey: ¡Mientras se vea bien! De todos modos, ¿tu gerente sigue así? Me sorprendí cuando escuché sobre él la última vez.",
              intent: "말도 마, 그 사람은 진짜 '통제광'이라고 하려면?",
              intentEn: "Don't even mention it, how do I say that person is really a 'control freak'?",
              intentEs: "Ni lo menciones, ¿cómo digo que esa persona es realmente un 'maníaco del control'?",
              options: [
                { 
                  text: "He's a control freak.", 
                  correct: true, 
                  explain: "'Control freak'은 모든 걸 자기 맘대로 통제하려는 사람이야.",
                  explainEn: "'Control freak' is someone who wants to control everything their way.",
                  explainEs: "'Control freak' es alguien que quiere controlar todo a su manera."
                },
                { 
                  text: "He likes control.", 
                  correct: false, 
                  explain: "뉘앙스가 약해. 그냥 통제를 좋아한다는 뜻.",
                  explainEn: "The nuance is weak. Just means he likes control.",
                  explainEs: "El matiz es débil. Solo significa que le gusta el control."
                },
                { 
                  text: "He is a bossy man.", 
                  correct: false, 
                  explain: "Bossy도 좋지만 Control freak이 더 구체적이야.",
                  explainEn: "Bossy is also good but Control freak is more specific.",
                  explainEs: "Bossy también está bien pero Control freak es más específico."
                }
              ]
            },
            {
              id: 'r5',
              context: "Zoey: 으... 듣기만 해도 숨 막힌다. 오늘은 다 잊고 놀자! 이따가 2차 갈 거지?",
              contextEn: "Zoey: Ugh... just hearing that suffocates me. Let's forget everything and party today! You're coming for round 2, right?",
              contextEs: "Zoey: Uf... solo escuchar eso me sofoca. ¡Olvidemos todo y festejemos hoy! ¿Vienes para la segunda ronda, verdad?",
              intent: "당연하지! 오늘 밤 '진탕 놀아보자'고 하려면?",
              intentEn: "Of course! How do I say let's 'paint the town red' tonight?",
              intentEs: "¡Por supuesto! ¿Cómo digo 'pintemos la ciudad de rojo' esta noche?",
              options: [
                { 
                  text: "Let's paint the town red!", 
                  correct: true, 
                  explain: "'Paint the town red'는 시내 나가서 화끈하게 논다는 뜻이야.",
                  explainEn: "'Paint the town red' means to go out and party hard in the city.",
                  explainEs: "'Paint the town red' significa salir y festejar mucho en la ciudad."
                },
                { 
                  text: "Let's play very hard.", 
                  correct: false, 
                  explain: "약간 콩글리시 느낌이 나.",
                  explainEn: "Has a bit of a Konglish feeling.",
                  explainEs: "Tiene un poco de sensación de Konglish."
                },
                { 
                  text: "Let's drink red wine.", 
                  correct: false, 
                  explain: "너무 구체적이야. 와인만 마실 거야?",
                  explainEn: "Too specific. Are we only drinking wine?",
                  explainEs: "Demasiado específico. ¿Solo vamos a beber vino?"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "연애 상담",
          titleEn: "Dating Advice",
          titleEs: "Consejos de Citas",
          description: "Zoey가 썸남과의 고민을 털어놓습니다.",
          descriptionEn: "Zoey opens up about her concerns with the guy she's seeing.",
          descriptionEs: "Zoey se abre sobre sus preocupaciones con el chico que está viendo.",
          rounds: [
            {
               id: 'i-ch2-r1',
               context: "Zoey: {user}, 나 좀 도와줘. 썸남이 연락이 뜸해졌어. 밀당하는 걸까?",
               contextEn: "Zoey: {user}, help me out. The guy I'm seeing is texting less. Is he playing hard to get?",
               contextEs: "Zoey: {user}, ayúdame. El chico que estoy viendo está escribiendo menos. ¿Está jugando a ser difícil?",
               intent: "그냥 바쁜 걸 수도 있어. 너무 '속단하지 마'.",
               intentEn: "He might just be busy. Don't 'jump to conclusions'.",
               intentEs: "Podría estar ocupado. No 'saques conclusiones precipitadas'.",
               options: [
                 { 
                   text: "Don't jump to conclusions.", 
                   correct: true, 
                   explain: "결론으로 뛰어들지 마라, 즉 성급하게 판단하지 말라는 뜻.",
                   explainEn: "Don't rush to conclusions, meaning don't judge hastily.",
                   explainEs: "No saques conclusiones precipitadas, es decir, no juzgues apresuradamente."
                 },
                 { 
                   text: "Don't judge fast.", 
                   correct: false, 
                   explain: "빠르게 재판하지 마라?",
                   explainEn: "Don't judge quickly?",
                   explainEs: "¿No juzgues rápido?"
                 },
                 { 
                   text: "Wait and see.", 
                   correct: false, 
                   explain: "지켜보라는 뜻이지 속단하지 말라는 뜻은 아냐.",
                   explainEn: "This means wait and see, not don't jump to conclusions.",
                   explainEs: "Esto significa esperar y ver, no significa no sacar conclusiones precipitadas."
                 }
               ]
            },
            {
               id: 'i-ch2-r2',
               context: "Zoey: 하루 종일 폰만 보고 있는 내 꼴이 우스워 죽겠어.",
               contextEn: "Zoey: I feel ridiculous staring at my phone all day.",
               contextEs: "Zoey: Me siento ridícula mirando mi teléfono todo el día.",
               intent: "네 기분 이해해. 나도 그런 '경험 있어'.",
               intentEn: "I understand how you feel. I've 'been there' too.",
               intentEs: "Entiendo cómo te sientes. Yo también 'he estado ahí'.",
               options: [
                 { 
                   text: "I've been there.", 
                   correct: true, 
                   explain: "거기에 있어봤다, 즉 나도 겪어봐서 안다는 공감 표현.",
                   explainEn: "I've been in that situation, meaning I understand because I've experienced it too.",
                   explainEs: "He estado en esa situación, es decir, entiendo porque también lo he experimentado."
                 },
                 { 
                   text: "I have experience.", 
                   correct: false, 
                   explain: "경력직 면접 보는 거 아니잖아.",
                   explainEn: "This isn't a job interview.",
                   explainEs: "Esto no es una entrevista de trabajo."
                 },
                 { 
                   text: "I know that feeling.", 
                   correct: false, 
                   explain: "나쁘지 않지만 I've been there가 더 원어민스러워.",
                   explainEn: "Not bad but 'I've been there' is more native-like.",
                   explainEs: "No está mal pero 'I've been there' es más natural."
                 }
               ]
            },
            {
               id: 'i-ch2-r3',
               context: "Zoey: 먼저 연락하면 자존심 상하는데... 그냥 확 차단해버릴까?",
               contextEn: "Zoey: It hurts my pride to text first... Should I just block him?",
               contextEs: "Zoey: Me duele el orgullo escribir primero... ¿Debería simplemente bloquearlo?",
               intent: "진정해. 홧김에 행동하면 나중에 '후회할 거야'.",
               intentEn: "Calm down. If you act in anger, you'll 'regret it later'.",
               intentEs: "Cálmate. Si actúas con enojo, 'te arrepentirás después'.",
               options: [
                 { 
                   text: "You'll kick yourself later.", 
                   correct: true, 
                   explain: "나중에 자신을 걷어찰 것이다, 즉 땅을 치고 후회할 거란 뜻.",
                   explainEn: "You'll kick yourself later, meaning you'll really regret it.",
                   explainEs: "Te patearás a ti mismo después, es decir, realmente te arrepentirás."
                 },
                 { 
                   text: "You will regret.", 
                   correct: false, 
                   explain: "너무 평범해.",
                   explainEn: "Too plain.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "Don't do angry things.", 
                   correct: false, 
                   explain: "화난 짓 하지 마라?",
                   explainEn: "Don't do angry things?",
                   explainEs: "¿No hagas cosas enojadas?"
                 }
               ]
            },
            {
               id: 'i-ch2-r4',
               context: "Zoey: 그럼 어떡해? 네가 조언 좀 해줘.",
               contextEn: "Zoey: Then what should I do? Give me some advice.",
               contextEs: "Zoey: Entonces ¿qué debo hacer? Dame un consejo.",
               intent: "일단은 모른 척하고 '평소처럼 행동해'.",
               intentEn: "For now, pretend you don't know and 'play it cool'.",
               intentEs: "Por ahora, finge que no sabes y 'actúa con calma'.",
               options: [
                 { 
                   text: "Just play it cool.", 
                   correct: true, 
                   explain: "쿨하게, 침착하게 대처하라는 뜻.",
                   explainEn: "It means to act cool and calm.",
                   explainEs: "Significa actuar con calma y serenidad."
                 },
                 { 
                   text: "Act normal.", 
                   correct: false, 
                   explain: "정상인처럼 굴라는 뜻?",
                   explainEn: "Act like a normal person?",
                   explainEs: "¿Actuar como una persona normal?"
                 },
                 { 
                   text: "Do as usual.", 
                   correct: false, 
                   explain: "문법적으로 어색해.",
                   explainEn: "Grammatically awkward.",
                   explainEs: "Gramaticalmente incómodo."
                 }
               ]
            },
            {
               id: 'i-ch2-r5',
               context: "Zoey: 알겠어. 네 말대로 며칠만 더 기다려볼게. 고마워.",
               contextEn: "Zoey: Okay. I'll wait a few more days like you said. Thanks.",
               contextEs: "Zoey: Está bien. Esperaré unos días más como dijiste. Gracias.",
               intent: "기운 내. 넌 누구보다 '매력적이야'.",
               intentEn: "Cheer up. You're more 'attractive' than anyone.",
               intentEs: "Anímate. Eres más 'atractiva' que nadie.",
               options: [
                 { 
                   text: "You're a catch.", 
                   correct: true, 
                   explain: "'A catch'는 잡을만한 가치가 있는 사람, 즉 매력적인 사람을 뜻해.",
                   explainEn: "'A catch' means someone worth catching, i.e., an attractive person.",
                   explainEs: "'A catch' significa alguien que vale la pena atrapar, es decir, una persona atractiva."
                 },
                 { 
                   text: "You are charming.", 
                   correct: false, 
                   explain: "좋은 말이지만 A catch가 더 회화적이야.",
                   explainEn: "Good but 'a catch' is more conversational.",
                   explainEs: "Bueno pero 'a catch' es más conversacional."
                 },
                 { 
                   text: "You are pretty.", 
                   correct: false, 
                   explain: "단순히 예쁘다는 뜻.",
                   explainEn: "Simply means you're pretty.",
                   explainEs: "Simplemente significa que eres bonita."
                 }
               ]
            }
          ]
        },
        {
          id: 3,
          title: "집 구하기 대작전",
          titleEn: "Apartment Hunting",
          titleEs: "Búsqueda de Apartamento",
          description: "Zoey가 독립을 위해 집을 보러 다닙니다.",
          descriptionEn: "Zoey is looking for an apartment to become independent.",
          descriptionEs: "Zoey está buscando un apartamento para independizarse.",
          rounds: [
             {
               id: 'i-ch3-r1',
               context: "Zoey: 어제 본 오피스텔 어때? 위치는 진짜 좋던데.",
               contextEn: "Zoey: How was the officetel we saw yesterday? The location was really good.",
               contextEs: "Zoey: ¿Qué tal el oficetel que vimos ayer? La ubicación era realmente buena.",
               intent: "위치는 좋은데, 방음이 '별로였어'.",
               intentEn: "The location is good but the soundproofing was 'lousy'.",
               intentEs: "La ubicación es buena pero el aislamiento acústico era 'pésimo'.",
               options: [
                 { 
                   text: "The soundproofing was lousy.", 
                   correct: true, 
                   explain: "'Lousy'는 형편없다는 뜻.",
                   explainEn: "'Lousy' means terrible or poor quality.",
                   explainEs: "'Lousy' significa terrible o de mala calidad."
                 },
                 { 
                   text: "Sound didn't block.", 
                   correct: false, 
                   explain: "소리가 막히지 않았다?",
                   explainEn: "Sound didn't block?",
                   explainEs: "¿El sonido no se bloqueó?"
                 },
                 { 
                   text: "It was noisy.", 
                   correct: false, 
                   explain: "시끄러웠다는 결과만 말함.",
                   explainEn: "Only states the result of being noisy.",
                   explainEs: "Solo menciona el resultado de ser ruidoso."
                 }
               ]
             },
             {
               id: 'i-ch3-r2',
               context: "Zoey: 아 맞다, 옆방 소리가 다 들리더라. 역시 싼 게 비지떡인가?",
               contextEn: "Zoey: Oh right, I could hear everything from next door. You get what you pay for?",
               contextEs: "Zoey: Oh cierto, podía escuchar todo desde la habitación de al lado. ¿Obtienes lo que pagas?",
               intent: "맞아. 세상에 '공짜는 없지'.",
               intentEn: "Right. There's 'no such thing as a free lunch'.",
               intentEs: "Cierto. 'No hay tal cosa como un almuerzo gratis'.",
               options: [
                 { 
                   text: "There's no such thing as a free lunch.", 
                   correct: true, 
                   explain: "세상에 공짜 점심은 없다, 즉 대가를 치러야 한다는 격언.",
                   explainEn: "There's no free lunch in the world, meaning you have to pay the price.",
                   explainEs: "No hay almuerzo gratis en el mundo, es decir, tienes que pagar el precio."
                 },
                 { 
                   text: "No free money.", 
                   correct: false, 
                   explain: "공짜 돈은 없다.",
                   explainEn: "No free money.",
                   explainEs: "No hay dinero gratis."
                 },
                 { 
                   text: "Everything has price.", 
                   correct: false, 
                   explain: "모든 건 가격이 있다.",
                   explainEn: "Everything has a price.",
                   explainEs: "Todo tiene un precio."
                 }
               ]
             },
             {
               id: 'i-ch3-r3',
               context: "Zoey: 예산은 한정적이고 눈은 높고... 타협해야 할까?",
               contextEn: "Zoey: Limited budget but high standards... Should I compromise?",
               contextEs: "Zoey: Presupuesto limitado pero estándares altos... ¿Debería comprometerme?",
               intent: "조금 더 찾아보자. '서두를 필요 없어'.",
               intentEn: "Let's look a bit more. 'There's no need to rush'.",
               intentEs: "Busquemos un poco más. 'No hay necesidad de apresurarse'.",
               options: [
                 { 
                   text: "There's no need to rush.", 
                   correct: true, 
                   explain: "서두를 필요 없다는 표현.",
                   explainEn: "An expression meaning there's no need to hurry.",
                   explainEs: "Una expresión que significa que no hay necesidad de apresurarse."
                 },
                 { 
                   text: "Don't run.", 
                   correct: false, 
                   explain: "뛰지 말라는 뜻.",
                   explainEn: "This means don't run.",
                   explainEs: "Esto significa no correr."
                 },
                 { 
                   text: "Time is ours.", 
                   correct: false, 
                   explain: "시간은 우리 것이다?",
                   explainEn: "Time is ours?",
                   explainEs: "¿El tiempo es nuestro?"
                 }
               ]
             },
             {
               id: 'i-ch3-r4',
               context: "Zoey: 그래, 발품을 더 팔아봐야지. 이번 주말에 또 같이 가줄래?",
               contextEn: "Zoey: Yeah, I should look around more. Will you go with me again this weekend?",
               contextEs: "Zoey: Sí, debería buscar más. ¿Vendrás conmigo de nuevo este fin de semana?",
               intent: "물론이지. 내가 네 '등 뒤를 봐줄게(도와줄게)'.",
               intentEn: "Of course. I've 'got your back' (I'll help you).",
               intentEs: "Por supuesto. Te 'tengo la espalda' (te ayudaré).",
               options: [
                 { 
                   text: "I've got your back.", 
                   correct: true, 
                   explain: "내가 든든하게 지원해주겠다는 뜻.",
                   explainEn: "It means I'll support you solidly.",
                   explainEs: "Significa que te apoyaré sólidamente."
                 },
                 { 
                   text: "I look at your back.", 
                   correct: false, 
                   explain: "네 등만 쳐다보겠다는 뜻.",
                   explainEn: "This means I'll just stare at your back.",
                   explainEs: "Esto significa que solo miraré tu espalda."
                 },
                 { 
                   text: "I help you.", 
                   correct: false, 
                   explain: "너무 단순해.",
                   explainEn: "Too simple.",
                   explainEs: "Demasiado simple."
                 }
               ]
             },
             {
               id: 'i-ch3-r5',
               context: "Zoey: 넌 진짜 최고의 친구야! 이사 가면 집들이 거하게 할게.",
               contextEn: "Zoey: You're really the best friend! I'll throw a huge housewarming party once I move.",
               contextEs: "Zoey: ¡Eres realmente la mejor amiga! Haré una gran fiesta de inauguración una vez que me mude.",
               intent: "기대할게. 내 스케줄 '비워둘게'.",
               intentEn: "Looking forward to it. I'll 'clear my calendar'.",
               intentEs: "Lo espero con ansias. 'Despejaré mi calendario'.",
               options: [
                 { 
                   text: "I'll clear my calendar.", 
                   correct: true, 
                   explain: "일정을 비워두겠다는 관용구.",
                   explainEn: "An idiom meaning to free up your schedule.",
                   explainEs: "Un modismo que significa liberar tu calendario."
                 },
                 { 
                   text: "I empty my schedule.", 
                   correct: false, 
                   explain: "Empty는 물리적으로 비우는 것.",
                   explainEn: "Empty means to physically empty something.",
                   explainEs: "Empty significa vaciar físicamente algo."
                 },
                 { 
                   text: "I wait for party.", 
                   correct: false, 
                   explain: "파티를 기다린다.",
                   explainEn: "I wait for the party.",
                   explainEs: "Espero la fiesta."
                 }
               ]
             }
          ]
        },
        {
          id: 4,
          title: "이직 고민",
          titleEn: "Job Change Concerns",
          titleEs: "Preocupaciones por Cambio de Trabajo",
          description: "Zoey가 회사 생활에 회의감을 느낍니다.",
          descriptionEn: "Zoey feels disillusioned with her work life.",
          descriptionEs: "Zoey se siente desilusionada con su vida laboral.",
          rounds: [
             {
               id: 'i-ch4-r1',
               context: "Zoey: 요즘 일이 손에 안 잡혀. 그냥 다 그만두고 여행이나 갈까?",
               contextEn: "Zoey: I can't focus on work lately. Should I just quit and travel?",
               contextEs: "Zoey: No puedo concentrarme en el trabajo últimamente. ¿Debería renunciar y viajar?",
               intent: "왜 그래? 무슨 '고민 있어'?",
               intentEn: "What's wrong? What's 'bothering you'?",
               intentEs: "¿Qué pasa? ¿Qué te está 'molestando'?",
               options: [
                 { 
                   text: "What's eating you?", 
                   correct: true, 
                   explain: "무엇이 너를 갉아먹고 있냐, 즉 무슨 걱정 있냐는 뜻.",
                   explainEn: "What's bothering you, meaning what's worrying you?",
                   explainEs: "¿Qué te está molestando, es decir, qué te preocupa?"
                 },
                 { 
                   text: "Do you have problem?", 
                   correct: false, 
                   explain: "시비 거는 것처럼 들릴 수 있어.",
                   explainEn: "This could sound like you're picking a fight.",
                   explainEs: "Esto podría sonar como si estuvieras buscando pelea."
                 },
                 { 
                   text: "Why are you sad?", 
                   correct: false, 
                   explain: "슬프냐고 단정 짓지 마.",
                   explainEn: "Don't assume they're sad.",
                   explainEs: "No asumas que está triste."
                 }
               ]
             },
             {
               id: 'i-ch4-r2',
               context: "Zoey: 매일 똑같은 업무, 꼰대 상사... 이젠 지긋지긋해.",
               contextEn: "Zoey: Same work every day, bossy manager... I'm sick of it.",
               contextEs: "Zoey: El mismo trabajo todos los días, gerente mandón... Estoy harta.",
               intent: "이런, '슬럼프가 왔구나'.",
               intentEn: "Oh, you're 'in a slump'.",
               intentEs: "Oh, estás 'en una depresión'.",
               options: [
                 { 
                   text: "You're in a slump.", 
                   correct: true, 
                   explain: "슬럼프에 빠졌다는 표현.",
                   explainEn: "An expression meaning you're in a slump.",
                   explainEs: "Una expresión que significa que estás en una depresión."
                 },
                 { 
                   text: "You hit the wall.", 
                   correct: false, 
                   explain: "한계에 부딪혔다는 뜻.",
                   explainEn: "This means you've hit a limit.",
                   explainEs: "Esto significa que has alcanzado un límite."
                 },
                 { 
                   text: "You are bored.", 
                   correct: false, 
                   explain: "지루해한다는 단순 표현.",
                   explainEn: "A simple expression meaning you're bored.",
                   explainEs: "Una expresión simple que significa que estás aburrido."
                 }
               ]
             },
             {
               id: 'i-ch4-r3',
               context: "Zoey: 이직을 준비하려니 두렵기도 하고... 내가 잘할 수 있을까?",
               contextEn: "Zoey: I'm afraid to prepare for a job change... Can I do well?",
               contextEs: "Zoey: Tengo miedo de prepararme para un cambio de trabajo... ¿Puedo hacerlo bien?",
               intent: "당연하지. 넌 '능력자잖아'.",
               intentEn: "Of course. You 'have what it takes'.",
               intentEs: "Por supuesto. Tienes 'lo que se necesita'.",
               options: [
                 { 
                   text: "You have what it takes.", 
                   correct: true, 
                   explain: "성공에 필요한 자질을 갖췄다는 뜻.",
                   explainEn: "It means you have the qualities needed for success.",
                   explainEs: "Significa que tienes las cualidades necesarias para el éxito."
                 },
                 { 
                   text: "You are superman.", 
                   correct: false, 
                   explain: "슈퍼맨?",
                   explainEn: "Superman?",
                   explainEs: "¿Superman?"
                 },
                 { 
                   text: "You can do well.", 
                   correct: false, 
                   explain: "평범한 응원.",
                   explainEn: "Plain encouragement.",
                   explainEs: "Aliento simple."
                 }
               ]
             },
             {
               id: 'i-ch4-r4',
               context: "Zoey: 고마워. 일단 이력서부터 다시 써봐야겠다.",
               contextEn: "Zoey: Thanks. I should rewrite my resume first.",
               contextEs: "Zoey: Gracias. Debería reescribir mi currículum primero.",
               intent: "그래. '시작이 반이다'라는 말도 있잖아.",
               intentEn: "Right. There's a saying 'well begun is half done'.",
               intentEs: "Cierto. Hay un dicho 'bien comenzado es medio terminado'.",
               options: [
                 { 
                   text: "Well begun is half done.", 
                   correct: true, 
                   explain: "시작이 반이라는 속담.",
                   explainEn: "A proverb meaning a good start is half the work.",
                   explainEs: "Un proverbio que significa que un buen comienzo es la mitad del trabajo."
                 },
                 { 
                   text: "Start is half.", 
                   correct: false, 
                   explain: "직역이라 어색해.",
                   explainEn: "A literal translation that's awkward.",
                   explainEs: "Una traducción literal que es incómoda."
                 },
                 { 
                   text: "Just start now.", 
                   correct: false, 
                   explain: "지금 시작해라.",
                   explainEn: "Just start now.",
                   explainEs: "Solo comienza ahora."
                 }
               ]
             },
             {
               id: 'i-ch4-r5',
               context: "Zoey: 오늘 너랑 얘기하니까 마음이 한결 가볍다. 맥주 한잔할래?",
               contextEn: "Zoey: I feel much lighter talking to you. Wanna grab a beer?",
               contextEs: "Zoey: Me siento mucho más ligera hablando contigo. ¿Quieres tomar una cerveza?",
               intent: "콜! 내가 '한턱 쏠게'.",
               intentEn: "Call! It's 'on me'.",
               intentEs: "¡Dale! 'Yo invito'.",
               options: [
                 { 
                   text: "It's on me tonight.", 
                   correct: true, 
                   explain: "내가 사겠다는 뜻.",
                   explainEn: "It means I'll pay for it.",
                   explainEs: "Significa que yo pago."
                 },
                 { 
                   text: "I shoot beer.", 
                   correct: false, 
                   explain: "맥주를 총으로 쏜다?",
                   explainEn: "I shoot beer with a gun?",
                   explainEs: "¿Disparo cerveza con una pistola?"
                 },
                 { 
                   text: "I buy you.", 
                   correct: false, 
                   explain: "너를 산다는 뜻이 됨.",
                   explainEn: "This means I'm buying you.",
                   explainEs: "Esto significa que te estoy comprando."
                 }
               ]
             }
          ]
        },
        {
          id: 5,
          title: "결혼식 하객룩",
          titleEn: "Wedding Guest Outfit",
          titleEs: "Atuendo de Invitado a Boda",
          description: "친구 결혼식에 입고 갈 옷을 고릅니다.",
          descriptionEn: "Choosing what to wear to a friend's wedding.",
          descriptionEs: "Eligiendo qué ponerse para la boda de una amiga.",
          rounds: [
             {
               id: 'i-ch5-r1',
               context: "Zoey: 다음 주 결혼식에 뭐 입지? 너무 튀면 안 되잖아.",
               contextEn: "Zoey: What should I wear to the wedding next week? It shouldn't be too flashy.",
               contextEs: "Zoey: ¿Qué debería ponerme para la boda de la próxima semana? No debería ser demasiado llamativo.",
               intent: "맞아. 신부보다 '돋보이면 안 되지'.",
               intentEn: "Right. You shouldn't 'upstage the bride'.",
               intentEs: "Cierto. No deberías 'robarle el protagonismo a la novia'.",
               options: [
                 { 
                   text: "You shouldn't upstage the bride.", 
                   correct: true, 
                   explain: "'Upstage'는 무대 뒤쪽이 아닌 앞쪽으로 나와 주목을 가로채다는 뜻.",
                   explainEn: "'Upstage' means to come forward and steal attention from the main focus.",
                   explainEs: "'Upstage' significa avanzar y robar la atención del foco principal."
                 },
                 { 
                   text: "Don't look better than bride.", 
                   correct: false, 
                   explain: "너무 직설적이야.",
                   explainEn: "Too direct.",
                   explainEs: "Demasiado directo."
                 },
                 { 
                   text: "Hide behind the bride.", 
                   correct: false, 
                   explain: "신부 뒤에 숨으라고?",
                   explainEn: "Hide behind the bride?",
                   explainEs: "¿Esconderse detrás de la novia?"
                 }
               ]
             },
             {
               id: 'i-ch5-r2',
               context: "Zoey: 흰색 원피스는 피해야겠지? 이 네이비색은 어때?",
               contextEn: "Zoey: I should avoid white dresses, right? How about this navy one?",
               contextEs: "Zoey: Debería evitar vestidos blancos, ¿verdad? ¿Qué tal este azul marino?",
               intent: "좋아. 단정하면서도 '세련돼 보여'.",
               intentEn: "Good. It looks 'chic and polished' while being neat.",
               intentEs: "Bien. Se ve 'elegante y pulido' mientras está ordenado.",
               options: [
                 { 
                   text: "It looks chic and polished.", 
                   correct: true, 
                   explain: "세련되고 정돈된 느낌을 줌.",
                   explainEn: "It gives a sophisticated and refined feeling.",
                   explainEs: "Da una sensación sofisticada y refinada."
                 },
                 { 
                   text: "It looks dark.", 
                   correct: false, 
                   explain: "어두워 보인다는 뜻.",
                   explainEn: "This means it looks dark.",
                   explainEs: "Esto significa que se ve oscuro."
                 },
                 { 
                   text: "It is not white.", 
                   correct: false, 
                   explain: "흰색이 아니라는 사실만 말함.",
                   explainEn: "Only states the fact that it's not white.",
                   explainEs: "Solo menciona el hecho de que no es blanco."
                 }
               ]
             },
             {
               id: 'i-ch5-r3',
               context: "Zoey: 그럼 구두는 뭘 신지? 굽 높은 거 신을까?",
               contextEn: "Zoey: Then what shoes? Should I wear high heels?",
               contextEs: "Zoey: Entonces ¿qué zapatos? ¿Debería usar tacones altos?",
               intent: "오래 서 있어야 하니 '편한 게 최고야'.",
               intentEn: "Since you'll be standing for a long time, 'comfort is key'.",
               intentEs: "Como estarás de pie durante mucho tiempo, 'la comodidad es clave'.",
               options: [
                 { 
                   text: "Comfort is key.", 
                   correct: true, 
                   explain: "편안함이 핵심이라는 뜻.",
                   explainEn: "It means comfort is the most important thing.",
                   explainEs: "Significa que la comodidad es lo más importante."
                 },
                 { 
                   text: "Easy is best.", 
                   correct: false, 
                   explain: "쉬운 게 최고?",
                   explainEn: "Easy is best?",
                   explainEs: "¿Fácil es mejor?"
                 },
                 { 
                   text: "Wear sleeping shoes.", 
                   correct: false, 
                   explain: "잠잘 때 신는 신발?",
                   explainEn: "Shoes you wear when sleeping?",
                   explainEs: "¿Zapatos que usas al dormir?"
                 }
               ]
             },
             {
               id: 'i-ch5-r4',
               context: "Zoey: 하긴, 발 아프면 밥도 제대로 못 먹으니까. 플랫슈즈 신어야겠다.",
               contextEn: "Zoey: True, if my feet hurt, I can't even eat properly. I'll wear flats.",
               contextEs: "Zoey: Cierto, si me duelen los pies, ni siquiera puedo comer bien. Usaré zapatos planos.",
               intent: "현명한 선택이야. 넌 패션 센스가 '남달라'.",
               intentEn: "Wise choice. You have an 'exceptional eye for fashion'.",
               intentEs: "Elección sabia. Tienes un 'ojo excepcional para la moda'.",
               options: [
                 { 
                   text: "You have a great eye for fashion.", 
                   correct: true, 
                   explain: "패션을 보는 눈이 있다는 칭찬.",
                   explainEn: "A compliment meaning you have good fashion sense.",
                   explainEs: "Un cumplido que significa que tienes buen sentido de la moda."
                 },
                 { 
                   text: "You are fashion model.", 
                   correct: false, 
                   explain: "모델은 아니잖아.",
                   explainEn: "You're not a model.",
                   explainEs: "No eres modelo."
                 },
                 { 
                   text: "Your cloth is good.", 
                   correct: false, 
                   explain: "옷이 좋다는 뜻.",
                   explainEn: "This means your clothes are good.",
                   explainEs: "Esto significa que tu ropa es buena."
                 }
               ]
             },
             {
               id: 'i-ch5-r5',
               context: "Zoey: 준비 끝! 이제 축의금만 준비하면 되네.",
               contextEn: "Zoey: Ready! Now I just need to prepare the congratulatory money.",
               contextEs: "Zoey: ¡Listo! Ahora solo necesito preparar el dinero de felicitación.",
               intent: "결혼식 뷔페나 '기대해보자'.",
               intentEn: "Let's 'look forward to' the wedding buffet.",
               intentEs: "'Esperemos con ansias' el buffet de la boda.",
               options: [
                 { 
                   text: "Let's look forward to the buffet.", 
                   correct: true, 
                   explain: "뷔페를 기대하자는 뜻.",
                   explainEn: "It means let's look forward to the buffet.",
                   explainEs: "Significa que esperemos con ansias el buffet."
                 },
                 { 
                   text: "I want to eat buffet.", 
                   correct: false, 
                   explain: "나 뷔페 먹고 싶어.",
                   explainEn: "I want to eat buffet.",
                   explainEs: "Quiero comer buffet."
                 },
                 { 
                   text: "Buffet is my goal.", 
                   correct: false, 
                   explain: "뷔페가 내 목표다.",
                   explainEn: "Buffet is my goal.",
                   explainEs: "El buffet es mi objetivo."
                 }
               ]
             }
          ]
        }
      ],
      advanced: [
        {
          id: 1,
          title: "심도 깊은 대화",
          titleEn: "Deep Conversation",
          titleEs: "Conversación Profunda",
          description: "Zoey와 인생에 대해 깊은 이야기를 나눕니다.",
          descriptionEn: "Having a deep conversation about life with Zoey.",
          descriptionEs: "Teniendo una conversación profunda sobre la vida con Zoey.",
          rounds: [
            {
              id: 'a-r1',
              context: "Zoey: {user}, 요즘 드는 생각인데, 우리 인생이 너무 단조로운 것 같아.",
              contextEn: "Zoey: {user}, I've been thinking lately, our lives seem too monotonous.",
              contextEs: "Zoey: {user}, he estado pensando últimamente, nuestras vidas parecen demasiado monótonas.",
              intent: "맞아. 나도 가끔 '틀에 박힌 생활'에 갇힌 기분이 든다고 하려면?",
              intentEn: "Right. How do I say I sometimes feel 'stuck in a rut'?",
              intentEs: "Cierto. ¿Cómo digo que a veces me siento 'atrapado en una rutina'?",
              options: [
                { 
                  text: "I feel stuck in a rut.", 
                  correct: true, 
                  explain: "'Stuck in a rut'은 바퀴 자국에 빠져 오도 가도 못하는 상태.",
                  explainEn: "'Stuck in a rut' means being stuck in a wheel rut, unable to move forward or backward.",
                  explainEs: "'Stuck in a rut' significa estar atrapado en una huella de rueda, sin poder avanzar o retroceder."
                },
                { 
                  text: "I feel boring life.", 
                  correct: false, 
                  explain: "문법적으로 어색해. Life is boring이 맞지.",
                  explainEn: "Grammatically awkward. 'Life is boring' is correct.",
                  explainEs: "Gramaticalmente incómodo. 'Life is boring' es correcto."
                },
                { 
                  text: "I am in a square box.", 
                  correct: false, 
                  explain: "상자 안에 갇혔다는 건 너무 물리적이야.",
                  explainEn: "Being trapped in a box is too physical.",
                  explainEs: "Estar atrapado en una caja es demasiado físico."
                }
              ]
            },
            {
              id: 'a-r2',
              context: "Zoey: 그러니까! 뭔가 획기적인 변화가 필요해. 이직을 해볼까?",
              contextEn: "Zoey: Exactly! We need a drastic change. Should I try changing jobs?",
              contextEs: "Zoey: ¡Exacto! Necesitamos un cambio drástico. ¿Debería intentar cambiar de trabajo?",
              intent: "글쎄, 그건 좀 '신중하게 생각해봐야' 할 문제라고 조언하려면?",
              intentEn: "Well, how do I advise that it's something you should 'sleep on'?",
              intentEs: "Bueno, ¿cómo aconsejo que es algo en lo que deberías 'pensarlo bien'?",
              options: [
                { 
                  text: "You should sleep on it.", 
                  correct: true, 
                  explain: "'Sleep on it'은 하룻밤 자면서 신중하게 고민해보라는 뜻.",
                  explainEn: "'Sleep on it' means to think it over carefully by sleeping on it overnight.",
                  explainEs: "'Sleep on it' significa pensarlo cuidadosamente durmiendo sobre ello durante la noche."
                },
                { 
                  text: "Think deeply about it.", 
                  correct: false, 
                  explain: "틀린 건 아니지만 관용구의 맛이 없어.",
                  explainEn: "Not wrong but lacks the flavor of an idiom.",
                  explainEs: "No está mal pero carece del sabor de un modismo."
                },
                { 
                  text: "Be careful thinking.", 
                  correct: false, 
                  explain: "생각을 조심하라는 건 좀 이상해.",
                  explainEn: "Being careful about thinking is a bit strange.",
                  explainEs: "Tener cuidado al pensar es un poco extraño."
                }
              ]
            },
            {
              id: 'a-r3',
              context: "Zoey: 하긴, 충동적으로 결정할 일은 아니지. 근데 지금 아니면 언제 해?",
              contextEn: "Zoey: True, it's not something to decide on a whim. But if not now, when?",
              contextEs: "Zoey: Cierto, no es algo para decidir por capricho. Pero si no es ahora, ¿cuándo?",
              intent: "그 말도 맞아. 가끔은 '위험을 감수해야' 할 때도 있지.",
              intentEn: "That's also true. Sometimes you have to 'go out on a limb'.",
              intentEs: "Eso también es cierto. A veces tienes que 'arriesgarte'.",
              options: [
                { 
                  text: "You gotta go out on a limb.", 
                  correct: true, 
                  explain: "'Go out on a limb'은 가지 끝으로 나아가다, 위험을 감수하다.",
                  explainEn: "'Go out on a limb' means to go out on a branch, take a risk.",
                  explainEs: "'Go out on a limb' significa salir a una rama, tomar un riesgo."
                },
                { 
                  text: "You must take danger.", 
                  correct: false, 
                  explain: "Danger를 가져간다는 표현은 어색해.",
                  explainEn: "The expression 'take danger' is awkward.",
                  explainEs: "La expresión 'take danger' es incómoda."
                },
                { 
                  text: "Risk represents reward.", 
                  correct: false, 
                  explain: "너무 격언 같은 표현이야.",
                  explainEn: "Too much like a proverb.",
                  explainEs: "Demasiado como un proverbio."
                }
              ]
            },
            {
              id: 'a-r4',
              context: "Zoey: 역시 넌 내 마음을 잘 알아. 너랑 얘기하면 속이 시원해.",
              contextEn: "Zoey: You really know my heart. Talking to you makes me feel relieved.",
              contextEs: "Zoey: Realmente conoces mi corazón. Hablar contigo me hace sentir aliviada.",
              intent: "우린 서로 '눈만 봐도 통하는' 사이니까.",
              intentEn: "We're on 'the same wavelength' with each other.",
              intentEs: "Estamos en 'la misma longitud de onda' el uno con el otro.",
              options: [
                { 
                  text: "We're on the same wavelength.", 
                  correct: true, 
                  explain: "'On the same wavelength'는 주파수가 같다, 말이 잘 통한다는 뜻.",
                  explainEn: "'On the same wavelength' means we're on the same frequency, we understand each other well.",
                  explainEs: "'On the same wavelength' significa que estamos en la misma frecuencia, nos entendemos bien."
                },
                { 
                  text: "We see eye to eye.", 
                  correct: false, 
                  explain: "이건 '의견이 일치한다'는 뜻에 더 가까워.",
                  explainEn: "This is closer to meaning 'we agree'.",
                  explainEs: "Esto está más cerca de significar 'estamos de acuerdo'."
                },
                { 
                  text: "We connect mind to mind.", 
                  correct: false, 
                  explain: "텔레파시 보내는 거야?",
                  explainEn: "Are we sending telepathy?",
                  explainEs: "¿Estamos enviando telepatía?"
                }
              ]
            },
            {
              id: 'a-r5',
              context: "Zoey: 고마워. 오늘 대화 덕분에 정리가 좀 된 것 같아.",
              contextEn: "Zoey: Thanks. I think things are sorted out thanks to our talk today.",
              contextEs: "Zoey: Gracias. Creo que las cosas se han aclarado gracias a nuestra conversación de hoy.",
              intent: "언제든 환영이야. 우린 '일심동체'나 마찬가지잖아.",
              intentEn: "Anytime. We're 'cut from the same cloth'.",
              intentEs: "Cuando quieras. Estamos 'cortados de la misma tela'.",
              options: [
                { 
                  text: "We're cut from the same cloth.", 
                  correct: true, 
                  explain: "'Cut from the same cloth'는 같은 천에서 잘라냈다, 아주 비슷하다.",
                  explainEn: "'Cut from the same cloth' means cut from the same fabric, very similar.",
                  explainEs: "'Cut from the same cloth' significa cortado de la misma tela, muy similar."
                },
                { 
                  text: "We are one body soul.", 
                  correct: false, 
                  explain: "영혼까지 하나라니 좀 무서워.",
                  explainEn: "Being one body and soul is a bit scary.",
                  explainEs: "Ser un solo cuerpo y alma es un poco aterrador."
                },
                { 
                  text: "We mix together well.", 
                  correct: false, 
                  explain: "우린 섞이는 물감이 아니야.",
                  explainEn: "We're not paint that mixes together.",
                  explainEs: "No somos pintura que se mezcla."
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "사회 이슈 토론",
          titleEn: "Social Issue Discussion",
          titleEs: "Discusión sobre Temas Sociales",
          description: "최근 뉴스에 대해 Zoey와 열띤 토론을 합니다.",
          descriptionEn: "Having a heated discussion about recent news with Zoey.",
          descriptionEs: "Teniendo una discusión acalorada sobre las noticias recientes con Zoey.",
          rounds: [
             {
               id: 'a-ch2-r1',
               context: "Zoey: 이번 정책 뉴스 봤어? 난 도저히 이해가 안 돼.",
               contextEn: "Zoey: Did you see the news about the policy? I just can't wrap my head around it.",
               contextEs: "Zoey: ¿Viste las noticias sobre la política? No puedo entenderlo.",
               intent: "나도. 그건 현실성이 '전혀 없어'.",
               intentEn: "Me too. It's completely 'out of touch'.",
               intentEs: "Yo también. Está completamente 'desconectado de la realidad'.",
               options: [
                 { 
                   text: "It's completely out of touch.", 
                   correct: true, 
                   explain: "'Out of touch'는 현실 감각이 없다는 뜻.",
                   explainEn: "'Out of touch' means lacking awareness of reality.",
                   explainEs: "'Out of touch' significa carecer de conciencia de la realidad."
                 },
                 { 
                   text: "It has no real.", 
                   correct: false, 
                   explain: "문법 오류.",
                   explainEn: "Grammar error.",
                   explainEs: "Error gramatical."
                 },
                 { 
                   text: "It is impossible dream.", 
                   correct: false, 
                   explain: "불가능한 꿈이다.",
                   explainEn: "It's an impossible dream.",
                   explainEs: "Es un sueño imposible."
                 }
               ]
             },
             {
               id: 'a-ch2-r2',
               context: "Zoey: 그러니까 말이야. 서민들의 삶을 전혀 모르는 것 같아.",
               contextEn: "Zoey: Exactly. It seems like they don't know the lives of ordinary people at all.",
               contextEs: "Zoey: Exacto. Parece que no conocen en absoluto las vidas de la gente común.",
               intent: "그들은 상아탑에 갇혀서 '탁상공론만 하고 있어'.",
               intentEn: "They're stuck in an ivory tower, just 'armchair critics'.",
               intentEs: "Están atrapados en una torre de marfil, solo 'críticos de sillón'.",
               options: [
                 { 
                   text: "They're just armchair critics.", 
                   correct: true, 
                   explain: "'Armchair critic'은 이론만 알고 실전은 모르는 비평가.",
                   explainEn: "'Armchair critic' is someone who only knows theory, not practice.",
                   explainEs: "'Armchair critic' es alguien que solo conoce la teoría, no la práctica."
                 },
                 { 
                   text: "They just talk on table.", 
                   correct: false, 
                   explain: "테이블 위에서 말한다?",
                   explainEn: "They talk on a table?",
                   explainEs: "¿Hablan sobre una mesa?"
                 },
                 { 
                   text: "They live in castle.", 
                   correct: false, 
                   explain: "성 안에 산다.",
                   explainEn: "They live in a castle.",
                   explainEs: "Viven en un castillo."
                 }
               ]
             },
             {
               id: 'a-ch2-r3',
               context: "Zoey: 반대 여론이 이렇게 심한데 왜 강행하는 걸까?",
               contextEn: "Zoey: Why push it through when the opposition is so strong?",
               contextEs: "Zoey: ¿Por qué forzarlo cuando la oposición es tan fuerte?",
               intent: "아마도 이익 집단의 '로비가 있었겠지'.",
               intentEn: "Probably 'strings were pulled' by interest groups.",
               intentEs: "Probablemente 'se movieron hilos' por grupos de interés.",
               options: [
                 { 
                   text: "Strings were pulled.", 
                   correct: true, 
                   explain: "'Pull strings'는 뒤에서 조종하다, 빽을 쓰다는 뜻.",
                   explainEn: "'Pull strings' means to manipulate behind the scenes, use connections.",
                   explainEs: "'Pull strings' significa manipular detrás de escena, usar conexiones."
                 },
                 { 
                   text: "Lobby was there.", 
                   correct: false, 
                   explain: "호텔 로비가 있었다?",
                   explainEn: "A hotel lobby was there?",
                   explainEs: "¿Había un vestíbulo de hotel?"
                 },
                 { 
                   text: "Money moved.", 
                   correct: false, 
                   explain: "돈이 움직였다.",
                   explainEn: "Money moved.",
                   explainEs: "El dinero se movió."
                 }
               ]
             },
             {
               id: 'a-ch2-r4',
               context: "Zoey: 휴, 우리가 뭘 할 수 있겠어. 투표라도 잘해야지.",
               contextEn: "Zoey: Sigh, what can we do. We should at least vote wisely.",
               contextEs: "Zoey: Suspiro, qué podemos hacer. Al menos deberíamos votar sabiamente.",
               intent: "맞아. 우리가 변화를 '만들어내야 해'.",
               intentEn: "Right. We need to 'bring about change'.",
               intentEs: "Cierto. Necesitamos 'generar cambio'.",
               options: [
                 { 
                   text: "We need to bring about change.", 
                   correct: true, 
                   explain: "'Bring about'은 (변화를) 초래하다, 야기하다는 뜻.",
                   explainEn: "'Bring about' means to cause or bring about (change).",
                   explainEs: "'Bring about' significa causar o generar (cambio)."
                 },
                 { 
                   text: "We create change.", 
                   correct: false, 
                   explain: "나쁘지 않지만 평범해.",
                   explainEn: "Not bad but plain.",
                   explainEs: "No está mal pero simple."
                 },
                 { 
                   text: "Change is must.", 
                   correct: false, 
                   explain: "변화는 필수다.",
                   explainEn: "Change is a must.",
                   explainEs: "El cambio es imprescindible."
                 }
               ]
             },
             {
               id: 'a-ch2-r5',
               context: "Zoey: 그래. 불평만 하고 있을 순 없지. 행동으로 보여주자.",
               contextEn: "Zoey: Right. Can't just complain. Let's show it with action.",
               contextEs: "Zoey: Cierto. No podemos solo quejarnos. Mostrémoslo con acción.",
               intent: "동감이야. '말보다 행동이 중요하니까'.",
               intentEn: "I agree. 'Actions speak louder than words'.",
               intentEs: "Estoy de acuerdo. 'Las acciones hablan más que las palabras'.",
               options: [
                 { 
                   text: "Actions speak louder than words.", 
                   correct: true, 
                   explain: "말보다 행동이 더 크게 말한다는 유명한 속담.",
                   explainEn: "A famous proverb meaning actions speak louder than words.",
                   explainEs: "Un proverbio famoso que significa que las acciones hablan más que las palabras."
                 },
                 { 
                   text: "Action is important.", 
                   correct: false, 
                   explain: "너무 단순해.",
                   explainEn: "Too simple.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "Do not talk, just do.", 
                   correct: false, 
                   explain: "말하지 말고 해라.",
                   explainEn: "Don't talk, just do.",
                   explainEs: "No hables, solo hazlo."
                 }
               ]
             }
          ]
        },
        {
          id: 3,
          title: "사업 아이디어",
          titleEn: "Business Idea",
          titleEs: "Idea de Negocio",
          description: "Zoey가 새로운 창업 아이템을 가져왔습니다.",
          descriptionEn: "Zoey brings a new startup idea.",
          descriptionEs: "Zoey trae una nueva idea de startup.",
          rounds: [
             {
               id: 'a-ch3-r1',
               context: "Zoey: {user}, 나 대박 아이디어 떠올랐어. 이거면 성공할 수 있을 것 같아.",
               contextEn: "Zoey: {user}, I got a huge idea. I think this could be a success.",
               contextEs: "Zoey: {user}, tuve una idea genial. Creo que esto podría ser un éxito.",
               intent: "뭔데? '귀담아들을게(말해봐)'.",
               intentEn: "What is it? I'm 'all ears' (tell me).",
               intentEs: "¿Qué es? Estoy 'todo oídos' (cuéntame).",
               options: [
                 { 
                   text: "I'm all ears.", 
                   correct: true, 
                   explain: "온몸이 귀가 되었다, 즉 경청하겠다는 뜻.",
                   explainEn: "My whole body is ears, meaning I'm listening attentively.",
                   explainEs: "Todo mi cuerpo son oídos, es decir, estoy escuchando atentamente."
                 },
                 { 
                   text: "I hear you well.", 
                   correct: false, 
                   explain: "잘 들린다는 뜻.",
                   explainEn: "This means I can hear you well.",
                   explainEs: "Esto significa que puedo oírte bien."
                 },
                 { 
                   text: "My ear is open.", 
                   correct: false, 
                   explain: "귀가 열려있다.",
                   explainEn: "My ear is open.",
                   explainEs: "Mi oído está abierto."
                 }
               ]
             },
             {
               id: 'a-ch3-r2',
               context: "Zoey: 구독형 반려식물 관리 서비스야. 식물 킬러들을 위한 거지.",
               contextEn: "Zoey: It's a subscription plant care service. For plant killers.",
               contextEs: "Zoey: Es un servicio de cuidado de plantas por suscripción. Para asesinos de plantas.",
               intent: "오, 그거 '틈새시장을 공략'한 건데?",
               intentEn: "Oh, that 'hits a niche market'?",
               intentEs: "Oh, ¿eso 'golpea un nicho de mercado'?",
               options: [
                 { 
                   text: "That hits a niche market.", 
                   correct: true, 
                   explain: "'Niche market'은 틈새시장을 뜻해.",
                   explainEn: "'Niche market' means a specialized market segment.",
                   explainEs: "'Niche market' significa un segmento de mercado especializado."
                 },
                 { 
                   text: "Small market attack.", 
                   correct: false, 
                   explain: "작은 시장 공격?",
                   explainEn: "Small market attack?",
                   explainEs: "¿Ataque de mercado pequeño?"
                 },
                 { 
                   text: "It is unique idea.", 
                   correct: false, 
                   explain: "그냥 독특하다는 뜻.",
                   explainEn: "Just means it's a unique idea.",
                   explainEs: "Solo significa que es una idea única."
                 }
               ]
             },
             {
               id: 'a-ch3-r3',
               context: "Zoey: 그렇지? 근데 초기 투자 비용이 좀 걱정이야.",
               contextEn: "Zoey: Right? But I'm worried about the initial investment cost.",
               contextEs: "Zoey: ¿Cierto? Pero estoy preocupada por el costo de inversión inicial.",
               intent: "걱정 마. 크라우드 펀딩으로 '자금을 모을 수 있어'.",
               intentEn: "Don't worry. We can 'raise capital' through crowdfunding.",
               intentEs: "No te preocupes. Podemos 'recaudar capital' a través del crowdfunding.",
               options: [
                 { 
                   text: "We can raise capital.", 
                   correct: true, 
                   explain: "'Raise capital'은 자본금을 마련하다는 전문 용어.",
                   explainEn: "'Raise capital' is a professional term meaning to secure funding.",
                   explainEs: "'Raise capital' es un término profesional que significa asegurar financiamiento."
                 },
                 { 
                   text: "We gather money.", 
                   correct: false, 
                   explain: "돈을 줍는 느낌.",
                   explainEn: "Feels like picking up money.",
                   explainEs: "Se siente como recoger dinero."
                 },
                 { 
                   text: "Crowd gives money.", 
                   correct: false, 
                   explain: "군중이 돈을 준다?",
                   explainEn: "The crowd gives money?",
                   explainEs: "¿La multitud da dinero?"
                 }
               ]
             },
             {
               id: 'a-ch3-r4',
               context: "Zoey: 같이 해볼래? 너 마케팅 잘하잖아.",
               contextEn: "Zoey: Wanna do it together? You're good at marketing.",
               contextEs: "Zoey: ¿Quieres hacerlo juntos? Eres bueno en marketing.",
               intent: "글쎄, 사업은 '내 전문 분야가 아닌데'.",
               intentEn: "Well, business 'isn't my forte'.",
               intentEs: "Bueno, los negocios 'no son mi fuerte'.",
               options: [
                 { 
                   text: "Business isn't my forte.", 
                   correct: true, 
                   explain: "'Forte'는 강점, 전문 분야라는 뜻.",
                   explainEn: "'Forte' means strength, area of expertise.",
                   explainEs: "'Forte' significa fortaleza, área de experiencia."
                 },
                 { 
                   text: "I am bad at business.", 
                   correct: false, 
                   explain: "직설적이지만 어휘력이 낮아 보임.",
                   explainEn: "Direct but shows low vocabulary.",
                   explainEs: "Directo pero muestra vocabulario bajo."
                 },
                 { 
                   text: "Not my style.", 
                   correct: false, 
                   explain: "내 스타일 아니야.",
                   explainEn: "Not my style.",
                   explainEs: "No es mi estilo."
                 }
               ]
             },
             {
               id: 'a-ch3-r5',
               context: "Zoey: 에이, 겸손 떨지 마. 너만 한 적임자가 없어.",
               contextEn: "Zoey: Oh, don't be modest. There's no one better suited than you.",
               contextEs: "Zoey: Oh, no seas modesto. No hay nadie más adecuado que tú.",
               intent: "알겠어. 한번 '심사숙고해볼게'.",
               intentEn: "Okay. I'll 'mull it over'.",
               intentEs: "Está bien. Lo 'pensaré detenidamente'.",
               options: [
                 { 
                   text: "I'll mull it over.", 
                   correct: true, 
                   explain: "'Mull over'는 곰곰이 생각하다는 숙어.",
                   explainEn: "'Mull over' is an idiom meaning to think carefully.",
                   explainEs: "'Mull over' es un modismo que significa pensar cuidadosamente."
                 },
                 { 
                   text: "I think deep.", 
                   correct: false, 
                   explain: "깊게 생각한다.",
                   explainEn: "I think deeply.",
                   explainEs: "Pienso profundamente."
                 },
                 { 
                   text: "I will see.", 
                   correct: false, 
                   explain: "두고 보겠다.",
                   explainEn: "I'll see.",
                   explainEs: "Ya veré."
                 }
               ]
             }
          ]
        },
        {
          id: 4,
          title: "전시회 관람",
          titleEn: "Exhibition Visit",
          titleEs: "Visita a Exposición",
          description: "현대 미술 전시회에서 작품을 감상합니다.",
          descriptionEn: "Appreciating works at a modern art exhibition.",
          descriptionEs: "Apreciando obras en una exposición de arte moderno.",
          rounds: [
             {
               id: 'a-ch4-r1',
               context: "Zoey: 이 그림 좀 봐. 작가의 의도가 뭐라고 생각해?",
               contextEn: "Zoey: Look at this painting. What do you think is the artist's intention?",
               contextEs: "Zoey: Mira esta pintura. ¿Cuál crees que es la intención del artista?",
               intent: "글쎄, 좀 '난해한데'.",
               intentEn: "Well, it's a bit 'abstract'.",
               intentEs: "Bueno, es un poco 'abstracto'.",
               options: [
                 { 
                   text: "It's a bit abstract.", 
                   correct: true, 
                   explain: "추상적이다, 난해하다는 뜻.",
                   explainEn: "It means abstract, hard to understand.",
                   explainEs: "Significa abstracto, difícil de entender."
                 },
                 { 
                   text: "It is hard.", 
                   correct: false, 
                   explain: "단단하다는 건지 어렵다는 건지 모호해.",
                   explainEn: "Ambiguous - hard as in solid or difficult?",
                   explainEs: "Ambiguo - ¿duro como sólido o difícil?"
                 },
                 { 
                   text: "I don't know.", 
                   correct: false, 
                   explain: "모른다는 말은 대화를 끊어버려.",
                   explainEn: "Saying 'I don't know' cuts off the conversation.",
                   explainEs: "Decir 'no sé' corta la conversación."
                 }
               ]
             },
             {
               id: 'a-ch4-r2',
               context: "Zoey: 혼란스러운 내면세계를 표현한 것 같지 않아?",
               contextEn: "Zoey: Doesn't it seem like it expresses a chaotic inner world?",
               contextEs: "Zoey: ¿No parece que expresa un mundo interior caótico?",
               intent: "듣고 보니 그렇네. 색감이 아주 '강렬해'.",
               intentEn: "Now that I hear it, yes. The colors are very 'striking'.",
               intentEs: "Ahora que lo escucho, sí. Los colores son muy 'llamativos'.",
               options: [
                 { 
                   text: "The colors are striking.", 
                   correct: true, 
                   explain: "'Striking'은 눈에 띄는, 강렬한 인상을 주는 뜻.",
                   explainEn: "'Striking' means eye-catching, giving a strong impression.",
                   explainEs: "'Striking' significa llamativo, dando una impresión fuerte."
                 },
                 { 
                   text: "Colors are strong.", 
                   correct: false, 
                   explain: "색이 힘이 세다?",
                   explainEn: "Colors are strong?",
                   explainEs: "¿Los colores son fuertes?"
                 },
                 { 
                   text: "Very red and blue.", 
                   correct: false, 
                   explain: "너무 일차원적이야.",
                   explainEn: "Too one-dimensional.",
                   explainEs: "Demasiado unidimensional."
                 }
               ]
             },
             {
               id: 'a-ch4-r3',
               context: "Zoey: 난 이런 현대 미술이 좋더라. 정답이 없잖아.",
               contextEn: "Zoey: I like this kind of modern art. There's no right answer.",
               contextEs: "Zoey: Me gusta este tipo de arte moderno. No hay respuesta correcta.",
               intent: "맞아. 해석하기 '나름이지'.",
               intentEn: "Right. It's 'open to interpretation'.",
               intentEs: "Cierto. Está 'abierto a la interpretación'.",
               options: [
                 { 
                   text: "It's open to interpretation.", 
                   correct: true, 
                   explain: "해석의 여지가 열려있다는 뜻.",
                   explainEn: "It means there's room for interpretation.",
                   explainEs: "Significa que hay espacio para la interpretación."
                 },
                 { 
                   text: "Depends on you.", 
                   correct: false, 
                   explain: "너에게 달렸다?",
                   explainEn: "Depends on you?",
                   explainEs: "¿Depende de ti?"
                 },
                 { 
                   text: "You can think anything.", 
                   correct: false, 
                   explain: "아무거나 생각해도 돼.",
                   explainEn: "You can think anything.",
                   explainEs: "Puedes pensar cualquier cosa."
                 }
               ]
             },
             {
               id: 'a-ch4-r4',
               context: "Zoey: 저쪽 조형물도 보러 가자. 되게 독특하게 생겼어.",
               contextEn: "Zoey: Let's go see that sculpture over there. It looks really unique.",
               contextEs: "Zoey: Vamos a ver esa escultura de allí. Se ve realmente única.",
               intent: "저건 정말 '파격적인데'.",
               intentEn: "That's truly 'avant-garde'.",
               intentEs: "Eso es verdaderamente 'vanguardista'.",
               options: [
                 { 
                   text: "That's truly avant-garde.", 
                   correct: true, 
                   explain: "'Avant-garde'는 전위적인, 파격적인 예술을 뜻해.",
                   explainEn: "'Avant-garde' means cutting-edge, groundbreaking art.",
                   explainEs: "'Avant-garde' significa arte vanguardista, innovador."
                 },
                 { 
                   text: "That is crazy.", 
                   correct: false, 
                   explain: "미쳤다는 표현은 좀 가벼워.",
                   explainEn: "Saying 'crazy' is a bit too casual.",
                   explainEs: "Decir 'loco' es un poco demasiado casual."
                 },
                 { 
                   text: "Very strange.", 
                   correct: false, 
                   explain: "이상하다는 부정적일 수 있어.",
                   explainEn: "Saying 'strange' can be negative.",
                   explainEs: "Decir 'extraño' puede ser negativo."
                 }
               ]
             },
             {
               id: 'a-ch4-r5',
               context: "Zoey: 오늘 전시회 오길 잘했다. 영감을 많이 받았어.",
               contextEn: "Zoey: I'm glad we came today. I got a lot of inspiration.",
               contextEs: "Zoey: Me alegro de que hayamos venido hoy. Recibí mucha inspiración.",
               intent: "나도. 가끔 이런 '문화생활'이 필요해.",
               intentEn: "Me too. We need this kind of 'cultural exposure' sometimes.",
               intentEs: "Yo también. A veces necesitamos este tipo de 'exposición cultural'.",
               options: [
                 { 
                   text: "We need this kind of cultural exposure.", 
                   correct: true, 
                   explain: "문화적 노출, 즉 문화생활을 의미.",
                   explainEn: "Cultural exposure, meaning cultural activities.",
                   explainEs: "Exposición cultural, es decir, actividades culturales."
                 },
                 { 
                   text: "Culture life is good.", 
                   correct: false, 
                   explain: "콩글리시.",
                   explainEn: "Konglish.",
                   explainEs: "Konglish."
                 },
                 { 
                   text: "Art makes me happy.", 
                   correct: false, 
                   explain: "예술은 날 행복하게 해.",
                   explainEn: "Art makes me happy.",
                   explainEs: "El arte me hace feliz."
                 }
               ]
             }
          ]
        },
        {
          id: 5,
          title: "미래 계획",
          titleEn: "Future Plans",
          titleEs: "Planes Futuros",
          description: "10년 후의 모습에 대해 이야기합니다.",
          descriptionEn: "Talking about what we'll be like in 10 years.",
          descriptionEs: "Hablando sobre cómo seremos en 10 años.",
          rounds: [
             {
               id: 'a-ch5-r1',
               context: "Zoey: 넌 10년 뒤에 뭐 하고 있을 것 같아?",
               contextEn: "Zoey: What do you think you'll be doing in 10 years?",
               contextEs: "Zoey: ¿Qué crees que estarás haciendo en 10 años?",
               intent: "글쎄, 아직 '감도 안 잡혀'.",
               intentEn: "Well, I 'haven't got a clue' yet.",
               intentEs: "Bueno, todavía 'no tengo ni idea'.",
               options: [
                 { 
                   text: "I haven't got a clue.", 
                   correct: true, 
                   explain: "전혀 모르겠다는 뜻.",
                   explainEn: "It means I have no idea at all.",
                   explainEs: "Significa que no tengo idea en absoluto."
                 },
                 { 
                   text: "I don't feel it.", 
                   correct: false, 
                   explain: "느껴지지 않는다?",
                   explainEn: "I don't feel it?",
                   explainEs: "¿No lo siento?"
                 },
                 { 
                   text: "No idea.", 
                   correct: false, 
                   explain: "너무 짧아.",
                   explainEn: "Too short.",
                   explainEs: "Demasiado corto."
                 }
               ]
             },
             {
               id: 'a-ch5-r2',
               context: "Zoey: 난 세계 여행을 다니며 글을 쓰고 싶어.",
               contextEn: "Zoey: I want to travel the world and write.",
               contextEs: "Zoey: Quiero viajar por el mundo y escribir.",
               intent: "멋지다! 넌 항상 '큰 꿈을 꾸는구나'.",
               intentEn: "Cool! You always 'dream big'.",
               intentEs: "¡Genial! Siempre 'sueñas en grande'.",
               options: [
                 { 
                   text: "You always dream big.", 
                   correct: true, 
                   explain: "포부가 크다는 칭찬.",
                   explainEn: "A compliment meaning you have big ambitions.",
                   explainEs: "Un cumplido que significa que tienes grandes ambiciones."
                 },
                 { 
                   text: "You have big dream.", 
                   correct: false, 
                   explain: "큰 꿈을 가지고 있다.",
                   explainEn: "You have a big dream.",
                   explainEs: "Tienes un gran sueño."
                 },
                 { 
                   text: "Your dream is huge.", 
                   correct: false, 
                   explain: "꿈의 크기가 거대하다.",
                   explainEn: "The size of your dream is huge.",
                   explainEs: "El tamaño de tu sueño es enorme."
                 }
               ]
             },
             {
               id: 'a-ch5-r3',
               context: "Zoey: 꿈이라도 크게 가져야지. 현실에 안주하면 발전이 없잖아.",
               contextEn: "Zoey: Might as well dream big. Settling for reality gets you nowhere.",
               contextEs: "Zoey: Más vale soñar en grande. Conformarse con la realidad no te lleva a ninguna parte.",
               intent: "맞는 말이야. '현실에 안주하면 안 되지'.",
               intentEn: "You're right. We shouldn't 'settle for the status quo'.",
               intentEs: "Tienes razón. No deberíamos 'conformarnos con el statu quo'.",
               options: [
                 { 
                   text: "We shouldn't settle for the status quo.", 
                   correct: true, 
                   explain: "'Status quo'는 현재의 상태, 현상을 뜻해.",
                   explainEn: "'Status quo' means the current state of affairs.",
                   explainEs: "'Status quo' significa el estado actual de las cosas."
                 },
                 { 
                   text: "Don't sit in reality.", 
                   correct: false, 
                   explain: "현실에 앉아있지 마라?",
                   explainEn: "Don't sit in reality?",
                   explainEs: "¿No te sientes en la realidad?"
                 },
                 { 
                   text: "No change is bad.", 
                   correct: false, 
                   explain: "변화 없음은 나쁘다.",
                   explainEn: "No change is bad.",
                   explainEs: "Sin cambio es malo."
                 }
               ]
             },
             {
               id: 'a-ch5-r4',
               context: "Zoey: 우리 서로의 꿈을 응원해주자. 성공하면 모른 척하기 없기다?",
               contextEn: "Zoey: Let's support each other's dreams. Don't act like strangers if you succeed, okay?",
               contextEs: "Zoey: Apoyemos los sueños del otro. No actúes como extraños si tienes éxito, ¿de acuerdo?",
               intent: "당연하지. 우린 '운명 공동체'잖아.",
               intentEn: "Of course. We're 'in this together'.",
               intentEs: "Por supuesto. Estamos 'juntos en esto'.",
               options: [
                 { 
                   text: "We're in this together.", 
                   correct: true, 
                   explain: "우린 한배를 탔다는 뜻.",
                   explainEn: "It means we're in the same boat.",
                   explainEs: "Significa que estamos en el mismo barco."
                 },
                 { 
                   text: "We are destiny team.", 
                   correct: false, 
                   explain: "운명의 팀?",
                   explainEn: "Destiny team?",
                   explainEs: "¿Equipo del destino?"
                 },
                 { 
                   text: "You and me are one.", 
                   correct: false, 
                   explain: "너와 나는 하나다.",
                   explainEn: "You and I are one.",
                   explainEs: "Tú y yo somos uno."
                 }
               ]
             },
             {
               id: 'a-ch5-r5',
               context: "Zoey: 좋아! 10년 뒤에 건배할 날을 위해, 치어스!",
               contextEn: "Zoey: Good! To the day we toast in 10 years, cheers!",
               contextEs: "Zoey: ¡Bien! Por el día que brindemos en 10 años, ¡salud!",
               intent: "우리의 밝은 미래를 '위하여'!",
               intentEn: "'Here's to' our bright future!",
               intentEs: "'¡Por' nuestro brillante futuro!",
               options: [
                 { 
                   text: "Here's to our bright future!", 
                   correct: true, 
                   explain: "'Here's to ~'는 건배사로 ~를 위하여라는 뜻.",
                   explainEn: "'Here's to ~' is a toast meaning 'for ~'.",
                   explainEs: "'Here's to ~' es un brindis que significa 'por ~'."
                 },
                 { 
                   text: "For our future!", 
                   correct: false, 
                   explain: "나쁘지 않지만 Here's to가 더 멋져.",
                   explainEn: "Not bad but 'Here's to' is cooler.",
                   explainEs: "No está mal pero 'Here's to' es más genial."
                 },
                 { 
                   text: "Cheers future!", 
                   correct: false, 
                   explain: "미래 안녕?",
                   explainEn: "Hello future?",
                   explainEs: "¿Hola futuro?"
                 }
               ]
             }
          ]
        }
      ]
    }
  },
  daniel: {
    id: 'daniel',
    name: 'Daniel',
    role: 'Partner',
    desc: '스타트업 창업부터 성공까지 함께하는 동료',
    descEn: 'A colleague who accompanies you from startup to success',
    descEs: 'Un colega que te acompaña desde el inicio hasta el éxito',
    avatarSeed: 'Daniel',
    colorTheme: 'bg-blue-100',
    tagColor: 'bg-blue-200 text-blue-700',
    levels: {
      beginner: [
        {
          id: 1,
          title: "첫 출근",
          titleEn: "First Day at Work",
          titleEs: "Primer Día en el Trabajo",
          description: "Daniel과 첫 인사를 나눕니다.",
          descriptionEn: "Exchanging first greetings with Daniel.",
          descriptionEs: "Intercambiando primeros saludos con Daniel.",
          rounds: [
            {
              id: 'd-b-r1',
              context: "Daniel: 안녕하세요, {user}씨. 오늘 첫 출근이죠? 환영합니다.",
              contextEn: "Daniel: Hello, {user}. First day today, right? Welcome.",
              contextEs: "Daniel: Hola, {user}. Primer día hoy, ¿verdad? Bienvenido.",
              intent: "감사합니다. 함께 일하게 되어 '기뻐요'라고 하려면?",
              intentEn: "Thank you. How do I say I'm 'glad' to work together?",
              intentEs: "Gracias. ¿Cómo digo que estoy 'contento' de trabajar juntos?",
              options: [
                { 
                  text: "I'm glad to be here.", 
                  correct: true, 
                  explain: "여기 와서 기쁘다는 정중하고 자연스러운 표현.",
                  explainEn: "A polite and natural expression meaning you're glad to be here.",
                  explainEs: "Una expresión educada y natural que significa que estás contento de estar aquí."
                },
                { 
                  text: "I am happy working.", 
                  correct: false, 
                  explain: "문법이 조금 어색해.",
                  explainEn: "The grammar is a bit awkward.",
                  explainEs: "La gramática es un poco incómoda."
                },
                { 
                  text: "It is fun to work.", 
                  correct: false, 
                  explain: "일이 재밌다는 건 아직 모르잖아?",
                  explainEn: "You don't know if work is fun yet?",
                  explainEs: "¿Aún no sabes si el trabajo es divertido?"
                }
              ]
            },
            {
              id: 'd-b-r2',
              context: "Daniel: 우리 회사는 좀 바빠요. 괜찮으시겠어요?",
              contextEn: "Daniel: Our company is a bit busy. Will you be okay?",
              contextEs: "Daniel: Nuestra empresa está un poco ocupada. ¿Estarás bien?",
              intent: "네, 저는 '열심히 할 준비가' 되어 있어요.",
              intentEn: "Yes, I'm 'ready to work hard'.",
              intentEs: "Sí, estoy 'listo para trabajar duro'.",
              options: [
                { 
                  text: "I'm ready to work hard.", 
                  correct: true, 
                  explain: "열심히 일할 준비가 됐다는 정석 표현.",
                  explainEn: "The standard expression meaning you're ready to work hard.",
                  explainEs: "La expresión estándar que significa que estás listo para trabajar duro."
                },
                { 
                  text: "I can run very fast.", 
                  correct: false, 
                  explain: "달리기를 잘한다고?",
                  explainEn: "You can run very fast?",
                  explainEs: "¿Puedes correr muy rápido?"
                },
                { 
                  text: "I do not like busy.", 
                  correct: false, 
                  explain: "바쁜 거 싫다고 하면 안 돼!",
                  explainEn: "Don't say you don't like being busy!",
                  explainEs: "¡No digas que no te gusta estar ocupado!"
                }
              ]
            },
            {
              id: 'd-b-r3',
              context: "Daniel: 좋아요. 모르는 게 있으면 언제든 물어보세요.",
              contextEn: "Daniel: Good. Ask me anytime if you don't know something.",
              contextEs: "Daniel: Bien. Pregúntame en cualquier momento si no sabes algo.",
              intent: "알겠습니다. '최선을 다할게요'라고 답하려면?",
              intentEn: "Understood. How do I say I'll 'do my best'?",
              intentEs: "Entendido. ¿Cómo digo que 'haré mi mejor esfuerzo'?",
              options: [
                { 
                  text: "I will do my best.", 
                  correct: true, 
                  explain: "최선을 다하겠다는 가장 일반적인 표현.",
                  explainEn: "The most common expression meaning you'll do your best.",
                  explainEs: "La expresión más común que significa que harás tu mejor esfuerzo."
                },
                { 
                  text: "I will do everything.", 
                  correct: false, 
                  explain: "모든 걸 다 하겠다는 건 무리야.",
                  explainEn: "Saying you'll do everything is too much.",
                  explainEs: "Decir que harás todo es demasiado."
                },
                { 
                  text: "I try very hard.", 
                  correct: false, 
                  explain: "노력한다는 말보단 do my best가 좋아.",
                  explainEn: "Better to say 'do my best' than 'try very hard'.",
                  explainEs: "Es mejor decir 'hacer mi mejor esfuerzo' que 'intentar muy duro'."
                }
              ]
            },
            {
              id: 'd-b-r4',
              context: "Daniel: 점심시간인데 같이 식사하실래요?",
              contextEn: "Daniel: It's lunch time. Would you like to join me?",
              contextEs: "Daniel: Es la hora del almuerzo. ¿Te gustaría acompañarme?",
              intent: "네, '좋아요(기꺼이)'라고 하려면?",
              intentEn: "Yes, how do I say 'I'd love to'?",
              intentEs: "Sí, ¿cómo digo 'me encantaría'?",
              options: [
                { 
                  text: "I'd love to.", 
                  correct: true, 
                  explain: "'I'd love to'는 제안을 기쁘게 받아들일 때 써.",
                  explainEn: "'I'd love to' is used when happily accepting a suggestion.",
                  explainEs: "'I'd love to' se usa cuando aceptas felizmente una sugerencia."
                },
                { 
                  text: "Yes I like lunch.", 
                  correct: false, 
                  explain: "점심을 좋아한다는 뜻이야.",
                  explainEn: "This means you like lunch.",
                  explainEs: "Esto significa que te gusta el almuerzo."
                },
                { 
                  text: "No thank you.", 
                  correct: false, 
                  explain: "거절하면 안 돼!",
                  explainEn: "Don't decline!",
                  explainEs: "¡No rechaces!"
                }
              ]
            },
            {
              id: 'd-b-r5',
              context: "Daniel: 앞으로 잘 지내봅시다, {user}씨.",
              contextEn: "Daniel: Let's get along well, {user}.",
              contextEs: "Daniel: Llevémonos bien, {user}.",
              intent: "네, 저를 '지켜봐 주세요'.",
              intentEn: "Yes, please 'count on me'.",
              intentEs: "Sí, por favor 'cuenta conmigo'.",
              options: [
                { 
                  text: "Count on me.", 
                  correct: true, 
                  explain: "'Count on me'는 나를 믿어달라는 뜻.",
                  explainEn: "'Count on me' means trust me, rely on me.",
                  explainEs: "'Count on me' significa confía en mí, cuenta conmigo."
                },
                { 
                  text: "Look at me.", 
                  correct: false, 
                  explain: "나를 쳐다보라는 뜻.",
                  explainEn: "This means look at me.",
                  explainEs: "Esto significa mírame."
                },
                { 
                  text: "Watch my body.", 
                  correct: false, 
                  explain: "몸을 보라고? 이상해!",
                  explainEn: "Watch my body? Weird!",
                  explainEs: "¿Vigilar mi cuerpo? ¡Extraño!"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "회의 준비",
          titleEn: "Meeting Preparation",
          titleEs: "Preparación de Reunión",
          description: "중요한 회의를 위해 회의실을 예약하고 자료를 준비합니다.",
          descriptionEn: "Booking a meeting room and preparing materials for an important meeting.",
          descriptionEs: "Reservando una sala de reuniones y preparando materiales para una reunión importante.",
          rounds: [
             {
               id: 'd-b-ch2-r1',
               context: "Daniel: {user}씨, 3시에 회의 있는 거 아시죠? 회의실 예약하셨나요?",
               contextEn: "Daniel: {user}, you know we have a meeting at 3, right? Did you book the room?",
               contextEs: "Daniel: {user}, sabes que tenemos una reunión a las 3, ¿verdad? ¿Reservaste la sala?",
               intent: "아, 깜빡했어요. 지금 바로 '확인해볼게요'.",
               intentEn: "Oh, I forgot. I'll 'check it right away'.",
               intentEs: "Oh, lo olvidé. Lo 'verificaré de inmediato'.",
               options: [
                 { 
                   text: "I'll check it right away.", 
                   correct: true, 
                   explain: "지금 당장 확인하겠다는 신속한 표현.",
                   explainEn: "A prompt expression meaning you'll check immediately.",
                   explainEs: "Una expresión rápida que significa que verificarás de inmediato."
                 },
                 { 
                   text: "I forgot, sorry.", 
                   correct: false, 
                   explain: "죄송하다는 말보다 해결책을 제시해야지.",
                   explainEn: "Should offer a solution rather than just apologizing.",
                   explainEs: "Debería ofrecer una solución en lugar de solo disculparse."
                 },
                 { 
                   text: "Room is empty.", 
                   correct: false, 
                   explain: "확인도 안 하고 비었다고?",
                   explainEn: "Saying it's empty without checking?",
                   explainEs: "¿Decir que está vacía sin verificar?"
                 }
               ]
             },
             {
               id: 'd-b-ch2-r2',
               context: "Daniel: A회의실이 비어있을 거예요. 얼른 잡아주세요.",
               contextEn: "Daniel: Conference Room A should be empty. Please grab it quickly.",
               contextEs: "Daniel: La Sala de Reuniones A debería estar vacía. Por favor, tómala rápidamente.",
               intent: "네, 제가 '처리하겠습니다'.",
               intentEn: "Yes, I'm 'on it'.",
               intentEs: "Sí, 'estoy en ello'.",
               options: [
                 { 
                   text: "I'm on it.", 
                   correct: true, 
                   explain: "지금 그 일을 처리 중이라는 뜻.",
                   explainEn: "It means you're handling it right now.",
                   explainEs: "Significa que lo estás manejando ahora mismo."
                 },
                 { 
                   text: "I do it.", 
                   correct: false, 
                   explain: "너무 단순해.",
                   explainEn: "Too simple.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "I handle it.", 
                   correct: false, 
                   explain: "문법적으로 살짝 어색.",
                   explainEn: "Grammatically a bit awkward.",
                   explainEs: "Gramaticalmente un poco incómodo."
                 }
               ]
             },
             {
               id: 'd-b-ch2-r3',
               context: "Daniel: 그리고 회의 자료도 5부 출력해주세요.",
               contextEn: "Daniel: Also, please print 5 copies of the meeting materials.",
               contextEs: "Daniel: También, por favor imprime 5 copias de los materiales de la reunión.",
               intent: "알겠습니다. '문제없어요'.",
               intentEn: "Understood. 'No problem'.",
               intentEs: "Entendido. 'No hay problema'.",
               options: [
                 { 
                   text: "No problem.", 
                   correct: true, 
                   explain: "가장 흔하게 쓰이는 수락 표현.",
                   explainEn: "The most commonly used expression of acceptance.",
                   explainEs: "La expresión de aceptación más comúnmente usada."
                 },
                 { 
                   text: "It is easy.", 
                   correct: false, 
                   explain: "쉽다고 거만 떨면 안 돼.",
                   explainEn: "Don't act arrogant saying it's easy.",
                   explainEs: "No actúes arrogante diciendo que es fácil."
                 },
                 { 
                   text: "I have printer.", 
                   correct: false, 
                   explain: "프린터 있다는 자랑?",
                   explainEn: "Bragging about having a printer?",
                   explainEs: "¿Presumiendo de tener una impresora?"
                 }
               ]
             },
             {
               id: 'd-b-ch2-r4',
               context: "Daniel: 프린터 잉크가 부족할 수도 있으니 확인해주시고요.",
               contextEn: "Daniel: Check the printer ink, it might be running low.",
               contextEs: "Daniel: Verifica la tinta de la impresora, podría estar agotándose.",
               intent: "네, '명심할게요'.",
               intentEn: "Yes, I'll 'keep that in mind'.",
               intentEs: "Sí, 'lo tendré en cuenta'.",
               options: [
                 { 
                   text: "I'll keep that in mind.", 
                   correct: true, 
                   explain: "기억해두겠다, 유의하겠다는 뜻.",
                   explainEn: "It means you'll remember and be mindful of it.",
                   explainEs: "Significa que lo recordarás y lo tendrás en cuenta."
                 },
                 { 
                   text: "I remember ink.", 
                   correct: false, 
                   explain: "잉크를 기억한다?",
                   explainEn: "I remember ink?",
                   explainEs: "¿Recuerdo la tinta?"
                 },
                 { 
                   text: "My mind is open.", 
                   correct: false, 
                   explain: "내 마음은 열려있다.",
                   explainEn: "My mind is open.",
                   explainEs: "Mi mente está abierta."
                 }
               ]
             },
             {
               id: 'd-b-ch2-r5',
               context: "Daniel: 꼼꼼하시네요. 준비해주셔서 감사합니다.",
               contextEn: "Daniel: You're thorough. Thanks for preparing.",
               contextEs: "Daniel: Eres minucioso. Gracias por preparar.",
               intent: "천만에요. 제 '일인걸요'.",
               intentEn: "You're welcome. It's 'my job'.",
               intentEs: "De nada. Es 'mi trabajo'.",
               options: [
                 { 
                   text: "It's my job.", 
                   correct: true, 
                   explain: "당연히 해야 할 일이라는 겸손한 표현.",
                   explainEn: "A humble expression meaning it's what I should do.",
                   explainEs: "Una expresión humilde que significa que es lo que debo hacer."
                 },
                 { 
                   text: "I am good worker.", 
                   correct: false, 
                   explain: "자화자찬.",
                   explainEn: "Self-praise.",
                   explainEs: "Autoelogio."
                 },
                 { 
                   text: "You are welcome.", 
                   correct: true, 
                   explain: "나쁘지 않지만 It's my job이 더 프로패셔널해.",
                   explainEn: "Not bad but 'It's my job' is more professional.",
                   explainEs: "No está mal pero 'Es mi trabajo' es más profesional."
                 }
               ]
             }
          ]
        },
        {
          id: 3,
          title: "업무 실수",
          titleEn: "Work Mistake",
          titleEs: "Error en el Trabajo",
          description: "실수를 보고하고 사과합니다.",
          descriptionEn: "Reporting a mistake and apologizing.",
          descriptionEs: "Reportando un error y disculpándose.",
          rounds: [
             {
               id: 'd-b-ch3-r1',
               context: "Daniel: {user}씨, 이 보고서 수치가 좀 이상한데요?",
               contextEn: "Daniel: {user}, the figures in this report look a bit off.",
               contextEs: "Daniel: {user}, las cifras en este informe se ven un poco extrañas.",
               intent: "정말요? 제가 '실수한 것 같아요'.",
               intentEn: "Really? I think I 'made a mistake'.",
               intentEs: "¿De verdad? Creo que 'cometí un error'.",
               options: [
                 { 
                   text: "I think I made a mistake.", 
                   correct: true, 
                   explain: "솔직하게 실수를 인정하는 표현.",
                   explainEn: "An expression honestly admitting a mistake.",
                   explainEs: "Una expresión que admite honestamente un error."
                 },
                 { 
                   text: "It is not me.", 
                   correct: false, 
                   explain: "발뺌하면 안 돼.",
                   explainEn: "Don't try to avoid responsibility.",
                   explainEs: "No intentes evitar la responsabilidad."
                 },
                 { 
                   text: "Computer is wrong.", 
                   correct: false, 
                   explain: "컴퓨터 탓하지 마.",
                   explainEn: "Don't blame the computer.",
                   explainEs: "No culpes a la computadora."
                 }
               ]
             },
             {
               id: 'd-b-ch3-r2',
               context: "Daniel: 여기 0이 하나 빠졌네요. 큰일 날 뻔했어요.",
               contextEn: "Daniel: A zero is missing here. Could have been a disaster.",
               contextEs: "Daniel: Falta un cero aquí. Podría haber sido un desastre.",
               intent: "죄송합니다. '제 불찰입니다'.",
               intentEn: "Sorry. It's 'my fault'.",
               intentEs: "Lo siento. Es 'mi culpa'.",
               options: [
                 { 
                   text: "It's my fault.", 
                   correct: true, 
                   explain: "제 잘못이라는 명확한 사과.",
                   explainEn: "A clear apology taking responsibility.",
                   explainEs: "Una disculpa clara asumiendo la responsabilidad."
                 },
                 { 
                   text: "I am bad.", 
                   correct: false, 
                   explain: "자책하지 마.",
                   explainEn: "Don't be too hard on yourself.",
                   explainEs: "No seas demasiado duro contigo mismo."
                 },
                 { 
                   text: "Sorry for zero.", 
                   correct: false, 
                   explain: "0에 대해 미안하다?",
                   explainEn: "Sorry for the zero?",
                   explainEs: "¿Perdón por el cero?"
                 }
               ]
             },
             {
               id: 'd-b-ch3-r3',
               context: "Daniel: 다음부터는 제출하기 전에 더블 체크해주세요.",
               contextEn: "Daniel: Please double-check before submitting next time.",
               contextEs: "Daniel: Por favor, verifica dos veces antes de enviar la próxima vez.",
               intent: "네, '다신 이런 일 없을 거예요'.",
               intentEn: "Yes, 'it won't happen again'.",
               intentEs: "Sí, 'no volverá a suceder'.",
               options: [
                 { 
                   text: "It won't happen again.", 
                   correct: true, 
                   explain: "재발 방지를 약속하는 표현.",
                   explainEn: "An expression promising to prevent recurrence.",
                   explainEs: "Una expresión que promete prevenir la recurrencia."
                 },
                 { 
                   text: "I will check two times.", 
                   correct: false, 
                   explain: "Double check가 더 자연스러워.",
                   explainEn: "'Double check' is more natural.",
                   explainEs: "'Double check' es más natural."
                 },
                 { 
                   text: "No more mistakes.", 
                   correct: false, 
                   explain: "너무 짧아.",
                   explainEn: "Too short.",
                   explainEs: "Demasiado corto."
                 }
               ]
             },
             {
               id: 'd-b-ch3-r4',
               context: "Daniel: 누구나 실수는 하니까요. 너무 기죽지 마세요.",
               contextEn: "Daniel: Everyone makes mistakes. Don't be too discouraged.",
               contextEs: "Daniel: Todos cometen errores. No te desanimes demasiado.",
               intent: "이해해 주셔서 '감사합니다'.",
               intentEn: "Thank you for 'understanding'.",
               intentEs: "Gracias por 'entender'.",
               options: [
                 { 
                   text: "Thank you for understanding.", 
                   correct: true, 
                   explain: "배려에 감사하는 표현.",
                   explainEn: "An expression thanking for consideration.",
                   explainEs: "Una expresión agradeciendo la consideración."
                 },
                 { 
                   text: "Thanks for mistake.", 
                   correct: false, 
                   explain: "실수해서 고맙다?",
                   explainEn: "Thanks for the mistake?",
                   explainEs: "¿Gracias por el error?"
                 },
                 { 
                   text: "You are kind boss.", 
                   correct: false, 
                   explain: "아부하는 것 같아.",
                   explainEn: "Sounds like flattery.",
                   explainEs: "Suena a adulación."
                 }
               ]
             },
             {
               id: 'd-b-ch3-r5',
               context: "Daniel: 자, 그럼 수정해서 다시 보내주세요.",
               contextEn: "Daniel: Okay, please fix it and send it again.",
               contextEs: "Daniel: Está bien, por favor corrígelo y envíalo de nuevo.",
               intent: "네, '지금 당장' 할게요.",
               intentEn: "Yes, I'll do it 'right now'.",
               intentEs: "Sí, lo haré 'ahora mismo'.",
               options: [
                 { 
                   text: "I'll do it right now.", 
                   correct: true, 
                   explain: "즉시 실행하겠다는 뜻.",
                   explainEn: "It means you'll do it immediately.",
                   explainEs: "Significa que lo harás de inmediato."
                 },
                 { 
                   text: "I do tomorrow.", 
                   correct: false, 
                   explain: "내일 하면 안 돼!",
                   explainEn: "Can't do it tomorrow!",
                   explainEs: "¡No puedo hacerlo mañana!"
                 },
                 { 
                   text: "Wait a minute.", 
                   correct: false, 
                   explain: "기다리라니?",
                   explainEn: "Wait?",
                   explainEs: "¿Esperar?"
                 }
               ]
             }
          ]
        },
        {
          id: 4,
          title: "야근",
          titleEn: "Working Late",
          titleEs: "Trabajando Tarde",
          description: "늦은 밤까지 남아서 일을 마무리합니다.",
          descriptionEn: "Staying late to finish work.",
          descriptionEs: "Quedándose hasta tarde para terminar el trabajo.",
          rounds: [
             {
               id: 'd-b-ch4-r1',
               context: "Daniel: 아직 퇴근 안 했어요? 9시가 넘었는데.",
               contextEn: "Daniel: You haven't left yet? It's past 9.",
               contextEs: "Daniel: ¿Aún no te has ido? Ya pasaron las 9.",
               intent: "네, 할 일이 '조금 남아서요'.",
               intentEn: "Yes, I have 'a bit left to do'.",
               intentEs: "Sí, me queda 'un poco por hacer'.",
               options: [
                 { 
                   text: "I have a bit left to do.", 
                   correct: true, 
                   explain: "일이 조금 남았다는 뜻.",
                   explainEn: "It means there's a bit of work left.",
                   explainEs: "Significa que queda un poco de trabajo."
                 },
                 { 
                   text: "Work is many.", 
                   correct: false, 
                   explain: "일이 많다? 문법 오류.",
                   explainEn: "Work is many? Grammar error.",
                   explainEs: "¿El trabajo es mucho? Error gramatical."
                 },
                 { 
                   text: "I like office.", 
                   correct: false, 
                   explain: "사무실을 좋아해서 안 가는 건 아니지.",
                   explainEn: "You're not staying because you like the office.",
                   explainEs: "No te quedas porque te guste la oficina."
                 }
               ]
             },
             {
               id: 'd-b-ch4-r2',
               context: "Daniel: 무리하지 말고 내일 해요. 건강이 최우선이죠.",
               contextEn: "Daniel: Don't push yourself and do it tomorrow. Health comes first.",
               contextEs: "Daniel: No te esfuerces y hazlo mañana. La salud es lo primero.",
               intent: "괜찮아요. 이것만 '끝내고 갈게요'.",
               intentEn: "It's okay. I'll 'finish this and go'.",
               intentEs: "Está bien. 'Terminaré esto y me iré'.",
               options: [
                 { 
                   text: "I'll finish this and go.", 
                   correct: true, 
                   explain: "이것만 끝내겠다는 의지.",
                   explainEn: "Determination to finish just this.",
                   explainEs: "Determinación de terminar solo esto."
                 },
                 { 
                   text: "I go after finish.", 
                   correct: false, 
                   explain: "문법적으로 어색해.",
                   explainEn: "Grammatically awkward.",
                   explainEs: "Gramaticalmente incómodo."
                 },
                 { 
                   text: "I am strong.", 
                   correct: false, 
                   explain: "난 튼튼하다.",
                   explainEn: "I am strong.",
                   explainEs: "Soy fuerte."
                 }
               ]
             },
             {
               id: 'd-b-ch4-r3',
               context: "Daniel: 그럼 저도 좀 도와줄게요. 뭐가 남았죠?",
               contextEn: "Daniel: Then let me help you. What's left?",
               contextEs: "Daniel: Entonces déjame ayudarte. ¿Qué queda?",
               intent: "정말요? 그럼 이 자료 정리 좀 '부탁드려도 될까요'?",
               intentEn: "Really? Then could you 'help me with this data'?",
               intentEs: "¿De verdad? Entonces ¿podrías 'ayudarme con estos datos'?",
               options: [
                 { 
                   text: "Could you help me with this data?", 
                   correct: true, 
                   explain: "정중하게 도움을 요청하는 표현.",
                   explainEn: "A polite expression requesting help.",
                   explainEs: "Una expresión educada pidiendo ayuda."
                 },
                 { 
                   text: "Do this for me.", 
                   correct: false, 
                   explain: "명령조야.",
                   explainEn: "Too commanding.",
                   explainEs: "Demasiado imperativo."
                 },
                 { 
                   text: "Help me data.", 
                   correct: false, 
                   explain: "데이터를 구해달라?",
                   explainEn: "Get me data?",
                   explainEs: "¿Consígueme datos?"
                 }
               ]
             },
             {
               id: 'd-b-ch4-r4',
               context: "Daniel: (30분 후) 자, 다 됐습니다. 이제 집에 가죠.",
               contextEn: "Daniel: (30 mins later) Done. Let's go home now.",
               contextEs: "Daniel: (30 minutos después) Listo. Vamos a casa ahora.",
               intent: "도와주셔서 정말 '큰 도움이 됐어요'.",
               intentEn: "You were 'a big help'.",
               intentEs: "Fuiste 'una gran ayuda'.",
               options: [
                 { 
                   text: "You were a big help.", 
                   correct: true, 
                   explain: "큰 도움이 되었다는 감사 표현.",
                   explainEn: "An expression of gratitude for being a big help.",
                   explainEs: "Una expresión de gratitud por ser una gran ayuda."
                 },
                 { 
                   text: "Big help is you.", 
                   correct: false, 
                   explain: "어순이 이상해.",
                   explainEn: "Word order is strange.",
                   explainEs: "El orden de las palabras es extraño."
                 },
                 { 
                   text: "I like your help.", 
                   correct: false, 
                   explain: "네 도움이 좋았다.",
                   explainEn: "I liked your help.",
                   explainEs: "Me gustó tu ayuda."
                 }
               ]
             },
             {
               id: 'd-b-ch4-r5',
               context: "Daniel: 가는 길에 태워다 줄게요. 타세요.",
               contextEn: "Daniel: I'll give you a ride home. Hop in.",
               contextEs: "Daniel: Te llevaré a casa. Sube.",
               intent: "와, '감사합니다'!",
               intentEn: "Wow, 'I appreciate it'!",
               intentEs: "¡Vaya, 'lo aprecio'!",
               options: [
                 { 
                   text: "I appreciate it.", 
                   correct: true, 
                   explain: "Thank you보다 조금 더 격식 있고 깊은 감사 표현.",
                   explainEn: "A slightly more formal and deeper expression of gratitude than 'Thank you'.",
                   explainEs: "Una expresión de gratitud ligeramente más formal y profunda que 'Gracias'."
                 },
                 { 
                   text: "Good car.", 
                   correct: false, 
                   explain: "차 좋네요?",
                   explainEn: "Good car?",
                   explainEs: "¿Buen coche?"
                 },
                 { 
                   text: "No thanks.", 
                   correct: false, 
                   explain: "거절은 예의가 아니지.",
                   explainEn: "Declining is impolite.",
                   explainEs: "Rechazar es descortés."
                 }
               ]
             }
          ]
        },
        {
          id: 5,
          title: "휴가 요청",
          titleEn: "Vacation Request",
          titleEs: "Solicitud de Vacaciones",
          description: "개인 사정으로 휴가를 신청합니다.",
          descriptionEn: "Requesting vacation for personal reasons.",
          descriptionEs: "Solicitando vacaciones por razones personales.",
          rounds: [
             {
               id: 'd-b-ch5-r1',
               context: "Daniel: {user}씨, 무슨 일 있어요? 표정이 안 좋아 보여요.",
               contextEn: "Daniel: {user}, is something wrong? You don't look good.",
               contextEs: "Daniel: {user}, ¿pasa algo? No te ves bien.",
               intent: "사실, 몸이 좀 '안 좋아요'.",
               intentEn: "Actually, I'm 'not feeling well'.",
               intentEs: "En realidad, no me 'siento bien'.",
               options: [
                 { 
                   text: "I'm not feeling well.", 
                   correct: true, 
                   explain: "몸 상태가 안 좋다는 일반적인 표현.",
                   explainEn: "A common expression meaning you're not feeling well.",
                   explainEs: "Una expresión común que significa que no te sientes bien."
                 },
                 { 
                   text: "My body is bad.", 
                   correct: false, 
                   explain: "몸매가 안 좋다는 뜻일 수도.",
                   explainEn: "Could mean your body shape is bad.",
                   explainEs: "Podría significar que tu forma corporal es mala."
                 },
                 { 
                   text: "I hate feeling.", 
                   correct: false, 
                   explain: "느낌이 싫다?",
                   explainEn: "I hate feeling?",
                   explainEs: "¿Odio sentir?"
                 }
               ]
             },
             {
               id: 'd-b-ch5-r2',
               context: "Daniel: 저런, 감기인가요? 병원은 다녀왔어요?",
               contextEn: "Daniel: Oh no, is it a cold? Did you see a doctor?",
               contextEs: "Daniel: Oh no, ¿es un resfriado? ¿Fuiste al médico?",
               intent: "아뇨, 아직이요. 그래서 내일 '연차를 쓰고 싶어요'.",
               intentEn: "No, not yet. So I'd like to 'take a day off tomorrow'.",
               intentEs: "No, aún no. Así que me gustaría 'tomar un día libre mañana'.",
               options: [
                 { 
                   text: "I'd like to take a day off tomorrow.", 
                   correct: true, 
                   explain: "'Take a day off'는 하루 쉬다는 뜻.",
                   explainEn: "'Take a day off' means to take a day off work.",
                   explainEs: "'Take a day off' significa tomarse un día libre del trabajo."
                 },
                 { 
                   text: "I want holiday.", 
                   correct: false, 
                   explain: "휴일(공휴일)을 원한다?",
                   explainEn: "You want a holiday (public holiday)?",
                   explainEs: "¿Quieres un día festivo (feriado público)?"
                 },
                 { 
                   text: "No work tomorrow.", 
                   correct: false, 
                   explain: "내일 일 안 해! 통보식이야.",
                   explainEn: "No work tomorrow! Too direct.",
                   explainEs: "¡No trabajo mañana! Demasiado directo."
                 }
               ]
             },
             {
               id: 'd-b-ch5-r3',
               context: "Daniel: 물론이죠. 아픈데 쉬어야죠. 결재 올리세요.",
               contextEn: "Daniel: Of course. You should rest if you're sick. Submit the request.",
               contextEs: "Daniel: Por supuesto. Deberías descansar si estás enfermo. Envía la solicitud.",
               intent: "이해해 주셔서 '감사해요'.",
               intentEn: "Thanks for 'understanding'.",
               intentEs: "Gracias por 'entender'.",
               options: [
                 { 
                   text: "Thanks for understanding.", 
                   correct: true, 
                   explain: "상황을 이해해준 것에 대한 감사.",
                   explainEn: "Thanks for understanding the situation.",
                   explainEs: "Gracias por entender la situación."
                 },
                 { 
                   text: "You understand me.", 
                   correct: false, 
                   explain: "평서문.",
                   explainEn: "A declarative sentence.",
                   explainEs: "Una oración declarativa."
                 },
                 { 
                   text: "Good boss.", 
                   correct: false, 
                   explain: "좋은 상사다.",
                   explainEn: "Good boss.",
                   explainEs: "Buen jefe."
                 }
               ]
             },
             {
               id: 'd-b-ch5-r4',
               context: "Daniel: 업무 걱정은 말고 푹 쉬다 오세요.",
               contextEn: "Daniel: Don't worry about work and get some rest.",
               contextEs: "Daniel: No te preocupes por el trabajo y descansa bien.",
               intent: "네, 푹 쉬고 '충전해서 올게요'.",
               intentEn: "Yes, I'll rest well and come back 'recharged'.",
               intentEs: "Sí, descansaré bien y volveré 'recargado'.",
               options: [
                 { 
                   text: "I'll come back recharged.", 
                   correct: true, 
                   explain: "재충전해서 돌아오겠다는 뜻.",
                   explainEn: "It means you'll come back recharged.",
                   explainEs: "Significa que volverás recargado."
                 },
                 { 
                   text: "I come back battery.", 
                   correct: false, 
                   explain: "배터리로 돌아오겠다?",
                   explainEn: "I'll come back as a battery?",
                   explainEs: "¿Volveré como una batería?"
                 },
                 { 
                   text: "I sleep all day.", 
                   correct: false, 
                   explain: "하루 종일 자겠다.",
                   explainEn: "I'll sleep all day.",
                   explainEs: "Dormiré todo el día."
                 }
               ]
             },
             {
               id: 'd-b-ch5-r5',
               context: "Daniel: 그래요. 몸조리 잘하세요.",
               contextEn: "Daniel: Okay. Take care of yourself.",
               contextEs: "Daniel: Está bien. Cuídate.",
               intent: "네, 내일모레 '봐요'.",
               intentEn: "Yes, 'see you the day after tomorrow'.",
               intentEs: "Sí, 'nos vemos pasado mañana'.",
               options: [
                 { 
                   text: "See you the day after tomorrow.", 
                   correct: true, 
                   explain: "내일모레(이틀 뒤)에 보자는 뜻.",
                   explainEn: "It means see you the day after tomorrow (in two days).",
                   explainEs: "Significa nos vemos pasado mañana (en dos días)."
                 },
                 { 
                   text: "See you two days.", 
                   correct: false, 
                   explain: "이틀 동안 보자?",
                   explainEn: "See you for two days?",
                   explainEs: "¿Nos vemos durante dos días?"
                 },
                 { 
                   text: "Bye bye.", 
                   correct: false, 
                   explain: "너무 가벼운 인사.",
                   explainEn: "Too casual a farewell.",
                   explainEs: "Una despedida demasiado casual."
                 }
               ]
             }
          ]
        }
      ],
      intermediate: [
        {
          id: 1,
          title: "스타트업의 시작",
          titleEn: "Start of a Startup",
          titleEs: "Inicio de una Startup",
          description: "Daniel과의 첫 만남, 그리고 창업 아이디어 회의.",
          descriptionEn: "First meeting with Daniel and a startup idea discussion.",
          descriptionEs: "Primera reunión con Daniel y discusión de una idea de startup.",
          rounds: [
            {
              id: 'r1',
              context: "Daniel: 안녕하세요 {user}. 보내주신 사업계획서 잘 봤습니다. 아이디어가 꽤 흥미롭더군요.",
              contextEn: "Daniel: Hello {user}. I reviewed the business plan you sent. The idea is quite intriguing.",
              contextEs: "Daniel: Hola {user}. Revisé el plan de negocios que enviaste. La idea es bastante intrigante.",
              intent: "감사합니다. 이 프로젝트는 제 '야심작'이라고 소개하려면?",
              intentEn: "Thank you. How do I introduce this project as my 'brainchild'?",
              intentEs: "Gracias. ¿Cómo presento este proyecto como mi 'obra maestra'?",
              options: [
                { 
                  text: "This is my brainchild.", 
                  correct: true, 
                  explain: "'Brainchild'는 독창적인 아이디어나 발명품을 자식에 비유한 말이야.",
                  explainEn: "'Brainchild' is a metaphor comparing an original idea or invention to a child.",
                  explainEs: "'Brainchild' es una metáfora que compara una idea original o invención con un hijo."
                },
                { 
                  text: "This is my brain baby.", 
                  correct: false, 
                  explain: "귀엽긴 하지만 정식 표현은 아냐.",
                  explainEn: "Cute but not a formal expression.",
                  explainEs: "Lindo pero no es una expresión formal."
                },
                { 
                  text: "This is my masterpiece.", 
                  correct: false, 
                  explain: "조금 거만한 느낌이 들 수 있어.",
                  explainEn: "Can sound a bit arrogant.",
                  explainEs: "Puede sonar un poco arrogante."
                }
              ]
            },
            {
              id: 'r2',
              context: "Daniel: 좋군요. 하지만 시장 경쟁이 치열할 겁니다. 기존 1등 기업을 이길 수 있을까요?",
              contextEn: "Daniel: Good. But the market competition will be fierce. Can we beat the current leader?",
              contextEs: "Daniel: Bien. Pero la competencia del mercado será feroz. ¿Podemos vencer al líder actual?",
              intent: "우리는 기존 방식의 '틀을 깰 것'이라고 자신 있게 말하려면?",
              intentEn: "How do I confidently say we'll 'break the mold' of existing methods?",
              intentEs: "¿Cómo digo con confianza que 'romperemos el molde' de los métodos existentes?",
              options: [
                { 
                  text: "We will break the mold.", 
                  correct: true, 
                  explain: "'Break the mold'는 기존의 형식을 타파하고 새로움을 만든다는 뜻.",
                  explainEn: "'Break the mold' means to break existing patterns and create something new.",
                  explainEs: "'Break the mold' significa romper los patrones existentes y crear algo nuevo."
                },
                { 
                  text: "We will break the box.", 
                  correct: false, 
                  explain: "'Think outside the box'랑 헷갈린 것 같아!",
                  explainEn: "You're confusing it with 'think outside the box'!",
                  explainEs: "¡Lo estás confundiendo con 'pensar fuera de la caja'!"
                },
                { 
                  text: "We will smash it.", 
                  correct: false, 
                  explain: "성공한다는 뜻이지 차별점을 말하는 건 아냐.",
                  explainEn: "This means we'll succeed, not that we'll be different.",
                  explainEs: "Esto significa que tendremos éxito, no que seremos diferentes."
                }
              ]
            },
            {
              id: 'r3',
              context: "Daniel: 패기 넘치시네요. 좋아요, 같이 해봅시다. 근데 초기 자금이 문제네요.",
              contextEn: "Daniel: You're full of spirit. Alright, let's do this. But initial funding is an issue.",
              contextEs: "Daniel: Estás lleno de espíritu. Está bien, hagámoslo. Pero el financiamiento inicial es un problema.",
              intent: "처음에는 돈을 아껴야죠. '최저 예산으로' 운영하자고 하려면?",
              intentEn: "We need to save money at first. How do I say let's operate 'on a shoestring'?",
              intentEs: "Necesitamos ahorrar dinero al principio. ¿Cómo digo que operemos 'con un presupuesto mínimo'?",
              options: [
                { 
                  text: "Let's operate on a shoestring.", 
                  correct: true, 
                  explain: "'On a shoestring'은 아주 적은 예산으로라는 뜻.",
                  explainEn: "'On a shoestring' means with a very small budget.",
                  explainEs: "'On a shoestring' significa con un presupuesto muy pequeño."
                },
                { 
                  text: "We start with no money.", 
                  correct: false, 
                  explain: "너무 없어 보여.",
                  explainEn: "Sounds too poor.",
                  explainEs: "Suena demasiado pobre."
                },
                { 
                  text: "Use little money.", 
                  correct: false, 
                  explain: "문법이 엉망이야.",
                  explainEn: "Grammar is a mess.",
                  explainEs: "La gramática es un desastre."
                }
              ]
            },
            {
              id: 'r4',
              context: "Daniel: 동의합니다. 그럼 이번 주말에 투자 제안서를 완성해볼까요?",
              contextEn: "Daniel: Agreed. Then shall we finish the investment proposal this weekend?",
              contextEs: "Daniel: De acuerdo. Entonces ¿terminamos la propuesta de inversión este fin de semana?",
              intent: "좋아요. 이번 주말에 '밤샘 작업' 해보자고 하려면?",
              intentEn: "Good. How do I say let's 'burn the midnight oil' this weekend?",
              intentEs: "Bien. ¿Cómo digo que 'trabajemos hasta tarde' este fin de semana?",
              options: [
                { 
                  text: "Let's burn the midnight oil.", 
                  correct: true, 
                  explain: "'Burn the midnight oil'은 밤늦게까지 공부하거나 일한다는 관용구.",
                  explainEn: "'Burn the midnight oil' is an idiom meaning to work or study late into the night.",
                  explainEs: "'Burn the midnight oil' es un modismo que significa trabajar o estudiar hasta tarde en la noche."
                },
                { 
                  text: "Let's work all night.", 
                  correct: false, 
                  explain: "너무 직설적이라 맛이 안 살아.",
                  explainEn: "Too direct, lacks flavor.",
                  explainEs: "Demasiado directo, carece de sabor."
                },
                { 
                  text: "No sleep tonight.", 
                  correct: false, 
                  explain: "단순한 사실 전달.",
                  explainEn: "Just stating a fact.",
                  explainEs: "Solo declarando un hecho."
                }
              ]
            },
            {
              id: 'r5',
              context: "Daniel: 하하, 열정이 대단하시네요. 좋습니다. 우리 한번 제대로 사고 쳐봅시다!",
              contextEn: "Daniel: Haha, your passion is amazing. Great. Let's make some waves!",
              contextEs: "Daniel: Jaja, tu pasión es increíble. Genial. ¡Hagamos olas!",
              intent: "네! 우리가 이 업계를 '뒤집어 놓을' 거라고 맞장구치려면?",
              intentEn: "Yes! How do I agree that we'll 'take it by storm'?",
              intentEs: "¡Sí! ¿Cómo estoy de acuerdo en que 'lo tomaremos por asalto'?",
              options: [
                { 
                  text: "We're gonna take it by storm!", 
                  correct: true, 
                  explain: "'Take by storm'은 기습적으로 점령하다, 강타하다는 뜻.",
                  explainEn: "'Take by storm' means to capture by surprise, make a big impact.",
                  explainEs: "'Take by storm' significa capturar por sorpresa, causar un gran impacto."
                },
                { 
                  text: "We will flip the industry.", 
                  correct: false, 
                  explain: "물리적으로 뒤집는 게 아니야.",
                  explainEn: "Not physically flipping it.",
                  explainEs: "No es voltearlo físicamente."
                },
                { 
                  text: "We are storm makers.", 
                  correct: false, 
                  explain: "우린 태풍 메이커?",
                  explainEn: "We're storm makers?",
                  explainEs: "¿Somos creadores de tormentas?"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "투자자 미팅",
          titleEn: "Investor Meeting",
          titleEs: "Reunión con Inversores",
          description: "투자자 앞에서 떨리는 프레젠테이션을 준비합니다.",
          descriptionEn: "Preparing a nervous presentation in front of investors.",
          descriptionEs: "Preparando una presentación nerviosa frente a inversores.",
          rounds: [
             {
               id: 'd-i-ch2-r1',
               context: "Daniel: 준비됐나요? 이번 투자만 받으면 우리 숨통이 트일 겁니다.",
               contextEn: "Daniel: Ready? If we get this investment, we'll have room to breathe.",
               contextEs: "Daniel: ¿Listo? Si obtenemos esta inversión, tendremos espacio para respirar.",
               intent: "너무 떨려요. 심장이 '튀어나올 것 같아요'.",
               intentEn: "I'm so nervous. My heart is 'pounding out of my chest'.",
               intentEs: "Estoy muy nervioso. Mi corazón está 'latiendo fuera de mi pecho'.",
               options: [
                 { 
                   text: "My heart is pounding out of my chest.", 
                   correct: true, 
                   explain: "심장이 가슴 밖으로 뛸 것 같다, 즉 매우 긴장된다는 뜻.",
                   explainEn: "My heart is beating so hard it feels like it's coming out of my chest, meaning I'm very nervous.",
                   explainEs: "Mi corazón late tan fuerte que parece que sale de mi pecho, es decir, estoy muy nervioso."
                 },
                 { 
                   text: "My heart jumps.", 
                   correct: false, 
                   explain: "심장이 점프한다.",
                   explainEn: "My heart jumps.",
                   explainEs: "Mi corazón salta."
                 },
                 { 
                   text: "I am scary.", 
                   correct: false, 
                   explain: "내가 무서운 사람이라는 뜻.",
                   explainEn: "This means I'm a scary person.",
                   explainEs: "Esto significa que soy una persona aterradora."
                 }
               ]
             },
             {
               id: 'd-i-ch2-r2',
               context: "Daniel: 진정하세요. 당신은 연습한 대로만 하면 됩니다. 제가 서포트할게요.",
               contextEn: "Daniel: Calm down. Just do as you practiced. I'll support you.",
               contextEs: "Daniel: Cálmate. Solo hazlo como practicaste. Te apoyaré.",
               intent: "고마워요. 당신 덕분에 '안심이 되네요'.",
               intentEn: "Thanks. That 'puts my mind at ease'.",
               intentEs: "Gracias. Eso 'me tranquiliza'.",
               options: [
                 { 
                   text: "That puts my mind at ease.", 
                   correct: true, 
                   explain: "마음이 놓인다는 표현.",
                   explainEn: "An expression meaning it makes me feel at ease.",
                   explainEs: "Una expresión que significa que me hace sentir tranquilo."
                 },
                 { 
                   text: "I feel safe.", 
                   correct: false, 
                   explain: "안전하다고 느낀다.",
                   explainEn: "I feel safe.",
                   explainEs: "Me siento seguro."
                 },
                 { 
                   text: "You are my savior.", 
                   correct: false, 
                   explain: "너무 과장됐어.",
                   explainEn: "Too exaggerated.",
                   explainEs: "Demasiado exagerado."
                 }
               ]
             },
             {
               id: 'd-i-ch2-r3',
               context: "Daniel: (발표 후) 질문 있습니까? 투자자가 우리 수익 모델을 묻네요.",
               contextEn: "Daniel: (After presentation) Any questions? The investor is asking about our revenue model.",
               contextEs: "Daniel: (Después de la presentación) ¿Alguna pregunta? El inversor pregunta sobre nuestro modelo de ingresos.",
               intent: "제가 답변할게요. 그게 우리 '핵심 포인트'니까요.",
               intentEn: "I'll answer. That's our 'key selling point'.",
               intentEs: "Responderé. Ese es nuestro 'punto de venta clave'.",
               options: [
                 { 
                   text: "That's our key selling point.", 
                   correct: true, 
                   explain: "가장 중요한 장점이라는 비즈니스 용어.",
                   explainEn: "A business term meaning the most important advantage.",
                   explainEs: "Un término comercial que significa la ventaja más importante."
                 },
                 { 
                   text: "That is main point.", 
                   correct: false, 
                   explain: "단순해.",
                   explainEn: "Too simple.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "Money comes there.", 
                   correct: false, 
                   explain: "돈이 거기서 온다.",
                   explainEn: "Money comes from there.",
                   explainEs: "El dinero viene de allí."
                 }
               ]
             },
             {
               id: 'd-i-ch2-r4',
               context: "Daniel: 완벽한 답변이었어요. 투자자가 만족한 눈치인데요?",
               contextEn: "Daniel: Perfect answer. The investor seems satisfied.",
               contextEs: "Daniel: Respuesta perfecta. El inversor parece satisfecho.",
               intent: "다행이에요. 반응이 '긍정적이네요'.",
               intentEn: "Good. The feedback is 'positive'.",
               intentEs: "Bien. La retroalimentación es 'positiva'.",
               options: [
                 { 
                   text: "The feedback is positive.", 
                   correct: true, 
                   explain: "반응이 좋다는 뜻.",
                   explainEn: "It means the response is good.",
                   explainEs: "Significa que la respuesta es buena."
                 },
                 { 
                   text: "He likes us.", 
                   correct: false, 
                   explain: "우리를 좋아한다.",
                   explainEn: "He likes us.",
                   explainEs: "Le gustamos."
                 },
                 { 
                   text: "Good vibe.", 
                   correct: false, 
                   explain: "좋은 분위기.",
                   explainEn: "Good vibe.",
                   explainEs: "Buen ambiente."
                 }
               ]
             },
             {
               id: 'd-i-ch2-r5',
               context: "Daniel: 수고했어요. 나가서 축배를 듭시다!",
               contextEn: "Daniel: Good job. Let's go out and celebrate!",
               contextEs: "Daniel: Buen trabajo. ¡Salgamos a celebrar!",
               intent: "좋아요! 오늘은 '내가 낼게요'.",
               intentEn: "Good! Tonight 'dinner is on me'.",
               intentEs: "¡Bien! Esta noche 'la cena corre por mi cuenta'.",
               options: [
                 { 
                   text: "Dinner is on me tonight.", 
                   correct: true, 
                   explain: "내가 사겠다는 뜻.",
                   explainEn: "It means I'll pay for dinner.",
                   explainEs: "Significa que pagaré la cena."
                 },
                 { 
                   text: "I pay money.", 
                   correct: false, 
                   explain: "내가 돈 낸다.",
                   explainEn: "I pay money.",
                   explainEs: "Yo pago dinero."
                 },
                 { 
                   text: "My card.", 
                   correct: false, 
                   explain: "내 카드다.",
                   explainEn: "My card.",
                   explainEs: "Mi tarjeta."
                 }
               ]
             }
          ]
        },
        {
          id: 3,
          title: "인재 영입",
          titleEn: "Talent Recruitment",
          titleEs: "Reclutamiento de Talento",
          description: "새로운 개발자를 채용하기 위해 면접을 봅니다.",
          descriptionEn: "Interviewing to hire a new developer.",
          descriptionEs: "Entrevistando para contratar un nuevo desarrollador.",
          rounds: [
             {
               id: 'd-i-ch3-r1',
               context: "Daniel: 이 지원자 이력서 봤어요? 경력이 화려한데요.",
               contextEn: "Daniel: Did you see this applicant's resume? The experience is impressive.",
               contextEs: "Daniel: ¿Viste el currículum de este candidato? La experiencia es impresionante.",
               intent: "네, 우리 팀에 '딱 맞는 인재' 같아요.",
               intentEn: "Yes, he seems to 'fit the bill' for our team.",
               intentEs: "Sí, parece 'cumplir con los requisitos' para nuestro equipo.",
               options: [
                 { 
                   text: "He fits the bill.", 
                   correct: true, 
                   explain: "'Fit the bill'은 조건에 딱 들어맞다는 뜻.",
                   explainEn: "'Fit the bill' means to meet the requirements perfectly.",
                   explainEs: "'Fit the bill' significa cumplir perfectamente con los requisitos."
                 },
                 { 
                   text: "He is right man.", 
                   correct: false, 
                   explain: "너무 단순해.",
                   explainEn: "Too simple.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "He matches good.", 
                   correct: false, 
                   explain: "문법 오류.",
                   explainEn: "Grammar error.",
                   explainEs: "Error gramatical."
                 }
               ]
             },
             {
               id: 'd-i-ch3-r2',
               context: "Daniel: 면접을 봐보니 실력은 좋은데 연봉 요구가 좀 높네요.",
               contextEn: "Daniel: Interviewed him, skills are good but salary demand is a bit high.",
               contextEs: "Daniel: Lo entrevisté, las habilidades son buenas pero la demanda salarial es un poco alta.",
               intent: "우리 예산으로는 '무리일까요'?",
               intentEn: "Is that 'out of our league' with our budget?",
               intentEs: "¿Está 'fuera de nuestro alcance' con nuestro presupuesto?",
               options: [
                 { 
                   text: "Is that out of our league?", 
                   correct: true, 
                   explain: "'Out of one's league'는 수준이나 능력 밖이라는 뜻.",
                   explainEn: "'Out of one's league' means beyond one's level or ability.",
                   explainEs: "'Out of one's league' significa más allá del nivel o capacidad de uno."
                 },
                 { 
                   text: "Is it too expensive?", 
                   correct: false, 
                   explain: "직설적이지만 관용구의 맛이 덜해.",
                   explainEn: "Direct but lacks the flavor of an idiom.",
                   explainEs: "Directo pero carece del sabor de un modismo."
                 },
                 { 
                   text: "Can we buy him?", 
                   correct: false, 
                   explain: "사람을 산다고 하면 안 돼!",
                   explainEn: "Can't say we're buying a person!",
                   explainEs: "¡No puedes decir que estamos comprando a una persona!"
                 }
               ]
             },
             {
               id: 'd-i-ch3-r3',
               context: "Daniel: 글쎄요. 스톡옵션을 제시해서 협상해볼까요?",
               contextEn: "Daniel: Well. Should we try negotiating with stock options?",
               contextEs: "Daniel: Bueno. ¿Deberíamos intentar negociar con opciones sobre acciones?",
               intent: "좋은 생각이에요. '중간 지점을 찾아보죠'.",
               intentEn: "Good idea. Let's 'meet in the middle'.",
               intentEs: "Buena idea. 'Encontremos un punto medio'.",
               options: [
                 { 
                   text: "Let's meet in the middle.", 
                   correct: true, 
                   explain: "서로 양보하여 타협하자는 뜻.",
                   explainEn: "It means to compromise by both sides giving in.",
                   explainEs: "Significa llegar a un compromiso cediendo ambas partes."
                 },
                 { 
                   text: "Find center point.", 
                   correct: false, 
                   explain: "중심점을 찾다?",
                   explainEn: "Find the center point?",
                   explainEs: "¿Encontrar el punto central?"
                 },
                 { 
                   text: "Cut salary half.", 
                   correct: false, 
                   explain: "반으로 깎으면 도망가.",
                   explainEn: "If we cut it in half, he'll run away.",
                   explainEs: "Si lo cortamos a la mitad, se escapará."
                 }
               ]
             },
             {
               id: 'd-i-ch3-r4',
               context: "Daniel: 다행히 제안을 받아들였어요. 다음 주부터 출근한대요.",
               contextEn: "Daniel: Luckily he accepted. Starts next week.",
               contextEs: "Daniel: Por suerte lo aceptó. Comienza la próxima semana.",
               intent: "잘됐네요! 팀에 '큰 힘이 될 거예요'.",
               intentEn: "Great! He'll be 'a great asset to the team'.",
               intentEs: "¡Genial! Será 'un gran activo para el equipo'.",
               options: [
                 { 
                   text: "He'll be a great asset to the team.", 
                   correct: true, 
                   explain: "'Asset'은 자산, 즉 귀중한 존재라는 뜻.",
                   explainEn: "'Asset' means an asset, i.e., a valuable person.",
                   explainEs: "'Asset' significa un activo, es decir, una persona valiosa."
                 },
                 { 
                   text: "He is big power.", 
                   correct: false, 
                   explain: "그는 큰 힘이다?",
                   explainEn: "He is big power?",
                   explainEs: "¿Él es gran poder?"
                 },
                 { 
                   text: "Team will be strong.", 
                   correct: false, 
                   explain: "평범한 표현.",
                   explainEn: "Plain expression.",
                   explainEs: "Expresión simple."
                 }
               ]
             },
             {
               id: 'd-i-ch3-r5',
               context: "Daniel: {user}씨 안목이 정확했네요. 앞으로도 잘 부탁해요.",
               contextEn: "Daniel: Your eye was spot on. Counting on you.",
               contextEs: "Daniel: Tu ojo fue preciso. Cuento contigo.",
               intent: "네, 함께 '최고의 팀을 만들어요'.",
               intentEn: "Yes, let's 'build a dream team' together.",
               intentEs: "Sí, 'construyamos un equipo de ensueño' juntos.",
               options: [
                 { 
                   text: "Let's build a dream team.", 
                   correct: true, 
                   explain: "최고의 팀을 드림팀이라고 하지.",
                   explainEn: "We call the best team a dream team.",
                   explainEs: "Llamamos al mejor equipo un equipo de ensueño."
                 },
                 { 
                   text: "Make good team.", 
                   correct: false, 
                   explain: "단순해.",
                   explainEn: "Too simple.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "Best team ever.", 
                   correct: false, 
                   explain: "구호 같아.",
                   explainEn: "Sounds like a slogan.",
                   explainEs: "Suena como un eslogan."
                 }
               ]
             }
          ]
        },
        {
          id: 4,
          title: "제품 출시",
          titleEn: "Product Launch",
          titleEs: "Lanzamiento de Producto",
          description: "드디어 첫 제품을 세상에 내놓습니다.",
          descriptionEn: "Finally releasing our first product to the world.",
          descriptionEs: "Finalmente lanzando nuestro primer producto al mundo.",
          rounds: [
             {
               id: 'd-i-ch4-r1',
               context: "Daniel: 드디어 D-day네요. 어젯밤에 한숨도 못 잤어요.",
               contextEn: "Daniel: It's finally D-day. I couldn't sleep a wink last night.",
               contextEs: "Daniel: Finalmente es el Día D. No pude dormir ni un minuto anoche.",
               intent: "저도요. 제발 잘 되기를 '빌어야죠'.",
               intentEn: "Me too. We should 'keep our fingers crossed'.",
               intentEs: "Yo también. Deberíamos 'cruzar los dedos'.",
               options: [
                 { 
                   text: "Let's keep our fingers crossed.", 
                   correct: true, 
                   explain: "행운을 빈다는 제스처에서 유래한 표현.",
                   explainEn: "An expression derived from the gesture of crossing fingers for luck.",
                   explainEs: "Una expresión derivada del gesto de cruzar los dedos para la suerte."
                 },
                 { 
                   text: "Pray for success.", 
                   correct: false, 
                   explain: "기도하자는 너무 진지해.",
                   explainEn: "Too serious - praying for success.",
                   explainEs: "Demasiado serio - orar por el éxito."
                 },
                 { 
                   text: "Hope good luck.", 
                   correct: false, 
                   explain: "문법이 어색해.",
                   explainEn: "Grammar is awkward.",
                   explainEs: "La gramática es incómoda."
                 }
               ]
             },
             {
               id: 'd-i-ch4-r2',
               context: "Daniel: 출시 1시간 만에 접속자가 폭주하고 있어요! 서버가 버틸까요?",
               contextEn: "Daniel: Traffic is exploding 1 hour after launch! Will the server hold?",
               contextEs: "Daniel: ¡El tráfico está explotando 1 hora después del lanzamiento! ¿Aguantará el servidor?",
               intent: "이건 '행복한 비명'이네요.",
               intentEn: "This is a 'happy problem to have'.",
               intentEs: "Este es un 'problema feliz de tener'.",
               options: [
                 { 
                   text: "It's a happy problem to have.", 
                   correct: true, 
                   explain: "좋은 성과로 인한 곤란함을 뜻해.",
                   explainEn: "It means trouble caused by good results.",
                   explainEs: "Significa problemas causados por buenos resultados."
                 },
                 { 
                   text: "I scream happily.", 
                   correct: false, 
                   explain: "행복하게 소리 지른다?",
                   explainEn: "I scream happily?",
                   explainEs: "¿Grito felizmente?"
                 },
                 { 
                   text: "Good stressful.", 
                   correct: false, 
                   explain: "좋은 스트레스?",
                   explainEn: "Good stressful?",
                   explainEs: "¿Buen estrés?"
                 }
               ]
             },
             {
               id: 'd-i-ch4-r3',
               context: "Daniel: 일단 대기열 시스템 도입했습니다. 사용자 반응은 어때요?",
               contextEn: "Daniel: Queue system applied. How's user reaction?",
               contextEs: "Daniel: Sistema de cola aplicado. ¿Cómo es la reacción del usuario?",
               intent: "반응이 뜨거워요. 입소문을 '타고 있어요'.",
               intentEn: "The reaction is hot. It's 'going viral'.",
               intentEs: "La reacción es caliente. Se está 'volviendo viral'.",
               options: [
                 { 
                   text: "It's going viral.", 
                   correct: true, 
                   explain: "'Go viral'은 바이러스처럼 빠르게 퍼진다는 뜻.",
                   explainEn: "'Go viral' means to spread quickly like a virus.",
                   explainEs: "'Go viral' significa extenderse rápidamente como un virus."
                 },
                 { 
                   text: "Mouth to mouth.", 
                   correct: false, 
                   explain: "이건 인공호흡이야! 'Word of mouth'가 맞아.",
                   explainEn: "That's CPR! 'Word of mouth' is correct.",
                   explainEs: "¡Eso es RCP! 'Word of mouth' es correcto."
                 },
                 { 
                   text: "People talk much.", 
                   correct: false, 
                   explain: "사람들이 말을 많이 한다.",
                   explainEn: "People talk a lot.",
                   explainEs: "La gente habla mucho."
                 }
               ]
             },
             {
               id: 'd-i-ch4-r4',
               context: "Daniel: 와, 첫날 매출이 목표의 200%를 달성했습니다!",
               contextEn: "Daniel: Wow, first day sales hit 200% of our goal!",
               contextEs: "Daniel: ¡Vaya, las ventas del primer día alcanzaron el 200% de nuestra meta!",
               intent: "고생한 '보람이 있네요'.",
               intentEn: "Our hard work 'paid off'.",
               intentEs: "Nuestro trabajo duro 'dio sus frutos'.",
               options: [
                 { 
                   text: "Our hard work paid off.", 
                   correct: true, 
                   explain: "노력이 결실을 맺었다는 뜻.",
                   explainEn: "It means our efforts bore fruit.",
                   explainEs: "Significa que nuestros esfuerzos dieron frutos."
                 },
                 { 
                   text: "Work is money.", 
                   correct: false, 
                   explain: "노동은 돈이다.",
                   explainEn: "Work is money.",
                   explainEs: "El trabajo es dinero."
                 },
                 { 
                   text: "I am worthy.", 
                   correct: false, 
                   explain: "나는 가치 있다.",
                   explainEn: "I am worthy.",
                   explainEs: "Soy valioso."
                 }
               ]
             },
             {
               id: 'd-i-ch4-r5',
               context: "Daniel: 오늘은 전사 회식입니다! 소고기 먹으러 가죠!",
               contextEn: "Daniel: Company dinner tonight! Let's go eat beef!",
               contextEs: "Daniel: ¡Cena de empresa esta noche! ¡Vamos a comer carne!",
               intent: "좋아요! 오늘 '끝까지 달려봐요'.",
               intentEn: "Good! Let's 'go all the way' today!",
               intentEs: "¡Bien! ¡'Vamos hasta el final' hoy!",
               options: [
                 { 
                   text: "Let's go all the way!", 
                   correct: true, 
                   explain: "끝까지 가자는 뜻.",
                   explainEn: "It means let's go all the way.",
                   explainEs: "Significa que vayamos hasta el final."
                 },
                 { 
                   text: "Run to the end.", 
                   correct: false, 
                   explain: "끝으로 뛰어가자.",
                   explainEn: "Run to the end.",
                   explainEs: "Correr hasta el final."
                 },
                 { 
                   text: "Drink until die.", 
                   correct: false, 
                   explain: "죽을 때까지 마시자? 너무 과격해.",
                   explainEn: "Drink until we die? Too extreme.",
                   explainEs: "¿Beber hasta morir? Demasiado extremo."
                 }
               ]
             }
          ]
        },
        {
          id: 5,
          title: "위기 발생",
          titleEn: "Crisis",
          titleEs: "Crisis",
          description: "서버가 다운되었습니다. 긴급 대응이 필요합니다.",
          descriptionEn: "The server is down. Emergency response needed.",
          descriptionEs: "El servidor está caído. Se necesita respuesta de emergencia.",
          rounds: [
             {
               id: 'd-i-ch5-r1',
               context: "Daniel: 큰일 났어요. 메인 DB가 멈췄습니다. 고객 항의가 빗발쳐요.",
               contextEn: "Daniel: Big trouble. Main DB stopped. Customer complaints are pouring in.",
               contextEs: "Daniel: Gran problema. La base de datos principal se detuvo. Las quejas de los clientes están lloviendo.",
               intent: "맙소사, '아수라장이네요'.",
               intentEn: "Oh no, 'all hell broke loose'.",
               intentEs: "Oh no, 'se desató el infierno'.",
               options: [
                 { 
                   text: "All hell broke loose.", 
                   correct: true, 
                   explain: "지옥이 열렸다, 즉 대혼란 상황이라는 뜻.",
                   explainEn: "Hell opened up, meaning a situation of great chaos.",
                   explainEs: "Se abrió el infierno, es decir, una situación de gran caos."
                 },
                 { 
                   text: "It is chaos.", 
                   correct: false, 
                   explain: "평범해.",
                   explainEn: "Too plain.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "Crazy room.", 
                   correct: false, 
                   explain: "미친 방?",
                   explainEn: "Crazy room?",
                   explainEs: "¿Habitación loca?"
                 }
               ]
             },
             {
               id: 'd-i-ch5-r2',
               context: "Daniel: 일단 공지부터 띄우고 복구 작업 시작하죠.",
               contextEn: "Daniel: Let's post a notice and start recovery.",
               contextEs: "Daniel: Publiquemos un aviso y comencemos la recuperación.",
               intent: "네, '최대한 빨리' 처리하겠습니다.",
               intentEn: "Yes, I'll handle it 'ASAP'.",
               intentEs: "Sí, lo manejaré 'lo antes posible'.",
               options: [
                 { 
                   text: "I'll handle it ASAP.", 
                   correct: true, 
                   explain: "ASAP는 As Soon As Possible의 약자.",
                   explainEn: "ASAP is an abbreviation for As Soon As Possible.",
                   explainEs: "ASAP es una abreviatura de As Soon As Possible (lo antes posible)."
                 },
                 { 
                   text: "I do fast.", 
                   correct: false, 
                   explain: "빨리 하겠다.",
                   explainEn: "I'll do it fast.",
                   explainEs: "Lo haré rápido."
                 },
                 { 
                   text: "Very quickly.", 
                   correct: false, 
                   explain: "문장 성분이 부족해.",
                   explainEn: "Missing sentence components.",
                   explainEs: "Faltan componentes de la oración."
                 }
               ]
             },
             {
               id: 'd-i-ch5-r3',
               context: "Daniel: 원인이 뭐죠? 해킹인가요?",
               contextEn: "Daniel: What's the cause? Hacking?",
               contextEs: "Daniel: ¿Cuál es la causa? ¿Hackeo?",
               intent: "아뇨, 업데이트 버그 같아요. 제가 '바로잡을게요'.",
               intentEn: "No, seems like an update bug. I'll 'straighten it out'.",
               intentEs: "No, parece un error de actualización. Lo 'arreglaré'.",
               options: [
                 { 
                   text: "I'll straighten it out.", 
                   correct: true, 
                   explain: "'Straighten out'은 문제나 혼란을 바로잡다는 뜻.",
                   explainEn: "'Straighten out' means to fix a problem or confusion.",
                   explainEs: "'Straighten out' significa arreglar un problema o confusión."
                 },
                 { 
                   text: "I fix bug.", 
                   correct: false, 
                   explain: "단순해.",
                   explainEn: "Too simple.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "I catch bug.", 
                   correct: false, 
                   explain: "벌레를 잡겠다?",
                   explainEn: "I'll catch a bug (insect)?",
                   explainEs: "¿Atraparé un bicho (insecto)?"
                 }
               ]
             },
             {
               id: 'd-i-ch5-r4',
               context: "Daniel: (2시간 후) 복구 완료됐습니다. 정말 십년감수했네요.",
               contextEn: "Daniel: (2 hours later) Recovery complete. That took 10 years off my life.",
               contextEs: "Daniel: (2 horas después) Recuperación completa. Eso me quitó 10 años de vida.",
               intent: "휴, 정말 '아슬아슬했어요'.",
               intentEn: "Whew, that was really 'a close call'.",
               intentEs: "Uf, eso fue realmente 'un llamado cercano'.",
               options: [
                 { 
                   text: "That was a close call.", 
                   correct: true, 
                   explain: "위기일발이었다, 아슬아슬했다는 뜻.",
                   explainEn: "It means it was a close shave, very close.",
                   explainEs: "Significa que fue un roce cercano, muy cerca."
                 },
                 { 
                   text: "It was dangerous.", 
                   correct: false, 
                   explain: "위험했다.",
                   explainEn: "It was dangerous.",
                   explainEs: "Fue peligroso."
                 },
                 { 
                   text: "Almost died.", 
                   correct: false, 
                   explain: "죽을 뻔했다.",
                   explainEn: "Almost died.",
                   explainEs: "Casi muero."
                 }
               ]
             },
             {
               id: 'd-i-ch5-r5',
               context: "Daniel: 이번 일을 교훈 삼아 시스템을 보강해야겠어요.",
               contextEn: "Daniel: We should reinforce the system learning from this.",
               contextEs: "Daniel: Deberíamos reforzar el sistema aprendiendo de esto.",
               intent: "맞아요. '소 잃고 외양간 고치기'는 안 되니까요.",
               intentEn: "Right. 'Better safe than sorry'.",
               intentEs: "Cierto. 'Más vale prevenir que lamentar'.",
               options: [
                 { 
                   text: "Better safe than sorry.", 
                   correct: true, 
                   explain: "나중에 후회하는 것보다 조심하는 게 낫다는 속담.",
                   explainEn: "A proverb meaning it's better to be careful than to regret later.",
                   explainEs: "Un proverbio que significa que es mejor tener cuidado que arrepentirse después."
                 },
                 { 
                   text: "Fix house after cow lost.", 
                   correct: false, 
                   explain: "한국 속담 직역은 안 통함.",
                   explainEn: "A literal translation of a Korean proverb doesn't work.",
                   explainEs: "Una traducción literal de un proverbio coreano no funciona."
                 },
                 { 
                   text: "No cow no fix.", 
                   correct: false, 
                   explain: "소가 없으면 고칠 것도 없다?",
                   explainEn: "No cow, nothing to fix?",
                   explainEs: "¿Sin vaca, nada que arreglar?"
                 }
               ]
             }
          ]
        }
      ],
      advanced: [
         {
          id: 1,
          title: "위기 협상",
          titleEn: "Crisis Negotiation",
          titleEs: "Negociación de Crisis",
          description: "Daniel과 함께 중요한 협상을 진행합니다.",
          descriptionEn: "Conducting an important negotiation with Daniel.",
          descriptionEs: "Realizando una negociación importante con Daniel.",
          rounds: [
            {
              id: 'd-a-r1',
              context: "Daniel: {user}, 이번 협상 상대가 만만치 않아. 가격을 엄청 깎으려고 해.",
              contextEn: "Daniel: {user}, the opponent is tough. They're trying to cut the price significantly.",
              contextEs: "Daniel: {user}, el oponente es duro. Están tratando de reducir el precio significativamente.",
              intent: "우리는 절대 '물러서지 않을' 거라고 단호하게 말하려면?",
              intentEn: "How do I firmly say we won't 'back down'?",
              intentEs: "¿Cómo digo firmemente que no 'retrocederemos'?",
              options: [
                { 
                  text: "We won't back down.", 
                  correct: true, 
                  explain: "'Back down'은 주장이나 요구를 굽히다, 물러서다는 뜻.",
                  explainEn: "'Back down' means to give in on a claim or demand, to retreat.",
                  explainEs: "'Back down' significa ceder en una afirmación o demanda, retroceder."
                },
                { 
                  text: "We stand still.", 
                  correct: false, 
                  explain: "가만히 서 있겠다는 뜻.",
                  explainEn: "This means we'll stand still.",
                  explainEs: "Esto significa que nos quedaremos quietos."
                },
                { 
                  text: "We fight back.", 
                  correct: false, 
                  explain: "너무 공격적이야.",
                  explainEn: "Too aggressive.",
                  explainEs: "Demasiado agresivo."
                }
              ]
            },
            {
              id: 'd-a-r2',
              context: "Daniel: 맞아. 하지만 너무 강하게 나가면 계약이 깨질 수도 있어. 적당한 선을 찾아야 해.",
              contextEn: "Daniel: Right. But if we push too hard, the deal might break. We need to find a balance.",
              contextEs: "Daniel: Cierto. Pero si presionamos demasiado, el trato podría romperse. Necesitamos encontrar un equilibrio.",
              intent: "우리가 '중간 지점에서 타협'하는 건 어떨까?",
              intentEn: "What if we 'meet halfway'?",
              intentEs: "¿Qué tal si 'encontramos un punto medio'?",
              options: [
                { 
                  text: "Let's meet halfway.", 
                  correct: true, 
                  explain: "'Meet halfway'는 서로 양보하여 타협점을 찾다는 뜻.",
                  explainEn: "'Meet halfway' means to find a compromise by both sides giving in.",
                  explainEs: "'Meet halfway' significa encontrar un compromiso cediendo ambas partes."
                },
                { 
                  text: "Let's meet inside.", 
                  correct: false, 
                  explain: "안에서 만나자?",
                  explainEn: "Let's meet inside?",
                  explainEs: "¿Nos encontramos adentro?"
                },
                { 
                  text: "Cut it in half.", 
                  correct: false, 
                  explain: "반으로 자르자는 뜻.",
                  explainEn: "This means to cut it in half.",
                  explainEs: "Esto significa cortarlo por la mitad."
                }
              ]
            },
            {
              id: 'd-a-r3',
              context: "Daniel: 좋은 생각이야. 그럼 추가 서비스를 제공하는 대신 가격은 유지하자.",
              contextEn: "Daniel: Good idea. Then let's maintain the price but offer additional services.",
              contextEs: "Daniel: Buena idea. Entonces mantengamos el precio pero ofrezcamos servicios adicionales.",
              intent: "그거라면 그들도 '혹할(미끼를 물)' 것 같다고 하려면?",
              intentEn: "If so, how do I say they'll probably 'take the bait'?",
              intentEs: "Si es así, ¿cómo digo que probablemente 'morderán el anzuelo'?",
              options: [
                { 
                  text: "They'll take the bait.", 
                  correct: true, 
                  explain: "'Take the bait'는 미끼를 물다, 제안에 넘어가다는 뜻.",
                  explainEn: "'Take the bait' means to bite the bait, to fall for a proposal.",
                  explainEs: "'Take the bait' significa morder el anzuelo, caer en una propuesta."
                },
                { 
                  text: "They will bite it.", 
                  correct: false, 
                  explain: "물리적으로 무는 거야.",
                  explainEn: "Physically biting it.",
                  explainEs: "Morderlo físicamente."
                },
                { 
                  text: "They like bait.", 
                  correct: false, 
                  explain: "그들은 미끼를 좋아한다?",
                  explainEn: "They like bait?",
                  explainEs: "¿Les gusta el cebo?"
                }
              ]
            },
            {
              id: 'd-a-r4',
              context: "Daniel: 좋아. 그럼 내가 바람잡을 테니 네가 마무리해.",
              contextEn: "Daniel: Okay. I'll set the stage, you close the deal.",
              contextEs: "Daniel: Está bien. Yo prepararé el escenario, tú cierra el trato.",
              intent: "알겠어. 내가 확실하게 '매듭지을게'.",
              intentEn: "Got it. I'll 'seal the deal' for sure.",
              intentEs: "Entendido. 'Cerraré el trato' con seguridad.",
              options: [
                { 
                  text: "I'll seal the deal.", 
                  correct: true, 
                  explain: "'Seal the deal'은 계약을 체결하다, 마무리를 짓다는 뜻.",
                  explainEn: "'Seal the deal' means to finalize a contract, to close the deal.",
                  explainEs: "'Seal the deal' significa finalizar un contrato, cerrar el trato."
                },
                { 
                  text: "I will finish it.", 
                  correct: false, 
                  explain: "너무 평범해.",
                  explainEn: "Too plain.",
                  explainEs: "Demasiado simple."
                },
                { 
                  text: "I close the door.", 
                  correct: false, 
                  explain: "문을 닫는다고?",
                  explainEn: "I close the door?",
                  explainEs: "¿Cierro la puerta?"
                }
              ]
            },
            {
              id: 'd-a-r5',
              context: "Daniel: {user}, 너랑 일하면 진짜 든든하다. 이번 건도 성공 예감이야.",
              contextEn: "Daniel: {user}, working with you is so reassuring. I have a good feeling about this.",
              contextEs: "Daniel: {user}, trabajar contigo es muy tranquilizador. Tengo un buen presentimiento sobre esto.",
              intent: "우린 정말 '환상의 짝꿍'이니까!",
              intentEn: "We really make 'a killer team'!",
              intentEs: "¡Realmente hacemos 'un equipo asesino'!",
              options: [
                { 
                  text: "We make a killer team.", 
                  correct: true, 
                  explain: "'Killer team'은 끝내주는, 환상적인 팀이라는 뜻.",
                  explainEn: "'Killer team' means an amazing, fantastic team.",
                  explainEs: "'Killer team' significa un equipo increíble, fantástico."
                },
                { 
                  text: "We are fantasy team.", 
                  correct: false, 
                  explain: "판타지 팀? 스포츠 게임이야?",
                  explainEn: "Fantasy team? Like a sports game?",
                  explainEs: "¿Equipo de fantasía? ¿Como un juego deportivo?"
                },
                { 
                  text: "We match good.", 
                  correct: false, 
                  explain: "문법 오류.",
                  explainEn: "Grammar error.",
                  explainEs: "Error gramatical."
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "인수 합병",
          titleEn: "Merger & Acquisition",
          titleEs: "Fusión y Adquisición",
          description: "대기업의 인수 제안을 받고 고민합니다.",
          descriptionEn: "Considering an acquisition offer from a large company.",
          descriptionEs: "Considerando una oferta de adquisición de una gran empresa.",
          rounds: [
             {
               id: 'd-a-ch2-r1',
               context: "Daniel: 대박입니다. 글로벌 테크 기업 G사에서 인수를 제안했어요.",
               contextEn: "Daniel: Huge news. Global tech giant G offered an acquisition.",
               contextEs: "Daniel: Gran noticia. El gigante tecnológico global G ofreció una adquisición.",
               intent: "와, 정말 '솔깃한 제안이네요'.",
               intentEn: "Wow, it's really a 'tempting offer'.",
               intentEs: "Vaya, es realmente una 'oferta tentadora'.",
               options: [
                 { 
                   text: "It's a tempting offer.", 
                   correct: true, 
                   explain: "'Tempting'은 유혹적인, 솔깃한이라는 뜻.",
                   explainEn: "'Tempting' means alluring, tempting.",
                   explainEs: "'Tempting' significa atractivo, tentador."
                 },
                 { 
                   text: "It sounds delicious.", 
                   correct: false, 
                   explain: "맛있게 들린다?",
                   explainEn: "It sounds delicious?",
                   explainEs: "¿Suena delicioso?"
                 },
                 { 
                   text: "I want it.", 
                   correct: false, 
                   explain: "너무 직설적이야.",
                   explainEn: "Too direct.",
                   explainEs: "Demasiado directo."
                 }
               ]
             },
             {
               id: 'd-a-ch2-r2',
               context: "Daniel: 금액은 좋은데, 경영권 보장이 안 된대요.",
               contextEn: "Daniel: The price is good, but management rights aren't guaranteed.",
               contextEs: "Daniel: El precio es bueno, pero los derechos de gestión no están garantizados.",
               intent: "그럼 곤란하죠. '세부 사항을 꼼꼼히 봐야' 해요.",
               intentEn: "That's problematic. We need to 'look at the details carefully'.",
               intentEs: "Eso es problemático. Necesitamos 'revisar los detalles cuidadosamente'.",
               options: [
                 { 
                   text: "The devil is in the details.", 
                   correct: true, 
                   explain: "세부 사항에 문제가 숨어있을 수 있다는 뜻.",
                   explainEn: "It means problems can hide in the details.",
                   explainEs: "Significa que los problemas pueden esconderse en los detalles."
                 },
                 { 
                   text: "Look closely.", 
                   correct: false, 
                   explain: "자세히 봐라.",
                   explainEn: "Look closely.",
                   explainEs: "Mira de cerca."
                 },
                 { 
                   text: "Details represent devil.", 
                   correct: false, 
                   explain: "디테일은 악마를 나타낸다?",
                   explainEn: "Details represent the devil?",
                   explainEs: "¿Los detalles representan al diablo?"
                 }
               ]
             },
             {
               id: 'd-a-ch2-r3',
               context: "Daniel: 맞아요. 우리 회사의 정체성을 잃을 순 없죠.",
               contextEn: "Daniel: Right. We can't lose our company's identity.",
               contextEs: "Daniel: Cierto. No podemos perder la identidad de nuestra empresa.",
               intent: "그렇다면 정중하게 '거절하는 게 낫겠어요'.",
               intentEn: "Then we'd better 'turn it down' politely.",
               intentEs: "Entonces sería mejor 'rechazarlo' cortésmente.",
               options: [
                 { 
                   text: "We'd better turn it down.", 
                   correct: true, 
                   explain: "'Turn down'은 제안을 거절하다는 뜻.",
                   explainEn: "'Turn down' means to reject an offer.",
                   explainEs: "'Turn down' significa rechazar una oferta."
                 },
                 { 
                   text: "Say no please.", 
                   correct: false, 
                   explain: "싫다고 말해라.",
                   explainEn: "Say no please.",
                   explainEs: "Di no por favor."
                 },
                 { 
                   text: "Rejection is good.", 
                   correct: false, 
                   explain: "거절은 좋다.",
                   explainEn: "Rejection is good.",
                   explainEs: "El rechazo es bueno."
                 }
               ]
             },
             {
               id: 'd-a-ch2-r4',
               context: "Daniel: 아깝긴 하지만 장기적으로는 그게 맞겠죠?",
               contextEn: "Daniel: It's a shame, but in the long run, that's correct right?",
               contextEs: "Daniel: Es una lástima, pero a largo plazo, eso es correcto, ¿verdad?",
               intent: "네, 당장의 이익보다 '큰 그림을 봐야죠'.",
               intentEn: "Yes, we need to 'look at the big picture' rather than immediate profit.",
               intentEs: "Sí, necesitamos 'ver el panorama general' en lugar de la ganancia inmediata.",
               options: [
                 { 
                   text: "We need to look at the big picture.", 
                   correct: true, 
                   explain: "전체적인 상황이나 미래를 본다는 뜻.",
                   explainEn: "It means to look at the overall situation or future.",
                   explainEs: "Significa mirar la situación general o el futuro."
                 },
                 { 
                   text: "See big drawing.", 
                   correct: false, 
                   explain: "큰 그림(미술)을 봐라.",
                   explainEn: "See a big drawing (art)?",
                   explainEs: "¿Ver un dibujo grande (arte)?"
                 },
                 { 
                   text: "Long time see.", 
                   correct: false, 
                   explain: "오랜만이다?",
                   explainEn: "Long time no see?",
                   explainEs: "¿Mucho tiempo sin verte?"
                 }
               ]
             },
             {
               id: 'd-a-ch2-r5',
               context: "Daniel: 알겠습니다. 우리 힘으로 유니콘 기업 만들어봅시다!",
               contextEn: "Daniel: Understood. Let's make it a unicorn company with our own strength!",
               contextEs: "Daniel: Entendido. ¡Hagámoslo una empresa unicornio con nuestra propia fuerza!",
               intent: "화이팅! '하늘이 한계예요(무한한 가능성이 있어요)'.",
               intentEn: "Fighting! 'The sky is the limit' (unlimited potential).",
               intentEs: "¡Ánimo! 'El cielo es el límite' (potencial ilimitado).",
               options: [
                 { 
                   text: "The sky is the limit.", 
                   correct: true, 
                   explain: "가능성이 무한하다는 뜻.",
                   explainEn: "It means unlimited potential.",
                   explainEs: "Significa potencial ilimitado."
                 },
                 { 
                   text: "Sky is limit.", 
                   correct: false, 
                   explain: "관사 the가 빠짐.",
                   explainEn: "Missing the article 'the'.",
                   explainEs: "Falta el artículo 'the'."
                 },
                 { 
                   text: "Limit is high.", 
                   correct: false, 
                   explain: "한계가 높다.",
                   explainEn: "The limit is high.",
                   explainEs: "El límite es alto."
                 }
               ]
             }
          ]
        },
        {
          id: 3,
          title: "법적 분쟁",
          titleEn: "Legal Dispute",
          titleEs: "Disputa Legal",
          description: "특허 소송에 휘말려 변호사와 상담합니다.",
          descriptionEn: "Consulting with a lawyer about a patent lawsuit.",
          descriptionEs: "Consultando con un abogado sobre una demanda de patente.",
          rounds: [
             {
               id: 'd-a-ch3-r1',
               context: "Daniel: 경쟁사에서 특허 침해 소송을 걸어왔습니다. 어이가 없네요.",
               contextEn: "Daniel: Competitor filed a patent infringement lawsuit. It's ridiculous.",
               contextEs: "Daniel: El competidor presentó una demanda por infracción de patente. Es ridículo.",
               intent: "분명히 우리 발목을 '잡으려는 수작이에요'.",
               intentEn: "It's clearly a 'ploy to hold us back'.",
               intentEs: "Es claramente una 'artimaña para detenernos'.",
               options: [
                 { 
                   text: "It's a ploy to hold us back.", 
                   correct: true, 
                   explain: "'Ploy'는 계략, 술책이라는 뜻.",
                   explainEn: "'Ploy' means a scheme, a trick.",
                   explainEs: "'Ploy' significa un esquema, un truco."
                 },
                 { 
                   text: "They catch our ankle.", 
                   correct: false, 
                   explain: "한국어 관용구 직역.",
                   explainEn: "A literal translation of a Korean idiom.",
                   explainEs: "Una traducción literal de un modismo coreano."
                 },
                 { 
                   text: "Bad plan.", 
                   correct: false, 
                   explain: "나쁜 계획.",
                   explainEn: "Bad plan.",
                   explainEs: "Mal plan."
                 }
               ]
             },
             {
               id: 'd-a-ch3-r2',
               context: "Daniel: 변호사 말로는 승소 확률이 반반이라는데, 합의할까요?",
               contextEn: "Daniel: Lawyer says winning chance is 50-50. Should we settle?",
               contextEs: "Daniel: El abogado dice que la probabilidad de ganar es 50-50. ¿Deberíamos llegar a un acuerdo?",
               intent: "아뇨. 여기서 물러나면 '호구 잡혀요'.",
               intentEn: "No. If we back down here, we'll be 'sitting ducks'.",
               intentEs: "No. Si retrocedemos aquí, seremos 'blancos fáciles'.",
               options: [
                 { 
                   text: "We'll be sitting ducks.", 
                   correct: true, 
                   explain: "'Sitting duck'은 공격하기 쉬운 대상, 봉이라는 뜻.",
                   explainEn: "'Sitting duck' means an easy target, a sitting target.",
                   explainEs: "'Sitting duck' significa un blanco fácil, un objetivo sentado."
                 },
                 { 
                   text: "We become fools.", 
                   correct: false, 
                   explain: "바보가 된다.",
                   explainEn: "We become fools.",
                   explainEs: "Nos volvemos tontos."
                 },
                 { 
                   text: "They eat us.", 
                   correct: false, 
                   explain: "그들이 우릴 먹는다.",
                   explainEn: "They eat us.",
                   explainEs: "Nos comen."
                 }
               ]
             },
             {
               id: 'd-a-ch3-r3',
               context: "Daniel: 그럼 정면 돌파하자는 말씀이시군요. 리스크가 큰데요.",
               contextEn: "Daniel: So you mean head-on breakthrough. Risk is high.",
               contextEs: "Daniel: Entonces te refieres a un avance frontal. El riesgo es alto.",
               intent: "진실은 우리 편이니 '쫄지 마세요'.",
               intentEn: "Truth is on our side, so 'don't get cold feet'.",
               intentEs: "La verdad está de nuestro lado, así que 'no te acobardes'.",
               options: [
                 { 
                   text: "Don't get cold feet.", 
                   correct: true, 
                   explain: "'Get cold feet'은 겁을 먹다, 초조해하다는 뜻.",
                   explainEn: "'Get cold feet' means to become afraid, to get nervous.",
                   explainEs: "'Get cold feet' significa tener miedo, ponerse nervioso."
                 },
                 { 
                   text: "Don't be chicken.", 
                   correct: false, 
                   explain: "너무 비격식적이야.",
                   explainEn: "Too informal.",
                   explainEs: "Demasiado informal."
                 },
                 { 
                   text: "Don't scare.", 
                   correct: false, 
                   explain: "문법 오류.",
                   explainEn: "Grammar error.",
                   explainEs: "Error gramatical."
                 }
               ]
             },
             {
               id: 'd-a-ch3-r4',
               context: "Daniel: 알겠습니다. 끝까지 싸워보죠. 증거 자료 수집하겠습니다.",
               contextEn: "Daniel: Okay. Let's fight to the end. I'll collect evidence.",
               contextEs: "Daniel: Está bien. Luchemos hasta el final. Recopilaré evidencia.",
               intent: "네, '이 잡듯이 뒤져서'라도 찾아내야 해요.",
               intentEn: "Yes, we need to find it even if we have to 'leave no stone unturned'.",
               intentEs: "Sí, necesitamos encontrarlo incluso si tenemos que 'dejar ninguna piedra sin mover'.",
               options: [
                 { 
                   text: "Leave no stone unturned.", 
                   correct: true, 
                   explain: "모든 돌을 들춰보다, 즉 온갖 수단을 다 쓰다는 뜻.",
                   explainEn: "Turn over every stone, meaning to use every means possible.",
                   explainEs: "Voltear cada piedra, es decir, usar todos los medios posibles."
                 },
                 { 
                   text: "Find like lice.", 
                   correct: false, 
                   explain: "이처럼 찾아라? 끔찍해.",
                   explainEn: "Find like lice? Terrible.",
                   explainEs: "¿Buscar como piojos? Terrible."
                 },
                 { 
                   text: "Search everything.", 
                   correct: false, 
                   explain: "평범해.",
                   explainEn: "Too plain.",
                   explainEs: "Demasiado simple."
                 }
               ]
             },
             {
               id: 'd-a-ch3-r5',
               context: "Daniel: (몇 달 후) 승소했습니다! 정의가 승리했네요.",
               contextEn: "Daniel: (Months later) We won! Justice prevailed.",
               contextEs: "Daniel: (Meses después) ¡Ganamos! La justicia prevaleció.",
               intent: "정말 다행이에요. '사필귀정'이죠.",
               intentEn: "Really fortunate. 'Justice is served'.",
               intentEs: "Realmente afortunado. 'La justicia se ha hecho'.",
               options: [
                 { 
                   text: "Justice is served.", 
                   correct: true, 
                   explain: "정의가 실현되었다는 법정 드라마 단골 대사.",
                   explainEn: "A common line in legal dramas meaning justice has been realized.",
                   explainEs: "Una línea común en dramas legales que significa que la justicia se ha realizado."
                 },
                 { 
                   text: "Justice wins.", 
                   correct: false, 
                   explain: "단순해.",
                   explainEn: "Too simple.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "Right return right.", 
                   correct: false, 
                   explain: "콩글리시.",
                   explainEn: "Konglish.",
                   explainEs: "Konglish."
                 }
               ]
             }
          ]
        },
        {
          id: 4,
          title: "글로벌 진출",
          titleEn: "Global Expansion",
          titleEs: "Expansión Global",
          description: "해외 지사 설립을 위해 출장을 갑니다.",
          descriptionEn: "Going on a business trip to establish an overseas branch.",
          descriptionEs: "Viajando en viaje de negocios para establecer una sucursal en el extranjero.",
          rounds: [
             {
               id: 'd-a-ch4-r1',
               context: "Daniel: 뉴욕 지사 설립, 드디어 현실이 되네요.",
               contextEn: "Daniel: NY branch establishment, finally becoming reality.",
               contextEs: "Daniel: Establecimiento de la sucursal de NY, finalmente se hace realidad.",
               intent: "감개무량하네요. '꿈이 이루어졌어요'.",
               intentEn: "I'm deeply moved. It's 'a dream come true'.",
               intentEs: "Estoy profundamente conmovido. Es 'un sueño hecho realidad'.",
               options: [
                 { 
                   text: "It's a dream come true.", 
                   correct: true, 
                   explain: "꿈이 이루어졌다는 관용구.",
                   explainEn: "An idiom meaning a dream has come true.",
                   explainEs: "Un modismo que significa que un sueño se ha hecho realidad."
                 },
                 { 
                   text: "Dream is real.", 
                   correct: false, 
                   explain: "꿈은 현실이다.",
                   explainEn: "Dream is real.",
                   explainEs: "El sueño es real."
                 },
                 { 
                   text: "I made dream.", 
                   correct: false, 
                   explain: "내가 꿈을 만들었다.",
                   explainEn: "I made a dream.",
                   explainEs: "Hice un sueño."
                 }
               ]
             },
             {
               id: 'd-a-ch4-r2',
               context: "Daniel: 근데 현지 문화 적응이 관건일 것 같아요.",
               contextEn: "Daniel: But adapting to local culture seems to be the key.",
               contextEs: "Daniel: Pero adaptarse a la cultura local parece ser la clave.",
               intent: "맞아요. '로마에 가면 로마법을 따라야죠'.",
               intentEn: "Right. 'When in Rome, do as the Romans do'.",
               intentEs: "Cierto. 'Cuando estés en Roma, haz como los romanos'.",
               options: [
                 { 
                   text: "When in Rome, do as the Romans do.", 
                   correct: true, 
                   explain: "로마에 가면 로마법을 따르라는 속담.",
                   explainEn: "A proverb meaning follow local customs when in a foreign place.",
                   explainEs: "Un proverbio que significa seguir las costumbres locales cuando estás en un lugar extranjero."
                 },
                 { 
                   text: "Follow Rome law.", 
                   correct: false, 
                   explain: "직역.",
                   explainEn: "Literal translation.",
                   explainEs: "Traducción literal."
                 },
                 { 
                   text: "Copy Romans.", 
                   correct: false, 
                   explain: "로마인을 따라해라.",
                   explainEn: "Copy the Romans.",
                   explainEs: "Copia a los romanos."
                 }
               ]
             },
             {
               id: 'd-a-ch4-r3',
               context: "Daniel: 시차 적응 때문에 피곤하네요. 회의 때 졸면 어쩌죠?",
               contextEn: "Daniel: Tired from jet lag. What if I doze off during the meeting?",
               contextEs: "Daniel: Cansado por el desfase horario. ¿Qué pasa si me quedo dormido durante la reunión?",
               intent: "커피 마시고 '정신 바짝 차리세요'.",
               intentEn: "Drink coffee and 'look alive'.",
               intentEs: "Bebe café y 'mantente alerta'.",
               options: [
                 { 
                   text: "Look alive.", 
                   correct: true, 
                   explain: "'Look alive'는 정신 차려라, 기민하게 행동하라는 뜻.",
                   explainEn: "'Look alive' means to be alert, to act quickly.",
                   explainEs: "'Look alive' significa estar alerta, actuar rápidamente."
                 },
                 { 
                   text: "Wake up.", 
                   correct: false, 
                   explain: "자고 있는 사람 깨우는 말.",
                   explainEn: "This is for waking someone who's sleeping.",
                   explainEs: "Esto es para despertar a alguien que está durmiendo."
                 },
                 { 
                   text: "Head up.", 
                   correct: false, 
                   explain: "고개 들어.",
                   explainEn: "Head up.",
                   explainEs: "Cabeza arriba."
                 }
               ]
             },
             {
               id: 'd-a-ch4-r4',
               context: "Daniel: 첫 미팅 분위기가 좋았습니다. 파트너십을 맺기로 했어요.",
               contextEn: "Daniel: First meeting went well. Decided to form a partnership.",
               contextEs: "Daniel: La primera reunión fue bien. Decidimos formar una asociación.",
               intent: "훌륭해요! '순조로운 출발'이네요.",
               intentEn: "Excellent! We're off to a 'flying start'.",
               intentEs: "¡Excelente! Estamos teniendo un 'inicio volador'.",
               options: [
                 { 
                   text: "We're off to a flying start.", 
                   correct: true, 
                   explain: "'Flying start'는 순조롭고 빠른 출발을 의미.",
                   explainEn: "'Flying start' means a smooth and fast beginning.",
                   explainEs: "'Flying start' significa un comienzo suave y rápido."
                 },
                 { 
                   text: "Good start.", 
                   correct: false, 
                   explain: "평범해.",
                   explainEn: "Too plain.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "Smooth driving.", 
                   correct: false, 
                   explain: "부드러운 운전?",
                   explainEn: "Smooth driving?",
                   explainEs: "¿Conducción suave?"
                 }
               ]
             },
             {
               id: 'd-a-ch4-r5',
               context: "Daniel: 이제 세계가 무대입니다. 더 높이 날아보죠.",
               contextEn: "Daniel: Now the world is our stage. Let's fly higher.",
               contextEs: "Daniel: Ahora el mundo es nuestro escenario. Volemos más alto.",
               intent: "네, 우리의 '전성기는 아직 오지 않았어요'.",
               intentEn: "Yes, 'the best is yet to come' for us.",
               intentEs: "Sí, 'lo mejor está por venir' para nosotros.",
               options: [
                 { 
                   text: "The best is yet to come.", 
                   correct: true, 
                   explain: "최고의 순간은 아직 오지 않았다는 희망적인 말.",
                   explainEn: "A hopeful saying meaning the best moment hasn't come yet.",
                   explainEs: "Un dicho esperanzador que significa que el mejor momento aún no ha llegado."
                 },
                 { 
                   text: "Best is not here.", 
                   correct: false, 
                   explain: "최고가 여기 없다.",
                   explainEn: "The best is not here.",
                   explainEs: "Lo mejor no está aquí."
                 },
                 { 
                   text: "We are young.", 
                   correct: false, 
                   explain: "우린 젊다.",
                   explainEn: "We are young.",
                   explainEs: "Somos jóvenes."
                 }
               ]
             }
          ]
        },
        {
          id: 5,
          title: "CEO 승계",
          titleEn: "CEO Succession",
          titleEs: "Sucesión de CEO",
          description: "Daniel이 CEO 자리를 제안합니다.",
          descriptionEn: "Daniel offers the CEO position.",
          descriptionEs: "Daniel ofrece el puesto de CEO.",
          rounds: [
             {
               id: 'd-a-ch5-r1',
               context: "Daniel: {user}, 저 이제 경영 일선에서 물러날까 합니다.",
               contextEn: "Daniel: {user}, I'm thinking of stepping down from management.",
               contextEs: "Daniel: {user}, estoy pensando en retirarme de la gestión.",
               intent: "네? 갑자기 그게 '무슨 소리예요'?",
               intentEn: "What? Where did that 'come from'?",
               intentEs: "¿Qué? ¿De dónde 'salió eso'?",
               options: [
                 { 
                   text: "Where did that come from?", 
                   correct: true, 
                   explain: "어디서 나온 말이냐, 즉 뜬금없다는 뜻.",
                   explainEn: "Where did that come from, meaning it's out of the blue.",
                   explainEs: "¿De dónde salió eso?, es decir, significa que es inesperado."
                 },
                 { 
                   text: "What sound is it?", 
                   correct: false, 
                   explain: "무슨 소리(음향)냐?",
                   explainEn: "What sound (audio) is it?",
                   explainEs: "¿Qué sonido (audio) es?"
                 },
                 { 
                   text: "Why sudden?", 
                   correct: false, 
                   explain: "문법 오류.",
                   explainEn: "Grammar error.",
                   explainEs: "Error gramatical."
                 }
               ]
             },
             {
               id: 'd-a-ch5-r2',
               context: "Daniel: 당신이 차기 CEO를 맡아줬으면 해요. 당신만한 적임자가 없어요.",
               contextEn: "Daniel: I want you to be the next CEO. No one is more suitable.",
               contextEs: "Daniel: Quiero que seas el próximo CEO. Nadie es más adecuado.",
               intent: "제가요? 그건 제게 '과분한 자리예요'.",
               intentEn: "Me? Those are 'big shoes to fill' for me.",
               intentEs: "¿Yo? Esos son 'zapatos grandes que llenar' para mí.",
               options: [
                 { 
                   text: "Those are big shoes to fill.", 
                   correct: true, 
                   explain: "'Big shoes to fill'은 전임자의 역량이 뛰어나 뒤를 잇기 어렵다는 겸손 표현.",
                   explainEn: "'Big shoes to fill' is a humble expression meaning the predecessor was so capable it's hard to follow.",
                   explainEs: "'Big shoes to fill' es una expresión humilde que significa que el predecesor era tan capaz que es difícil seguir."
                 },
                 { 
                   text: "It is too much.", 
                   correct: false, 
                   explain: "너무 많다.",
                   explainEn: "It's too much.",
                   explainEs: "Es demasiado."
                 },
                 { 
                   text: "I am not worthy.", 
                   correct: false, 
                   explain: "난 가치 없다. 너무 비하함.",
                   explainEn: "I'm not worthy. Too self-deprecating.",
                   explainEs: "No soy digno. Demasiado autodespreciativo."
                 }
               ]
             },
             {
               id: 'd-a-ch5-r3',
               context: "Daniel: 겸손해하지 마세요. 회사를 가장 잘 아는 건 당신입니다.",
               contextEn: "Daniel: Don't be modest. You know the company best.",
               contextEs: "Daniel: No seas modesto. Conoces mejor la empresa.",
               intent: "그렇게 믿어주시니 '어깨가 무겁네요'.",
               intentEn: "With that trust, I 'feel the weight of the world'.",
               intentEs: "Con esa confianza, 'siento el peso del mundo'.",
               options: [
                 { 
                   text: "I feel the weight of the world.", 
                   correct: true, 
                   explain: "세상의 무게를 느낀다, 책임감이 막중하다는 뜻.",
                   explainEn: "It means feeling the weight of the world, having heavy responsibility.",
                   explainEs: "Significa sentir el peso del mundo, tener una responsabilidad pesada."
                 },
                 { 
                   text: "Shoulder is heavy.", 
                   correct: false, 
                   explain: "어깨가 물리적으로 무겁다.",
                   explainEn: "Shoulder is physically heavy.",
                   explainEs: "El hombro es físicamente pesado."
                 },
                 { 
                   text: "Heavy responsibility.", 
                   correct: false, 
                   explain: "무거운 책임.",
                   explainEn: "Heavy responsibility.",
                   explainEs: "Responsabilidad pesada."
                 }
               ]
             },
             {
               id: 'd-a-ch5-r4',
               context: "Daniel: 당신이라면 더 잘할 수 있을 겁니다. 제가 뒤에서 도울게요.",
               contextEn: "Daniel: You can do better. I'll help from behind.",
               contextEs: "Daniel: Puedes hacerlo mejor. Ayudaré desde atrás.",
               intent: "알겠습니다. '도전을 받아들일게요'.",
               intentEn: "Understood. I'll 'rise to the challenge'.",
               intentEs: "Entendido. 'Aceptaré el desafío'.",
               options: [
                 { 
                   text: "I'll rise to the challenge.", 
                   correct: true, 
                   explain: "'Rise to the challenge'는 난관에 맞서다, 도전을 받아들이다.",
                   explainEn: "'Rise to the challenge' means to face difficulties, to accept a challenge.",
                   explainEs: "'Rise to the challenge' significa enfrentar dificultades, aceptar un desafío."
                 },
                 { 
                   text: "I accept challenge.", 
                   correct: false, 
                   explain: "평범해.",
                   explainEn: "Too plain.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "Challenge accepted.", 
                   correct: false, 
                   explain: "너무 캐주얼해.",
                   explainEn: "Too casual.",
                   explainEs: "Demasiado casual."
                 }
               ]
             },
             {
               id: 'd-a-ch5-r5',
               context: "Daniel: 축하합니다, CEO님. 새로운 시대를 열어주세요.",
               contextEn: "Daniel: Congratulations, CEO. Open a new era.",
               contextEs: "Daniel: Felicidades, CEO. Abre una nueva era.",
               intent: "최선을 다하겠습니다. '지켜봐 주세요'.",
               intentEn: "I'll do my best. 'Just you watch'.",
               intentEs: "Haré mi mejor esfuerzo. 'Solo mira'.",
               options: [
                 { 
                   text: "Just you watch.", 
                   correct: true, 
                   explain: "두고 봐라, 지켜봐 달라는 자신감 있는 표현.",
                   explainEn: "A confident expression meaning watch me, just you wait.",
                   explainEs: "Una expresión confiada que significa mírame, solo espera."
                 },
                 { 
                   text: "Look at me.", 
                   correct: false, 
                   explain: "나를 봐라.",
                   explainEn: "Look at me.",
                   explainEs: "Mírame."
                 },
                 { 
                   text: "Please watch.", 
                   correct: false, 
                   explain: "제발 봐주세요.",
                   explainEn: "Please watch.",
                   explainEs: "Por favor mira."
                 }
               ]
             }
          ]
        }
      ]
    }
  },
  lucas: {
    id: 'lucas',
    name: 'Lucas',
    role: 'Lover',
    desc: '설레는 썸부터 프러포즈까지 이어지는 로맨스',
    descEn: 'A romance that unfolds from exciting flirting to proposal',
    descEs: 'Un romance que se desarrolla desde el coqueteo emocionante hasta la propuesta',
    avatarSeed: 'Lucas',
    colorTheme: 'bg-pink-100',
    tagColor: 'bg-pink-200 text-pink-700',
    levels: {
      beginner: [
        {
          id: 1,
          title: "데이트 신청",
          titleEn: "Date Request",
          titleEs: "Solicitud de Cita",
          description: "Lucas가 데이트를 신청합니다.",
          descriptionEn: "Lucas asks for a date.",
          descriptionEs: "Lucas pide una cita.",
          rounds: [
            {
              id: 'l-b-r1',
              context: "Lucas: 저기... {user}, 오늘 시간 있어?",
              contextEn: "Lucas: Um... {user}, are you free today?",
              contextEs: "Lucas: Um... {user}, ¿estás libre hoy?",
              intent: "응, 나 '별일 없어(한가해)'라고 하려면?",
              intentEn: "Yes, how do I say I'm 'free (not busy)'?",
              intentEs: "Sí, ¿cómo digo que estoy 'libre (no ocupado)'?",
              options: [
                { 
                  text: "I'm free today.", 
                  correct: true, 
                  explain: "오늘 한가하다는 명확한 표현.",
                  explainEn: "A clear expression meaning I'm free today.",
                  explainEs: "Una expresión clara que significa que estoy libre hoy."
                },
                { 
                  text: "I have no work.", 
                  correct: false, 
                  explain: "일이 없다는 뜻.",
                  explainEn: "It means I have no work.",
                  explainEs: "Significa que no tengo trabajo."
                },
                { 
                  text: "I am empty.", 
                  correct: false, 
                  explain: "속이 비었다는 뜻이야.",
                  explainEn: "It means I'm empty inside.",
                  explainEs: "Significa que estoy vacío por dentro."
                }
              ]
            },
            {
              id: 'l-b-r2',
              context: "Lucas: 그럼 우리 영화 보러 갈래? 재미있는 거 개봉했대.",
              contextEn: "Lucas: Then do you want to see a movie? A fun one just came out.",
              contextEs: "Lucas: Entonces ¿quieres ver una película? Acaba de estrenarse una divertida.",
              intent: "좋아! 영화 보는 거 '찬성'이야.",
              intentEn: "Good! I'm 'down for' watching a movie.",
              intentEs: "¡Bien! Estoy 'de acuerdo con' ver una película.",
              options: [
                { 
                  text: "I'm down for that.", 
                  correct: true, 
                  explain: "'I'm down'은 제안에 찬성한다는 뜻.",
                  explainEn: "'I'm down' means I agree to the proposal.",
                  explainEs: "'I'm down' significa que estoy de acuerdo con la propuesta."
                },
                { 
                  text: "I agree movie.", 
                  correct: false, 
                  explain: "영화에 동의한다?",
                  explainEn: "I agree with the movie?",
                  explainEs: "¿Estoy de acuerdo con la película?"
                },
                { 
                  text: "I like watching.", 
                  correct: false, 
                  explain: "그냥 보는 걸 좋아한다?",
                  explainEn: "I just like watching?",
                  explainEs: "¿Solo me gusta ver?"
                }
              ]
            },
            {
              id: 'l-b-r3',
              context: "Lucas: 다행이다. 사실 거절할까 봐 걱정했어.",
              contextEn: "Lucas: That's a relief. Actually, I was worried you'd say no.",
              contextEs: "Lucas: Eso es un alivio. En realidad, estaba preocupado de que dijeras que no.",
              intent: "에이, '그럴 리가' 있겠어?",
              intentEn: "Oh, 'no way'!",
              intentEs: "¡Oh, 'de ninguna manera'!",
              options: [
                { 
                  text: "No way!", 
                  correct: true, 
                  explain: "'No way'는 말도 안 돼, 그럴 리 없어라는 뜻.",
                  explainEn: "'No way' means that's impossible, no way that would happen.",
                  explainEs: "'No way' significa que es imposible, de ninguna manera pasaría eso."
                },
                { 
                  text: "Yes way.", 
                  correct: false, 
                  explain: "없는 말이야.",
                  explainEn: "That's not a thing.",
                  explainEs: "Eso no existe."
                },
                { 
                  text: "It is impossible.", 
                  correct: false, 
                  explain: "너무 딱딱해.",
                  explainEn: "Too stiff.",
                  explainEs: "Demasiado rígido."
                }
              ]
            },
            {
              id: 'l-b-r4',
              context: "Lucas: 그럼 6시에 데리러 갈게. 이따 봐!",
              contextEn: "Lucas: Then I'll pick you up at 6. See you later!",
              contextEs: "Lucas: Entonces te recogeré a las 6. ¡Hasta luego!",
              intent: "응, '기대할게'라고 하려면?",
              intentEn: "Yes, how do I say I'm 'looking forward to it'?",
              intentEs: "Sí, ¿cómo digo que 'lo estoy esperando'?",
              options: [
                { 
                  text: "I'm looking forward to it.", 
                  correct: true, 
                  explain: "기대하고 있다는 정중하고 설레는 표현.",
                  explainEn: "A polite and exciting expression meaning I'm looking forward to it.",
                  explainEs: "Una expresión educada y emocionante que significa que lo estoy esperando."
                },
                { 
                  text: "I expect it.", 
                  correct: false, 
                  explain: "요구한다는 뉘앙스가 있을 수 있어.",
                  explainEn: "Can have a nuance of demanding.",
                  explainEs: "Puede tener una connotación de exigir."
                },
                { 
                  text: "I wait for you.", 
                  correct: false, 
                  explain: "그냥 기다린다는 뜻.",
                  explainEn: "Just means I'm waiting for you.",
                  explainEs: "Solo significa que te estoy esperando."
                }
              ]
            },
            {
              id: 'l-b-r5',
              context: "Lucas: (문자) {user}, 나 지금 출발했어!",
              contextEn: "Lucas: (Text) {user}, I'm leaving now!",
              contextEs: "Lucas: (Texto) {user}, ¡ya me voy!",
              intent: "알겠어. '조심해서 와'라고 하려면?",
              intentEn: "Got it. How do I say 'drive safe'?",
              intentEs: "Entendido. ¿Cómo digo 'maneja con cuidado'?",
              options: [
                { 
                  text: "Drive safe!", 
                  correct: true, 
                  explain: "운전 조심하라는 다정한 인사.",
                  explainEn: "A warm farewell meaning drive safely.",
                  explainEs: "Una despedida cálida que significa maneja con seguridad."
                },
                { 
                  text: "Come safe.", 
                  correct: false, 
                  explain: "어색한 표현.",
                  explainEn: "Awkward expression.",
                  explainEs: "Expresión incómoda."
                },
                { 
                  text: "Be careful come.", 
                  correct: false, 
                  explain: "문법 오류.",
                  explainEn: "Grammar error.",
                  explainEs: "Error gramatical."
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "카페 데이트",
          titleEn: "Cafe Date",
          titleEs: "Cita en Café",
          description: "분위기 좋은 카페에서 서로를 알아갑니다.",
          descriptionEn: "Getting to know each other at a cozy cafe.",
          descriptionEs: "Conociéndose en un café acogedor.",
          rounds: [
             {
               id: 'l-b-ch2-r1',
               context: "Lucas: 여기 분위기 진짜 좋다. 너 커피 좋아해?",
               contextEn: "Lucas: The vibe here is really nice. Do you like coffee?",
               contextEs: "Lucas: El ambiente aquí es realmente agradable. ¿Te gusta el café?",
               intent: "응, 난 커피 '없이 못 살아'.",
               intentEn: "Yes, I 'can't live without coffee'.",
               intentEs: "Sí, 'no puedo vivir sin café'.",
               options: [
                 { 
                   text: "I can't live without coffee.", 
                   correct: true, 
                   explain: "커피를 정말 좋아한다는 강조 표현.",
                   explainEn: "An emphatic expression meaning I really like coffee.",
                   explainEs: "Una expresión enfática que significa que realmente me gusta el café."
                 },
                 { 
                   text: "No coffee no life.", 
                   correct: false, 
                   explain: "슬로건 같아.",
                   explainEn: "Sounds like a slogan.",
                   explainEs: "Suena como un eslogan."
                 },
                 { 
                   text: "Coffee is my life.", 
                   correct: false, 
                   explain: "내 인생은 커피다.",
                   explainEn: "My life is coffee.",
                   explainEs: "Mi vida es el café."
                 }
               ]
             },
             {
               id: 'l-b-ch2-r2',
               context: "Lucas: 하하, 나도 그래. 평소에 취미는 뭐야?",
               contextEn: "Lucas: Haha, me too. What are your hobbies?",
               contextEs: "Lucas: Jaja, yo también. ¿Cuáles son tus pasatiempos?",
               intent: "난 영화 보는 걸 '즐겨 해'.",
               intentEn: "I 'enjoy watching movies'.",
               intentEs: "'Disfruto viendo películas'.",
               options: [
                 { 
                   text: "I enjoy watching movies.", 
                   correct: true, 
                   explain: "취미를 말할 때 가장 자연스러운 표현.",
                   explainEn: "The most natural expression when talking about hobbies.",
                   explainEs: "La expresión más natural al hablar de pasatiempos."
                 },
                 { 
                   text: "Movie is my hobby.", 
                   correct: false, 
                   explain: "문법적으로 틀린 건 아니지만 단순해.",
                   explainEn: "Not grammatically wrong but too simple.",
                   explainEs: "No está gramaticalmente mal pero es demasiado simple."
                 },
                 { 
                   text: "I see movie.", 
                   correct: false, 
                   explain: "영화를 본다는 사실만 전달.",
                   explainEn: "Just states the fact that I watch movies.",
                   explainEs: "Solo indica el hecho de que veo películas."
                 }
               ]
             },
             {
               id: 'l-b-ch2-r3',
               context: "Lucas: 오, 나돈데! 우리 취향이 통하네.",
               contextEn: "Lucas: Oh, me too! We have similar tastes.",
               contextEs: "Lucas: ¡Oh, yo también! Tenemos gustos similares.",
               intent: "그러게. 정말 '우연이다'.",
               intentEn: "Right. It's really 'a coincidence'.",
               intentEs: "Cierto. Es realmente 'una coincidencia'.",
               options: [
                 { 
                   text: "What a coincidence.", 
                   correct: true, 
                   explain: "우연의 일치라는 뜻.",
                   explainEn: "It means a coincidence.",
                   explainEs: "Significa una coincidencia."
                 },
                 { 
                   text: "It is accident.", 
                   correct: false, 
                   explain: "그건 사고야.",
                   explainEn: "That's an accident.",
                   explainEs: "Eso es un accidente."
                 },
                 { 
                   text: "Same same.", 
                   correct: false, 
                   explain: "똑같다 똑같다? (콩글리시)",
                   explainEn: "Same same? (Konglish)",
                   explainEs: "¿Igual igual? (Konglish)"
                 }
               ]
             },
             {
               id: 'l-b-ch2-r4',
               context: "Lucas: 다음엔 같이 영화 보러 갈래? 내가 팝콘 살게.",
               contextEn: "Lucas: Want to go see a movie next time? I'll buy popcorn.",
               contextEs: "Lucas: ¿Quieres ir a ver una película la próxima vez? Compraré palomitas.",
               intent: "좋아! 그거 '약속한 거다'?",
               intentEn: "Good! Is that 'a promise'?",
               intentEs: "¡Bien! ¿Es eso 'una promesa'?",
               options: [
                 { 
                   text: "It's a promise.", 
                   correct: true, 
                   explain: "약속이라는 뜻.",
                   explainEn: "It means a promise.",
                   explainEs: "Significa una promesa."
                 },
                 { 
                   text: "You promise me.", 
                   correct: false, 
                   explain: "명령조야.",
                   explainEn: "That's an imperative.",
                   explainEs: "Eso es un imperativo."
                 },
                 { 
                   text: "Promise is promise.", 
                   correct: false, 
                   explain: "약속은 약속이다.",
                   explainEn: "A promise is a promise.",
                   explainEs: "Una promesa es una promesa."
                 }
               ]
             },
             {
               id: 'l-b-ch2-r5',
               context: "Lucas: 당연하지. 오늘 시간 가는 줄 몰랐어.",
               contextEn: "Lucas: Of course. I didn't notice the time passing.",
               contextEs: "Lucas: Por supuesto. No noté que pasaba el tiempo.",
               intent: "나도. 너랑 있으면 '정말 재밌어'.",
               intentEn: "Me too. When I'm with you, it's 'really fun'.",
               intentEs: "Yo también. Cuando estoy contigo, es 'realmente divertido'.",
               options: [
                 { 
                   text: "I have so much fun with you.", 
                   correct: true, 
                   explain: "함께 있어서 즐겁다는 표현.",
                   explainEn: "An expression meaning I have fun being with you.",
                   explainEs: "Una expresión que significa que me divierto estando contigo."
                 },
                 { 
                   text: "You are funny.", 
                   correct: false, 
                   explain: "넌 웃긴 사람이야.",
                   explainEn: "You're a funny person.",
                   explainEs: "Eres una persona divertida."
                 },
                 { 
                   text: "Fun is high.", 
                   correct: false, 
                   explain: "재미가 높다?",
                   explainEn: "Fun is high?",
                   explainEs: "¿La diversión es alta?"
                 }
               ]
             }
          ]
        },
        {
          id: 3,
          title: "한강 산책",
          titleEn: "Riverside Walk",
          titleEs: "Paseo por el Río",
          description: "저녁 먹고 한강을 거닐며 대화합니다.",
          descriptionEn: "Walking along the river after dinner, having a conversation.",
          descriptionEs: "Caminando por el río después de cenar, teniendo una conversación.",
          rounds: [
             {
               id: 'l-b-ch3-r1',
               context: "Lucas: 날씨 진짜 시원하다. 걷기 딱 좋지 않아?",
               contextEn: "Lucas: The weather is so cool. Isn't it perfect for walking?",
               contextEs: "Lucas: El clima es tan fresco. ¿No es perfecto para caminar?",
               intent: "응, 날씨가 '끝내주네'.",
               intentEn: "Yes, the weather is 'gorgeous'.",
               intentEs: "Sí, el clima es 'hermoso'.",
               options: [
                 { 
                   text: "The weather is gorgeous.", 
                   correct: true, 
                   explain: "날씨가 매우 좋다는 뜻.",
                   explainEn: "It means the weather is very nice.",
                   explainEs: "Significa que el clima es muy agradable."
                 },
                 { 
                   text: "Weather is finish.", 
                   correct: false, 
                   explain: "날씨가 끝났다?",
                   explainEn: "The weather is finished?",
                   explainEs: "¿El clima terminó?"
                 },
                 { 
                   text: "Cool weather.", 
                   correct: false, 
                   explain: "그냥 시원하다.",
                   explainEn: "Just cool weather.",
                   explainEs: "Solo clima fresco."
                 }
               ]
             },
             {
               id: 'l-b-ch3-r2',
               context: "Lucas: 손 잡아도 돼? 손이 좀 차가워 보여서.",
               contextEn: "Lucas: Can I hold your hand? Your hands look a bit cold.",
               contextEs: "Lucas: ¿Puedo tomar tu mano? Tus manos se ven un poco frías.",
               intent: "어머, 핑계도 '좋네'.",
               intentEn: "Oh, that's a 'good excuse'.",
               intentEs: "Oh, esa es una 'buena excusa'.",
               options: [
                 { 
                   text: "That's a good excuse.", 
                   correct: true, 
                   explain: "귀여운 핑계라는 뜻.",
                   explainEn: "It means a cute excuse.",
                   explainEs: "Significa una excusa linda."
                 },
                 { 
                   text: "You are liar.", 
                   correct: false, 
                   explain: "거짓말쟁이!",
                   explainEn: "You're a liar!",
                   explainEs: "¡Eres un mentiroso!"
                 },
                 { 
                   text: "Just hold it.", 
                   correct: false, 
                   explain: "그냥 잡아.",
                   explainEn: "Just hold it.",
                   explainEs: "Solo tómala."
                 }
               ]
             },
             {
               id: 'l-b-ch3-r3',
               context: "Lucas: (손을 잡으며) 하하, 들켰나? 너 손 진짜 작다.",
               contextEn: "Lucas: (Holding hand) Haha, busted? Your hands are really small.",
               contextEs: "Lucas: (Tomando la mano) Jaja, ¿descubierto? Tus manos son realmente pequeñas.",
               intent: "네 손은 엄청 '따뜻하네'.",
               intentEn: "Your hands are so 'warm'.",
               intentEs: "Tus manos son tan 'cálidas'.",
               options: [
                 { 
                   text: "Your hands are so warm.", 
                   correct: true, 
                   explain: "손이 따뜻하다는 표현.",
                   explainEn: "An expression meaning your hands are warm.",
                   explainEs: "Una expresión que significa que tus manos están cálidas."
                 },
                 { 
                   text: "You are hot.", 
                   correct: false, 
                   explain: "넌 핫해(섹시해) 혹은 더워.",
                   explainEn: "You're hot (sexy) or you're hot (temperature).",
                   explainEs: "Estás caliente (sexy) o tienes calor (temperatura)."
                 },
                 { 
                   text: "Hand is fire.", 
                   correct: false, 
                   explain: "손이 불이다?",
                   explainEn: "Hand is fire?",
                   explainEs: "¿La mano es fuego?"
                 }
               ]
             },
             {
               id: 'l-b-ch3-r4',
               context: "Lucas: 왠지 오늘 밤은 집에 가기 싫다.",
               contextEn: "Lucas: For some reason, I don't want to go home tonight.",
               contextEs: "Lucas: Por alguna razón, no quiero ir a casa esta noche.",
               intent: "나도. 시간이 '멈췄으면 좋겠어'.",
               intentEn: "Me too. I wish 'time would stop'.",
               intentEs: "Yo también. Desearía que 'el tiempo se detuviera'.",
               options: [
                 { 
                   text: "I wish time would stop.", 
                   correct: true, 
                   explain: "시간이 멈추길 바란다는 로맨틱한 표현.",
                   explainEn: "A romantic expression meaning I wish time would stop.",
                   explainEs: "Una expresión romántica que significa que desearía que el tiempo se detuviera."
                 },
                 { 
                   text: "Stop the clock.", 
                   correct: false, 
                   explain: "시계를 멈춰라.",
                   explainEn: "Stop the clock.",
                   explainEs: "Detén el reloj."
                 },
                 { 
                   text: "Time is fast.", 
                   correct: false, 
                   explain: "시간이 빠르다.",
                   explainEn: "Time is fast.",
                   explainEs: "El tiempo es rápido."
                 }
               ]
             },
             {
               id: 'l-b-ch3-r5',
               context: "Lucas: 그래도 늦었으니 데려다 줄게. 내일 또 볼까?",
               contextEn: "Lucas: Still, it's late so I'll walk you home. Shall we meet again tomorrow?",
               contextEs: "Lucas: Aún así, es tarde así que te acompañaré a casa. ¿Nos vemos mañana?",
               intent: "그래. '연락해'.",
               intentEn: "Sure. 'Call me'.",
               intentEs: "Claro. 'Llámame'.",
               options: [
                 { 
                   text: "Call me.", 
                   correct: true, 
                   explain: "전화해.",
                   explainEn: "Call me.",
                   explainEs: "Llámame."
                 },
                 { 
                   text: "Phone me.", 
                   correct: false, 
                   explain: "약간 어색해.",
                   explainEn: "A bit awkward.",
                   explainEs: "Un poco incómodo."
                 },
                 { 
                   text: "Message me.", 
                   correct: false, 
                   explain: "문자해.",
                   explainEn: "Message me.",
                   explainEs: "Envíame un mensaje."
                 }
               ]
             }
          ]
        },
        { 
          id: 4, 
          title: "문자 하기", 
          titleEn: "Texting",
          titleEs: "Enviando Mensajes",
          description: "자기 전 설레는 문자를 주고받습니다.", 
          descriptionEn: "Exchanging excited texts before bed.",
          descriptionEs: "Intercambiando mensajes emocionantes antes de dormir.",
          rounds: [
             {
               id: 'l-b-ch4-r1',
               context: "Lucas: (문자) {user}, 잘 자고 있어? 난 네 생각하느라 잠이 안 와.",
               contextEn: "Lucas: (Text) {user}, are you sleeping well? I can't sleep thinking about you.",
               contextEs: "Lucas: (Texto) {user}, ¿estás durmiendo bien? No puedo dormir pensando en ti.",
               intent: "나도. 아직 '안 자고 있어'.",
               intentEn: "Me too. I'm 'still up'.",
               intentEs: "Yo también. Aún 'estoy despierto'.",
               options: [
                 { 
                   text: "I'm still up.", 
                   correct: true, 
                   explain: "아직 깨어있다는 뜻.",
                   explainEn: "It means I'm still awake.",
                   explainEs: "Significa que aún estoy despierto."
                 },
                 { 
                   text: "I don't sleep.", 
                   correct: false, 
                   explain: "난 잠을 안 자는 사람이다.",
                   explainEn: "I'm a person who doesn't sleep.",
                   explainEs: "Soy una persona que no duerme."
                 },
                 { 
                   text: "No sleep.", 
                   correct: false, 
                   explain: "잠은 없다.",
                   explainEn: "No sleep.",
                   explainEs: "Sin sueño."
                 }
               ]
             },
             {
               id: 'l-b-ch4-r2',
               context: "Lucas: 내일 뭐 입고 갈 거야? 궁금하다.",
               contextEn: "Lucas: What are you wearing tomorrow? I'm curious.",
               contextEs: "Lucas: ¿Qué vas a llevar mañana? Tengo curiosidad.",
               intent: "비밀이야. 내일 '직접 봐'.",
               intentEn: "It's a secret. 'You'll see tomorrow'.",
               intentEs: "Es un secreto. 'Lo verás mañana'.",
               options: [
                 { 
                   text: "You'll see tomorrow.", 
                   correct: true, 
                   explain: "내일 보면 알 거라는 뜻.",
                   explainEn: "It means you'll find out when you see tomorrow.",
                   explainEs: "Significa que lo descubrirás cuando veas mañana."
                 },
                 { 
                   text: "See yourself.", 
                   correct: false, 
                   explain: "거울 봐라.",
                   explainEn: "Look in the mirror.",
                   explainEs: "Mírate en el espejo."
                 },
                 { 
                   text: "Secret cloth.", 
                   correct: false, 
                   explain: "비밀 옷.",
                   explainEn: "Secret clothes.",
                   explainEs: "Ropa secreta."
                 }
               ]
             },
             {
               id: 'l-b-ch4-r3',
               context: "Lucas: 너무해~ 힌트 좀 주면 안 돼?",
               contextEn: "Lucas: So mean~ Can't you give me a hint?",
               contextEs: "Lucas: Tan malo~ ¿No puedes darme una pista?",
               intent: "음, '파란색'이야.",
               intentEn: "Hmm, it's 'blue'.",
               intentEs: "Hmm, es 'azul'.",
               options: [
                 { 
                   text: "It's blue.", 
                   correct: true, 
                   explain: "간단명료한 대답.",
                   explainEn: "A simple and clear answer.",
                   explainEs: "Una respuesta simple y clara."
                 },
                 { 
                   text: "Color is blue.", 
                   correct: false, 
                   explain: "색깔은 파란색이다.",
                   explainEn: "The color is blue.",
                   explainEs: "El color es azul."
                 },
                 { 
                   text: "I am blue.", 
                   correct: false, 
                   explain: "난 우울해.",
                   explainEn: "I'm blue (sad).",
                   explainEs: "Estoy triste."
                 }
               ]
             },
             {
               id: 'l-b-ch4-r4',
               context: "Lucas: 파란색? 너랑 잘 어울리겠다. 빨리 내일이 왔으면 좋겠어.",
               contextEn: "Lucas: Blue? That will look good on you. I hope tomorrow comes soon.",
               contextEs: "Lucas: ¿Azul? Te verá bien. Espero que mañana llegue pronto.",
               intent: "나도 그래. 얼른 '자야지'.",
               intentEn: "Me too. I should 'get some sleep'.",
               intentEs: "Yo también. Debería 'dormir un poco'.",
               options: [
                 { 
                   text: "I should get some sleep.", 
                   correct: true, 
                   explain: "자러 가야겠다는 표현.",
                   explainEn: "An expression meaning I should go to sleep.",
                   explainEs: "Una expresión que significa que debería ir a dormir."
                 },
                 { 
                   text: "I sleep now.", 
                   correct: false, 
                   explain: "나 지금 잔다.",
                   explainEn: "I'm sleeping now.",
                   explainEs: "Estoy durmiendo ahora."
                 },
                 { 
                   text: "Go to bed.", 
                   correct: false, 
                   explain: "자라(명령).",
                   explainEn: "Go to bed (command).",
                   explainEs: "Ve a la cama (orden)."
                 }
               ]
             },
             {
               id: 'l-b-ch4-r5',
               context: "Lucas: 그래, 꿈에서 봐. 잘 자 {user}.",
               contextEn: "Lucas: Yeah, see you in my dreams. Good night {user}.",
               contextEs: "Lucas: Sí, nos vemos en mis sueños. Buenas noches {user}.",
               intent: "응, 너도 '좋은 꿈 꿔'.",
               intentEn: "Yes, 'sweet dreams' to you too.",
               intentEs: "Sí, 'dulces sueños' para ti también.",
               options: [
                 { 
                   text: "Sweet dreams.", 
                   correct: true, 
                   explain: "좋은 꿈 꾸라는 달콤한 인사.",
                   explainEn: "A sweet farewell meaning have sweet dreams.",
                   explainEs: "Una despedida dulce que significa que tengas dulces sueños."
                 },
                 { 
                   text: "Good dream.", 
                   correct: false, 
                   explain: "콩글리시.",
                   explainEn: "Konglish.",
                   explainEs: "Konglish."
                 },
                 { 
                   text: "Dream well.", 
                   correct: false, 
                   explain: "잘 꿈꿔라?",
                   explainEn: "Dream well?",
                   explainEs: "¿Sueña bien?"
                 }
               ]
             }
          ] 
        },
        { 
          id: 5, 
          title: "고백", 
          titleEn: "Confession",
          titleEs: "Confesión",
          description: "Lucas가 정식으로 교제를 신청합니다.", 
          descriptionEn: "Lucas formally asks to start dating.",
          descriptionEs: "Lucas pide formalmente comenzar a salir.",
          rounds: [
             {
               id: 'l-b-ch5-r1',
               context: "Lucas: {user}, 할 말이 있어. 좀 진지한 얘기야.",
               contextEn: "Lucas: {user}, I have something to say. It's a bit serious.",
               contextEs: "Lucas: {user}, tengo algo que decir. Es un poco serio.",
               intent: "뭔데? '말해봐'.",
               intentEn: "What is it? I'm 'listening'.",
               intentEs: "¿Qué es? Estoy 'escuchando'.",
               options: [
                 { 
                   text: "I'm listening.", 
                   correct: true, 
                   explain: "듣고 있다는 뜻.",
                   explainEn: "It means I'm listening.",
                   explainEs: "Significa que estoy escuchando."
                 },
                 { 
                   text: "Say it.", 
                   correct: false, 
                   explain: "말해(명령).",
                   explainEn: "Say it (command).",
                   explainEs: "Dilo (orden)."
                 },
                 { 
                   text: "Talk to me.", 
                   correct: false, 
                   explain: "말 걸어줘.",
                   explainEn: "Talk to me.",
                   explainEs: "Háblame."
                 }
               ]
             },
             {
               id: 'l-b-ch5-r2',
               context: "Lucas: 너랑 있으면 너무 행복해. 우리... 만날래?",
               contextEn: "Lucas: I'm so happy when I'm with you. Will you... go out with me?",
               contextEs: "Lucas: Soy tan feliz cuando estoy contigo. ¿Quieres... salir conmigo?",
               intent: "정말? '농담 아니지'?",
               intentEn: "Really? 'You're not joking, right'?",
               intentEs: "¿De verdad? 'No estás bromeando, ¿verdad'?",
               options: [
                 { 
                   text: "You're not joking, right?", 
                   correct: true, 
                   explain: "진심인지 확인하는 말.",
                   explainEn: "A phrase to confirm if you're serious.",
                   explainEs: "Una frase para confirmar si estás hablando en serio."
                 },
                 { 
                   text: "No joke?", 
                   correct: false, 
                   explain: "장난 아냐?",
                   explainEn: "No joke?",
                   explainEs: "¿Sin broma?"
                 },
                 { 
                   text: "Are you funny?", 
                   correct: false, 
                   explain: "너 웃겨?",
                   explainEn: "Are you funny?",
                   explainEs: "¿Eres divertido?"
                 }
               ]
             },
             {
               id: 'l-b-ch5-r3',
               context: "Lucas: 진심이야. 널 많이 좋아해.",
               contextEn: "Lucas: I'm serious. I like you a lot.",
               contextEs: "Lucas: Hablo en serio. Me gustas mucho.",
               intent: "나도 널 기다렸어. '내 대답은 예스야'.",
               intentEn: "I've been waiting for you too. 'My answer is yes'.",
               intentEs: "Yo también te he estado esperando. 'Mi respuesta es sí'.",
               options: [
                 { 
                   text: "My answer is yes.", 
                   correct: true, 
                   explain: "수락의 표현.",
                   explainEn: "An expression of acceptance.",
                   explainEs: "Una expresión de aceptación."
                 },
                 { 
                   text: "I am yes.", 
                   correct: false, 
                   explain: "난 예스다.",
                   explainEn: "I am yes.",
                   explainEs: "Yo soy sí."
                 },
                 { 
                   text: "OK OK.", 
                   correct: false, 
                   explain: "너무 가벼워.",
                   explainEn: "Too casual.",
                   explainEs: "Demasiado casual."
                 }
               ]
             },
             {
               id: 'l-b-ch5-r4',
               context: "Lucas: 고마워! 내가 진짜 잘할게. 실망시키지 않을 거야.",
               contextEn: "Lucas: Thanks! I'll do really well. I won't let you down.",
               contextEs: "Lucas: ¡Gracias! Lo haré realmente bien. No te defraudaré.",
               intent: "알아. 우리 '잘 지내보자'.",
               intentEn: "I know. Let's 'make it work'.",
               intentEs: "Lo sé. 'Hagámoslo funcionar'.",
               options: [
                 { 
                   text: "Let's make it work.", 
                   correct: true, 
                   explain: "관계를 잘 만들어보자는 뜻.",
                   explainEn: "It means let's make the relationship work well.",
                   explainEs: "Significa que hagamos que la relación funcione bien."
                 },
                 { 
                   text: "Do well together.", 
                   correct: false, 
                   explain: "어색해.",
                   explainEn: "Awkward.",
                   explainEs: "Incómodo."
                 },
                 { 
                   text: "Be good.", 
                   correct: false, 
                   explain: "착하게 굴어라.",
                   explainEn: "Be good.",
                   explainEs: "Sé bueno."
                 }
               ]
             },
             {
               id: 'l-b-ch5-r5',
               context: "Lucas: 사랑해, {user}.",
               contextEn: "Lucas: I love you, {user}.",
               contextEs: "Lucas: Te amo, {user}.",
               intent: "나도 '사랑해'.",
               intentEn: "I 'love you too'.",
               intentEs: "Yo también 'te amo'.",
               options: [
                 { 
                   text: "I love you too.", 
                   correct: true, 
                   explain: "사랑 고백에 대한 답.",
                   explainEn: "A response to a love confession.",
                   explainEs: "Una respuesta a una confesión de amor."
                 },
                 { 
                   text: "Me too love.", 
                   correct: false, 
                   explain: "나도 사랑.",
                   explainEn: "Me too love.",
                   explainEs: "Yo también amor."
                 },
                 { 
                   text: "Yes love.", 
                   correct: false, 
                   explain: "응 사랑.",
                   explainEn: "Yes love.",
                   explainEs: "Sí amor."
                 }
               ]
             }
          ] 
        }
      ],
      intermediate: [
        {
          id: 1,
          title: "설레는 썸",
          titleEn: "Exciting Crush",
          titleEs: "Emoción de Enamoramiento",
          description: "도서관에서 시작된 만남과 첫 데이트 신청.",
          descriptionEn: "A meeting that started at the library and a first date request.",
          descriptionEs: "Un encuentro que comenzó en la biblioteca y una solicitud de primera cita.",
          rounds: [
            {
              id: 'r1',
              context: "Lucas: (쪽지를 건넴) 저기... {user}, 공부하는데 방해해서 죄송해요. 자주 보이시네요.",
              contextEn: "Lucas: (Passing a note) Excuse me... {user}, sorry to interrupt. I see you around often.",
              contextEs: "Lucas: (Pasando una nota) Disculpa... {user}, perdón por interrumpir. Te veo a menudo.",
              intent: "어머, 저한테 지금 '작업 거시는' 거예요?",
              intentEn: "Oh, are you 'hitting on me' right now?",
              intentEs: "Oh, ¿estás 'coqueteando conmigo' ahora?",
              options: [
                { 
                  text: "Are you hitting on me?", 
                  correct: true, 
                  explain: "'Hit on'은 이성에게 관심을 보이며 작업 건다는 뜻.",
                  explainEn: "'Hit on' means to show interest in someone romantically, to flirt.",
                  explainEs: "'Hit on' significa mostrar interés romántico en alguien, coquetear."
                },
                { 
                  text: "Are you working on me?", 
                  correct: false, 
                  explain: "나를 고치고 있냐는 뜻이야.",
                  explainEn: "This means are you fixing me?",
                  explainEs: "Esto significa ¿me estás arreglando?"
                },
                { 
                  text: "Do you like me now?", 
                  correct: false, 
                  explain: "너무 돌직구!",
                  explainEn: "Too direct!",
                  explainEs: "¡Demasiado directo!"
                }
              ]
            },
            {
              id: 'r2',
              context: "Lucas: 하하, 들켰나요? 사실 맞아요. 혹시 이번 주말에 시간 있으세요?",
              contextEn: "Lucas: Haha, busted? Actually, yes. Are you free this weekend?",
              contextEs: "Lucas: Jaja, ¿descubierto? En realidad, sí. ¿Estás libre este fin de semana?",
              intent: "좋아요. 제가 주말 '일정을 비워둘게요'라고 하려면?",
              intentEn: "Good. How do I say I'll 'clear my schedule' for the weekend?",
              intentEs: "Bien. ¿Cómo digo que 'despejaré mi agenda' para el fin de semana?",
              options: [
                { 
                  text: "I'll clear my schedule.", 
                  correct: true, 
                  explain: "'Clear my schedule'은 일정을 비운다는 정중하고 확실한 표현.",
                  explainEn: "'Clear my schedule' is a polite and certain expression meaning to free up one's schedule.",
                  explainEs: "'Clear my schedule' es una expresión educada y segura que significa liberar la agenda."
                },
                { 
                  text: "I have time for you.", 
                  correct: false, 
                  explain: "무난하지만 설렘이 덜해.",
                  explainEn: "Safe but lacks excitement.",
                  explainEs: "Seguro pero carece de emoción."
                },
                { 
                  text: "I am free woman.", 
                  correct: false, 
                  explain: "심심하다는 뉘앙스가 될 수도 있어.",
                  explainEn: "Can have a nuance of being bored.",
                  explainEs: "Puede tener una connotación de estar aburrido."
                }
              ]
            },
            {
              id: 'r3',
              context: "Lucas: (데이트 당일) 와... 오늘 정말 예쁘시네요. 완전 제 스타일이에요.",
              contextEn: "Lucas: (On the date) Wow... you look really beautiful today. You're totally my type.",
              contextEs: "Lucas: (En la cita) Vaya... te ves realmente hermosa hoy. Eres totalmente mi tipo.",
              intent: "칭찬 고마워요. 당신도 오늘 '옷태가 사네요'라고 하려면?",
              intentEn: "Thanks for the compliment. How do I say you 'clean up nice' today?",
              intentEs: "Gracias por el cumplido. ¿Cómo digo que te 'ves muy bien' hoy?",
              options: [
                { 
                  text: "You clean up nice!", 
                  correct: true, 
                  explain: "'Clean up nice'는 평소와 달리 말끔하게 잘 차려입었다는 칭찬.",
                  explainEn: "'Clean up nice' is a compliment meaning you dressed up nicely, different from usual.",
                  explainEs: "'Clean up nice' es un cumplido que significa que te vestiste muy bien, diferente a lo habitual."
                },
                { 
                  text: "Good clothes today.", 
                  correct: false, 
                  explain: "옷이 좋다는 뜻.",
                  explainEn: "It means good clothes today.",
                  explainEs: "Significa buena ropa hoy."
                },
                { 
                  text: "You wear well.", 
                  correct: false, 
                  explain: "문법 오류.",
                  explainEn: "Grammar error.",
                  explainEs: "Error gramatical."
                }
              ]
            },
            {
              id: 'r4',
              context: "Lucas: 식사는 어때요? 여기 파스타 진짜 맛있죠?",
              contextEn: "Lucas: How's the food? The pasta here is really good, right?",
              contextEs: "Lucas: ¿Cómo está la comida? La pasta aquí es realmente buena, ¿verdad?",
              intent: "네, 진짜 맛있어요. 완전 제 '취향 저격'이에요.",
              intentEn: "Yes, it's really delicious. It's totally 'right up my alley'.",
              intentEs: "Sí, es realmente delicioso. Es totalmente 'de mi agrado'.",
              options: [
                { 
                  text: "It's right up my alley!", 
                  correct: true, 
                  explain: "'Right up my alley'는 내 취향이나 적성에 딱 맞다는 뜻.",
                  explainEn: "'Right up my alley' means it perfectly matches my taste or aptitude.",
                  explainEs: "'Right up my alley' significa que coincide perfectamente con mi gusto o aptitud."
                },
                { 
                  text: "It's my style.", 
                  correct: false, 
                  explain: "무난해.",
                  explainEn: "Too plain.",
                  explainEs: "Demasiado simple."
                },
                { 
                  text: "It shot my heart.", 
                  correct: false, 
                  explain: "심장을 쐈다? 무서워.",
                  explainEn: "It shot my heart? Scary.",
                  explainEs: "¿Disparó a mi corazón? Aterrador."
                }
              ]
            },
            {
              id: 'r5',
              context: "Lucas: 다행이다. 저... 우리 오늘부터 진지하게 만나볼래요?",
              contextEn: "Lucas: That's a relief. Um... do you want to start seeing each other seriously from today?",
              contextEs: "Lucas: Eso es un alivio. Um... ¿quieres empezar a vernos en serio desde hoy?",
              intent: "좋아요. 우리 '한번 해봐요'라고 수락하려면?",
              intentEn: "Good. How do I accept by saying let's 'give it a shot'?",
              intentEs: "Bien. ¿Cómo acepto diciendo 'intentémoslo'?",
              options: [
                { 
                  text: "Let's give it a shot.", 
                  correct: true, 
                  explain: "'Give it a shot'은 시도해보다, 도전해보다라는 뜻.",
                  explainEn: "'Give it a shot' means to try it, to give it a chance.",
                  explainEs: "'Give it a shot' significa intentarlo, darle una oportunidad."
                },
                { 
                  text: "Let's do it now.", 
                  correct: false, 
                  explain: "너무 단순해.",
                  explainEn: "Too simple.",
                  explainEs: "Demasiado simple."
                },
                { 
                  text: "Okay good.", 
                  correct: false, 
                  explain: "시크하네.",
                  explainEn: "Too cool.",
                  explainEs: "Demasiado genial."
                }
              ]
            }
          ]
        },
        { 
          id: 2, 
          title: "질투", 
          titleEn: "Jealousy",
          titleEs: "Celos",
          description: "다른 이성과 이야기하는 것을 보고 질투합니다.", 
          descriptionEn: "Feeling jealous when seeing you talk to someone else.",
          descriptionEs: "Sintiendo celos al verte hablar con otra persona.",
          rounds: [
             {
               id: 'l-i-ch2-r1',
               context: "Lucas: 아까 그 남자 누구야? 되게 친해 보이더라.",
               contextEn: "Lucas: Who was that guy earlier? You looked really close.",
               contextEs: "Lucas: ¿Quién era ese chico antes? Parecían muy cercanos.",
               intent: "그냥 아는 오빠야. 혹시 지금 '질투하는 거야'?",
               intentEn: "Just a friend. Are you 'jealous' right now?",
               intentEs: "Solo un amigo. ¿Estás 'celoso' ahora?",
               options: [
                 { 
                   text: "Are you jealous?", 
                   correct: true, 
                   explain: "질투하냐고 묻는 직설적 표현.",
                   explainEn: "A direct expression asking if you're jealous.",
                   explainEs: "Una expresión directa preguntando si estás celoso."
                 },
                 { 
                   text: "Are you envy?", 
                   correct: false, 
                   explain: "Envy는 부러워하다는 뜻.",
                   explainEn: "Envy means to be envious.",
                   explainEs: "Envy significa tener envidia."
                 },
                 { 
                   text: "You hate him?", 
                   correct: false, 
                   explain: "그를 싫어하냐?",
                   explainEn: "Do you hate him?",
                   explainEs: "¿Lo odias?"
                 }
               ]
             },
             {
               id: 'l-i-ch2-r2',
               context: "Lucas: 그래, 질투 난다. 너한테 남자는 나 하나였으면 좋겠어.",
               contextEn: "Lucas: Yeah, I'm jealous. I wish I was the only man for you.",
               contextEs: "Lucas: Sí, estoy celoso. Desearía ser el único hombre para ti.",
               intent: "걱정 마. 내 눈엔 '너밖에 안 보여'.",
               intentEn: "Don't worry. In my eyes, 'I only have eyes for you'.",
               intentEs: "No te preocupes. En mis ojos, 'solo tengo ojos para ti'.",
               options: [
                 { 
                   text: "I only have eyes for you.", 
                   correct: true, 
                   explain: "너만 바라본다는 로맨틱한 표현.",
                   explainEn: "A romantic expression meaning I only look at you.",
                   explainEs: "Una expresión romántica que significa que solo te miro a ti."
                 },
                 { 
                   text: "I see only you.", 
                   correct: false, 
                   explain: "너만 보인다(시력 문제?).",
                   explainEn: "I only see you (vision problem?).",
                   explainEs: "Solo te veo a ti (¿problema de visión?)."
                 },
                 { 
                   text: "You are my target.", 
                   correct: false, 
                   explain: "넌 내 타겟이다.",
                   explainEn: "You're my target.",
                   explainEs: "Eres mi objetivo."
                 }
               ]
             },
             {
               id: 'l-i-ch2-r3',
               context: "Lucas: 진짜지? 딴 남자랑 연락하면 가만 안 둘 거야.",
               contextEn: "Lucas: Really? If you text other guys, I won't let it slide.",
               contextEs: "Lucas: ¿De verdad? Si le escribes a otros chicos, no lo dejaré pasar.",
               intent: "알겠어. 너도 '한눈팔지 마'.",
               intentEn: "Got it. You too, 'keep your eyes on me'.",
               intentEs: "Entendido. Tú también, 'mantén tus ojos en mí'.",
               options: [
                 { 
                   text: "Don't look around.", 
                   correct: false, 
                   explain: "주변을 둘러보지 마라.",
                   explainEn: "Don't look around.",
                   explainEs: "No mires alrededor."
                 },
                 { 
                   text: "Keep your eyes on me.", 
                   correct: true, 
                   explain: "나에게 시선을 고정해라, 한눈팔지 마라.",
                   explainEn: "Keep your gaze fixed on me, don't look elsewhere.",
                   explainEs: "Mantén tu mirada fija en mí, no mires a otro lado."
                 },
                 { 
                   text: "No cheating.", 
                   correct: false, 
                   explain: "바람피우지 마(너무 강해).",
                   explainEn: "Don't cheat (too strong).",
                   explainEs: "No engañes (demasiado fuerte)."
                 }
               ]
             },
             {
               id: 'l-i-ch2-r4',
               context: "Lucas: 난 너밖에 없어. 사랑해.",
               contextEn: "Lucas: I only have you. I love you.",
               contextEs: "Lucas: Solo te tengo a ti. Te amo.",
               intent: "나도. 우리 절대 '헤어지지 말자'.",
               intentEn: "Me too. Let's 'never break up'.",
               intentEs: "Yo también. 'Nunca nos separemos'.",
               options: [
                 { 
                   text: "Let's never break up.", 
                   correct: true, 
                   explain: "헤어지지 말자는 약속.",
                   explainEn: "A promise to never break up.",
                   explainEs: "Una promesa de nunca separarnos."
                 },
                 { 
                   text: "No bye bye.", 
                   correct: false, 
                   explain: "안녕은 없다.",
                   explainEn: "No goodbye.",
                   explainEs: "Sin adiós."
                 },
                 { 
                   text: "Don't leave me.", 
                   correct: false, 
                   explain: "날 떠나지 마.",
                   explainEn: "Don't leave me.",
                   explainEs: "No me dejes."
                 }
               ]
             },
             {
               id: 'l-i-ch2-r5',
               context: "Lucas: 약속해. 영원히 함께하자.",
               contextEn: "Lucas: I promise. Let's be together forever.",
               contextEs: "Lucas: Lo prometo. Estemos juntos para siempre.",
               intent: "응, '새끼손가락 걸고 약속'.",
               intentEn: "Yes, 'pinky promise'.",
               intentEs: "Sí, 'promesa de meñique'.",
               options: [
                 { 
                   text: "Pinky promise.", 
                   correct: true, 
                   explain: "새끼손가락 걸고 하는 약속.",
                   explainEn: "A promise made by linking pinky fingers.",
                   explainEs: "Una promesa hecha enlazando meñiques."
                 },
                 { 
                   text: "Small finger promise.", 
                   correct: false, 
                   explain: "작은 손가락 약속.",
                   explainEn: "Small finger promise.",
                   explainEs: "Promesa de dedo pequeño."
                 },
                 { 
                   text: "Hand promise.", 
                   correct: false, 
                   explain: "손 약속.",
                   explainEn: "Hand promise.",
                   explainEs: "Promesa de mano."
                 }
               ]
             }
          ] 
        },
        { 
          id: 3, 
          title: "친구 소개", 
          titleEn: "Meeting Friends",
          titleEs: "Conocer Amigos",
          description: "Lucas의 친구들에게 소개받는 자리입니다.", 
          descriptionEn: "Being introduced to Lucas's friends.",
          descriptionEs: "Ser presentado a los amigos de Lucas.",
          rounds: [
             {
               id: 'l-i-ch3-r1',
               context: "Lucas: 오늘 내 친구들 만나는 거 알지? 긴장돼?",
               contextEn: "Lucas: You know we're meeting my friends today, right? Nervous?",
               contextEs: "Lucas: Sabes que hoy conocemos a mis amigos, ¿verdad? ¿Nervioso?",
               intent: "조금. 걔네랑 잘 '어울릴 수 있을까'?",
               intentEn: "A bit. Will I 'fit in' with them?",
               intentEs: "Un poco. ¿'Encajaré' con ellos?",
               options: [
                 { 
                   text: "Will I fit in?", 
                   correct: true, 
                   explain: "'Fit in'은 무리에 잘 섞이다, 어울리다는 뜻.",
                   explainEn: "'Fit in' means to blend well with a group, to get along.",
                   explainEs: "'Fit in' significa mezclarse bien con un grupo, llevarse bien."
                 },
                 { 
                   text: "Can I mix?", 
                   correct: false, 
                   explain: "섞일 수 있냐?",
                   explainEn: "Can I mix?",
                   explainEs: "¿Puedo mezclarme?"
                 },
                 { 
                   text: "Do they like me?", 
                   correct: false, 
                   explain: "걔들이 날 좋아할까?",
                   explainEn: "Will they like me?",
                   explainEs: "¿Les gustaré?"
                 }
               ]
             },
             {
               id: 'l-i-ch3-r2',
               context: "Lucas: 걱정 마. 걔네 다 성격 좋아. 너라면 다들 좋아할 거야.",
               contextEn: "Lucas: Don't worry. They're all cool. They'll love you.",
               contextEs: "Lucas: No te preocupes. Todos son geniales. Te amarán.",
               intent: "고마워. 가서 '점수 좀 따야겠다'.",
               intentEn: "Thanks. I should go and 'score some points'.",
               intentEs: "Gracias. Debería ir y 'ganar algunos puntos'.",
               options: [
                 { 
                   text: "I should score some points.", 
                   correct: true, 
                   explain: "점수를 따다, 즉 좋은 인상을 주다는 뜻.",
                   explainEn: "It means to score points, i.e., to make a good impression.",
                   explainEs: "Significa ganar puntos, es decir, causar una buena impresión."
                 },
                 { 
                   text: "I get grade.", 
                   correct: false, 
                   explain: "성적을 받다.",
                   explainEn: "I get a grade.",
                   explainEs: "Obtengo una calificación."
                 },
                 { 
                   text: "Make them happy.", 
                   correct: false, 
                   explain: "그들을 행복하게 하다.",
                   explainEn: "Make them happy.",
                   explainEs: "Hacerlos felices."
                 }
               ]
             },
             {
               id: 'l-i-ch3-r3',
               context: "Lucas: (친구들과 만난 후) 봐, 금방 친해졌잖아. 너 친화력 대박이다.",
               contextEn: "Lucas: (After meeting) See, you got close instantly. Your social skills are amazing.",
               contextEs: "Lucas: (Después de conocerlos) Mira, te acercaste instantáneamente. Tus habilidades sociales son increíbles.",
               intent: "다행이다. 우리끼리 '통하는 게 있더라'.",
               intentEn: "Good. We 'hit it off'.",
               intentEs: "Bien. Nos 'llevamos bien'.",
               options: [
                 { 
                   text: "We hit it off.", 
                   correct: true, 
                   explain: "'Hit it off'는 만나자마자 죽이 잘 맞다는 뜻.",
                   explainEn: "'Hit it off' means we got along well right from the start.",
                   explainEs: "'Hit it off' significa que nos llevamos bien desde el principio."
                 },
                 { 
                   text: "We connect well.", 
                   correct: false, 
                   explain: "연결이 잘 된다.",
                   explainEn: "We connect well.",
                   explainEs: "Nos conectamos bien."
                 },
                 { 
                   text: "Good communication.", 
                   correct: false, 
                   explain: "좋은 의사소통.",
                   explainEn: "Good communication.",
                   explainEs: "Buena comunicación."
                 }
               ]
             },
             {
               id: 'l-i-ch3-r4',
               context: "Lucas: 친구들이 너 성격 진짜 좋다고 난리야. 내 어깨가 으쓱하네.",
               contextEn: "Lucas: Friends are raving about your personality. I'm so proud.",
               contextEs: "Lucas: Los amigos están elogiando tu personalidad. Estoy tan orgulloso.",
               intent: "네가 좋으면 나도 좋아. '체면 치레는 했네'.",
               intentEn: "If you're good, I'm good too. I 'saved face'.",
               intentEs: "Si eres bueno, yo también. 'Salvé las apariencias'.",
               options: [
                 { 
                   text: "I saved face.", 
                   correct: true, 
                   explain: "'Save face'는 체면을 살리다는 뜻.",
                   explainEn: "'Save face' means to preserve one's dignity.",
                   explainEs: "'Save face' significa preservar la dignidad de uno."
                 },
                 { 
                   text: "I did good.", 
                   correct: false, 
                   explain: "잘 했다.",
                   explainEn: "I did well.",
                   explainEs: "Lo hice bien."
                 },
                 { 
                   text: "Face is safe.", 
                   correct: false, 
                   explain: "얼굴은 안전하다.",
                   explainEn: "Face is safe.",
                   explainEs: "La cara está a salvo."
                 }
               ]
             },
             {
               id: 'l-i-ch3-r5',
               context: "Lucas: 오늘 고생했어. 집에 가서 푹 쉬자.",
               contextEn: "Lucas: Good job today. Let's go home and rest.",
               contextEs: "Lucas: Buen trabajo hoy. Vamos a casa y descansemos.",
               intent: "응, 오늘 정말 '즐거운 시간이었어'.",
               intentEn: "Yes, I really 'had a blast' today.",
               intentEs: "Sí, realmente 'me divertí mucho' hoy.",
               options: [
                 { 
                   text: "I had a blast.", 
                   correct: true, 
                   explain: "'Have a blast'는 아주 즐거운 시간을 보내다는 뜻.",
                   explainEn: "'Have a blast' means to have a very enjoyable time.",
                   explainEs: "'Have a blast' significa pasar un tiempo muy agradable."
                 },
                 { 
                   text: "Funny time.", 
                   correct: false, 
                   explain: "웃긴 시간.",
                   explainEn: "Funny time.",
                   explainEs: "Tiempo divertido."
                 },
                 { 
                   text: "Enjoyed much.", 
                   correct: false, 
                   explain: "많이 즐겼다.",
                   explainEn: "Enjoyed a lot.",
                   explainEs: "Disfruté mucho."
                 }
               ]
             }
          ] 
        },
        { 
          id: 4, 
          title: "첫 여행", 
          titleEn: "First Trip",
          titleEs: "Primer Viaje",
          description: "함께 여행을 떠나 잊지 못할 추억을 만듭니다.", 
          descriptionEn: "Going on a trip together to create unforgettable memories.",
          descriptionEs: "Hacer un viaje juntos para crear recuerdos inolvidables.",
          rounds: [
             {
               id: 'l-i-ch4-r1',
               context: "Lucas: 드디어 여행 가는 날이다! 짐은 다 쌌어?",
               contextEn: "Lucas: Finally trip day! Did you pack everything?",
               contextEs: "Lucas: ¡Finalmente el día del viaje! ¿Empacaste todo?",
               intent: "응. 설레서 어제 '한숨도 못 잤어'.",
               intentEn: "Yes. I was so excited I 'couldn't sleep a wink' yesterday.",
               intentEs: "Sí. Estaba tan emocionado que 'no pude dormir ni un minuto' ayer.",
               options: [
                 { 
                   text: "I couldn't sleep a wink.", 
                   correct: true, 
                   explain: "한숨도 못 잤다는 관용구.",
                   explainEn: "An idiom meaning I couldn't sleep at all.",
                   explainEs: "Un modismo que significa que no pude dormir en absoluto."
                 },
                 { 
                   text: "No sleep yesterday.", 
                   correct: false, 
                   explain: "어제 잠 없음.",
                   explainEn: "No sleep yesterday.",
                   explainEs: "Sin sueño ayer."
                 },
                 { 
                   text: "Eyes open all night.", 
                   correct: false, 
                   explain: "밤새 눈 뜨고 있었다.",
                   explainEn: "Eyes open all night.",
                   explainEs: "Ojos abiertos toda la noche."
                 }
               ]
             },
             {
               id: 'l-i-ch4-r2',
               context: "Lucas: 나도 그래. 운전은 내가 할 테니까 넌 편하게 있어.",
               contextEn: "Lucas: Me too. I'll drive, so you relax.",
               contextEs: "Lucas: Yo también. Yo conduciré, así que tú relájate.",
               intent: "고마워. 졸리면 말해, '교대해 줄게'.",
               intentEn: "Thanks. If you get sleepy, tell me, I'll 'take turns'.",
               intentEs: "Gracias. Si te da sueño, dime, 'tomaré turnos'.",
               options: [
                 { 
                   text: "I'll take turns.", 
                   correct: true, 
                   explain: "교대하겠다는 뜻.",
                   explainEn: "It means I'll take turns.",
                   explainEs: "Significa que tomaré turnos."
                 },
                 { 
                   text: "Change me.", 
                   correct: false, 
                   explain: "나를 바꿔라.",
                   explainEn: "Change me.",
                   explainEs: "Cámbiame."
                 },
                 { 
                   text: "You sleep I drive.", 
                   correct: false, 
                   explain: "너 자라 나 운전한다.",
                   explainEn: "You sleep, I drive.",
                   explainEs: "Tú duermes, yo conduzco."
                 }
               ]
             },
             {
               id: 'l-i-ch4-r3',
               context: "Lucas: 와, 바다다! 경치 진짜 끝내준다.",
               contextEn: "Lucas: Wow, the ocean! The view is killer.",
               contextEs: "Lucas: ¡Vaya, el océano! La vista es increíble.",
               intent: "정말 아름다워. '숨이 멎을 것 같아'.",
               intentEn: "Really beautiful. It's 'breathtaking'.",
               intentEs: "Realmente hermoso. Es 'impresionante'.",
               options: [
                 { 
                   text: "It's breathtaking.", 
                   correct: true, 
                   explain: "숨이 멎을 듯 아름답다는 표현.",
                   explainEn: "An expression meaning so beautiful it takes your breath away.",
                   explainEs: "Una expresión que significa tan hermoso que te quita el aliento."
                 },
                 { 
                   text: "My breath stops.", 
                   correct: false, 
                   explain: "내 숨이 멈춘다.",
                   explainEn: "My breath stops.",
                   explainEs: "Mi aliento se detiene."
                 },
                 { 
                   text: "Very beautiful.", 
                   correct: false, 
                   explain: "평범해.",
                   explainEn: "Too plain.",
                   explainEs: "Demasiado simple."
                 }
               ]
             },
             {
               id: 'l-i-ch4-r4',
               context: "Lucas: 우리 여기서 사진 찍자. 남는 건 사진뿐이라잖아.",
               contextEn: "Lucas: Let's take a picture here. Photos are the only thing that lasts.",
               contextEs: "Lucas: Tomemos una foto aquí. Las fotos son lo único que perdura.",
               intent: "그래. 예쁘게 '찍어줘'.",
               intentEn: "Sure. 'Take a nice shot'.",
               intentEs: "Claro. 'Toma una buena foto'.",
               options: [
                 { 
                   text: "Take a nice shot.", 
                   correct: true, 
                   explain: "잘 찍어달라는 말.",
                   explainEn: "A request to take a good photo.",
                   explainEs: "Una solicitud para tomar una buena foto."
                 },
                 { 
                   text: "Shoot me nicely.", 
                   correct: false, 
                   explain: "나를 좋게 쏴라?",
                   explainEn: "Shoot me nicely?",
                   explainEs: "¿Disparame bien?"
                 },
                 { 
                   text: "Make photo.", 
                   correct: false, 
                   explain: "사진을 만들어라.",
                   explainEn: "Make a photo.",
                   explainEs: "Haz una foto."
                 }
               ]
             },
             {
               id: 'l-i-ch4-r5',
               context: "Lucas: 이번 여행 평생 잊지 못할 거야. 함께해줘서 고마워.",
               contextEn: "Lucas: I'll never forget this trip. Thanks for being with me.",
               contextEs: "Lucas: Nunca olvidaré este viaje. Gracias por estar conmigo.",
               intent: "나야말로. 최고의 '추억이야'.",
               intentEn: "Me too. It's the 'best memory'.",
               intentEs: "Yo también. Es el 'mejor recuerdo'.",
               options: [
                 { 
                   text: "It's the best memory.", 
                   correct: true, 
                   explain: "최고의 추억이라는 뜻.",
                   explainEn: "It means the best memory.",
                   explainEs: "Significa el mejor recuerdo."
                 },
                 { 
                   text: "Good remember.", 
                   correct: false, 
                   explain: "좋은 기억하다.",
                   explainEn: "Good remember.",
                   explainEs: "Buen recuerdo."
                 },
                 { 
                   text: "Nice thinking.", 
                   correct: false, 
                   explain: "좋은 생각.",
                   explainEn: "Nice thinking.",
                   explainEs: "Buen pensamiento."
                 }
               ]
             }
          ] 
        },
        { 
          id: 5, 
          title: "기념일", 
          titleEn: "Anniversary",
          titleEs: "Aniversario",
          description: "100일 기념일을 맞아 깜짝 이벤트를 합니다.", 
          descriptionEn: "Having a surprise event for the 100-day anniversary.",
          descriptionEs: "Teniendo un evento sorpresa para el aniversario de 100 días.",
          rounds: [
             {
               id: 'l-i-ch5-r1',
               context: "Lucas: {user}, 오늘 무슨 날인지 알지? 꽃 받아.",
               contextEn: "Lucas: {user}, you know what day it is, right? Here are flowers.",
               contextEs: "Lucas: {user}, sabes qué día es, ¿verdad? Aquí tienes flores.",
               intent: "어머, 세상에! '감동받았어'.",
               intentEn: "Oh my goodness! I'm 'touched'.",
               intentEs: "¡Oh, Dios mío! Estoy 'conmovido'.",
               options: [
                 { 
                   text: "I'm touched.", 
                   correct: true, 
                   explain: "감동받았다는 뜻.",
                   explainEn: "It means I'm moved/touched.",
                   explainEs: "Significa que estoy conmovido."
                 },
                 { 
                   text: "I am moving.", 
                   correct: false, 
                   explain: "나는 움직이는 중이다.",
                   explainEn: "I'm moving (relocating).",
                   explainEs: "Me estoy mudando."
                 },
                 { 
                   text: "Heart attack.", 
                   correct: false, 
                   explain: "심장 마비?",
                   explainEn: "Heart attack?",
                   explainEs: "¿Ataque al corazón?"
                 }
               ]
             },
             {
               id: 'l-i-ch5-r2',
               context: "Lucas: 벌써 우리가 만난 지 100일이라니. 시간 진짜 빠르다.",
               contextEn: "Lucas: It's already been 100 days. Time really flies.",
               contextEs: "Lucas: Ya han pasado 100 días. El tiempo realmente vuela.",
               intent: "그러게. 엊그제 같은데 '믿기지가 않아'.",
               intentEn: "Right. It feels like yesterday, I 'can't believe it'.",
               intentEs: "Cierto. Se siente como ayer, 'no puedo creerlo'.",
               options: [
                 { 
                   text: "I can't believe it.", 
                   correct: true, 
                   explain: "믿을 수 없다는 표현.",
                   explainEn: "An expression meaning I can't believe it.",
                   explainEs: "Una expresión que significa que no puedo creerlo."
                 },
                 { 
                   text: "No believe.", 
                   correct: false, 
                   explain: "믿음 없다.",
                   explainEn: "No belief.",
                   explainEs: "Sin creencia."
                 },
                 { 
                   text: "It is lie.", 
                   correct: false, 
                   explain: "그건 거짓말이다.",
                   explainEn: "It's a lie.",
                   explainEs: "Es una mentira."
                 }
               ]
             },
             {
               id: 'l-i-ch5-r3',
               context: "Lucas: 이거 네 생각나서 샀어. 마음에 들었으면 좋겠다.",
               contextEn: "Lucas: I bought this thinking of you. Hope you like it.",
               contextEs: "Lucas: Compré esto pensando en ti. Espero que te guste.",
               intent: "뭐야? 나 '기대해도 돼'?",
               intentEn: "What is it? Can I 'get my hopes up'?",
               intentEs: "¿Qué es? ¿Puedo 'tener esperanzas'?",
               options: [
                 { 
                   text: "Can I get my hopes up?", 
                   correct: true, 
                   explain: "기대해도 되냐는 뜻.",
                   explainEn: "It means can I be hopeful?",
                   explainEs: "Significa ¿puedo tener esperanzas?"
                 },
                 { 
                   text: "Can I expect?", 
                   correct: false, 
                   explain: "목적어가 없어 어색해.",
                   explainEn: "Missing object, awkward.",
                   explainEs: "Falta el objeto, incómodo."
                 },
                 { 
                   text: "I wait good.", 
                   correct: false, 
                   explain: "잘 기다린다.",
                   explainEn: "I wait well.",
                   explainEs: "Espero bien."
                 }
               ]
             },
             {
               id: 'l-i-ch5-r4',
               context: "Lucas: (목걸이를 걸어주며) 널 만나고 매일이 선물 같아.",
               contextEn: "Lucas: (Putting on necklace) Every day is like a gift since I met you.",
               contextEs: "Lucas: (Poniendo el collar) Cada día es como un regalo desde que te conocí.",
               intent: "나도. 넌 내게 '행운이야'.",
               intentEn: "Me too. You're my 'lucky charm'.",
               intentEs: "Yo también. Eres mi 'amuleto de la suerte'.",
               options: [
                 { 
                   text: "You're my lucky charm.", 
                   correct: true, 
                   explain: "행운의 부적, 행운 그 자체라는 뜻.",
                   explainEn: "It means a lucky charm, luck itself.",
                   explainEs: "Significa un amuleto de la suerte, la suerte misma."
                 },
                 { 
                   text: "You are lucky.", 
                   correct: false, 
                   explain: "넌 운이 좋다.",
                   explainEn: "You're lucky.",
                   explainEs: "Tienes suerte."
                 },
                 { 
                   text: "My luck is you.", 
                   correct: false, 
                   explain: "내 운은 너다.",
                   explainEn: "My luck is you.",
                   explainEs: "Mi suerte eres tú."
                 }
               ]
             },
             {
               id: 'l-i-ch5-r5',
               context: "Lucas: 앞으로 1년, 10년도 함께하자. 사랑해.",
               contextEn: "Lucas: Let's be together for 1 year, 10 years. Love you.",
               contextEs: "Lucas: Estemos juntos por 1 año, 10 años. Te amo.",
               intent: "물론이지. 우린 '영원할 거야'.",
               intentEn: "Of course. We'll 'last forever'.",
               intentEs: "Por supuesto. 'Duraremos para siempre'.",
               options: [
                 { 
                   text: "We'll last forever.", 
                   correct: true, 
                   explain: "영원히 지속될 거라는 뜻.",
                   explainEn: "It means we'll last forever.",
                   explainEs: "Significa que duraremos para siempre."
                 },
                 { 
                   text: "We are forever.", 
                   correct: false, 
                   explain: "우린 영원이다.",
                   explainEn: "We are forever.",
                   explainEs: "Somos para siempre."
                 },
                 { 
                   text: "Endless love.", 
                   correct: false, 
                   explain: "노래 제목?",
                   explainEn: "Song title?",
                   explainEs: "¿Título de canción?"
                 }
               ]
             }
          ] 
        }
      ],
      advanced: [
         {
          id: 1,
          title: "오해와 진실",
          titleEn: "Misunderstanding and Truth",
          titleEs: "Malentendido y Verdad",
          description: "Lucas와 깊은 오해를 풉니다.",
          descriptionEn: "Resolving a deep misunderstanding with Lucas.",
          descriptionEs: "Resolviendo un malentendido profundo con Lucas.",
          rounds: [
            {
              id: 'l-a-r1',
              context: "Lucas: {user}, 솔직히 말해줘. 아직 전 남자친구 못 잊은 거야?",
              contextEn: "Lucas: {user}, tell me honestly. Are you still not over your ex?",
              contextEs: "Lucas: {user}, dime honestamente. ¿Aún no has superado a tu ex?",
              intent: "무슨 소리야. 걔랑은 완전히 '끝난 사이'라고!",
              intentEn: "What are you talking about. I'm completely 'done with him'!",
              intentEs: "¿De qué estás hablando? Estoy completamente 'terminada con él'!",
              options: [
                { 
                  text: "I'm done with him.", 
                  correct: true, 
                  explain: "'Done with'는 관계가 완전히 끝났다는 뜻.",
                  explainEn: "'Done with' means the relationship is completely over.",
                  explainEs: "'Done with' significa que la relación está completamente terminada."
                },
                { 
                  text: "He is finished.", 
                  correct: false, 
                  explain: "그가 죽었다는 뜻처럼 들릴 수 있어.",
                  explainEn: "Can sound like he's dead.",
                  explainEs: "Puede sonar como si estuviera muerto."
                },
                { 
                  text: "We are the end.", 
                  correct: false, 
                  explain: "문법적으로 어색해.",
                  explainEn: "Grammatically awkward.",
                  explainEs: "Gramaticalmente incómodo."
                }
              ]
            },
            {
              id: 'l-a-r2',
              context: "Lucas: 하지만 어제 걔랑 통화하는 거 봤어. 나 몰래 뒤에서 뭐 하는 거야?",
              contextEn: "Lucas: But I saw you talking to him yesterday. What are you doing behind my back?",
              contextEs: "Lucas: Pero te vi hablando con él ayer. ¿Qué estás haciendo a mis espaldas?",
              intent: "오해하지 마. 그냥 일 때문에 전화 온 거야. '딴짓한 거 없어'.",
              intentEn: "Don't misunderstand. It was just a work call. I 'wasn't fooling around'.",
              intentEs: "No malinterpretes. Fue solo una llamada de trabajo. 'No estaba haciendo tonterías'.",
              options: [
                { 
                  text: "I wasn't fooling around.", 
                  correct: true, 
                  explain: "'Fool around'는 바람을 피우거나 딴짓을 하다는 뜻.",
                  explainEn: "'Fool around' means to cheat or mess around.",
                  explainEs: "'Fool around' significa engañar o hacer tonterías."
                },
                { 
                  text: "I did nothing bad.", 
                  correct: false, 
                  explain: "너무 유치한 변명.",
                  explainEn: "Too childish an excuse.",
                  explainEs: "Una excusa demasiado infantil."
                },
                { 
                  text: "No other acts.", 
                  correct: false, 
                  explain: "법률 용어 같아.",
                  explainEn: "Sounds like legal terminology.",
                  explainEs: "Suena como terminología legal."
                }
              ]
            },
            {
              id: 'l-a-r3',
              context: "Lucas: 믿고 싶지만 자꾸 불안해. 네가 떠날까 봐.",
              contextEn: "Lucas: I want to believe you, but I keep getting anxious. Afraid you might leave.",
              contextEs: "Lucas: Quiero creerte, pero sigo sintiéndome ansioso. Temo que te vayas.",
              intent: "바보같이 굴지 마. 난 너한테 '올인'했다고.",
              intentEn: "Don't be silly. I'm 'fully committed to you'.",
              intentEs: "No seas tonto. Estoy 'completamente comprometido contigo'.",
              options: [
                { 
                  text: "I'm fully committed to you.", 
                  correct: true, 
                  explain: "'Committed'는 헌신하는, 전념하는, 즉 올인했다는 뜻.",
                  explainEn: "'Committed' means dedicated, devoted, i.e., all in.",
                  explainEs: "'Committed' significa dedicado, devoto, es decir, todo dentro."
                },
                { 
                  text: "I am all in you.", 
                  correct: false, 
                  explain: "표현이 좀 야할 수 있어...",
                  explainEn: "The expression can be a bit suggestive...",
                  explainEs: "La expresión puede ser un poco sugerente..."
                },
                { 
                  text: "You are my only.", 
                  correct: false, 
                  explain: "Only one이라고 해야 해.",
                  explainEn: "Should say 'only one'.",
                  explainEs: "Debería decir 'solo uno'."
                }
              ]
            },
            {
              id: 'l-a-r4',
              context: "Lucas: 정말이지? 내가 너무 예민하게 굴어서 미안해.",
              contextEn: "Lucas: Really? I'm sorry for being so sensitive.",
              contextEs: "Lucas: ¿De verdad? Perdón por ser tan sensible.",
              intent: "알면 됐어. '비 온 뒤에 땅이 굳는다'잖아.",
              intentEn: "That's fine. 'What doesn't kill you makes you stronger', right?",
              intentEs: "Está bien. 'Lo que no te mata te hace más fuerte', ¿verdad?",
              options: [
                { 
                  text: "It's a blessing in disguise.", 
                  correct: false, 
                  explain: "이건 전화위복이란 뜻이야.",
                  explainEn: "This means a blessing in disguise.",
                  explainEs: "Esto significa una bendición disfrazada."
                },
                { 
                  text: "What doesn't kill you makes you stronger.", 
                  correct: true, 
                  explain: "시련이 우리를 더 강하게 만든다는 뜻.",
                  explainEn: "It means trials make us stronger.",
                  explainEs: "Significa que las pruebas nos hacen más fuertes."
                },
                { 
                  text: "Rain makes ground hard.", 
                  correct: false, 
                  explain: "한국 속담 직역은 안 통할 때가 많아.",
                  explainEn: "Literal translations of Korean proverbs often don't work.",
                  explainEs: "Las traducciones literales de proverbios coreanos a menudo no funcionan."
                }
              ]
            },
             {
              id: 'l-a-r5',
              context: "Lucas: 고마워 {user}. 앞으로는 너만 믿을게.",
              contextEn: "Lucas: Thanks {user}. I'll only trust you from now on.",
              contextEs: "Lucas: Gracias {user}. Solo confiaré en ti de ahora en adelante.",
              intent: "그래. 우린 뭐든 '함께 이겨낼 수 있어'.",
              intentEn: "Right. We can 'weather any storm' together.",
              intentEs: "Cierto. Podemos 'soportar cualquier tormenta' juntos.",
              options: [
                { 
                  text: "We can weather any storm.", 
                  correct: true, 
                  explain: "'Weather the storm'은 폭풍우(시련)를 견뎌내다는 멋진 표현.",
                  explainEn: "'Weather the storm' is a great expression meaning to endure trials.",
                  explainEs: "'Weather the storm' es una gran expresión que significa soportar las pruebas."
                },
                { 
                  text: "We win together.", 
                  correct: false, 
                  explain: "스포츠 경기 같아.",
                  explainEn: "Sounds like a sports game.",
                  explainEs: "Suena como un juego deportivo."
                },
                { 
                  text: "We can do it.", 
                  correct: false, 
                  explain: "너무 평범해.",
                  explainEn: "Too plain.",
                  explainEs: "Demasiado simple."
                }
              ]
            }
          ]
        },
        { 
          id: 2, 
          title: "청혼", 
          titleEn: "Proposal",
          titleEs: "Propuesta de Matrimonio",
          description: "로맨틱한 장소에서 프러포즈를 받습니다.", 
          descriptionEn: "Receiving a proposal at a romantic place.",
          descriptionEs: "Recibiendo una propuesta de matrimonio en un lugar romántico.",
          rounds: [
             {
               id: 'l-a-ch2-r1',
               context: "Lucas: 오늘 저녁은 내가 예약한 레스토랑으로 가자. 특별한 날이니까.",
               contextEn: "Lucas: Let's go to the restaurant I booked tonight. It's a special day.",
               contextEs: "Lucas: Vamos al restaurante que reservé esta noche. Es un día especial.",
               intent: "무슨 날이야? 뭔가 '수상한데'.",
               intentEn: "What day is it? Something 'smells fishy'.",
               intentEs: "¿Qué día es? Algo 'huele a pescado'.",
               options: [
                 { 
                   text: "Something smells fishy.", 
                   correct: true, 
                   explain: "수상쩍다는 뜻.",
                   explainEn: "It means something is suspicious.",
                   explainEs: "Significa que algo es sospechoso."
                 },
                 { 
                   text: "You are strange.", 
                   correct: false, 
                   explain: "너 이상해.",
                   explainEn: "You're strange.",
                   explainEs: "Eres extraño."
                 },
                 { 
                   text: "Suspicious day.", 
                   correct: false, 
                   explain: "의심스러운 날.",
                   explainEn: "Suspicious day.",
                   explainEs: "Día sospechoso."
                 }
               ]
             },
             {
               id: 'l-a-ch2-r2',
               context: "Lucas: (식사 도중) {user}, 우리 만난 지 꽤 됐잖아. 넌 나와의 미래를 생각해 본 적 있어?",
               contextEn: "Lucas: (During meal) {user}, we've been together for a while. Have you thought about a future with me?",
               contextEs: "Lucas: (Durante la comida) {user}, hemos estado juntos por un tiempo. ¿Has pensado en un futuro conmigo?",
               intent: "갑자기 왜 그래? 나 '긴장되게'.",
               intentEn: "Why suddenly? You're 'making me nervous'.",
               intentEs: "¿Por qué de repente? Me estás 'poniendo nervioso'.",
               options: [
                 { 
                   text: "You're making me nervous.", 
                   correct: true, 
                   explain: "긴장된다는 뜻.",
                   explainEn: "It means I'm getting nervous.",
                   explainEs: "Significa que me estoy poniendo nervioso."
                 },
                 { 
                   text: "I am tension.", 
                   correct: false, 
                   explain: "난 장력이다?",
                   explainEn: "I am tension?",
                   explainEs: "¿Soy tensión?"
                 },
                 { 
                   text: "Don't scare me.", 
                   correct: false, 
                   explain: "겁주지 마.",
                   explainEn: "Don't scare me.",
                   explainEs: "No me asustes."
                 }
               ]
             },
             {
               id: 'l-a-ch2-r3',
               context: "Lucas: (반지를 꺼내며) 나랑 결혼해줄래? 평생 너만 사랑할게.",
               contextEn: "Lucas: (Taking out ring) Will you marry me? I'll love only you forever.",
               contextEs: "Lucas: (Sacando el anillo) ¿Te casarás conmigo? Te amaré solo a ti para siempre.",
               intent: "어머! 너무 놀라서 '말이 안 나와'.",
               intentEn: "Oh my! I'm so surprised I'm 'speechless'.",
               intentEs: "¡Oh! Estoy tan sorprendido que estoy 'sin palabras'.",
               options: [
                 { 
                   text: "I'm speechless.", 
                   correct: true, 
                   explain: "말문이 막힐 정도로 놀랍고 감동적이라는 뜻.",
                   explainEn: "It means so surprised and moved that I can't speak.",
                   explainEs: "Significa tan sorprendido y conmovido que no puedo hablar."
                 },
                 { 
                   text: "I have no word.", 
                   correct: false, 
                   explain: "단어가 없다.",
                   explainEn: "I have no words.",
                   explainEs: "No tengo palabras."
                 },
                 { 
                   text: "Silent mode.", 
                   correct: false, 
                   explain: "진동 모드?",
                   explainEn: "Silent mode?",
                   explainEs: "¿Modo silencioso?"
                 }
               ]
             },
             {
               id: 'l-a-ch2-r4',
               context: "Lucas: 대답해줘. 내 아내가 되어줄 거야?",
               contextEn: "Lucas: Answer me. Will you be my wife?",
               contextEs: "Lucas: Respóndeme. ¿Serás mi esposa?",
               intent: "당연하지. '백만 번이라도 예스야'!",
               intentEn: "Of course. 'A million times yes'!",
               intentEs: "Por supuesto. '¡Un millón de veces sí'!",
               options: [
                 { 
                   text: "A million times yes!", 
                   correct: true, 
                   explain: "강력한 긍정의 표현.",
                   explainEn: "A strong expression of affirmation.",
                   explainEs: "Una expresión fuerte de afirmación."
                 },
                 { 
                   text: "Yes yes yes.", 
                   correct: false, 
                   explain: "가벼워 보여.",
                   explainEn: "Looks too casual.",
                   explainEs: "Parece demasiado casual."
                 },
                 { 
                   text: "I become wife.", 
                   correct: false, 
                   explain: "아내가 되겠다.",
                   explainEn: "I'll become a wife.",
                   explainEs: "Me convertiré en esposa."
                 }
               ]
             },
             {
               id: 'l-a-ch2-r5',
               context: "Lucas: 고마워. 내가 세상에서 제일 행복한 남자로 만들어줄게.",
               contextEn: "Lucas: Thank you. I'll make you the happiest man/woman in the world.",
               contextEs: "Lucas: Gracias. Te haré el hombre/mujer más feliz del mundo.",
               intent: "나도. 우린 '천생연분'이니까.",
               intentEn: "Me too. We're 'made for each other'.",
               intentEs: "Yo también. Estamos 'hechos el uno para el otro'.",
               options: [
                 { 
                   text: "We're made for each other.", 
                   correct: true, 
                   explain: "서로를 위해 만들어졌다, 천생연분이라는 뜻.",
                   explainEn: "It means we were made for each other, a perfect match.",
                   explainEs: "Significa que fuimos hechos el uno para el otro, una pareja perfecta."
                 },
                 { 
                   text: "We are destiny.", 
                   correct: false, 
                   explain: "우린 운명이다.",
                   explainEn: "We are destiny.",
                   explainEs: "Somos destino."
                 },
                 { 
                   text: "Match made in heaven.", 
                   correct: true, 
                   explain: "이것도 맞는 표현!",
                   explainEn: "This is also a correct expression!",
                   explainEs: "¡Esta también es una expresión correcta!"
                 }
               ]
             }
          ] 
        },
        { 
          id: 3, 
          title: "부모님 인사", 
          titleEn: "Meeting Parents",
          titleEs: "Conocer a los Padres",
          description: "부모님께 인사를 드리러 갑니다.", 
          descriptionEn: "Going to greet the parents.",
          descriptionEs: "Yendo a saludar a los padres.",
          rounds: [
             {
               id: 'l-a-ch3-r1',
               context: "Lucas: 부모님 뵙는 날이라니 너무 떨려. 나 괜찮아 보여?",
               contextEn: "Lucas: Nervous to meet your parents. Do I look okay?",
               contextEs: "Lucas: Nervioso por conocer a tus padres. ¿Me veo bien?",
               intent: "걱정 마. '말끔해 보여'.",
               intentEn: "Don't worry. You 'look sharp'.",
               intentEs: "No te preocupes. Te ves 'elegante'.",
               options: [
                 { 
                   text: "You look sharp.", 
                   correct: true, 
                   explain: "말끔하고 멋지다는 뜻.",
                   explainEn: "It means you look neat and stylish.",
                   explainEs: "Significa que te ves ordenado y elegante."
                 },
                 { 
                   text: "You look clean.", 
                   correct: false, 
                   explain: "깨끗해 보인다(안 씻은 것 같진 않다는 뜻).",
                   explainEn: "You look clean (meaning you don't look unwashed).",
                   explainEs: "Te ves limpio (significa que no pareces sin lavar)."
                 },
                 { 
                   text: "Good boy.", 
                   correct: false, 
                   explain: "강아지한테 하는 말.",
                   explainEn: "What you say to a dog.",
                   explainEs: "Lo que le dices a un perro."
                 }
               ]
             },
             {
               id: 'l-a-ch3-r2',
               context: "Lucas: 어머님이 무서우시면 어떡하지? 말실수할까 봐 겁나.",
               contextEn: "Lucas: What if your mom is scary? Scared I'll make a slip of the tongue.",
               contextEs: "Lucas: ¿Qué pasa si tu mamá es aterradora? Temo que cometa un desliz de lengua.",
               intent: "편하게 해. 그냥 '너 자신을 보여줘'.",
               intentEn: "Relax. Just 'be yourself'.",
               intentEs: "Relájate. Solo 'sé tú mismo'.",
               options: [
                 { 
                   text: "Just be yourself.", 
                   correct: true, 
                   explain: "가식 없이 본모습을 보여주라는 조언.",
                   explainEn: "Advice to show your true self without pretense.",
                   explainEs: "Consejo para mostrar tu verdadero yo sin pretensión."
                 },
                 { 
                   text: "Show your body.", 
                   correct: false, 
                   explain: "몸을 보여줘라?",
                   explainEn: "Show your body?",
                   explainEs: "¿Muestra tu cuerpo?"
                 },
                 { 
                   text: "Do self.", 
                   correct: false, 
                   explain: "문법 오류.",
                   explainEn: "Grammar error.",
                   explainEs: "Error gramatical."
                 }
               ]
             },
             {
               id: 'l-a-ch3-r3',
               context: "Lucas: (인사 후) 휴, 생각보다 분위기 좋았던 것 같아. 맞지?",
               contextEn: "Lucas: (After greeting) Whew, I think the atmosphere was better than expected. Right?",
               contextEs: "Lucas: (Después del saludo) Uf, creo que el ambiente fue mejor de lo esperado. ¿Verdad?",
               intent: "응. 부모님이 널 '마음에 들어 하셔'.",
               intentEn: "Yes. Your parents 'took a shine to you'.",
               intentEs: "Sí. Tus padres 'se encariñaron contigo'.",
               options: [
                 { 
                   text: "They took a shine to you.", 
                   correct: true, 
                   explain: "'Take a shine to'는 ~를 마음에 들어 하다는 뜻.",
                   explainEn: "'Take a shine to' means to take a liking to someone.",
                   explainEs: "'Take a shine to' significa tomar cariño a alguien."
                 },
                 { 
                   text: "They like you.", 
                   correct: false, 
                   explain: "평범해.",
                   explainEn: "Too plain.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "You passed test.", 
                   correct: false, 
                   explain: "시험 통과했다.",
                   explainEn: "You passed the test.",
                   explainEs: "Aprobaste el examen."
                 }
               ]
             },
             {
               id: 'l-a-ch3-r4',
               context: "Lucas: 진짜 다행이다. 점수 딴 거 맞지?",
               contextEn: "Lucas: Thank god. I scored points, right?",
               contextEs: "Lucas: Gracias a Dios. Gané puntos, ¿verdad?",
               intent: "그럼. 넌 '합격점이야'.",
               intentEn: "Right. You 'made the cut'.",
               intentEs: "Cierto. 'Pasaste el corte'.",
               options: [
                 { 
                   text: "You made the cut.", 
                   correct: true, 
                   explain: "'Make the cut'은 기준을 통과하다, 합격하다는 뜻.",
                   explainEn: "'Make the cut' means to pass the standard, to qualify.",
                   explainEs: "'Make the cut' significa pasar el estándar, calificar."
                 },
                 { 
                   text: "You pass.", 
                   correct: false, 
                   explain: "단순해.",
                   explainEn: "Too simple.",
                   explainEs: "Demasiado simple."
                 },
                 { 
                   text: "Score is good.", 
                   correct: false, 
                   explain: "점수가 좋다.",
                   explainEn: "Score is good.",
                   explainEs: "La puntuación es buena."
                 }
               ]
             },
             {
               id: 'l-a-ch3-r5',
               context: "Lucas: 이제 큰 산 넘었네. 결혼 준비 본격적으로 하자.",
               contextEn: "Lucas: Overcame a big hurdle. Let's start wedding prep seriously.",
               contextEs: "Lucas: Superamos un gran obstáculo. Comencemos la preparación de la boda en serio.",
               intent: "좋아. 차근차근 '준비해보자'.",
               intentEn: "Good. Let's 'get the ball rolling' step by step.",
               intentEs: "Bien. 'Pongamos la pelota en movimiento' paso a paso.",
               options: [
                 { 
                   text: "Let's get the ball rolling.", 
                   correct: true, 
                   explain: "일을 시작하다, 진행시키다는 뜻.",
                   explainEn: "It means to start something, to get things going.",
                   explainEs: "Significa comenzar algo, poner las cosas en marcha."
                 },
                 { 
                   text: "Ready start.", 
                   correct: false, 
                   explain: "준비 시작.",
                   explainEn: "Ready start.",
                   explainEs: "Listo para empezar."
                 },
                 { 
                   text: "Prepare well.", 
                   correct: false, 
                   explain: "잘 준비하자.",
                   explainEn: "Let's prepare well.",
                   explainEs: "Preparemos bien."
                 }
               ]
             }
          ] 
        },
        { 
          id: 4, 
          title: "동거 시작", 
          titleEn: "Moving In Together",
          titleEs: "Mudarse Juntos",
          description: "함께 살며 겪는 사소한 갈등을 해결합니다.", 
          descriptionEn: "Resolving minor conflicts while living together.",
          descriptionEs: "Resolviendo conflictos menores mientras vivimos juntos.",
          rounds: [
             {
               id: 'l-a-ch4-r1',
               context: "Lucas: {user}, 치약 좀 중간부터 짜지 마. 끝에서부터 짜야지.",
               contextEn: "Lucas: {user}, don't squeeze the toothpaste from the middle. Squeeze from the end.",
               contextEs: "Lucas: {user}, no aprietes la pasta de dientes desde el medio. Aprieta desde el final.",
               intent: "아 진짜? 그게 내 '성격이야(어쩔 수 없어)'.",
               intentEn: "Oh really? That's just 'how I roll'.",
               intentEs: "¿Oh de verdad? Así es 'como funciono'.",
               options: [
                 { 
                   text: "That's just how I roll.", 
                   correct: true, 
                   explain: "그게 내 방식이다, 내 스타일이다라는 뜻.",
                   explainEn: "It means that's my way, my style.",
                   explainEs: "Significa que esa es mi forma, mi estilo."
                 },
                 { 
                   text: "It is my personality.", 
                   correct: false, 
                   explain: "너무 진지해.",
                   explainEn: "Too serious.",
                   explainEs: "Demasiado serio."
                 },
                 { 
                   text: "I can't help it.", 
                   correct: false, 
                   explain: "어쩔 수 없다는 뜻이지만 how I roll이 더 자연스러움.",
                   explainEn: "Means I can't help it, but 'how I roll' is more natural.",
                   explainEs: "Significa que no puedo evitarlo, pero 'how I roll' es más natural."
                 }
               ]
             },
             {
               id: 'l-a-ch4-r2',
               context: "Lucas: 사소한 거지만 지켜줬으면 좋겠어. 같이 사는 거잖아.",
               contextEn: "Lucas: It's minor, but I wish you'd respect it. We live together.",
               contextEs: "Lucas: Es menor, pero desearía que lo respetaras. Vivimos juntos.",
               intent: "알겠어. 서로 '맞춰가야지'.",
               intentEn: "Got it. We need to 'meet halfway'.",
               intentEs: "Entendido. Necesitamos 'encontrar un punto medio'.",
               options: [
                 { 
                   text: "We need to meet halfway.", 
                   correct: true, 
                   explain: "타협하다, 서로 맞추다는 뜻.",
                   explainEn: "It means to compromise, to adjust to each other.",
                   explainEs: "Significa llegar a un compromiso, ajustarse mutuamente."
                 },
                 { 
                   text: "We fit together.", 
                   correct: false, 
                   explain: "우린 딱 맞다.",
                   explainEn: "We fit together.",
                   explainEs: "Encajamos juntos."
                 },
                 { 
                   text: "Match me.", 
                   correct: false, 
                   explain: "나한테 맞춰라.",
                   explainEn: "Match me.",
                   explainEs: "Ajusta a mí."
                 }
               ]
             },
             {
               id: 'l-a-ch4-r3',
               context: "Lucas: 고마워. 나도 양말 아무 데나 벗어놓는 거 고칠게.",
               contextEn: "Lucas: Thanks. I'll fix leaving socks everywhere too.",
               contextEs: "Lucas: Gracias. También arreglaré dejar calcetines por todas partes.",
               intent: "그래. 그건 진짜 나의 '참을 수 없는 부분(불만)'이야.",
               intentEn: "Right. That's really my 'pet peeve'.",
               intentEs: "Cierto. Eso es realmente mi 'molestia personal'.",
               options: [
                 { 
                   text: "That's my pet peeve.", 
                   correct: true, 
                   explain: "'Pet peeve'는 개인적으로 정말 싫어하는 것, 불만 사항.",
                   explainEn: "'Pet peeve' is something you really dislike personally, a complaint.",
                   explainEs: "'Pet peeve' es algo que realmente no te gusta personalmente, una queja."
                 },
                 { 
                   text: "I hate that.", 
                   correct: false, 
                   explain: "단순히 싫다는 뜻.",
                   explainEn: "Just means I hate that.",
                   explainEs: "Solo significa que odio eso."
                 },
                 { 
                   text: "Can't stand it.", 
                   correct: false, 
                   explain: "참을 수 없다.",
                   explainEn: "Can't stand it.",
                   explainEs: "No puedo soportarlo."
                 }
               ]
             },
             {
               id: 'l-a-ch4-r4',
               context: "Lucas: 노력할게. 싸우지 말고 잘 지내자.",
               contextEn: "Lucas: I'll try. Let's not fight and get along.",
               contextEs: "Lucas: Lo intentaré. No peleemos y llevémonos bien.",
               intent: "응. '비 온 뒤에 땅이 굳는' 법이니까.",
               intentEn: "Yes. 'Conflict strengthens the bond', right?",
               intentEs: "Sí. 'El conflicto fortalece el vínculo', ¿verdad?",
               options: [
                 { 
                   text: "Conflict strengthens the bond.", 
                   correct: true, 
                   explain: "갈등이 유대감을 강화한다는 의역.",
                   explainEn: "A paraphrase meaning conflict strengthens the bond.",
                   explainEs: "Una paráfrasis que significa que el conflicto fortalece el vínculo."
                 },
                 { 
                   text: "Rain hardens ground.", 
                   correct: false, 
                   explain: "직역.",
                   explainEn: "Literal translation.",
                   explainEs: "Traducción literal."
                 },
                 { 
                   text: "Fighting is good.", 
                   correct: false, 
                   explain: "싸움은 좋다?",
                   explainEn: "Fighting is good?",
                   explainEs: "¿Pelear es bueno?"
                 }
               ]
             },
             {
               id: 'l-a-ch4-r5',
               context: "Lucas: 사랑해. 맛있는 거 시켜 먹고 화해하자.",
               contextEn: "Lucas: Love you. Let's order good food and make up.",
               contextEs: "Lucas: Te amo. Pidamos buena comida y reconciliémonos.",
               intent: "좋아. 오늘 밤은 '파티다'!",
               intentEn: "Good. Tonight let's 'live it up'!",
               intentEs: "Bien. ¡Esta noche 'disfrutemos'!",
               options: [
                 { 
                   text: "Let's live it up tonight!", 
                   correct: true, 
                   explain: "'Live it up'은 신나게 즐기다, 흥청망청 놀다는 뜻.",
                   explainEn: "'Live it up' means to enjoy yourself wildly, to party.",
                   explainEs: "'Live it up' significa disfrutar locamente, hacer fiesta."
                 },
                 { 
                   text: "It is party.", 
                   correct: false, 
                   explain: "파티다.",
                   explainEn: "It's a party.",
                   explainEs: "Es una fiesta."
                 },
                 { 
                   text: "Eat well.", 
                   correct: false, 
                   explain: "잘 먹자.",
                   explainEn: "Let's eat well.",
                   explainEs: "Comamos bien."
                 }
               ]
             }
          ] 
        },
        { 
          id: 5, 
          title: "인생의 목표", 
          titleEn: "Life Goals",
          titleEs: "Metas de Vida",
          description: "서로의 미래와 가치관을 공유합니다.", 
          descriptionEn: "Sharing each other's future and values.",
          descriptionEs: "Compartiendo el futuro y los valores de cada uno.",
          rounds: [
             {
               id: 'l-a-ch5-r1',
               context: "Lucas: 자기는 나중에 어떤 부모가 되고 싶어?",
               contextEn: "Lucas: What kind of parent do you want to be later?",
               contextEs: "Lucas: ¿Qué tipo de padre quieres ser más tarde?",
               intent: "글쎄, 아직은 '감이 안 와'.",
               intentEn: "Well, I 'can't wrap my head around it yet'.",
               intentEs: "Bueno, aún 'no puedo entenderlo'.",
               options: [
                 { 
                   text: "I can't wrap my head around it yet.", 
                   correct: true, 
                   explain: "도저히 이해가 안 가거나 상상이 안 될 때 쓰는 표현.",
                   explainEn: "An expression used when you can't understand or imagine something.",
                   explainEs: "Una expresión usada cuando no puedes entender o imaginar algo."
                 },
                 { 
                   text: "I don't know.", 
                   correct: false, 
                   explain: "몰라.",
                   explainEn: "I don't know.",
                   explainEs: "No sé."
                 },
                 { 
                   text: "No feeling.", 
                   correct: false, 
                   explain: "느낌 없음.",
                   explainEn: "No feeling.",
                   explainEs: "Sin sensación."
                 }
               ]
             },
             {
               id: 'l-a-ch5-r2',
               context: "Lucas: 난 친구 같은 아빠가 되고 싶어. 우리 아이는 자유롭게 키우고 싶어.",
               contextEn: "Lucas: I want to be a friend-like dad. Raise our kid freely.",
               contextEs: "Lucas: Quiero ser un papá como amigo. Criar a nuestro hijo libremente.",
               intent: "멋지네. 나도 '전적으로 동의해'.",
               intentEn: "Cool. I 'couldn't agree more'.",
               intentEs: "Genial. 'No podría estar más de acuerdo'.",
               options: [
                 { 
                   text: "I couldn't agree more.", 
                   correct: true, 
                   explain: "전적으로 동의한다는 뜻.",
                   explainEn: "It means I completely agree.",
                   explainEs: "Significa que estoy completamente de acuerdo."
                 },
                 { 
                   text: "I agree 100%.", 
                   correct: false, 
                   explain: "나쁘지 않지만 관용구 표현이 더 좋음.",
                   explainEn: "Not bad but the idiomatic expression is better.",
                   explainEs: "No está mal pero la expresión idiomática es mejor."
                 },
                 { 
                   text: "You are right.", 
                   correct: false, 
                   explain: "네 말이 맞아.",
                   explainEn: "You're right.",
                   explainEs: "Tienes razón."
                 }
               ]
             },
             {
               id: 'l-a-ch5-r3',
               context: "Lucas: 우리가 함께라면 뭐든 잘할 수 있을 거야. 그치?",
               contextEn: "Lucas: We can do anything well together. Right?",
               contextEs: "Lucas: Podemos hacer cualquier cosa bien juntos. ¿Verdad?",
               intent: "그럼. 우린 '최고의 팀이잖아'.",
               intentEn: "Right. We 'make a great team'.",
               intentEs: "Cierto. Hacemos 'un gran equipo'.",
               options: [
                 { 
                   text: "We make a great team.", 
                   correct: true, 
                   explain: "우린 팀워크가 좋다는 뜻.",
                   explainEn: "It means we have good teamwork.",
                   explainEs: "Significa que tenemos buen trabajo en equipo."
                 },
                 { 
                   text: "We are team.", 
                   correct: false, 
                   explain: "우린 팀이다.",
                   explainEn: "We are a team.",
                   explainEs: "Somos un equipo."
                 },
                 { 
                   text: "Best team.", 
                   correct: false, 
                   explain: "최고의 팀.",
                   explainEn: "Best team.",
                   explainEs: "Mejor equipo."
                 }
               ]
             },
             {
               id: 'l-a-ch5-r4',
               context: "Lucas: 늙어서도 손잡고 산책 다니자. 약속해.",
               contextEn: "Lucas: Let's walk holding hands even when we're old. Promise.",
               contextEs: "Lucas: Caminemos tomados de la mano incluso cuando seamos viejos. Promesa.",
               intent: "당연하지. '검은 머리 파뿌리 될 때까지'.",
               intentEn: "Of course. 'Till death do us part'.",
               intentEs: "Por supuesto. 'Hasta que la muerte nos separe'.",
               options: [
                 { 
                   text: "Till death do us part.", 
                   correct: true, 
                   explain: "죽음이 우리를 갈라놓을 때까지, 즉 평생토록.",
                   explainEn: "Until death separates us, i.e., for life.",
                   explainEs: "Hasta que la muerte nos separe, es decir, de por vida."
                 },
                 { 
                   text: "Until hair becomes onion.", 
                   correct: false, 
                   explain: "한국 속담 직역 (파뿌리).",
                   explainEn: "Literal translation of Korean proverb (onion root).",
                   explainEs: "Traducción literal del proverbio coreano (raíz de cebolla)."
                 },
                 { 
                   text: "Forever young.", 
                   correct: false, 
                   explain: "영원히 젊게?",
                   explainEn: "Forever young?",
                   explainEs: "¿Por siempre joven?"
                 }
               ]
             },
             {
               id: 'l-a-ch5-r5',
               context: "Lucas: 고마워, 내 곁에 있어줘서. 사랑해.",
               contextEn: "Lucas: Thanks for being by my side. Love you.",
               contextEs: "Lucas: Gracias por estar a mi lado. Te amo.",
               intent: "나도 사랑해. 넌 나의 '영혼의 단짝이야'.",
               intentEn: "I love you too. You're my 'soulmate'.",
               intentEs: "Yo también te amo. Eres mi 'alma gemela'.",
               options: [
                 { 
                   text: "You are my soulmate.", 
                   correct: true, 
                   explain: "영혼의 동반자라는 뜻.",
                   explainEn: "It means a soul companion.",
                   explainEs: "Significa un compañero del alma."
                 },
                 { 
                   text: "My soul friend.", 
                   correct: false, 
                   explain: "영혼 친구?",
                   explainEn: "My soul friend?",
                   explainEs: "¿Mi amigo del alma?"
                 },
                 { 
                   text: "You are my ghost.", 
                   correct: false, 
                   explain: "넌 내 귀신이다?",
                   explainEn: "You're my ghost?",
                   explainEs: "¿Eres mi fantasma?"
                 }
               ]
             }
          ] 
        }
      ]
    }
  }
};
