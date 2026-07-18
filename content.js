// ====================================================================
// CODDY MASTER — CONTENT CONFIG
// ====================================================================
// 📝 EDIT THIS FILE TO UPDATE WEBSITE CONTENT
// Every text, image, link, and section can be edited from here.
// No need to touch HTML.
// ====================================================================

const CONFIG = {

    // ----- COMPANY -----
    company: {
        name: "Coddy Master",
        nameAr: "كودي ماستر",
        tagline: "From Chaos to Control",
        taglineAr: "من الفوضى إلى السيطرة",
        description: "Coddy Master is an Official Odoo Partner delivering Odoo ERP, Outsourced Accounting, and Virtual CFO services to SMEs across Egypt and the Gulf region.",
        descriptionAr: "كودي ماستر شريك أودو الرسمي اللي بنوفر للشركات الصغيرة والمتوسطة في مصر والخليج خدمات تركيب أودو ERP، المحاسبة الخارجية، والمدير المالي الافتراضي.",
        phone: "+201005275315",
        phoneDisplay: "+20 100 527 5315",
        email: "info@coddymaster.com",
        website: "coddymaster.com",
        address: "New Damietta, Damietta Governorate, Egypt",
        addressAr: "دمياط الجديدة، محافظة دمياط، مصر",
        social: {
            facebook: "https://facebook.com/CoddyMaster",
            linkedin: "https://www.linkedin.com/company/coddy-master",
            instagram: "https://instagram.com/coddy.master",
            threads: "https://threads.net/@coddy.master"
        }
    },

    // ----- NAVIGATION -----
    nav: [
        { id: "home", en: "Home", ar: "الرئيسية" },
        { id: "about", en: "About", ar: "من نحن" },
        { id: "services", en: "Services", ar: "خدماتنا" },
        { id: "industries", en: "Industries", ar: "القطاعات" },
        { id: "odoo", en: "Odoo", ar: "أودو" },
        { id: "team", en: "Team", ar: "الفريق" },
        { id: "resources", en: "Resources", ar: "موارد" },
        { id: "blog", en: "Blog", ar: "المدونة" },
        { id: "videos", en: "Videos", ar: "فيديوهات" },
        { id: "contact", en: "Contact", ar: "تواصل" }
    ],

    // ----- HERO -----
    hero: {
        badge: { en: "Official Odoo Partner", ar: "شريك أودو الرسمي" },
        titlePre: { en: "From", ar: "من" },
        titleAccent: { en: "Chaos", ar: "الفوضى" },
        titleMid: { en: "to", ar: "إلى" },
        titleEnd: { en: "Control.", ar: "السيطرة." },
        subtitle: {
            en: "We bring Odoo ERP, professional accounting, and Virtual CFO services together — so SMEs in Egypt and the Gulf finally see, control, and grow their numbers.",
            ar: "بنجمع نظام أودو، المحاسبة الاحترافية، والمدير المالي الافتراضي في مكان واحد — عشان أصحاب الشركات في مصر والخليج يشوفوا أرقامهم ويتحكموا فيها."
        },
        ctas: {
            primary: { en: "Book Free Consultation", ar: "احجز استشارة مجانية" },
            secondary: { en: "Talk to Us", ar: "تواصل معنا" }
        },
        stats: [
            { value: "50+", label: { en: "Active Clients", ar: "عميل نشط" } },
            { value: "120+", label: { en: "Odoo Modules", ar: "موديول أودو" } },
            { value: "10+", label: { en: "Industries", ar: "قطاع" } },
            { value: "24/7", label: { en: "Support", ar: "دعم متواصل" } }
        ]
    },

    // ----- TRUSTED BY (Client Logos for Marquee) -----
    trusted: {
        label: { en: "Trusted by businesses across the region", ar: "موثوق به من شركات في المنطقة" },
        logos: [
            "Delta Steel", "Nile Textiles", "Damietta Furniture", "Marsa Logistics",
            "Cairo Foods", "Alex Plastics", "Royal Real Estate", "Pharaoh Trading",
            "Sinai Construction", "Mediterranean Tours", "Pyramid Distribution", "Suez Manufacturing"
        ]
    },

    // ----- PROBLEMS WE SOLVE -----
    problems: {
        eyebrow: { en: "The Reality", ar: "الواقع" },
        title: { en: "Sound familiar?", ar: "حاسس بإيه من دول؟" },
        subtitle: {
            en: "Every SME owner we talk to is fighting the same battles. You're not alone — and these problems are solvable.",
            ar: "كل صاحب شركة بنتكلم معاه عنده نفس المشاكل. مش لوحدك، والحاجات دي ليها حل."
        },
        items: [
            {
                num: "01",
                title: { en: "You don't trust your numbers", ar: "مش واثق في أرقامك" },
                desc: { en: "Reports come late, contradict each other, and you can't make decisions on them.", ar: "التقارير بتيجي متأخرة ومتناقضة ومش قادر تاخد قرار عليها." }
            },
            {
                num: "02",
                title: { en: "Your accountant runs the show", ar: "محاسبك بيشغل الشركة" },
                desc: { en: "If they leave tomorrow, the whole financial picture leaves with them.", ar: "لو مشي بكرة، الصورة المالية كلها بتمشي معاه." }
            },
            {
                num: "03",
                title: { en: "Excel everywhere", ar: "إكسيل في كل حتة" },
                desc: { en: "Inventory in one sheet, sales in another, costs nowhere. Nothing talks to anything.", ar: "المخزون في شيت، المبيعات في شيت، التكاليف مش معروفة. ولا حاجة بتتكلم مع التانية." }
            },
            {
                num: "04",
                title: { en: "Profit is a mystery", ar: "الربح لغز" },
                desc: { en: "You know revenue is up, but the bank account doesn't agree. Where's the money?", ar: "عارف إن المبيعات كويسة، بس الكاش مش موجود. الفلوس فين؟" }
            },
            {
                num: "05",
                title: { en: "Tax keeps you up at night", ar: "الضرايب بتحرم نومك" },
                desc: { en: "E-invoice, e-receipt, VAT, withholding — and you're guessing if you're compliant.", ar: "الفاتورة الإلكترونية، الإيصال، القيمة المضافة، الخصم — وانت مش متأكد لو ملتزم ولا لأ." }
            },
            {
                num: "06",
                title: { en: "Growth is on hold", ar: "النمو واقف" },
                desc: { en: "You can't open a new branch or launch a product because the systems can't handle it.", ar: "مش قادر تفتح فرع جديد أو تنزل منتج جديد لأن النظام مش هيستحمل." }
            }
        ]
    },

    // ----- SERVICES -----
    services: {
        eyebrow: { en: "What We Do", ar: "بنعمل إيه" },
        title: { en: "Three services. One financial backbone.", ar: "ثلاث خدمات. عمود مالي واحد." },
        subtitle: {
            en: "Instead of hiring a full-time accountant + paying for an ERP + bringing in a CFO consultant — we bundle the three into a single partnership.",
            ar: "بدل ما تعين محاسب full-time + تدفع لنظام + تجيب CFO consultant — بنجمع التلاتة في شراكة واحدة."
        },
        items: [
            {
                icon: "ledger",
                title: { en: "Outsourced Accounting", ar: "محاسبة خارجية" },
                desc: { en: "A full accounting department, without the overhead. Books, reports, tax, payroll — all run by senior professionals.", ar: "قسم محاسبة كامل بدون التكلفة الإدارية. الدفاتر، التقارير، الضرايب، المرتبات — كله بيتدار بمحاسبين سينيور." },
                features: [
                    { en: "Monthly closing & reporting", ar: "إقفال وتقارير شهرية" },
                    { en: "E-invoice & e-receipt compliance", ar: "الالتزام بالفاتورة والإيصال" },
                    { en: "VAT, withholding & payroll tax", ar: "ضريبة القيمة المضافة والخصم والمرتبات" },
                    { en: "Cash flow & AR/AP management", ar: "إدارة التدفق النقدي والمدينين والدائنين" }
                ]
            },
            {
                icon: "erp",
                title: { en: "Odoo ERP Implementation", ar: "تركيب أودو ERP" },
                desc: { en: "We're an Official Odoo Partner. Real Enterprise licenses, full setup, real training — no shortcuts.", ar: "إحنا شريك أودو الرسمي. ترخيص Enterprise حقيقي، تركيب كامل، تدريب حقيقي — مفيش طرق مختصرة." },
                features: [
                    { en: "Discovery & business mapping", ar: "تحليل ومسح احتياجات الشركة" },
                    { en: "Module setup & customization", ar: "تركيب وتخصيص الموديولات" },
                    { en: "Data migration & training", ar: "نقل البيانات والتدريب" },
                    { en: "Post-launch support & optimization", ar: "دعم وتطوير ما بعد الإطلاق" }
                ]
            },
            {
                icon: "cfo",
                title: { en: "Virtual CFO", ar: "مدير مالي افتراضي" },
                desc: { en: "A senior CFO mind on your business — strategy, KPIs, fundraising, growth planning — without the full-time salary.", ar: "عقل CFO سينيور في شركتك — استراتيجية، KPIs، تمويل، خطط نمو — من غير مرتب full-time." },
                features: [
                    { en: "Financial strategy & forecasting", ar: "استراتيجية مالية وتوقعات" },
                    { en: "KPI dashboards & decision support", ar: "لوحات KPI ودعم القرار" },
                    { en: "Investor reporting & fundraising", ar: "تقارير المستثمرين والتمويل" },
                    { en: "Pricing, margins, and growth modeling", ar: "تسعير، هوامش، ونماذج نمو" }
                ]
            }
        ]
    },

    // ----- INDUSTRIES -----
    industries: {
        eyebrow: { en: "Industries", ar: "القطاعات" },
        title: { en: "Where we operate", ar: "إحنا بنشتغل فين" },
        subtitle: {
            en: "Deep specialization across the sectors driving Egypt's SME economy.",
            ar: "تخصص عميق في القطاعات اللي بتشغل اقتصاد الشركات المتوسطة في مصر."
        },
        items: [
            { icon: "🏭", name: { en: "Manufacturing", ar: "تصنيع" } },
            { icon: "🏗️", name: { en: "Construction", ar: "مقاولات" } },
            { icon: "🏢", name: { en: "Real Estate", ar: "عقارات" } },
            { icon: "🪑", name: { en: "Furniture & Wood", ar: "أثاث وأخشاب" } },
            { icon: "🧪", name: { en: "Plastics", ar: "بلاستيك" } },
            { icon: "🥛", name: { en: "Food & Dairy", ar: "أغذية وألبان" } },
            { icon: "✈️", name: { en: "Tourism", ar: "سياحة" } },
            { icon: "📦", name: { en: "Trading & Distribution", ar: "تجارة وتوزيع" } },
            { icon: "🚚", name: { en: "Logistics", ar: "لوجستيات" } },
            { icon: "💼", name: { en: "Services", ar: "خدمات" } }
        ]
    },

    // ----- WHY ODOO -----
    whyOdoo: {
        eyebrow: { en: "Why Odoo", ar: "ليه أودو" },
        title: { en: "One system. Your entire business.", ar: "نظام واحد. شركتك بالكامل." },
        subtitle: {
            en: "Odoo isn't just an accounting system — it's 50+ integrated apps covering every part of your business. We make sure you get the real thing, set up the right way.",
            ar: "أودو مش بس نظام محاسبة — ده 50+ تطبيق متكاملين بيغطوا كل قسم في شركتك. إحنا بنتأكد إنك بتاخد النسخة الحقيقية، مركبة بالطريقة الصح."
        },
        reasons: [
            {
                num: "01",
                title: { en: "All-in-one", ar: "كله في واحد" },
                desc: { en: "Accounting, sales, inventory, HR, POS, manufacturing — connected by design.", ar: "محاسبة، مبيعات، مخزون، موارد بشرية، POS، تصنيع — متصلين من أول يوم." }
            },
            {
                num: "02",
                title: { en: "Scales with you", ar: "بيكبر معاك" },
                desc: { en: "Start with 3 modules. Add the rest when you need them. No re-platforming.", ar: "إبدأ بـ3 موديولات. ضيف اللي ناقص لما تحتاجه. مفيش تغيير نظام تاني." }
            },
            {
                num: "03",
                title: { en: "Egyptian compliance built in", ar: "متوافق مع القوانين المصرية" },
                desc: { en: "E-invoice, e-receipt, VAT, ETA integration — we configure it all locally.", ar: "الفاتورة، الإيصال، القيمة المضافة، الـ ETA — بنركبها كلها محلياً." }
            },
            {
                num: "04",
                title: { en: "We protect you from fakes", ar: "بنحميك من النسخ المضروبة" },
                desc: { en: "Some sellers push Odoo Community as Enterprise. We give you the real Enterprise license — period.", ar: "في ناس بيبيعوا نسخة Community على إنها Enterprise. إحنا بنديك الـ Enterprise الأصلي — وخلاص." }
            }
        ],
        modules: [
            { icon: "📊", name: "Accounting" },
            { icon: "🛒", name: "Sales" },
            { icon: "📦", name: "Inventory" },
            { icon: "💼", name: "CRM" },
            { icon: "🏭", name: "Manufacturing" },
            { icon: "👥", name: "HR" },
            { icon: "🛍️", name: "POS" },
            { icon: "🚚", name: "Purchase" },
            { icon: "📋", name: "Projects" },
            { icon: "💰", name: "Payroll" },
            { icon: "📈", name: "Reporting" },
            { icon: "🌐", name: "Website" }
        ]
    },

    // ----- IMPLEMENTATION PROCESS -----
    process: {
        eyebrow: { en: "Our Process", ar: "خطواتنا" },
        title: { en: "How we implement", ar: "إزاي بنشتغل" },
        subtitle: {
            en: "A proven 6-phase methodology — refined across 50+ implementations.",
            ar: "منهجية مجربة على 6 مراحل — اتطورت على مدار أكتر من 50 تطبيق."
        },
        steps: [
            {
                num: "01",
                duration: { en: "Week 1", ar: "الأسبوع 1" },
                title: { en: "Discovery & Business Mapping", ar: "التحليل ومسح الاحتياجات" },
                desc: { en: "We sit with your team, map every process, and document what's broken and what works.", ar: "بنقعد مع فريقك، بنرسم كل عملية، وبنوثق إيه اللي ماشي وإيه اللي مكسور." }
            },
            {
                num: "02",
                duration: { en: "Week 2-3", ar: "الأسبوع 2-3" },
                title: { en: "Solution Design", ar: "تصميم الحل" },
                desc: { en: "Module selection, customization scope, data architecture, and integration plan.", ar: "اختيار الموديولات، نطاق التخصيص، هيكل البيانات، وخطة التكامل." }
            },
            {
                num: "03",
                duration: { en: "Week 3-5", ar: "الأسبوع 3-5" },
                title: { en: "Configuration & Customization", ar: "الإعداد والتخصيص" },
                desc: { en: "We build the system to match your exact workflows, not the other way around.", ar: "بنبني النظام عشان يطابق طريقة شغلك، مش العكس." }
            },
            {
                num: "04",
                duration: { en: "Week 5-6", ar: "الأسبوع 5-6" },
                title: { en: "Data Migration", ar: "نقل البيانات" },
                desc: { en: "Cleaning, mapping, and migrating products, customers, suppliers, and opening balances.", ar: "تنظيف وربط ونقل المنتجات والعملاء والموردين والأرصدة الافتتاحية." }
            },
            {
                num: "05",
                duration: { en: "Week 6-7", ar: "الأسبوع 6-7" },
                title: { en: "Training & UAT", ar: "تدريب واختبار" },
                desc: { en: "Hands-on training in Arabic, with real scenarios from your business. Sign-off when ready.", ar: "تدريب عملي بالعربي على سيناريوهات حقيقية من شركتك. التسليم لما تكون جاهز." }
            },
            {
                num: "06",
                duration: { en: "Ongoing", ar: "مستمر" },
                title: { en: "Go-Live & Support", ar: "الإطلاق والدعم" },
                desc: { en: "Launch with us beside you. Then continuous optimization, support, and quarterly reviews.", ar: "إطلاق وإحنا جنبك. وبعدها تطوير ودعم مستمر ومراجعة كل 3 شهور." }
            }
        ]
    },

    // ----- DASHBOARD SHOWCASE -----
    showcase: {
        eyebrow: { en: "What You See", ar: "اللي هتشوفه" },
        title: { en: "Your business, in real numbers.", ar: "شركتك بالأرقام الحقيقية." },
        subtitle: {
            en: "Every dashboard we build answers one question: where is the money? Not last quarter — right now.",
            ar: "كل dashboard بنبنيه بيرد على سؤال واحد: الفلوس فين؟ مش الربع اللي فات — دلوقتي."
        }
    },

    // ----- FOUNDERS -----
    founders: {
        eyebrow: { en: "Founders", ar: "المؤسسون" },
        title: { en: "Built by operators, not consultants", ar: "اتبنت بأيدي ناس بتشتغل في السوق، مش استشاريين" },
        subtitle: {
            en: "Two founders. Two complementary backgrounds. One obsession: clarity in numbers.",
            ar: "مؤسسان. خلفيتان متكاملتان. هاجس واحد: وضوح الأرقام."
        },
        items: [
            {
                name: { en: "Ahmed Zoheiry", ar: "أحمد زهيري" },
                role: { en: "Co-Founder & CEO", ar: "الشريك المؤسس والرئيس التنفيذي" },
                photo: "data:image/jpeg;base64,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",
                bio: {
                    en: "Specialized in marketing strategies, customer acquisition, and enterprise sales growth.",
                    ar:"متخصص في استراتيجيات التسويق وجذب العملاء وتنمية مبيعات الشركات."
                    },
                linkedin: "https://www.linkedin.com/in/ahmedzehery/"
            },
            {
                name: { en: "Mohamed Refaat", ar: "محمد رفعت" },
                role: { en: "Co-Founder & Managing Partner", ar: "الشريك المؤسس والشريك الإداري" },
                photo: "assets/team/Mr.mohammed.png",
                bio: {
                    en: "Expert in optimizing operations, workflow automation, and managing client services.",
                    ar: "خبير في تحسين العمليات وأتمتة سير العمل وإدارة الخدمات التقنية."
                    },
                linkedin: "https://www.linkedin.com/in/mohamed-refaat-aa662aa6/"
            }
        ]
    },

    // ----- TEAM (placeholder) -----
    team: {
        eyebrow: { en: "Our Team", ar: "فريقنا" },
        title: { en: "Senior people, on every account", ar: "خبرات سينيور على كل حساب" },
        subtitle: {
            en: "Every Coddy Master engagement is led by senior specialists — not interns with a checklist.",
            ar: "كل ارتباط مع كودي ماستر بيتقاد بمتخصصين سينيور — مش متدربين معاهم قائمة فحص."
        },
        members: [
            { name: "Hazem Refaat", role: { en: "Odoo Developer", ar: "مطور أودو" }, photo: "assets/team/hazem.jpg" },
            { name: "Ramy Khoukh", role: { en: "Legal accountant", ar: "محاسب قانوني" }, photo: "assets/team/mr-ramy.png" },
            { name: "Eyad Elsheha", role: { en: "Sales", ar: "مسؤول مبيعات" }, photo: "assets/team/eyad.jpg" },
            { name: "Nour El-Din", role: { en: "CFO Advisor", ar: "مستشار CFO" }, initials: "NE" },
            { name: "Hossam Tarek", role: { en: "Odoo Developer", ar: "مطور أودو" }, initials: "HT" },
            { name: "Rania Mostafa", role: { en: "Tax Specialist", ar: "متخصصة ضرائب" }, initials: "RM" },
            { name: "Sara Ibrahim", role: { en: "Client Success Manager", ar: "مدير نجاح العملاء" }, initials: "SI" }
        ]
    },

    // ----- CASE STUDIES (placeholder) -----
    cases: {
        eyebrow: { en: "Case Studies", ar: "قصص نجاح" },
        title: { en: "Real businesses. Real results.", ar: "شركات حقيقية. نتائج حقيقية." },
        subtitle: {
            en: "Some of the transformations we've delivered across industries.",
            ar: "بعض التحولات اللي عملناها في قطاعات مختلفة."
        },
        items: [
            {
                industry: { en: "Furniture Manufacturing", ar: "تصنيع أثاث" },
                title: { en: "From 7-day close to next-day reporting", ar: "من إقفال 7 أيام لتقارير اليوم التاني" },
                desc: { en: "A 120-employee furniture factory was closing monthly books on day 7. We implemented Odoo Manufacturing + Accounting in 8 weeks.", ar: "مصنع أثاث 120 موظف كان بيقفل دفاتر شهرية في يوم 7. ركبنا Odoo Manufacturing + Accounting في 8 أسابيع." },
                metrics: [
                    { value: "85%", label: { en: "Faster closing", ar: "أسرع في الإقفال" } },
                    { value: "30%", label: { en: "Inventory savings", ar: "توفير مخزون" } }
                ]
            },
            {
                industry: { en: "Distribution", ar: "توزيع" },
                title: { en: "8 branches, one system, real-time", ar: "8 فروع، نظام واحد، في الوقت الحقيقي" },
                desc: { en: "A trading company with 8 governorate branches couldn't see consolidated stock. Odoo unified the picture in real-time.", ar: "شركة تجارة في 8 محافظات مكنش عندها رؤية موحدة للمخزون. أودو وحّد الصورة في الوقت الحقيقي." },
                metrics: [
                    { value: "100%", label: { en: "Stock visibility", ar: "رؤية المخزون" } },
                    { value: "2x", label: { en: "Order speed", ar: "أسرع للطلبات" } }
                ]
            },
            {
                industry: { en: "Construction", ar: "مقاولات" },
                title: { en: "Project cost visibility for the first time", ar: "رؤية تكلفة المشاريع لأول مرة" },
                desc: { en: "A contractor never knew which projects were profitable until 6 months after. Odoo Projects + Accounting changed that.", ar: "مقاول كان مش عارف المشاريع الرابحة غير بعد 6 شهور. Odoo Projects + Accounting غيّر ده." },
                metrics: [
                    { value: "Real-time", label: { en: "Project P&L", ar: "أرباح المشاريع" } },
                    { value: "18%", label: { en: "Margin improvement", ar: "تحسن الهامش" } }
                ]
            }
        ]
    },

    // ----- TESTIMONIALS (placeholder) -----
    testimonials: {
        eyebrow: { en: "What Clients Say", ar: "العملاء بيقولوا" },
        title: { en: "Don't take our word for it", ar: "متاخدش كلامنا فقط" },
        items: [
            {
                quote: { en: "Coddy Master didn't just install Odoo — they sat with my warehouse team for two weeks until they were confident. That's the difference.", ar: "كودي ماستر مركبوش أودو وبس — قعدوا مع فريق المخزن أسبوعين لحد ما اطمنوا. ده الفرق." },
                name: "Mohamed Fawzy",
                role: { en: "CEO, Delta Steel Trading", ar: "الرئيس التنفيذي، دلتا للحديد" },
                initials: "MF"
            },
            {
                quote: { en: "I used to call my accountant 5 times a day asking 'where are we?'. Now I check my phone for 30 seconds and I know.", ar: "كنت بكلم محاسبي 5 مرات في اليوم بسأل 'إحنا فين؟'. دلوقتي بفتح موبايلي 30 ثانية وعارف." },
                name: "Salma Ahmed",
                role: { en: "Founder, Nile Textiles", ar: "مؤسسة، النيل للنسيج" },
                initials: "SA"
            },
            {
                quote: { en: "They're the first firm that actually explained WHY my numbers were off — not just told me they were off.", ar: "أول مكتب بيشرحلي ليه أرقامي مش مظبوطة — مش بس بيقولي إنها مش مظبوطة." },
                name: "Khaled Mahmoud",
                role: { en: "Owner, Damietta Furniture Group", ar: "صاحب، دمياط للأثاث" },
                initials: "KM"
            }
        ]
    },

    // ----- BLOG (placeholder) -----
    blog: {
        eyebrow: { en: "Blog", ar: "المدونة" },
        title: { en: "Insights for SME owners", ar: "تحليلات لأصحاب الشركات" },
        subtitle: {
            en: "Real talk about accounting, ERP, and growing a business in Egypt.",
            ar: "كلام حقيقي عن المحاسبة، الـ ERP، وإزاي تكبر شركتك في مصر."
        },
        posts: [
            {
                category: { en: "Odoo", ar: "أودو" },
                date: "Jun 20, 2026",
                readTime: { en: "8 min read", ar: "8 دقايق قراءة" },
                title: { en: "Odoo Community vs Enterprise: What Sellers Won't Tell You", ar: "أودو Community ولا Enterprise: اللي البياعين مش بيقولوهولك" },
                excerpt: { en: "If someone offered you 'Odoo Enterprise' for $300/year, you're probably being lied to. Here's how to tell.", ar: "لو حد عرض عليك 'أودو Enterprise' بـ 300 دولار في السنة، غالباً بيكدبلك. اعرف إزاي تكشف ده." }
            },
            {
                category: { en: "Accounting", ar: "محاسبة" },
                date: "Jun 15, 2026",
                readTime: { en: "6 min read", ar: "6 دقايق قراءة" },
                title: { en: "Why Your Profit Doesn't Match Your Bank Balance", ar: "ليه ربحك مش زي رصيد البنك" },
                excerpt: { en: "Five accounting realities every business owner needs to understand — explained without jargon.", ar: "خمس حقايق محاسبية لازم كل صاحب شركة يفهمها — بدون لغة معقدة." }
            },
            {
                category: { en: "Growth", ar: "نمو" },
                date: "Jun 8, 2026",
                readTime: { en: "10 min read", ar: "10 دقايق قراءة" },
                title: { en: "The First Hire That Pays for Itself: A Virtual CFO", ar: "أول تعيين بيرد فلوسه: المدير المالي الافتراضي" },
                excerpt: { en: "When you're doing $500K+/year, the math on a Virtual CFO changes completely. Let's break it down.", ar: "لما تكون بتعمل 10 مليون+ في السنة، الحسبة بتاعت الـ Virtual CFO بتتغير تماماً. خلينا نقفلها." }
            }
        ]
    },

    // ----- VIDEOS (YouTube embeds) -----
    videos: {
        eyebrow: { en: "Videos", ar: "فيديوهات" },
        title: { en: "Watch & learn", ar: "اتفرج وتعلم" },
        subtitle: {
            en: "Bite-sized explainers and deep dives on accounting, Odoo, and finance for SMEs.",
            ar: "شروحات قصيرة وعميقة في المحاسبة، أودو، والمالية للشركات."
        },
        items: [
            {
                youtubeId: "GsrMhJGTgfg",
                title: { en: "Odoo Purchase module Demo", ar: "عرض موديول المشتريات" },
                desc: { en: "A quick tour of the Purchase module.", ar: "جولة سريعة في موديول المشتريات." }
            },
            {
                youtubeId: "uOMf9JcAhQk",
                title: { en: "Odoo sales module Demo", ar: "عرض موديول المبيعات" },
                desc: { en: "A quick tour of the sales module.", ar: "جولة سريعة في موديول المبيعات." }
            }
        ]
    },

    // ----- RESOURCES -----
    resources: {
        eyebrow: { en: "Free Resources", ar: "موارد مجانية" },
        title: { en: "Practical tools, free", ar: "أدوات عملية، مجاناً" },
        subtitle: {
            en: "Templates, checklists, and guides we use with our own clients.",
            ar: "قوالب، قوائم فحص، وأدلة بنستخدمها مع عملائنا."
        },
        items: [
            {
                icon: "📊",
                title: { en: "Monthly Closing Checklist", ar: "قائمة الإقفال الشهري" },
                desc: { en: "The exact 27-item checklist our team uses to close client books every month.", ar: "قائمة فحص الـ 27 بند اللي فريقنا بيستخدمها لإقفال دفاتر العملاء كل شهر." }
            },
            {
                icon: "🧮",
                title: { en: "Odoo Modules Calculator", ar: "حاسبة موديولات أودو" },
                desc: { en: "Quickly estimate which Odoo modules you need based on your business profile.", ar: "احسب بسرعة الموديولات اللي محتاجها حسب طبيعة شركتك." }
            },
            {
                icon: "📋",
                title: { en: "Tax Compliance Guide 2026", ar: "دليل الالتزام الضريبي 2026" },
                desc: { en: "E-invoice, e-receipt, VAT, withholding — what you need to do this year.", ar: "الفاتورة، الإيصال، القيمة المضافة، الخصم — كل اللي محتاج تعمله السنة دي." }
            },
            {
                icon: "📈",
                title: { en: "SME Cash Flow Template", ar: "قالب التدفق النقدي" },
                desc: { en: "A 13-week rolling cash flow forecast template, ready to plug in your numbers.", ar: "قالب توقع تدفق نقدي 13 أسبوع، جاهز تحط أرقامك فيه." }
            }
        ]
    },

    // ----- FAQ -----
    faq: {
        eyebrow: { en: "FAQ", ar: "أسئلة شائعة" },
        title: { en: "Questions you might be asking", ar: "أسئلة ممكن تكون في بالك" },
        items: [
            {
                q: { en: "How is this cheaper than hiring an in-house accountant?", ar: "إزاي ده أرخص من تعيين محاسب داخلي؟" },
                a: { en: "A senior in-house accountant in Egypt costs 25-40K EGP/month, plus benefits, training, sick days, and turnover risk. Coddy Master delivers an entire team — senior accountant, junior support, tax specialist, and CFO oversight — for less than one senior salary. You also avoid the cost of an ERP project gone wrong.", ar: "محاسب سينيور داخلي في مصر بيتكلف 25-40 ألف جنيه في الشهر، زائد التأمينات والتدريب والإجازات وخطر إنه يمشي. كودي ماستر بتديك فريق كامل — سينيور وجونيور ومتخصص ضرايب وإشراف CFO — بأقل من مرتب سينيور واحد. وكمان بتوفر تكلفة مشروع ERP لو فشل." }
            },
            {
                q: { en: "Are you really an Official Odoo Partner?", ar: "هل أنتم فعلاً شريك أودو رسمي؟" },
                a: { en: "Yes — we're registered as an Official Odoo Partner, with active certifications. That means real Enterprise licenses, direct technical support from Odoo S.A., and access to partner-only updates. You can verify any Odoo Partner status on odoo.com/partners.", ar: "أيوة — إحنا مسجلين كشريك أودو رسمي بشهادات معتمدة سارية. ده معناه ترخيصات Enterprise حقيقية، دعم فني مباشر من Odoo S.A.، ووصول لتحديثات الشركاء. تقدر تتحقق من أي شريك أودو على odoo.com/partners." }
            },
            {
                q: { en: "What's the difference between Odoo Community and Enterprise?", ar: "إيه الفرق بين أودو Community و Enterprise؟" },
                a: { en: "Community is free but missing key modules (accounting reports, payroll, MRP, IoT, mobile apps, studio, etc.) and has no official support. Enterprise is paid, includes all 80+ apps, gets official updates, and supports e-invoicing properly. Some local sellers install Community and sell it as Enterprise — that's the scam we protect you from.", ar: "Community مجاني بس ناقصة موديولات أساسية (تقارير محاسبية، مرتبات، تصنيع، تطبيقات موبايل، Studio، إلخ) ومفيهاش دعم رسمي. Enterprise مدفوعة، فيها كل الـ 80+ تطبيق، بتاخد تحديثات رسمية، وبتدعم الفاتورة الإلكترونية بشكل صحيح. في بياعين محليين بيركبوا Community ويبيعوها على إنها Enterprise — ده النصب اللي بنحميك منه." }
            },
            {
                q: { en: "How long does Odoo implementation take?", ar: "كام يوم تركيب أودو بياخد؟" },
                a: { en: "For a typical SME with 2-3 core modules: 6-8 weeks from kickoff to go-live. Complex implementations (multi-branch, manufacturing, deep integrations) take 12-16 weeks. We give you a fixed timeline after the discovery phase — no surprises.", ar: "لشركة متوسطة بـ 2-3 موديولات أساسية: 6-8 أسابيع من البداية لحد الإطلاق. التركيبات المعقدة (متعدد الفروع، تصنيع، تكاملات عميقة) بتاخد 12-16 أسبوع. بنديك خط زمني ثابت بعد مرحلة التحليل — مفيش مفاجآت." }
            },
            {
                q: { en: "Can you work with my existing accountant?", ar: "تقدروا تشتغلوا مع محاسبي الحالي؟" },
                a: { en: "Yes. Many clients keep their existing accountant for day-to-day data entry while we handle the ERP, monthly closing, tax compliance, and CFO oversight. We're partners, not replacements — and we'll tell you honestly if you don't need us.", ar: "أيوة. كتير من عملائنا بيخلوا محاسبهم الحالي للإدخال اليومي وإحنا بنشتغل على الـ ERP والإقفال الشهري والالتزام الضريبي وإشراف CFO. إحنا شركاء، مش بدلاء — وهنقولك بصراحة لو مش محتاجنا." }
            },
            {
                q: { en: "Do you serve clients outside Egypt?", ar: "بتخدموا عملاء خارج مصر؟" },
                a: { en: "Yes — we serve SMEs across the Gulf (KSA, UAE, Qatar, Kuwait). Our team handles local tax requirements (ZATCA, FTA) and we deliver in Arabic and English. Most engagements run remotely with periodic on-site visits.", ar: "أيوة — بنخدم شركات في الخليج (السعودية، الإمارات، قطر، الكويت). فريقنا بيتعامل مع المتطلبات الضريبية المحلية (ZATCA، FTA) وبنسلم بالعربي والإنجليزي. أغلب المشاريع بتشتغل عن بعد مع زيارات دورية." }
            },
            {
                q: { en: "What does pricing look like?", ar: "السعر شكله إزاي؟" },
                a: { en: "Outsourced Accounting starts at 8,500 EGP/month for small businesses. Odoo Implementation is project-based (typically 80K-300K EGP depending on scope). Virtual CFO is a monthly retainer starting at 15,000 EGP/month. Book a free consultation and we'll give you a tailored quote in 48 hours.", ar: "المحاسبة الخارجية بتبدأ من 8,500 جنيه شهرياً للشركات الصغيرة. تركيب أودو حسب المشروع (عادة 80-300 ألف جنيه حسب النطاق). المدير المالي الافتراضي اشتراك شهري بيبدأ من 15,000 جنيه. احجز استشارة مجانية ونديك عرض مفصل خلال 48 ساعة." }
            }
        ]
    },

    // ----- CONTACT -----
    contact: {
        eyebrow: { en: "Let's Talk", ar: "خلينا نتكلم" },
        title: { en: "Take the first step", ar: "اخطي أول خطوة" },
        subtitle: {
            en: "Free 30-minute consultation. No pitch. We'll listen to where you are and tell you honestly if and how we can help.",
            ar: "استشارة مجانية 30 دقيقة. مفيش بيع. هنسمعك ونقولك بصراحة لو وإزاي نقدر نساعدك."
        },
        items: [
            { icon: "📞", title: { en: "Phone & WhatsApp", ar: "تليفون وواتساب" }, value: "+20 100 527 5315", link: "tel:+201005275315" },
            { icon: "✉️", title: { en: "Email", ar: "إيميل" }, value: "info@coddymaster.com", link: "mailto:info@coddymaster.com" },
            { icon: "📍", title: { en: "Office", ar: "المكتب" }, value: { en: "New Damietta, Egypt", ar: "دمياط الجديدة، مصر" }, link: "#" },
            { icon: "🕒", title: { en: "Hours", ar: "ساعات العمل" }, value: { en: "Sun – Thu, 9am – 6pm EET", ar: "الأحد - الخميس، 9ص - 6م توقيت القاهرة" } }
        ],
        form: {
            name: { en: "Full Name", ar: "الاسم الكامل" },
            email: { en: "Email", ar: "إيميل" },
            phone: { en: "Phone", ar: "تليفون" },
            company: { en: "Company", ar: "اسم الشركة" },
            service: { en: "Service Interested In", ar: "الخدمة المهتم بها" },
            message: { en: "Tell us about your business", ar: "كلمنا عن شركتك" },
            submit: { en: "Send Message", ar: "ابعت الرسالة" },
            success: { en: "Got it! We'll reach out within 24 hours.", ar: "تمام! هنرد عليك خلال 24 ساعة." },
            error: { en: "Something went wrong. Please try WhatsApp instead.", ar: "في خطأ. جرب الواتساب أحسن." },
            // 🔗 n8n webhook endpoint — update with your live URL
            webhook: "https://n8n.coddymaster.com/webhook/contact-form"
        }
    },

    // ----- FOOTER -----
    footer: {
        about: { en: "Coddy Master is an Official Odoo Partner delivering integrated ERP, Accounting, and Virtual CFO services to SMEs across Egypt and the Gulf.", ar: "كودي ماستر شريك أودو الرسمي بنقدم خدمات ERP ومحاسبة وCFO افتراضي للشركات الصغيرة والمتوسطة في مصر والخليج." },
        cols: [
            {
                title: { en: "Services", ar: "خدماتنا" },
                links: [
                    { en: "Outsourced Accounting", ar: "محاسبة خارجية", href: "#services" },
                    { en: "Odoo Implementation", ar: "تركيب أودو", href: "#services" },
                    { en: "Virtual CFO", ar: "مدير مالي افتراضي", href: "#services" }
                ]
            },
            {
                title: { en: "Company", ar: "الشركة" },
                links: [
                    { en: "About", ar: "من نحن", href: "#about" },
                    { en: "Team", ar: "الفريق", href: "#team" },
                    { en: "Case Studies", ar: "قصص نجاح", href: "#cases" },
                    { en: "Contact", ar: "تواصل", href: "#contact" }
                ]
            },
            {
                title: { en: "Resources", ar: "موارد" },
                links: [
                    { en: "Blog", ar: "المدونة", href: "#blog" },
                    { en: "Videos", ar: "فيديوهات", href: "#videos" },
                    { en: "Free Tools", ar: "أدوات مجانية", href: "#resources" },
                    { en: "FAQ", ar: "أسئلة شائعة", href: "#faq" }
                ]
            }
        ],
        copyright: { en: "© 2026 Coddy Master. All rights reserved.", ar: "© 2026 كودي ماستر. جميع الحقوق محفوظة." }
    }
};

// Make config globally available
window.CONFIG = CONFIG;
