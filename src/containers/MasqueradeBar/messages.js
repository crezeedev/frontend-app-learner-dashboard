import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  ViewAs: {
    id: 'MasqueradeBar.ViewAs',
    defaultMessage: 'Ver como: ',
    description: 'Etiqueta para "Ver como"',
  },
  ViewingAs: {
    id: 'MasqueradeBar.ViewingAs',
    defaultMessage: 'Viendo como: ',
    description: 'Etiqueta para "Viendo como"',
  },
  SubmitButton: {
    id: 'MasqueradeBar.SubmitButton',
    defaultMessage: 'Enviar',
    description: 'Etiqueta para el botón Enviar',
  },
  StudentNameInput: {
    id: 'MasqueradeBar.StudentNameInput',
    defaultMessage: 'Nombre de usuario o correo electrónico',
    description: 'Etiqueta para el campo de nombre de usuario o correo electrónico',
  },
  NoStudentFound: {
    id: 'MasqueradeBar.NoStudentFound',
    defaultMessage: 'No se encontró ningún estudiante con ese nombre de usuario o correo electrónico',
    description: 'Mensaje de error cuando no se encuentra un estudiante',
  },
  UnknownError: {
    id: 'MasqueradeBar.UnknownError',
    defaultMessage: 'Ocurrió un error desconocido',
    description: 'Mensaje de error cuando ocurre un error desconocido',
  },

});

export default messages;
