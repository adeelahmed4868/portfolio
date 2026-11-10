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
            notebook: "https://github.com/adeelahmed4868/mbert-sentiment-analysis-benchmark/blob/main/Punjabi-Benchmark-Results.ipynb",
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
                { title: "HOUSING IN MEXICO", description: "Learners use a dataset of 21,000 properties to determine if real estate prices are influenced more by property size or location. They import and clean data from a CSV file, build data visualizations, and examine the relationship between two variables using correlation." },
                { title: "APARTMENT SALES IN BUENOS AIRES", description: "Learners build a linear regression model to predict apartment prices in Argentina. They create a data pipeline to impute missing values and encode categorical features, and they improve model performance by reducing overfitting." },
                { title: "AIR QUALITY IN NAIROBI", description: "Learners build an ARMA time-series model to predict particulate matter levels in Kenya. They extract data from a MongoDB database using pymongo, and improve model performance through hyperparameter tuning." },
                { title: "EARTHQUAKE DAMAGE IN NEPAL", description: "Learners build logistic regression and decision tree models to predict earthquake damage to buildings. They extract data from a SQLite database, and reveal the biases in data that can lead to discrimination." },
                { title: "BANKRUPTCY IN POLAND", description: "Learners build random forest and gradient boosting models to predict whether a company will go bankrupt. They navigate the Linux command line, address imbalanced data through resampling, and consider the impact of performance metrics precision and recall." },
                { title: "CUSTOMER SEGMENTATION IN THE US", description: "Learners build a k-means model to cluster US consumers into groups. They use principal component analysis (PCA) for data visualization, and they create an interactive dashboard with Plotly Dash." },
                { title: "A/B TESTING AT WORLDQUANT UNIVERSITY", description: "Learners conduct a chi-square test to determine if sending an email can increase program enrollment at WQU. They build custom Python classes to implement an ETL process, and they create an interactive data application following a three-tiered design pattern." },
                { title: "VOLATILITY FORECASTING IN INDIA", description: "Learners create a GARCH time series model to predict asset volatility. They acquire stock data through an API, clean and store it in a SQLite database, and build their own API to serve model predictions." }
            ],
            skills: ["API Design","Data Science","Data Visualization","Machine Learning","MongoDB","Python (Programming Language)","SQL","Statistics"]
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
            description: "Python project that uses YOLO and OpenCV to detect objects in an image.",
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