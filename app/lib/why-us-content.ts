export type LocalizedLanguage = "en" | "ar";

type Stat = {
  value: string;
  label: string;
};

type Pillar = {
  id: "scope" | "quality" | "communication" | "support";
  title: string;
  description: string;
};

type Step = {
  title: string;
  description: string;
};

type ComparisonRow = {
  title: string;
  ours: string;
  typical: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type WhyUsContent = {
  navLabel: string;
  sectionBadge: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionPrimaryCta: string;
  sectionSecondaryCta: string;
  pageBadge: string;
  pageTitle: string;
  pageSubtitle: string;
  stats: Stat[];
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillars: Pillar[];
  processTitle: string;
  processSubtitle: string;
  process: Step[];
  lifecycleTitle: string;
  lifecycleSubtitle: string;
  lifecycle: Step[];
  compactLifecycleTitle: string;
  compactLifecycleSubtitle: string;
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonRows: ComparisonRow[];
  faqTitle: string;
  faqSubtitle: string;
  faq: FaqItem[];
  promiseTitle: string;
  promiseSubtitle: string;
  promises: string[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const content: Record<LocalizedLanguage, WhyUsContent> = {
  en: {
    navLabel: "Why Us",
    sectionBadge: "Why Clients Choose Us",
    sectionTitle: "A dependable partner, not just another vendor.",
    sectionSubtitle:
      "Clients trust Waves Studio because we combine honest communication, thoughtful execution, and business-focused software decisions that keep projects moving with confidence.",
    sectionPrimaryCta: "Request a Project Discussion",
    sectionSecondaryCta: "Read the Full Why Us Page",
    pageBadge: "Built for Trust",
    pageTitle: "Why businesses feel confident working with Waves Studio",
    pageSubtitle:
      "We do not rely on vague promises. We earn trust through clear scope, clean execution, visible progress, and support that continues after launch.",
    stats: [
      { value: "30+", label: "projects delivered" },
      { value: "4+", label: "years of experience" },
      { value: "24h", label: "average response window" },
      { value: "100%", label: "focus on quality and clarity" },
    ],
    pillarsTitle: "What makes clients comfortable choosing us",
    pillarsSubtitle:
      "Every engagement is designed to reduce uncertainty, protect quality, and help you move from idea to launch with fewer surprises.",
    pillars: [
      {
        id: "scope",
        title: "Clear scope before we build",
        description:
          "We define priorities, expected deliverables, and practical milestones early so your project stays organized and decisions stay grounded.",
      },
      {
        id: "quality",
        title: "Execution that respects your business",
        description:
          "We care about maintainable code, performance, usability, and long-term scalability, not just shipping something that works for a week.",
      },
      {
        id: "communication",
        title: "Communication that reduces stress",
        description:
          "You get regular updates, honest answers, and clear visibility into progress so you are never left wondering what is happening.",
      },
      {
        id: "support",
        title: "Support beyond launch day",
        description:
          "Testing, deployment guidance, post-launch fixes, and next-step planning are part of how we work, not an afterthought.",
      },
    ],
    processTitle: "How we make projects feel safer",
    processSubtitle:
      "A strong process builds trust. We keep the work transparent from the first discussion to final delivery.",
    process: [
      {
        title: "Discovery and alignment",
        description:
          "We understand the business goal, target users, constraints, and success criteria before committing to a direction.",
      },
      {
        title: "Design and architecture",
        description:
          "We shape the user experience and technical foundation so the product is both clear for users and stable for growth.",
      },
      {
        title: "Build and review",
        description:
          "We implement in focused milestones, share progress, and refine details early instead of leaving surprises to the end.",
      },
      {
        title: "QA, launch, and support",
        description:
          "We test carefully, help with release, and stay available for fixes and improvements after deployment.",
      },
    ],
    lifecycleTitle: "What the service request journey looks like",
    lifecycleSubtitle:
      "A simple, transparent path from your first message to final delivery.",
    lifecycle: [
      {
        title: "Send your request",
        description:
          "Tell us what you need, what problem you want to solve, the service you are looking for, and any references, deadline, or business context that can help us understand the request correctly from the start.",
      },
      {
        title: "Requirement review",
        description:
          "We review your goals carefully, ask the right questions, identify the priorities, and help you choose the most practical direction so the project starts on clear ground instead of assumptions.",
      },
      {
        title: "Proposal and pricing",
        description:
          "You receive a clear proposal with scope, estimated timeline, expected deliverables, priorities, and pricing so you can evaluate the work confidently before any execution begins.",
      },
      {
        title: "Execution and updates",
        description:
          "Once approved, we move into execution with organized milestones, visible progress, and regular updates so you always know what has been completed, what is in progress, and what comes next.",
      },
      {
        title: "Delivery and support",
        description:
          "We deliver the final result, help with launch or handoff when needed, gather feedback, and remain available for fixes, enhancements, and the next development phase after release.",
      },
    ],
    compactLifecycleTitle: "From first message to launch",
    compactLifecycleSubtitle:
      "A short, clear lifecycle so you always know what happens next.",
    comparisonTitle: "Why clients feel safer choosing Waves Studio",
    comparisonSubtitle:
      "The difference is not only the final product. It is also how the project is managed from day one.",
    comparisonRows: [
      {
        title: "Project clarity",
        ours: "Clear scope, milestones, and expected deliverables.",
        typical: "Vague scope that keeps changing during execution.",
      },
      {
        title: "Communication",
        ours: "Regular updates and direct answers when you need them.",
        typical: "Long silence and uncertainty about progress.",
      },
      {
        title: "Technical quality",
        ours: "Clean, maintainable builds designed for growth.",
        typical: "Quick fixes that create bigger problems later.",
      },
      {
        title: "Business focus",
        ours: "Recommendations based on value, priorities, and user needs.",
        typical: "Technical work disconnected from real business goals.",
      },
      {
        title: "After launch",
        ours: "Support, fixes, and guidance for next improvements.",
        typical: "Delivery ends and you are left on your own.",
      },
    ],
    faqTitle: "Questions clients usually ask before starting",
    faqSubtitle:
      "Clear answers help clients move forward with confidence.",
    faq: [
      {
        question: "How do we start if the idea is not fully defined yet?",
        answer:
          "That is completely fine. We can help you shape the requirements, define priorities, and turn a rough idea into a clear scope.",
      },
      {
        question:
          "Will I know the timeline and cost before development begins?",
        answer:
          "Yes. Before execution starts, you receive a clear proposal covering scope, expected deliverables, timeline, and pricing.",
      },
      {
        question: "Can the project evolve while it is being built?",
        answer:
          "Yes, when needed. We handle changes in a structured way so the project stays organized and the impact on time and budget stays clear.",
      },
      {
        question: "Do you provide support after delivery?",
        answer:
          "Yes. We stay available for launch support, fixes, and the next phase of improvements after the main delivery.",
      },
    ],
    promiseTitle: "What you can expect from working with us",
    promiseSubtitle:
      "We aim to make the entire experience feel professional, calm, and well-managed.",
    promises: [
      "A clear proposal with practical scope and priorities",
      "Recommendations based on business value, not unnecessary complexity",
      "A product that is designed for usability and built for maintainability",
      "A team that communicates clearly and respects deadlines",
      "Support during launch and thoughtful guidance for what comes next",
    ],
    ctaTitle:
      "If you want reliability, clarity, and strong execution, let's talk.",
    ctaSubtitle:
      "Share your idea, current challenge, or project plan and we will help you turn it into a focused, well-executed solution.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "Explore Our Services",
  },
  ar: {
    navLabel: "لماذا نحن",
    sectionBadge: "لماذا يختارنا العملاء",
    sectionTitle: "شريك يعتمد عليه، وليس مجرد منفذ للمشروع.",
    sectionSubtitle:
      "يثق العملاء في Waves Studio لأننا نجمع بين التواصل الواضح، والتنفيذ المتقن، والقرارات البرمجية التي تخدم الهدف التجاري وتقلل القلق أثناء تنفيذ المشروع.",
    sectionPrimaryCta: "اطلب مناقشة مشروعك",
    sectionSecondaryCta: "اقرأ صفحة لماذا نحن",
    pageBadge: "مبني على الثقة",
    pageTitle: "لماذا يشعر العملاء بالثقة عند العمل مع Waves Studio",
    pageSubtitle:
      "نحن لا نعتمد على الوعود العامة، بل نبني الثقة من خلال نطاق عمل واضح، وتنفيذ نظيف، وتقدم ظاهر، ودعم مستمر بعد الإطلاق.",
    stats: [
      { value: "30+", label: "مشروع تم تنفيذه" },
      { value: "4+", label: "سنوات من الخبرة" },
      { value: "24h", label: "متوسط سرعة الرد" },
      { value: "100%", label: "تركيز على الجودة والوضوح" },
    ],
    pillarsTitle: "ما الذي يجعل العميل مرتاحًا لاختيارنا",
    pillarsSubtitle:
      "كل خطوة في التعاون معنا مصممة لتقليل الغموض، والحفاظ على الجودة، وتحويل الفكرة إلى منتج فعلي بأقل قدر ممكن من المفاجآت.",
    pillars: [
      {
        id: "scope",
        title: "نطاق عمل واضح قبل التنفيذ",
        description:
          "نحدد الأولويات، والمخرجات المتوقعة، والمراحل العملية مبكرًا حتى يظل المشروع منظمًا وتظل القرارات واضحة.",
      },
      {
        id: "quality",
        title: "تنفيذ يحترم مشروعك ونموه",
        description:
          "نهتم بقابلية الصيانة، والأداء، وسهولة الاستخدام، وقابلية التوسع على المدى الطويل، وليس فقط بتسليم شيء يعمل بشكل مؤقت.",
      },
      {
        id: "communication",
        title: "تواصل يخفف الضغط عن العميل",
        description:
          "تصلك تحديثات منتظمة، وإجابات صريحة، ورؤية واضحة للتقدم حتى لا تبقى في حالة انتظار أو تخمين لما يحدث داخل المشروع.",
      },
      {
        id: "support",
        title: "دعم حقيقي بعد الإطلاق",
        description:
          "الاختبارات، والمساعدة في الإطلاق، ومعالجة الملاحظات، والتخطيط للخطوة التالية جزء أساسي من طريقتنا في العمل.",
      },
    ],
    processTitle: "كيف نجعل المشروع أكثر أمانًا ووضوحًا",
    processSubtitle:
      "العملية المنظمة تبني الثقة. لذلك نحافظ على شفافية العمل من أول نقاش وحتى التسليم النهائي.",
    process: [
      {
        title: "فهم المشروع وتحديد الاتجاه",
        description:
          "نبدأ بفهم الهدف التجاري، والجمهور المستهدف، والقيود، ومعايير النجاح قبل الالتزام بأي مسار تنفيذي.",
      },
      {
        title: "تصميم التجربة وبناء الأساس",
        description:
          "نحدد تجربة المستخدم والأساس التقني بشكل يخدم الوضوح للمستخدم والاستقرار للمشروع عند التوسع.",
      },
      {
        title: "التنفيذ مع مراجعات مستمرة",
        description:
          "نعمل على مراحل واضحة، ونشارك التقدم أولًا بأول، ونراجع التفاصيل مبكرًا بدلًا من تأجيل المفاجآت لنهاية المشروع.",
      },
      {
        title: "اختبار وإطلاق ودعم",
        description:
          "نختبر بعناية، ونساعد في الإطلاق، ونبقى متاحين للتحسينات والمعالجة بعد النشر.",
      },
    ],
    lifecycleTitle: "كيف تمر رحلة طلب الخدمة معنا",
    lifecycleSubtitle:
      "مسار بسيط وواضح من أول رسالة وحتى التسليم النهائي.",
    lifecycle: [
      {
        title: "إرسال طلبك",
        description:
          "تخبرنا بالخدمة التي تحتاجها، والمشكلة التي تريد حلها، والفكرة أو الهدف الذي تعمل عليه، وأي تفاصيل أو مراجع أو موعد تقريبي يساعدنا على فهم الطلب بشكل صحيح من البداية.",
      },
      {
        title: "مراجعة المتطلبات",
        description:
          "نراجع احتياجك بعناية، ونطرح الأسئلة المهمة، ونحدد الأولويات، ونساعدك في اختيار الاتجاه الأنسب حتى يبدأ المشروع على أساس واضح بدلًا من التخمين.",
      },
      {
        title: "العرض والتسعير",
        description:
          "نرسل لك عرضًا واضحًا يشمل نطاق العمل، والمدة المتوقعة، والمخرجات المطلوبة، والأولويات، والتسعير حتى تستطيع اتخاذ القرار وأنت ترى الصورة كاملة قبل بدء التنفيذ.",
      },
      {
        title: "التنفيذ والمتابعة",
        description:
          "بعد الاعتماد نبدأ التنفيذ على مراحل منظمة، ونشاركك التحديثات بوضوح، ونبقي التواصل مفتوحًا حتى تعرف ما الذي تم إنجازه وما الذي يجري العمل عليه وما هي الخطوة التالية.",
      },
      {
        title: "التسليم والدعم",
        description:
          "نقوم بتسليم النتيجة النهائية، ونساعد في الإطلاق أو التسليم الفني عند الحاجة، ونستقبل الملاحظات، ونبقى متاحين للتحسينات والتطوير في المراحل التالية بعد الإطلاق.",
      },
    ],
    compactLifecycleTitle: "من أول رسالة وحتى الإطلاق",
    compactLifecycleSubtitle:
      "رحلة مختصرة وواضحة حتى يعرف العميل ما الذي سيحدث في كل مرحلة.",
    comparisonTitle: "لماذا يشعر العميل بأمان أكبر عند اختيار Waves Studio",
    comparisonSubtitle:
      "الفرق لا يكون فقط في النتيجة النهائية، بل أيضًا في طريقة إدارة المشروع من اليوم الأول.",
    comparisonRows: [
      {
        title: "وضوح المشروع",
        ours: "نطاق عمل واضح ومراحل محددة ومخرجات متفق عليها.",
        typical: "نطاق غير واضح يتغير باستمرار أثناء التنفيذ.",
      },
      {
        title: "التواصل",
        ours: "تحديثات منتظمة وإجابات مباشرة عند الحاجة.",
        typical: "فترات صمت طويلة وغموض حول سير العمل.",
      },
      {
        title: "الجودة التقنية",
        ours: "تنفيذ نظيف وقابل للصيانة ومبني للنمو.",
        typical: "حلول سريعة تسبب مشاكل أكبر لاحقًا.",
      },
      {
        title: "التركيز على الهدف التجاري",
        ours: "اقتراحات مبنية على القيمة والأولوية واحتياج المستخدم.",
        typical: "تنفيذ تقني منفصل عن الهدف التجاري الحقيقي.",
      },
      {
        title: "ما بعد الإطلاق",
        ours: "دعم وتحسينات وتوجيه للخطوات القادمة.",
        typical: "ينتهي كل شيء بعد التسليم ويترك العميل وحده.",
      },
    ],
    faqTitle: "أسئلة شائعة قبل بدء المشروع",
    faqSubtitle: "الإجابات الواضحة تساعد العميل على اتخاذ القرار بثقة.",
    faq: [
      {
        question: "ماذا لو كانت الفكرة غير مكتملة حتى الآن؟",
        answer:
          "هذا أمر طبيعي. نساعدك في ترتيب الفكرة، وتحديد الأولويات، وتحويلها إلى نطاق عمل واضح وقابل للتنفيذ.",
      },
      {
        question: "هل سأعرف المدة والتكلفة قبل بداية التنفيذ؟",
        answer:
          "نعم. قبل البدء يصلك عرض واضح يشمل النطاق، والمخرجات، والمدة المتوقعة، والتسعير.",
      },
      {
        question: "هل يمكن تطوير المشروع أو تعديل الاتجاه أثناء التنفيذ؟",
        answer:
          "نعم عند الحاجة، لكن بشكل منظم حتى تظل آثار التعديل على الوقت والتكلفة واضحة ومفهومة.",
      },
      {
        question: "هل يوجد دعم بعد التسليم؟",
        answer:
          "نعم. نبقى متاحين لدعم الإطلاق، ومعالجة الملاحظات، والتطوير في المراحل التالية بعد التسليم الأساسي.",
      },
    ],
    promiseTitle: "ما الذي تتوقعه عندما تعمل معنا",
    promiseSubtitle:
      "هدفنا أن تكون التجربة كلها احترافية، ومطمئنة، ومنظمة من البداية للنهاية.",
    promises: [
      "عرض واضح يحدد النطاق والأولويات بشكل عملي",
      "اقتراحات مبنية على قيمة تجارية حقيقية لا على تعقيد غير ضروري",
      "منتج مصمم لسهولة الاستخدام ومبني ليستمر",
      "فريق يتواصل بوضوح ويحترم المواعيد",
      "دعم أثناء الإطلاق وتوجيه مدروس للخطوات التالية",
    ],
    ctaTitle:
      "إذا كنت تبحث عن الوضوح، والالتزام، والتنفيذ القوي، فلنبدأ الحديث.",
    ctaSubtitle:
      "شاركنا فكرتك أو التحدي الحالي أو خطة مشروعك، وسنساعدك في تحويلها إلى حل واضح ومنفذ باحتراف.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "استكشف خدماتنا",
  },
};

export function getWhyUsContent(language: LocalizedLanguage) {
  return content[language];
}
