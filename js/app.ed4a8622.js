(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["actividad"],
  {
    "23d7": function (t, i, a) {
      "use strict";
      (function (t) {
        i["a"] = {
          name: "Actividad",
          data: function () {
            return {
              globalData: t,
            };
          },
        };
      }).call(this, a("c8ba"));
    },

    "3dec": function (t, i, a) {
      "use strict";
      a("963f");
    },

    4298: function (t, i, a) {
      "use strict";
      a.r(i);

      // ========================
      // RENDER PRINCIPAL
      // ========================
      var render = function () {
        var vm = this,
          h = vm.$createElement,
          c = vm._self._c || h;

        return c("div", { staticClass: "curso-main-container introduccion" }, [
          c("BannerInterno"),

          c("div", {
            staticClass: "container tarjeta tarjeta--blanca p-4 p-md-5 mb-5",
          }, [
            vm._m(0),

            c("div", {
              staticClass: "row align-items-center justify-content-center",
            }, [
              vm._m(1),

              c("div", { staticClass: "col-12 col-md-7" }, [
                c("hr", { staticClass: "line-100 bg-orange" }),

                c("div", { staticClass: "text-center p-2" }, [
                  c("h2", [vm._v("¡Pon a prueba tu conocimiento! ")]),

                  vm._m(2),

                  c("a", {
                    staticClass: "styleButton",
                    attrs: {
                      href: vm.obtenerLink("/actividad/index.html"),
                      target: "_blank",
                    },
                  }, [vm._v("Iniciar ")])
                ]),

                c("hr", { staticClass: "line-100 bg-orange" }),
              ]),
            ]),
          ]),
        ]);
      };

      // ========================
      // FUNCIONES ESTÁTICAS
      // ========================
      var staticRenderFns = [
        // Título
        function () {
          var vm = this,
            h = vm.$createElement,
            c = vm._self._c || h;

          return c("div", { staticClass: "titulo-principal" }, [
            c("div", { staticClass: "titulo-principal__numero" }, [
              c("div", { staticClass: "h3" }, [
                c("i", { staticClass: "fas fa-question-circle" }),
              ]),
            ]),
            c("div", { staticClass: "h3" }, [
              vm._v("Actividad didáctica"),
            ]),
          ]);
        },

        // Imagen
        function () {
          var vm = this,
            h = vm.$createElement,
            c = vm._self._c || h;

          return c("div", {
            staticClass: "col-8 col-md-5 col-xl-4 mb-5",
          }, [
            c("figure", [
              c("img", {
                attrs: {
                  src: a("6d6e"),
                },
              }),
            ]),
          ]);
        },

        // Texto descriptivo
        function () {
          var vm = this,
            h = vm.$createElement,
            c = vm._self._c || h;

          return c("p", { staticClass: "mb-4" }, [
            vm._v(
              "La siguiente actividad tiene como propósito validar los conocimientos relacionados con el tema "
            ),
            c("strong", [
              vm._v("La fase de elicitación de requisitos"),
            ]),
            vm._v("."),
          ]);
        },
      ];

      // ========================
      // COMPONENTE
      // ========================
      var script = a("23d7"),
        componentDef = script["a"],
        normalize = a("2877");

      var component = Object(normalize["a"])(
        componentDef,
        render,
        staticRenderFns,
        false,
        null,
        "6cf33a86",
        null
      );

      i["default"] = component.exports;
    },

    // ========================
    // RECURSOS
    // ========================
    "6d6e": function (t, i, a) {
      t.exports = a.p + "img/img_actividad.9efcded1.svg";
    },

    "963f": function (t, i, a) {},
  },
]);
