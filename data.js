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
            url: "https://github.com/adeelahmed4868/mbert-sentiment-analysis-benchmark"
        },
        {
            title: "Vision-as-a-Service Web App",
            description: "A web application and API that expose computer vision models for inference.",
            url: "https://github.com/adeelahmed4868/vision-as-a-service"
        },
        {
            title: "Applied Data Science Lab",
            description: "Eight applied projects from WorldQuant University covering predictive modeling, time-series forecasting, and data engineering workflows.",
            verification: "https://www.credly.com/badges/923bd7b8-6fa6-49db-8311-947cc9add862/academic_transcript",
            details: [
                { title: "Mexico City real estate analysis", description: "Cleaned and visualized property listings and used correlation analysis to explore how size and location relate to asking prices." },
                { title: "Buenos Aires housing price prediction", description: "Built linear regression models to estimate housing prices and used Ridge and Lasso regularization to address overfitting." },
                { title: "Nairobi air quality forecasting", description: "Queried air quality measurements in MongoDB and forecast particulate levels with autoregressive and ARMA models." },
                { title: "Nepal earthquake damage classification", description: "Queried building records in SQLite and compared logistic regression and decision trees for predicting damage categories." },
                { title: "Corporate bankruptcy prediction", description: "Trained random forest and gradient boosting classifiers on company records to identify bankruptcy risk despite an imbalance between classes." },
                { title: "Consumer finance segmentation", description: "Used principal component analysis and K-means to identify groups in consumer finance data and explored those groups in a Plotly Dash dashboard." },
                { title: "Applicant data and A/B testing", description: "Built a pipeline to extract, transform, and load applicant data and used chi-square tests to evaluate experiment outcomes." },
                { title: "Financial volatility forecasting", description: "Used GARCH to estimate volatility from market data and packaged the forecasting workflow as a reproducible system." }
            ]
        },
        {
            title: "Gold Price Forecasting",
            notebook: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects/blob/main/Project-05-Gold-Price-Forecasting/Gold-Price-Forecasting.ipynb",
            description: "Python project for forecasting gold prices from historical time-series data.",
            url: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects/tree/main/Project-05-Gold-Price-Forecasting"
        },
        {
            title: "GPT-2 Text Generation",
            description: "Python script that uses GPT-2 to generate text from a prompt.",
            url: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects/tree/main/Project_09_Generative_AI_Text_GPT2"
        },
        {
            title: "YOLO Object Detection",
            description: "Python script for real-time object detection with YOLO.",
            url: "https://github.com/adeelahmed4868/AI-Engineering-Portfolio-Projects/tree/main/Project_10_Object_Detection_YOLO"
        },
        {
            title: "Spam Classifier",
            description: "Identifies spam messages.",
            url: "https://github.com/adeelahmed4868/spam-classifier"
        },
        {
            title: "House Price Predictor",
            description: "Estimates house prices from property data.",
            url: "https://github.com/adeelahmed4868/house-price-predictor"
        },
        {
            title: "Customer Segmentation",
            description: "Groups customers with similar characteristics.",
            url: "https://github.com/adeelahmed4868/customer-segmentation"
        },
        {
            title: "Customer Churn Predictor",
            description: "Predicts which customers are likely to leave.",
            url: "https://github.com/adeelahmed4868/customer-churn-predictor"
        },
        {
            title: "Handwritten Digit Classification",
            description: "Recognizes handwritten digits.",
            url: "https://github.com/adeelahmed4868/handwritten-digit-classification"
        },
        {
            title: "CIFAR-10 Image Classification",
            description: "Classifies images from CIFAR-10.",
            url: "https://github.com/adeelahmed4868/cifar-10-image-classification"
        },
        {
            title: "Transformer Sentiment Analysis",
            description: "Classifies sentiment using transformers.",
            url: "https://github.com/adeelahmed4868/sentiment-analysis-transformers"
        },
        {
            title: "Enterprise LCEL RAG Engine",
            description: "Implements retrieval-augmented generation with LangChain Expression Language.",
            url: "https://github.com/adeelahmed4868/enterprise-lcel-rag-engine"
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