# MakeappointmentTest
MakeappointmentTest

# Proyecto de Automatización con Cypress

Este proyecto contiene una serie de pruebas automatizadas desarrolladas con [Cypress](https://www.cypress.io/) para la aplicación de demostración disponible en [Katalon Demo CURA Healthcare](https://katalon-demo-cura.herokuapp.com/).

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. Clona este repositorio en tu máquina local:

   Gitbash
   git clone https://github.com/jmblancor1/MakeappointmentTest.git
   cd tu-repositorio
Instala las dependencias necesarias ejecutando:

  npm install

Estructura del Proyecto

cypress/e2e/forms/appointment-form.feature:Contiene los archivos feature para las pruebas de automatización utilizando Gherkin.
cypress/support/steps-definitions/appointmentStepDefinitions.js: contiene los Steps definitions del feature de las pruebas.
cypress/e2e/forms/appointment-basic-form/appointmentPage.js: Contiene la clase Base de Patron Page Object Model, con todos los metodos requeridos de las pruebas.
cypress/support/commands.js: Incluye comandos personalizados de Cypress.
cypress.config.js: Configuración general del proyecto de Cypress.
chrome-profile: Carpeta utilizada para almacenar el perfil personalizado de Chrome que evita la aparición del popup del Administrador de Contraseñas de Google.

Ejecutar las Pruebas
Para ejecutar las pruebas automatizadas, puedes utilizar los siguientes comandos:
  npx cypress open
Este comando abrirá la interfaz de usuario de Cypress, donde podrás seleccionar y ejecutar las pruebas individualmente.
  npx cypress run

Este comando ejecutará todas las pruebas en modo headless, lo que es útil para la integración continua.

Funcionalidades Clave
Personalización del Perfil de Navegador
Este proyecto utiliza un perfil personalizado de Chrome para evitar la aparición del popup del Administrador de Contraseñas de Google. Este perfil se almacena en la carpeta chrome-profile y se configura en cypress.config.js.

Comandos Personalizados

cy.exceptions(): Maneja excepciones no capturadas durante la ejecución de las pruebas.
cy.selectDate(date): Selecciona una fecha específica en el selector de fecha de la aplicación, asegurando que el año, mes y día se seleccionen correctamente.

Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m 'Añadiendo nueva funcionalidad').
Haz push a la rama (git push origin feature/nueva-funcionalidad).
Crea un Pull Request.
