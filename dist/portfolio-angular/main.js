"use strict";
(self["webpackChunkportfolio_angular"] = self["webpackChunkportfolio_angular"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





class AppComponent {
  constructor() {
    this.title = 'Subodh Bhandari - Portfolio';
  }
  ngOnInit() {
    // Initialize AOS (Animate On Scroll)
    if (typeof window !== 'undefined') {
      const AOS = window.AOS;
      if (AOS) {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true
        });
      }
    }
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
      styles: ["main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 200px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLCtCQUFBO0FBQU4iLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBtYWluIHtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);



const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.provideAnimations)()]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ 2905);
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experience/experience.component */ 2263);
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/skills/skills.component */ 1199);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/projects.component */ 3607);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ 1777);






const routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'experience',
  component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent
}, {
  path: 'skills',
  component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillsComponent
}, {
  path: 'projects',
  component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent
}, {
  path: 'contact',
  component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 2905:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AboutComponent {
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 65,
      vars: 0,
      consts: [[1, "about"], [1, "container"], ["data-aos", "fade-up", 1, "section-title"], [1, "about-content"], ["data-aos", "fade-right", 1, "about-text"], [1, "key-highlights"], [1, "highlight-item"], [1, "fas", "fa-check-circle"], ["data-aos", "fade-left", 1, "about-image"], [1, "image-container"], ["src", "assets/images/profile.jpg", "alt", "Subodh Bhandari"], [1, "experience-badge"], [1, "years"], [1, "text"], ["data-aos", "fade-up", 1, "education-section"], [1, "education-card"], [1, "education-header"], [1, "education-icon"], [1, "fas", "fa-graduation-cap"], [1, "education-info"], [1, "institution"], [1, "period"], [1, "education-details"], ["data-aos", "fade-up", 1, "certificates-section"], [1, "certificate-card"], [1, "certificate-icon"], [1, "fas", "fa-certificate"], [1, "certificate-content"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Professional Summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Software Developer with over 2 years of experience in fintech. Proficient in various programming languages and frameworks, with strong troubleshooting and problem-solving abilities. Capable of working independently or as part of a team to meet strict deadlines. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " I specialize in building scalable, user-friendly applications using modern technologies like Angular, TypeScript, and Java Spring Boot. My passion lies in creating innovative solutions that drive business growth and improve user experiences. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5)(13, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Full Stack Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Fintech Expertise");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Problem Solving");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Team Collaboration");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8)(30, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11)(33, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Years");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14)(38, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15)(41, "div", 16)(42, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19)(45, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "BSc.CSIT (Bachelor of Science in Computer Science and Information Technology)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Academia International College, Gwarko, Lalitpur");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "2016 - 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22)(52, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Main coursework: Operating System, Agile Development, Web API Development, Android Application Development, C Programming, .NET, Java Programming, Algorithms and Data Structures ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23)(55, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Certificates");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24)(58, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27)(61, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "IBM Academic Certificate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Successfully passed the IBM Academic Certificate exam and was awarded the SQL and Relational Databases on 21st June 2023. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: [".about[_ngcontent-%COMP%] {\n  padding: 120px 0 80px;\n  background: #f9f9f9;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  margin-bottom: 4rem;\n  align-items: center;\n}\n\n.about-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--secondary-color);\n  margin-bottom: 1.5rem;\n}\n\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: var(--text-color);\n  margin-bottom: 1.5rem;\n}\n\n.key-highlights[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.highlight-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n.highlight-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1.2rem;\n}\n\n.highlight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--secondary-color);\n}\n\n.about-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n\n.experience-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 15px;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n\n.experience-badge[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.experience-badge[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.9;\n}\n\n.education-section[_ngcontent-%COMP%], .certificates-section[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n\n.education-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .certificates-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--secondary-color);\n  margin-bottom: 2rem;\n  text-align: center;\n}\n\n.education-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  padding: 2rem;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n\n.education-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.education-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.education-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: white;\n}\n\n.education-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--secondary-color);\n  margin-bottom: 0.5rem;\n}\n\n.education-info[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n\n.education-info[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-size: 0.9rem;\n}\n\n.education-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  line-height: 1.6;\n}\n\n.certificate-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  padding: 2rem;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.certificate-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: var(--gradient-secondary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.certificate-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: white;\n}\n\n.certificate-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--secondary-color);\n  margin-bottom: 0.5rem;\n}\n\n.certificate-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  line-height: 1.6;\n}\n\n\n\n@media (max-width: 992px) {\n  .about-content[_ngcontent-%COMP%] {\n    gap: 3rem;\n  }\n  \n  .about-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  \n  .about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n  \n  .education-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .certificates-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .about[_ngcontent-%COMP%] {\n    padding: 80px 0 60px;\n  }\n  \n  .about-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    text-align: center;\n  }\n  \n  .about-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  \n  .about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  \n  .key-highlights[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n  }\n  \n  .highlight-item[_ngcontent-%COMP%] {\n    justify-content: center;\n    gap: 0.8rem;\n  }\n  \n  .highlight-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .highlight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  \n  .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n  }\n  \n  .experience-badge[_ngcontent-%COMP%] {\n    padding: 12px;\n    bottom: 15px;\n    right: 15px;\n  }\n  \n  .experience-badge[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  \n  .experience-badge[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  \n  .education-section[_ngcontent-%COMP%], .certificates-section[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n  }\n  \n  .education-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .certificates-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n    margin-bottom: 1.5rem;\n  }\n  \n  .education-card[_ngcontent-%COMP%]   .education-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  \n  .education-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  \n  .education-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  \n  .education-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .certificate-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  \n  .certificate-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  \n  .certificate-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  \n  .certificate-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n\n@media (max-width: 576px) {\n  .about[_ngcontent-%COMP%] {\n    padding: 60px 0 40px;\n  }\n  \n  .about-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  \n  .about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .highlight-item[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  \n  .highlight-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .highlight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 220px;\n    height: 220px;\n  }\n  \n  .experience-badge[_ngcontent-%COMP%] {\n    padding: 10px;\n    bottom: 10px;\n    right: 10px;\n  }\n  \n  .experience-badge[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .experience-badge[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  \n  .education-section[_ngcontent-%COMP%], .certificates-section[_ngcontent-%COMP%] {\n    margin-top: 2.5rem;\n  }\n  \n  .education-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .certificates-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    margin-bottom: 1.2rem;\n  }\n  \n  .education-card[_ngcontent-%COMP%], .certificate-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    border-radius: 10px;\n  }\n  \n  .education-icon[_ngcontent-%COMP%], .certificate-icon[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n  }\n  \n  .education-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .certificate-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  \n  .education-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .certificate-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .education-info[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .education-info[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  \n  .education-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .certificate-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .about[_ngcontent-%COMP%] {\n    padding: 50px 0 30px;\n  }\n  \n  .about-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  \n  .about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  \n  .highlight-item[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  \n  .highlight-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .highlight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  \n  .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  \n  .experience-badge[_ngcontent-%COMP%] {\n    padding: 8px;\n    bottom: 8px;\n    right: 8px;\n  }\n  \n  .experience-badge[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .experience-badge[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n  \n  .education-section[_ngcontent-%COMP%], .certificates-section[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  \n  .education-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .certificates-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    margin-bottom: 1rem;\n  }\n  \n  .education-card[_ngcontent-%COMP%], .certificate-card[_ngcontent-%COMP%] {\n    padding: 1.2rem;\n  }\n  \n  .education-icon[_ngcontent-%COMP%], .certificate-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  \n  .education-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .certificate-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .education-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .certificate-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  \n  .education-info[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  \n  .education-info[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  \n  .education-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .certificate-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLGtCQUFrQjtFQUNwQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcclxuICBwYWRkaW5nOiAxMjBweCAwIDgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogNHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dC10ZXh0IGgzIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uYWJvdXQtdGV4dCBwIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS44O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5rZXktaGlnaGxpZ2h0cyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmhpZ2hsaWdodC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5oaWdobGlnaHQtaXRlbSBpIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5oaWdobGlnaHQtaXRlbSBzcGFuIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4uYWJvdXQtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uZXhwZXJpZW5jZS1iYWRnZSAueWVhcnMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWJhZGdlIC50ZXh0IHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5lZHVjYXRpb24tc2VjdGlvbixcclxuLmNlcnRpZmljYXRlcy1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG59XHJcblxyXG4uZWR1Y2F0aW9uLXNlY3Rpb24gaDMsXHJcbi5jZXJ0aWZpY2F0ZXMtc2VjdGlvbiBoMyB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZWR1Y2F0aW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5lZHVjYXRpb24taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uZWR1Y2F0aW9uLWljb24ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZWR1Y2F0aW9uLWljb24gaSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZWR1Y2F0aW9uLWluZm8gaDQge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmVkdWNhdGlvbi1pbmZvIC5pbnN0aXR1dGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxufVxyXG5cclxuLmVkdWNhdGlvbi1pbmZvIC5wZXJpb2Qge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmVkdWNhdGlvbi1kZXRhaWxzIHAge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uY2VydGlmaWNhdGUtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jZXJ0aWZpY2F0ZS1pY29uIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtc2Vjb25kYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2VydGlmaWNhdGUtaWNvbiBpIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jZXJ0aWZpY2F0ZS1jb250ZW50IGg0IHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jZXJ0aWZpY2F0ZS1jb250ZW50IHAge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4vKiBFbmhhbmNlZCBNb2JpbGUgUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmFib3V0LWNvbnRlbnQge1xyXG4gICAgZ2FwOiAzcmVtO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQtdGV4dCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmFib3V0LXRleHQgcCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24tc2VjdGlvbiBoMyxcclxuICAuY2VydGlmaWNhdGVzLXNlY3Rpb24gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYWJvdXQge1xyXG4gICAgcGFkZGluZzogODBweCAwIDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hYm91dC1jb250ZW50IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQtdGV4dCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmFib3V0LXRleHQgcCB7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5rZXktaGlnaGxpZ2h0cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWdobGlnaHQtaXRlbSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMC44cmVtO1xyXG4gIH1cclxuICBcclxuICAuaGlnaGxpZ2h0LWl0ZW0gaSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmhpZ2hsaWdodC1pdGVtIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhwZXJpZW5jZS1iYWRnZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBlcmllbmNlLWJhZGdlIC55ZWFycyB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLmV4cGVyaWVuY2UtYmFkZ2UgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24tc2VjdGlvbixcclxuICAuY2VydGlmaWNhdGVzLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLmVkdWNhdGlvbi1zZWN0aW9uIGgzLFxyXG4gIC5jZXJ0aWZpY2F0ZXMtc2VjdGlvbiBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmVkdWNhdGlvbi1jYXJkIC5lZHVjYXRpb24taGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmVkdWNhdGlvbi1pY29uIGkge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24taW5mbyBoNCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNlcnRpZmljYXRlLWNhcmQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNlcnRpZmljYXRlLWljb24ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZXJ0aWZpY2F0ZS1pY29uIGkge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jZXJ0aWZpY2F0ZS1jb250ZW50IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmFib3V0IHtcclxuICAgIHBhZGRpbmc6IDYwcHggMCA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQtdGV4dCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmFib3V0LXRleHQgcCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmhpZ2hsaWdodC1pdGVtIHtcclxuICAgIGdhcDogMC42cmVtO1xyXG4gIH1cclxuICBcclxuICAuaGlnaGxpZ2h0LWl0ZW0gaSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWdobGlnaHQtaXRlbSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhwZXJpZW5jZS1iYWRnZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBlcmllbmNlLWJhZGdlIC55ZWFycyB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmV4cGVyaWVuY2UtYmFkZ2UgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24tc2VjdGlvbixcclxuICAuY2VydGlmaWNhdGVzLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLXNlY3Rpb24gaDMsXHJcbiAgLmNlcnRpZmljYXRlcy1zZWN0aW9uIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLWNhcmQsXHJcbiAgLmNlcnRpZmljYXRlLWNhcmQge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmVkdWNhdGlvbi1pY29uLFxyXG4gIC5jZXJ0aWZpY2F0ZS1pY29uIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLWljb24gaSxcclxuICAuY2VydGlmaWNhdGUtaWNvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLWluZm8gaDQsXHJcbiAgLmNlcnRpZmljYXRlLWNvbnRlbnQgaDQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLWluZm8gLmluc3RpdHV0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLWluZm8gLnBlcmlvZCB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmVkdWNhdGlvbi1kZXRhaWxzIHAsXHJcbiAgLmNlcnRpZmljYXRlLWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5hYm91dCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDAgMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFib3V0LXRleHQgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5hYm91dC10ZXh0IHAge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIH1cclxuICBcclxuICAuaGlnaGxpZ2h0LWl0ZW0ge1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWdobGlnaHQtaXRlbSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAuaGlnaGxpZ2h0LWl0ZW0gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBlcmllbmNlLWJhZGdlIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvdHRvbTogOHB4O1xyXG4gICAgcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4cGVyaWVuY2UtYmFkZ2UgLnllYXJzIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmV4cGVyaWVuY2UtYmFkZ2UgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjU1cmVtO1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLXNlY3Rpb24sXHJcbiAgLmNlcnRpZmljYXRlcy1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24tc2VjdGlvbiBoMyxcclxuICAuY2VydGlmaWNhdGVzLXNlY3Rpb24gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLWNhcmQsXHJcbiAgLmNlcnRpZmljYXRlLWNhcmQge1xyXG4gICAgcGFkZGluZzogMS4ycmVtO1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLWljb24sXHJcbiAgLmNlcnRpZmljYXRlLWljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24taWNvbiBpLFxyXG4gIC5jZXJ0aWZpY2F0ZS1pY29uIGkge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24taW5mbyBoNCxcclxuICAuY2VydGlmaWNhdGUtY29udGVudCBoNCB7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24taW5mbyAuaW5zdGl0dXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIH1cclxuICBcclxuICAuZWR1Y2F0aW9uLWluZm8gLnBlcmlvZCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5lZHVjYXRpb24tZGV0YWlscyBwLFxyXG4gIC5jZXJ0aWZpY2F0ZS1jb250ZW50IHAge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1777:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/email.service */ 1334);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/notification.service */ 7473);







function ContactComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("name"), " ");
  }
}
function ContactComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("email"), " ");
  }
}
function ContactComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("subject"), " ");
  }
}
function ContactComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("message"), " ");
  }
}
function ContactComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Send Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Sending... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ContactComponent {
  constructor(fb, emailService, notificationService) {
    this.fb = fb;
    this.emailService = emailService;
    this.notificationService = notificationService;
    this.isSubmitting = false;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.contactForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(1000)]]
    });
  }
  onSubmit() {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched();
      this.notificationService.showError('Please fill in all required fields correctly.', 'Validation Error');
      return;
    }
    this.isSubmitting = true;
    const formData = this.contactForm.value;
    // Additional email validation
    if (!this.emailService.validateEmail(formData.email)) {
      this.notificationService.showError('Please enter a valid email address.', 'Invalid Email');
      this.isSubmitting = false;
      return;
    }
    // Check if EmailJS is available
    if (!this.emailService.isEmailJSAvailable()) {
      this.notificationService.showWarning('Email service not available. Please contact me directly via email.', 'Service Unavailable');
      this.isSubmitting = false;
      return;
    }
    // Send email using the service
    this.emailService.sendEmail(formData).subscribe({
      next: response => {
        this.notificationService.showSuccess('Thank you! Your message has been sent successfully.', 'Success!');
        this.resetForm();
      },
      error: error => {
        console.error('Email sending error:', error);
        this.notificationService.showError(error.message || 'Failed to send email. Please try again or contact me directly.', 'Error');
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
  resetForm() {
    this.contactForm.reset();
    this.contactForm.markAsUntouched();
  }
  markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }
  // Helper methods for template
  getFieldError(fieldName) {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldLabel(fieldName)} must be at least ${requiredLength} characters`;
      }
      if (field.errors['maxlength']) {
        const requiredLength = field.errors['maxlength'].requiredLength;
        return `${this.getFieldLabel(fieldName)} must not exceed ${requiredLength} characters`;
      }
    }
    return '';
  }
  getFieldLabel(fieldName) {
    const labels = {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message'
    };
    return labels[fieldName] || fieldName;
  }
  isFieldInvalid(fieldName) {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field.touched);
  }
  isFieldValid(fieldName) {
    const field = this.contactForm.get(fieldName);
    return !!(field?.valid && field.touched);
  }
  static {
    this.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 63,
      vars: 24,
      consts: [[1, "contact"], [1, "container"], ["data-aos", "fade-up", 1, "section-title"], [1, "contact-content"], ["data-aos", "fade-right", 1, "contact-info"], [1, "contact-items"], [1, "contact-item"], [1, "contact-icon"], [1, "fas", "fa-map-marker-alt"], [1, "contact-details"], [1, "fas", "fa-envelope"], ["href", "mailto:subodhbhandari4@gmail.com"], [1, "fas", "fa-globe"], [1, "social-links"], ["href", "https://linkedin.com/in/subodh-bhandari/", "target", "_blank"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/Subodh2055", "target", "_blank"], [1, "fab", "fa-github"], ["data-aos", "fade-left", 1, "contact-form-container"], [1, "contact-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter your name", 1, "form-control"], ["class", "error-message", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control"], ["for", "subject"], ["type", "text", "id", "subject", "formControlName", "subject", "placeholder", "Enter subject (optional)", 1, "form-control"], ["for", "message"], ["id", "message", "formControlName", "message", "rows", "5", "placeholder", "Enter your message", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "error-message"], [1, "fas", "fa-paper-plane"], [1, "fas", "fa-spinner", "fa-spin"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Get In Touch");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Let's Connect");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "I'm always interested in new opportunities and exciting projects. Feel free to reach out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "div", 6)(12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Location");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Tikathali, Lalitpur, Nepal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6)(20, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9)(23, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "subodhbhandari4@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 6)(28, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9)(31, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Social");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 13)(34, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18)(39, "form", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_39_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 20)(41, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Name *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ContactComponent_span_44_Template, 2, 1, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 20)(46, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Email *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ContactComponent_span_49_Template, 2, 1, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 20)(51, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Subject");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ContactComponent_span_54_Template, 2, 1, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 20)(56, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Message *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "textarea", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, ContactComponent_span_59_Template, 2, 1, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, ContactComponent_span_61_Template, 3, 0, "span", 31)(62, ContactComponent_span_62_Template, 3, 0, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.isFieldInvalid("name"))("success", ctx.isFieldValid("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getFieldError("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.isFieldInvalid("email"))("success", ctx.isFieldValid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getFieldError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.isFieldInvalid("subject"))("success", ctx.isFieldValid("subject"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getFieldError("subject"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.isFieldInvalid("message"))("success", ctx.isFieldValid("message"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getFieldError("message"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isSubmitting || ctx.contactForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: [".contact[_ngcontent-%COMP%] {\n  padding: 120px 0 80px;\n  background: #f9f9f9;\n}\n\n.contact-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n}\n\n.contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--secondary-color);\n  margin-bottom: 1rem;\n}\n\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-color);\n  line-height: 1.6;\n  margin-bottom: 2rem;\n}\n\n.contact-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.2rem;\n  padding: 0.5rem 0;\n}\n\n.contact-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-right: 0.5rem;\n}\n\n.contact-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: white;\n}\n\n.contact-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--secondary-color);\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n}\n\n.contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  text-decoration: none;\n  line-height: 1.5;\n  margin: 0;\n  word-break: break-word;\n}\n\n.contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover, .contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: var(--gradient-accent);\n  border-radius: 50%;\n  color: white;\n  transition: all 0.3s ease;\n}\n\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.contact-form-container[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: var(--secondary-color);\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 15px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  background: white;\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-control.error[_ngcontent-%COMP%] {\n  border-color: #ff5f6d;\n  box-shadow: 0 0 0 3px rgba(255, 95, 109, 0.1);\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-control.success[_ngcontent-%COMP%] {\n  border-color: #00b09b;\n  box-shadow: 0 0 0 3px rgba(0, 176, 155, 0.1);\n}\n\n.contact-form[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n\n.contact-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: block;\n  color: #ff5f6d;\n  font-size: 0.85rem;\n  margin-top: 0.5rem;\n  font-weight: 500;\n}\n\n.contact-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 30px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.contact-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n\n.contact-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.contact-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 10000;\n}\n\n.toast[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  margin-bottom: 10px;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n}\n\n.toast-success[_ngcontent-%COMP%] {\n  border-left: 4px solid #00b09b;\n}\n\n.toast-error[_ngcontent-%COMP%] {\n  border-left: 4px solid #ff5f6d;\n}\n\n.toast-warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #ffc107;\n}\n\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_slideOutRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n\n@media (max-width: 992px) {\n  .contact-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    padding: 80px 0 60px;\n  }\n  \n  .contact-content[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n  \n  .contact-form-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  \n  .contact-items[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n  \n  .contact-icon[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n  }\n  \n  .contact-details[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  \n  .contact-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .social-links[_ngcontent-%COMP%] {\n    gap: 0.8rem;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 12px 25px;\n  }\n}\n\n@media (max-width: 576px) {\n  .contact[_ngcontent-%COMP%] {\n    padding: 60px 0 40px;\n  }\n  \n  .contact-form-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .contact-items[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%] {\n    gap: 0.8rem;\n  }\n  \n  .contact-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  \n  .contact-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .contact-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  \n  .contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  \n  .social-links[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  \n  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n  \n  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    font-size: 0.9rem;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n    min-height: 100px;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 0.9rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .contact[_ngcontent-%COMP%] {\n    padding: 50px 0 30px;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  \n  .contact-items[_ngcontent-%COMP%] {\n    gap: 0.8rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  \n  .contact-icon[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n  \n  .contact-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .contact-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  \n  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    font-size: 0.85rem;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.85rem;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLE9BQU87RUFDVDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qge1xyXG4gIHBhZGRpbmc6IDEyMHB4IDAgODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uY29udGFjdC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDRyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8gaDMge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvIHAge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWl0ZW1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMS4ycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG59XHJcblxyXG4uY29udGFjdC1pY29uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtaWNvbiBpIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250YWN0LWRldGFpbHMgaDQge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uY29udGFjdC1kZXRhaWxzIHAsIFxyXG4uY29udGFjdC1kZXRhaWxzIGEge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW46IDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmNvbnRhY3QtZGV0YWlscyBwOmhvdmVyLFxyXG4uY29udGFjdC1kZXRhaWxzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLnNvY2lhbC1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zb2NpYWwtbGlua3MgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1hY2NlbnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnNvY2lhbC1saW5rcyBhOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5zb2NpYWwtbGlua3MgYSBpIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZTk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIC5mb3JtLWNvbnRyb2wuZXJyb3Ige1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmNWY2ZDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDk1LCAxMDksIDAuMSk7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gLmZvcm0tY29udHJvbC5zdWNjZXNzIHtcclxuICBib3JkZXItY29sb3I6ICMwMGIwOWI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTc2LCAxNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIC5lcnJvci1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2ZmNWY2ZDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSAuYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIC5idG46ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSAuYnRuIGkge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLyogVG9hc3QgTm90aWZpY2F0aW9uIFN0eWxlcyAqL1xyXG4udG9hc3QtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcblxyXG4udG9hc3Qge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IHNsaWRlSW5SaWdodCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4udG9hc3Qtc3VjY2VzcyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDBiMDliO1xyXG59XHJcblxyXG4udG9hc3QtZXJyb3Ige1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmNWY2ZDtcclxufVxyXG5cclxuLnRvYXN0LXdhcm5pbmcge1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmYzEwNztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNvbnRhY3QtY29udGVudCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaW5mbyBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaW5mbyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWN0IHtcclxuICAgIHBhZGRpbmc6IDgwcHggMCA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1jb250ZW50IHtcclxuICAgIGdhcDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pbmZvIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pbmZvIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pdGVtcyB7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaXRlbSB7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWl0ZW06aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pY29uIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1kZXRhaWxzIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWRldGFpbHMgaDQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1kZXRhaWxzIHAsXHJcbiAgLmNvbnRhY3QtZGV0YWlscyBhIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsLWxpbmtzIHtcclxuICAgIGdhcDogMC44cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1mb3JtIC5idG4ge1xyXG4gICAgcGFkZGluZzogMTJweCAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNvbnRhY3Qge1xyXG4gICAgcGFkZGluZzogNjBweCAwIDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWZvcm0tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWluZm8gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWluZm8gcCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaXRlbXMge1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pdGVtIHtcclxuICAgIGdhcDogMC44cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pY29uIGkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1kZXRhaWxzIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZGV0YWlscyBwLFxyXG4gIC5jb250YWN0LWRldGFpbHMgYSB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2NpYWwtbGlua3Mge1xyXG4gICAgZ2FwOiAwLjZyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2NpYWwtbGlua3MgYSB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbC1saW5rcyBhIGkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWZvcm0gLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb250YWN0IHtcclxuICAgIHBhZGRpbmc6IDUwcHggMCAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pbmZvIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pbmZvIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pdGVtcyB7XHJcbiAgICBnYXA6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaXRlbSB7XHJcbiAgICBnYXA6IDAuNnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaWNvbiB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaWNvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1kZXRhaWxzIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsLWxpbmtzIGEge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2NpYWwtbGlua3MgYSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZm9ybSAuYnRuIHtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2263:
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function ExperienceComponent_div_5_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
  }
}
function ExperienceComponent_div_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tech_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r2);
  }
}
function ExperienceComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8)(5, "div", 9)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExperienceComponent_div_5_li_13_Template, 2, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExperienceComponent_div_5_span_15_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const exp_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos", i_r4 % 2 === 0 ? "fade-right" : "fade-left")("data-aos-delay", i_r4 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](exp_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r3.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r3.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r3.technologies);
  }
}
class ExperienceComponent {
  constructor() {
    this.experiences = [{
      title: 'Software Developer',
      company: 'SB Solutions Pvt. Ltd.',
      period: 'March 2022 - Present',
      description: ['Full Stack Developer focusing on fintech, working on front-end development to deliver high-quality, industry-standard applications.', 'Developed a fully automated Loan Management System (LMS) using Angular for front-end and Java Spring Boot Framework for back-end.', 'Implemented Various front-end components using TypeScript, HTML, CSS, and Bootstrap.', 'Consumed RESTful APIs using Angular to integrate with back-end services developed in Java Spring Boot.', 'Utilized RxJS to manage asynchronous data streams and state management.'],
      technologies: ['Angular', 'TypeScript', 'Java Spring Boot', 'REST APIs', 'RxJS', 'Git'],
      icon: 'fas fa-code'
    }, {
      title: 'Software Developer (Work Shop)',
      company: 'Academia International College Innovation',
      period: 'Jan 2021 – Nov 2021',
      description: ['Gained experience in front-end development using the Angular framework and back-end development with Java Spring Boot.', 'Integrated MS SQL database with back-end services for efficient data storage and retrieval.', 'Utilized Postman for API testing and debugging and JIRA for project management.', 'Enhanced application performance by optimizing code and database queries.'],
      technologies: ['Angular', 'Java', 'MS SQL', 'Postman', 'JIRA'],
      icon: 'fas fa-laptop-code'
    }];
  }
  static {
    this.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 1,
      consts: [[1, "experience"], [1, "container"], ["data-aos", "fade-up", 1, "section-title"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-marker"], [1, "marker-icon"], [1, "timeline-content"], [1, "timeline-header"], [1, "period"], [1, "timeline-description"], [4, "ngFor", "ngForOf"], [1, "technologies"], ["class", "tech-tag", 4, "ngFor", "ngForOf"], [1, "tech-tag"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Professional Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExperienceComponent_div_5_Template, 16, 9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".experience[_ngcontent-%COMP%] {\n  padding: 120px 0 80px;\n  background: white;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.timeline[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: var(--gradient-primary);\n  transform: translateX(-50%);\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 3rem;\n  display: flex;\n  align-items: center;\n}\n\n.timeline-item[_ngcontent-%COMP%]:nth-child(odd) {\n  flex-direction: row;\n}\n\n.timeline-item[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  text-align: left;\n}\n\n.timeline-item[_ngcontent-%COMP%]:nth-child(even) {\n  flex-direction: row-reverse;\n}\n\n.timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n  text-align: right;\n}\n\n.timeline-marker[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.timeline-marker[_ngcontent-%COMP%]   .marker-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  border: 4px solid white;\n}\n\n.timeline-marker[_ngcontent-%COMP%]   .marker-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: white;\n}\n\n.timeline-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  flex: 1;\n  position: relative;\n}\n\n.timeline-content[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  transform: translateY(-50%);\n}\n\n.timeline-item[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%]::before {\n  left: -10px;\n  border-width: 10px 10px 10px 0;\n  border-color: transparent white transparent transparent;\n}\n\n.timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%]::before {\n  right: -10px;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent white;\n}\n\n.timeline-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.timeline-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--secondary-color);\n  margin-bottom: 0.5rem;\n}\n\n.timeline-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary-color);\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n.timeline-header[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--gradient-secondary);\n  color: white;\n  padding: 5px 15px;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.timeline-description[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.timeline-description[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  line-height: 1.6;\n  color: var(--text-color);\n  position: relative;\n  padding-left: 1.5rem;\n}\n\n.timeline-description[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: '\u2022';\n  position: absolute;\n  left: 0;\n  color: var(--primary-color);\n  font-weight: bold;\n}\n\n.technologies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.technologies[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%] {\n  background: var(--gradient-accent);\n  color: white;\n  padding: 5px 12px;\n  border-radius: 15px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n\n.technologies[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 768px) {\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 30px;\n  }\n  \n  .timeline-item[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n  }\n  \n  .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    margin-left: 2rem !important;\n    margin-right: 0 !important;\n    text-align: left !important;\n  }\n  \n  .timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%]::before {\n    left: -10px;\n    right: auto;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent white transparent transparent;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxNQUFNO0VBQ04sU0FBUztFQUNULFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDBDQUEwQztFQUMxQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLDhCQUE4QjtJQUM5Qix1REFBdUQ7RUFDekQ7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlcmllbmNlIHtcclxuICBwYWRkaW5nOiAxMjBweCAwIDgwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi50aW1lbGluZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGltZWxpbmUtbWFya2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnRpbWVsaW5lLW1hcmtlciAubWFya2VyLWljb24ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnRpbWVsaW5lLW1hcmtlciAubWFya2VyLWljb24gaSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGltZWxpbmUtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBmbGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKG9kZCkgLnRpbWVsaW5lLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgbGVmdDogLTEwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudDo6YmVmb3JlIHtcclxuICByaWdodDogLTEwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XHJcbn1cclxuXHJcbi50aW1lbGluZS1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWhlYWRlciBoMyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4udGltZWxpbmUtaGVhZGVyIGg0IHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50aW1lbGluZS1oZWFkZXIgLnBlcmlvZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi50aW1lbGluZS1kZXNjcmlwdGlvbiBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbn1cclxuXHJcbi50aW1lbGluZS1kZXNjcmlwdGlvbiBsaTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnw6LCgMKiJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZWNobm9sb2dpZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4udGVjaG5vbG9naWVzIC50ZWNoLXRhZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYWNjZW50KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi50ZWNobm9sb2dpZXMgLnRlY2gtdGFnOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50aW1lbGluZTo6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1pdGVtIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWl0ZW0gLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 48,
      vars: 0,
      consts: [[1, "container"], [1, "footer-content"], [1, "footer-info"], [1, "social-links"], ["href", "mailto:subodhbhandari4@gmail.com", "target", "_blank", 1, "social-link"], [1, "fas", "fa-envelope"], ["href", "https://linkedin.com/in/subodh-bhandari/", "target", "_blank", 1, "social-link"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/Subodh2055", "target", "_blank", 1, "social-link"], [1, "fab", "fa-github"], [1, "footer-links"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/experience"], ["routerLink", "/projects"], ["routerLink", "/contact"], [1, "footer-contact"], [1, "contact-item"], [1, "fas", "fa-map-marker-alt"], ["href", "mailto:subodhbhandari4@gmail.com"], [1, "footer-bottom"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subodh Bhandari");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Building innovative fintech solutions with passion and expertise.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quick Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul")(19, "li")(20, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16)(35, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tikathali, Lalitpur, Nepal");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "subodhbhandari4@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20)(46, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A9 2025 Subodh Bhandari. All rights reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["footer[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  padding: 3rem 0 1rem;\n  margin-top: 4rem;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n\n.footer-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.footer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\n.social-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  color: white;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n\n.social-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-2px);\n}\n\n.social-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.footer-links[_ngcontent-%COMP%], .footer-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n\n.contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  padding-top: 1rem;\n  text-align: center;\n}\n\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  opacity: 0.8;\n  font-size: 0.9rem;\n}\n\n\n\n@media (max-width: 992px) {\n  .footer-content[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  \n  .footer-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  \n  .footer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .footer-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 2.5rem 0 1rem;\n    margin-top: 3rem;\n  }\n  \n  .footer-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    text-align: center;\n  }\n  \n  .footer-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  \n  .footer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .social-links[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  \n  .social-link[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n  \n  .social-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .footer-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 0.8rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 0.4rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%] {\n    justify-content: center;\n    gap: 0.4rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 14px;\n  }\n  \n  .contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n\n@media (max-width: 576px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 2rem 0 1rem;\n    margin-top: 2.5rem;\n  }\n  \n  .footer-content[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  \n  .footer-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  \n  .footer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  \n  .social-link[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  \n  .social-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .footer-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    margin-bottom: 0.6rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 0.3rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%] {\n    gap: 0.3rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n  \n  .contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  \n  .footer-bottom[_ngcontent-%COMP%] {\n    padding-top: 0.8rem;\n  }\n  \n  .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin: 0.4rem 0;\n  }\n}\n\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 1.5rem 0 0.8rem;\n    margin-top: 2rem;\n  }\n  \n  .footer-content[_ngcontent-%COMP%] {\n    gap: 1.2rem;\n  }\n  \n  .footer-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .footer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  \n  .social-link[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  \n  .social-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .footer-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    margin-bottom: 0.5rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem;\n  }\n  \n  .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  \n  .contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 10px;\n  }\n  \n  .contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  \n  .footer-bottom[_ngcontent-%COMP%] {\n    padding-top: 0.6rem;\n  }\n  \n  .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin: 0.3rem 0;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBLHNDQUFzQztBQUN0QztFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogM3JlbSAwIDFyZW07XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb290ZXItaW5mbyBoMyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXItaW5mbyBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5zb2NpYWwtbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uc29jaWFsLWxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zb2NpYWwtbGluazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLnNvY2lhbC1saW5rIGkge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzLFxyXG4uZm9vdGVyLWNvbnRhY3QgaDQge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgbGkge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rcyBhIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRhY3QtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtaXRlbSBpIHtcclxuICB3aWR0aDogMTZweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4uY29udGFjdC1pdGVtIGEge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5jb250YWN0LWl0ZW0gYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9vdGVyLWJvdHRvbSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXItYm90dG9tIHAge1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vKiBFbmhhbmNlZCBNb2JpbGUgUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmZvb3Rlci1jb250ZW50IHtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWluZm8gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItaW5mbyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1saW5rcyBoNCxcclxuICAuZm9vdGVyLWNvbnRhY3QgaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBmb290ZXIge1xyXG4gICAgcGFkZGluZzogMi41cmVtIDAgMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItY29udGVudCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1pbmZvIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWluZm8gcCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbC1saW5rcyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbC1saW5rIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsLWxpbmsgaSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1saW5rcyBoNCxcclxuICAuZm9vdGVyLWNvbnRhY3QgaDQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWxpbmtzIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1saW5rcyBhIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pdGVtIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjRyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWl0ZW0gaSB7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaXRlbSBhLFxyXG4gIC5jb250YWN0LWl0ZW0gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1ib3R0b20gcCB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDAgMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1jb250ZW50IHtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWluZm8gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItaW5mbyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbC1saW5rIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsLWxpbmsgaSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItbGlua3MgaDQsXHJcbiAgLmZvb3Rlci1jb250YWN0IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1saW5rcyBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItbGlua3MgYSB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWl0ZW0ge1xyXG4gICAgZ2FwOiAwLjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWl0ZW0gaSB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaXRlbSBhLFxyXG4gIC5jb250YWN0LWl0ZW0gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYm90dG9tIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYm90dG9tIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgbWFyZ2luOiAwLjRyZW0gMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAwLjhyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgZ2FwOiAxLjJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItaW5mbyBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1pbmZvIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2NpYWwtbGluayB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbC1saW5rIGkge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItbGlua3MgaDQsXHJcbiAgLmZvb3Rlci1jb250YWN0IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWxpbmtzIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItbGlua3MgYSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaXRlbSB7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWl0ZW0gaSB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaXRlbSBhLFxyXG4gIC5jb250YWN0LWl0ZW0gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1ib3R0b20ge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1ib3R0b20gcCB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIG1hcmdpbjogMC4zcmVtIDA7XHJcbiAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = () => ({
  exact: true
});
class HeaderComponent {
  constructor(router) {
    this.router = router;
    this.isScrolled = false;
    this.isMenuOpen = false;
  }
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  onWindowResize() {
    // Close menu when screen size changes to desktop
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
  ngOnInit() {
    // Close menu when clicking outside
    document.addEventListener('click', event => {
      const target = event.target;
      if (!target.closest('.mobile-nav') && !target.closest('.hamburger') && this.isMenuOpen) {
        this.isMenuOpen = false;
      }
    });
    // Close menu on escape key
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && this.isMenuOpen) {
        this.isMenuOpen = false;
      }
    });
    // Listen to navigation end events to scroll to top
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)).subscribe(() => {
      // Scroll to top after navigation completes
      setTimeout(() => {
        this.scrollToTop();
      }, 50);
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
  scrollToTop() {
    // Smooth scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  onNavigationClick() {
    // Close mobile menu immediately
    this.closeMenu();
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("resize", function HeaderComponent_resize_HostBindingHandler() {
            return ctx.onWindowResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 53,
      vars: 10,
      consts: [[1, "container"], [1, "header-content"], [1, "logo"], [1, "desktop-nav"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/experience", "routerLinkActive", "active"], ["routerLink", "/skills", "routerLinkActive", "active"], ["routerLink", "/projects", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], [1, "hamburger", 3, "click"], [1, "mobile-nav-overlay", 3, "click"], [1, "mobile-nav", 3, "click"], ["routerLink", "/", "routerLinkActive", "active", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 3, "click"], ["routerLink", "/experience", "routerLinkActive", "active", 3, "click"], ["routerLink", "/skills", "routerLinkActive", "active", 3, "click"], ["routerLink", "/projects", "routerLinkActive", "active", 3, "click"], ["routerLink", "/contact", "routerLinkActive", "active", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Subodh Bhandari");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Software Developer | Fintech Specialist");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nav", 3)(9, "ul")(10, "li")(11, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li")(14, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li")(17, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li")(20, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li")(23, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li")(26, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_28_listener() {
            return ctx.toggleMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "span")(30, "span")(31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_32_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "nav", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_nav_click_33_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ul")(35, "li")(36, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_36_listener() {
            return ctx.onNavigationClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li")(39, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_39_listener() {
            return ctx.onNavigationClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li")(42, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_42_listener() {
            return ctx.onNavigationClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li")(45, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_45_listener() {
            return ctx.onNavigationClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "li")(48, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_48_listener() {
            return ctx.onNavigationClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li")(51, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_51_listener() {
            return ctx.onNavigationClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("scrolled", ctx.isScrolled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
      styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  z-index: 1000;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n}\n\nheader.scrolled[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n}\n\n.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--secondary-color);\n  margin: 0;\n  font-weight: 700;\n}\n\n.logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-light);\n  margin: 0;\n}\n\n\n\n.desktop-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 2rem;\n}\n\n.desktop-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  position: relative;\n  padding: 0.5rem 0;\n}\n\n.desktop-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -5px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: var(--gradient-primary);\n  transition: width 0.3s ease;\n}\n\n.desktop-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .desktop-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n\n.desktop-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after, .desktop-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n\n\n\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  padding: 6px;\n  z-index: 1002;\n  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));\n  border: none;\n  outline: none;\n  border-radius: 8px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.hamburger[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n  transition: left 0.5s ease;\n}\n\n.hamburger[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n\n.hamburger[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}\n\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 2.5px;\n  background: white;\n  margin: 2px 0;\n  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  border-radius: 2px;\n  position: relative;\n}\n\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform-origin: top left;\n}\n\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform-origin: bottom left;\n}\n\n.hamburger.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));\n  transform: rotate(180deg);\n}\n\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(45deg) translate(4px, 4px);\n  width: 24px;\n}\n\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n  transform: scale(0);\n}\n\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(-45deg) translate(4px, -4px);\n  width: 24px;\n}\n\n\n\n.mobile-nav-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  z-index: 1001;\n}\n\n.mobile-nav-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n\n\n.mobile-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98));\n  -webkit-backdrop-filter: blur(15px);\n          backdrop-filter: blur(15px);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 80px;\n  overflow-y: auto;\n  transform: translateY(-100%);\n  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.mobile-nav-overlay.active[_ngcontent-%COMP%]   .mobile-nav[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  text-align: center;\n  padding: 2rem 1rem;\n  margin: 0;\n  list-style: none;\n  width: 100%;\n  max-width: 400px;\n}\n\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  opacity: 0;\n  transform: translateY(30px);\n  animation: _ngcontent-%COMP%_slideInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) { animation-delay: 0.1s; }\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) { animation-delay: 0.2s; }\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) { animation-delay: 0.3s; }\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) { animation-delay: 0.4s; }\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) { animation-delay: 0.5s; }\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) { animation-delay: 0.6s; }\n\n@keyframes _ngcontent-%COMP%_slideInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  padding: 1.2rem 2rem;\n  display: block;\n  border-radius: 15px;\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  color: var(--text-color);\n  text-decoration: none;\n  background: rgba(255, 255, 255, 0.8);\n  border: 2px solid transparent;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);\n  transition: left 0.6s ease;\n}\n\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));\n  color: white;\n  transform: translateY(-5px) scale(1.02);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n  border-color: var(--primary-color);\n}\n\n.mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px) scale(0.98);\n}\n\n\n\n@media (max-width: 992px) {\n  .header-content[_ngcontent-%COMP%] {\n    padding: 0.8rem 0;\n  }\n  \n  .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  \n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  \n  .desktop-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .header-content[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 1rem 0;\n  }\n  \n  .logo[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  \n  .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  \n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  \n  \n\n  .desktop-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  \n\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n    position: relative;\n  }\n  \n  .mobile-nav[_ngcontent-%COMP%] {\n    padding-top: 70px;\n  }\n  \n  .mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    gap: 1rem;\n    padding: 1.5rem 1rem;\n  }\n  \n  .mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    padding: 1rem 1.5rem;\n  }\n}\n\n@media (max-width: 576px) {\n  .header-content[_ngcontent-%COMP%] {\n    padding: 0.8rem 0;\n  }\n  \n  .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  \n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  \n  .hamburger[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  \n  .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 2px;\n    margin: 2px 0;\n  }\n  \n  .mobile-nav[_ngcontent-%COMP%] {\n    padding-top: 60px;\n  }\n  \n  .mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    gap: 0.8rem;\n    padding: 1rem 0.8rem;\n  }\n  \n  .mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    padding: 0.9rem 1.2rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  \n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  \n  .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 2px;\n  }\n  \n  .mobile-nav[_ngcontent-%COMP%] {\n    padding-top: 55px;\n  }\n  \n  .mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n    padding: 0.8rem 0.6rem;\n  }\n  \n  .mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.8rem 1rem;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IscUNBQXFDO0VBQ3JDLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUsMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLDhFQUE4RTtFQUM5RSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixzRkFBc0Y7RUFDdEYsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhFQUE4RTtFQUM5RSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxXQUFXO0FBQ2I7O0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHlEQUF5RDtFQUN6RCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IseUZBQXlGO0VBQ3pGLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHVFQUF1RTtBQUN6RTs7QUFFQSxpQ0FBaUMscUJBQXFCLEVBQUU7QUFDeEQsaUNBQWlDLHFCQUFxQixFQUFFO0FBQ3hELGlDQUFpQyxxQkFBcUIsRUFBRTtBQUN4RCxpQ0FBaUMscUJBQXFCLEVBQUU7QUFDeEQsaUNBQWlDLHFCQUFxQixFQUFFO0FBQ3hELGlDQUFpQyxxQkFBcUIsRUFBRTs7QUFFeEQ7RUFDRTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseURBQXlEO0VBQ3pELHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0ZBQXNGO0VBQ3RGLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSw4RUFBOEU7RUFDOUUsWUFBWTtFQUNaLHVDQUF1QztFQUN2Qyx5Q0FBeUM7RUFDekMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBLCtCQUErQjtFQUMvQjtJQUNFLGFBQWE7RUFDZjs7RUFFQSw2QkFBNkI7RUFDN0I7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsU0FBUztJQUNULG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuaGVhZGVyLnNjcm9sbGVkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxufVxyXG5cclxuLmxvZ28gaDEge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubG9nbyBwIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBEZXNrdG9wIE5hdmlnYXRpb24gKi9cclxuLmRlc2t0b3AtbmF2IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uZGVza3RvcC1uYXYgdWwgbGkgYSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG59XHJcblxyXG4uZGVza3RvcC1uYXYgdWwgbGkgYTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC01cHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5kZXNrdG9wLW5hdiB1bCBsaSBhOmhvdmVyLFxyXG4uZGVza3RvcC1uYXYgdWwgbGkgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmRlc2t0b3AtbmF2IHVsIGxpIGE6aG92ZXI6OmFmdGVyLFxyXG4uZGVza3RvcC1uYXYgdWwgbGkgYS5hY3RpdmU6OmFmdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogRW5oYW5jZWQgSGFtYnVyZ2VyIE1lbnUgKi9cclxuLmhhbWJ1cmdlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgei1pbmRleDogMTAwMjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdmFyKC0tYWNjZW50LWNvbG9yKSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oYW1idXJnZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCB0cmFuc3BhcmVudCk7XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5oYW1idXJnZXI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgbGVmdDogMTAwJTtcclxufVxyXG5cclxuLmhhbWJ1cmdlcjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLmhhbWJ1cmdlciBzcGFuIHtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIuNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbjogMnB4IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYWNjZW50LWNvbG9yKSwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIuYWN0aXZlIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDRweCwgNHB4KTtcclxuICB3aWR0aDogMjRweDtcclxufVxyXG5cclxuLmhhbWJ1cmdlci5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG5cclxuLmhhbWJ1cmdlci5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbn1cclxuXHJcbi8qIEVuaGFuY2VkIE1vYmlsZSBOYXZpZ2F0aW9uIE92ZXJsYXkgKi9cclxuLm1vYmlsZS1uYXYtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xyXG4gIHotaW5kZXg6IDEwMDE7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2LW92ZXJsYXkuYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qIEVuaGFuY2VkIE1vYmlsZSBOYXZpZ2F0aW9uICovXHJcbi5tb2JpbGUtbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTgpKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2LW92ZXJsYXkuYWN0aXZlIC5tb2JpbGUtbmF2IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ubW9iaWxlLW5hdiB1bCBsaSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGZvcndhcmRzO1xyXG59XHJcblxyXG4ubW9iaWxlLW5hdiB1bCBsaTpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IDAuMXM7IH1cclxuLm1vYmlsZS1uYXYgdWwgbGk6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjJzOyB9XHJcbi5tb2JpbGUtbmF2IHVsIGxpOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogMC4zczsgfVxyXG4ubW9iaWxlLW5hdiB1bCBsaTpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cclxuLm1vYmlsZS1uYXYgdWwgbGk6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjVzOyB9XHJcbi5tb2JpbGUtbmF2IHVsIGxpOm50aC1jaGlsZCg2KSB7IGFuaW1hdGlvbi1kZWxheTogMC42czsgfVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9iaWxlLW5hdiB1bCBsaSBhIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEuMnJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2IHVsIGxpIGE6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCB0cmFuc3BhcmVudCk7XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjZzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2IHVsIGxpIGE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgbGVmdDogMTAwJTtcclxufVxyXG5cclxuLm1vYmlsZS1uYXYgdWwgbGkgYTpob3ZlcixcclxuLm1vYmlsZS1uYXYgdWwgbGkgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1hY2NlbnQtY29sb3IpKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDIpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2IHVsIGxpIGE6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUoMC45OCk7XHJcbn1cclxuXHJcbi8qIE1vYmlsZSBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMC44cmVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIH1cclxuICBcclxuICAubG9nbyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuICBcclxuICAuZGVza3RvcC1uYXYgdWwge1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAubG9nbyBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ28gcCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhpZGUgZGVza3RvcCBuYXYgb24gbW9iaWxlICovXHJcbiAgLmRlc2t0b3AtbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNob3cgaGFtYnVyZ2VyIG9uIG1vYmlsZSAqL1xyXG4gIC5oYW1idXJnZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2JpbGUtbmF2IHVsIHtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xyXG4gIH1cclxuICBcclxuICAubW9iaWxlLW5hdiB1bCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMC44cmVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuICBcclxuICAubG9nbyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuICBcclxuICAuaGFtYnVyZ2VyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmhhbWJ1cmdlciBzcGFuIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW46IDJweCAwO1xyXG4gIH1cclxuICBcclxuICAubW9iaWxlLW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYgdWwge1xyXG4gICAgZ2FwOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYgdWwgbGkgYSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubG9nbyBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ28gcCB7XHJcbiAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5oYW1idXJnZXIgc3BhbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gIH1cclxuICBcclxuICAubW9iaWxlLW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYgdWwge1xyXG4gICAgZ2FwOiAwLjZyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMC42cmVtO1xyXG4gIH1cclxuICBcclxuICAubW9iaWxlLW5hdiB1bCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class HomeComponent {
  ngOnInit() {
    // Additional initialization if needed
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 73,
      vars: 0,
      consts: [[1, "hero"], [1, "container"], ["data-aos", "fade-up", 1, "hero-content"], [1, "hero-text"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-subtitle"], [1, "hero-buttons"], ["routerLink", "/projects", 1, "btn", "btn-primary"], ["routerLink", "/contact", 1, "btn", "btn-secondary"], [1, "hero-stats"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], ["data-aos", "fade-left", 1, "hero-image"], [1, "profile-container"], [1, "profile-image"], ["src", "assets/images/profile.jpg", "alt", "Subodh Bhandari"], [1, "floating-card", "card-1"], [1, "fab", "fa-angular"], [1, "floating-card", "card-2"], [1, "fab", "fa-java"], [1, "floating-card", "card-3"], [1, "fab", "fa-js"], [1, "features"], [1, "features-grid"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "feature-card"], [1, "feature-icon"], [1, "fas", "fa-code"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "feature-card"], [1, "fas", "fa-chart-line"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "feature-card"], [1, "fas", "fa-mobile-alt"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Building Innovative");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fintech Solutions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Full Stack Developer with 2+ years of experience in Angular, TypeScript, and Java Spring Boot. Passionate about creating scalable, user-friendly applications that drive business growth. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View My Work");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Get In Touch");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Years Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "10+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Projects Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11)(29, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "5+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Technologies");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14)(34, "div", 15)(35, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Angular");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Java");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "TypeScript");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "section", 24)(50, "div", 1)(51, "div", 25)(52, "div", 26)(53, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Full Stack Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Expert in both frontend and backend development with modern technologies.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29)(60, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Fintech Solutions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Specialized in building robust financial technology applications and systems.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31)(67, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Responsive Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Creating beautiful, responsive applications that work on all devices.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".hero[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 120px 0 80px;\n  position: relative;\n  overflow: hidden;\n}\n\n.hero[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>');\n  opacity: 0.3;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n}\n\n.hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n}\n\n.hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, #fff, #f0f0f0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.hero-text[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1.6;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n}\n\n.hero-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 3rem;\n}\n\n.hero-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 15px 30px;\n  border-radius: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n\n.hero-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary-color);\n}\n\n.hero-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n\n.hero-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n}\n\n.hero-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: var(--primary-color);\n  transform: translateY(-3px);\n}\n\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n\n.hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n}\n\n.hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n\n.hero-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.profile-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 5px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.profile-container[_ngcontent-%COMP%]   .floating-card[_ngcontent-%COMP%] {\n  position: absolute;\n  background: white;\n  color: var(--primary-color);\n  padding: 10px 15px;\n  border-radius: 25px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n\n.profile-container[_ngcontent-%COMP%]   .floating-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.profile-container[_ngcontent-%COMP%]   .floating-card.card-1[_ngcontent-%COMP%] {\n  top: 20px;\n  right: -20px;\n  animation-delay: 0s;\n}\n\n.profile-container[_ngcontent-%COMP%]   .floating-card.card-2[_ngcontent-%COMP%] {\n  bottom: 40px;\n  left: -30px;\n  animation-delay: 1s;\n}\n\n.profile-container[_ngcontent-%COMP%]   .floating-card.card-3[_ngcontent-%COMP%] {\n  top: 50%;\n  right: -40px;\n  animation-delay: 2s;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n\n.features[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: white;\n}\n\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n\n.feature-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  border-radius: 15px;\n  background: white;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n\n.feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n}\n\n.feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n}\n\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: var(--secondary-color);\n}\n\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  line-height: 1.6;\n}\n\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    text-align: center;\n  }\n  \n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem !important;\n  }\n  \n  .hero-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .hero-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  \n  .profile-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n  }\n  \n  .floating-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCwyVEFBMlQ7RUFDM1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMjBweCAwIDgwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZXJvOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+PGRlZnM+PHBhdHRlcm4gaWQ9XCJncmFpblwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjFcIiBmaWxsPVwid2hpdGVcIiBvcGFjaXR5PVwiMC4xXCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBmaWxsPVwidXJsKCUyM2dyYWluKVwiLz48L3N2Zz4nKTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogNHJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uaGVyby10ZXh0IC5oZXJvLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uaGVyby10ZXh0IC5oZXJvLXRpdGxlIC5ncmFkaWVudC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmYsICNmMGYwZjApO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQgLmhlcm8tc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5oZXJvLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5oZXJvLWJ1dHRvbnMgLmJ0biB7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmhlcm8tYnV0dG9ucyAuYnRuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5oZXJvLWJ1dHRvbnMgLmJ0bi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLmhlcm8tYnV0dG9ucyAuYnRuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmhlcm8tYnV0dG9ucyAuYnRuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbn1cclxuXHJcbi5oZXJvLXN0YXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLmhlcm8tc3RhdHMgLnN0YXQtaXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyby1zdGF0cyAuc3RhdC1pdGVtIC5zdGF0LW51bWJlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVyby1zdGF0cyAuc3RhdC1pdGVtIC5zdGF0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5oZXJvLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jb250YWluZXIgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS1pbWFnZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyIC5mbG9hdGluZy1jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBhbmltYXRpb246IGZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jb250YWluZXIgLmZsb2F0aW5nLWNhcmQgaSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciAuZmxvYXRpbmctY2FyZC5jYXJkLTEge1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogLTIwcHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyIC5mbG9hdGluZy1jYXJkLmNhcmQtMiB7XHJcbiAgYm90dG9tOiA0MHB4O1xyXG4gIGxlZnQ6IC0zMHB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciAuZmxvYXRpbmctY2FyZC5jYXJkLTMge1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAtNDBweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmVhdHVyZXMge1xyXG4gIHBhZGRpbmc6IDgwcHggMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmZlYXR1cmVzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZCAuZmVhdHVyZS1pY29uIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQgLmZlYXR1cmUtaWNvbiBpIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkIGgzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkIHAge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVyby1jb250ZW50IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaGVyby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaGVyby1idXR0b25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaGVyby1zdGF0cyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtY29udGFpbmVyIC5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbG9hdGluZy1jYXJkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3607:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function ProjectsComponent_div_7_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Live Demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_7_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_7_li_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r2);
  }
}
function ProjectsComponent_div_7_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tech_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r3);
  }
}
function ProjectsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_7_a_5_Template, 4, 1, "a", 14)(6, ProjectsComponent_div_7_a_6_Template, 4, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15)(8, "div", 16)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19)(16, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Key Features:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProjectsComponent_div_7_li_19_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectsComponent_div_7_span_21_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos", "fade-up")("data-aos-delay", i_r4 * 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](project_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.github);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.technologies);
  }
}
class ProjectsComponent {
  constructor() {
    this.projects = [{
      title: 'Loan Management System (LMS)',
      description: 'Developed a fully automated Loan Management System for banking and microfinance institutions using Angular and Java Spring Boot.',
      technologies: ['Angular', 'TypeScript', 'Java Spring Boot', 'REST APIs'],
      company: 'SB Solutions Pvt. Ltd.',
      image: 'lms',
      features: ['Complete loan lifecycle management', 'Automated approval workflows', 'Real-time reporting and analytics', 'Multi-role user management', 'Secure payment processing']
    }, {
      title: 'Online Blood Management System',
      description: 'Designed and developed a comprehensive web application to streamline blood donation and management processes.',
      technologies: ['PHP', 'HTML/CSS', 'JavaScript'],
      company: 'College Project',
      image: 'blood',
      features: ['Blood donor registration', 'Inventory management', 'Request and matching system', 'Donor notifications', 'Emergency blood requests']
    }, {
      title: 'Valuator App',
      description: 'Complementary Android application built with Java in Android Studio for the Online Blood Management System.',
      technologies: ['Java', 'Android Studio'],
      company: 'College Project',
      image: 'valuator',
      features: ['Mobile blood donation tracking', 'QR code scanning', 'Real-time updates', 'Offline functionality', 'Push notifications']
    }];
  }
  static {
    this.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 1,
      consts: [[1, "projects"], [1, "container"], ["data-aos", "fade-up", 1, "section-title"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "section-subtitle"], [1, "projects-grid"], ["class", "project-card", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "projects-cta"], ["routerLink", "/contact", 1, "btn", "btn-primary"], [1, "fas", "fa-paper-plane"], [1, "project-card"], [1, "project-image"], [1, "image-placeholder"], [1, "project-overlay"], [1, "project-links"], ["target", "_blank", "class", "project-link", 3, "href", 4, "ngIf"], [1, "project-content"], [1, "project-header"], [1, "project-company"], [1, "project-description"], [1, "project-features"], [4, "ngFor", "ngForOf"], [1, "project-tech"], ["class", "tech-tag", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "project-link", 3, "href"], [1, "fas", "fa-external-link-alt"], [1, "fab", "fa-github"], [1, "tech-tag"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Featured Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Explore my latest work and innovative solutions that showcase my expertise in modern web development. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_div_7_Template, 22, 11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Interested in working together?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Let's discuss your next project and bring your ideas to life with cutting-edge technology and innovative solutions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Get In Touch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".projects[_ngcontent-%COMP%] {\n  padding: 120px 0 80px;\n  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  position: relative;\n}\n\n.projects[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"%23667eea\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>');\n  opacity: 0.3;\n}\n\n.projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-color);\n  font-size: 1.1rem;\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: 1.6;\n  opacity: 0.8;\n}\n\n.projects-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n  gap: 2.5rem;\n  margin-bottom: 4rem;\n}\n\n.project-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  position: relative;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.project-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--gradient-primary);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n\n.project-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.02);\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);\n}\n\n.project-card[_ngcontent-%COMP%]:hover   .project-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.project-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n}\n\n.project-image[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 4rem;\n  position: relative;\n  overflow: hidden;\n}\n\n.project-image[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);\n  transform: translateX(-100%);\n  transition: transform 0.6s ease;\n}\n\n.project-card[_ngcontent-%COMP%]:hover   .image-placeholder[_ngcontent-%COMP%]::before {\n  transform: translateX(100%);\n}\n\n.project-image[_ngcontent-%COMP%]   .image-placeholder.lms[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.project-image[_ngcontent-%COMP%]   .image-placeholder.lms[_ngcontent-%COMP%]::after {\n  content: '\uD83C\uDFE6';\n  font-size: 4rem;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n\n.project-image[_ngcontent-%COMP%]   .image-placeholder.blood[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n\n.project-image[_ngcontent-%COMP%]   .image-placeholder.blood[_ngcontent-%COMP%]::after {\n  content: '\uD83E\uDE78';\n  font-size: 4rem;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite 1s;\n}\n\n.project-image[_ngcontent-%COMP%]   .image-placeholder.valuator[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);\n}\n\n.project-image[_ngcontent-%COMP%]   .image-placeholder.valuator[_ngcontent-%COMP%]::after {\n  content: '\uD83D\uDCF1';\n  font-size: 4rem;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite 2s;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n\n.project-image[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: all 0.4s ease;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n}\n\n.project-image[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-image[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  color: var(--primary-color);\n  text-decoration: none;\n  border-radius: 30px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  transform: translateY(20px);\n  opacity: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n\n.project-card[_ngcontent-%COMP%]:hover   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.project-card[_ngcontent-%COMP%]:hover   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 0.1s;\n}\n\n.project-card[_ngcontent-%COMP%]:hover   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 0.2s;\n}\n\n.project-image[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n  background: rgba(255, 255, 255, 1);\n  color: var(--primary-color);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.project-image[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.project-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: white;\n}\n\n.project-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.project-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--secondary-color);\n  margin: 0;\n  font-weight: 700;\n  line-height: 1.3;\n  flex: 1;\n  min-width: 200px;\n}\n\n.project-header[_ngcontent-%COMP%]   .project-company[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-light);\n  font-style: italic;\n  background: var(--gradient-accent);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 15px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n.project-description[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  font-size: 1rem;\n}\n\n.project-features[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.project-features[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--secondary-color);\n  margin-bottom: 0.75rem;\n  font-weight: 600;\n}\n\n.project-features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.project-features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 1.5rem;\n  margin-bottom: 0.5rem;\n  color: var(--text-color);\n  line-height: 1.5;\n  font-size: 0.95rem;\n}\n\n.project-features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: '\u2713';\n  position: absolute;\n  left: 0;\n  color: var(--primary-color);\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n\n.project-tech[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.project-tech[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%] {\n  background: var(--gradient-accent);\n  color: white;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.project-tech[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n.projects-cta[_ngcontent-%COMP%] {\n  text-align: center;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 3.5rem;\n  border-radius: 20px;\n  margin-top: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n\n.projects-cta[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"dots\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23dots)\"/></svg>');\n  opacity: 0.3;\n}\n\n.projects-cta[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.projects-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  margin-bottom: 1rem;\n  font-weight: 700;\n}\n\n.projects-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n\n.projects-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary-color);\n  padding: 15px 35px;\n  border-radius: 30px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n\n.projects-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n  background: var(--gradient-accent);\n  color: white;\n}\n\n.projects-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n@media (max-width: 768px) {\n  .projects[_ngcontent-%COMP%] {\n    padding: 80px 0 60px;\n  }\n  \n  .section-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 2rem;\n  }\n  \n  .projects-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  \n  .project-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  \n  .project-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  \n  .project-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  \n  .project-header[_ngcontent-%COMP%]   .project-company[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  \n  .projects-cta[_ngcontent-%COMP%] {\n    padding: 2.5rem 1.5rem;\n  }\n  \n  .projects-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  \n  .projects-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .projects-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  \n  .project-content[_ngcontent-%COMP%] {\n    padding: 1.2rem;\n  }\n  \n  .project-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  \n  .project-tech[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 5px 12px;\n  }\n  \n  .projects-cta[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  \n  .projects-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDZEQUE2RDtFQUM3RCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCwrVEFBK1Q7RUFDL1QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLDREQUE0RDtFQUM1RCxrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxrR0FBa0c7RUFDbEcsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsOEZBQThGO0VBQzlGLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsMENBQTBDO0VBQzFDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMENBQTBDO0VBQzFDLGtDQUFrQztFQUNsQywyQkFBMkI7RUFDM0IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsdVRBQXVUO0VBQ3ZULFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHMge1xyXG4gIHBhZGRpbmc6IDEyMHB4IDAgODBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2plY3RzOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+PGRlZnM+PHBhdHRlcm4gaWQ9XCJncmFpblwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjFcIiBmaWxsPVwiJTIzNjY3ZWVhXCIgb3BhY2l0eT1cIjAuMVwiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgZmlsbD1cInVybCglMjNncmFpbilcIi8+PC9zdmc+Jyk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ucHJvamVjdHMgLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXN1YnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzgwcHgsIDFmcikpO1xyXG4gIGdhcDogMi41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6aG92ZXI6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4wMik7XHJcbiAgYm94LXNoYWRvdzogMCAyNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZDpob3ZlciAucHJvamVjdC1vdmVybGF5IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UgLmltYWdlLXBsYWNlaG9sZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIC5pbWFnZS1wbGFjZWhvbGRlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgNTAlLCB0cmFuc3BhcmVudCA3MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZDpob3ZlciAuaW1hZ2UtcGxhY2Vob2xkZXI6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSAuaW1hZ2UtcGxhY2Vob2xkZXIubG1zIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSAuaW1hZ2UtcGxhY2Vob2xkZXIubG1zOjphZnRlciB7XHJcbiAgY29udGVudDogJ8Owwp/Cj8KmJztcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgYW5pbWF0aW9uOiBmbG9hdCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UgLmltYWdlLXBsYWNlaG9sZGVyLmJsb29kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSAuaW1hZ2UtcGxhY2Vob2xkZXIuYmxvb2Q6OmFmdGVyIHtcclxuICBjb250ZW50OiAnw7DCn8KpwrgnO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBhbmltYXRpb246IGZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlIDFzO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSAuaW1hZ2UtcGxhY2Vob2xkZXIudmFsdWF0b3Ige1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZmFjZmUgMCUsICMwMGYyZmUgMTAwJSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIC5pbWFnZS1wbGFjZWhvbGRlci52YWx1YXRvcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICfDsMKfwpPCsSc7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIGFuaW1hdGlvbjogZmxvYXQgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgMnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXQge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIC5wcm9qZWN0LW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjkpIDAlLCByZ2JhKDExOCwgNzUsIDE2MiwgMC45KSAxMDAlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSAucHJvamVjdC1vdmVybGF5IC5wcm9qZWN0LWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIC5wcm9qZWN0LW92ZXJsYXkgLnByb2plY3QtbGlua3MgLnByb2plY3QtbGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZDpob3ZlciAucHJvamVjdC1saW5rcyAucHJvamVjdC1saW5rIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZDpob3ZlciAucHJvamVjdC1saW5rcyAucHJvamVjdC1saW5rOm50aC1jaGlsZCgxKSB7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuLnByb2plY3QtY2FyZDpob3ZlciAucHJvamVjdC1saW5rcyAucHJvamVjdC1saW5rOm50aC1jaGlsZCgyKSB7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UgLnByb2plY3Qtb3ZlcmxheSAucHJvamVjdC1saW5rcyAucHJvamVjdC1saW5rOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UgLnByb2plY3Qtb3ZlcmxheSAucHJvamVjdC1saW5rcyAucHJvamVjdC1saW5rIGkge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyIGgzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZsZXg6IDE7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyIC5wcm9qZWN0LWNvbXBhbnkge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtYWNjZW50KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1mZWF0dXJlcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1mZWF0dXJlcyBoNCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucHJvamVjdC1mZWF0dXJlcyB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucHJvamVjdC1mZWF0dXJlcyB1bCBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWZlYXR1cmVzIHVsIGxpOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICfDosKcwpMnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtdGVjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtdGVjaCAudGVjaC10YWcge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWFjY2VudCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2plY3QtdGVjaCAudGVjaC10YWc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnByb2plY3RzLWN0YSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvamVjdHMtY3RhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+PGRlZnM+PHBhdHRlcm4gaWQ9XCJkb3RzXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjFcIiBmaWxsPVwid2hpdGVcIiBvcGFjaXR5PVwiMC4xXCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBmaWxsPVwidXJsKCUyM2RvdHMpXCIvPjwvc3ZnPicpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLnByb2plY3RzLWN0YSA+ICoge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ucHJvamVjdHMtY3RhIGgzIHtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jdGEgcCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLnByb2plY3RzLWN0YSAuYnRuIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgcGFkZGluZzogMTVweCAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3RzLWN0YSAuYnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWFjY2VudCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvamVjdHMtY3RhIC5idG4gaSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9qZWN0cyB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDAgNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3RzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdC1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0LWhlYWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3QtaGVhZGVyIC5wcm9qZWN0LWNvbXBhbnkge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3RzLWN0YSB7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW0gMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdHMtY3RhIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdHMtY3RhIHAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnByb2plY3RzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxLjJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0LWhlYWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3QtdGVjaCAudGVjaC10YWcge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0cy1jdGEge1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdHMtY3RhIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1199:
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function SkillsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18)(8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skill_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r1.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r1.level, "%");
  }
}
function SkillsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18)(8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skill_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r2.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r2.level, "%");
  }
}
function SkillsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18)(8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skill_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r3.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r3.level, "%");
  }
}
function SkillsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const interest_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](interest_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](interest_r4.name);
  }
}
function SkillsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lang_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](lang_r5.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r5.level);
  }
}
class SkillsComponent {
  constructor() {
    this.frontendSkills = [{
      name: 'Angular 2+',
      level: 90,
      category: 'frontend',
      icon: 'fab fa-angular'
    }, {
      name: 'TypeScript',
      level: 85,
      category: 'frontend',
      icon: 'fab fa-js'
    }, {
      name: 'JavaScript',
      level: 80,
      category: 'frontend',
      icon: 'fab fa-js'
    }, {
      name: 'HTML/CSS',
      level: 75,
      category: 'frontend',
      icon: 'fab fa-html5'
    }, {
      name: 'Bootstrap',
      level: 70,
      category: 'frontend',
      icon: 'fab fa-bootstrap'
    }];
    this.backendSkills = [{
      name: 'Java Spring Boot',
      level: 80,
      category: 'backend',
      icon: 'fab fa-java'
    }, {
      name: 'REST APIs',
      level: 70,
      category: 'backend',
      icon: 'fas fa-server'
    }, {
      name: 'MS SQL',
      level: 65,
      category: 'backend',
      icon: 'fas fa-database'
    }];
    this.toolsSkills = [{
      name: 'Git',
      level: 80,
      category: 'tools',
      icon: 'fab fa-git-alt'
    }, {
      name: 'Postman',
      level: 75,
      category: 'tools',
      icon: 'fas fa-paper-plane'
    }, {
      name: 'JIRA',
      level: 70,
      category: 'tools',
      icon: 'fab fa-jira'
    }];
    this.interests = [{
      name: 'TED Talks',
      icon: 'fas fa-play-circle'
    }, {
      name: 'Learning',
      icon: 'fas fa-graduation-cap'
    }, {
      name: 'Nepal Stock Market',
      icon: 'fas fa-chart-line'
    }, {
      name: 'Hiking',
      icon: 'fas fa-mountain'
    }, {
      name: 'Futsal',
      icon: 'fas fa-futbol'
    }, {
      name: 'Cricket',
      icon: 'fas fa-cricket'
    }];
    this.languages = [{
      name: 'Nepali',
      level: 'native'
    }, {
      name: 'English',
      level: 'fluent'
    }, {
      name: 'Hindi',
      level: 'fluent'
    }];
  }
  ngOnInit() {
    // Initialize component
  }
  ngAfterViewInit() {
    // Trigger skill bar animations when component is loaded
    setTimeout(() => {
      this.animateSkillBars();
    }, 500);
  }
  animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.classList.add('animate');
      }, index * 200);
    });
  }
  static {
    this.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 31,
      vars: 5,
      consts: [[1, "skills"], [1, "container"], ["data-aos", "fade-up", 1, "section-title"], [1, "skills-content"], [1, "skills-categories"], ["data-aos", "fade-up", 1, "category-section"], [1, "skills-grid"], ["class", "skill-item", "data-aos", "fade-up", 4, "ngFor", "ngForOf"], ["data-aos", "fade-left", 1, "additional-skills"], [1, "interests-section"], [1, "interests-grid"], ["class", "interest-item", 4, "ngFor", "ngForOf"], [1, "languages-section"], ["class", "language-item", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "skill-item"], [1, "skill-header"], [1, "skill-name"], [1, "skill-level"], [1, "skill-bar"], [1, "skill-progress"], [1, "progress-shimmer"], [1, "interest-item"], [1, "language-item"], [1, "language-name"], [1, "language-level"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skills & Expertise");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Frontend Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SkillsComponent_div_10_Template, 10, 6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Backend Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SkillsComponent_div_15_Template, 10, 6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5)(17, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tools & Technologies");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SkillsComponent_div_20_Template, 10, 6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8)(22, "div", 9)(23, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Interests & Hobbies");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SkillsComponent_div_26_Template, 4, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12)(28, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Languages");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SkillsComponent_div_30_Template, 5, 4, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.frontendSkills);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.backendSkills);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toolsSkills);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.interests);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".skills[_ngcontent-%COMP%] {\n  padding: 120px 0 80px;\n  background: #f9f9f9;\n}\n\n.skills-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 4rem;\n}\n\n.category-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  \n  h3 {\n    font-size: 1.8rem;\n    color: var(--secondary-color);\n    margin-bottom: 2rem;\n    position: relative;\n    \n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      width: 50px;\n      height: 3px;\n      background: var(--gradient-primary);\n      border-radius: 2px;\n    }\n  }\n}\n\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n\n.skill-item[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 10px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  \n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  }\n}\n\n.skill-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  \n  i {\n    color: var(--primary-color);\n    font-size: 1.2rem;\n    margin-right: 0.5rem;\n  }\n  \n  .skill-name {\n    flex: 1;\n    font-weight: 600;\n    color: var(--secondary-color);\n  }\n  \n  .skill-level {\n    font-weight: 700;\n    color: var(--primary-color);\n  }\n}\n\n.skill-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n  \n  .skill-progress {\n    height: 100%;\n    background: var(--gradient-primary);\n    border-radius: 4px;\n    transition: width 1s ease-in-out;\n    animation: _ngcontent-%COMP%_fillBar 1.5s ease-out;\n    position: relative;\n    overflow: hidden;\n  }\n}\n\n\n\n.progress-shimmer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    rgba(255, 255, 255, 0.4),\n    transparent\n  );\n  animation: _ngcontent-%COMP%_shimmer 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_fillBar {\n  from {\n    width: 0%;\n  }\n}\n\n.additional-skills[_ngcontent-%COMP%] {\n  .interests-section,\n  .languages-section {\n    background: white;\n    padding: 2rem;\n    border-radius: 15px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n    margin-bottom: 2rem;\n    \n    h3 {\n      font-size: 1.5rem;\n      color: var(--secondary-color);\n      margin-bottom: 1.5rem;\n    }\n  }\n}\n\n.interests-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 1rem;\n  \n  .interest-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    background: var(--gradient-accent);\n    color: white;\n    border-radius: 10px;\n    text-align: center;\n    transition: all 0.3s ease;\n    \n    &:hover {\n      transform: translateY(-3px);\n      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n    }\n    \n    i {\n      font-size: 1.5rem;\n      margin-bottom: 0.5rem;\n    }\n    \n    span {\n      font-weight: 600;\n      font-size: 0.9rem;\n    }\n  }\n}\n\n.language-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-bottom: 1px solid #eee;\n  \n  &:last-child {\n    border-bottom: none;\n  }\n  \n  .language-name {\n    font-weight: 600;\n    color: var(--secondary-color);\n  }\n  \n  .language-level {\n    padding: 5px 12px;\n    border-radius: 15px;\n    font-size: 0.8rem;\n    font-weight: 600;\n    \n    &.native {\n      background: var(--gradient-primary);\n      color: white;\n    }\n    \n    &.fluent {\n      background: var(--gradient-secondary);\n      color: white;\n    }\n  }\n}\n\n\n\n@media (max-width: 768px) {\n  .skills[_ngcontent-%COMP%] {\n    padding: 80px 0 60px;\n  }\n  \n  .skills-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  \n  .category-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  \n  .skill-item[_ngcontent-%COMP%] {\n    padding: 1.2rem;\n  }\n  \n  .skill-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n    \n    .skill-name {\n      font-size: 0.9rem;\n    }\n    \n    .skill-level {\n      font-size: 0.8rem;\n    }\n  }\n  \n  .interests-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  }\n  \n  .additional-skills[_ngcontent-%COMP%]   .interests-section[_ngcontent-%COMP%], .additional-skills[_ngcontent-%COMP%]   .languages-section[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n\n@media (max-width: 576px) {\n  .skills[_ngcontent-%COMP%] {\n    padding: 60px 0 40px;\n  }\n  \n  .skill-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .skill-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.3rem;\n    \n    i {\n      margin-right: 0;\n      margin-bottom: 0.3rem;\n    }\n  }\n  \n  .interests-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .language-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .category-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  \n  .skill-item[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n  }\n  \n  .interests-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7O0VBRW5CO0lBQ0UsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQjtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLE9BQU87TUFDUCxXQUFXO01BQ1gsV0FBVztNQUNYLG1DQUFtQztNQUNuQyxrQkFBa0I7SUFDcEI7RUFDRjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6Qyx5QkFBeUI7O0VBRXpCO0lBQ0UsMkJBQTJCO0lBQzNCLDJDQUEyQztFQUM3QztBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1COztFQUVuQjtJQUNFLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsT0FBTztJQUNQLGdCQUFnQjtJQUNoQiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCOztFQUVoQjtJQUNFLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1o7Ozs7O0dBS0M7RUFDRCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLG1CQUFtQjs7SUFFbkI7TUFDRSxpQkFBaUI7TUFDakIsNkJBQTZCO01BQzdCLHFCQUFxQjtJQUN2QjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7O0VBRVQ7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5Qjs7SUFFekI7TUFDRSwyQkFBMkI7TUFDM0IseUNBQXlDO0lBQzNDOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixpQkFBaUI7SUFDbkI7RUFDRjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2Qjs7RUFFN0I7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQjtNQUNFLG1DQUFtQztNQUNuQyxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxxQ0FBcUM7TUFDckMsWUFBWTtJQUNkO0VBQ0Y7QUFDRjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7O0lBRVg7TUFDRSxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxpQkFBaUI7SUFDbkI7RUFDRjs7RUFFQTtJQUNFLDJEQUEyRDtFQUM3RDs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVzs7SUFFWDtNQUNFLGVBQWU7TUFDZixxQkFBcUI7SUFDdkI7RUFDRjs7RUFFQTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbHMge1xyXG4gIHBhZGRpbmc6IDEyMHB4IDAgODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uc2tpbGxzLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gIGdhcDogNHJlbTtcclxufVxyXG5cclxuLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAtMTBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNraWxscy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4uc2tpbGwtaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGwtbmFtZSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGwtbGV2ZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbi5za2lsbC1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgLnNraWxsLXByb2dyZXNzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IGZpbGxCYXIgMS41cyBlYXNlLW91dDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKiBDb250aW51b3VzIFJ1bm5pbmcgQW5pbWF0aW9uICovXHJcbi5wcm9ncmVzcy1zaGltbWVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICA5MGRlZyxcclxuICAgIHRyYW5zcGFyZW50LFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxyXG4gICAgdHJhbnNwYXJlbnRcclxuICApO1xyXG4gIGFuaW1hdGlvbjogc2hpbW1lciAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmaWxsQmFyIHtcclxuICBmcm9tIHtcclxuICAgIHdpZHRoOiAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5hZGRpdGlvbmFsLXNraWxscyB7XHJcbiAgLmludGVyZXN0cy1zZWN0aW9uLFxyXG4gIC5sYW5ndWFnZXMtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIFxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbnRlcmVzdHMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcclxuICBnYXA6IDFyZW07XHJcbiAgXHJcbiAgLmludGVyZXN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWFjY2VudCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGFuZ3VhZ2UtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYW5ndWFnZS1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLmxhbmd1YWdlLWxldmVsIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIFxyXG4gICAgJi5uYXRpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmZsdWVudCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXNlY29uZGFyeSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEVuaGFuY2VkIE1vYmlsZSBSZXNwb25zaXZlbmVzcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2tpbGxzIHtcclxuICAgIHBhZGRpbmc6IDgwcHggMCA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuc2tpbGxzLWNvbnRlbnQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXRlZ29yeS1zZWN0aW9uIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGwtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxLjJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5za2lsbC1oZWFkZXIge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBcclxuICAgIC5za2lsbC1uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5za2lsbC1sZXZlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW50ZXJlc3RzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGRpdGlvbmFsLXNraWxscyAuaW50ZXJlc3RzLXNlY3Rpb24sXHJcbiAgLmFkZGl0aW9uYWwtc2tpbGxzIC5sYW5ndWFnZXMtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuc2tpbGxzIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMCA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuc2tpbGwtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGwtaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMC4zcmVtO1xyXG4gICAgXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnRlcmVzdHMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxuICBcclxuICAubGFuZ3VhZ2UtaXRlbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jYXRlZ29yeS1zZWN0aW9uIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGwtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnRlcmVzdHMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1334:
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailService: () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);



class EmailService {
  constructor() {
    this.SERVICE_ID = 'service_wvczn3l';
    this.TEMPLATE_ID = 'template_7tf5rwn';
    this.PUBLIC_KEY = 'P7vsLl1LMUjGwlFCD';
    this.initEmailJS();
  }
  initEmailJS() {
    if (typeof emailjs !== 'undefined') {
      emailjs.init(this.PUBLIC_KEY);
    }
  }
  sendEmail(emailData) {
    if (typeof emailjs === 'undefined') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error('EmailJS is not available'));
    }
    const templateParams = {
      to_email: 'subodhbhandari4@gmail.com',
      from_name: emailData.name,
      from_email: emailData.email,
      subject: emailData.subject || 'Portfolio Contact Form',
      message: emailData.message,
      // Simple logo URL - you can update this later
      logo_url: 'https://via.placeholder.com/200x60/667eea/ffffff?text=SB+Portfolio'
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      console.log('Email sent successfully:', response);
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Email sending failed:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error(this.getErrorMessage(error)));
    }));
  }
  getErrorMessage(error) {
    if (error.status === 0) {
      return 'Network error. Please check your internet connection.';
    } else if (error.status === 400) {
      return 'Invalid email data. Please check your input.';
    } else if (error.status === 429) {
      return 'Too many requests. Please try again later.';
    } else if (error.status >= 500) {
      return 'Server error. Please try again later.';
    } else {
      return 'Failed to send email. Please try again.';
    }
  }
  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  isEmailJSAvailable() {
    return typeof emailjs !== 'undefined';
  }
  static {
    this.ɵfac = function EmailService_Factory(t) {
      return new (t || EmailService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: EmailService,
      factory: EmailService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7473:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class NotificationService {
  showSuccess(message, title = 'Success!') {
    this.showNotification(message, title, 'success');
  }
  showError(message, title = 'Error') {
    this.showNotification(message, title, 'error');
  }
  showWarning(message, title = 'Warning') {
    this.showNotification(message, title, 'warning');
  }
  showInfo(message, title = 'Info') {
    this.showNotification(message, title, 'info');
  }
  showNotification(message, title, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-toast custom-toast-${type}`;
    const icon = this.getIconForType(type);
    const color = this.getColorForType(type);
    notification.innerHTML = `
      <div class="toast-header">
        <i class="${icon}"></i>
        <span class="toast-title">${title}</span>
        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
      <div class="toast-progress"></div>
    `;
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      border-left: 4px solid ${color};
      margin-bottom: 10px;
      overflow: hidden;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      z-index: 10000;
      min-width: 300px;
      max-width: 400px;
      animation: slideInRight 0.3s ease-out;
    `;
    // Add header styles
    const header = notification.querySelector('.toast-header');
    if (header) {
      header.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border-bottom: 1px solid #f0f0f0;
        background: #fafafa;
      `;
    }
    // Add title styles
    const titleElement = notification.querySelector('.toast-title');
    if (titleElement) {
      titleElement.style.cssText = `
        font-weight: 600;
        font-size: 1rem;
        color: #2c3e50;
        margin-left: 8px;
        flex: 1;
      `;
    }
    // Add close button styles
    const closeButton = notification.querySelector('.toast-close');
    if (closeButton) {
      closeButton.style.cssText = `
        background: none;
        border: none;
        color: #7f8c8d;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;
        padding: 4px;
        border-radius: 4px;
      `;
      closeButton.addEventListener('mouseenter', () => {
        closeButton.style.opacity = '1';
        closeButton.style.color = '#e74c3c';
      });
      closeButton.addEventListener('mouseleave', () => {
        closeButton.style.opacity = '0.7';
        closeButton.style.color = '#7f8c8d';
      });
    }
    // Add body styles
    const body = notification.querySelector('.toast-body');
    if (body) {
      body.style.cssText = `
        padding: 12px 16px;
        font-size: 0.9rem;
        color: #333;
        line-height: 1.4;
      `;
    }
    // Add progress bar styles
    const progress = notification.querySelector('.toast-progress');
    if (progress) {
      progress.style.cssText = `
        height: 3px;
        background: ${color};
        width: 100%;
        animation: progress 5s linear;
      `;
    }
    // Add to container
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
      `;
      document.body.appendChild(container);
    }
    container.appendChild(notification);
    // Add animations
    this.addAnimations();
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
          if (notification.parentElement) {
            notification.parentElement.removeChild(notification);
          }
        }, 300);
      }
    }, 5000);
  }
  getIconForType(type) {
    const icons = {
      success: 'fas fa-check-circle',
      error: 'fas fa-exclamation-circle',
      warning: 'fas fa-exclamation-triangle',
      info: 'fas fa-info-circle'
    };
    return icons[type];
  }
  getColorForType(type) {
    const colors = {
      success: '#00b09b',
      error: '#ff5f6d',
      warning: '#ffc107',
      info: '#17a2b8'
    };
    return colors[type];
  }
  addAnimations() {
    if (!document.querySelector('#toast-animations')) {
      const style = document.createElement('style');
      style.id = 'toast-animations';
      style.textContent = `
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
  static {
    this.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map