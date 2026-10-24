const portfolioData = {
    personal: {
        name: "Adeel Ahmed",
        role: "AI & Data Science Professional | STEM Educator",
        image: "photo.jpg",
        email: "adeelahmed4868@gmail.com",
        linkedin: "https://www.linkedin.com/", // Replace with your LinkedIn profile link if desired
        github: "https://github.com/"       // Replace with your GitHub profile link if desired
    },
    about: [
        "I am an AI researcher and STEM educator with an MS in Data Science (3.99 CGPA) from Riphah International University, a strong background in Mathematics, and over 9 years of teaching experience. I am actively seeking a Ph.D. in AI and NLP.",
        "My research focuses on parameter-efficient fine-tuning (PEFT) for low-resource environments, supported by a master's thesis and academic publications spanning multilingual NLP and medical vision-language models.",
        "Alongside my research, I serve as a Secondary School Teacher in Mathematics and Physics under the Punjab School Education Department, where I integrate foundational Python programming into traditional STEM curricula."
    ],
    research: [
        {
            title: "Parameter-Efficient Fine-Tuning (PEFT)",
            description: "Investigating the computational efficacy of methods like LoRA and Activation-Based Adaptation (IA³) compared to Full Fine-Tuning."
        },
        {
            title: "Low-Resource Domain Adaptation",
            description: "Benchmarking models like mBERT for morphologically rich, low-resource languages such as Punjabi and Roman Urdu."
        },
        {
            title: "Medical Vision-Language Models",
            description: "Developing quantized, parameter-efficient small vision-language models (SVLM) for automated clinical report generation."
        }
    ],
    publications: [
        "<strong>A. Ahmed</strong>, S. Riaz, M. Fareed. <em>'PEFT-mBERT: Benchmarking a Transformer-Based Encoder via Low-Rank and Activation-Based Adaptation for Resource-Efficient Punjabi Sentiment Analysis'</em>. 2026, ACM (Submitted).",
        "M. Fareed, J. Uddin, <strong>A. Ahmed</strong>, & MA Sattar. <em>'CXRG-SVLM: A Parameter-Efficient Small Vision-Language Model for Multi-View Chest X-ray Report Generation'</em>. 2026, Scientific Reports (Accepted).",
        "M. Fareed, J. Uddin, <strong>A. Ahmed</strong>, MA Nauman, N. Khan, M. Billah, & MA Sattar. <em>'A Systematic Review of LSTM Based Deep Learning Models for Healthcare and Medicine'</em>. 2026, PLOS One (Submitted).",
        "Fareed, M., Fatima, M., Uddin, J., <strong>Ahmed, A.</strong>, & Sattar, M. A. (2025). <em>'A Systematic Review of Ethical Considerations of Large Language Models in Healthcare and Medicine'</em>. Frontiers in Digital Health. https://doi.org/10.3389/fdgth.2025.1653631"
    ],
    experience: [
        {
            title: "Graduate Researcher",
            date: "Feb 2024 - Mar 2026",
            organization: "Riphah International University",
            duties: [
                "Benchmarked PEFT architectures (LoRA and IA³) against Full Fine-Tuning on mBERT.",
                "Achieved 90.17% peak accuracy while reducing model storage from 681MB to 10MB using LoRA."
            ]
        },
        {
            title: "AI Research Collaborator",
            date: "2024 - 2026",
            organization: "Riphah International University",
            duties: [
                "Collaborated on engineering a Small Vision-Language Model with a 4-bit quantized Qwen2.5-3B model.",
                "Assisted in implementing 4-bit QLoRA to restrict trainable parameters to 1.91%."
            ]
        },
        {
            title: "Secondary School Teacher (Math)",
            date: "July 2017 - Present",
            organization: "Punjab School Education Department",
            duties: [
                "Teach fundamental and practical Python programming, including variables, data types, loops, and problem-solving.",
                "Teach fundamental concepts of Physics and connect theoretical principles with mathematical applications."
            ]
        }
    ],
    projects: [
        {
            title: "Vision-as-a-Service Web App",
            description: "Real-time multi-class localized feature extraction models and API architecture."
        },
        {
            title: "Applied Data Science Labs (WorldQuant)",
            description: "Predictive Pricing Model for Real Estate, Air Quality Time-Series Forecasting, and US Consumer Segmentation Dashboard."
        },
        {
            title: "ML Automation Pipelines",
            description: "Spam Classifier, Customer Churn Predictor, Gold Price Forecasting, and YOLO object detection."
        }
    ],
    awards: [
        "<strong>Vice Chancellor's Honors Award</strong> for Academic Excellence - Riphah International University",
        "<strong>Merit Scholarship</strong> during MS Data Science - Riphah International University",
        "<strong>2nd Position in Class</strong> during MS - Riphah International University",
        "<strong>Merit Laptop Award</strong> from Punjab Govt. during BS Mathematics"
    ]
};