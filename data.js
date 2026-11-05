const portfolioData = {
    personal: {
        name: "Adeel Ahmed",
        role: "AI Researcher & STEM Educator",
        image: "photo.jpg",
        email: "adeelahmed4868@gmail.com",
        linkedin: "https://www.linkedin.com/in/adeel-ahmed-8a3a82184",
        github: "https://github.com/adeelahmed4868"
    },
    about: [
        "I am an AI researcher and STEM educator with an MS in Data Science (3.99 CGPA) from Riphah International University, a strong background in Mathematics, and over 9 years of teaching experience. I am actively seeking a Ph.D. in AI and NLP.",
        "My research focuses on parameter-efficient fine-tuning (PEFT) for low-resource environments, supported by a master's thesis and academic publications spanning multilingual NLP and medical vision-language models.",
        "Alongside my research, I serve as a Secondary School Teacher in Mathematics, Physics, and Computer Science under the Punjab School Education Department, where I integrate foundational Python programming into traditional STEM curricula."
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
        "M. Fareed, J. Uddin, A. H. Sayyid, <strong>A. Ahmed</strong>, &amp; M. A. Sattar. <a href='https://www.nature.com/articles/s41598-026-77203-3'><em>CXRG-SVLM: A parameter-efficient small vision-language model for multi-view chest X-ray report generation in resource-constrained environments</em></a>. Scientific Reports 16, 35452 (2026).",
        "M. Fareed, J. Uddin, <strong>A. Ahmed</strong>, MA Nauman, N. Khan, M. Billah, & MA Sattar. <em>'A Systematic Review of LSTM Based Deep Learning Models for Healthcare and Medicine'</em>. 2026, PLOS One (Submitted).",
        "Fareed, M., Fatima, M., Uddin, J., <strong>Ahmed, A.</strong>, & Sattar, M. A. (2025). <em>'A Systematic Review of Ethical Considerations of Large Language Models in Healthcare and Medicine'</em>. Frontiers in Digital Health. <a href='https://doi.org/10.3389/fdgth.2025.1653631'>Read the Frontiers article</a>"
    ],
    experience: [
        {
            title: "Graduate Researcher",
            date: "Feb 2024 - Mar 2026",
            organization: "Riphah International University",
            duties: [
                "Benchmarked PEFT architectures (LoRA and IA³) against Full Fine-Tuning on mBERT.",
                "Achieved 90.17% peak accuracy with LoRA, reducing storage from 681.28 MB to 10.13 MB and updating 1.07% of parameters.",
                "IA³ reached 82.82% accuracy with 2.24 GB of GPU memory and a 2.91 MB storage footprint."
            ]
        },
        {
            title: "AI Research Collaborator",
            date: "2024 - 2026",
            organization: "Riphah International University",
            duties: [
                "Helped build a small vision-language model that combines a frozen RAD-DINO image encoder and a 4-bit quantized Qwen2.5-3B language model.",
                "Helped implement 4-bit QLoRA, limiting training to 1.91% of parameters and enabling training on a single 16 GB GPU."
            ]
        },
        {
            title: "Secondary School Teacher (Math)",
            date: "July 2017 - Present",
            organization: "Punjab School Education Department",
            duties: [
                "Teach fundamental and practical Python programming, including variables, data types, loops, and problem-solving.",
                "Teach physics through mathematical applications and use digital learning resources to support classroom instruction."
            ]
        }
    ],
    projects: [
        {
            title: "mBERT Fine-Tuning Benchmark",
            description: "Compares six fine-tuning techniques across three sentiment analysis datasets.",
            url: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects/tree/main/Fine_Tuning_mBERT_6_techniques_3_datasets_for_Sentiment_Analysis"
        },
        {
            title: "Vision-as-a-Service Web App",
            description: "A web app and API for serving computer vision models.",
            url: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects/tree/main/Project%2011%20Deploying%20a%20Vision-as-a-Service%20Web%20App"
        },
        {
            title: "Applied Data Science Lab",
            description: "Eight WorldQuant University projects spanning predictive modeling, time-series analysis, and data engineering.",
            details: [
                "Real estate price analysis and predictive pricing with linear regression",
                "Air quality forecasting with ARMA and MongoDB",
                "Earthquake damage prediction with logistic regression and decision trees",
                "Corporate bankruptcy classification with random forests and gradient boosting",
                "US consumer segmentation with K-means, PCA, and Plotly Dash",
                "A/B testing and ETL with Python and chi-square tests",
                "Financial asset volatility forecasting with GARCH"
            ]
        },
        {
            title: "Applied ML and AI Projects",
            description: "Classification, customer analytics, price forecasting, computer vision, transformers, and GPT-2 text generation.",
            url: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects"
        }
    ],
    awards: [
        "<strong>Vice Chancellor's Honors Award</strong> for Academic Excellence - Riphah International University",
        "<strong>Merit Scholarship</strong> during MS Data Science - Riphah International University",
        "<strong>2nd Position in Class</strong> during MS - Riphah International University",
        "<strong>Merit Laptop Award</strong> from Punjab Govt. during BS Mathematics"
    ]
};