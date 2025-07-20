
export const LANGUAGES = {
  ar: { name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  en: { name: 'English', nativeName: 'English', dir: 'ltr' },
  es: { name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  fr: { name: 'French', nativeName: 'Français', dir: 'ltr' },
  de: { name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr' },
  pt: { name: 'Portuguese', nativeName: 'Português', dir: 'ltr' },
  ru: { name: 'Russian', nativeName: 'Русский', dir: 'ltr' },
  zh: { name: 'Chinese', nativeName: '中文', dir: 'ltr' },
  ja: { name: 'Japanese', nativeName: '日本語', dir: 'ltr' },
} as const;

type ZodiacTranslations = {
  aries: string; taurus: string; gemini: string; cancer: string; leo: string; virgo: string; libra: string; scorpio: string; sagittarius: string; capricorn: string; aquarius: string; pisces: string;
  select: string;
};

type MbtiResultTranslations = {
    name: string;
    desc: string;
}

type Translations = {
  [lang in keyof typeof LANGUAGES]: {
    dir: 'ltr' | 'rtl';
    appTitle: string;
    nav: {
        horoscope: string; growth: string; dreamJournal: string; profile: string;
    },
    zodiac: ZodiacTranslations;
    horoscope: {
      loading: string; title: string; subtitle: string; prompt: string;
      finderTitle: string; finderButton: string; finderPrompt: string; finderResult: string; showHoroscope: string;
    };
    auth: {
      loginButton: string; registerButton: string; loginTitle: string; loginSubtitle: string; registerTitle: string; registerSubtitle: string; emailPlaceholder: string; passwordPlaceholder: string; confirmPasswordPlaceholder: string; alreadyHaveAccount: string; noAccount: string; loginLink: string; registerLink: string; success: string; errorMatch: string; loginSuccess: string; registerSuccess: string;
    },
    subscription: {
        title: string; description: string; emailPlaceholder: string; button: string; success: string;
    },
    error: {
        fetch: string;
    },
    personality: {
        welcome: string;
        discoverTitle: string;
        discoverDescription: string;
        startButton: string;
        testTitle: string;
        backButton: string;
        resultTitle: string;
        resultType: string;
        resultDescription: string;
    },
    mbti: {
        q1: string; q1a: string; q1b: string;
        q2: string; q2a: string; q2b: string;
        q3: string; q3a: string; q3b: string;
        q4: string; q4a: string; q4b: string;
        q5: string; q5a: string; q5b: string;
        q6: string; q6a: string; q6b: string;
        q7: string; q7a: string; q7b: string;
        q8: string; q8a: string; q8b: string;
        q9: string; q9a: string; q9b: string;
        q10: string; q10a: string; q10b: string;
        q11: string; q11a: string; q11b: string;
        q12: string; q12a: string; q12b: string;
        // 16 types
        istj: MbtiResultTranslations; intj: MbtiResultTranslations; isfj: MbtiResultTranslations; infj: MbtiResultTranslations;
        istp: MbtiResultTranslations; intp: MbtiResultTranslations; isfp: MbtiResultTranslations; infp: MbtiResultTranslations;
        estj: MbtiResultTranslations; entj: MbtiResultTranslations; esfj: MbtiResultTranslations; enfj: MbtiResultTranslations;
        estp: MbtiResultTranslations; entp: MbtiResultTranslations; esfp: MbtiResultTranslations; enfp: MbtiResultTranslations;
    },
    growth: {
        title: string;
        description: string;
        mindfulness: string;
        career: string;
        relationships: string;
        fetchingAdvice: string;
    },
    dreamJournal: {
        title: string;
        description: string;
        placeholder: string;
        button: string;
        interpreting: string;
        resultTitle: string;
    },
    profile: {
        title: string;
        email: string;
        zodiac: string;
        mbti: string;
        logoutButton: string;
        notLoggedIn: string;
        loginPrompt: string;
        noData: string;
        uploadPicture: string;
        changePicture: string;
        settingsButton: string;
        forgetMe: string;
        forgetMeConfirm: string;
    },
    verify: {
        title: string;
        subtitle: string;
        instructions: string;
        button: string;
        success: string;
    },
    settings: {
        title: string;
        theme: { title: string; light: string; dark: string; };
        language: { title: string; };
        sound: { title: string; on: string; off: string; };
        notifications: { 
            title: string; 
            enableButton: string;
            enabled: string;
            denied: string;
            dailyReminderButton: string;
            dailyReminderBody: string;
            enabledTitle: string;
            enabledBody: string;
        };
    }
  };
};

const enBase = {
    dir: 'ltr' as 'ltr',
    appTitle: 'Celestial Signs',
    nav: {
        horoscope: 'Horoscope', growth: 'Growth', dreamJournal: 'Dreams', profile: 'Profile',
    },
    zodiac: {
        aries: 'Aries', taurus: 'Taurus', gemini: 'Gemini', cancer: 'Cancer', leo: 'Leo', virgo: 'Virgo', libra: 'Libra', scorpio: 'Scorpio', sagittarius: 'Sagittarius', capricorn: 'Capricorn', aquarius: 'Aquarius', pisces: 'Pisces',
        select: 'Select Your Sign'
    },
    horoscope: {
        loading: 'Summoning insights for {sign}...',
        title: 'Horoscope for {sign}',
        subtitle: 'The cosmos speaks',
        prompt: 'Select your sign to reveal the cosmic forecast.',
        finderTitle: "Don't know your sign?",
        finderButton: "Find Your Sign",
        finderPrompt: "Select your date of birth to find out.",
        finderResult: "Your Zodiac sign is {sign}!",
        showHoroscope: "Reveal My Horoscope",
    },
    auth: {
        loginButton: 'Login', registerButton: 'Register', loginTitle: 'Welcome Back', loginSubtitle: 'Enter the cosmos', registerTitle: 'Join the Cosmos', registerSubtitle: 'Create your celestial profile', emailPlaceholder: 'Email Address', passwordPlaceholder: 'Password', confirmPasswordPlaceholder: 'Confirm Password', alreadyHaveAccount: 'Already have a profile?', noAccount: "Don't have a profile?", loginLink: 'Log in', registerLink: 'Sign up', success: 'Success!', errorMatch: 'Passwords do not match!', loginSuccess: "Welcome back! Redirecting...", registerSuccess: "Account created! Please verify."
    },
    subscription: {
        title: 'Premium Constellations', description: 'Get weekly and personalized insights directly to your inbox.', emailPlaceholder: 'Enter your email', button: 'Subscribe Now', success: 'Thank you for subscribing!',
    },
    error: {
        fetch: 'A cosmic disturbance occurred. Please try again.'
    },
    personality: {
        welcome: "Welcome, {type} ({name})!",
        discoverTitle: "Discover Your Inner Universe",
        discoverDescription: "Take a quick test to map your personality constellation and unlock deeper insights.",
        startButton: "Start the Test",
        testTitle: "Personality Quiz",
        backButton: "Back",
        resultTitle: "Your Personality Type",
        resultType: "You are an {type}",
        resultDescription: "This is your personality profile description."
    },
    mbti: {
        q1: "After a long, busy week, you prefer to:",
        q1a: "Go to a lively social gathering",
        q1b: "Enjoy a quiet evening alone or with a close friend",
        q2: "When learning something new, you are more interested in:",
        q2a: "Practical applications and real-world examples",
        q2b: "Theories, concepts, and future possibilities",
        q3: "When making an important decision, you tend to prioritize:",
        q3a: "Logic, objective criteria, and fairness",
        q3b: "People's feelings and maintaining group harmony",
        q4: "You feel most comfortable and productive when:",
        q4a: "You have a clear, structured plan and a to-do list",
        q4b: "You have flexibility and can adapt as you go",
        q5: "In conversations, you are more likely to:",
        q5a: "Speak up and share your thoughts easily",
        q5b: "Listen more than you speak and reflect before sharing",
        q6: "You would rather be seen as:",
        q6a: "A practical and sensible person",
        q6b: "An imaginative and innovative person",
        q7: "When a friend is upset, your first instinct is to:",
        q7a: "Offer solutions and analyze the problem to help them fix it",
        q7b: "Offer comfort, support, and empathize with their feelings",
        q8: "Your travel style is more:",
        q8a: "A detailed itinerary planned in advance",
        q8b: "Spontaneous, with a loose idea of what to do",
        q9: "To recharge your energy, you need:",
        q9a: "Interaction with the outside world and other people",
        q9b: "Time for yourself in a quiet, private space",
        q10: "You are more drawn to work that involves:",
        q10a: "Working with established facts and proven methods",
        q10b: "Generating new ideas and exploring what could be",
        q11: "In a debate, you value:",
        q11a: "The unvarnished truth, even if it's uncomfortable",
        q11b: "Tact and finding a compassionate common ground",
        q12: "Your daily life feels best when it is:",
        q12a: "Orderly and decided",
        q12b: "Unscheduled and open-ended",
        // English MBTI descriptions
        istj: { name: "The Inspector", desc: "Practical and fact-minded individuals, whose reliability cannot be doubted." },
        isfj: { name: "The Protector", desc: "Very dedicated and warm protectors, always ready to defend their loved ones." },
        infj: { name: "The Advocate", desc: "Quiet and mystical, yet very inspiring and tireless idealists." },
        intj: { name: "The Architect", desc: "Imaginative and strategic thinkers, with a plan for everything." },
        istp: { name: "The Crafter", desc: "Bold and practical experimenters, masters of all kinds of tools." },
        isfp: { name: "The Artist", desc: "Flexible and charming artists, always ready to explore and experience something new." },
        infp: { name: "The Mediator", desc: "Poetic, kind and altruistic people, always eager to help a good cause." },
        intp: { name: "The Thinker", desc: "Innovative inventors with an unquenchable thirst for knowledge." },
        estp: { name: "The Persuader", desc: "Smart, energetic and very perceptive people, who truly enjoy living on the edge." },
        esfp: { name: "The Entertainer", desc: "Spontaneous, energetic and enthusiastic people – life is never boring around them." },
        enfp: { name: "The Champion", desc: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile." },
        entp: { name: "The Debater", desc: "Smart and curious thinkers who cannot resist an intellectual challenge." },
        estj: { name: "The Director", desc: "Excellent administrators, unsurpassed at managing things or people." },
        esfj: { name: "The Caregiver", desc: "Extraordinarily caring, social and popular people, always eager to help." },
        enfj: { name: "The Giver", desc: "Charismatic and inspiring leaders, able to mesmerize their listeners." },
        entj: { name: "The Commander", desc: "Bold, imaginative and strong-willed leaders, always finding a way – or making one." },
    },
    growth: {
        title: "Personal Growth",
        description: "Get AI-powered advice tailored to your personality and zodiac sign.",
        mindfulness: "Mindfulness",
        career: "Career Path",
        relationships: "Connections",
        fetchingAdvice: "Consulting the cosmos...",
    },
    dreamJournal: {
        title: "Dream Journal",
        description: "Describe your recent dream and let the cosmos reveal its hidden meaning.",
        placeholder: "Last night I dreamt of...",
        button: "Interpret My Dream",
        interpreting: "Interpreting the ether...",
        resultTitle: "Cosmic Interpretation",
    },
    profile: {
        title: "Your Profile",
        email: "Email",
        zodiac: "Zodiac Sign",
        mbti: "Personality Type",
        logoutButton: "Logout",
        notLoggedIn: "You are not logged in.",
        loginPrompt: "Log in to view your profile and sync your journey.",
        noData: 'Not set',
        uploadPicture: "Upload Picture",
        changePicture: "Change Picture",
        settingsButton: "Settings",
        forgetMe: "Forget Me",
        forgetMeConfirm: "Are you sure? All your data will be permanently erased."
    },
    verify: {
        title: "Verify Your Account",
        subtitle: "A verification link has been simulated.",
        instructions: "Since this is a demo, no email was actually sent. Click the button below to activate your account and continue your cosmic journey.",
        button: "Activate Account",
        success: "Account activated!",
    },
    settings: {
        title: "Settings",
        theme: { title: "Theme", light: "Light", dark: "Dark" },
        language: { title: "Language" },
        sound: { title: "Sound Effects", on: "On", off: "Off" },
        notifications: { 
            title: "Notifications", 
            enableButton: "Enable",
            enabled: "Enabled",
            denied: "Denied by browser",
            dailyReminderButton: "Get a sample reminder",
            dailyReminderBody: "This is a sample of your daily horoscope reminder!",
            enabledTitle: "Notifications Enabled!",
            enabledBody: "You're all set to receive cosmic updates."
        },
    }
};

const arBase = {
    ...enBase,
    dir: 'rtl' as 'rtl',
    appTitle: 'علامات سماوية',
    nav: {
        horoscope: 'الأبراج', growth: 'النمو', dreamJournal: 'الأحلام', profile: 'الملف الشخصي',
    },
    zodiac: {
        aries: 'الحمل', taurus: 'الثور', gemini: 'الجوزاء', cancer: 'السرطان', leo: 'الأسد', virgo: 'العذراء', libra: 'الميزان', scorpio: 'العقرب', sagittarius: 'القوس', capricorn: 'الجدي', aquarius: 'الدلو', pisces: 'الحوت',
        select: 'اختر برجك'
    },
    horoscope: {
        loading: 'جاري استدعاء البصيرة لبرج {sign}...',
        title: 'برج {sign}',
        subtitle: 'الكون يتحدث',
        prompt: 'اختر برجك لكشف توقعات الكون.',
        finderTitle: "لا تعرف برجك؟",
        finderButton: "ابحث عن برجك",
        finderPrompt: "اختر تاريخ ميلادك لمعرفة برجك.",
        finderResult: "برجك هو {sign}!",
        showHoroscope: "اكشف عن برجي",
    },
    auth: {
        loginButton: 'تسجيل الدخول', registerButton: 'إنشاء حساب', loginTitle: 'أهلاً بعودتك', loginSubtitle: 'ادخل إلى الكون', registerTitle: 'انضم إلى الكون', registerSubtitle: 'أنشئ ملفك السماوي', emailPlaceholder: 'البريد الإلكتروني', passwordPlaceholder: 'كلمة المرور', confirmPasswordPlaceholder: 'تأكيد كلمة المرور', alreadyHaveAccount: 'لديك ملف شخصي بالفعل؟', noAccount: 'ليس لديك ملف شخصي؟', loginLink: 'سجل الدخول', registerLink: 'أنشئ حساباً', success: 'تمت العملية بنجاح!', errorMatch: 'كلمتا المرور غير متطابقتين!', loginSuccess: "أهلاً بعودتك! جاري التحويل...", registerSuccess: "تم إنشاء الحساب! الرجاء التحقق.",
    },
    subscription: {
        title: 'الأبراج المميزة', description: 'احصل على رؤى أسبوعية وشخصية مباشرة في بريدك الوارد.', emailPlaceholder: 'أدخل بريدك الإلكتروني', button: 'اشترك الآن', success: 'شكراً لاشتراكك!',
    },
    error: {
        fetch: 'حدث اضطراب كوني. يرجى المحاولة مرة أخرى.'
    },
    personality: {
        welcome: "أهلاً بك، {type} ({name})!",
        discoverTitle: "اكتشف كونك الداخلي",
        discoverDescription: "أجب عن اختبار سريع لرسم كوكبة شخصيتك وفتح رؤى أعمق.",
        startButton: "ابدأ الاختبار",
        testTitle: "اختبار الشخصية",
        backButton: "عودة",
        resultTitle: "نوع شخصيتك",
        resultType: "أنت {type}",
        resultDescription: "هذا هو وصف ملفك الشخصي."
    },
    mbti: {
        q1: "بعد أسبوع طويل ومزدحم، تفضل:",
        q1a: "الذهاب إلى تجمع اجتماعي مفعم بالحيوية",
        q1b: "الاستمتاع بأمسية هادئة بمفردك أو مع صديق مقرب",
        q2: "عند تعلم شيء جديد، تهتم أكثر بـ:",
        q2a: "التطبيقات العملية والأمثلة الواقعية",
        q2b: "النظريات والمفاهيم والاحتمالات المستقبلية",
        q3: "عند اتخاذ قرار مهم، تميل إلى إعطاء الأولوية لـ:",
        q3a: "المنطق والمعايير الموضوعية والإنصاف",
        q3b: "مشاعر الناس والحفاظ على الانسجام الجماعي",
        q4: "تشعر براحة وإنتاجية أكبر عندما:",
        q4a: "لديك خطة واضحة ومنظمة وقائمة مهام",
        q4b: "لديك مرونة ويمكنك التكيف مع الظروف",
        q5: "في المحادثات، من المرجح أن:",
        q5a: "تتحدث وتشارك أفكارك بسهولة",
        q5b: "تستمع أكثر مما تتكلم وتفكر قبل المشاركة",
        q6: "تفضل أن يُنظر إليك على أنك:",
        q6a: "شخص عملي ومعقول",
        q6b: "شخص خيالي ومبتكر",
        q7: "عندما يكون صديقك منزعجًا، فإن رد فعلك الأول هو:",
        q7a: "تقديم حلول وتحليل المشكلة لمساعدته على حلها",
        q7b: "تقديم الراحة والدعم والتعاطف مع مشاعره",
        q8: "أسلوبك في السفر هو:",
        q8a: "مسار مفصل مخطط له مسبقًا",
        q8b: "عفوي، مع فكرة عامة عما يجب القيام به",
        q9: "لإعادة شحن طاقتك، تحتاج إلى:",
        q9a: "التفاعل مع العالم الخارجي والآخرين",
        q9b: "وقت لنفسك في مكان هادئ وخاص",
        q10: "تنجذب أكثر إلى العمل الذي يتضمن:",
        q10a: "التعامل مع الحقائق المثبتة والأساليب المجربة",
        q10b: "توليد أفكار جديدة واستكشاف ما يمكن أن يكون",
        q11: "في نقاش، تقدر:",
        q11a: "الحقيقة المجردة، حتى لو كانت غير مريحة",
        q11b: "اللباقة وإيجاد أرضية مشتركة رحيمة",
        q12: "تشعر أن حياتك اليومية أفضل عندما تكون:",
        q12a: "منظمة ومقررة",
        q12b: "غير مجدولة ومفتوحة",
        // Arabic MBTI descriptions
        istj: { name: "المفتش", desc: "أفراد عمليون وواقعيون، يمكن الاعتماد عليهم دون أدنى شك." },
        isfj: { name: "الحامي", desc: "حماة مخلصون ودافئون، ومستعدون دائمًا للدفاع عن أحبائهم." },
        infj: { name: "المحامي", desc: "مثاليون هادئون وغامضون، لكنهم ملهمون ولا يكلون." },
        intj: { name: "المهندس", desc: "مفكرون مبدعون واستراتيجيون، لديهم خطة لكل شيء." },
        istp: { name: "الحرفي", desc: "مجربون جريئون وعمليون، بارعون في استخدام جميع أنواع الأدوات." },
        isfp: { name: "الفنان", desc: "فنانون مرنون وساحرون، مستعدون دائمًا لاستكشاف وتجربة كل ما هو جديد." },
        infp: { name: "الوسيط", desc: "أشخاص شعريون وطيبون وإيثاريون، حريصون دائمًا على مساعدة قضية نبيلة." },
        intp: { name: "المفكر", desc: "مخترعون مبتكرون لديهم تعطش لا يرتوي للمعرفة." },
        estp: { name: "المقنع", desc: "أشخاص أذكياء ونشيطون وفطنون، يستمتعون حقًا بالعيش على حافة الهاوية." },
        esfp: { name: "المسلي", desc: "أشخاص عفويون ونشيطون ومتحمسون - الحياة معهم لا تكون مملة أبدًا." },
        enfp: { name: "البطل", desc: "أرواح حرة متحمسة ومبدعة واجتماعية، يمكنها دائمًا إيجاد سبب للابتسام." },
        entp: { name: "المجادل", desc: "مفكرون أذكياء وفضوليون لا يستطيعون مقاومة التحدي الفكري." },
        estj: { name: "المدير", desc: "مديرون ممتازون، لا مثيل لهم في إدارة الأشياء أو الأشخاص." },
        esfj: { name: "المعطاء", desc: "أشخاص مهتمون واجتماعيون وشعبيون بشكل غير عادي، حريصون دائمًا على المساعدة." },
        enfj: { name: "المانح", desc: "قادة يتمتعون بشخصية كاريزمية وملهمة، قادرون على أسر مستمعيهم." },
        entj: { name: "القائد", desc: "قادة جريئون ومبدعون وذوو إرادة قوية، يجدون دائمًا طريقًا - أو يصنعونه." },
    },
    growth: {
        title: "النمو الشخصي",
        description: "احصل على نصائح مدعومة بالذكاء الاصطناعي مصممة خصيصًا لشخصيتك وبرجك.",
        mindfulness: "اليقظة الذهنية",
        career: "المسار المهني",
        relationships: "العلاقات",
        fetchingAdvice: "استشارة الكون...",
    },
    dreamJournal: {
        title: "سجل الأحلام",
        description: "صف حلمك الأخير ودع الكون يكشف عن معناه الخفي.",
        placeholder: "الليلة الماضية حلمت بـ...",
        button: "فسر حلمي",
        interpreting: "جاري تفسير الأثير...",
        resultTitle: "تفسير كوني",
    },
    profile: {
        title: "ملفك الشخصي",
        email: "البريد الإلكتروني",
        zodiac: "البرج",
        mbti: "نوع الشخصية",
        logoutButton: "تسجيل الخروج",
        notLoggedIn: "أنت لم تقم بتسجيل الدخول.",
        loginPrompt: "سجل الدخول لعرض ملفك الشخصي ومزامنة رحلتك.",
        noData: 'غير محدد',
        uploadPicture: "تحميل صورة",
        changePicture: "تغيير الصورة",
        settingsButton: "الإعدادات",
        forgetMe: "انساني",
        forgetMeConfirm: "هل أنت متأكد؟ سيتم مسح جميع بياناتك بشكل دائم."
    },
    verify: {
        title: "التحقق من حسابك",
        subtitle: "تمت محاكاة إرسال رابط تحقق.",
        instructions: "نظرًا لأن هذا عرض توضيحي، لم يتم إرسال بريد إلكتروني فعليًا. انقر فوق الزر أدناه لتفعيل حسابك ومواصلة رحلتك الكونية.",
        button: "تفعيل الحساب",
        success: "تم تفعيل الحساب!",
    },
    settings: {
        title: "الإعدادات",
        theme: { title: "المظهر", light: "فاتح", dark: "داكن" },
        language: { title: "اللغة" },
        sound: { title: "المؤثرات الصوتية", on: "تشغيل", off: "إيقاف" },
        notifications: { 
            title: "الإشعارات", 
            enableButton: "تفعيل",
            enabled: "مفعلة",
            denied: "مرفوضة من المتصفح",
            dailyReminderButton: "احصل على تذكير تجريبي",
            dailyReminderBody: "هذه عينة من تذكير الأبراج اليومي الخاص بك!",
            enabledTitle: "تم تفعيل الإشعارات!",
            enabledBody: "أنت جاهز الآن لتلقي التحديثات الكونية."
        },
    }
};

export const translations: Translations = {
    ar: arBase,
    en: enBase,
    es: { ...enBase, nav: { ...enBase.nav }, profile: { ...enBase.profile }, dreamJournal: { ...enBase.dreamJournal }, verify: { ...enBase.verify } },
    fr: { ...enBase, nav: { ...enBase.nav }, profile: { ...enBase.profile }, dreamJournal: { ...enBase.dreamJournal }, verify: { ...enBase.verify } },
    de: { ...enBase, nav: { ...enBase.nav }, profile: { ...enBase.profile }, dreamJournal: { ...enBase.dreamJournal }, verify: { ...enBase.verify } },
    hi: { ...enBase, nav: { ...enBase.nav }, profile: { ...enBase.profile }, dreamJournal: { ...enBase.dreamJournal }, verify: { ...enBase.verify } },
    pt: { ...enBase, nav: { ...enBase.nav }, profile: { ...enBase.profile }, dreamJournal: { ...enBase.dreamJournal }, verify: { ...enBase.verify } },
    ru: { ...enBase, nav: { ...enBase.nav }, profile: { ...enBase.profile }, dreamJournal: { ...enBase.dreamJournal }, verify: { ...enBase.verify } },
    zh: { ...enBase, nav: { ...enBase.nav }, profile: { ...enBase.profile }, dreamJournal: { ...enBase.dreamJournal }, verify: { ...enBase.verify } },
    ja: { ...enBase, nav: { ...enBase.nav }, profile: { ...enBase.profile }, dreamJournal: { ...enBase.dreamJournal }, verify: { ...enBase.verify } }
};