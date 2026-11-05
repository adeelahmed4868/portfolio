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
        "I hold an MS in Data Science from Riphah International University (CGPA 3.99/4.0) and a BS (Hons) in Mathematics. I bring over nine years of teaching experience to my work in AI and am seeking doctoral study in AI and natural language processing.",
        "My research examines how pretrained models can be adapted when labeled data or compute is limited. My master’s thesis addressed sentiment analysis in low-resource languages, and my published collaborations span medical vision-language modeling and the ethics of language models in healthcare.",
        "I teach mathematics and physics at GHS Kot Pindi Das under the Punjab School Education Department, with an emphasis on quantitative reasoning and the application of scientific concepts."
    ],
    research: [
        {
            title: "Parameter-Efficient Fine-Tuning (PEFT)",
            description: "I evaluate the trade-offs among predictive accuracy, trainable parameter count, and hardware requirements when adapting pretrained models with LoRA and IA³."
        },
        {
            title: "Low-Resource Domain Adaptation",
            description: "I investigate multilingual model adaptation for sentiment analysis in underrepresented languages, including Punjabi and Roman Urdu, where annotated data are limited and spelling conventions can vary."
        },
        {
            title: "Medical Vision-Language Models",
            description: "I contribute to research on quantized vision-language models for chest X-ray report generation under limited computing resources."
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
                "Designed comparative experiments on multilingual BERT to assess LoRA and IA³ against full fine-tuning for Punjabi sentiment classification.",
                "Achieved 90.17% peak accuracy with LoRA, reducing storage from 681.28 MB to 10.13 MB and updating 1.07% of parameters.",
                "IA³ reached 82.82% accuracy with 2.24 GB of GPU memory and a 2.91 MB storage footprint."
            ]
        },
        {
            title: "AI Research Collaborator",
            date: "2024 - 2026",
            organization: "Riphah International University",
            duties: [
                "Contributed to a compact vision-language architecture pairing a frozen RAD-DINO image encoder with a 4-bit quantized Qwen2.5-3B language model.",
                "Assisted with 4-bit QLoRA adaptation, enabling training on a single 16 GB GPU with 1.91% of loaded parameters trainable."
            ]
        }
    ],
    projects: [
        {
            title: "mBERT Fine-Tuning Benchmark",
            description: "Experimental benchmark comparing six fine-tuning techniques across three sentiment analysis datasets to assess accuracy and parameter efficiency.",
            url: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects/tree/main/Fine_Tuning_mBERT_6_techniques_3_datasets_for_Sentiment_Analysis"
        },
        {
            title: "Vision-as-a-Service Web App",
            description: "A web application and API that expose computer vision models for inference.",
            url: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects/tree/main/Project%2011%20Deploying%20a%20Vision-as-a-Service%20Web%20App"
        },
        {
            title: "Applied Data Science Lab",
            description: "Eight applied projects from WorldQuant University covering predictive modeling, time-series forecasting, and data engineering workflows.",
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
            description: "Implementations across classification, customer analytics, and price forecasting, alongside computer vision, transformer-based sentiment analysis, and GPT-2 text generation.",
            url: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects"
        }
    ],
    awards: [
        "<strong>Vice Chancellor's Honors Award</strong> for Academic Excellence - Riphah International University",
        "<strong>Merit Scholarship</strong> during MS Data Science - Riphah International University",
        "<strong>2nd Position in Class</strong> during MS - Riphah International University",
        "<strong>Merit Laptop Award</strong> from Punjab Govt. during BS Mathematics",
        "Ranked second throughout my school years."
    ]
};