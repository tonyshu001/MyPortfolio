const projects = [
    {
        id: "fact-checking-system",
        title: "Fact-checking system",
        description:
            "This project developed an innovative automated system for fact-checking claims related to climate change."
            + "Utilizing a blend of advanced NLP techniques, the system efficiently processes vast amount of data"
            + " to verify the truthfulness of various statements.",
        getImageSrc: () => require("../data/images/fact_checking.png"),
        linkTo: "/projects/fact-checking-system",
        hasReport: true,
        hasCode: false,
        specification: `
        <h2>Introduction</h2>
        <p>Climate change is a major global concern, and the rapid spread of misinformation, especially through social media, complicates public understanding of this issue. This highlights the need for automated fact-checking systems that rely on Natural Language Processing (NLP) models. However, creating an accurate system involves challenges in information retrieval and claim validation. This report details a structured pipeline developed to address these challenges effectively.</p>
    
        <h2>Problem Statement</h2>
        <p>The challenge is to design a system capable of:</p>
        <ul>
          <li>Retrieving relevant evidence to a given claim from an extensive knowledge source (approx. 1.2 million).</li>
          <li>Classifying the validity of the claims into four categories: SUPPORTS, REFUTES, NOT_ENOUGH_INFO, and DISPUTED.</li>
        </ul>
    
        <h2>Main Challenge</h2>
        <p>The main challenge in building this fact-checking system is twofold: effectively retrieving relevant information from a vast database and accurately determining the reliability of a given claim. Achieving a balance between these two aspects, especially in the complex domain of climate science, is crucial for the system's success.</p>
    
        <h2>Research Background</h2>
        <p>Previous research in this field has seen the development of advanced fact-checking systems using various models and functions. However, some methods, like the BM25 ranking function, show limitations in understanding complex language contexts. This calls for more efficient models capable of handling extensive evidence collections without compromising accuracy.</p>
    
        <h2>Methodology</h2>
        <h3>Pipeline Design</h3>
        <p>To tackle this problem, a pipeline is designed to process claims about climate change by searching for relevant evidence in an extensive knowledge base and classifying the claim's status into categories like SUPPORTS, REFUTES, NOT_ENOUGH_INFO, and DISPUTED. The pipeline operates in three stages: initial evidence filtering, precise evidence filtering, and claim verification.</p>
        
        <h3>Stage One</h3>
        <p>Starts with a claim and a collection of evidence, aiming to filter out the most relevant pieces.</p>
        <ul>
          <li><strong>Technique Used:</strong> BM25+ Function</li>
          <li><strong>Purpose:</strong> To filter out the top 100 pieces of evidence from a larger collection, based on their similarity scores with the given claim.</li>
          <li><strong>Enhancement Strategy:</strong> Incorporation of Sentence Transformers with DistilBERT pre-trained weights for better context understanding and efficient processing. The model is fine-tuned with cosine similarity as the measure and cosine embedding loss for optimization, enhancing the precision of the retrieved evidence set.</li>
        </ul>
    
        <h3>Stage Two</h3>
        <p>Focuses on identifying the truly relevant evidence from the previously filtered set.</p>
        <ul>
          <li><strong>Techniques Used:</strong> T5 and RoBERTa Models</li>
          <li><strong>Purpose:</strong> To refine the evidence set by identifying truly relevant evidence pieces from the previously filtered collection.</li>
          <li><strong>Implementation:</strong> T5 is used for its sequence-to-sequence transformation capabilities, with input sequences combining claim and evidence and outputting relevancy judgment. RoBERTa, modified for better performance, is used for its straightforward preprocessing and binary output on relevancy, enhancing the precision of evidence selection.</li>
        </ul>
    
        <h3>Stage Three</h3>
        <p>Uses the refined evidence to categorize the initial claim into one of the predefined classes.</p>
        <ul>
          <li><strong>Techniques Used:</strong> T5 and RoBERTa Models</li>
          <li><strong>Purpose:</strong> To categorize the claim into one of the predefined classes (SUPPORTS, REFUTES, NOT_ENOUGH_INFO, DISPUTED) using the refined evidence.</li>
          <li><strong>Implementation:</strong> T5's sequence-to-sequence model formulates input sequences that include the claim and the refined evidence, outputting the classification label. RoBERTa uses a more straightforward input sequence, providing a range of outputs corresponding to the predefined categories.</li>
        </ul>
    
        <h3>Optimization and Tuning</h3>
        <p>Each model in the pipeline is fine-tuned with specific hyperparameters to optimize performance, focusing on improving accuracy and reducing overfitting. This includes adjustments in learning rates, batch sizes, and the number of training epochs, ensuring the models are well-calibrated for the tasks at hand.</p>

        <h2>Evaluation and Results</h2>
        <p>For evidence retrieval, the F1 score is used for evaluation as both precision and recall are vital. For claim verification, the accuracy score is utilized for evaluation as it is intuitive and interpretable.</P>
        <br>
        <p>The performance of the system is assessed at each stage, and <strong>achieved a remarkable 7th rank among over 400 participants, a testament to the top 2% placement </strong>. This performance underscores the robustness and efficiency of the pipeline design, which is tailored to enhance accuracy and reliability in fact-checking.</p>
    
        <h2>Conclusion and Future Work</h2>
        <p>The report concludes with the pipeline achieving commendable results in automated fact-checking for climate change claims. However, it notes potential over-tuning in the final evaluation. Future work will focus on exploring techniques to prevent overfitting and further refine the system's accuracy.</p>
      `,
      
    },
    {
        id:"e-ticket",
        title: "E-ticket",
        description:
            "This ASP.NET based web application revolutionizes the movie ticket purchasing experience by offering a user-friendly online platform.",
        getImageSrc: () => require("../data/images/e_ticket.png"),
        linkTo: "/projects/e-ticket",
        hasReport: false,
        hasCode: true,
        githubLink: "https://github.com/tonyshu001/eTickets",
        specification: `    
        <h2>Overview</h2>
        <p>This portfolio project showcases the development of a fully-functional e-commerce application using ASP.NET MVC (.NET 5). The project was part of an extensive course that covered the breadth of ASP.NET MVC application development, starting from an empty project in Visual Studio and building up to a comprehensive, commercial-grade web application.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>MVC Architecture: Employed the Model-View-Controller pattern to ensure separation of concerns, facilitating easy maintenance and scalability of the application.</li>
          <li>SQL Database Integration: Utilized SQL Server for data storage, leveraging Entity Framework for effective database interactions.</li>
          <li>Entity Framework Migrations: Implemented database schema updates and data manipulation (CRUD operations) using Entity Framework migrations.</li>
          <li>Service Layer: Developed services and generic repositories for data operations, enhancing code reusability and efficiency.</li>
          <li>Dynamic Content Rendering: Utilized ViewComponents for dynamic content rendering within the application.</li>
          <li>PayPal Integration: Integrated PayPal for processing online payments, enhancing the e-commerce functionality.</li>
          <li>Role-Based Features: Implemented role-based authorization and UI rendering to cater to different user levels.</li>
        </ul>
        
        <h2>Technologies and Tools</h2>
        <ul>
          <li>.NET 5 & ASP.NET MVC: For building the core application structure and logic.</li>
          <li>Entity Framework Core: ORM tool for database interactions.</li>
          <li>SQL Server: Database management system for storing application data.</li>
          <li>Visual Studio: Integrated development environment for writing and testing code.</li>
        </ul>
        
        <h2>Skills Demonstrated in the Project</h2>
        <h3>Proficiencies Developed</h3>
        <ul>
          <li>ASP.NET MVC Framework Mastery: Demonstrated thorough understanding and application of ASP.NET MVC's core components including Models, ViewModels, Views, Partial Views, and Controllers.</li>
          <li>Advanced CRUD Operations: Skilled in performing Create, Read, Update, and Delete operations using Entity Framework Core with SQL Server.</li>
          <li>RESTful Service Development: Developed proficiency in building RESTful services, applying principles of .NET.</li>
          <li>Authentication and Authorization Expertise: Gained substantial experience in implementing .NET Identity Framework for secure and role-based access control.</li>
          <li>Third-Party Integration: Successfully integrated PayPal for online payment processing, demonstrating the ability to incorporate external services into web applications.</li>
          <li>Cloud Deployment: Acquired hands-on experience in deploying applications and databases to cloud platforms, specifically Microsoft Azure.</li>
        </ul>
        
        <h3>Application of Skills</h3>
        <p>This project served as a practical application of the aforementioned skills, showcasing my ability to develop a feature-rich, scalable, and secure e-commerce web application using the ASP.NET MVC framework.</p>
        `,
    },
    {
        id:"password-manager",
        title: "Password manager with security and usability",
        description:
            "A password manager meticulously designed to balance stringent security with intuitive usability, ensuring safe and effortless password management.",
        getImageSrc: () => require("../data/images/password_manager.png"),
        linkTo: "/projects/password-manager",
        hasReport: true,
        hasCode: true,
        githubLink: "https://github.com/GG2T/PasswordManager",
        specification: `
        <h2>Overview</h2>
        <p>This project presents an innovative password manager designed to balance the crucial aspects of security and usability. It addresses the common trade-off between these two elements, proposing a solution that enhances password protection while maintaining user-friendliness.</p>
    
        <h2>Problem Statement</h2>
        <p>Effective password management is hindered by the trade-off between complexity for security and simplicity for memorability. Users often resort to weak passwords that are susceptible to attacks, compromising their online security. This project seeks to develop a password manager that harmonizes the need for robust security with user-friendly design, enabling strong password protection without sacrificing ease of use.</p>
    
        <h2>Technologies Used</h2>
        <ul>
            <li><strong>SHA-256 Hashing Function:</strong> For password generation and security.</li>
            <li><strong>Graphical User Interface (GUI):</strong> For user interaction and master code input.</li>
        </ul>
    
        <h2>Key Features</h2>
        <ol>
            <li>Multiple Master Codes: Incorporates a unique feature of allowing multiple graphical master codes, enhancing security by reducing the risk of total password compromise and easing memorability.</li>
            <li>Graphical Master Code Representation: Utilizes a graphical interface for master codes, improving user memorability compared to traditional textual passwords.</li>
            <li>Dynamic Password Generation: Employs SHA-256, a cryptographic hashing function, for generating strong and unique passwords for each user account.</li>
            <li>Secure Data Storage: Stores only essential parameters needed for password generation, ensuring confidentiality and recalculating passwords at runtime.</li>
            <li>Error Tolerance for Users: Implements an error tolerance mechanism that distinguishes between genuine user errors and unauthorized access attempts, enhancing user experience.</li>
        </ol>
    
        <h2>User Interface</h2>
        <p>The project includes a user-friendly interface for setting new categories and entering master codes using image tiles, providing an intuitive and interactive experience.
        It features a ‘Get Password’ interface that generates new passwords and displays account information post-authentication.</p>
    
        <h2>Workflow of the Advanced Password Manager</h2>
        <h3>Creating New Categories and Master Codes</h3>
        <p>The user initiates a new password category by selecting the "Set a new category" option within the user interface. They are prompted to assign a name for the category and choose an image to represent the master code. The system segments the chosen image into a grid, allowing the user to select specific segments as their graphical master code. These selections are then hashed and stored securely in the system’s data storage, thus completing the setup of a new category.</p>
    
        <h3>Master Code Verification Process</h3>
        <p>To authenticate and gain access to the stored passwords, the user must correctly identify and select the previously determined segments of their image-based master code. The system compares the hashed value of this attempted entry against the stored hash value. If a match is found, access is granted and the user proceeds to the next stage. Users are given three attempts to enter the correct master code. If unsuccessful, the category is locked to prevent unauthorized access. However, the system is designed with an error tolerance mechanism that tracks the user's last few incorrect attempts. If these patterns are repeated in future login attempts, suggesting a genuine user error, additional attempts may be allowed.</p>
    
        <h3>Password Generation</h3>
        <p>Upon successful master code verification, the password generation interface is presented. The system temporarily stores the master code in memory and prompts the user to input the URL and username associated with the account for which a password is needed. These inputs are concatenated and passed through the SHA-256 hashing function to generate a strong, unique password. The URL and username are then recorded in the data storage, but the password itself is not, ensuring that no sensitive information is stored that could be exposed in the event of a data breach.</p>
    
        <h3>Password Retrieval at Runtime</h3>
        <p>When a user needs to retrieve a password, the system computes it in real-time using the stored URL and username along with the master code provided during the login phase. This process ensures that passwords are never stored in plain text but are instead generated on-the-fly, providing an additional layer of security.</p>
    
        <h3>User Interface Interaction</h3>
        <p>The user interface is streamlined to support the workflow intuitively. It includes visual cues for category creation, master code setup, and password generation, ensuring a user-friendly experience. Figures 6, 7, 8, and 9 illustrate the sequence of user interactions and system processes that define the workflow of the password manager.</p>

        <h2>Evaluation and Results</h2>
        <p>The study by Florencio et al. provides an insightful analysis of two prevalent models of password attacks: online and offline. Online attacks are typically direct attempts to access accounts through the server's interface, where the server controls and logs each attempt. Offline attacks, on the other hand, involve attackers leveraging their own systems to decipher passwords without such immediate oversight. The research posits that the minimum threshold of attempts an effective password should withstand is 
        10<sup>6</sup> for online and 10<sup>14</sup> for offline intrusions.</p>
        <br>
        <p>Our evaluation, utilizing the zxcvbn algorithm, indicates that while the passwords generated by our system are robust enough to surpass the threshold for online attacks, they do not consistently meet the benchmark for resilience against offline attacks. This is evident in Table 3, which details the estimated number of attempts required to breach the generated passwords.</p>
        <br>
        <p>To address this shortfall and fortify passwords against offline attack scenarios, our study suggests the integration of a more advanced password generation mechanism. The incorporation of techniques such as salted hashes, where additional random data is used as part of the hashing process, and the iterative hashing of passwords, can significantly enhance password strength. By executing the hash function multiple times, the complexity and computational effort required to crack the password increases, thus elevating the security profile of the generated passwords.</p>
    
        <h2>Conclusions and Future Directions</h2>
        <p>The project exemplifies a balanced approach to password management, ensuring both security and usability. <p>
        <br>
        <p>Future enhancements include multi-platform support, cloud storage integration, advanced hashing techniques, and password recovery options.</p>
        `,
    },
    {
        id: "reversi",
        title: "AI agent for Reversi",
        description:
            "A Reversi AI agent project, ingeniously employing Monte Carlo Tree Search and Minimax.",
        getImageSrc: () => require("../data/images/reversi.png"),
        linkTo: "/projects/reversi",
    },
  ];

  export default projects;