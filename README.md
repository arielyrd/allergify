# Allergify
Food allergies can be a hidden danger in everyday meals, especially for those with specific dietary restrictions. Consuming packaged foods without knowing their allergen content may lead to severe health risks. That’s why understanding what we consume is essential for everyone’s safety and well-being. Allergify is here to help. Our application leverages AI and OCR technology to scan packaged food labels, making it easier to identify potential allergens and ensure safe consumption. With Allergify, we empower users to make informed decisions about their food choices and maintain a healthier lifestyle.

# Our Team
| Nama                          | Bangkit-ID    | Path                 | Kampus                                         |
|-------------------------------|---------------|----------------------|-----------------------------------------------|
| Geraldo Tan                   | M102B4KY1598  | Machine Learning     | Institut Bisnis dan Informatika Kwik Kian Gie |
| Nabilla Oktabania Pratiwi     | M002B4KX3191  | Machine Learning     | Institut Teknologi Bandung                    |
| Raja Fathimah Hervina         | M002B4KX3661  | Machine Learning     | Institut Teknologi Bandung                    |
| Jimmy Putra Alam              | A102B4KY2074  | Mobile Development   | Institut Bisnis dan Informatika Kwik Kian Gie |
| Ariel Yordan Tjahyadinata     | C102B4KY0634  | Cloud Computing      | Institut Bisnis dan Informatika Kwik Kian Gie |
| Celine Visakha Anwar          | C102B4KX0911  | Cloud Computing      | Institut Bisnis dan Informatika Kwik Kian Gie |

# Mobile Development
* Features

* Register and login for authentication user.
* Capture images directly using the camera within the app to detect food allergens.
* Upload images directly from the gallery within the app to detect food allergens.
* Send images to the cloud for predictions: after preparing the image, users can click the process button to send it and detect allergens.


* Dependencies used (Android Studio):
* Camera x for implementation decting image
* Hilt and ksp for dependency Injection
* Retrofit for api implementation
* Room database for local storage
* Google Material 3 Theme for the layout
* Navigation Fragment for navigating layout



# Machine Learning
Here is the link:
Link to colab: https://colab.research.google.com/drive/1oef41zoXaLNF7r5irPaDN5M6SLfuDCGa#scrollTo=d1sGk1ldtEfZ (First Model) https://colab.research.google.com/drive/1oqaSBtOGJn7gIu3nXRru7GvwrCevYIaQ (Second Model)

# Cloud Computing
**Backend Technologies**

* [Node JS](https://nodejs.org/en/) is a JavaScript runtime environment that allows developers to execute JavaScript code outside the browser. In Allergify, Node.js serves as the core of the backend, handling server-side processes such as request processing, data management, and communication with cloud services.

* [Framework Express JS](https://expressjs.com/)  is a minimal and flexible web framework for Node.js used to build APIs and web applications quickly. In Allergify, Express.js simplifies the development of API routes, middleware management, and integration with third-party services.


* [Google Cloud Platform (GCP](https://cloud.google.com/gcp/?hl=en) is a suite of cloud computing services offered by Google, providing secure, scalable, and reliable infrastructure. GCP enables Allergify to leverage advanced cloud technologies for efficient backend operations. The specific GCP services used include:
 - App Engine: Used to deploy and scale the Allergify application without manually managing servers, ensuring seamless scalability.
 - Cloud Run: Used to run serverless containers, enabling high-performance and cost-effective execution of backend services.
 - Firestore: A NoSQL database used to store real-time data with a flexible schema, supporting user data and allergen prediction results.
 - Cloud Storage: Used to store image files uploaded by users before they are processed by the AI service to detect allergens.
