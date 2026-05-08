// Entrol Rongxing - Main JavaScript

// Translation Data
const i18n = {
    en: {
        meta: {
            title: 'Entrol Rongxing - Professional Socks Manufacturer | B2B OEM/ODM',
            productsTitle: 'Products - Entrol Rongxing | Professional Socks Manufacturer',
            aboutTitle: 'About Us - Entrol Rongxing | Professional Socks Manufacturer',
            contactTitle: 'Contact Us - Entrol Rongxing | Professional Socks Manufacturer',
            blogTitle: 'Blog - Entrol Rongxing | Industry Insights & Factory Updates'
        },
        nav: { home: 'Home', products: 'Products', about: 'About', blog: 'Blog', contact: 'Contact' },
        hero: {
            title: 'Professional Socks Manufacturer',
            subtitle: '20 Years Experience · 3 Million Pairs Monthly · Serving Global Brands',
            desc: 'Specializing in double-cylinder jacquard, terry socks, cotton socks, double layer jacquard, indoor shoes, foot covers, velvet socks, coarse needle socks, and transfer pattern socks.',
            btnProducts: 'Browse Products',
            btnContact: 'Contact Us'
        },
        stats: { years: 'Years Experience', capacity: 'Monthly Capacity', machines: 'Machines', staff: 'Staff' },
        products: {
            title: 'Our Products',
            subtitle: '9 Product Series, Meeting Diverse Market Demands',
            btnViewAll: 'View All Products'
        },
        advantages: {
            title: 'Why Choose Us',
            subtitle: 'Large-scale Production, International Quality Assurance'
        },
        partners: { title: 'Our Partners', subtitle: 'Trusted by International Brands' },
        cta: {
            title: 'Start Your Custom Order',
            desc: 'Whether you need OEM manufacturing or ODM design, we provide professional solutions',
            btn: 'Contact Now'
        },
        footer: {
            brand: 'Professional Socks Manufacturer',
            links: 'Quick Links',
            contact: 'Contact',
            company: 'Zhuji Rongxing Knitting Co., Ltd.',
            address: 'Address: Datang Town, Zhuji, Zhejiang, China',
            tel: 'Tel: +86 152 6313 0999',
            capacity: 'Capacity: 3M pairs/month'
        },
        // Products Page
        productsPage: {
            title: 'Products',
            subtitle: '9 Product Series, Meeting Diverse Market Demands',
            cat1: 'Double-Cylinder Jacquard',
            cat2: 'Terry Socks',
            cat3: '100% Cotton Socks',
            cat4: 'Double Layer Jacquard',
            cat5: 'Indoor Shoes',
            cat6: 'Foot Covers',
            cat7: 'Velvet Socks',
            cat8: 'Coarse Needle Socks',
            cat9: 'Transfer Pattern Socks',
            placeholderImg: 'Product Image',
            features: 'Product Features',
            specs: 'Specifications',
            specNeedle: 'Needle Count',
            specMaterial: 'Material',
            specMoq: 'MOQ',
            specCustom: 'Customization',
            specMat1: 'Cotton/Wool/Blend',
            specMat2: 'Cotton/Polyester/Functional Fiber',
            specMat3: 'Cotton/Ice Silk/Modal',
            specMat4: 'Feather Yarn / Half Velvet',
            specCus1: 'Pattern, color, logo customization supported',
            specCus2: 'Terry height, material customization supported',
            specCus3: 'Organic cotton, colored cotton customization supported',
            specCus4: 'Inner/outer layer material, color matching customization',
            specCus5: 'Sole material, upper design customization',
            specCus6: 'Anti-slip strip design, packaging customization',
            specCus7: 'Color, fluff length customization',
            specCus8: 'Yarn color, texture customization',
            specCus9: 'Transfer pattern design customization',
            specThickness: 'Thickness',
            specThick1: 'Thin/Medium/Thick Terry',
            specThick2: 'Medium / Thick',
            specCotton: 'Cotton Content',
            specStructure: 'Structure',
            specStr1: 'Double Layer / Mock Double Layer',
            specCombo: 'Material Combination',
            specCom1: 'Cotton+Wool / Cotton+Acrylic etc.',
            specSole: 'Sole Material',
            specUpper: 'Upper Material',
            specUp1: 'Knitted / Velvet',
            specStyle: 'Style',
            specSty1: 'Shallow/Deep/Cross Strap',
            specYarn: 'Yarn',
            specYarn1: 'Thick Yarn / Fancy Yarn',
            specTech: 'Technology',
            specTech1: 'Transfer / Eyelet',
            specPattern: 'Pattern',
            specPat1: 'Mesh / Hollow / 3D Flower',
            s1f1: 'Double Needle Technology: Double cylinder knitting technology with positive coils on both sides for superior comfort',
            s1f2: 'Jacquard Patterns: Support complex pattern designs with rich colors and distinct layers',
            s1f3: 'Seamless Toe: Flat toe seam without protrusion, enhancing wearing comfort',
            s1f4: 'High Durability: Double needle structure makes socks thicker and more wear-resistant',
            s1f5: 'Applications: Business, casual, sports and various occasions',
            s2f1: 'Terry Structure: Inner terry design creates air layers for excellent warmth retention',
            s2f2: 'Moisture Wicking: Quickly absorbs foot sweat, keeping feet dry',
            s2f3: 'Cushioning Protection: Terry provides extra cushioning, ideal for sports',
            s2f4: 'Thick & Warm: Essential for winter with excellent heat retention',
            s2f5: 'Applications: Sports, outdoor activities, winter warmth',
            s3f1: 'Combed Long-staple Cotton: Selected premium long-staple cotton with long fibers and high strength',
            s3f2: 'Skin-friendly & Breathable: Natural cotton fibers, gentle on skin with good breathability',
            s3f3: 'Antibacterial Treatment: Optional antibacterial and odor-resistant treatment',
            s3f4: 'Eco-friendly & Healthy: OEKO-TEX100 certified, safe and harmless',
            s3f5: 'Applications: Daily wear, business, children',
            s4f1: 'Double Layer Structure: Inner and outer layers with different materials or colors for rich layers',
            s4f2: '3D Jacquard: Three-dimensional pattern effects with strong visual impact',
            s4f3: 'Enhanced Warmth: Double layer design increases warmth, ideal for cold seasons',
            s4f4: 'Premium Quality: Complex craftsmanship, high-end product grade',
            s4f5: 'Applications: Premium business, gifts, winter warmth',
            s5f1: 'Anti-slip Sole: TPR or silicone anti-slip dots on sole for safety and stability',
            s5f2: 'Soft & Comfortable: Knitted upper fits foot shape, sock-like comfort',
            s5f3: 'Light & Quiet: Suitable for indoor walking without disturbing others',
            s5f4: 'Machine Washable: Easy to clean, durable and washable',
            s5f5: 'Applications: Home, hospital, hotel, yoga studio',
            s6f1: 'Invisible Design: Shallow mouth invisible design, matches various shoe styles without showing',
            s6f2: 'Anti-slip & Stay-on: Silicone anti-slip strip at heel for secure fit',
            s6f3: 'Light & Breathable: Thin fabric suitable for all seasons',
            s6f4: 'Multiple Colors: Skin tone, black, white and other basic colors',
            s6f5: 'Applications: Matching loafers, casual shoes, dress shoes',
            s7f1: 'Feather Yarn Technology: Fine surface fluff with ultra-soft feather-like touch',
            s7f2: 'Light & Warm: Fluffy structure traps air for warmth without bulk',
            s7f3: 'Fashionable Look: Unique texture, popular among female consumers',
            s7f4: 'Multi-scene: Suitable for home, sleep, and leisure',
            s7f5: 'Applications: Home leisure, winter warmth, gifts',
            s8f1: 'Coarse Needle Texture: Obvious knit texture with vintage rugged style',
            s8f2: 'Thick & Durable: Thicker yarn makes socks more substantial and wear-resistant',
            s8f3: 'Good Breathability: Coarse needle structure creates more ventilation holes',
            s8f4: 'Vintage Fashion: Classic chunky sock style, trendy and versatile',
            s8f5: 'Applications: Outdoor, workwear, vintage style matching',
            s9f1: 'Transfer Technology: Creates hollow, mesh and special textures through transfer stitch',
            s9f2: 'Breathable Mesh: Transfer creates mesh structure with excellent breathability',
            s9f3: '3D Patterns: Unique three-dimensional pattern effects with rich visual layers',
            s9f4: 'Light & Comfortable: Hollow design reduces weight for lighter wearing',
            s9f5: 'Applications: Summer, sports, fashion leisure',
            serviceTitle: 'OEM/ODM Services',
            serviceSubtitle: 'One-stop solution from design to production',
            oemTitle: 'OEM Manufacturing',
            oemDesc: 'Customer provides design or sample, we handle production',
            oem1: 'Sample-based custom production',
            oem2: 'Design-based custom production',
            oem3: 'Strict execution per customer requirements',
            oem4: 'NDA protection for designs',
            odmTitle: 'ODM Design',
            odmDesc: 'We provide full service from design to production',
            odm1: 'Professional design team',
            odm2: 'Market trend analysis',
            odm3: 'Style development design',
            odm4: 'Sampling and production confirmation',
            valueTitle: 'Value-added Services',
            valueDesc: 'Complete supporting services for your convenience',
            value1: 'Packaging design customization',
            value2: 'Hangtag and label printing',
            value3: 'Quality inspection reports',
            value4: 'Logistics arrangement',
            ctaTitle: 'Get Complete Product Catalog',
            ctaDesc: 'Nine series, hundreds of products. Welcome to request detailed product information and quotation',
            ctaBtn: 'Contact Now'
        },
        // About Page
        aboutPage: {
            title: 'About Us',
            subtitle: '20 Years of Focus, Professional Excellence',
            overviewTitle: 'Company Overview',
            overviewLead: 'Zhuji Rongxing Knitting Co., Ltd. was established on May 28, 2002. We are a professional socks manufacturer with over 20 years of experience in R&D, quality control, and service.',
            overviewP1: 'Our factory covers an area of 27,800 square meters and is recognized as a scale enterprise by the local government. We have 800 professional sock machines with a monthly production capacity of 3 million pairs, mainly exported to European and American markets.',
            overviewP2: 'The company currently employs 160 staff, including 10 technical development engineers and 20 maintenance engineers. All sock production processes are completed in-house, with strict quality control management at every stage to ensure stable and reliable product quality.',
            factoryImg: 'Factory Exterior',
            statYear: 'Established',
            statArea: 'Factory Area (㎡)',
            statMachines: 'Sock Machines',
            statCapacity: 'Monthly Capacity',
            statStaff: 'Employees',
            statSales: '2024 Sales',
            capTitle: 'Production Capabilities',
            capSubtitle: 'Large-scale production ensuring quality and on-time delivery',
            capImg1: 'Production Workshop',
            capImg2: 'Toe Closing Workshop',
            capImg3: 'Packaging Workshop',
            cap1Title: 'Knitting Workshop',
            cap1Desc: 'Equipped with 800 advanced sock machines, covering single needle, double needle, terry and other types, capable of producing various men\'s, women\'s, children\'s and functional socks.',
            cap2Title: 'Toe Closing & Setting',
            cap2Desc: 'Combining automatic toe closing with manual linking, supporting seamless toe technology to ensure flat and comfortable sock toes. Professional setting equipment guarantees beautiful sock shapes.',
            cap3Title: 'Packaging & QC',
            cap3Desc: 'Strict quality inspection process with full control from raw materials to finished products. Support various packaging customization including hangtags, labels, and packaging boxes.',
            certTitle: 'Certifications',
            certSubtitle: 'International standards, quality assurance',
            certIntro: 'Our company has maintained multiple international certifications for 20 consecutive years. Product quality and management systems meet international standards, making us a trustworthy partner.',
            certQuality: 'Quality Certifications',
            certLabor: 'Labor Certifications',
            certEnv: 'Environmental Certifications',
            partnerTitle: 'Partner Brands',
            partnerSubtitle: 'Trusted by international renowned brands for over 15 years',
            partnerMain: 'Major Partner',
            partnerKey: 'Key Partner',
            partnerBrand: 'Brand Partner',
            partner15: '15+ Years Cooperation',
            timelineTitle: 'Our Journey',
            timelineSubtitle: '20 years of focus, continuous progress',
            tl1Title: 'Company Founded',
            tl1Desc: 'Zhuji Rongxing Knitting Co., Ltd. was officially established, beginning sock manufacturing business',
            tl2Title: 'Expansion',
            tl2Desc: 'Introduced advanced equipment, expanded production scale, began serving international brands',
            tl3Title: 'International Certification',
            tl3Desc: 'Obtained WALMART, BSCI and other international certifications, entered mainstream international supply chains',
            tl4Title: 'Equipment Upgrade',
            tl4Desc: 'Sock machine count reached 800, monthly production capacity exceeded 3 million pairs',
            tl5Title: 'Green Transformation',
            tl5Desc: 'Obtained GRS, OEKO-TEX100 environmental certifications, promoting green production',
            tl6Title: 'Continued Growth',
            tl6Desc: 'Annual sales reached 85 million RMB, with continuous increase in partner brands',
            ctaTitle: 'Looking Forward to Working With You',
            ctaDesc: '20 years of professional experience, 800 advanced machines, 160 professional team members, providing you with quality sock manufacturing services',
            ctaBtn: 'Contact Us'
        },
        // Contact Page
        contactPage: {
            title: 'Contact Us',
            subtitle: 'Looking Forward to Building a Partnership',
            emailTitle: 'Email',
            emailDesc: 'Send inquiries or product requests',
            phoneTitle: 'Phone',
            phoneDesc: 'Mon-Fri 9:00-18:00 (CST)',
            addrTitle: 'Factory Address',
            addrDesc: 'Datang Town, Zhuji, Zhejiang, China',
            welcome: 'Welcome to visit by appointment',
            formTitle: 'Send Inquiry',
            formDesc: 'Fill out the form below and we will contact you soon',
            labelName: 'Your Name *',
            labelCompany: 'Company Name *',
            labelEmail: 'Email *',
            labelPhone: 'Phone',
            labelCountry: 'Country/Region *',
            labelInterest: 'Product Interest *',
            labelQty: 'Estimated Quantity',
            labelMsg: 'Detailed Requirements *',
            phName: 'Enter your name',
            phCompany: 'Enter company name',
            phEmail: 'Enter email address',
            phPhone: 'Enter phone number',
            phMsg: 'Please describe your specific requirements, including product specifications, customization needs, target market, etc.',
            optCountry: 'Select country/region',
            optOther: 'Other',
            optProduct: 'Select product type',
            optFloor: 'Floor Socks',
            optCotton: 'Premium Cotton Socks',
            optFeather: 'Feather Yarn Shea Butter Socks',
            optTerry: 'Terry Socks',
            optMultiple: 'Multiple Products',
            optCustom: 'Custom Development',
            optQty: 'Select quantity range',
            submitBtn: 'Submit Inquiry',
            faqTitle: 'FAQ',
            faqDesc: 'Answers to common questions about cooperation',
            q1: 'Q: What is the Minimum Order Quantity (MOQ)?',
            a1: 'A: Our standard MOQ is 3,000 pairs/color/style. For long-term partners or large volume orders, we can negotiate more flexible MOQs.',
            q2: 'Q: How long does sampling take?',
            a2: 'A: Regular sampling takes 7-10 working days. Complex processes or special materials may require 10-15 working days. Sampling fees can be deducted upon bulk order placement.',
            q3: 'Q: What is the lead time for bulk orders?',
            a3: 'A: Depending on order quantity and process complexity, bulk order lead time is typically 30-45 days. We will provide an accurate delivery schedule upon order confirmation.',
            q4: 'Q: What payment methods do you accept?',
            a4: 'A: We accept T/T wire transfer, L/C letter of credit, and other payment methods. Specific payment terms are negotiated based on order amount and cooperation history.',
            q5: 'Q: Do you provide packaging design services?',
            a5: 'A: Yes, we can provide packaging design services including hangtags, labels, and packaging boxes. You may also provide your own design files.',
            q6: 'Q: How do you ensure product quality?',
            a6: 'A: We have a strict quality control process with 6 inspection stages from raw materials to finished products. All products meet international quality standards.',
            mapTitle: 'Factory Location',
            mapDesc: 'Zhuji, Zhejiang - China\'s Sock Capital'
        },
        // Blog Page
        blogPage: {
            title: 'Industry Insights',
            subtitle: 'Factory Updates, Product Spotlights & Expert Guides',
            filterAll: 'All',
            filterIndustry: 'Industry',
            filterProduct: 'Product',
            filterFactory: 'Factory',
            filterQuality: 'Quality',
            catIndustry: 'Industry',
            catProduct: 'Product',
            catFactory: 'Factory',
            catQuality: 'Quality',
            readTime: '8 min read',
            readTime2: '6 min read',
            readTime3: '5 min read',
            readTime4: '7 min read',
            readTime5: '6 min read',
            readTime6: '5 min read',
            readMore: 'Read More →',
            post1Title: 'How to Choose the Right Socks OEM/ODM Partner: A Complete Guide',
            post1Excerpt: 'Selecting the right manufacturer is the most critical decision in your socks brand journey. This guide covers 7 key factors—from factory scale to quality control—that distinguish great partners from costly mistakes.',
            post2Title: 'World Cup Socks Series: From Design Concept to Mass Production',
            post2Excerpt: 'Our World Cup-themed socks have equipped fans across Europe, North America, and Southeast Asia. Here\'s how we turn a design brief into millions of pairs—on schedule and on quality.',
            post3Title: '6-Stage QC: How We Ensure Every Pair Meets International Standards',
            post3Excerpt: 'From yarn inspection to final packaging, our strict 6-stage quality control process catches defects early—before they leave the factory. Learn how we maintain 99.2% pass rate across all production runs.',
            post4Title: 'Inside Our 800-Machine Workshop: How Scale Enables Consistency',
            post4Excerpt: 'Scale matters in manufacturing. With 800 sock machines under one roof, we can maintain uniform quality standards, reduce per-unit costs, and deliver 3 million pairs monthly—without sacrificing precision.',
            post5Title: 'Sustainability Trends in Socks Manufacturing: What Buyers Need to Know',
            post5Excerpt: 'Organic cotton, recycled yarn, water-saving dyes—sustainability is no longer optional for global buyers. We break down the certifications that matter and how to source responsibly without blowing your budget.',
            post6Title: 'Terry Socks vs. Regular Socks: What\'s the Difference and When to Choose',
            post6Excerpt: 'The terry loop structure creates superior warmth and cushioning—but not all terry socks are equal. We explain the yarn weight, loop density, and construction details that separate premium terry from the rest.',
            ctaTitle: 'Want to Discuss Your Socks Project?',
            ctaDesc: 'Our team is ready to help with OEM/ODM customization, sampling, and bulk orders.',
            ctaBtn: 'Contact Us Now'
        }
    },
    zh: {
        meta: {
            title: 'Entrol Rongxing - 专业袜子制造商 | B2B OEM/ODM',
            productsTitle: '产品中心 - Entrol Rongxing | 专业袜子制造商',
            aboutTitle: '关于我们 - Entrol Rongxing | 专业袜子制造商',
            contactTitle: '联系我们 - Entrol Rongxing | 专业袜子制造商',
            blogTitle: '博客 - Entrol Rongxing | 行业洞察 & 工厂动态'
        },
        nav: { home: '首页', products: '产品', about: '关于', blog: '博客', contact: '联系' },
        hero: {
            title: '专业袜子制造商',
            subtitle: '20年经验 · 月产300万双 · 服务全球品牌',
            desc: '专注双针提花袜、毛圈袜、纯棉袜、双层提花袜、室内鞋、四季脚套、半边绒袜、粗针袜、移圈袜等系列产品。',
            btnProducts: '浏览产品',
            btnContact: '联系我们'
        },
        stats: { years: '年经验', capacity: '月产能', machines: '台袜机', staff: '名员工' },
        products: {
            title: '产品系列',
            subtitle: '9大产品系列，满足多元化市场需求',
            btnViewAll: '查看全部产品'
        },
        advantages: {
            title: '为什么选择我们',
            subtitle: '规模化生产，国际化品质保障'
        },
        partners: { title: '合作伙伴', subtitle: '国际品牌信赖之选' },
        cta: {
            title: '开启您的定制之旅',
            desc: '无论您需要OEM代工生产还是ODM设计开发，我们都能提供专业解决方案',
            btn: '立即联系'
        },
        footer: {
            brand: '专业袜子制造商',
            links: '快速链接',
            contact: '联系方式',
            company: '诸暨市荣兴针织有限公司',
            address: '地址：浙江省诸暨市大唐镇',
            tel: '电话：+86 152 6313 0999',
            capacity: '产能：300万双/月'
        },
        // Products Page
        productsPage: {
            title: '产品中心',
            subtitle: '九大产品系列，满足多元化市场需求',
            cat1: '双针提花',
            cat2: '毛圈袜系列',
            cat3: '纯棉袜',
            cat4: '双层提花',
            cat5: '室内鞋',
            cat6: '四季脚套',
            cat7: '半边绒袜',
            cat8: '粗针袜',
            cat9: '移圈袜',
            placeholderImg: '产品图片',
            features: '产品特点',
            specs: '规格参数',
            specNeedle: '针数',
            specMaterial: '材质',
            specMoq: '起订量',
            specCustom: '定制',
            specMat1: '棉/羊毛/混纺',
            specMat2: '棉/涤纶/功能性纤维',
            specMat3: '棉/冰丝/莫代尔',
            specMat4: '羽毛纱/半边绒',
            specCus1: '支持图案、颜色、logo定制',
            specCus2: '支持毛圈高度、材质定制',
            specCus3: '支持有机棉、彩棉定制',
            specCus4: '支持内外层材质、颜色搭配定制',
            specCus5: '支持鞋底材质、鞋面设计定制',
            specCus6: '支持防滑条设计、包装定制',
            specCus7: '支持颜色、绒毛长度定制',
            specCus8: '支持纱线颜色、纹理定制',
            specCus9: '支持移圈图案设计定制',
            specThickness: '厚度',
            specThick1: '薄毛圈/中毛圈/厚毛圈',
            specThick2: '中厚/加厚',
            specCotton: '含棉量',
            specStructure: '结构',
            specStr1: '双层/假双层',
            specCombo: '材质组合',
            specCom1: '棉+羊毛/棉+腈纶等',
            specSole: '鞋底材质',
            specUpper: '鞋面材质',
            specUp1: '针织/绒面',
            specStyle: '款式',
            specSty1: '浅口/深口/交叉带',
            specYarn: '纱线',
            specYarn1: '粗纱/花式纱',
            specTech: '工艺',
            specTech1: '移圈/挑孔',
            specPattern: '图案',
            specPat1: '网眼/镂空/立体花',
            s1f1: '双针工艺：采用双针筒编织技术，袜子内外两面均为正面线圈，穿着更加舒适',
            s1f2: '提花图案：支持复杂图案设计，色彩丰富，层次分明',
            s1f3: '无骨缝头：平整无凸起，不硌脚，提升穿着体验',
            s1f4: '耐用性强：双针结构使袜子更加厚实耐磨',
            s1f5: '适用场景：商务、休闲、运动等多种场合',
            s2f1: '毛圈结构：内里毛圈设计，增加空气层，保暖性能优异',
            s2f2: '吸湿排汗：快速吸收脚汗，保持足部干爽',
            s2f3: '缓冲保护：毛圈提供额外缓冲，适合运动穿着',
            s2f4: '加厚保暖：冬季必备，锁温效果佳',
            s2f5: '适用场景：运动、户外、冬季保暖',
            s3f1: '精梳长绒棉：精选优质长绒棉，纤维长、强度高',
            s3f2: '亲肤透气：天然棉纤维，亲肤不刺激，透气性好',
            s3f3: '抗菌处理：可选抗菌防臭处理，保持足部清新',
            s3f4: '环保健康：通过OEKO-TEX100认证，安全无害',
            s3f5: '适用场景：日常穿着、商务、儿童',
            s4f1: '双层结构：内外两层不同材质或颜色，层次丰富',
            s4f2: '立体提花：3D立体图案效果，视觉冲击力强的',
            s4f3: '保暖升级：双层设计增加保暖性，适合寒冷季节',
            s4f4: '高端质感：工艺复杂，产品档次高',
            s4f5: '适用场景：高端商务、礼品、冬季保暖',
            s5f1: '防滑底设计：底部TPR或硅胶防滑点，安全稳固',
            s5f2: '柔软舒适：针织鞋面，贴合脚型，如袜般舒适',
            s5f3: '轻便静音：适合室内行走，不打扰他人',
            s5f4: '可机洗：方便清洁，耐用耐洗',
            s5f5: '适用场景：居家、医院、酒店、瑜伽馆',
            s6f1: '隐形设计：浅口隐形，搭配各种鞋型不露边',
            s6f2: '防滑不掉跟：后跟硅胶防滑条，牢固贴合',
            s6f3: '轻薄透气：轻薄面料，四季皆宜',
            s6f4: '多色可选：肤色、黑色、白色等基础色系',
            s6f5: '适用场景：搭配单鞋、乐福鞋、休闲鞋',
            s7f1: '羽毛纱工艺：表面细腻绒毛，触感超柔如羽毛',
            s7f2: '轻盈保暖：绒毛结构锁住空气，保暖不臃肿',
            s7f3: '时尚外观：独特质感，深受女性消费者喜爱',
            s7f4: '多场景适用：居家、睡眠、休闲均可',
            s7f5: '适用场景：居家休闲、冬季保暖、礼品',
            s8f1: '粗针纹理：明显的针织纹理，复古粗犷风格',
            s8f2: '厚实耐用：纱线较粗，袜子更加厚实耐磨',
            s8f3: '透气性好：粗针结构形成更多透气孔',
            s8f4: '复古时尚：经典粗线袜风格，潮流百搭',
            s8f5: '适用场景：户外、工装、复古风格搭配',
            s9f1: '移圈工艺：通过移圈形成镂空、网眼等特殊纹理',
            s9f2: '透气网眼：移圈形成网眼结构，透气性极佳',
            s9f3: '立体花纹：独特的立体花纹效果，视觉层次丰富',
            s9f4: '轻盈舒适：镂空设计减轻重量，穿着更轻盈',
            s9f5: '适用场景：夏季、运动、时尚休闲',
            serviceTitle: 'OEM/ODM 服务',
            serviceSubtitle: '从设计到生产，一站式解决方案',
            oemTitle: 'OEM代工',
            oemDesc: '客户提供设计稿或样品，我们负责生产',
            oem1: '来样定制生产',
            oem2: '来图定制生产',
            oem3: '严格按客户要求执行',
            oem4: '保密协议保护设计',
            odmTitle: 'ODM设计',
            odmDesc: '我们提供从设计到生产的全套服务',
            odm1: '专业设计团队',
            odm2: '市场趋势分析',
            odm3: '款式开发设计',
            odm4: '打样确认生产',
            valueTitle: '增值服务',
            valueDesc: '完善的配套服务，让您省心省力',
            value1: '包装设计定制',
            value2: '吊牌标签印刷',
            value3: '质检报告提供',
            value4: '物流配送安排',
            ctaTitle: '获取完整产品目录',
            ctaDesc: '九大系列，数百款产品，欢迎索取详细产品资料和报价单',
            ctaBtn: '立即咨询'
        },
        // About Page
        aboutPage: {
            title: '关于我们',
            subtitle: '20年专注，成就专业',
            overviewTitle: '公司概况',
            overviewLead: '诸暨市荣兴针织有限公司成立于2002年5月28日，是一家拥有20多年研发、品控和服务经验的专业袜子制造商。',
            overviewP1: '公司厂房占地面积27,800平方米，属于当地政府的规上企业。我们拥有800台专业袜机，月产能达300万双，产品主要销往欧洲和美国市场。',
            overviewP2: '公司现有员工160人，其中技术开发工程师10名，维修工程师20名。所有袜子生产环节都在本厂完成，且每个环节我们都有严格的品控管理制度，确保产品质量稳定可靠。',
            factoryImg: '工厂外观',
            statYear: '成立年份',
            statArea: '厂房面积',
            statMachines: '专业袜机',
            statCapacity: '月产能',
            statStaff: '员工人数',
            statSales: '2024年销售额',
            capTitle: '生产能力',
            capSubtitle: '规模化生产，确保品质与交期',
            capImg1: '生产车间',
            capImg2: '缝头车间',
            capImg3: '包装车间',
            cap1Title: '织造车间',
            cap1Desc: '配备800台先进袜机，涵盖单针、双针、毛圈等多种机型，可生产各类男女袜、童袜及功能性袜子。',
            cap2Title: '缝头定型',
            cap2Desc: '采用自动缝头和手工对目相结合，支持无骨缝头工艺，确保袜头平整舒适。专业定型设备保证袜型美观。',
            cap3Title: '包装质检',
            cap3Desc: '严格的质检流程，从原材料到成品全程把控。支持各类包装定制，包括吊牌、标签、包装盒等。',
            certTitle: '认证资质',
            certSubtitle: '国际标准，品质保证',
            certIntro: '本公司连续20年通过多项国际认证，产品质量和管理体系符合国际标准，是您值得信赖的合作伙伴。',
            certQuality: '质量认证',
            certLabor: '人权认证',
            certEnv: '环保认证',
            partnerTitle: '合作品牌',
            partnerSubtitle: '深受国际知名品牌信赖，合作15年以上',
            partnerMain: '主要合作伙伴',
            partnerKey: '重要合作伙伴',
            partnerBrand: '品牌合作伙伴',
            partner15: '合作15年以上',
            timelineTitle: '发展历程',
            timelineSubtitle: '20年专注，持续进步',
            tl1Title: '公司成立',
            tl1Desc: '诸暨市荣兴针织有限公司正式成立，开始袜子生产业务',
            tl2Title: '扩大生产',
            tl2Desc: '引进先进设备，扩大生产规模，开始服务国际品牌',
            tl3Title: '国际认证',
            tl3Desc: '通过WALMART、BSCI等国际认证，进入国际主流供应链',
            tl4Title: '设备升级',
            tl4Desc: '袜机数量达到800台，月产能突破300万双',
            tl5Title: '环保转型',
            tl5Desc: '通过GRS、OEKO-TEX100环保认证，推进绿色生产',
            tl6Title: '持续增长',
            tl6Desc: '年销售额达8500万元，合作品牌持续增加',
            ctaTitle: '期待与您合作',
            ctaDesc: '20年专业经验，800台先进设备，160名专业团队，为您提供优质袜子制造服务',
            ctaBtn: '联系我们'
        },
        // Contact Page
        contactPage: {
            title: '联系我们',
            subtitle: '期待与您建立合作关系',
            emailTitle: '电子邮件',
            emailDesc: '发送询盘或产品需求',
            phoneTitle: '电话咨询',
            phoneDesc: '周一至周五 9:00-18:00',
            addrTitle: '工厂地址',
            addrDesc: '浙江省诸暨市大唐镇',
            welcome: '欢迎预约参观工厂',
            formTitle: '发送询盘',
            formDesc: '填写以下表单，我们将尽快与您联系',
            labelName: '您的姓名 *',
            labelCompany: '公司名称 *',
            labelEmail: '电子邮箱 *',
            labelPhone: '联系电话',
            labelCountry: '国家/地区 *',
            labelInterest: '感兴趣的产品 *',
            labelQty: '预计采购数量',
            labelMsg: '详细需求 *',
            phName: '请输入您的姓名',
            phCompany: '请输入公司名称',
            phEmail: '请输入电子邮箱',
            phPhone: '请输入联系电话',
            phMsg: '请描述您的具体需求，包括产品规格、定制要求、目标市场等信息',
            optCountry: '请选择国家/地区',
            optOther: '其他',
            optProduct: '请选择产品类型',
            optFloor: '地板袜',
            optCotton: '高档全棉袜',
            optFeather: '羽毛纱乳木果油袜',
            optTerry: '毛圈袜',
            optMultiple: '多种产品',
            optCustom: '定制开发',
            optQty: '请选择数量范围',
            submitBtn: '提交询盘',
            faqTitle: '常见问题',
            faqDesc: '关于合作的常见疑问解答',
            q1: 'Q: 最小起订量（MOQ）是多少？',
            a1: 'A: 我们的标准MOQ为3000双/色/款。对于长期合作客户或大批量订单，我们可以协商更灵活的起订量。',
            q2: 'Q: 打样需要多长时间？',
            a2: 'A: 常规打样周期为7-10个工作日。复杂工艺或特殊材料可能需要10-15个工作日。打样费用在大货下单后可抵扣。',
            q3: 'Q: 大货交期是多久？',
            a3: 'A: 根据订单数量和工艺复杂度，大货交期通常为30-45天。我们会在确认订单时提供准确的交货时间表。',
            q4: 'Q: 支持哪些付款方式？',
            a4: 'A: 我们接受T/T电汇、L/C信用证等付款方式。具体付款条款根据订单金额和合作历史协商确定。',
            q5: 'Q: 是否提供包装设计服务？',
            a5: 'A: 是的，我们可以提供包装设计服务，包括吊牌、标签、包装盒等。您也可以提供自己的设计稿。',
            q6: 'Q: 如何保证产品质量？',
            a6: 'A: 我们有严格的品控流程，从原材料到成品共设置6道质检环节。所有产品均符合国际质量标准。',
            mapTitle: '工厂位置',
            mapDesc: '浙江省诸暨市 - 中国袜业之都'
        },
        // Blog Page
        blogPage: {
            title: '行业洞察',
            subtitle: '工厂动态、产品聚焦与专业指南',
            filterAll: '全部',
            filterIndustry: '行业',
            filterProduct: '产品',
            filterFactory: '工厂',
            filterQuality: '品质',
            catIndustry: '行业',
            catProduct: '产品',
            catFactory: '工厂',
            catQuality: '品质',
            readTime: '8 分钟阅读',
            readTime2: '6 分钟阅读',
            readTime3: '5 分钟阅读',
            readTime4: '7 分钟阅读',
            readTime5: '6 分钟阅读',
            readTime6: '5 分钟阅读',
            readMore: '阅读全文 →',
            post1Title: '如何选择合适的袜子OEM/ODM合作伙伴：完整指南',
            post1Excerpt: '选择正确的制造商是您袜子品牌之旅中最关键的决策。本指南涵盖7个关键因素——从工厂规模到质量控制——帮助您区分优质合作伙伴与代价高昂的错误。',
            post2Title: '世界杯系列袜子：从设计概念到大规模生产的全过程',
            post2Excerpt: '我们的世界杯主题袜子已装备了欧洲、北美和东南亚的球迷。以下是我们如何将设计稿转化为数百万双产品——按时按质交付。',
            post3Title: '6步质检：如何确保每一双都达到国际标准',
            post3Excerpt: '从纱线检验到最终包装，我们严格的6步质检流程在产品离厂前就能发现缺陷。了解我们如何在所有生产批次中保持99.2%的通过率。',
            post4Title: '走进800台袜机车间：规模如何保障品质一致性',
            post4Excerpt: '在制造业中，规模决定一切。800台袜机同在一个屋檐下，使我们能够保持统一的品质标准、降低单件成本、每月交付300万双——同时不牺牲精度。',
            post5Title: '袜子制造可持续趋势：买家必须了解的事项',
            post5Excerpt: '有机棉、再生纱线、节水染料——可持续性已成为全球买家的必备要求。我们分解了重要的认证标准，以及如何在不超预算的前提下实现负责任采购。',
            post6Title: '毛圈袜 vs 普通袜：有什么区别，何时选择',
            post6Excerpt: '毛圈结构带来出色的保暖性和缓冲性——但并非所有毛圈袜都相同。我们解释了纱线克重、毛圈密度和结构细节，这些是区分优质毛圈袜与普通产品的关键。',
            ctaTitle: '想讨论您的袜子项目？',
            ctaDesc: '我们的团队随时准备为您提供OEM/ODM定制、打样及大货生产服务。',
            ctaBtn: '立即联系'
        }
    }
};

// Language Manager
const LangManager = {
    currentLang: localStorage.getItem('lang') || 'en',
    
    init() {
        this.bindEvents();
        this.setLanguage(this.currentLang, false);
    },
    
    bindEvents() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang, true);
            });
        });
    },
    
    setLanguage(lang, save = true) {
        this.currentLang = lang;
        if (save) localStorage.setItem('lang', lang);
        
        // Update buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Update html lang attribute
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const translation = this.getTranslation(key);
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        // Update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            const translation = this.getTranslation(key);
            if (translation) {
                el.placeholder = translation;
            }
        });
        
        // Update page title
        const titleEl = document.querySelector('title[data-i18n-title]');
        if (titleEl) {
            const titleKey = titleEl.dataset.i18nTitle;
            const titleTrans = this.getTranslation(titleKey);
            if (titleTrans) document.title = titleTrans;
        }
    },
    
    getTranslation(key) {
        const keys = key.split('.');
        let value = i18n[this.currentLang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value;
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Language Manager
    LangManager.init();
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // FormSubmit will handle the actual submission
            // This is just for validation feedback
            const lang = LangManager.currentLang;
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.company || !data.email || !data.country || !data.interest || !data.message) {
                e.preventDefault();
                alert(lang === 'zh' ? '请填写所有必填项（*标记的字段）' : 'Please fill in all required fields (* marked)');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                e.preventDefault();
                alert(lang === 'zh' ? '请输入有效的电子邮箱地址' : 'Please enter a valid email address');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.textContent = lang === 'zh' ? '提交中...' : 'Submitting...';
            submitBtn.disabled = true;
            
            // Form will submit to FormSubmit
        });
    }
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .advantage-item, .service-card, .capability-card, .cert-category, .partner-card, .faq-item, .blog-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.product-card, .advantage-item, .service-card, .capability-card, .cert-category, .partner-card, .faq-item, .blog-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
    
    // Stats Counter Animation
    const animateStats = function() {
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
            const target = stat.textContent;
            const isNumeric = /^[\d,]+$/.test(target.replace(/[^\d,]/g, ''));
            
            if (isNumeric && !stat.classList.contains('animated')) {
                const numTarget = parseInt(target.replace(/[^\d]/g, ''));
                const suffix = target.replace(/[\d,]/g, '');
                const duration = 2000;
                const step = numTarget / (duration / 16);
                let current = 0;
                
                stat.classList.add('animated');
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= numTarget) {
                        stat.textContent = target;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current).toLocaleString() + suffix;
                    }
                }, 16);
            }
        });
    };
    
    // Trigger stats animation when hero is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // Blog Filter
    const filterTabs = document.querySelectorAll('.filter-tab');
    const blogCards = document.querySelectorAll('.blog-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            blogCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
