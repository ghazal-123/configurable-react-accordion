# React Advanced Customizable Accordion

A highly flexible, advanced, and reusable Accordion component built with React and Vanilla CSS. This component is completely driven by Props, allowing for dynamic control over layout, styling, and behavior without relying on any heavy UI libraries.

##  Features
- Advanced Styling Control: Easily toggle between different design layouts (e.g., Separated or Connected).
- Multiple Views Option: Toggle the Allow Multiple Open feature to let users open multiple items simultaneously or restrict to one at a time.
- Icon Alignment: Flexible icon positioning support (Start or End).
- SEO Friendly: Configurable dynamic heading tags (e.g., H1, H2, H3) for semantic HTML.
- Pure CSS: Built entirely with standard CSS3, with absolutely zero dependency on Tailwind or other styling frameworks.

##  Technologies Used
- React.js
- JavaScript (ES6+)
- CSS3 (Vanilla CSS)

##  Installation & Setup

1. Clone the repository:
git clone https://github.com/ghazal-123
2. Navigate to the project directory:
cd configurable-react-accordion
3. Install the dependencies:
npm install
4. Start the development server:
npm start
##  Props Configuration

The component layout and behavior can be completely customized using the following properties:

| Prop | Type / Options | Description |
| :--- | :--- | :--- |
| **styling** | Separated \| Connected | Controls the visual structure and layout of the accordion items. |
| **iconPosition** | Start \| End | Dictates where the expand/collapse indicator icon is placed. |
| **headingLevel** | H1, H2, H3, H4... | Defines the semantic HTML heading element used for titles. |
| **allowMultiple** | Boolean | When true, multiple items can remain expanded at the same time. |

---
 *This project showcases how to build scalable, production-ready React UI components using core state management and clean prop-drilling patterns.*