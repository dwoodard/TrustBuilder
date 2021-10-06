"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_ziggy_js"],{

/***/ "./resources/js/ziggy.js":
/*!*******************************!*\
  !*** ./resources/js/ziggy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ziggy": () => (/* binding */ Ziggy)
/* harmony export */ });
var Ziggy = {
  "url": "http:\/\/trustbuilder.test",
  "port": null,
  "defaults": {},
  "routes": {
    "laravelpwa.manifest": {
      "uri": "manifest.json",
      "methods": ["GET", "HEAD"]
    },
    "laravelpwa.": {
      "uri": "offline",
      "methods": ["GET", "HEAD"]
    },
    "login": {
      "uri": "login",
      "methods": ["GET", "HEAD"]
    },
    "logout": {
      "uri": "logout",
      "methods": ["GET", "POST", "HEAD"]
    },
    "register": {
      "uri": "register",
      "methods": ["GET", "HEAD"]
    },
    "password.request": {
      "uri": "password\/reset",
      "methods": ["GET", "HEAD"]
    },
    "password.email": {
      "uri": "password\/email",
      "methods": ["POST"]
    },
    "password.reset": {
      "uri": "password\/reset\/{token}",
      "methods": ["GET", "HEAD"]
    },
    "password.update": {
      "uri": "user\/password",
      "methods": ["PUT"]
    },
    "password.confirm": {
      "uri": "password\/confirm",
      "methods": ["GET", "HEAD"]
    },
    "admin.index": {
      "uri": "admin",
      "methods": ["GET", "HEAD"]
    },
    "admin.dashboard": {
      "uri": "admin\/dashboard",
      "methods": ["GET", "HEAD"]
    },
    "admin.users.index": {
      "uri": "admin\/users",
      "methods": ["GET", "HEAD"]
    },
    "admin.users.create": {
      "uri": "admin\/users\/create",
      "methods": ["GET", "HEAD"]
    },
    "admin.users.store": {
      "uri": "admin\/users",
      "methods": ["POST"]
    },
    "admin.users.show": {
      "uri": "admin\/users\/{user}",
      "methods": ["GET", "HEAD"]
    },
    "admin.users.edit": {
      "uri": "admin\/users\/{user}\/edit",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "user": "id"
      }
    },
    "admin.users.update": {
      "uri": "admin\/users\/{user}",
      "methods": ["PUT", "PATCH"],
      "bindings": {
        "user": "id"
      }
    },
    "admin.users.destroy": {
      "uri": "admin\/users\/{user}",
      "methods": ["DELETE"],
      "bindings": {
        "user": "id"
      }
    },
    "admin.clients.index": {
      "uri": "admin\/clients",
      "methods": ["GET", "HEAD"]
    },
    "admin.clients.create": {
      "uri": "admin\/clients\/create",
      "methods": ["GET", "HEAD"]
    },
    "admin.clients.store": {
      "uri": "admin\/clients",
      "methods": ["POST"]
    },
    "admin.clients.show": {
      "uri": "admin\/clients\/{client}",
      "methods": ["GET", "HEAD"]
    },
    "admin.clients.edit": {
      "uri": "admin\/clients\/{client}\/edit",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "client": "id"
      }
    },
    "admin.clients.update": {
      "uri": "admin\/clients\/{client}",
      "methods": ["PUT", "PATCH"],
      "bindings": {
        "client": "id"
      }
    },
    "admin.clients.destroy": {
      "uri": "admin\/clients\/{client}",
      "methods": ["DELETE"],
      "bindings": {
        "client": "id"
      }
    },
    "admin.invoices.index": {
      "uri": "admin\/invoices",
      "methods": ["GET", "HEAD"]
    },
    "admin.invoices.create": {
      "uri": "admin\/invoices\/create",
      "methods": ["GET", "HEAD"]
    },
    "admin.invoices.store": {
      "uri": "admin\/invoices",
      "methods": ["POST"]
    },
    "admin.invoices.show": {
      "uri": "admin\/invoices\/{invoice}",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "invoice": "id"
      }
    },
    "admin.invoices.edit": {
      "uri": "admin\/invoices\/{invoice}\/edit",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "invoice": "id"
      }
    },
    "admin.invoices.update": {
      "uri": "admin\/invoices\/{invoice}",
      "methods": ["PUT", "PATCH"],
      "bindings": {
        "invoice": "id"
      }
    },
    "admin.invoices.destroy": {
      "uri": "admin\/invoices\/{invoice}",
      "methods": ["DELETE"],
      "bindings": {
        "invoice": "id"
      }
    },
    "admin.projects.index": {
      "uri": "admin\/projects",
      "methods": ["GET", "HEAD"]
    },
    "admin.projects.create": {
      "uri": "admin\/projects\/create",
      "methods": ["GET", "HEAD"]
    },
    "admin.projects.store": {
      "uri": "admin\/projects",
      "methods": ["POST"]
    },
    "admin.projects.show": {
      "uri": "admin\/projects\/{project}",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "project": "id"
      }
    },
    "admin.projects.edit": {
      "uri": "admin\/projects\/{project}\/edit",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "project": "id"
      }
    },
    "admin.projects.update": {
      "uri": "admin\/projects\/{project}",
      "methods": ["PUT", "PATCH"],
      "bindings": {
        "project": "id"
      }
    },
    "admin.projects.destroy": {
      "uri": "admin\/projects\/{project}",
      "methods": ["DELETE"],
      "bindings": {
        "project": "id"
      }
    },
    "admin.documents.index": {
      "uri": "admin\/documents",
      "methods": ["GET", "HEAD"]
    },
    "admin.documents.create": {
      "uri": "admin\/documents\/create",
      "methods": ["GET", "HEAD"]
    },
    "admin.documents.store": {
      "uri": "admin\/documents",
      "methods": ["POST"]
    },
    "admin.documents.show": {
      "uri": "admin\/documents\/{document}",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "document": "id"
      }
    },
    "admin.documents.edit": {
      "uri": "admin\/documents\/{document}\/edit",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "document": "id"
      }
    },
    "admin.documents.update": {
      "uri": "admin\/documents\/{document}",
      "methods": ["PUT", "PATCH"],
      "bindings": {
        "document": "id"
      }
    },
    "admin.documents.destroy": {
      "uri": "admin\/documents\/{document}",
      "methods": ["DELETE"],
      "bindings": {
        "document": "id"
      }
    },
    "admin.client.project.index": {
      "uri": "admin\/client\/{client}\/project\/{project}",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "client": "id",
        "project": "id"
      }
    },
    "admin.client.project.create": {
      "uri": "admin\/client\/{client}\/project\/create",
      "methods": ["GET", "HEAD"],
      "bindings": {
        "client": "id"
      }
    },
    "admin.client.project.store": {
      "uri": "admin\/client\/{client}\/project",
      "methods": ["POST"],
      "bindings": {
        "client": "id"
      }
    },
    "admin.pages": {
      "uri": "admin\/pages\/{slug}",
      "methods": ["GET", "HEAD"]
    },
    "admin.page.create": {
      "uri": "admin\/pages",
      "methods": ["POST"]
    },
    "admin.page.save": {
      "uri": "admin\/pages\/{slug}",
      "methods": ["POST"]
    },
    "admin.page.delete": {
      "uri": "admin\/pages",
      "methods": ["DELETE"]
    },
    "admin.settings": {
      "uri": "admin\/settings",
      "methods": ["GET", "HEAD"]
    },
    "current-user.destroy": {
      "uri": "user",
      "methods": ["DELETE"]
    },
    "user-profile-information.update": {
      "uri": "user\/profile-information",
      "methods": ["PUT"]
    },
    "home": {
      "uri": "\/",
      "methods": ["GET", "HEAD"]
    },
    "dashboard": {
      "uri": "dashboard",
      "methods": ["GET", "HEAD"]
    },
    "profile.show": {
      "uri": "profile",
      "methods": ["GET", "HEAD"]
    },
    "settings.show": {
      "uri": "settings",
      "methods": ["GET", "HEAD"]
    },
    "terms.show": {
      "uri": "terms-of-service",
      "methods": ["GET", "HEAD"]
    },
    "policy.show": {
      "uri": "privacy-policy",
      "methods": ["GET", "HEAD"]
    },
    "page": {
      "uri": "{slug}",
      "methods": ["GET", "HEAD"]
    }
  }
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}



/***/ })

}]);