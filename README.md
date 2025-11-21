## Kasa - Front-End Redesign (OpenClassrooms P5 Project)

### Project Description

The objective of this project is the **complete refactoring of the front-end** for the Kasa web application, a housing rental platform. The original site, which is over 10 years old and coded in ASP.NET, must be migrated to a **modern and complete JavaScript stack**.

Due to delays in hiring for the new back-end (planned for NodeJS), the front-end application is developed independently to ensure high code quality and a structure that follows component logic.

### Tech Stack & Tools

-   **Front-End:** **React**
-   **Build Tool:** **Vite** (in compliance with Kasa's _coding guidelines_)
-   **Routing:** **React Router**
-   **Language:** JavaScript
-   **Design Source:** Responsive **Figma** interactive mockups
-   **Data:** **JSON file** containing the last 20 housing listings (mocked data).

### Key Features Implemented

The application respects the functional constraints and design prototypes, specifically:

| Component / Section      | Description of Functionality                                                                                                                                                                                                            |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Routes & Structure**   | Development of the entire application and the necessary **React Router** paths.                                                                                                                                                         |
| **Gallery (Carousel)**   | Display of photo scrolling with **looping navigation** (last image goes to first, and vice-versa). The Next/Previous buttons and numbering are hidden if there is only one image. The height is fixed, and images are centered/cropped. |
| **Collapse (Dropdowns)** | Components are **closed by default** upon page initialization. The user's click allows them to toggle the state (open or close).                                                                                                        |
| **Design**               | Strict integration of the **responsive Figma mockups**, using component logic and exporting all necessary assets (logos, icons).                                                                                                        |

### Installation and Quick Start

To clone and start the project locally, follow the steps below:

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/Bulmond/OpenClassroomsP5.git
    cd OpenClassroomsP5
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Launch the Application**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be accessible in your browser at the address indicated by Vite (usually `http://localhost:5173`).

### License

This project is licensed under [TO BE DEFINED].

---

_This project was completed as part of the Web Developer training program at OpenClassrooms._
